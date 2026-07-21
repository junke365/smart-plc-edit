#!/usr/bin/env python
# -*- coding: utf-8 -*-

# BitmapLibrary - 使用 Material Symbols Outlined 字体渲染真实图标

import json
import os
import wx

# ---------------------------------------------------------------------------
#  字体初始化
# ---------------------------------------------------------------------------

_FONT_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "fonts", "MaterialSymbolsOutlined.woff2"
)
_MAPPING_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "fonts", "icon_mapping.json"
)

_icon_map = {}
_font = None


def _ensure_font():
    global _font, _icon_map
    if _font is not None:
        return _font

    # 加载码点映射
    if os.path.exists(_MAPPING_PATH):
        with open(_MAPPING_PATH, "r", encoding="utf-8") as f:
            _icon_map = json.load(f)

    # 注册字体文件（Windows）
    try:
        import ctypes
        FR_PRIVATE = 0x10
        FRRM_ADD = 0
        if os.path.exists(_FONT_PATH):
            ctypes.windll.gdi32.AddFontResourceExW(
                _FONT_PATH, FR_PRIVATE, 0
            )
    except Exception:
        pass

    # 创建字体
    nfi = wx.NativeFontInfo()
    nfi.SetFaceName("Material Symbols Outlined")
    nfi.SetPointSize(16)
    _font = wx.Font(nfi)
    return _font


def _get_char(icon_name):
    """图标名 → Unicode 字符"""
    _ensure_font()
    # 先查精确匹配
    cp = _icon_map.get(icon_name)
    if cp is None:
        cp = _icon_map.get(icon_name.upper())
    if cp is None:
        cp = _icon_map.get(icon_name.lower())
    if cp is None:
        return None
    return chr(int(cp, 16))


def _render_icon(char, size, fg, bg=None):
    """用 Material Symbols 字体渲染单个图标到 wx.Bitmap"""
    if bg is None:
        bg = wx.Colour(0x17, 0x1F, 0x33)  # surface-container

    bmp = wx.Bitmap(size, size)
    dc = wx.MemoryDC()
    dc.SelectObject(bmp)
    dc.SetBackground(wx.Brush(bg))
    dc.Clear()

    font = _ensure_font()
    pt_size = max(8, size - 2)
    nfi = wx.NativeFontInfo()
    nfi.SetFaceName("Material Symbols Outlined")
    nfi.SetPointSize(pt_size)
    scaled = wx.Font(nfi)
    dc.SetFont(scaled)
    dc.SetTextForeground(fg)

    tw, th = dc.GetTextExtent(char)
    x = max(0, (size - tw) // 2)
    y = max(0, (size - th) // 2)
    dc.DrawText(char, x, y)

    dc.SelectObject(wx.NullBitmap)
    return bmp


# ---------------------------------------------------------------------------
#  颜色变体
# ---------------------------------------------------------------------------

_COLORS = {
    "primary":       wx.Colour(0xAD, 0xC6, 0xFF),
    "secondary":     wx.Colour(0x4E, 0xDE, 0xA3),
    "tertiary":      wx.Colour(0xFB, 0xAB, 0xFF),
    "error":         wx.Colour(0xFF, 0xB4, 0xAB),
    "muted":         wx.Colour(0xC2, 0xC6, 0xD6),
    "on-primary":    wx.Colour(0x00, 0x2E, 0x6A),
    "on-secondary":  wx.Colour(0x00, 0x38, 0x24),
    "on-surface":    wx.Colour(0xDA, 0xE2, 0xFD),
    "bg":            wx.Colour(0x17, 0x1F, 0x33),
    "bg-low":        wx.Colour(0x13, 0x1B, 0x2E),
    "bg-high":       wx.Colour(0x22, 0x2A, 0x3D),
}

# 每个图标名 → (颜色变体, 默认大小)
_ICON_STYLE = {
    "FUNCTION": ("primary", None),
    "FUNCTION_BLOCK": ("primary", None),
    "FUNCTIONBLOCK": ("primary", None),
    "PROGRAM": ("secondary", None),
    "TRANSITION": ("tertiary", None),
    "ACTION": ("secondary", None),
    "DATATYPE": ("tertiary", None),
    "CONFIGURATION": ("primary", None),
    "RESOURCE": ("primary", None),
    "PROJECT": ("primary", None),
    "DATATYPES": ("tertiary", None),
    "TRANSITIONS": ("tertiary", None),
    "ACTIONS": ("secondary", None),
    "CONFIGURATIONS": ("primary", None),
    "RESOURCES": ("primary", None),
    "PROPERTIES": ("muted", None),
    "VAR_INPUT": ("primary", None),
    "VAR_OUTPUT": ("secondary", None),
    "VAR_INOUT": ("tertiary", None),
    "VAR_LOCAL": ("muted", None),
    "VAR_GLOBAL": ("muted", None),
    "VAR_EXTERNAL": ("muted", None),
    "VAR_TEMP": ("muted", None),
    "LOG_CRITICAL": ("error", None),
    "LOG_WARNING": ("tertiary", None),
    "LOG_INFO": ("primary", None),
    "LOG_DEBUG": ("muted", None),
    "play_arrow": ("secondary", None),
    "stop": ("error", None),
    "save": ("primary", None),
    "settings": ("muted", None),
    "help": ("muted", None),
    "bug_report": ("error", None),
    "build": ("muted", None),
    "delete": ("error", None),
    "undo": ("muted", None),
    "redo": ("muted", None),
    "search": ("muted", None),
    "person": ("muted", None),
    "extension": ("primary", None),
    "debug_instance": ("error", None),
    "reset": ("muted", None),
    "top": ("muted", None),
    "select": ("muted", None),
    "edit": ("primary", None),
    "Clean": ("error", None),
    "Unknown": ("muted", None),
    "IECCDown": ("muted", None),
    "IECCUp": ("muted", None),
    "FILE": ("primary", None),
    "FOLDER": ("primary", None),
}


# ---------------------------------------------------------------------------
#  公开 API
# ---------------------------------------------------------------------------

_BitmapCache = {}


def AddBitmapFolder(path):
    pass


def GetBitmap(bmp_name1, bmp_name2=None, size=None):
    """获取图标位图。兼容旧的 GetBitmap 接口。"""
    if size is None:
        size = 16

    cache_key = (bmp_name1, bmp_name2, size)
    if cache_key in _BitmapCache:
        return _BitmapCache[cache_key]

    _ensure_font()

    bmp = None

    if bmp_name2 is not None:
        # 两个图标的合成
        bmp1 = _GetSingle(bmp_name1, size)
        bmp2 = _GetSingle(bmp_name2, size)
        if bmp1 and bmp2:
            w = bmp1.GetWidth() + bmp2.GetWidth() - 1
            h = max(bmp1.GetHeight(), bmp2.GetHeight())
            bmp = wx.Bitmap(w, h)
            dc = wx.MemoryDC()
            dc.SelectObject(bmp)
            dc.SetBackground(wx.Brush(_COLORS["bg"]))
            dc.Clear()
            dc.DrawBitmap(bmp1, 0, 0, True)
            dc.DrawBitmap(bmp2, bmp1.GetWidth() - 1, 0, True)
            dc.SelectObject(wx.NullBitmap)
        elif bmp1:
            bmp = bmp1
        elif bmp2:
            bmp = bmp2
    else:
        bmp = _GetSingle(bmp_name1, size)

    if bmp is None:
        # 兜底
        bmp = _render_icon("?", size, _COLORS["muted"], _COLORS["bg-high"])

    _BitmapCache[cache_key] = bmp
    return bmp


def _GetSingle(name, size):
    """获取单个图标的位图"""
    _ensure_font()
    char = _get_char(name)
    if char is None:
        char = _get_char(name.upper())
    if char is None:
        return None

    style = _ICON_STYLE.get(name) or _ICON_STYLE.get(name.upper())
    if style:
        fg = _COLORS.get(style[0], _COLORS["primary"])
    else:
        fg = _COLORS["primary"]

    bg = _COLORS["bg"]
    return _render_icon(char, size, fg, bg)


def GetMaterialIcon(icon_name, size=16, color="primary", bg=None):
    """直接获取 Material 图标，指定颜色变体"""
    _ensure_font()
    char = _get_char(icon_name)
    if char is None:
        return None
    fg = _COLORS.get(color, _COLORS["primary"])
    if bg is None:
        bg = _COLORS["bg"]
    return _render_icon(char, size, fg, bg)
