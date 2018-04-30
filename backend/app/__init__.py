from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_redis import FlaskRedis

from config import Config


app = Flask(__name__)
api = Api(app)

app.config.from_object(Config)

app.debug = True

redis_store = FlaskRedis(app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app.resources.index import Index
from app.resources.application import Applications, Application
from app.resources.applicant import Applicants, Applicant

from app.resources.user import Users
from app.resources.token import Tokens, Token
from app.resources.search import ApplicationSearch
from app.resources.tag import Tags

api.add_resource(Index, '/')

api.add_resource(Applications, '/applications')
api.add_resource(Application, '/applications/<application_id>')

api.add_resource(Applicants, '/applicants')
api.add_resource(Applicant, '/applicants/<applicant_id>')

api.add_resource(Tokens, '/tokens')
api.add_resource(Token, '/tokens/<access_token>')

api.add_resource(Users, '/users')

api.add_resource(ApplicationSearch, '/search/applications')

api.add_resource(Tags, '/tags')
# https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc