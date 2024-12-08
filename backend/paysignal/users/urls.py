# users/urls.py
from django.urls import path
from .views import signup_view, login_view

urlpatterns = [
    path('', signup_view, name='signup'),  # If you want signup at '/signup/'
    path('login/', login_view, name='login'),  # For the login view
]
