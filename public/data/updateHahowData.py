import urllib.request
import os
from datetime import datetime
now = datetime.now() # current date and time

urllib.request.urlretrieve('https://api.hahow.in/api/courses/56189df9df7b3d0b005c6639/creations', '程式課程作業.json')
urllib.request.urlretrieve('https://api.hahow.in/api/courses/586fae97a8aae907000ce721/creations', '特效課程作業.json')

os.system("git add 特效課程作業.json")
os.system("git add 程式課程作業.json")
os.system("git commit -m '" + now.strftime("%m/%d/%Y") +" Update Hahow Data'")
os.system("echo " + now.strftime("%m/%d/%Y %H:%M:%S"))
os.system("git push origin master")