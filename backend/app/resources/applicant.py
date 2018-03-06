#!/usr/bin/env python
# encoding: utf-8

"""
    File name: applicant.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""


from flask_restful import Resource, request, marshal_with
#
from app.handler.applicant import get_all_applicants, create_applicant
from app.handler.applicant import get_applicant_by_id, update_applicant, rm_applicant

from app.utils.fields.common import pt_fields, deleted_fields
from app.utils.fields.applicant import applicants_fields, applicant_detail_fields

from app.utils.parsers.applicant import applicant_post_parser

class Applicants(Resource):
    @marshal_with(applicants_fields)
    def get(self):
        applicants = get_all_applicants()
        return {'applicants': applicants}

    @marshal_with(pt_fields)
    def post(self):
        applicant_args = applicant_post_parser.parse_args()
        result = create_applicant(
            applicant_args.country,
            applicant_args.university,
            applicant_args.major,
            applicant_args.term,
            applicant_args.result,
            applicant_args.applicant_id,
            applicant_args.apply_time,
            applicant_args.result_time,
        )
        return result

class Applicant(Resource):
    @marshal_with(applicant_detail_fields)
    # FIXME: when call the applicant that does not exist, it should return error message.
    def get(self, applicant_id):
        return get_applicant_by_id(applicant_id)

    # TODO: update the application.
    @marshal_with(pt_fields)
    def put(self, applicant_id):
        pass

    @marshal_with(deleted_fields)
    def delete(self, applicant_id):
        result = rm_applicant(applicant_id)
        return result