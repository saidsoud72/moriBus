from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    # path('ticketing/', views.ticketing, name='ticketing'),
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('booking/', views.booking, name='booking'),
]