import xmltodict
from API import models

f = open('/Users/albertlwohletz/Projects/Wiz/API/data/datadumps/spells.xml')
o = xmltodict.parse(f.read())

spells = o['chummer']['spells']['spell']

for spell in spells:
	print spell
	entry = models.Spells(
		name=spell['name'], 
		descriptor=str(spell['descriptor']),
		category=spell['category'],
		type=spell['type'],
		range=spell['range'],
		damage=spell['damage'],
		dv=spell['dv'],
		source= "%s p.%s" % (spell['source'], spell['page'])
	)
	entry.save()