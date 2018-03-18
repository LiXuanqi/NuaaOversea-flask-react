#!/usr/bin/env python
# encoding: utf-8

"""
    File name: application.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""


from flask_restful import reqparse
# -------- applications get parser --------
applications_get_parser = reqparse.RequestParser()

applications_get_parser.add_argument(
    'applicant_id',
    dest='applicant_id',
    type=str,
    location='args',
    required=False,
)
applications_get_parser.add_argument(
    'university',
    dest='university',
    type=str,
    location='args',
    required=False,
)
# -------- application add parser --------
application_post_parser = reqparse.RequestParser()

application_post_parser.add_argument(
    'country',
    dest='country',
    type=str,
    location='args',
    required=True,
)

application_post_parser.add_argument(
    'university',
    dest='university',
    type=str,
    location='args',
    required=True,
)

application_post_parser.add_argument(
    'major',
    dest='major',
    type=str,
    location='args',
    required=True,
)

application_post_parser.add_argument(
    'term',
    dest='term',
    type=str,
    location='args',
    required=True,
)

application_post_parser.add_argument(
    'result',
    dest='result',
    type=str,
    location='args',
    required=True,
)

application_post_parser.add_argument(
    'applicant_id',
    dest='applicant_id',
    type=str,
    location='args',
    required=True,
)

application_post_parser.add_argument(
    'apply_time',
    dest='apply_time',
    type=str,
    location='args',
    required=False,
)

application_post_parser.add_argument(
    'result_time',
    dest='result_time',
    type=str,
    location='args',
    required=False,
)

# -------- application update parser --------
application_put_parser = reqparse.RequestParser()
