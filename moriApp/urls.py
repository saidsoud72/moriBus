from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('ticketing/', views.ticketing, name='ticketing'),
]