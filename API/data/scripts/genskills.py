from API import models
groups = [
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
]

skills = [
            {'name': 'Aeronautics Mechanic', 'id': 'aeronauticsmechanic', 'attribute': 'log'},
            {'name': 'Alchemy', 'id': 'alchemy', 'attribute': 'mag'},
            {'name': 'Animal Handling', 'id': 'animalhandling', 'attribute': 'cha'},
            {'name': 'Archery', 'id': 'archery', 'attribute': 'agi'},
            {'name': 'Armorer', 'id': 'artificing', 'attribute': 'log'},
            {'name': 'Artificing', 'id': 'artificing', 'attribute': 'int'},
            {'name': 'Artisan', 'id': 'Artisan', 'attribute': 'int'},
            {'name': 'Assensing', 'id': 'Assensing', 'attribute': 'int'},
            {'name': 'Astral Combat', 'id': 'Assensing', 'attribute': 'wil'},
            {'name': 'Automatics', 'id': 'automatics', 'attribute': 'agi'},
            {'name': 'Automotive Mechanic', 'id': 'automotivemechanic', 'attribute': 'log'},
            {'name': 'Banishing', 'id': 'banishing', 'attribute': 'mag'},
            {'name': 'Binding', 'id': 'binding', 'attribute': 'mag'},
            {'name': 'Biotechnology', 'id': 'binding', 'attribute': 'log'},
            {'name': 'Blades', 'id': 'blades', 'attribute': 'agi'},
            {'name': 'Chemistry', 'id': 'binding', 'attribute': 'log'},
            {'name': 'Clubs', 'id': 'clubs', 'attribute': 'agi'},
            {'name': 'Compiling', 'id': 'compiling', 'attribute': 'res'},
            {'name': 'Computer', 'id': 'computer', 'attribute': 'log'},
            {'name': 'Con', 'id': 'con', 'attribute': 'cha'},
            {'name': 'Counterspelling', 'id': 'counterspelling', 'attribute': 'mag'},
            {'name': 'Cybercombat', 'id': 'cybercombat', 'attribute': 'log'},
            {'name': 'Cybertechnology', 'id': 'cybertechnology', 'attribute': 'log'},
            {'name': 'Demolitions', 'id': 'cybertechnology', 'attribute': 'log'},
            {'name': 'Decompiling', 'id': 'decompiling', 'attribute': 'res'},
            {'name': 'Disenchanting', 'id': 'disenchanting', 'attribute': 'mag'},
            {'name': 'Disguise', 'id': 'disguise', 'attribute': 'int'},
            {'name': 'Diving', 'id': 'diving', 'attribute': 'bod'},
            {'name': 'Electronic Warfare', 'id': 'electronicwarfare', 'attribute': 'log'},
            {'name': 'Enchanting', 'id': 'electronicwarfare', 'attribute': 'mag'},
            {'name': 'Disenchanting', 'id': 'electronicwarfare', 'attribute': 'mag'},
            {'name': 'Forgery', 'id': 'electronicwarfare', 'attribute': 'log'},
            {'name': 'Escape Artist', 'id': 'escapeartist', 'attribute': 'agi'},
            {'name': 'Etiquette', 'id': 'etiquette', 'attribute': 'cha'},
            {'name': 'Exotic Weapon', 'id': 'exoticweapon', 'attribute': 'agi'},
            {'name': 'Free Fall', 'id': 'freefall', 'attribute': 'bod'},
            {'name': 'First Aid', 'id': 'firstaid', 'attribute': 'log'},
            {'name': 'Gunnery', 'id': 'gunnery', 'attribute': 'agi'},
            {'name': 'Gymnastics', 'id': 'gymnastics', 'attribute': 'agi'},
            {'name': 'Hacking', 'id': 'hacking', 'attribute': 'log'},
            {'name': 'Hardware', 'id': 'hardware', 'attribute': 'log'},
            {'name': 'Heavy Weapons', 'id': 'heavyweapons', 'attribute': 'agi'},
            {'name': 'Impersonation', 'id': 'impersonation', 'attribute': 'cha'},
            {'name': 'Industrial Mechanic', 'id': 'industrialmechanic', 'attribute': 'log'},
            {'name': 'Instruction', 'id': 'instruction', 'attribute': 'cha'},
            {'name': 'Intimidation', 'id': 'intimidation', 'attribute': 'cha'},
            {'name': 'Leadership', 'id': 'leadership', 'attribute': 'cha'},
            {'name': 'Language', 'id': 'leadership', 'attribute': 'int'},
            {'name': 'Locksmith', 'id': 'longarms', 'attribute': 'agi'},
            {'name': 'Longarms', 'id': 'longarms', 'attribute': 'agi'},
            {'name': 'Medicine', 'id': 'medicine', 'attribute': 'log'},
            {'name': 'Nautical Mechanic', 'id': 'nauticalmechanic', 'attribute': 'log'},
            {'name': 'Navigation', 'id': 'navigation', 'attribute': 'int'},
            {'name': 'Negotiation', 'id': 'negotiation', 'attribute': 'cha'},
            {'name': 'Palming', 'id': 'palming', 'attribute': 'agi'},
            {'name': 'Perception', 'id': 'performance', 'attribute': 'int'},
            {'name': 'Performance', 'id': 'performance', 'attribute': 'cha'},
            {'name': 'Pilot Aerospace', 'id': 'pilotaerospace', 'attribute': 'rea'},
            {'name': 'Pilot Aircraft', 'id': 'pilotaircraft', 'attribute': 'rea'},
            {'name': 'Pilot Exotic Vehicle', 'id': 'pilotexotic', 'attribute': 'rea'},
            {'name': 'Pilot Ground Craft', 'id': 'pilotground', 'attribute': 'rea'},
            {'name': 'Pilot Walker', 'id': 'pilotwalker', 'attribute': 'rea'},
            {'name': 'Pilot Watercraft', 'id': 'pilotwater', 'attribute': 'rea'},
            {'name': 'Pistols', 'id': 'pistols', 'attribute': 'agi'},
            {'name': 'Registering', 'id': 'registering', 'attribute': 'res'},
            {'name': 'Ritual Spellcasting', 'id': 'ritualspellcasting', 'attribute': 'mag'},
            {'name': 'Running', 'id': 'running', 'attribute': 'str'},
            {'name': 'Sneaking', 'id': 'sneaking', 'attribute': 'agi'},
            {'name': 'Software', 'id': 'software', 'attribute': 'log'},
            {'name': 'Spellcasting', 'id': 'spellcasting', 'attribute': 'mag'},
            {'name': 'Summoning', 'id': 'summoning', 'attribute': 'mag'},
            {'name': 'Survival', 'id': 'survival', 'attribute': 'wil'},
            {'name': 'Swimming', 'id': 'swimming', 'attribute': 'str'},
            {'name': 'Tracking', 'id': 'tracking', 'attribute': 'int'},
            {'name': 'Throwing Weapon', 'id': 'throwingweapon', 'attribute': 'agi'},
            {'name': 'Unarmed Combat', 'id': 'unarmedcombat', 'attribute': 'agi'},
        ]

skills = sorted(skills, key=lambda k: k['name'])
for skill in skills:
      entry = models.Skills(name=skill['name'], attribute=skill['attribute'], default=True, specializations='', category='', group='')
      print skill
      entry.save()

for group in groups:
      for skill in group['skills']:
            s = models.Skills.objects.all().filter(name=skill)[0]
            if s:
                  s.group = group['id']
                  s.save()
                  print 'saving skill %s' % skill
            else:
                  print 'skill not found %s' % skill





