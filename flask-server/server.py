import feedparser
from flask import Flask
from flask_cors import CORS, cross_origin
app = Flask(__name__)
FEED_URL="http://status.us.onelogin.com/pages/538511e2ce5cb97537000144/rss"
CORS(app, resources={r"/api/*":{"origins":"*"}})
app.config['CORS HEADERS'] = 'Content-Type'
@app.route("/titles")
@cross_origin()

def titles():
    return {"title": ["title1", "title2", "title3"]}
    

if __name__ == '__main__':
    app.run(debug=True)

