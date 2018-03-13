#!/usr/bin/env python
# encoding: utf-8

"""
    File name: application.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""

from flask_restful import fields

# for get /applications

# TODO: complete the response format for 'get /applications'.
application_single_fields = {
    'id': fields.String,
    'country': fields.String,
    'university': fields.String,
    'major': fields.String,
    'term': fields.String,
    'result': fields.String,
    'apply_time': fields.DateTime,
    'result_time': fields.DateTime,
    'name': fields.String(attribute='applicant.name'),
    # TODO: format the remaining data of applicant to user.
}

applications_fields = {
    'applications': fields.List(fields.Nested(application_single_fields))
}

# TODO: repeat with #18 'application_single_fields'
# for get /application/<application_id>
application_detail_fields = {
    'id': fields.String,
    'country': fields.String,
    'university': fields.String,
    'major': fields.String,
    'term': fields.String,
    'result': fields.String,
    'apply_time': fields.DateTime,
    'result_time': fields.DateTime,
}