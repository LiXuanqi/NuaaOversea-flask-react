from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from config import Config

from app.resources.index import Index

app = Flask(__name__)
api = Api(app)

app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

api.add_resource(Index, '/')


