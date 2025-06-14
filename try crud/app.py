from flask import Flask,jsonify, request, render_template, redirect, url_for, send_from_directory

import os

app = Flask(__name__)
BASE_FOLDER = 'images'  # New base folder name
CATEGORIES = ['tshirts', 'polos', 'jerseys', 'hoodies']

# Create image/category folders if they don't exist
for category in CATEGORIES:
    os.makedirs(os.path.join(BASE_FOLDER, category), exist_ok=True)

@app.route('/')
def index():
    files_by_category = {}
    for category in CATEGORIES:
        path = os.path.join(BASE_FOLDER, category)
        files = os.listdir(path)
        files_by_category[category] = files
    return render_template('index.html', files_by_category=files_by_category, categories=CATEGORIES)

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    category = request.form['category']

    if category not in CATEGORIES:
        return "Invalid category", 400

    if file.filename != '':
        file_path = os.path.join(BASE_FOLDER, category, file.filename)
        file.save(file_path)
    return redirect(url_for('index'))

@app.route('/delete/<category>/<filename>', methods=['POST'])
def delete_file(category, filename):
    if category not in CATEGORIES:
        return "Invalid category", 400

    file_path = os.path.join(BASE_FOLDER, category, filename)
    if os.path.exists(file_path):
        os.remove(file_path)
    return redirect(url_for('index'))




@app.route('/images/<category>/<filename>')
def uploaded_file(category, filename):
    return send_from_directory(os.path.join(BASE_FOLDER, category), filename)


if __name__ == '__main__':
    app.run(debug=True)
