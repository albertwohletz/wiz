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
	for k,v in race.iteritems():
		s += "'%s': %s," % (k,v)
	s += '},'
	print s 

