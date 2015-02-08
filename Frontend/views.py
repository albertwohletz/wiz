from django.shortcuts import render
from API import models

# Create your views here.
def home(request):
    params = {
    	'attributes': [
    		{'short': 'bod', 'full': 'Body'}, 
    		{'short': 'agi', 'full': 'Agility'}, 
    		{'short': 'rea', 'full': 'Reaction'}, 
    		{'short': 'str', 'full': 'Strength'}, 
    		{'short': 'cha', 'full': 'Charisma'}, 
    		{'short': 'int', 'full': 'Intuition'}, 
    		{'short': 'log', 'full': 'Logic'}, 
    		{'short': 'wil', 'full': 'Willpower'}, 
    		{'short': 'edg', 'full': 'Edge'}, 
    		{'short': 'mag', 'full': 'Magic'}, 
    		{'short': 'res', 'full': 'Resonance'}
    	],
        'positive_qualities': models.PositiveQualities.objects.all()
    }

    return render(request, 'main.html', params)