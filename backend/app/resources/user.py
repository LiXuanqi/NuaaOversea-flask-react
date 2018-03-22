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
import requests

class Users(Resource):

    def post(self):
        if 'access_token' in session:
            # get user_id by access_token
            response = requests.post('http://127.0.0.1/sso-v2/api/', data={
                'service': 'App.Oauth.GetUserInfo',
                'access_token': session.get('access_token'),
                'types': 'id,name,username,stu_num,email,openid'
            })
            response_data = response.json()['data']
            user_id = response_data['id']
            print(response_data)
            return {
                'success': 'true',
                'username': 'lixuanqi'
            }
        else:
            return {
                'success': 'false'
            }