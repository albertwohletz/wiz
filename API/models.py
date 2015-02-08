from django.db import models
from django.contrib.auth.models import User

class PositiveQualities(models.Model):
    name = models.CharField(max_length=200)
    karma = models.IntegerField()
    description = models.CharField(max_length=200)

