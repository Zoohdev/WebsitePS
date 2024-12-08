from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.contrib.auth.forms import AuthenticationForm

# Sign-Up View
def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # Log the user in after signup
            # Redirect to the frontend dashboard (e.g., frontend-mu-drab.vercel.app/dashboard)
            return redirect('http://paysignal.net/dashboard')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})

# Login View
def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            # Redirect to the frontend dashboard after login
            return redirect('http://paysignal.net/dashboard')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})



