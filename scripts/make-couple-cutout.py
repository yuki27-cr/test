from PIL import Image, ImageDraw, ImageFilter

src = Image.open('public/assets/studio-full.jpg').convert('RGBA')
w, h = src.size
pts = [(570,144),(625,135),(675,160),(700,205),(690,255),(735,235),(735,195),(785,173),(835,185),(875,225),(900,290),(925,375),(950,470),(1010,590),(1160,770),(1510,930),(1585,1005),(1540,1095),(1430,1135),(1220,1145),(1000,1140),(835,1130),(660,1125),(505,1110),(475,1045),(492,910),(505,780),(490,650),(500,525),(490,440),(500,315),(535,265),(550,215)]
mask = Image.new('L', (w,h), 0)
d = ImageDraw.Draw(mask)
d.polygon(pts, fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(2.2))
out = src.copy()
out.putalpha(mask)
bbox = mask.getbbox()
out = out.crop((bbox[0]-18,bbox[1]-18,bbox[2]+18,bbox[3]+18))
out.save('public/assets/couple-cutout.png', optimize=True)
