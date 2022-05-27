import feedparser
from flask import Flask ,jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app, resources={r"/api/*":{"origins":"*"}})
app.config['CORS HEADERS'] = 'Content-Type'
URLS = ('https://azurestatuscdn.azureedge.net/en-us/status/feed/')
@app.route("/feed", methods=['GET'])
@cross_origin()

def get_feeds():
    feed = feedparser.parse(URLS)
    first_article = feed['entries'][0]
    
    return jsonify(title=first_article.title,
         link=first_article.link, 
         updated=first_article.updated, 
         description= first_article.description,
         id= first_article.id) 
         
if __name__ == '__main__':
    app.run(debug=True)
