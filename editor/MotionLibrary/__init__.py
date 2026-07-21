#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
MotionLibrary - PLCopen Motion Control Library support module

Provides:
- AxisXSD: XSD schema attributes for CiA402 axis configuration
- Headers: C header include directives for motion control runtime
"""

# CiA402 轴配置参数的 XSD 属性定义
# 这些属性会附加到 CiA402 从站的配置界面
AxisXSD = """
          <xsd:attribute name="HomingMethod" type="xsd:int"
                         use="optional" default="35"/>
          <xsd:attribute name="HomingVelocity" type="xsd:float"
                         use="optional" default="1000.0"/>
          <xsd:attribute name="HomingAcceleration" type="xsd:float"
                         use="optional" default="5000.0"/>
          <xsd:attribute name="MaxVelocity" type="xsd:float"
                         use="optional" default="10000.0"/>
          <xsd:attribute name="MaxAcceleration" type="xsd:float"
                         use="optional" default="20000.0"/>
          <xsd:attribute name="MaxDeceleration" type="xsd:float"
                         use="optional" default="20000.0"/>
          <xsd:attribute name="EncoderCounts" type="xsd:int"
                         use="optional" default="10000"/>
          <xsd:attribute name="SoftwareLimitPos" type="xsd:float"
                         use="optional" default="999999.0"/>
          <xsd:attribute name="SoftwareLimitNeg" type="xsd:float"
                         use="optional" default="-999999.0"/>
"""

# C 头文件包含指令，会插入到生成的 C 代码中
Headers = '#include "plc_motion_control.h"\n'
