from django.urls import path
from . import views

app_name = 'moriApp'
urlpatterns = [
    path('dashboard/', views.index, name='index'),
]