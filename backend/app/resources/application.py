#!/usr/bin/env python
# encoding: utf-8

"""
    File name: application.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""

from flask_restful import Resource, request, marshal_with

from app.handler.application import get_all_applications, create_application
from app.handler.application import get_application_by_id, update_application, rm_application

from app.utils.fields.common import pt_fields, deleted_fields
from app.utils.fields.application import applications_fields, application_detail_fields

from app.utils.parsers.application import application_post_parser, application_put_parser

class Applications(Resource):
    @marshal_with(applications_fields)
    def get(self):
        applications = get_all_applications()
        return {'applications': applications}

    @marshal_with(pt_fields)
    def post(self):
        application_args = application_post_parser.parse_args()
        result = create_application(
            application_args.country,
            application_args.university,
            application_args.major,
            application_args.term,
            application_args.result,
            application_args.user_id,
            application_args.apply_time,
            application_args.result_time,
        )
        return result

class Application(Resource):
    @marshal_with(application_detail_fields)
    def get(self, application_id):
        return get_application_by_id(application_id)

    # TODO: update the application.
    @marshal_with(pt_fields)
    def put(self, application_id):
        application_args = application_put_parser.parse_args()
        result = update_application()
        return result

    @marshal_with(deleted_fields)
    def delete(self, application_id):
        result = rm_application(application_id)
        return result