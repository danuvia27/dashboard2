import feedparser
from flask import Flask
from flask_cors import CORS, cross_origin
app = Flask(__name__)
FEED_URL="http://status.us.onelogin.com/pages/538511e2ce5cb97537000144/rss"
CORS(app, resources={r"/api/*":{"origins":"*"}})
app.config['CORS HEADERS'] = 'Content-Type'
@app.route("/")
@cross_origin()
def print_news():
   feed = feedparser.parse(FEED_URL)
   article = feed['enteries'][0]
   enteries = feedparser.parse(FEED_URL)['enteries']
   for entry in enteries:
        article.append({
            'id': entry['id'],
            'link': entry['link'],
            'title': entry['title'],
            'summary': entry['summary'],
            'published': entry['published_parsed'],

     })
if __name__ == '__main__':
    app.run(debug=True)

