from API import models
from collections import OrderedDict

def populate_existing():
      skills_new = [OrderedDict([(u'id', 1), (u'name', u'Aeronautics Mechanic'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'No'), (u'skillgroup', u'Engineering'), (u'specs', OrderedDict([(u'spec', [u'Aerospace', u'Fixed Wing', u'LTA (blimp)', u'Rotary Wing', u'Tilt Wing', u'Vector Thrust'])])), (u'source', u'SR5'), (u'page', u'143')]), OrderedDict([(u'id', 2), (u'name', u'Alchemy'), (u'attribute', u'MAG'), (u'category', u'Magical Active'), (u'default', u'No'), (u'skillgroup', u'Enchanting'), (u'specs', OrderedDict([(u'spec', [u'Combat', u'Command', u'Contact', u'Detection', u'Health', u'Illusion', u'Manipulation', u'Time', u'[Trigger]'])])), (u'source', u'SR5'), (u'page', u'142')]), OrderedDict([(u'id', 3), (u'name', u'Animal Handling'), (u'attribute', u'CHA'), (u'category', u'Physical Active'), (u'default', u'Yes'), (u'skillgroup', u'Animal Husbandry'), (u'specs', OrderedDict([(u'spec', [u'Herding', u'Riding', u'Training', u'[Animal Type]'])])), (u'source', u'SR5'), (u'page', u'143')]), OrderedDict([(u'id', 4), (u'name', u'Arcana'), (u'attribute', u'LOG'), (u'category', u'Magical Active'), (u'default', u'No'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Spell Design', u'Focus Design', u'Spirit Formula'])])), (u'source', u'SR5'), (u'page', u'142')]), OrderedDict([(u'id', 5), (u'name', u'Archery'), (u'attribute', u'AGI'), (u'category', u'Combat Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Bow', u'Crossbow', u'Non-Standard Ammunition', u'Slingshot'])])), (u'source', u'SR5'), (u'page', u'130')]), OrderedDict([(u'id', 6), (u'name', u'Armorer'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Armor', u'Artillery', u'Explosives', u'Firearms', u'Melee Weapons', u'Heavy Weapons', u'Weapon Accessories'])])), (u'source', u'SR5'), (u'page', u'143')]), OrderedDict([(u'id', 7), (u'name', u'Artificing'), (u'attribute', u'MAG'), (u'category', u'Magical Active'), (u'default', u'No'), (u'skillgroup', u'Enchanting'), (u'specs', OrderedDict([(u'spec', [u'Focus Analysis', u'[Focus Type]'])])), (u'source', u'SR5'), (u'page', u'142')]), OrderedDict([(u'id', 8), (u'name', u'Artisan'), (u'attribute', u'INT'), (u'category', u'Technical Active'), (u'default', u'No'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Carpentry', u'Cooking', u'Drawing', u'Sculpting', u'[Discipline]'])])), (u'source', u'SR5'), (u'page', u'143')]), OrderedDict([(u'id', 9), (u'name', u'Assensing'), (u'attribute', u'INT'), (u'category', u'Magical Active'), (u'default', u'No'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Aura Reading', u'Astral Signatures', u'[Aura Type]'])])), (u'source', u'SR5'), (u'page', u'142')]), OrderedDict([(u'id', 10), (u'name', u'Astral Combat'), (u'attribute', u'WIL'), (u'category', u'Magical Active'), (u'default', u'No'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Magicians', u'Mana Barriers', u'Spirits', u'[Weapon Focus Type]', u'[Other Opponent Type]'])])), (u'source', u'SR5'), (u'page', u'142')]), OrderedDict([(u'id', 11), (u'name', u'Automatics'), (u'attribute', u'AGI'), (u'category', u'Combat Active'), (u'default', u'Yes'), (u'skillgroup', u'Firearms'), (u'specs', OrderedDict([(u'spec', [u'Assault Rifles', u'Cyber-Implant', u'Machine Pistols', u'Submachine Guns'])])), (u'source', u'SR5'), (u'page', u'130')]), OrderedDict([(u'id', 12), (u'name', u'Automotive Mechanic'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'No'), (u'skillgroup', u'Engineering'), (u'specs', OrderedDict([(u'spec', [u'Hover', u'Tracked', u'Walker', u'Wheeled'])])), (u'source', u'SR5'), (u'page', u'143')]), OrderedDict([(u'id', 13), (u'name', u'Banishing'), (u'attribute', u'MAG'), (u'category', u'Magical Active'), (u'default', u'No'), (u'skillgroup', u'Conjuring'), (u'specs', OrderedDict([(u'spec', [u'Spirits of Air', u'Spirits of Beasts', u'Spirits of Earth', u'Spirits of Fire', u'Spirits of Man', u'Spirits of Water', u'Guardian Spirit', u'Guidance Spirit', u'Plant Spirit', u'Task Spirit'])])), (u'source', u'SR5'), (u'page', u'142')]), OrderedDict([(u'id', 14), (u'name', u'Binding'), (u'attribute', u'MAG'), (u'category', u'Magical Active'), (u'default', u'No'), (u'skillgroup', u'Conjuring'), (u'specs', OrderedDict([(u'spec', [u'Spirits of Air', u'Spirits of Beasts', u'Spirits of Earth', u'Spirits of Fire', u'Spirits of Man', u'Spirits of Water', u'Guardian Spirit', u'Guidance Spirit', u'Plant Spirit', u'Task Spirit'])])), (u'source', u'SR5'), (u'page', u'142')]), OrderedDict([(u'id', 15), (u'name', u'Biotechnology'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'No'), (u'skillgroup', u'Biotech'), (u'specs', OrderedDict([(u'spec', [u'Bioinformatics', u'Bioware', u'Cloning', u'Gene Therapy', u'Vat Maintenance'])])), (u'source', u'SR5'), (u'page', u'144')]), OrderedDict([(u'id', 16), (u'name', u'Blades'), (u'attribute', u'AGI'), (u'category', u'Combat Active'), (u'default', u'Yes'), (u'skillgroup', u'Close Combat'), (u'specs', OrderedDict([(u'spec', [u'Axes', u'Knives', u'Swords', u'Parrying'])])), (u'source', u'SR5'), (u'page', u'130')]), OrderedDict([(u'id', 17), (u'name', u'Chemistry'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'No'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Analytical', u'Biochemistry', u'Inorganic', u'Organic', u'Physical'])])), (u'source', u'SR5'), (u'page', u'144')]), OrderedDict([(u'id', 18), (u'name', u'Clubs'), (u'attribute', u'AGI'), (u'category', u'Combat Active'), (u'default', u'Yes'), (u'skillgroup', u'Close Combat'), (u'specs', OrderedDict([(u'spec', [u'Batons', u'Hammers', u'Saps', u'Staves', u'Parrying'])])), (u'source', u'SR5'), (u'page', u'131')]), OrderedDict([(u'id', 19), (u'name', u'Compiling'), (u'attribute', u'RES'), (u'category', u'Resonance Active'), (u'default', u'No'), (u'skillgroup', u'Tasking'), (u'specs', OrderedDict([(u'spec', u'[Sprite Type]')])), (u'source', u'SR5'), (u'page', u'143')]), OrderedDict([(u'id', 20), (u'name', u'Computer'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'Yes'), (u'skillgroup', u'Electronics'), (u'specs', OrderedDict([(u'spec', [u'Edit File', u'Matrix Perception', u'Matrix Search', u'[Action]'])])), (u'source', u'SR5'), (u'page', u'144')]), OrderedDict([(u'id', 21), (u'name', u'Con'), (u'attribute', u'CHA'), (u'category', u'Social Active'), (u'default', u'Yes'), (u'skillgroup', u'Acting'), (u'specs', OrderedDict([(u'spec', [u'Fast Talk', u'Seduction'])])), (u'source', u'SR5'), (u'page', u'138')]), OrderedDict([(u'id', 22), (u'name', u'Counterspelling'), (u'attribute', u'MAG'), (u'category', u'Magical Active'), (u'default', u'No'), (u'skillgroup', u'Sorcery'), (u'specs', OrderedDict([(u'spec', [u'Combat', u'Detection', u'Health', u'Illusion', u'Manipulation'])])), (u'source', u'SR5'), (u'page', u'142')]), OrderedDict([(u'id', 23), (u'name', u'Cybercombat'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'Yes'), (u'skillgroup', u'Cracking'), (u'specs', OrderedDict([(u'spec', [u'Devices', u'Grids', u'IC', u'Personas', u'Sprites', u'[Target Type]'])])), (u'source', u'SR5'), (u'page', u'144')]), OrderedDict([(u'id', 24), (u'name', u'Cybertechnology'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'No'), (u'skillgroup', u'Biotech'), (u'specs', OrderedDict([(u'spec', [u'Bodyware', u'Cyberlimbs', u'Headware', u'Repair'])])), (u'source', u'SR5'), (u'page', u'144')]), OrderedDict([(u'id', 25), (u'name', u'Decompiling'), (u'attribute', u'RES'), (u'category', u'Resonance Active'), (u'default', u'No'), (u'skillgroup', u'Tasking'), (u'specs', OrderedDict([(u'spec', u'[Sprite Type]')])), (u'source', u'SR5'), (u'page', u'143')]), OrderedDict([(u'id', 26), (u'name', u'Demolitions'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Commercial Explosives', u'Defusing', u'Improvised Explosives', u'Plastic Explosives'])])), (u'source', u'SR5'), (u'page', u'144')]), OrderedDict([(u'id', 27), (u'name', u'Disenchanting'), (u'attribute', u'MAG'), (u'category', u'Magical Active'), (u'default', u'No'), (u'skillgroup', u'Enchanting'), (u'specs', OrderedDict([(u'spec', u'[Type]')])), (u'source', u'SR5'), (u'page', u'142')]), OrderedDict([(u'id', 28), (u'name', u'Disguise'), (u'attribute', u'INT'), (u'category', u'Physical Active'), (u'default', u'Yes'), (u'skillgroup', u'Stealth'), (u'specs', OrderedDict([(u'spec', [u'Camouflage', u'Cosmetic', u'Theatrical', u'Trideo & Video'])])), (u'source', u'SR5'), (u'page', u'133')]), OrderedDict([(u'id', 29), (u'name', u'Diving'), (u'attribute', u'BOD'), (u'category', u'Physical Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Arctic', u'Cave', u'Commercial', u'Controlled Hyperventilation', u'Liquid Breathing Apparatus', u'Military', u'Mixed Gas', u'Oxygen Extraction', u'SCUBA', u'[Other Breathing Apparatus]', u'[Other Condition]'])])), (u'source', u'SR5'), (u'page', u'133')]), OrderedDict([(u'id', 30), (u'name', u'Electronic Warfare'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'No'), (u'skillgroup', u'Cracking'), (u'specs', OrderedDict([(u'spec', [u'Communications', u'Encryption', u'Jamming', u'Sensor Operations'])])), (u'source', u'SR5'), (u'page', u'144')]), OrderedDict([(u'id', 31), (u'name', u'Escape Artist'), (u'attribute', u'AGI'), (u'category', u'Physical Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Contortionism', u'Cuffs', u'Ropes', u'Zip Ties', u'[Other Restraint]'])])), (u'source', u'SR5'), (u'page', u'133')]), OrderedDict([(u'id', 32), (u'name', u'Etiquette'), (u'attribute', u'CHA'), (u'category', u'Social Active'), (u'default', u'Yes'), (u'skillgroup', u'Influence'), (u'specs', OrderedDict([(u'spec', [u'Corporate', u'High Society', u'Media', u'Mercenary', u'Street', u'Yakuza'])])), (u'source', u'SR5'), (u'page', u'138')]), OrderedDict([(u'id', 33), (u'name', u'Exotic Melee Weapon'), (u'attribute', u'AGI'), (u'category', u'Combat Active'), (u'default', u'No'), (u'exotic', u'Yes'), (u'skillgroup', None), (u'specs', None), (u'source', u'SR5'), (u'page', u'131')]), OrderedDict([(u'id', 34), (u'name', u'Exotic Ranged Weapon'), (u'attribute', u'AGI'), (u'category', u'Combat Active'), (u'default', u'No'), (u'exotic', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Blowguns', u'Gyrojet Pistols', u'Flamethrowers', u'Lasers'])])), (u'source', u'SR5'), (u'page', u'131')]), OrderedDict([(u'id', 35), (u'name', u'First Aid'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'Yes'), (u'skillgroup', u'Biotech'), (u'specs', OrderedDict([(u'spec', [u'Broken Bones', u'Burns', u'Gunshot Wounds', u'Resuscitation', u'[Type of Treatment]'])])), (u'source', u'SR5'), (u'page', u'144')]), OrderedDict([(u'id', 36), (u'name', u'Forgery'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Counterfeiting', u'Credstick Forgery', u'False ID', u'Image Doctoring', u'Paper Forgery'])])), (u'source', u'SR5'), (u'page', u'144')]), OrderedDict([(u'id', 37), (u'name', u'Free-Fall'), (u'attribute', u'BOD'), (u'category', u'Physical Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'BASE Jumping', u'Break-Fall', u'Bungee', u'HALO', u'Low Altitude', u'Parachute', u'Static Line', u'Wingsuit', u'Zipline'])])), (u'source', u'SR5'), (u'page', u'133')]), OrderedDict([(u'id', 38), (u'name', u'Gunnery'), (u'attribute', u'AGI'), (u'category', u'Vehicle Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Artillery', u'Ballistic', u'Energy', u'Guided Missile', u'Rocket'])])), (u'source', u'SR5'), (u'page', u'146')]), OrderedDict([(u'id', 39), (u'name', u'Gymnastics'), (u'attribute', u'AGI'), (u'category', u'Physical Active'), (u'default', u'Yes'), (u'skillgroup', u'Athletics'), (u'specs', OrderedDict([(u'spec', [u'Balance', u'Climbing', u'Dance', u'Leaping', u'Parkour', u'Rolling'])])), (u'source', u'SR5'), (u'page', u'133')]), OrderedDict([(u'id', 40), (u'name', u'Hacking'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'Yes'), (u'skillgroup', u'Cracking'), (u'specs', OrderedDict([(u'spec', [u'Devices', u'Files', u'Hosts', u'Personas'])])), (u'source', u'SR5'), (u'page', u'145')]), OrderedDict([(u'id', 41), (u'name', u'Hardware'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'No'), (u'skillgroup', u'Electronics'), (u'specs', OrderedDict([(u'spec', [u'Commlinks', u'Cyberdecks', u'Smartguns', u'[Hardware Type]'])])), (u'source', u'SR5'), (u'page', u'145')]), OrderedDict([(u'id', 42), (u'name', u'Heavy Weapons'), (u'attribute', u'AGI'), (u'category', u'Combat Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Assault Cannons', u'Grenade Launchers', u'Guided Missiles', u'Machine Guns', u'Rocket Launchers'])])), (u'source', u'SR5'), (u'page', u'132')]), OrderedDict([(u'id', 43), (u'name', u'Impersonation'), (u'attribute', u'CHA'), (u'category', u'Social Active'), (u'default', u'Yes'), (u'skillgroup', u'Acting'), (u'specs', OrderedDict([(u'spec', [u'Dwarf', u'Elf', u'Human', u'Ork', u'Troll'])])), (u'source', u'SR5'), (u'page', u'138')]), OrderedDict([(u'id', 44), (u'name', u'Industrial Mechanic'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'No'), (u'skillgroup', u'Engineering'), (u'specs', OrderedDict([(u'spec', [u'Electrical Power Systems', u'Hydraulics', u'HVAC', u'Industrial Robotics', u'Structural', u'Welding'])])), (u'source', u'SR5'), (u'page', u'145')]), OrderedDict([(u'id', 45), (u'name', u'Instruction'), (u'attribute', u'CHA'), (u'category', u'Social Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', u'[Active or Knowledge Skill Category]')])), (u'source', u'SR5'), (u'page', u'138')]), OrderedDict([(u'id', 46), (u'name', u'Intimidation'), (u'attribute', u'CHA'), (u'category', u'Social Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Interrogation', u'Mental', u'Physical', u'Torture'])])), (u'source', u'SR5'), (u'page', u'139')]), OrderedDict([(u'id', 47), (u'name', u'Leadership'), (u'attribute', u'CHA'), (u'category', u'Social Active'), (u'default', u'Yes'), (u'skillgroup', u'Influence'), (u'specs', OrderedDict([(u'spec', [u'Command', u'Direct', u'Inspire', u'Rally'])])), (u'source', u'SR5'), (u'page', u'139')]), OrderedDict([(u'id', 48), (u'name', u'Locksmith'), (u'attribute', u'AGI'), (u'category', u'Technical Active'), (u'default', u'No'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Combination', u'Keypad', u'Maglock', u'Tumbler', u'Voice Recognition', u'[Lock Type]'])])), (u'source', u'SR5'), (u'page', u'145')]), OrderedDict([(u'id', 49), (u'name', u'Longarms'), (u'attribute', u'AGI'), (u'category', u'Combat Active'), (u'default', u'Yes'), (u'skillgroup', u'Firearms'), (u'specs', OrderedDict([(u'spec', [u'Extended-Range Shots', u'Long-Range Shots', u'Shotguns', u'Sniper Rifles'])])), (u'source', u'SR5'), (u'page', u'132')]), OrderedDict([(u'id', 50), (u'name', u'Medicine'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'No'), (u'skillgroup', u'Biotech'), (u'specs', OrderedDict([(u'spec', [u'Cosmetic Surgery', u'Extended Care', u'Implant Surgery', u'Magical Health', u'Organ Culture', u'Trauma Surgery'])])), (u'source', u'SR5'), (u'page', u'145')]), OrderedDict([(u'id', 51), (u'name', u'Nautical Mechanic'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'No'), (u'skillgroup', u'Engineering'), (u'specs', OrderedDict([(u'spec', [u'Motorboat', u'Sailboat', u'Ship', u'Submarine'])])), (u'source', u'SR5'), (u'page', u'145')]), OrderedDict([(u'id', 52), (u'name', u'Navigation'), (u'attribute', u'INT'), (u'category', u'Technical Active'), (u'default', u'Yes'), (u'skillgroup', u'Outdoors'), (u'specs', OrderedDict([(u'spec', [u'Augmented Reality Markers', u'Celestial', u'Compass', u'Maps', u'GPS'])])), (u'source', u'SR5'), (u'page', u'145')]), OrderedDict([(u'id', 53), (u'name', u'Negotiation'), (u'attribute', u'CHA'), (u'category', u'Social Active'), (u'default', u'Yes'), (u'skillgroup', u'Influence'), (u'specs', OrderedDict([(u'spec', [u'Bargaining', u'Contracts', u'Diplomacy'])])), (u'source', u'SR5'), (u'page', u'139')]), OrderedDict([(u'id', 54), (u'name', u'Palming'), (u'attribute', u'AGI'), (u'category', u'Physical Active'), (u'default', u'No'), (u'skillgroup', u'Stealth'), (u'specs', OrderedDict([(u'spec', [u'Legerdemain', u'Pickpocket', u'Pilfering'])])), (u'source', u'SR5'), (u'page', u'133')]), OrderedDict([(u'id', 55), (u'name', u'Perception'), (u'attribute', u'INT'), (u'category', u'Physical Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Hearing', u'Scent', u'Searching', u'Taste', u'Touch', u'Visual'])])), (u'source', u'SR5'), (u'page', u'133')]), OrderedDict([(u'id', 56), (u'name', u'Performance'), (u'attribute', u'CHA'), (u'category', u'Social Active'), (u'default', u'Yes'), (u'skillgroup', u'Acting'), (u'specs', OrderedDict([(u'spec', [u'Acting', u'Comedy', u'Presentation', u'[Musical Instrument]'])])), (u'source', u'SR5'), (u'page', u'139')]), OrderedDict([(u'id', 57), (u'name', u'Pilot Aerospace'), (u'attribute', u'REA'), (u'category', u'Vehicle Active'), (u'default', u'No'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Deep Space', u'Launch Craft', u'Remote Operation', u'Semiballistic', u'Suborbital'])])), (u'source', u'SR5'), (u'page', u'146')]), OrderedDict([(u'id', 58), (u'name', u'Pilot Aircraft'), (u'attribute', u'REA'), (u'category', u'Vehicle Active'), (u'default', u'No'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Fixed-Wing', u'Lighter-Than-Air', u'Remote Operation', u'Rotary Wing', u'Tilt Wing', u'Vectored Thrust'])])), (u'source', u'SR5'), (u'page', u'147')]), OrderedDict([(u'id', 59), (u'name', u'Pilot Ground Craft'), (u'attribute', u'REA'), (u'category', u'Vehicle Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Bike', u'Hovercraft', u'Remote Operation', u'Tracked', u'Wheeled'])])), (u'source', u'SR5'), (u'page', u'147')]), OrderedDict([(u'id', 60), (u'name', u'Pilot Walker'), (u'attribute', u'REA'), (u'category', u'Vehicle Active'), (u'default', u'No'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Biped', u'Multiped', u'Quadruped', u'Remote Operation'])])), (u'source', u'SR5'), (u'page', u'147')]), OrderedDict([(u'id', 61), (u'name', u'Pilot Watercraft'), (u'attribute', u'REA'), (u'category', u'Vehicle Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Hydrofoil', u'Motorboat', u'Remote Operation', u'Sail', u'Ship', u'Submarine'])])), (u'source', u'SR5'), (u'page', u'147')]), OrderedDict([(u'id', 62), (u'name', u'Pistols'), (u'attribute', u'AGI'), (u'category', u'Combat Active'), (u'default', u'Yes'), (u'skillgroup', u'Firearms'), (u'specs', OrderedDict([(u'spec', [u'Holdouts', u'Revolvers', u'Semi-Automatics', u'Tasers'])])), (u'source', u'SR5'), (u'page', u'132')]), OrderedDict([(u'id', 63), (u'name', u'Registering'), (u'attribute', u'RES'), (u'category', u'Resonance Active'), (u'default', u'No'), (u'skillgroup', u'Tasking'), (u'specs', OrderedDict([(u'spec', u'[Sprite Type]')])), (u'source', u'SR5'), (u'page', u'143')]), OrderedDict([(u'id', 64), (u'name', u'Ritual Spellcasting'), (u'attribute', u'MAG'), (u'category', u'Magical Active'), (u'default', u'No'), (u'skillgroup', u'Sorcery'), (u'specs', OrderedDict([(u'spec', u'[Keyword]')])), (u'source', u'SR5'), (u'page', u'142')]), OrderedDict([(u'id', 65), (u'name', u'Running'), (u'attribute', u'STR'), (u'category', u'Physical Active'), (u'default', u'Yes'), (u'skillgroup', u'Athletics'), (u'specs', OrderedDict([(u'spec', [u'Desert', u'Distance', u'Sprinting', u'Urban', u'Wilderness', u'[Terrain]'])])), (u'source', u'SR5'), (u'page', u'133')]), OrderedDict([(u'id', 66), (u'name', u'Sneaking'), (u'attribute', u'AGI'), (u'category', u'Physical Active'), (u'default', u'Yes'), (u'skillgroup', u'Stealth'), (u'specs', OrderedDict([(u'spec', [u'Desert', u'Jungle', u'Urban', u'Wilderness', u'[Terrain]'])])), (u'source', u'SR5'), (u'page', u'133')]), OrderedDict([(u'id', 67), (u'name', u'Software'), (u'attribute', u'LOG'), (u'category', u'Technical Active'), (u'default', u'No'), (u'skillgroup', u'Electronics'), (u'specs', OrderedDict([(u'spec', [u'Data Bombs', u'[Complex Form]'])])), (u'source', u'SR5'), (u'page', u'145')]), OrderedDict([(u'id', 68), (u'name', u'Spellcasting'), (u'attribute', u'MAG'), (u'category', u'Magical Active'), (u'default', u'No'), (u'skillgroup', u'Sorcery'), (u'specs', OrderedDict([(u'spec', [u'Combat', u'Detection', u'Health', u'Illusion', u'Manipulation'])])), (u'source', u'SR5'), (u'page', u'143')]), OrderedDict([(u'id', 69), (u'name', u'Summoning'), (u'attribute', u'MAG'), (u'category', u'Magical Active'), (u'default', u'No'), (u'skillgroup', u'Conjuring'), (u'specs', OrderedDict([(u'spec', [u'Spirits of Air', u'Spirits of Beasts', u'Spirits of Earth', u'Spirits of Fire', u'Spirits of Man', u'Spirits of Water', u'Guardian Spirit', u'Guidance Spirit', u'Plant Spirit', u'Task Spirit'])])), (u'source', u'SR5'), (u'page', u'143')]), OrderedDict([(u'id', 70), (u'name', u'Survival'), (u'attribute', u'WIL'), (u'category', u'Physical Active'), (u'default', u'Yes'), (u'skillgroup', u'Outdoors'), (u'specs', OrderedDict([(u'spec', [u'Desert', u'Forest', u'Jungle', u'Mountain', u'Polar', u'Urban', u'[Terrain]'])])), (u'source', u'SR5'), (u'page', u'133')]), OrderedDict([(u'id', 71), (u'name', u'Swimming'), (u'attribute', u'STR'), (u'category', u'Physical Active'), (u'default', u'Yes'), (u'skillgroup', u'Athletics'), (u'specs', OrderedDict([(u'spec', [u'Dash', u'Long Distance'])])), (u'source', u'SR5'), (u'page', u'134')]), OrderedDict([(u'id', 72), (u'name', u'Throwing Weapons'), (u'attribute', u'AGI'), (u'category', u'Combat Active'), (u'default', u'Yes'), (u'skillgroup', None), (u'specs', OrderedDict([(u'spec', [u'Aerodynamic', u'Blades', u'Non-Aerodynamic'])])), (u'source', u'SR5'), (u'page', u'132')]), OrderedDict([(u'id', 73), (u'name', u'Tracking'), (u'attribute', u'INT'), (u'category', u'Physical Active'), (u'default', u'Yes'), (u'skillgroup', u'Outdoors'), (u'specs', OrderedDict([(u'spec', [u'Desert', u'Forest', u'Jungle', u'Mountain', u'Polar', u'Urban', u'[Terrain]'])])), (u'source', u'SR5'), (u'page', u'134')]), OrderedDict([(u'id', 74), (u'name', u'Unarmed Combat'), (u'attribute', u'AGI'), (u'category', u'Combat Active'), (u'default', u'Yes'), (u'skillgroup', u'Close Combat'), (u'specs', OrderedDict([(u'spec', [u'Blocking', u'Cyber Implants', u'Subduing Combat', u'[Martial Art]'])])), (u'source', u'SR5'), (u'page', u'132')])]
      
      for skill in skills_new:
            s = models.Skills.objects.all().filter(name=skill['name'])[0]
            s.category = skill['category']
            if skill['specs'] and skill['specs'].get('spec'):
                  if isinstance(skill['specs'].get('spec'), list):
                        s.spec = "-".join(skill['specs'].get('spec'))
                  else:
                        s.spec = skill['specs'].get('spec')
            else:
                  s.spec = ''
            print s.spec
            s.source = "%s p%s" % (skill['source'], skill['page'])
            if skill['default'] == 'No':
                  s.default = False
            else:
                  s.default = True
            s.save()

def gen():
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
                  {'name': 'Arcana', 'id': 'archery', 'attribute': 'log'},
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
                  {'name': 'Exotic Melee Weapon', 'id': 'exoticweapon', 'attribute': 'agi'},
                  {'name': 'Exotic Ranged Weapon', 'id': 'exoticweapon', 'attribute': 'agi'},
                  {'name': 'Free-Fall', 'id': 'freefall', 'attribute': 'bod'},
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
                  {'name': 'Throwing Weapons', 'id': 'throwingweapon', 'attribute': 'agi'},
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

gen()
populate_existing()

