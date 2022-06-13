import feedparser
import requests
import json
from flask import Flask ,jsonify, render_template
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app, resources={r"/api/*":{"origins":"*"}})
app.config['CORS HEADERS'] = 'Content-Type' 
URLS =['https://status.ui.com/history.rss',
'http://status.us.onelogin.com/pages/538511e2ce5cb97537000144/rss']

data = "http://status.aws.amazon.com/data.json"

@app.route("/feed", methods=['POST','GET'])
@cross_origin()

def get_feeds_ui():
    feed = feedparser.parse(URLS[0])
    first_article = feed['entries'][0]
    
    return jsonify(title=first_article.title,
         link=first_article.link, 
         updated=first_article.updated)

@app.route("/feed_ol", methods=['POST','GET'])
def get_feeds_ol():
    feed = feedparser.parse(URLS[1])  
    first_article = feed['entries'][0]

    return jsonify(title=first_article.title,
    link=first_article.link,
    updated=first_article.updated)



@app.route("/json_data", methods=['POST','GET'])
def json_data():
    req = requests.get('http://status.aws.amazon.com/data.json')
    data = json.loads(req.content)
    return  render_template('index.html', data=data)
   
  

if __name__ == '__main__':
    app.run(debug=True)






