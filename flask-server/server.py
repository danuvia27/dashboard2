import feedparser
import requests
import json
from flask import Flask ,jsonify, render_template
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app, resources={r"/api/*":{"origins":"*"}})
app.config['CORS HEADERS'] = 'Content-Type' 
URLS =['https://status.ui.com/history.rss',
'http://status.us.onelogin.com/pages/538511e2ce5cb97537000144/rss', 'https://azurestatuscdn.azureedge.net/en-us/status/feed/']


@app.route("/feed", methods=['POST','GET'])
@cross_origin()

def get_feeds_ui():
    feed = feedparser.parse(URLS[0])
    first_article = feed['entries'][0]
    
    return jsonify(title=first_article.title,
         link=first_article.link, 
         updated=first_article.updated)

@app.route("/feed_ol", methods=['POST','GET'])
@cross_origin()
def get_feeds_ol():
    feed = feedparser.parse(URLS[1])  
    first_article = feed['entries'][0]

    return jsonify(title=first_article.title,
    link=first_article.link,
    updated=first_article.updated)


@app.route("/json_data", methods=['POST','GET'])
@cross_origin()
def json_data():
   req = requests.get('http://status.aws.amazon.com/data.json')
   data = json.loads(req.content)
   return  render_template('test.json',
    data=json.dumps({ 'service_name': data['archive'][0]['service_name'],
    'date': data['archive'][0]['date'], 'summary': data['archive'][0]['summary']

    }))

@app.route("/azure_data", methods=['POST','GET'])
@cross_origin()
def azure_data():
    feed = feedparser.parse(URLS[2])  
    Item = feed['feed']

    return jsonify(title=Item.title,
    link=Item.link,
    updated=Item.updated)


   
   
  

  
  
   

  

if __name__ == '__main__':
    app.run(debug=True)






