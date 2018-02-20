#!/usr/bin/env python
# encoding: utf-8

"""
    File name: application.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""

from flask_restful import Resource, request, marshal_with

from app.handler.application import get_all_applications
from app.handler.application import get_application_by_id

from app.utils.fields.application import applications_fields, application_detail_fields


class Applications(Resource):
    @marshal_with(applications_fields)
    def get(self):
        applications = get_all_applications()
        return {'applications': applications}

    # TODO: create a new application. (resources)
    def post(self):
        pass

class Application(Resource):
    @marshal_with(application_detail_fields)
    def get(self, application_id):
        return get_application_by_id(application_id)

    # TODO: update an application.
    def put(self, application_id):
        pass

    # TODO: delete an application.
    def delete(self, application_id):
        pass