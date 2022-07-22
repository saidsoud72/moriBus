from django.urls import path
from . import views
from moriApp.views import index, booking

app_name = 'moriAuth'
urlpatterns = [
    path('', index , name='index'),
    path('login/', views.login_user, name='login_user'),
    path("signup/", views.register_request, name="register"),
    path('logout/', views.logout_user, name='logout_user'),
    path('bookings/', booking, name='bookings'),
]