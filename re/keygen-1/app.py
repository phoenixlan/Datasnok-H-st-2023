from flask import Flask, request
app = Flask(__name__)

import os

def legal_key(key):
    total = 0
    for character in key:
        print(character)
        total += int(character)

    return total == 20 and len(key) > 10

@app.route('/')
def hello_geek():
    return '<h1>GET /flag/<key> with a correct key to get the flag</h2>'

@app.route('/flag/<key>', methods = ['GET'])
def update_text(key):

    if legal_key(key):
        return "OK: %s" % os.environ.get("FLAG")

    return "BAD"



if __name__ == "__main__":
    app.run(debug=True)

