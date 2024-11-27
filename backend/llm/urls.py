from django.urls import path
from . import views

urlpatterns = [
    path('generate-quiz/', views.generate_quiz_view, name='generate_quiz'),
    path('generate-notes/', views.generate_notes_view, name='generate_notes'),
    path('generate-flashcards/', views.generate_flashcards_view, name='generate_flashcards'),
]


