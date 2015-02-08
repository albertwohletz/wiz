from API import models
def gen_qualities():
	f = open('/Users/albertlwohletz/Projects/Wiz/API/data/datadumps/positive_qualities.txt')
	lines = f.read().split('\n')
	for line in lines:
		name, karma, description = line.split('	')
		entry = models.PositiveQualities(name=name, karma=karma, description=description)
		entry.save()