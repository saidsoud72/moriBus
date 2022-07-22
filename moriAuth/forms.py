from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.forms.models import ModelForm
# Create your forms here.

class SignUpForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update({
            'class': 'form-input',
            'type': 'text',
            'id': 'username',
            'aria-describedby': 'usernameHelp',
            'placeholder': 'Username',
            'name': 'username',
        })
        self.fields['first_name'].widget.attrs.update({
            'class': 'form-input',
            'type': 'text',
            'id': 'firstName',
            'placeholder': 'First Name',
            'name': 'firstName',
        })
        self.fields['last_name'].widget.attrs.update({
            'class': 'form-input',
            'type': 'text',
            'id': 'lastName',
            'placeholder': 'Last Name',
            'name': 'lastName',
        })
        self.fields['email'].widget.attrs.update({
            'class': 'form-input',
            'type': 'email',
            'id': 'email',
            'aria-describedby': 'emailHelp',
            'placeholder': 'Email Address',
            'name': 'email',
        })
        self.fields['password1'].widget.attrs.update({
            'class': 'form-input',
            'type': 'password',
            'id': 'password',
            'placeholder': 'Password',
            'name': 'password',
        })
        self.fields['password2'].widget.attrs.update({
            'class': 'form-input',
            'type': 'password',
            'id': 'repeatPassword',
            'placeholder': 'Repeat Password',
            'name': 'repeatPassword',
        })

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password1', 'password2', ]