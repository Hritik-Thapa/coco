from rest_framework import serializers
from .models import Student,Subject,Chapter

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields="__all__"
        
class LoginSerializer(serializers.Serializer):
    username=serializers.CharField()
    password=serializers.CharField()

class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = ['id', 'name']

class SubjectSerializer(serializers.ModelSerializer):
    model=Subject
    