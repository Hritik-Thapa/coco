from django.urls import path
from . import views
from .views import StudentApi,LoginApi

urlpatterns= [
    path('',views.home, name="home"),
    path('student/', StudentApi.as_view()),
    path('login/', LoginApi.as_view()),
]

