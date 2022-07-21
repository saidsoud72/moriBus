from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'index.html')


def ticketing(request):
    return render(request, 'ticketing.html')
