from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'index.html')


# def ticketing(request):
#     return render(request, 'ticketing.html')

def login(request):
    return render(request, 'login.html')


def signup(request):
    return render(request, 'signup.html')


def booking(request):
    return render(request, 'bookings.html')