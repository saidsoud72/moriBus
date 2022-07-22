from django.urls import path
from . import views

app_name = 'moriApp'
urlpatterns = [
    path('dashboard/', views.index, name='index'),
    path('bookings/', views.booking, name='bookings'),
    path('feedback/', views.feedback, name='feedback'),
    path('ticketing/', views.ticketing, name='ticketing'),
]