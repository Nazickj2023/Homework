from django.urls import path
from .views import render_click_app

urlpatterns = [
    path(route= '', name='click_app', view=render_click_app),
]


