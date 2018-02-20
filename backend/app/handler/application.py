#!/usr/bin/env python
# encoding: utf-8

"""
    File name: application.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""

from app.models import Application

def get_all_applications():
    applications = Application.query.all()
    return applications

def get_application_by_id(application_id):
    application = Application.query.filter_by(id=application_id).first()
    return application