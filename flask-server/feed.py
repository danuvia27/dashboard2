#!/opt/anaconda3/bin/python
import feedparser 

def parse(url):
    return feedparser.parse(url)

def get_source(parsed):
    feed = parsed['feed']
    return {
        'title': feed['title'],
         'title_detail': feed['title_detail'],
    }

def get_articles(parsed):
    articles = []
    entries = parsed['entries']
    for entry in entries:
        articles.append({
            'id': entry['id'],
            'link': entry['link'],
            'title': entry['title'],
            'summary': entry['summary'],
            'published': entry['published_parsed'],

        })
    return articles



