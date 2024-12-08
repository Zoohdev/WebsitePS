# paysignal/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/', include('users.urls')),  # Pointing to users app
    path('login/', include('users.urls')),  # Pointing to users app
    # Add other paths here
]
