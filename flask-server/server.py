import feedparser
from flask import Flask
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app, resources={r"/api/*":{"origins":"*"}})
app.config['CORS HEADERS'] = 'Content-Type'
URL_FEED ="http://status.us.onelogin.com/pages/538511e2ce5cb97537000144/rss"
@app.route("/")
@cross_origin()

def get_feed():
    feed = feedparser.parse(URL_FEED)
    first_article =feed['entries'][0]
    return """<html>
    <body>  
           <h1>OneLogin Issues<h1>
           <b>{0}<b> <br />
           <i>{1}<i> <br />
           <b>{2}<b> <br />
    </body>
    </html>""".format(first_article.get("title"),
    first_article.get("link"),
    first_article.get("updated"))      
   
        
         

           
    

if __name__ == '__main__':
    app.run(debug=True)

