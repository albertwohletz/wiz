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
        'spells': models.Spells.objects.all().order_by('name'), 
        'priorities': {
            'attributes': {'A':24,'B':20,'C':16,'D':14,'E':12}
        },
        'grades': {
            'Standard': {'ess': '1', 'cost': '1', 'avail': '0', 'source': 'SR5', 'page': '451'},
            #"Standard (Burnout's Way)": {'ess': '0.8', 'cost':'1', 'avail':'0', 'source':'SG', 'page':'177'}, # Need 15 karma ability.  TODO: 
            'Used': {'ess':'1.25', 'cost':'0.75', 'avail':'-4', 'source':'SR5', 'page':'451'},
            'Alphaware': {'ess':'0.8', 'cost':'1.2', 'avail':'+2', 'source':'SR5', 'page':'451'}, 
            'Betaware': {'ess':'0.7', 'cost':'1.5', 'avail':'+4', 'source':'SR5', 'page':'451'},
            'Deltaware': {'ess':'0.5', 'cost':'2.5', 'avail':'+8', 'source':'SR5', 'page':'451'}
        },
        'biowares': [
            {'name': 'Adrenaline Pump', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '459','ess': '0.75', 'cost': '55000', 'avail': '6F', 'max_rating': '3','bonus': {},},
            {'name': 'Bone Density Augmentation', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '459','ess': '0.3', 'cost': '5000', 'avail': '4', 'max_rating': '4','bonus': {"damageresistance": "Rating", "unarmeddv": "Rating-1"},},
            {'name': "Cat's Eyes", 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '459','ess': '0.1', 'cost': '4000', 'avail': '4', 'max_rating': '1','bonus': {},},
            {'name': 'Cerebral Booster', 'category': 'Cultured', 'capacity': '0', 'source': 'SR5', 'page': '460','ess': '0.2', 'cost': '31500', 'avail': '6', 'max_rating': '3','bonus': {"specificattribute": {"name": "LOG", "val": "Rating"}},},
            {'name': 'Damage Compensators', 'category': 'Cultured', 'capacity': '0', 'source': 'SR5', 'page': '460','ess': '0.1', 'cost': '2000', 'avail': '3F', 'max_rating': '12','bonus': {"conditionmonitor": {"thresholdoffset": "Rating"}},},
            {'name': 'Enhanced Articulation', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '459','ess': '0.3', 'cost': '24000', 'avail': '12', 'max_rating': '1','bonus': {"selectskill": {"name": "Escape Artist", "val": "1", "applytorating": "yes"}, "physicallimit": "+1"},},
            {'name': 'Mnemonic Enhancer', 'category': 'Cultured', 'capacity': '0', 'source': 'SR5', 'page': '460','ess': '0.1', 'cost': '9000', 'avail': '5', 'max_rating': '3','bonus': {"skillcategory": [{"name": "Academic", "bonus": "Rating"}, {"name": "Interest", "bonus": "Rating"}, {"name": "Language", "bonus": "Rating"}, {"name": "Professional", "bonus": "Rating"}, {"name": "Street", "bonus": "Rating"}], "mentallimit": "Rating", "memory": "Rating"},},
            {'name': 'Muscle Augmentation', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '459','ess': '0.2', 'cost': '31000', 'avail': '5R', 'max_rating': '4','bonus': {"specificattribute": {"name": "STR", "val": "Rating"}},},
            {'name': 'Muscle Toner', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '459','ess': '0.2', 'cost': '32000', 'avail': '5R', 'max_rating': '4','bonus': {"specificattribute": {"name": "AGI", "val": "Rating"}},},
            {'name': 'Orthoskin', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '459','ess': '0.25', 'cost': '6000', 'avail': '4R', 'max_rating': '4','bonus': {"armor": "Rating"},},
            {'name': 'Pain Editor', 'category': 'Cultured', 'capacity': '0', 'source': 'SR5', 'page': '460','ess': '0.3', 'cost': '48000', 'avail': '18F', 'max_rating': '1','bonus': {},},
            {'name': 'Pathogenic Defense', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '459','ess': '0.1', 'cost': '4500', 'avail': '2', 'max_rating': '6','bonus': {},},
            {'name': 'Platelet Factories', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '459','ess': '0.2', 'cost': '17000', 'avail': '12', 'max_rating': '1','bonus': {},},
            {'name': 'Reflex Recorder (Skill)', 'category': 'Cultured', 'capacity': '0', 'source': 'SR5', 'page': '460','ess': '0.1', 'cost': '14000', 'avail': '10', 'max_rating': '1','bonus': {"selectskill": {"@excludecategory": "Magical Active,Resonance Active,Social Active,Technical Active,Vechicle Active", "val": "1", "applytorating": "yes"}},},
            {'name': 'Skin Pocket', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '459','ess': '0.1', 'cost': '12000', 'avail': '4', 'max_rating': '1','bonus': {},},
            {'name': 'Sleep Regulator', 'category': 'Cultured', 'capacity': '0', 'source': 'SR5', 'page': '460','ess': '0.1', 'cost': '12000', 'avail': '6', 'max_rating': '1','bonus': {},},
            {'name': 'Suprathyroid Gland', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '459','ess': '0.7', 'cost': '140000', 'avail': '20R', 'max_rating': '1','bonus': {"specificattribute": [{"name": "BOD", "val": "1"}, {"name": "AGI", "val": "1"}, {"name": "REA", "val": "1"}, {"name": "STR", "val": "1"}], "lifestylecost": "25"},},
            {'name': 'Symbiotes', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '459','ess': '0.2', 'cost': '3500', 'avail': '5', 'max_rating': '4','bonus': {},},
            {'name': 'Synaptic Booster', 'category': 'Cultured', 'capacity': '0', 'source': 'SR5', 'page': '461','ess': '0.5', 'cost': '95000', 'avail': '6R', 'max_rating': '3','bonus': {"initiativepass": "Rating", "specificattribute": {"name": "REA", "val": "1"}}},
            {'name': 'Synthacardium', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '460','ess': '0.1', 'cost': '30000', 'avail': '4', 'max_rating': '3','bonus': {"skillgroup": {"name": "Athletics", "bonus": "Rating"}},},
            {'name': 'Tailored Pheromones', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '460','ess': '0.2', 'cost': '31000', 'avail': '4R', 'max_rating': '3','bonus': {"sociallimit": "Rating"},},
            {'name': 'Toxin Extractor', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '460','ess': '0.2', 'cost': '4800', 'avail': '3', 'max_rating': '6','bonus': {},},
            {'name': 'Tracheal Filter', 'category': 'Basic', 'capacity': '0', 'source': 'SR5', 'page': '460','ess': '0.1', 'cost': '4500', 'avail': '3', 'max_rating': '6','bonus': {},},
        ],
        'cyberware': [],
    }

    return render(request, 'main.html', params)