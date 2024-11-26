from django.db import models

# Create your models here.
class Subject(models.Model):
    name=models.CharField(max_length=50)
    code=models.CharField(max_length=10, unique=True)
    student = models.ForeignKey('auth.User', on_delete=models.CASCADE) 

    def __str__(self):
        return f"{self.code}-{self.name}"
    
class Chapter(models.Model):
    name = models.CharField(max_length=100)
    subject = models.ForeignKey(Subject, related_name='chapters', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} ({self.subject.name})"

class Student(models.Model):
    name=models.CharField(max_length=100)
    notes=models.CharField(max_length=150)

    def __str__(self):
        return f"Name of student: {self.name}. Note :{self.notes}"