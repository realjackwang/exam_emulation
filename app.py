from flask import Flask, render_template
from flask_bootstrap import Bootstrap5
import time

app = Flask(__name__)
bootstrap = Bootstrap5(app)


@app.route('/')
def hello_world():  # put application's code here
    data = time.time() * 1000 + 6000
    return render_template('base.html', data=0)


if __name__ == '__main__':
    app.run()
