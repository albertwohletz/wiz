# Turns xml dump to json dump of metas
import xmltodict
from API import models
import json

f = open('/Users/albertlwohletz/Projects/Wiz/API/data/datadumps/metatypes.xml')
o = xmltodict.parse(f.read())

metatypes = o['chummer']['metatypes']['metatype']

for race in metatypes:
	name = race['name'].lower()
	race.pop('name')
	race.pop('category')
	race.pop('id')
	race.pop('walk')
	race.pop('run')
	race.pop('sprint')

	s = "'%s': {" % name

	# Do Attributes
	atts = ['bod', 'agi', 'rea', 'str', 'cha', 'int', 'log', 'wil', 'edg', 'mag', 'res', 'ini', 'ess'];
	for att in atts:
		s += "'%s': {'min': '%s', 'max': '%s', 'aug': '%s'}," % (att, race[att+'min'], race[att+'max'], race[att+'aug'])

		race.pop(att+'min')
		race.pop(att+'max')
		race.pop(att+'aug')

	qualities = race.pop('qualities', None)
	s += "'qualities': ["
	if qualities:
		if isinstance(qualities['positive']['quality'], unicode):
			s += "'%s'," % qualities['positive']['quality']
		else:
			for quality in qualities['positive']['quality']:
				s += "'%s'," % quality

	s += "],"

	bonuses = race.pop('bonus')

	s += "'bonus': {"
	if bonuses:
		for k,v in bonuses.iteritems():
			s += "'%s': '%s'," % (k,v)
	s += "},"

	for k,v in race.iteritems():
		s += "'%s': '%s'," % (k,v)

	s += '},'
	print s 

    		