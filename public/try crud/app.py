
from flask import Flask, request, render_template, redirect, url_for, send_from_directory, jsonify
import os
from PIL import Image

# Define base paths
BASE_DIR = os.path.abspath(os.path.dirname(__file__))  # public/try crud/
IMAGE_FOLDER = os.path.abspath(os.path.join(BASE_DIR, '..', 'images'))  # public/images

# Flask app
app = Flask(__name__, static_folder=os.path.abspath(os.path.join(BASE_DIR, '..')), template_folder=os.path.join(BASE_DIR, 'templates'))

# Categories
CATEGORIES = ['tshirts', 'polos', 'jerseys', 'hoodies']

# Ensure folders exist
for category in CATEGORIES:
    os.makedirs(os.path.join(IMAGE_FOLDER, category), exist_ok=True)

@app.route('/')
def index():
    files_by_category = {}
    for category in CATEGORIES:
        folder = os.path.join(IMAGE_FOLDER, category)
        files = os.listdir(folder)
        files_by_category[category] = files
    return render_template('index.html', files_by_category=files_by_category, categories=CATEGORIES)

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files.get('file')
    category = request.form.get('category')

    if not file or category not in CATEGORIES:
        return "Invalid upload", 400

    filename = file.filename
    name, ext = os.path.splitext(filename)
    ext = ext.lower()

    # Save WebP if it's a JPG or JPEG
    if ext in ['.jpg', '.jpeg']:
        image = Image.open(file.stream)
        webp_filename = name + '.webp'
        save_path = os.path.join(IMAGE_FOLDER, category, webp_filename)
        image.save(save_path, 'webp')
    else:
        # Save original
        save_path = os.path.join(IMAGE_FOLDER, category, filename)
        file.save(save_path)

    return redirect(url_for('index'))

@app.route('/delete/<category>/<filename>', methods=['POST'])
def delete_file(category, filename):
    if category not in CATEGORIES:
        return "Invalid category", 400
    file_path = os.path.join(IMAGE_FOLDER, category, filename)
    if os.path.exists(file_path):
        os.remove(file_path)
    return redirect(url_for('index'))

@app.route('/images/<category>/<filename>')
def uploaded_file(category, filename):
    return send_from_directory(os.path.join(IMAGE_FOLDER, category), filename)

@app.route('/api/products/<category>')
def get_images_by_category(category):
    if category not in CATEGORIES:
        return jsonify({'error': 'Invalid category'}), 400

    folder_path = os.path.join(IMAGE_FOLDER, category)
    files = os.listdir(folder_path)
    image_urls = [
        f"/images/{category}/{file}" for file in files
        if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.webp'))
    ]
    return jsonify(image_urls)

if __name__ == '__main__':
    app.run(debug=True)
