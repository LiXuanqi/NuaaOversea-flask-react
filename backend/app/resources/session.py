#!/usr/bin/env python
# encoding: utf-8

"""
    File name: session.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""

from flask_restful import Resource
from flask import session

import requests

from app.utils.parsers.session import login_post_parser, login_get_parser

class Session(Resource):
    def post(self):
        # get code from 'sso-v2'
        args = login_post_parser.parse_args()
        redirect_uri = args['redirect_uri']
        return {'href': '/sso-v2/oauth/12345678?redirect_uri=' + redirect_uri}


    def get(self):
        # code => session
        args = login_get_parser.parse_args()
        code = args['code']
        redirect_uri = args['redirect_uri']

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
            'success': 'true',
            'href': redirect_uri,
            'access_token': access_token,
            'expires_in': expires_in
        }

    def delete(self):
        if 'access_token' in session:
            session.pop('access_token')
            session.pop('expires_in')
            return "Success: logout."
