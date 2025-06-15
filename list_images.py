import os, json, sys

# You can pass in folder via arg or default
folder = sys.argv[1] if len(sys.argv) > 1 else 'public/images/hoodies'

# List image files
files = [f for f in os.listdir(folder) if f.lower().endswith(('.jpg','.png','.jpeg'))]
paths = [f"/images/hoodies/{f}" for f in files]
print(json.dumps(paths))
