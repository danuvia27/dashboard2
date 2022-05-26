import feedparser
from flask import Flask ,jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app, resources={r"/api/*":{"origins":"*"}})
app.config['CORS HEADERS'] = 'Content-Type'
URLS = ("https://status.ui.com/history.rss")
@app.route("/feed", methods=['GET'])
@cross_origin()

def get_feeds():
    feed = feedparser.parse(URLS)
    first_article = feed['entries'][0]
    
    return jsonify(title=first_article.title,
         summary=first_article.summary,
         link=first_article.link, 
         updated=first_article.updated)    
         
if __name__ == '__main__':
    app.run(debug=True)

