# list_images.py
import os, sys, json

category = sys.argv[1] if len(sys.argv) > 1 else 'hoodies'
folder = f'public/images/{category}'

if not os.path.isdir(folder):
    print(json.dumps([]))
    exit()

images = [f for f in os.listdir(folder) if f.lower().endswith(('.jpg', '.png', '.jpeg'))]
data = [{"image": f"/images/{category}/{f}", "name": f.split('.')[0]} for f in images]
print(json.dumps(data))
