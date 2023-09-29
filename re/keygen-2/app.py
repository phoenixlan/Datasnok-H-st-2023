from flask import Flask, request
app = Flask(__name__)

import os

def legal_key(key):
    parts = key.split("-")

    for part in parts:
        if len(part) != 8:
            return False

    if len(parts) != 4:
        return False
    
    keys = [
        0xFADEBABE,
        0xDEADBEEF,
        0xF00DBABE,
        0x10011001,
    ]

    result = 0

    for idx, part in enumerate(parts):
        number = int(part, 16)
        value = number ^ keys[idx]
        print(value)
        result += value

    return result == 1337

@app.route('/')
def hello_geek():
    return '<h1>POST /flag with a correct key in the request body to get the flag</h2>'

@app.route('/flag', methods = ['POST'])
def update_text():
    key = request.form['key']

    if legal_key(key):
        return "OK: %s" % os.environ.get("FLAG")

    return "BAD"

if __name__ == "__main__":
    app.run(debug=True)

