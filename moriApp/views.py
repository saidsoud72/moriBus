from django.shortcuts import redirect, render
from django.contrib.auth import authenticate
from django.urls.base import reverse

# Create your views here.

def index(request):
    return render(request, 'index.html', {})


def booking(request):
    if request.user.is_authenticated:
        return render(request, 'bookings.html')
    else:
        return redirect(reverse('moriAuth:login_user'))


def feedback(request):
    if request.user.is_authenticated:
        return render(request, 'feedback.html')
    else:
        return redirect(reverse('moriAuth:login_user'))


def ticketing(request):
    if request.user.is_authenticated:
        return render(request, 'ticketing.html')
    else:
        return redirect(reverse('moriAuth:login_user'))