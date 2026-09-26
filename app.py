from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/quiz")
def quiz():
    return render_template("quiz.html")


@app.route("/memories")
def memories():
    return render_template("memories.html")


@app.route("/surprise")
def surprise():
    return render_template("surprise.html")


if __name__ == "__main__":
    app.run(debug=True)