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

class Users(Resource):

    def post(self):
        if 'access_token' in session:
            return {
                'success': 'true',
                'username': 'lixuanqi'
            }
        else:
            return {
                'success': 'false'
            }