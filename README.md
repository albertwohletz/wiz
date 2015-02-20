Basic Tab Structure:

Priorities
--------
In initial Build this just lets you set your 5 priority levels in a sum to 10 Method.
Future builds will support karma and other buy methods.

Common
--------
This lets you set Attributes, Positive Qualities, and Contacts.
Shows Limits? (Or put these on skills?)
Prob add limits here for sure


Skills
--------
Skills/Skill Groups/Knowledge Skills
Group skills will overwrite non group skills.

Spells and Spirits
--------
Spell List.
Spirits
Tradition
Only show if applicable

Adept Powers
--------
Add adept powers
Only show if applicable

Cyberware/Bioware
--------
Add Cyberware
Add Bioware

Street Gear
--------
Lifestyle, Armor, Weapons, Gear, Pets

Vehicles and Drones
--------

Charecter Summary
---------------
Stats and dice roller.

Charecter Info
--------
20 Questions


Dice Roller
-------------

Known Issues
============
Some qualities do not let you apply the rating, instead take them multiple times for now.

Screen Shots
=============
![First Screenshot](http://i.imgur.com/lVgW5Aq.png "First Screenshot, shows you what planned look/feel is like")
![Screenshot](http://i.imgur.com/bVmhU16.png)
![Screenshot](http://i.imgur.com/rB4pXaq.png)
![Screenshot](http://i.imgur.com/Ds80jdX.png)

Todo
========
race as attribute modifier.
summary_data['modifications'] = list of mods.

for mod in summary_data['modifications']{
	for attribute in mod:
		summary_data['mod'] += attribute
}

a mod = {
	'body_base': 2,
	'body_aug': 2

	'string': 'thermal vision'
}

do i need body_base_min and body_base_max?

Save Tab
Adding Items tabs(adept/spell/etc).
Implement karma slider.

Races in DB -> more races in project.
skills in db.
