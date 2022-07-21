from django.urls import path
from . import views
from moriApp.views import index

app_name = 'moriAuth'
urlpatterns = [
    path('', views.login_user, name='login_user'),
    path('dashboard/', index , name='index'),
    path("signup/", views.register_request, name="register"),
]