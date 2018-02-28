#!/usr/bin/env python
# encoding: utf-8

"""
    File name: applicant.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""

from flask_restful import reqparse

# -------- applicant add parser --------
applicant_post_parser = reqparse.RequestParser()

applicant_post_parser.add_argument(
    'name',
    dest='name',
    type=str,
    location='args',
    required=True,
)

applicant_post_parser.add_argument(
    'student_id',
    dest='student_id',
    type=str,
    location='args',
    required=True,
)

applicant_post_parser.add_argument(
    'college',
    dest='college',
    type=str,
    location='args',
    required=True,
)

applicant_post_parser.add_argument(
    'language_type',
    dest='language_type',
    type=str,
    location='args',
    required=True,
)

applicant_post_parser.add_argument(
    'language_reading',
    dest='language_reading',
    type=int,
    location='args',
    required=True,
)

applicant_post_parser.add_argument(
    'language_listening',
    dest='language_listening',
    type=int,
    location='args',
    required=True,
)

applicant_post_parser.add_argument(
    'language_speaking',
    dest='language_speaking',
    type=int,
    location='args',
    required=True,
)

applicant_post_parser.add_argument(
    'language_writing',
    dest='language_writing',
    type=int,
    location='args',
    required=True,
)

applicant_post_parser.add_argument(
    'gre_verbal',
    dest='gre_verbal',
    type=int,
    location='args',
    required=True,
)

applicant_post_parser.add_argument(
    'gre_quantitative',
    dest='gre_quantitative',
    type=int,
    location='args',
    required=True,
)

applicant_post_parser.add_argument(
    'gre_writing',
    dest='gre_writing',
    type=float,
    location='args',
    required=True,
)

applicant_post_parser.add_argument(
    'research',
    dest='research',
    type=str,
    location='args',
    required=False,
)

applicant_post_parser.add_argument(
    'project',
    dest='project',
    type=str,
    location='args',
    required=False,
)

applicant_post_parser.add_argument(
    'recommendation',
    dest='recommendation',
    type=str,
    location='args',
    required=False,
)

applicant_post_parser.add_argument(
    'email',
    dest='email',
    type=str,
    location='args',
    required=False,
)