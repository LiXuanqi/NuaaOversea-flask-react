#!/usr/bin/env python
# encoding: utf-8

"""
    File name: applicant.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""

from app.models import Applicant
from app import db

def get_all_applicants():
    applicants = Applicant.query.all()
    return applicants

def create_applicant(name, student_id, college, language_type, language_reading, language_listening, language_speaking, language_writing, gre_verbal, gre_quantitative, gre_writing, research=None, project=None, email=None):
    # TODO: add the authentication of power.
    # TODO: verify the repeation of datas.
    applicant = Applicant(
        name=name,
        student_id=student_id,
        college=college,
        language_type=language_type,
        language_reading=language_reading,
        language_listening=language_listening,
        language_speaking=language_speaking,
        language_writing=language_writing,
        gre_verbal=gre_verbal,
        gre_quantitative=gre_quantitative,
        gre_writing=gre_writing,
        research=research,
        project=project,
        email=email
    )
    db.session.add(applicant)
    db.session.commit()
    return {
        'success': 1,
        'id': applicant.id
    }


def get_applicant_by_id(applicant_id):
    applicant = Applicant.query.filter_by(id=applicant_id).first()
    return applicant

def update_applicant():
    # TODO: update the applicant(handler)
    pass

def rm_applicant(applicant_id):
    applicant = Applicant.query.filter_by(id=applicant_id).first()
    if applicant is not None:
        db.session.delete(applicant)
        db.session.commit()
        return {'success': 1}

