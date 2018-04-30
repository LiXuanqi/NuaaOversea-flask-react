#!/usr/bin/env python
# encoding: utf-8

"""
    File name: search.py
    Function Des: ...
    ~~~~~~~~~~

    author: 1_x7 <lixuanqi1995@gmail.com> <http://lixuanqi.github.io>

"""
from app import db
from app.models import Application, Tag

def search_application(query_args):

    applications = Application.query
    print(query_args)
    if 'university' in query_args:
        applications = applications.filter(Application.university.ilike("%" + query_args['university'] + "%"))
    if 'major' in query_args:
        applications = applications.filter_by(major=query_args['major'])
    if 'result' in query_args:
        applications = applications.filter_by(result=query_args['result'])
    if 'term' in query_args:
        applications = applications.filter(Application.term.ilike("%" + query_args['term'] + "%"))
    if 'degree' in query_args:
        applications = applications.filter_by(degree=query_args['degree'])
    if 'country' in query_args:
        applications = applications.filter_by(country=query_args['country'])
    if 'tags' in query_args:
        # find the matched applications' id
        tags_set = set()
        for tag in query_args['tags']:
            target_tags = Tag.query.filter(Tag.name.ilike("%"+tag+"%")).all()
            for target_tag in target_tags:
                tags_set.add(target_tag.application_id)

        applications = applications.filter(Application.id.in_(tags_set))

    # TODO: when nothing matched, should return null.
    return applications.all()