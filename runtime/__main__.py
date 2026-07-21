#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
smart-plc-edit 运行时入口
用法: python -m runtime [选项] [工作目录]
"""

import os
import sys

# 将项目根目录加入 sys.path
_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _root not in sys.path:
    sys.path.insert(0, _root)

# Beremiz_service.py 是以脚本方式运行的，需要执行其模块级代码
import runpy
runpy.run_path(
    os.path.join(_root, "runtime", "app", "runtime_service.py"),
    run_name="__main__"
)
