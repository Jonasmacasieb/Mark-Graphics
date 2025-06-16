# convert_webp.py
from PIL import Image
import os

categories = ['tshirts', 'polos', 'jerseys', 'hoodies']
base_dir = 'public/images'

for category in categories:
    folder = os.path.join(base_dir, category)
    if not os.path.isdir(folder):
        continue
    for filename in os.listdir(folder):
        if filename.lower().endswith('.jpg'):
            jpg_path = os.path.join(folder, filename)
            webp_path = os.path.join(folder, filename.rsplit('.', 1)[0] + '.webp')
            if not os.path.exists(webp_path):  # Avoid duplicates
                try:
                    img = Image.open(jpg_path).convert("RGB")
                    img.save(webp_path, 'webp', quality=80)
                    print(f"✅ Converted: {filename} → {webp_path}")
                except Exception as e:
                    print(f"❌ Error converting {filename}: {e}")
