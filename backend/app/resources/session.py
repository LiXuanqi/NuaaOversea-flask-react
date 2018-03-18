#!/usr/bin/env python
# encoding: utf-8

"""
    File name: session.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""

from flask_restful import Resource, marshal_with
from flask import session, redirect

import requests

from app.utils.parsers.session import login_parser

class Session(Resource):
    def get(self):
        login_args = login_parser.parse_args()
        code = login_args['code']

        if code is not None:
            print(code)
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
            return {
                'access_token': access_token,
                'expires_in': expires_in
            }
        if 'user_info' in session:
            # TODO: get the info from session.
            return "User Information. "
        else:
            return {'href': '/sso-v2/oauth/12345678?redirect_uri=/api/session'}
            # href: /sso-v2/oauth/12345678?redirect_uri=/office-v2/login

            # User
            # response = requests.post('http://127.0.0.1/sso-v2/api/', data={
            #     'service': 'App.User.Login',
            #     'type': 'nuaa',
            #     'username': '041500914',
            #     'password': 'St241319'
            # })
            # print(response.json())
            #
            # response = requests.post('http://127.0.0.1/sso-v2/api/', data={
            #     'service': 'App.Oauth.Authorize',
            #     'appid': '12345678'
            # })
            # print(response.json())
        # response = requests.post('http://127.0.0.1/sso-v2/api/', data={
        #     'service': 'App.Oauth.GetAccessToken',
        #     'appid': '12345678',
        #     'appsecret': '12345678',
        #     'code': code
        # })
        # response_data = response.json()['data']
        # access_token = response_data['access_token']
        # expires_in = response_data['expires_in']
        session['access_token'] = '123'
        # session['expires_in'] = expires_in
        # TODO: control the expire time of session.
        # TODO: should return the matched user info.

    def delete(self):
        if 'access_token' in session:
            session.pop('access_token')
            session.pop('expires_in')
            return "Success: logout."
