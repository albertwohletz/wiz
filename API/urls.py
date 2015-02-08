__author__ = 'albertlwohletz'
from django.conf.urls import patterns, url

urlpatterns = patterns('',
    url(r'^add_char/', 'API.views.add_char'),
    url(r'^remove_char/', 'API.views.remove_char'),
    url(r'^get_char/', 'API.views.get_char'),
    url(r'^edit_char/', 'API.views.edit_char'),
)