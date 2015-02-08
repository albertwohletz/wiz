from django.shortcuts import render

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
    	]
    }
    return render(request, 'main.html', params)