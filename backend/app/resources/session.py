#!/usr/bin/env python
# encoding: utf-8

"""
    File name: session.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""

from flask_restful import Resource, marshal_with
from flask import session

import requests

from app.utils.parsers.session import login_parser

class Session(Resource):
    def get(self):
        login_args = login_parser.parse_args()
        code = login_args['code']
        # code: 'fb501daf593df469e4ff64ba4816b811'
        response = requests.post('http://127.0.0.1/sso-v2/api/', data={
            'service': 'App.Oauth.GetAccessToken',
            'appid': '12345678',
            'appsecret': '12345678',
            'code': code
        })
        response_data = response.json()['data']
        access_token = response_data['access_token']
        expires_in = response_data['expires_in']
        session['access_token'] = access_token
        session['expires_in'] = expires_in
        # TODO: control the expire time of session.
        # TODO: should return the matched user info.
        return response.json()['data']

    def delete(self):
        if 'access_token' in session:
            session.pop('access_token')
            session.pop('expires_in')
            return "Success: logout."
