#!/usr/bin/env python
# encoding: utf-8

"""
    File name: application.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""

from app.models import Application
from app import db

def get_all_applications():
    applications = Application.query.all()
    return applications

def get_applications_by_applicantid(applicant_id):
    applications = Application.query.filter_by(applicant_id=applicant_id).all()
    return applications

def get_applications_by_university(university):
    applications = Application.query.filter_by(university=university).all()
    return applications

def create_application(country, university, major, term, result, applicant_id, apply_time=None, result_time=None):
    # TODO: add the authentication of power.
    # TODO: verify the repeation of datas.
    application = Application(
        country=country,
        university=university,
        major=major,
        term=term,
        result=result,
        applicant_id=applicant_id,
        apply_time=apply_time,
        result_time=result_time
    )
    db.session.add(application)
    db.session.commit()
    return {
        'success': 1,
        'id': application.id
    }


def get_application_by_id(application_id):
    application = Application.query.filter_by(id=application_id).first()
    return application

def update_application():
    # TODO: update the application(handler)
    pass

def rm_application(application_id):
    application = Application.query.filter_by(id=application_id).first()
    if application is not None:
        db.session.delete(application)
        db.session.commit()
        return {'success': 1}

