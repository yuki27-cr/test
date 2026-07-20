from PIL import Image, ImageDraw, ImageFont, ImageFilter

WIDTH = 1800
HEIGHT = 1120
OUT = "public/assets/hero-dashboard.png"


def font(size, bold=False):
    candidates = [
        "/System/Library/Fonts/PingFang.ttc",
        "/System/Library/Fonts/STHeiti Light.ttc",
        "/System/Library/Fonts/SFNS.ttf",
        "/Library/Fonts/Arial Unicode.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size=size)
        except OSError:
            continue
    return ImageFont.load_default()


def rounded(draw, xy, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def line(draw, xy, fill, width=1):
    draw.line(xy, fill=fill, width=width)


def text(draw, xy, value, fill, size=24, bold=False, anchor=None):
    draw.text(xy, value, fill=fill, font=font(size, bold), anchor=anchor)


img = Image.new("RGB", (WIDTH, HEIGHT), "#fbfaf7")
draw = ImageDraw.Draw(img)

for y in range(HEIGHT):
    shade = int(251 - 14 * (y / HEIGHT))
    draw.line([(0, y), (WIDTH, y)], fill=(shade, shade - 1, shade - 4))

for x in range(0, WIDTH, 72):
    line(draw, [(x, 0), (x, HEIGHT)], (232, 229, 222), 1)
for y in range(0, HEIGHT, 72):
    line(draw, [(0, y), (WIDTH, y)], (238, 235, 229), 1)

panel = (230, 150, 1570, 930)
rounded(draw, panel, 22, (255, 255, 255), (207, 202, 193), 2)
rounded(draw, (250, 172, 1550, 908), 16, (252, 251, 248), (222, 218, 210), 1)

line(draw, [(250, 232), (1550, 232)], (222, 218, 210), 2)
for i, color in enumerate([(210, 205, 196), (196, 190, 180), (178, 171, 160)]):
    draw.ellipse((280 + i * 22, 196, 292 + i * 22, 208), fill=color)

text(draw, (360, 194), "线作", (28, 28, 27), 26, True)
text(draw, (1448, 201), "第 18 周期", (111, 106, 99), 20, False, "rm")
rounded(draw, (1464, 186, 1524, 216), 15, (237, 247, 241), (137, 196, 162), 1)
text(draw, (1494, 201), "92%", (36, 122, 80), 16, True, "mm")

sidebar = (250, 232, 484, 908)
draw.rectangle(sidebar, fill=(247, 246, 242))
line(draw, [(484, 232), (484, 908)], (222, 218, 210), 2)

nav_items = ["收件箱", "我的事项", "视图", "路线图", "周期", "团队"]
for i, item in enumerate(nav_items):
    y = 282 + i * 54
    active = i == 4
    if active:
        rounded(draw, (278, y - 16, 456, y + 22), 8, (238, 241, 236), (216, 222, 214), 1)
    draw.ellipse((294, y - 3, 300, y + 3), fill=(36, 122, 80) if active else (172, 166, 156))
    text(draw, (316, y - 11), item, (28, 28, 27) if active else (101, 96, 88), 20, active)

text(draw, (278, 676), "团队", (139, 133, 126), 16, True)
for i, item in enumerate(["平台", "设计", "增长"]):
    y = 724 + i * 42
    text(draw, (300, y), item, (101, 96, 88), 18)
    draw.rectangle((280, y + 4, 288, y + 12), fill=[(38, 118, 158), (154, 102, 29), (178, 82, 82)][i])

main = (484, 232, 1550, 908)
text(draw, (538, 286), "第 18 周期", (28, 28, 27), 48, True)
text(draw, (538, 342), "7 月 15 日 - 7 月 29 日", (101, 96, 88), 21)

cards = [
    ("范围", "42 项", (36, 122, 80)),
    ("进度", "92%", (38, 118, 158)),
    ("风险", "低", (154, 102, 29)),
]
for i, (label, value, accent) in enumerate(cards):
    x = 1036 + i * 162
    rounded(draw, (x, 270, x + 142, 354), 10, (255, 255, 255), (222, 218, 210), 1)
    text(draw, (x + 18, 294), label, (139, 133, 126), 16, True)
    text(draw, (x + 18, 326), value, accent, 24, True)

rounded(draw, (538, 390, 930, 812), 12, (255, 255, 255), (222, 218, 210), 1)
text(draw, (568, 430), "事项", (28, 28, 27), 26, True)
rows = [
    ("线-128", "新手引导清单", "开发中", (36, 122, 80)),
    ("线-129", "洞察筛选器", "评审中", (38, 118, 158)),
    ("线-130", "周期范围", "已计划", (154, 102, 29)),
    ("线-131", "负责人流程", "待办", (101, 96, 88)),
]
for i, (key, title, state, color) in enumerate(rows):
    y = 486 + i * 72
    if i == 0:
        rounded(draw, (560, y - 20, 908, y + 32), 8, (242, 241, 237), (216, 212, 204), 1)
    text(draw, (578, y), key, (139, 133, 126), 16, True)
    text(draw, (654, y), title, (38, 38, 36), 18)
    rounded(draw, (790, y - 10, 890, y + 18), 14, (247, 248, 244), color, 1)
    text(draw, (840, y + 4), state, color, 13, True, "mm")

rounded(draw, (966, 390, 1496, 812), 12, (255, 255, 255), (222, 218, 210), 1)
text(draw, (998, 430), "洞察流", (28, 28, 27), 26, True)
text(draw, (998, 474), "发布信心", (101, 96, 88), 18)

chart = (998, 532, 1462, 730)
line(draw, [(chart[0], chart[3]), (chart[2], chart[3])], (210, 205, 196), 2)
for i in range(5):
    y = chart[3] - i * 42
    line(draw, [(chart[0], y), (chart[2], y)], (234, 231, 224), 1)
points = [(1008, 704), (1088, 682), (1168, 640), (1248, 650), (1328, 590), (1410, 548), (1456, 512)]
for i in range(len(points) - 1):
    line(draw, [points[i], points[i + 1]], (36, 122, 80), 5)
for x, y in points:
    draw.ellipse((x - 6, y - 6, x + 6, y + 6), fill=(36, 122, 80))

for i, label in enumerate(["分诊", "开发", "评审"]):
    x = 1000 + i * 154
    rounded(draw, (x, 762, x + 132, 790), 14, (247, 246, 242), (222, 218, 210), 1)
    text(draw, (x + 66, 776), label, (101, 96, 88), 14, True, "mm")

vignette = Image.new("L", (WIDTH, HEIGHT), 0)
vd = ImageDraw.Draw(vignette)
vd.rectangle((0, 0, WIDTH, HEIGHT), fill=255)
vignette = vignette.filter(ImageFilter.GaussianBlur(80))
shade = Image.new("RGB", (WIDTH, HEIGHT), "#ede9df")
img = Image.blend(img, shade, 0.04)

glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse((1080, 180, 1720, 860), fill=(36, 122, 80, 22))
gd.ellipse((620, 520, 1350, 1180), fill=(38, 118, 158, 16))
glow = glow.filter(ImageFilter.GaussianBlur(90))
img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
img.save(OUT, quality=94)
print(OUT)
