from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib import messages
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate,login,logout
from rest_framework.response import Response
from .models import Subject,Student, Chapter, Notes, Quiz, Flashcard
from django.http import JsonResponse
from .serializers import StudentSerializer,LoginSerializer, SubjectSerializer, ChapterSerializer, NotesSerializer, QuizSerializer, FlashcardSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from datetime import date,timedelta,datetime
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required 
# Create your views here.


def UpdateStreakAPI(func): 
    def wrapper(request, *args, **kwargs):
        user = request.user
        if user.is_authenticated:
            
            # Get or create the user's profile
            profile= Student.objects.get(user=user)
            # Get today's date and check the last streak update date
            today = datetime.now().date()
            last_activity_date = profile.last_activity_date

            if last_activity_date == today:  # Only update streak if it's a new day
                # If the user hasn't updated streak for today, reset streak if necessary
                
                if last_activity_date < today - timedelta(days=1):
                    profile.streak_count = 1  # Reset streak if it's not consecutive days
                else:
                    profile.streak_count += 1  # Increment streak for consecutive days
                
                # profile.last_activity_date = today
                profile.save()

        # Call the original view function
        print("Function: ", func)
        return func(request, *args, **kwargs)
    return wrapper

@method_decorator(UpdateStreakAPI, name='get')
class StudentAPI(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request):
        print(request.GET)
        queryset=Student.objects.all()
        serializer=StudentSerializer(queryset , many=True)
        return Response({
            "status": True,
            "data":serializer.data,
        })


class LoginAPI(APIView):
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

class SubjectAPI(APIView):
    permission_classes=[IsAuthenticated]
    def get(self,request):
        subCode = request.GET.get("id", None)
        if not subCode:
            queryset=Subject.objects.all()
            serializer= SubjectSerializer(queryset , many=True)
            return Response({
                "status": True,
                "data":serializer.data,
            })
        else:
            queryset=Subject.objects.get(id=subCode)
            serializer= SubjectSerializer(queryset)
            return Response({
                "status": True,
                "data":serializer.data,
            })
        
    def post(self,request):
        data=request.data
        serializer=SubjectSerializer(data=data)
        if not serializer.is_valid():
            return Response({
                "status":False,
                "data":serializer.errors
            })
        serializer.save()
        return Response({
            "status":True,
            "data":serializer.data
        })

class ChapterAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        chapter_id = request.GET.get("id", None)
        if not chapter_id:
            queryset = Chapter.objects.all()
            serializer = ChapterSerializer(queryset, many=True)
            return Response({
                "status": True,
                "data": serializer.data,
            })
        else:
            try:
                chapter = Chapter.objects.get(id=chapter_id)
                serializer = ChapterSerializer(chapter)
                return Response({
                    "status": True,
                    "data": serializer.data,
                })
            except Chapter.DoesNotExist:
                return Response({
                    "status": False,
                    "message": "Chapter not found",
                }, status=404)

    def post(self, request):
        data = request.data
        serializer = ChapterSerializer(data=data)
        if not serializer.is_valid():
            return Response({
                "status": False,
                "data": serializer.errors,
            })
        serializer.save()
        return Response({
            "status": True,
            "data": serializer.data,
        })
    
    def put(self, request, pk):
        try:
            chapter = Chapter.objects.get(id=pk)
            serializer = ChapterSerializer(chapter, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    "status": True,
                    "data": serializer.data,
                })
            return Response({
                "status": False,
                "data": serializer.errors,
            })
        except Chapter.DoesNotExist:
            return Response({
                "status": False,
                "message": "Chapter not found",
            }, status=404)

    def delete(self, request, pk):
        try:
            chapter = Chapter.objects.get(id=pk)
            chapter.delete()
            return Response({
                "status": True,
                "message": "Chapter deleted successfully",
            })
        except Chapter.DoesNotExist:
            return Response({
                "status": False,
                "message": "Chapter not found",
            }, status=404)

class NotesAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        note_id = request.GET.get("id", None)
        if not note_id:
            queryset = Notes.objects.all()
            serializer = NotesSerializer(queryset, many=True)
            return Response({
                "status": True,
                "data": serializer.data,
            })
        else:
            try:
                note = Notes.objects.get(id=note_id)
                serializer = NotesSerializer(note)
                return Response({
                    "status": True,
                    "data": serializer.data,
                })
            except Notes.DoesNotExist:
                return Response({
                    "status": False,
                    "message": "Note not found",
                }, status=404)

    def post(self, request):
        data = request.data
        serializer = NotesSerializer(data=data)
        if not serializer.is_valid():
            return Response({
                "status": False,
                "data": serializer.errors,
            })
        serializer.save()
        return Response({
            "status": True,
            "data": serializer.data,
        })
    
    def put(self, request, pk):
        try:
            note = Notes.objects.get(id=pk)
            serializer = NotesSerializer(note, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    "status": True,
                    "data": serializer.data,
                })
            return Response({
                "status": False,
                "data": serializer.errors,
            })
        except Notes.DoesNotExist:
            return Response({
                "status": False,
                "message": "Note not found",
            }, status=404)

    def delete(self, request, pk):
        try:
            note = Notes.objects.get(id=pk)
            note.delete()
            return Response({
                "status": True,
                "message": "Note deleted successfully",
            })
        except Notes.DoesNotExist:
            return Response({
                "status": False,
                "message": "Note not found",
            }, status=404)

class QuizAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        quiz_id = request.GET.get("id", None)
        if not quiz_id:
            queryset = Quiz.objects.all()
            serializer = QuizSerializer(queryset, many=True)
            return Response({
                "status": True,
                "data": serializer.data,
            })
        else:
            try:
                quiz = Quiz.objects.get(id=quiz_id)
                serializer = QuizSerializer(quiz)
                return Response({
                    "status": True,
                    "data": serializer.data,
                })
            except Quiz.DoesNotExist:
                return Response({
                    "status": False,
                    "message": "Quiz not found",
                }, status=404)

    def post(self, request):
        data = request.data
        serializer = QuizSerializer(data=data)
        if not serializer.is_valid():
            return Response({
                "status": False,
                "data": serializer.errors,
            })
        serializer.save()
        return Response({
            "status": True,
            "data": serializer.data,
        })
    
    def put(self, request, pk):
        try:
            quiz = Quiz.objects.get(id=pk)
            serializer = QuizSerializer(quiz, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    "status": True,
                    "data": serializer.data,
                })
            return Response({
                "status": False,
                "data": serializer.errors,
            })
        except Quiz.DoesNotExist:
            return Response({
                "status": False,
                "message": "Quiz not found",
            }, status=404)

    def delete(self, request, pk):
        try:
            quiz = Quiz.objects.get(id=pk)
            quiz.delete()
            return Response({
                "status": True,
                "message": "Quiz deleted successfully",
            })
        except Quiz.DoesNotExist:
            return Response({
                "status": False,
                "message": "Quiz not found",
            }, status=404)

class FlashcardAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        flashcard_id = request.GET.get("id", None)
        if not flashcard_id:
            queryset = Flashcard.objects.all()
            serializer = FlashcardSerializer(queryset, many=True)
            return Response({
                "status": True,
                "data": serializer.data,
            })
        else:
            try:
                flashcard = Flashcard.objects.get(id=flashcard_id)
                serializer = FlashcardSerializer(flashcard)
                return Response({
                    "status": True,
                    "data": serializer.data,
                })
            except Flashcard.DoesNotExist:
                return Response({
                    "status": False,
                    "message": "Flashcard not found",
                }, status=404)

    def post(self, request):
        data = request.data
        serializer = FlashcardSerializer(data=data)
        if not serializer.is_valid():
            return Response({
                "status": False,
                "data": serializer.errors,
            })
        serializer.save()
        return Response({
            "status": True,
            "data": serializer.data,
        })
    
    def put(self, request, pk):
        try:
            flashcard = Flashcard.objects.get(id=pk)
            serializer = FlashcardSerializer(flashcard, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    "status": True,
                    "data": serializer.data,
                })
            return Response({
                "status": False,
                "data": serializer.errors,
            })
        except Flashcard.DoesNotExist:
            return Response({
                "status": False,
                "message": "Flashcard not found",
            }, status=404)

    def delete(self, request, pk):
        try:
            flashcard = Flashcard.objects.get(id=pk)
            flashcard.delete()
            return Response({
                "status": True,
                "message": "Flashcard deleted successfully",
            })
        except Flashcard.DoesNotExist:
            return Response({
                "status": False,
                "message": "Flashcard not found",
            }, status=404)

def home(request):
    return HttpResponse("HOME PAGE")


