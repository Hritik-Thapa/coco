from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib import messages
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate,login,logout
from rest_framework.response import Response
from .models import Subject,Student
from django.http import JsonResponse
from .serializers import StudentSerializer,LoginSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated

# Create your views here.
 
class StudentApi(APIView):
    permission_classes=[IsAuthenticated]
    def get(self,request):
        queryset=Student.objects.all()
        serializer=StudentSerializer(queryset , many=True)
        return Response({
            "status": True,
            "data":serializer.data,
        })

class LoginApi(APIView):
    def post(self,request):
        data=request.data
        serializer=LoginSerializer(data=data)
        if not serializer.is_valid():
            return Response({
                    "status":False,
                    "data":serializer.errors
            })
        username=serializer.data['username']
        password=serializer.data['password']
        
        user_obj=authenticate(username=username, password=password)

        if user_obj:
            token,_=Token.objects.get_or_create(user=user_obj)
            return Response({
                "status": True,
                "data":{"token":str(token)},
            })
        else:
            return Response({
                "status": False,
                "data":{},
                "message":"INVALID CREDENTIALS",
            })

def home(request):
    return HttpResponse("HOME PAGE")

@api_view(['GET'])
def getSubject(request):
    pass