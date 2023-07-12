import flask
from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'
socketio = SocketIO(app)

@app.route("/")
def index():
    template_string = "index.html"# your welcome here socket io
    return flask.render_template(template_string)


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=8080)

# Musicdbaccess