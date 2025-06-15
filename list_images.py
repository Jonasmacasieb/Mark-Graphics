# list_images.py
import os, sys, json

category = sys.argv[1] if len(sys.argv) > 1 else 'hoodies'
folder = f'public/images/{category}'

if not os.path.isdir(folder):
    print(json.dumps([]))
    exit()

# Include .webp images
valid_extensions = ('.jpg', '.jpeg', '.png', '.webp')
images = [f for f in os.listdir(folder) if f.lower().endswith(valid_extensions)]

# Return image path and product name (without extension)
data = [{"image": f"/images/{category}/{f}", "name": os.path.splitext(f)[0].replace('_', ' ').capitalize()} for f in images]

print(json.dumps(data))
