from django.shortcuts import redirect, render

from moriAuth.forms import SignUpForm

# Create your views here.
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.urls import reverse_lazy
from .forms import SignUpForm


def login_user(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            current_user = request.user

            return redirect(reverse_lazy('moriApp:index'))

        else:
            messages.success(request, f'Error logging in, please Try Again...{request.user}')
            return redirect(reverse('moriAuth:login_user'))
    else:
        return render(request, 'login.html', {})


def register_request(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(reverse('moriAuth:login_user'))
        else:
            messages.success(request, 'Error signing up, please enter valid credentials...')
            return redirect(reverse('moriAuth:signup'))
    form = SignUpForm()
    context = {
        'register_form': form
    }
    return render(request, 'signup.html', context)

