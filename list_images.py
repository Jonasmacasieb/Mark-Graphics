# list_images.py
import os, json

category = 'hoodies'  # or use sys.argv to support dynamic
folder = f'public/images/{category}'

files = [f for f in os.listdir(folder) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
data = [{"image": f"/images/{category}/{f}", "name": f.split('.')[0]} for f in files]
print(json.dumps(data))
