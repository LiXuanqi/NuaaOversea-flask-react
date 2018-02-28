from flask_restful import Resource
from flask import session
class Index(Resource):
    def get(self):
        if 'access_token' in session:
            return "Hello, world"+session.get('access_token')
        else:
            return "not login."