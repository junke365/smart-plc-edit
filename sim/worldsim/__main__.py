#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
worldsim-ai 全景仿真平台入口
用法: python -m sim.worldsim [run|list|demo|serve] [场景名]
"""

import os
import sys

_root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
if _root not in sys.path:
    sys.path.insert(0, _root)

import runpy
runpy.run_path(
    os.path.join(_root, "sim", "worldsim", "cli.py"),
    run_name="__main__"
)
