# Turns xml dump to json dump of metas
import xmltodict
import json



def gen(wares):
	s = ""
	for ware in wares:
		s += "{'name': '%s', 'category': '%s', 'capacity': '%s', 'source': '%s', 'page': '%s'," % (ware['name'], ware['category'], ware['capacity'], ware['source'], ware['page'])

		# Get Rating Attribute
		if ware.get('rating', None):
			s += "'ess': '%s', " % ware['ess'].replace('Rating', '').replace('(', '').replace(')', '').replace('*', '').replace(' ', '')
			s += "'cost': '%s', " % ware['cost'].replace('Rating', '').replace('(', '').replace(')', '').replace('*', '').replace(' ', '')
			s += "'avail': '%s', " % ware['avail'].replace('Rating', '').replace('(', '').replace(')', '').replace('*', '').replace(' ', '')
			s += "'max_rating': '%s'," % ware['rating']
		else:
			s += "'ess': '%s', 'cost': '%s', 'avail': '%s', 'max_rating': '1'," % (ware['ess'], ware['cost'] ,ware['avail'])

		s += "'bonus': "
		if ware.get('bonus'):
			s+= json.dumps(ware['bonus'])
		else:
			s += '{}'
		s += '},\n'

	print s

f = open('/Users/albertlwohletz/Projects/Wiz/API/data/datadumps/cyberware.xml')
o = xmltodict.parse(f.read())
gen(o['chummer']['cyberwares']['cyberware'])

f = open('/Users/albertlwohletz/Projects/Wiz/API/data/datadumps/bioware.xml')
o = xmltodict.parse(f.read())
gen(o['chummer']['biowares']['bioware'])