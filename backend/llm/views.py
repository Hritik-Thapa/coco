from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .llm_functions import generate_quiz, generate_notes, generate_flashcards  # Import your functions

@csrf_exempt
def generate_quiz_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            context = data.get('context', '')
            if not context:
                return JsonResponse({'error': 'Context is required'}, status=400)
            
            quiz = generate_quiz(context)
            return JsonResponse({'quiz': quiz}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)


@csrf_exempt
def generate_notes_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            context = data.get('context', '')
            if not context:
                return JsonResponse({'error': 'Context is required'}, status=400)
            
            notes = generate_notes(context)
            return JsonResponse({'notes': notes}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)


@csrf_exempt
def generate_flashcards_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            context = data.get('context', '')
            if not context:
                return JsonResponse({'error': 'Context is required'}, status=400)
            
            flashcards = generate_flashcards(context)
            return JsonResponse({'flashcards': flashcards}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
