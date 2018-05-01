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
    'user_id',
    dest='user_id',
    type=str,
    required=True,
)

applicant_post_parser.add_argument(
    'name',
    dest='name',
    type=str,
    required=True,
)

applicant_post_parser.add_argument(
    'student_id',
    dest='student_id',
    type=str,
    required=True,
)

applicant_post_parser.add_argument(
    'college',
    dest='college',
    type=str,
    required=True,
)

applicant_post_parser.add_argument(
    'major',
    dest='major',
    type=str,
    required=True,
)

applicant_post_parser.add_argument(
    'gpa',
    dest='gpa',
    type=float,
    required=True,
)

applicant_post_parser.add_argument(
    'language_type',
    dest='language_type',
    type=str,
    required=True,
)

applicant_post_parser.add_argument(
    'language_reading',
    dest='language_reading',
    type=int,
    required=True,
)

applicant_post_parser.add_argument(
    'language_listening',
    dest='language_listening',
    type=int,
    required=True,
)

applicant_post_parser.add_argument(
    'language_speaking',
    dest='language_speaking',
    type=int,
    required=True,
)

applicant_post_parser.add_argument(
    'language_writing',
    dest='language_writing',
    type=int,
    required=True,
)

applicant_post_parser.add_argument(
    'gre_verbal',
    dest='gre_verbal',
    type=int,
    required=True,
)

applicant_post_parser.add_argument(
    'gre_quantitative',
    dest='gre_quantitative',
    type=int,
    required=True,
)

applicant_post_parser.add_argument(
    'gre_writing',
    dest='gre_writing',
    type=float,
    required=True,
)

applicant_post_parser.add_argument(
    'research_id',
    dest='research_id',
    type=str,
    required=True,
)

applicant_post_parser.add_argument(
    'project_id',
    dest='project_id',
    type=str,
    required=True,
)

applicant_post_parser.add_argument(
    'recommendation_id',
    dest='recommendation_id',
    type=str,
    required=True,
)

applicant_post_parser.add_argument(
    'email',
    dest='email',
    type=str,
    required=False,
)

# -------- applicant update parser --------

applicant_put_parser = reqparse.RequestParser()

applicant_put_parser.add_argument(
    'name',
    dest='name',
    type=str,
    required=True,
)

applicant_put_parser.add_argument(
    'student_id',
    dest='student_id',
    type=str,
    required=True,
)

applicant_put_parser.add_argument(
    'college',
    dest='college',
    type=str,
    required=True,
)

applicant_put_parser.add_argument(
    'major',
    dest='major',
    type=str,
    required=True,
)

applicant_put_parser.add_argument(
    'gpa',
    dest='gpa',
    type=float,
    required=True,
)

applicant_put_parser.add_argument(
    'language_type',
    dest='language_type',
    type=str,
    required=True,
)

applicant_put_parser.add_argument(
    'language_reading',
    dest='language_reading',
    type=int,
    required=True,
)

applicant_put_parser.add_argument(
    'language_listening',
    dest='language_listening',
    type=int,
    required=True,
)

applicant_put_parser.add_argument(
    'language_speaking',
    dest='language_speaking',
    type=int,
    required=True,
)

applicant_put_parser.add_argument(
    'language_writing',
    dest='language_writing',
    type=int,
    required=True,
)

applicant_put_parser.add_argument(
    'gre_verbal',
    dest='gre_verbal',
    type=int,
    required=True,
)

applicant_put_parser.add_argument(
    'gre_quantitative',
    dest='gre_quantitative',
    type=int,
    required=True,
)

applicant_put_parser.add_argument(
    'gre_writing',
    dest='gre_writing',
    type=float,
    required=True,
)

applicant_put_parser.add_argument(
    'research_id',
    dest='research_id',
    type=str,
    required=True,
)

applicant_put_parser.add_argument(
    'project_id',
    dest='project_id',
    type=str,
    required=True,
)

applicant_put_parser.add_argument(
    'recommendation_id',
    dest='recommendation_id',
    type=str,
    required=True,
)

applicant_put_parser.add_argument(
    'email',
    dest='email',
    type=str,
    required=False,
)