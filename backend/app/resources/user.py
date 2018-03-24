#!/usr/bin/env python
# encoding: utf-8

"""
    File name: user.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""
from flask_restful import Resource
from flask import session

from app.models import User
from app import db

import requests

class Users(Resource):

    def post(self):
        if 'access_token' in session:
            # get user_id by access_token
            response = requests.post('http://127.0.0.1/sso-v2/api/', data={
                'service': 'App.Oauth.GetUserInfo',
                'access_token': session.get('access_token'),
                'types': 'id,name,username,stu_num'
            })
            response_data = response.json()['data']
            user_id = response_data['id']
            name = response_data['name']
            username = response_data['username']
            stu_num = response_data['stu_num']

            # get user_info by id.
            user = User.query.filter_by(id=user_id).first()
            if user is None:
                new_user = User(
                    id = user_id,
                    username = username,
                    role = 'student',
                )
                db.session.add(new_user)
                db.session.commit()

            user = User.query.filter_by(id=user_id).first()
            print(user)
            # TODO：format the return data by marshal_with().
            return {
                'success': 'true',
                'user_id': user_id,
                'name': name,
                'username': username,
                'stu_num': stu_num,
                'role': user.role
            }
        else:
            return {
                'success': 'false'
            }