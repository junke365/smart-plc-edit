# Material Design 3 深色主题 - 参考 gui-reference
import wx


class Theme:
    """Material Design 3 深色主题色板 - 从 gui-reference HTML/CSS 提取"""
    
    BACKGROUND = "#0b1326"
    SURFACE = "#0b1326"
    SURFACE_DIM = "#0b1326"
    SURFACE_CONTAINER_LOWEST = "#060e20"
    SURFACE_CONTAINER_LOW = "#131b2e"
    SURFACE_CONTAINER = "#171f33"
    SURFACE_CONTAINER_HIGH = "#222a3d"
    SURFACE_CONTAINER_HIGHEST = "#2d3449"
    SURFACE_BRIGHT = "#31394d"
    SURFACE_VARIANT = "#2d3449"

    PRIMARY = "#adc6ff"
    PRIMARY_CONTAINER = "#4d8eff"
    ON_PRIMARY = "#002e6a"
    ON_PRIMARY_CONTAINER = "#00285d"

    SECONDARY = "#4edea3"
    SECONDARY_CONTAINER = "#00a572"
    ON_SECONDARY = "#003824"
    ON_SECONDARY_CONTAINER = "#00311f"

    TERTIARY = "#fbabff"
    TERTIARY_CONTAINER = "#e14ef6"
    ON_TERTIARY = "#580065"

    ON_SURFACE = "#dae2fd"
    ON_SURFACE_VARIANT = "#c2c6d6"
    ON_BACKGROUND = "#dae2fd"

    OUTLINE = "#8c909f"
    OUTLINE_VARIANT = "#424754"

    ERROR = "#ffb4ab"
    ERROR_CONTAINER = "#93000a"
    ON_ERROR = "#690005"
    ON_ERROR_CONTAINER = "#ffdad6"

    INVERSE_SURFACE = "#dae2fd"
    INVERSE_PRIMARY = "#005ac2"

    _colours = {}

    @classmethod
    def C(cls, hex_color):
        """#RRGGBB -> wx.Colour，带缓存"""
        if hex_color not in cls._colours:
            r = int(hex_color[1:3], 16)
            g = int(hex_color[3:5], 16)
            b = int(hex_color[5:7], 16)
            cls._colours[hex_color] = wx.Colour(r, g, b)
        return cls._colours[hex_color]

    @classmethod
    def ApplyToApp(cls, app):
        pass

    @classmethod
    def ApplyToFrame(cls, frame):
        frame.SetBackgroundColour(cls.C(cls.SURFACE_CONTAINER_HIGH))
        frame.SetForegroundColour(cls.C(cls.ON_SURFACE))

    @classmethod
    def ApplyToPanel(cls, panel, variant="default"):
        bg_map = {
            "default": cls.SURFACE,
            "low": cls.SURFACE_CONTAINER_LOW,
            "high": cls.SURFACE_CONTAINER_HIGH,
            "container": cls.SURFACE_CONTAINER,
            "lowest": cls.SURFACE_CONTAINER_LOWEST,
            "highest": cls.SURFACE_CONTAINER_HIGHEST,
            "bright": cls.SURFACE_BRIGHT,
        }
        panel.SetBackgroundColour(cls.C(bg_map.get(variant, cls.SURFACE_CONTAINER)))
        panel.SetForegroundColour(cls.C(cls.ON_SURFACE))

    @classmethod
    def ApplyToNotebook(cls, notebook):
        notebook.SetBackgroundColour(cls.C(cls.SURFACE_CONTAINER))
        notebook.SetForegroundColour(cls.C(cls.ON_SURFACE))

    @classmethod
    def ApplyToToolBar(cls, toolbar):
        toolbar.SetBackgroundColour(cls.C(cls.SURFACE_CONTAINER_HIGH))
        toolbar.SetForegroundColour(cls.C(cls.ON_SURFACE_VARIANT))

    @classmethod
    def GetFont(cls, size=10, family=wx.FONTFAMILY_SWISS, bold=False):
        info = wx.FontInfo(size).Family(family)
        if bold:
            info = info.Bold()
        return wx.Font(info)

    @classmethod
    def GetCodeFont(cls, size=10):
        return wx.Font(wx.FontInfo(size).Family(wx.FONTFAMILY_TELETYPE))
