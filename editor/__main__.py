#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
smart-plc-edit 编辑态入口
用法: python -m editor [项目目录]
"""

import os
import sys

# 将项目根目录加入 sys.path
_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _root not in sys.path:
    sys.path.insert(0, _root)

# ide_app.py 是以脚本方式运行的，需要执行其模块级代码
import runpy
runpy.run_path(
    os.path.join(_root, "editor", "app", "ide_app.py"),
    run_name="__main__"
)
