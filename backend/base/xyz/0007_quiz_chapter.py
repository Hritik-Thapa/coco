# Generated by Django 5.1.2 on 2024-11-26 17:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_flashcard_chapter'),
    ]

    operations = [
        migrations.AddField(
            model_name='quiz',
            name='chapter',
            field=models.ForeignKey(default=123, on_delete=django.db.models.deletion.CASCADE, related_name='quizzes', to='base.chapter'),
            preserve_default=False,
        ),
    ]