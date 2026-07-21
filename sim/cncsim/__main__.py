#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
smart-plc-cncsim 单设备CNC仿真器入口
用法: python -m sim.cncsim [G代码文件]
"""

import os
import sys

_root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
if _root not in sys.path:
    sys.path.insert(0, _root)

import runpy
runpy.run_path(
    os.path.join(_root, "sim", "cncsim", "app.py"),
    run_name="__main__"
)
