from API import models
def gen_positive_qualities():
	f = open('/Users/albertlwohletz/Projects/Wiz/API/data/datadumps/positive_qualities.txt')
	lines = f.read().split('\n')
	for line in lines:
		name, karma, description = line.split('	')
		entry = models.PositiveQualities(name=name, karma=karma, description=description)
		entry.save()

def gen_negative_qualities():
	f = open('/Users/albertlwohletz/Projects/Wiz/API/data/datadumps/negative_qualities.txt')
	lines = f.read().split('\n')
	for line in lines:
		if len(line) > 0:
			name, karma, description = line.split('	')
			entry = models.NegativeQualities(name=name, karma=karma, description=description)
			entry.save()