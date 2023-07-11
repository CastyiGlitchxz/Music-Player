import flask
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    template_string = "index.html"
    return flask.render_template(template_string)

app.run(debug=True, host='0.0.0.0')