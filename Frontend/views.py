from django.shortcuts import render
from API import models
from collections import OrderedDict

# Create your views here.
def home(request):
    params = {
    	'attributes': [
    		{'short': 'bod', 'full': 'Body', 'type': 'attribute'}, 
    		{'short': 'agi', 'full': 'Agility', 'type': 'attribute'},
    		{'short': 'rea', 'full': 'Reaction', 'type': 'attribute'}, 
    		{'short': 'str', 'full': 'Strength', 'type': 'attribute'}, 
    		{'short': 'cha', 'full': 'Charisma', 'type': 'attribute'}, 
    		{'short': 'int', 'full': 'Intuition', 'type': 'attribute'}, 
    		{'short': 'log', 'full': 'Logic', 'type': 'attribute'}, 
    		{'short': 'wil', 'full': 'Willpower', 'type': 'attribute'}, 
    		{'short': 'edg', 'full': 'Edge', 'type': 'special'}, 
    		{'short': 'mag', 'full': 'Magic', 'type': 'special'}, 
    		{'short': 'res', 'full': 'Resonance', 'type': 'special'}
    	],
        'positive_qualities': models.PositiveQualities.objects.all(),
        'negative_qualities': models.NegativeQualities.objects.all(),
        'skill_groups': [
            {'name': 'Acting', 'id': 'acting', 'skills': ('Con', 'Impersonation', 'Performance')},
            {'name': 'Athletics', 'id': 'athletics', 'skills': ('Gymnastics', 'Running', 'Swimming',)},
            {'name': 'Biotech', 'id': 'biotech', 'skills': ('Cybertechnology', 'First Aid', 'Medicine',)},
            {'name': 'Close Combat', 'id': 'closecombat', 'skills': ('Blades', 'Clubs', 'Unarmed Combat',)},
            {'name': 'Conjouring', 'id': 'conjouring', 'skills': ('Banishing', 'Binding', 'Summoning',)},
            {'name': 'Cracking', 'id': 'cracking', 'skills': ('Cybercombat', 'Electronic Warfare', 'Hacking',)},
            {'name': 'Electronics', 'id': 'electronics', 'skills': ('Computer', 'Hardware', 'Software',)},
            {'name': 'Enchanting', 'id': 'enchanting', 'skills': ('Alchemy', 'Artificing', 'Disenchanting',)},
            {'name': 'Engineering', 'id': 'engineering', 'skills': ('Aeronautics Mechanic', 'Automotive Mechanic', 'Industrial Mechanic', 'Nautical Mechanic',)},
            {'name': 'Firearms', 'id': 'firearms', 'skills': ('Automatics', 'Longarms', 'Pistols',)},
            {'name': 'Influence', 'id': 'influence', 'skills': ('Etiquette', 'Leadership', 'Negotiation',)},
            {'name': 'Outdoors', 'id': 'outdoors', 'skills': ('Navigation', 'Survival', 'Tracking',)},
            {'name': 'Sorcery', 'id': 'sorcery', 'skills': ('Counterspelling', 'Ritual Spellcasting', 'Spellcasting',)},
            {'name': 'Stealth', 'id': 'stealth', 'skills': ('Disguise', 'Palming', 'Sneaking',)},
            {'name': 'Tasking', 'id': 'tasking', 'skills': ('Compiling', 'Decompiling', 'Registering',)}
        ],
        'skills': models.Skills.objects.all(),
        'spells': models.Spells.objects.all().order_by('name')
    }

    return render(request, 'main.html', params)