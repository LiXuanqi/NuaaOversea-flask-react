#!/usr/bin/env python
# encoding: utf-8

"""
    File name: session.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""

from flask_restful import reqparse

login_parser = reqparse.RequestParser()

login_parser.add_argument(
    'code',
    dest='code',
    type=str,
    location='args',
    required=False,
    help='This is code to get access_token',
)
