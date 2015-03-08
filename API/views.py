__author__ = 'albertlwohletz'
import json
from django.http import HttpResponse
from API import models

#def add_char(request):
#    # Get Request Information
#    name = request.GET['name']
#    image = request.GET['image']
#    hp = request.GET['hp']
#    ac = request.GET['ac']
#    count = int(request.GET['count'])
#
#    # Create new entries in DB
#    for i in range(0, count):
#        new_char = models.Chars(name=name + ' ' + str(i + 1), image=image, hp=hp, ac=ac)
#        new_char.save()
#
#    return HttpResponse("Success")
#
#def remove_char(request):
#    id = request.GET['id']
#    models.Chars.objects.filter(id=id).delete()
#    return HttpResponse('Success')
#
## Returns json object of char for specified id.
#def get_char(request):
#    id = int(request.GET['id'])
#    char = list(models.Chars.objects.filter(id=id))[0]
#
#    result_data = {"hp": char.hp, "ac": char.ac, "img": char.image, "name": char.name}
#    return HttpResponse(json.dumps(result_data), content_type="text/json")
#
#def edit_char(request):
#    # Grab Variables from request.
#    id = int(request.GET['id'])
#    ac = request.GET['ac']
#    hp = request.GET['hp']
#    name = request.GET['name']
#    image = request.GET['image']
#
#    # Find Database Entry
#    char = models.Chars.objects.get(pk=id)
#
#    # Edit Database Entry
#    char.ac = ac
#    char.hp = hp
#    char.name = name
#    char.image = image
#    char.save()
#
#    return HttpResponse("Success", content_type="text/html")
