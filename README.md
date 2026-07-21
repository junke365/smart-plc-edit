# smart-plc-edit

智能 PLC 编辑器 — 基于 Beremiz 源码重构，分离编辑态与运行时

## 项目简介

smart-plc-edit 是一个 IEC 61131-3 PLC 集成开发环境，从 Beremiz 源码完全重构而来。项目将编辑态（IDE）和运行时（Runtime）彻底分离，支持单设备 CNC 仿真和全景数字孪生仿真。

## 技术栈

- **编辑器 GUI**: wxPython（沿用 Beremiz）
- **CNC 仿真**: PySide6 + PyOpenGL
- **全景仿真**: FastAPI + React + Three.js
- **PLC 运行时**: Python + C（ctypes 动态加载）
- **通信协议**: eRPC

## 目录结构

```
smart-plc-edit/
├── editor/              # 编辑态（IDE）
│   ├── __main__.py      # python -m editor
│   ├── app/             # 应用入口
│   ├── core/            # 核心控制器
│   ├── gui/             # GUI 框架
│   ├── graphics/        # 图形绘制
│   ├── plcopen/         # PLCOpen 数据模型
│   └── targets/         # 编译目标
│
├── runtime/             # 运行时（独立进程）
│   ├── __main__.py      # python -m runtime
│   ├── app/             # 运行时入口
│   ├── core/            # PLCObject/Worker
│   ├── server/          # eRPC 服务
│   ├── c_runtime/       # C 运行时
│   └── extensions/      # 扩展模块
│
├── shared/              # 共享模块
├── connectors/          # 连接器
├── sim/                 # 仿真模块
│   ├── cncsim/          # 单设备 CNC 仿真
│   └── worldsim/        # 全景数字孪生仿真
├── util/                # 工具模块
└── locale/              # 国际化
```

## 启动方式

### 编辑态（IDE）

```bash
cd smart-plc-edit
python -m editor [项目目录]
```

### 运行时

```bash
cd smart-plc-edit
python -m runtime -p 3000 -i 127.0.0.1 [工作目录]
```

参数说明：
- `-p port`: 端口号（默认 3000）
- `-i interface`: 绑定地址（默认 127.0.0.1）
- `-x 0/1`: 禁用/启用任务栏图标
- `-a 0/1`: 禁用/启用自动启动
- `-n name`: 服务名称

### CNC 仿真

```bash
cd smart-plc-edit
python -m sim.cncsim [G代码文件]
```

### 全景仿真

```bash
cd smart-plc-edit
python -m sim.worldsim serve          # 启动 API 服务器
python -m sim.worldsim demo           # 运行演示场景
python -m sim.worldsim list           # 列出所有场景
python -m sim.worldsim run <场景名>   # 运行指定场景
```

## 安装依赖

```bash
# 基础依赖（编辑态）
pip install wxPython

# CNC 仿真依赖
pip install PySide6 PyOpenGL PyOpenGL_accelerate numpy

# 全景仿真依赖
pip install fastapi uvicorn numpy scipy pyyaml

# 可选依赖
pip install torch gymnasium stable-baselines3  # AI/ML
pip install paho-mqtt                          # MQTT 支持
pip install shapely                            # GIS 支持
```

## 项目修复说明

### 1. 目录结构重构

原 Beremiz 将编辑态和运行时代码混在一起，本项目将其分离：

| 原路径 | 新路径 | 说明 |
|--------|--------|------|
| `BeremizIDE.py` | `editor/app/BeremizIDE.py` | IDE 入口 |
| `PLCOpenEditor.py` | `editor/app/PLCOpenEditor.py` | 轻量 PLC 编辑器 |
| `IDEFrame.py` | `editor/gui/frames/IDEFrame.py` | 主窗口框架 |
| `PLCControler.py` | `editor/core/PLCControler.py` | PLC 控制器 |
| `ProjectController.py` | `editor/core/ProjectController.py` | 项目控制器 |
| `editors/` | `editor/gui/editors/` | 编辑器组件 |
| `controls/` | `editor/gui/controls/` | UI 控件 |
| `dialogs/` | `editor/gui/dialogs/` | 对话框 |
| `graphics/` | `editor/graphics/` | 图形绘制 |
| `plcopen/` | `editor/plcopen/` | PLCOpen 数据模型 |
| `targets/` | `editor/targets/` | 编译目标 |
| `runtime/` | `runtime/core/` + `runtime/server/` | 运行时核心 |
| `Beremiz_service.py` | `runtime/app/Beremiz_service.py` | 运行时入口 |
| `connectors/` | `connectors/` | 连接器 |
| `util/` | `util/` | 工具模块 |

### 2. Import 路径修复

所有 Python 文件的 import 路径已批量更新：

| 旧 import | 新 import |
|-----------|-----------|
| `from editors.xxx` | `from editor.gui.editors.xxx` |
| `from controls.xxx` | `from editor.gui.controls.xxx` |
| `from dialogs.xxx` | `from editor.gui.dialogs.xxx` |
| `from graphics.xxx` | `from editor.graphics.xxx` |
| `from plcopen.xxx` | `from editor.plcopen.xxx` |
| `from PLCControler` | `from editor.core.PLCControler` |
| `from IDEFrame` | `from editor.gui.frames.IDEFrame` |
| `from runtime.xxx` | `from runtime.core.xxx` 或 `runtime.server.xxx` |
| `from runtime.typemapping` | `from shared.types_mapping` |
| `from runtime.loglevels` | `from shared.loglevels` |
| `from erpc_interface.xxx` | `from connectors.erpc_interface.xxx` |

### 3. Runtime 重新导出

`runtime/__init__.py` 做了重新导出，使 `from runtime.xxx` 仍可工作，同时实际文件在 `runtime/core/` 和 `runtime/server/` 子目录。

### 4. 仿真模块集成

两个独立仿真项目按模块集成到 `sim/` 目录：

- **smart-plc-cncsim**: 单设备 CNC/机器人仿真器
  - 支持 G 代码（RS274NGC）和 ABB RAPID
  - 11 种运动学模型（SCARA、Delta、PUMA 560 等）
  - PySide6 + PyOpenGL 3D 可视化

- **worldsim-ai**: AI 驱动的数字孪生仿真平台
  - 离散时间步进仿真引擎
  - 4 种智能体、8 种预定义场景
  - FastAPI + React 全栈架构
  - 支持 MQTT/REST IoT 数据采集

### 5. 删除旧 images 目录

原 Beremiz 的 `images/` 目录已删除，不再使用旧的图标资源。

## 开发指南

### 添加新编辑器

1. 在 `editor/gui/editors/` 创建新文件
2. 使用 `from editor.gui.editors.xxx import Xxx` 引用
3. 在 `editor/gui/frames/IDEFrame.py` 中注册

### 添加新运行时扩展

1. 在 `runtime/extensions/` 创建子目录
2. 实现扩展接口
3. 在 `runtime/core/__init__.py` 中注册

### 添加新仿真场景

1. 在 `sim/worldsim/scenarios/definitions.py` 中定义场景配置
2. 使用 `python -m sim.worldsim run <场景名>` 测试

## 许可证

MIT License
