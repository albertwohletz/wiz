from django.db import models
from django.contrib.auth.models import User

class PositiveQualities(models.Model):
    name = models.CharField(max_length=200)
    karma = models.IntegerField()
    description = models.CharField(max_length=200)

class NegativeQualities(models.Model):
    name = models.CharField(max_length=200)
    karma = models.IntegerField()
    description = models.CharField(max_length=200)

class Skills(models.Model):
	name = models.CharField(max_length=50)
	attribute = models.CharField(max_length=3)
	group = models.CharField(max_length=50)
	category = models.CharField(max_length=50)
	default = models.BooleanField(max_length=50)
	specializations = models.CharField(max_length=100)
	source = models.CharField(max_length=100)

	def specialization_list(self):              
		return self.specializations.split('-')

class Spells(models.Model):
	name = models.CharField(max_length=50)
	descriptor = models.CharField(max_length=50)
	category = models.CharField(max_length=20)
	type = models.CharField(max_length=1)
	range = models.CharField(max_length=10)
	damage = models.CharField(max_length=1)
	duration = models.CharField(max_length=1)
	dv = models.CharField(max_length=10)
	source = models.CharField(max_length=10)