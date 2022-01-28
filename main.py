from flask import Flask, render_template, url_for, request, jsonify, json
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/')
def my_form():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)