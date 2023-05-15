/*	-INFORMATION-
	Subject:	Player Companion
	Effect:		This script adds classes, races, weapons, backgrounds, spells, feats; from heroes of the orient v. 2.0
				This is taken from the DMs Guild website (http://www.dmsguild.com/product/187283/)
				This Player Companion is made by Marc Alttuldisch
	Date:		2018-01-08 (sheet v12.999)
	Please support the creator of this content (Marc Alttuldisch) and download his material from the DMs Guild website: http://www.dmsguild.com/product/187283/
*/

var iFileName = "Heroes Of The Orient.js";
RequiredSheetVersion(12.999);

SourceList.MAH={
	name : "Marc Alttuldisch: Heroes of the Orient",
	abbreviation : "MA:HOTO",
	group : "Dungeon Masters Guild",
	url : "http://www.dmsguild.com/product/187283/"
};

//Classes Of The Orient
ClassList["kensai"] = {
	regExpSearch : /kensai/i,
	name : "Kensai",
	source : ["MAH", 43],
	abilitySave : 6,
	primaryAbility : "\n \u2022 Kensai: Strength or Dexterity;",
	prereqs : "\n \u2022 Kensai: Strength 13 or Dexterity 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Dex", "Cha"],
	skills : ["\n\n" + toUni("Kensai") + ": Choose two from Acrobatics, Athletics, Insight, Intimidation, Perception, Persuasion, and Stealth."],
	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],
	weapons : [
		[true, false, ["ninja-to", "wakizashi scimitar"]],
		[true, false]
	],
	equipment : "Kensai starting equipment:\n 78i\u2022 A melee weapon that deals slashing damage;\n \u2022 2 tanto dagger, -or- 2 ono handaxe -or- 5 uchi-ne javelin;\n \u2022 A dungeoneer’s pack -or- an explorer’s pack",
	subclasses : ["Kensai Martial Discipline", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature1" : {
			name : "Martial Discipline",
			source : ["MAH", 44],
			minlevel : 1,
			description : desc([
				"Choose a Kensai Martial Discipline I commit to and put it in the \"Class\" field",
				"Choose either the Blademaster, Master of the Unseen Hand, Samurai, Shinobi, or Ravager"
			]),
		},
		"unarmored defense" : {
			name : "Unarmored Defense",
			source : ["MAH", 43],
			minlevel : 1,
			description : desc([
				"With no armor or shields, my AC is 10 + Dex mod + Cha mod"
			]),
			addarmor : "Unarmored Defense (Cha)"
		},
		"ki" : {
			name : "Ki",
			source : ["MAH", 43],
			minlevel : 2,
			description : desc([
				"W/bonded wpn.-spend ki for abilities/manuevers-spend 1 hr meditating w/ to regain ki"
			]),
			usages : ["", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			recovery : "short rest",
		},
		"weapon bond" : {
			name : "Weapon Bond",
			source : ["MAH", 44],
			minlevel : 2,
			description : desc([
				"I can bond with one slashing weapon by meditating with it for 8 hrs",
				"Once done I must bond each day for 1 hr, can't be disarmed/summon as a bonus action",
				"@5; treated as magical for overcoming damage resistance",
				"@9; If I hit, bonus action to damage an foe adj to target = clash + Cha mod/1 ki",
				"@20; I can add a d4 to all attack rolls made with my bonded weapon"
			]),
			action : ["bonus action", ""]
		},
		"grace" : {
			name : "Grace",
			source : ["MAH", 44],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can negate disadv on an attack roll with my bonded weapon"
			]),
			usages : [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
			recovery : "short rest",
			action : ["bonus action", " (negate disadv)"]
		},
		"clash" : {
			name : "Clash",
			source : ["MAH", 44],
			minlevel : 7,
			description : desc([
				"Once per turn, I can deal an additional 1d4 force damage with my bonded weapon"
			]),
			additional : ["", "", "", "", "", "", "1d4", "1d4", "1d4", "1d4", "2d4", "2d4", "2d4", "2d4", "2d4", "2d4", "3d4", "3d4", "3d4", "3d4"]
		},
		"battle clarity" : {
			name : "Battle Clarity",
			source : ["MAH", 44],
			mnlevel : 14,
			description : desc([
				"If charmed or paralyzed, I can expend 1 Ki as a bonus action to negate the effect"
			]),
			action : ["bonus action", ""]
		},
		"iaijutsu" : {
			name : "Iaijutsu",
			source : ["MAH", 44],
			minlevel : 20,
			description : desc([
				"Can make opportunity attacks w/my bonded weapon vs creatures that enter my reach"
			]),
		},
	},
};
ClassList["shogun"] = {
	regExpSearch : /shogun/i,
	name : "Shogun",
	source : ["MAH", 54],
	abilitySave : 6,
	primaryAbility : "\n \u2022 Shogun: Charisma;",
	prereqs : "\n \u2022 Kensai: Strength 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 10,
	saves : ["Con", "Cha"],
	skills : ["\n\n" + toUni("Kensai") + ": Choose two from Athletics, Deception, History, Insight, Intimidation, Medicine, and Persuasion."],
	armor : [
		[true, true, true, true],
		[true, true, false, true]
	],
	weapons : [
		[true, true],
		[true, false]
	],
	equipment : "Shogun starting equipment:\n \u2022 A simple weapon -or- a martial weapon;\n \u2022 A chainmail, a shield and a masked helmet (with the mask resembling the beast I choose as a watchful companion;\n \u2022 A dungeoneer’s pack -or- an explorer’s pack.",
	subclasses : ["Shogun Strategic Discipline", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"imposing authority" : {
			name : "Imposing Authority",
			source : ["MAH", 54],
			minlevel : 1,
			description : desc([
				"Adv on all Cha (persuasion)/(intimidation)checks, IF: at least one ally in 10 ft of me"
			]),
			extraname : "Imposing Authority",
			eval : "ClassFeatureOptions(['shogun', 'imposing authority', 'ready for battle', 'extra']); ClassFeatureOptions(['shogun', 'imposing authority', 'watchful companion', 'extra']);",
			removeeval : "ClassFeatureOptions(['shogun', 'imposing authority', 'ready for battle', 'extra'], 'remove'); ClassFeatureOptions(['shogun', 'imposing authority', 'patient defense', 'extra'], 'remove');",
			"ready for battle" : {
				name : "Ready for Battle",
				source : ["MAH", 54],
				minlevel : 1,
				description : desc([
					"When I roll initiative, I gain temp hp = to my shogun level + my Cha mod"
				]),
			},
			"watchful companion" : {
				name : "Watchful Companion",
				source : ["MAH", 54],
				minlevel : 1,
				description : desc([
					"Choose a tiny beast that can fly, w/CR:0 (hp = 1/2 my hp or its hp), (only one)",
					"It soars 100 ft. high above me when commanded, but needs 8 hr.s of sleep/day, I see through its eyes; It can't attack If it dies, I get a new one, by bonding w/it for24 hours"
				]),
			},
		},
		"command dice" : {
			name : "Command Dice",
			source : ["MAH", 54],
			minlevel : 2,
			description : desc([
				"Command dice fuel my features; Regain after a short or long rest"
			]),
			additional : ["", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6"],
			usages : [0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5],
			recovery : "short rest",
			extraname : "Command Dice",
			eval : "ClassFeatureOptions(['shogun', 'command dice', 'ancestral decree', 'extra']); ClassFeatureOptions(['shogun', 'command dice', 'might', 'extra']);",
			removeeval : "ClassFeatureOptions(['shogun', 'command dice', 'ancestral decree', 'extra'], 'remove'); ClassFeatureOptions(['shogun', 'command dice', 'might', 'extra'], 'remove');",
			"ancestral decree" : {
				name : "Ancestral Decree",
				source : ["MAH", 54],
				minlevel : 2,
				description : desc([
					"(Action)-grant another creature that sees/hears me temp hp = the command die spent",
					"@11th level; I affect willing allies in 30 ft of me that can see/hear me"
				]),
				action : ["action", ""]
			},
			"might" : {
				name : "Might",
				source : ["MAH", 55],
				minlevel : 2,
				description : desc([
					"(action)-spend a command die-direct one companion to strike. Choose a friendly creature that sees/hears me-(reaction)-creature immediately makes one weapon attack w/adv, adding the command die to the attack’s damage roll"
				]),
				action : ["action", ""]
			},
		},
		"fighting style" : {
			name : "Fighting Style",
			source : ["MAH", 55],
			minlevel : 2,
			description : desc([
				"Choose a Fighting Style for the shogun using the \"Choose Feature\" button above"
			]),
			choices : ["Archery", "Defense", "Dueling"],
			"archery" : {
				name : "Archery Fighting Style",
				description : desc([
					"+2 bonus to attack rolls I make with ranged weapons"
				]),
				calcChanges : {
					atkCalc : ["if (isRangedWeapon) {output.extraHit += 2; }; ", "My ranged weapons get a +2 bonus on the To Hit."]
				}
			},
			"dueling" : {
				name : "Dueling Fighting Style",
				description : desc([
					"+2 to damage rolls when wielding a melee weapon in one hand and no other weapons"
				]),
				calcChanges : {
					atkCalc : ["var areOffHands = function(n){for(var i=1;i<=n;i++){if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) {return true; }; }; }(FieldNumbers.actions); if (!areOffHands && isMeleeWeapon && !(/\\b(2|two).?hand(ed)?s?\\b/i).test(theWea.description)) {output.extraDmg += 2; }; ", "When I'm wielding a melee weapon in one hand and no weapon in my other hand, I do +2 damage with that melee weapon. This condition will always be false if the bonus action 'Off-hand Attack' exists."]
				},
			},
			"defense" : {
				name : "Defense Fighting Style",
				description : desc([
					"+1 bonus to AC when I'm wearing armor"
				]),
				eval : "AddACMisc(1, 'Defense Fighting Style', 'When wearing armor, the class feature Defense Fighting Style gives a +1 bonus to AC', 'CurrentArmour.known && !ArmourList[CurrentArmour.known].type')",
				removeeval : "AddACMisc(0, 'Defense Fighting Style', 'When wearing armor, the class feature Defense Fighting Style gives a +1 bonus to AC')"
			},
		},
		"subclassfeature3" : {
			name : "Strategic Discipline",
			source : ["MAH", 55],
			minlevel : 3,
			description : desc([
				"Choose a Strategic Discipline I strive to emulate and put it in the \"Class\" field",
				"Choose: Crawdad , Heron , Wyvern , Tiger , Phoenix , Spider , Pegasus "
			]),
		},
		"beacon" : {
			name : "Beacon",
			source : ["MAH", 55],
			minlevel : 6,
			description : desc([
				"If ally in 30 ft of me fails a save-(reaction)-expend a command die-add die to save"
			]),
			action : ["reaction", ""],
			extraname : "Beacon",
			eval : "ClassFeatureOptions(['shogun', 'beacon', 'bountiful rest', 'extra']);",
			removeeval : "ClassFeatureOptions(['shogun', 'beacon', 'bountiful rest', 'extra'], 'remove');",
			"bountiful rest" : {
				name : "Bountiful Rest",
				source : ["MAH", 55],
				minlevel : 6,
				description : desc([
					"Roll 4/less on a hd during a short rest-can reroll the hd"
				]),
			},
		},
		"overwatch" : {
			name : "Overwatch",
			source : ["MAH", 55],
			minlevel : 9,
			description : desc([
				"(Action)-Roll command die-note the #-place ward on willing creature in 30 ft of me, I can see. When overwatched ally's ,hit w/melee weapon attack-if still in 30 ft of me, and still see them, (reaction)-I switch places with them-take hit instead",
				"Dmg is reduced an amt = # noted down. Ends if I'm unconscious paralyzed, stunned, ward another/short-long rest"
			]),
			action : ["action", ""]
		},
		"battle Cry" : {
			name : "Battle Cry",
			source : ["MAH", 55],
			minlevel : 13,
			description : desc([
				"Successfully hit a creature w/wpn attack-expend 1 command die-add to attack’s dmg roll-hostiles in 30 ft of me-Wis save (disadv) or frightened/repeat save end of turn"
			]),
		},
		"leading by example" : {
			name : "Leading by Example",
			source : ["MAH", 55],
			minlevel : 14,
			description : desc([
				"Successfully hit a creature twice during my turn, all allies in 30 ft of me attack w/adv against the creature til the beginning of my next turn"
			]),
		},
		"master and commander" : {
			name : "Master and Commander",
			source : ["MAH", 55],
			minlevel : 17,
			description : desc([
				"when I roll a command die, I may roll the die twice and take either result"
			]),
		},
		"martial law" : {
			name : "Martial Law",
			source : ["MAH", 55],
			minlevel : 20,
			description : desc([
				"When I roll initiative and have no command dice remaining, I regain 2"
			]),
		},
	},
};
//MONK - Shortened to allow subclass features to fit better - IF YOU WISH TO USE STANDARD MONK SUBCLASSES - USE "MONK"
ClassList["custommonk"] = {
	regExpSearch : /custommonk/i,
	name : "CustomMonk",
	source : [["SRD", 26], ["P", 76], ["MAH", 0]],
	primaryAbility : "\n \u2022 CustomMonk: Dexterity and Wisdom;",
	abilitySave : 5,
	prereqs : "\n \u2022 CustomMonk: Dexterity 13 and Wisdom 13;",
	die : 8,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Str", "Dex"],
	toolProfs : {
		primary : [["Artisan's tool or musical instrument", 1]]
	},
	skills : ["\n\n" + toUni("Monk") + ": Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth."],
	armor : [
		[false, false, false, false]
	],
	weapons : [
		[true, false, ["shortsword"]],
		[true, false, ["shortsword"]]
	],
	equipment : "CustomMonk starting equipment:\n \u2022 A shortsword -or- any simple weapon;\n \u2022 A dungeoneer's pack -or- an explorer's pack;\n \u2022 10 darts.\n\nAlternatively, choose 5d4 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Monastic Tradition", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"martial arts" : {
			name : "Martial Arts",
			source : [["SRD", 26], ["P", 78], ["MAH", 0]],
			minlevel : 1,
			description : desc([
				"Monk weapons: shortsword, simple weapon (not two-handed/heavy), unarmed strike",
				"With these, I can use Dex instead of Str and use the Martial Arts damage die",
				"When taking an ttack action with these, I get one unarmed strike as a bonus action"
			]),
			additional : levels.map(function (n) {
				if (n < 5) return "1d4";
				if (n < 11) return "1d6";
				if (n < 17) return "1d8";
				return "1d10";
			}),
			action : ["bonus action", " (with Attack action)"],
			extraname : "CustomMonk Featue 1",
			"unarmored defense" : {
				name : "Unarmored Defense",
				source : [["SRD", 26], ["P", 48], ["MAH", 0]],
				minlevel : 1,
				description : desc([
					"Without armor and no shield, my AC is 10 + Dexterity modifier + Wisdom modifier"
				]),
				addarmor : "Unarmored Defense (Wis)"
			},
			eval : "AddString('Extra.Notes', 'CustomMonk features:\\n\\u25C6 Lose Unarmored Defense, Martial Arts, and Unarmored Movement with armor\/shields', true); ClassFeatureOptions(['custommonk', 'martial arts', 'unarmored defense', 'extra']);",
			removeeval : "RemoveString('Extra.Notes', 'CustomMonk features:\\n\\u25C6 Lose Unarmored Defense, Martial Arts, and Unarmored Movement with armor\/shields', true); ClassFeatureOptions(['custommonk', 'martial arts', 'unarmored defense', 'extra'], 'remove');",
			calcChanges : {
				atkAdd : ["var custommonkDie = function(n) {return n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10;}; if (classes.known.custommonk && classes.known.custommonk.level && theWea && (theWea.monkweapon || (/shortsword/i).test(theWea.name) || (isMeleeWeapon && (/simple/i).test(theWea.type) && !(/\\b(heavy|(2|two).?hand(ed)?s?)\\b/i).test(theWea.description)))) {var aCustomMonkDie = custommonkDie(classes.known.custommonk.level); try {var curDie = eval(fields.Damage_Die.replace('d', '*'));} catch (e) {var curDie = 'x';}; if (isNaN(curDie) || curDie < aCusto,CustoomMonkDie) {fields.Damage_Die = '1d' + aCustomMonkDie;}; fields.Mod = StrDex;}; ", "I can use either Strength or Dexterity and my Martial Arts damage die in place of the normal damage die for any 'CustomMonk Weapons', which include unarmed strike, shortsword, and any simple melee weapon that is not two-handed or heavy."]
			},
		},
		"ki" : {
			name : "Ki",
			source : [["SRD", 27], ["P", 78], ["MAH", 0]],
			minlevel : 2,
			description : desc([
				"Spend ki to fuel actions (see third page)-rstore ki: meditate 30 min of a short rest"
			]),
			usages : ["", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			recovery : "short rest",
			extraname : "CustomMonk Featue 2",
			"flurry of blows" : {
				name : "Flurry of Blows",
				source : [["SRD", 27], ["P", 78], ["MAH", 0]],
				description : " [1 ki point]" + "\n   " + "After taking the Attack action, I can make 2 unarmed attacks as a bonus action",
				action : ["bonus action", " (after Attack action)"]
			},
			"patient defense" : {
				name : "Patient Defense",
				source : [["SRD", 27], ["P", 78], ["MAH", 0]],
				description : " [1 ki point]" + "\n   " + "As a bonus action, I can take the Dodge action",
				action : ["bonus action", ""]
			},
			"step of the wind" : {
				name : "Step of the Wind",
				source : [["SRD", 27], ["P", 78], ["MAH", 0]],
				description : " [1 ki point]" + "\n   " + "As a bonus action, I can either Dash or Disengage; My jump distance doubles when I do so",
				action : ["bonus action", ""]
			},
			"stunning strike" : {
				name : "Stunning Strike",
				source : [["SRD", 27], ["P", 79], ["MAH", 0]],
				description : " [1 ki point]" + "\n   " + "After I hit a creature with a melee weapon attack, I can spend a ki point to try to stun it" + "\n   " + "It has to succeed on a Con save or be stunned until the end of my next turn"
			},
			"unarmored movement" : {
				name : "Unarmored Movement",
				source : [["SRD", 27], ["P", 78], ["MAH", 0]],
				minlevel : 2,
				description : desc([
					"Speed increases and eventually lets me traverse some surfaces without falling as I move"
				]),
				additional : levels.map(function (n) {
					if (n < 2) return "";
					if (n < 6) return "+10 ft";
					if (n < 9) return "+15 ft";
					if (n < 10) return "+15 ft; Vertical surfaces and liquids";
					if (n < 14) return "+20 ft; Vertical surfaces and liquids";
					if (n < 18) return "+25 ft; Vertical surfaces and liquids";
					return "+30 ft; Vertical surfaces and liquids";
				}),
				changeeval : "var monkSpd = function(n) {return '+' + (n < 2 ? 0 : n < 6 ? 10 : n < 10 ? 15 : n < 14 ? 20 : n < 18 ? 25 : 30);}(classes.known.monk.level); SetProf('speed', monkSpd !== '+0', {allModes : monkSpd}, profDisplNm);"
			},
			eval : "ClassFeatureOptions(['custommonk', 'ki', 'flurry of blows', 'extra']); ClassFeatureOptions(['custommonk', 'ki', 'patient defense', 'extra']); ClassFeatureOptions(['custommonk', 'ki', 'step of the wind', 'extra']); ClassFeatureOptions(['custommonk', 'ki', 'unarmored movement', 'extra']);",
			removeeval : "ClassFeatureOptions(['custommonk', 'ki', 'flurry of blows', 'extra'], 'remove'); ClassFeatureOptions(['custommonk', 'ki', 'patient defense', 'extra'], 'remove'); ClassFeatureOptions(['custommonk', 'ki', 'step of the wind', 'extra'], 'remove'); ClassFeatureOptions(['custommonk', 'ki', 'unarmored movement', 'extra'], 'remove');",
			changeeval : "if (newClassLvl.custommonk >= 5 && (What('Extra.Notes') + What('Class Features')).toLowerCase().indexOf('stunning strike') === -1) {ClassFeatureOptions(['custommonk', 'ki', 'stunning strike', 'extra'])} else if (newClassLvl.custommonk < 5 && oldClassLvl.custommonk >= 5) {ClassFeatureOptions(['custommonk', 'ki', 'stunning strike', 'extra'], 'remove');};"
		},
		"subclassfeature3" : {
			name : "Monastic Tradition",
			source : [["SRD", 27], ["P", 78], ["MAH", 0]],
			minlevel : 3,
			description : desc([
				"Choose a Monastic Tradition to commit to and put it in the \"Class\" field on page 1",
				"Choose either Way of the Four Elements, Long Death, Open Hand, Shadow, or Sun Soul"
			]),
			extraname : "CustomMonk Featue 3",
			eval : "ClassFeatureOptions(['custommonk', 'monastic tradition', 'deflect missiles', 'extra']);",
			removeeval : "ClassFeatureOptions(['custommonk', 'monastic tradition', 'deflect missiles', 'extra'], 'remove');",
			"deflect missiles" : {
				name : "Deflect Missiles",
				source : [["SRD", 27], ["P", 78], ["MAH", 0]],
				minlevel : 3,
				description : desc([
					"As a reaction, I can reduce ranged weapon attack damage done to me",
					"If the damage is negated, I catch and may throw it back (20/60 ft) as a monk weapon"
				]),
				action : ["reaction", ""],
				additional : ["", "", "1d10 + 3 + Dexterity modifier; 1 ki to throw", "1d10 + 4 + Dexterity modifier; 1 ki to throw", "1d10 + 5 + Dexterity modifier; 1 ki to throw", "1d10 + 6 + Dexterity modifier; 1 ki to throw", "1d10 + 7 + Dexterity modifier; 1 ki to throw", "1d10 + 8 + Dexterity modifier; 1 ki to throw", "1d10 + 9 + Dexterity modifier; 1 ki to throw", "1d10 + 10 + Dexterity modifier; 1 ki to throw", "1d10 + 11 + Dexterity modifier; 1 ki to throw", "1d10 + 12 + Dexterity modifier; 1 ki to throw", "1d10 + 13 + Dexterity modifier; 1 ki to throw", "1d10 + 14 + Dexterity modifier; 1 ki to throw", "1d10 + 15 + Dexterity modifier; 1 ki to throw", "1d10 + 16 + Dexterity modifier; 1 ki to throw", "1d10 + 17 + Dexterity modifier; 1 ki to throw", "1d10 + 18 + Dexterity modifier; 1 ki to throw", "1d10 + 19 + Dexterity modifier; 1 ki to throw", "1d10 + 20 + Dexterity modifier; 1 ki to throw"]
			},
		},
		"slow fall" : {
			name : "Slow Fall",
			source : [["SRD", 27], ["P", 78], ["MAH", 0]],
			minlevel : 4,
			description : "\n   " + "As a reaction, I can reduce any falling damage I take by five times my monk level",
			additional : ["", "", "", "20 less falling damage", "25 less falling damage", "30 less falling damage", "35 less falling damage", "40 less falling damage", "45 less falling damage", "50 less falling damage", "55 less falling damage", "60 less falling damage", "65 less falling damage", "70 less falling damage", "75 less falling damage", "80 less falling damage", "85 less falling damage", "90 less falling damage", "95 less falling damage", "100 less falling damage"],
			action : ["reaction", ""]
		},
		"ki-empowered strikes" : {
			name : "Ki-Empowered Strikes",
			source : [["SRD", 28], ["P", 79], ["MAH", 0]],
			minlevel : 6,
			description : "\n   " + "My unarmed strikes count as magical for overcoming resistances and immunities",
			calcChanges : {
				atkAdd : ["if ((/unarmed strike/i).test(WeaponName)) {fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';}; ", "My unarmed strikes count as magical for overcoming resistances and immunities."]
			}
		},
		"evasion" : {
			name : "Evasion",
			source : [["SRD", 28], ["P", 79], ["MAH", 0]],
			minlevel : 7,
			description : desc([
				"My Dexterity saves vs. areas of effect negate damage on success and halve it on failure"
			]),
			savetxt : {
				text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"]
			},
			extraname : "CustomMonk Featue 7",
			eval : "ClassFeatureOptions(['custommonk', 'evasion', 'stillness of mind', 'extra']);",
			removeeval : "ClassFeatureOptions(['custommonk', 'evasion', 'stillness of mind', 'extra'], 'remove');",
			"stillness of mind" : {
				name : "Stillness of Mind",
				source : [["SRD", 28], ["P", 79]],
				minlevel : 7,
				description : desc([
					"As an action, I can end one effect on me that causes me to be charmed or frightened"
				]),
				action : ["action", ""]
			},
		},
		"purity of body" : {
			name : "Purity of Body",
			source : [["SRD", 28], ["P", 79], ["MAH", 0]],
			minlevel : 10,
			description : typeA4 ? "\n   " + "My mastery of the ki flowing through me makes me immune to poison and disease" : " [" + "I am immune to poison and disease" + "]",
			savetxt : { immune : ["poison", "disease"] } //both immune to poison damage and the poisoned condition (see sage advice)
		},
		"tongue of the sun and moon" : {
			name : "Tongue of the Sun and Moon",
			source : [["SRD", 28], ["P", 79], ["MAH", 0]],
			minlevel : 13,
			description : "\n   " + "I can understand all spoken languages and all creatures with a language understand me"
		},
		"diamond soul" : {
			name : "Diamond Soul",
			source : [["SRD", 28], ["P", 79], ["MAH", 0]],
			minlevel : 14,
			description : "\n   " + "I am proficient with all saves; I can reroll a failed save once by spending 1 ki point",
			additional : "1 ki point to reroll failed saving throw",
			saves : ["Str", "Dex", "Con", "Int", "Wis", "Cha"]
		},
		"timeless body" : {
			name : "Timeless Body",
			source : [["SRD", 28], ["P", 79], ["MAH", 0]],
			minlevel : 15,
			description : "\n   " + "I don't require food or water; I don't suffer age penalties and can't be aged magically"
		},
		"empty body" : {
			name : "Empty Body",
			source : [["SRD", 28], ["P", 79], ["MAH", 0]],
			minlevel : 18,
			description : "\n   " + "Be invisible and resist non-force damage for 1 min or cast Astral Projection on self",
			additional : "Invisible: 4 ki point; Astral Projection: 8 ki points",
			action : ["action", ""]
		},
		"perfect self" : {
			name : "Perfect Self",
			source : [["SRD", 28], ["P", 79], ["MAH", 0]],
			minlevel : 20,
			description : "\n   " + "I regain 4 ki points if I have no more remaining when I roll initiative"
		}
	},
};

//Sub-Classes Of The Orient"
//BARBARIAN PATHS:
AddSubClass("barbarian", "brawn", {
	regExpSearch : /brawn/i,
	subname : "Path of Brawn",
	fullname : "Brawn",
	source : ["MAH", 38],
	features : {
		"rage" : {
			name : "Rage",
			source : [["SRD", 8], ["P", 48]],
			minlevel : 1,
			description : desc([
				"Start/end as bonus action; add damage to melee weapons that use Str; lasts 1 min",
				"Adv. on Strength checks/saves (not attacks); resistance to bludgeoning/piercing/slashing",
				"Stops if I end turn without attacking or taking damage since last turn, or unconscious"
			]),
			additional : levels.map(function (n) {
				if (n < 9) return "+4 melee damage";
				if (n < 16) return "+6 melee damage";
				return "+8 melee damage";
			}),
			usages : [2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, "\u221E\u00D7 per "],
			recovery : "long rest",
			action : ["bonus action", " (start/stop)"],
			dmgres : [["Bludgeoning", "Bludgeon. (in rage)"], ["Piercing", "Piercing (in rage)"], ["Slashing", "Slashing (in rage)"], ["psychic", "psychic (in rage)"]],
			savetxt : { text : ["Adv. on Str saves in rage"] },
			calcChanges : {
				atkCalc : ["if (isMeleeWeapon && classes.known.barbarian && classes.known.barbarian.level && (/\\brage\\b/i).test(WeaponText)) {output.extraDmg += function(n){return n < 9 ? 4 : n < 16 ? 6 : 8;}(classes.known.barbarian.level); }; ", "If I include the word 'Rage' in a melee weapon's name or description, the calculation will add my Rage's bonus damage to it."]
			}
		},
		"subclassfeature3" : {
			name : "Brawn Teachings",
			source : ["MAH", 38],
			minlevel : 3,
			description : desc([
				"My rage damage is doubled as long as I wield a two-handed or versatile melee weapon with two hands, and while raging I gain resistance to psychic damage."
			]),
		},
		"subclassfeature6" : {
			name : "Stalwart",
			source : ["MAH", 38],
			minlevel : 6,
			description : desc([
				"My hp max increases by 6, and for every level past 6th it increases by 1.",
				"When I roll to increase my max hp, I can roll the die twice and take the highest result."
			]),
		},
		"subclassfeature10" : {
			name : "Bestial",
			source : ["MAH", 38],
			minlevel : 10,
			description : desc([
				"Hit a creature using a 2H/versatile (2H)-gain 15 ft of movement that turn",
				"I have Adv on Cha (intimidation) checks vs any creature which has seen you raging"
			]),
		},
		"subclassfeature14" : {
			name : "Tiger’s Roar",
			source : ["MAH", 38],
			minlevel : 14,
			description : desc([
				"Land a critical hit/critically hit myself-after dmg I gain temp hp = 1/2 barbarian lv"
			]),
		}
	}
});
AddSubClass("barbarian", "totem warrior", {
	regExpSearch : /^(?=.*totem)(?=.*(warrior|fighter|marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n)).*$/i,
	subname : "Path of the Totem Warrior",
	fullname : "Totem Warrior",
	source : [["P", 50], ["MAH", 38]],
	features : {
		"subclassfeature3" : {
			name : "Spirit Seeker",
			source : ["P", 50],
			minlevel : 3,
			description : "\n   " + "I can cast Beast Sense and Speak with Animals as rituals (PHB 217 \u0026 277)",
			spellcastingBonus : [{
				name : "Spirit Seeker",
				spells : ["beast sense"],
				selection : ["beast sense"]
			}, {
				name : "Spirit Seeker",
				spells : ["speak with animals"],
				selection : ["speak with animals"]
			}]
		},
		"subclassfeature3.1" : {
			name : "Totem Spirit",
			source : [["P", 50], ["MAH", 38]],
			minlevel : 3,
			description : desc([
				"Choose Bear, Crawdad, Eagle, Heron, Elk, Pegasus, Wolf, Spider, Tiger, Wyvern, or Phoenix Spirit using the \"Choose Feature\" button above",
				"Don’t require a physical object incorporating some part of the totem animal, but instead require deep meditation for 8 hours."
			]),
			choices : ["Bear", "Crawdad", "Eagle", "Heron", "Elk", "Pegasus", "Wolf", "Spider", "Tiger", "Wyvern", "Phoenix"],
			"bear" : {
				name : "Bear Spirit",
				description : "\n   " + "While raging, I have resistance to all damage types except psychic",
				dmgres : [["All -Psychic", "All -Psychic (rage)"]],
				eval : "SetProf('resistance', false, 'Bludgeoning', 'Barbarian: Rage', 'Bludgeon. (in Rage)'); SetProf('resistance', false, 'Piercing', 'Barbarian: Rage', 'Piercing (in Rage)'); SetProf('resistance', false, 'Slashing', 'Barbarian: Rage', 'Slashing (in Rage)');",
				removeeval : "SetProf('resistance', true, 'Bludgeoning', 'Barbarian: Rage', 'Bludgeon. (in Rage)'); SetProf('resistance', true, 'Piercing', 'Barbarian: Rage', 'Piercing (in Rage)'); SetProf('resistance', true, 'Slashing', 'Barbarian: Rage', 'Slashing (in Rage)');"
			},
			"crawdad" : {
				name : "Crawdad Spirit",
				description : "\n   " + "While raging, I have resistance to all damage types except psychic",
				dmgres : [["All -Psychic", "All -Psychic (rage)"]],
				eval : "SetProf('resistance', false, 'Bludgeoning', 'Barbarian: Rage', 'Bludgeon. (in Rage)'); SetProf('resistance', false, 'Piercing', 'Barbarian: Rage', 'Piercing (in Rage)'); SetProf('resistance', false, 'Slashing', 'Barbarian: Rage', 'Slashing (in Rage)');",
				removeeval : "SetProf('resistance', true, 'Bludgeoning', 'Barbarian: Rage', 'Bludgeon. (in Rage)'); SetProf('resistance', true, 'Piercing', 'Barbarian: Rage', 'Piercing (in Rage)'); SetProf('resistance', true, 'Slashing', 'Barbarian: Rage', 'Slashing (in Rage)');"
			},
			"eagle" : {
				name : "Eagle Spirit",
				description : "\n   " + "While raging without heavy armor, others have disadv. on opportunity attacks vs. me" + "\n   " + "I can use the Dash action as a bonus action",
				action : ["bonus action", " (Dash)"]
			},
			"heron" : {
				name : "Heron Spirit",
				description : "\n   " + "While raging without heavy armor, others have disadv. on opportunity attacks vs. me" + "\n   " + "I can use the Dash action as a bonus action",
				action : ["bonus action", " (Dash)"]
			},
			"wolf" : {
				name : "Wolf Spirit",
				description : "\n   " + "While raging, friends have advantage on melee attacks vs. hostiles within 5 ft of me"
			},
			"spider" : {
				name : "Spider Spirit",
				description : "\n   " + "While raging, friends have advantage on melee attacks vs. hostiles within 5 ft of me"
			},
			"elk" : {
				name : "Elk Spirit",
				description : desc([
					"While raging without wearing heavy armor, my walking speed increases by 15 ft."
				]),
			},
			"pegasus" : {
				name : "Pegasus Spirit",
				description : desc([
					"While raging without wearing heavy armor, my walking speed increases by 15 ft."
				]),
			},
			"tiger" : {
				name : "Tiger Spirit",
				description : desc([
					"Raging, I can add 10 ft to my long jump distance and 3 ft to my high jump distance."
				]),
			},
			"wyvern" : {
				name : "Wyvern Spirit",
				description : desc([
					"Raging, I can add 10 ft to my long jump distance and 3 ft to my high jump distance."
				]),
			},
			"phoenix" : {
				name : "Phoenix Spirit",
				description : desc([
					"Raging, if I fail a saving throw, I have adv on saves vs same on subsequent turns",
					"I don't lose my rage if I can't meet the req. to keep raging if I failed a save"
				]),
			},
		},
		"subclassfeature6" : {
			name : "Aspect of the Beast",
			source : [["P", 50], ["MAH", 38]],
			minlevel : 6,
			description : desc([
				"Choose Bear, Crawdad, Eagle, Heron, Elk, Pegasus, Wolf, Spider, Tiger, Wyvern, or Phoenix Aspect using the \"Choose Feature\" button above"
			]),
			choices : ["Bear", "Crawdad", "Eagle", "Heron", "Elk", "Pegasus", "Wolf", "Spider", "Tiger", "Wyvern", "Phoenix"],
			"bear" : {
				name : "Aspect of the Bear",
				description : "\n   " + "Advantage on Strength checks to push/pull/lift/break; Carrying capacity is doubled",
				eval : "tDoc.getField(\"Carrying Capacity Multiplier\").value *= 2;",
				removeeval : "tDoc.getField(\"Carrying Capacity Multiplier\").value /= 2;"
			},
			"crawdad" : {
				name : "Aspect of the Crawdad",
				description : "\n   " + "Advantage on Strength checks to push/pull/lift/break; Carrying capacity is doubled",
				eval : "tDoc.getField(\"Carrying Capacity Multiplier\").value *= 2;",
				removeeval : "tDoc.getField(\"Carrying Capacity Multiplier\").value /= 2;"
			},
			"eagle" : {
				name : "Aspect of the Eagle",
				description : "\n   " + "I can see up to 1 mile away perfectly; No disadvantage on Perception from dim light"
			},
			"heron" : {
				name : "Aspect of the Heron",
				description : "\n   " + "I can see up to 1 mile away perfectly; No disadvantage on Perception from dim light"
			},
			"elk" : {
				name : "Aspect of the Elk",
				description : desc([
					"Mounted/on foot, me/10 companions (in 60 ft of me) travel pace is doubled"
				]),
			},
			"pegasus" : {
				name : "Aspect of the Pegasus",
				description : desc([
					"Mounted/on foot, me/10 companions (in 60 ft of me) travel pace is doubled"
				]),
			},
			"wolf" : {
				name : "Aspect of the Wolf",
				description : "\n   " + "I can track while traveling at a fast pace; I can move stealthily at a normal pace"
			},
			"spider" : {
				name : "Aspect of the Spide",
				description : "\n   " + "I can track while traveling at a fast pace; I can move stealthily at a normal pace"
			},
			"phoenix" : {
				name : "Aspect of the Phoenix",
				description : desc([
					"Roll HD. to regain lost hp. (short rest), I can roll each die x2 and take either result."
				]),
			},
			"tiger" : {
				name : "Aspect of the Tiger",
				description : desc([
					"I gain prof. in 2 skills from the following list: Athletics, Acrobatics, Stealth, and Survival."
				]),
				skillstxt : "Choose two from Athletics, Acrobatics, Stealth, and Survival",
			},
			"wyvern" : {
				name : "Aspect of the Wyvern",
				description : desc([
					"I gain prof. in 2 skills from the following list: Athletics, Acrobatics, Stealth, and Survival."
				]),
				skillstxt : "Choose two from Athletics, Acrobatics, Stealth, and Survival",
			},
		},
		"subclassfeature10" : {
			name : "Spirit Walker",
			source : ["P", 50],
			minlevel : 10,
			description : "\n   " + "I can cast Commune with Nature as a ritual (PHB 224)",
			spellcastingBonus : {
				name : "Spirit Walker",
				spells : ["commune with nature"],
				selection : ["commune with nature"]
			}
		},
		"subclassfeature14" : {
			name : "Totemic Attunement",
			source : [["P", 50], ["MAH", 38]],
			minlevel : 14,
			description : desc([
				"Choose Bear, Crawdad, Eagle, Heron, Elk, Pegasus, Wolf, Spider, Tiger, Wyvern, or Phoenix Attunement using the \"Choose Feature\" button",
			]),
			choices : ["Bear", "Crawdad", "Eagle", "Heron", "Elk", "Pegasus", "Wolf", "Spider", "Tiger", "Wyvern", "Phoenix"],
			"bear" : {
				name : "Bear Attunement",
				description : "\n   " + "While raging, any creature that sees me within 5 ft has disadv. on attacks vs. others" + "\n   " + "Enemies that can't perceive me or be frightened are immune"
			},
			"crawdad" : {
				name : "Crawdad Attunement",
				description : "\n   " + "While raging, any creature that sees me within 5 ft has disadv. on attacks vs. others" + "\n   " + "Enemies that can't perceive me or be frightened are immune"
			},
			"eagle" : {
				name : "Eagle Attunement",
				description : "\n   " + "While raging, I can fly at my current speed, but I can only stay aloft during my turn"
			},
			"heron" : {
				name : "Heron Attunement",
				description : "\n   " + "While raging, I can fly at my current speed, but I can only stay aloft during my turn"
			},
			"elk" : {
				name : "Elk Attunement",
				description : desc([
					"Raging, (bonus)-use my move to pass through the space of a Large or smaller creature",
					"Creature must succeed on a Str save (DC 8 + Str mod + prof bonus) or be knocked prone and take bludgeoning damage equal to 1d12 + Str mod"
				]),
			},
			"pegasus" : {
				name : "Pegasus Attunement",
				description : desc([
					"Raging, (bonus)-use my move to pass through the space of a Large or smaller creature",
					"Creature must succeed on a Str save (DC 8 + Str mod + prof bonus) or be knocked prone and take bludgeoning damage equal to 1d12 + Str mod"
				]),
			},
			"wolf" : {
				name : "Wolf Attunement",
				description : "\n   " + "If my melee attack hits while raging, I can knock prone as a bonus action (up to Large)",
				action : ["bonus action", " (raging: knock prone)"]
			},
			"spider" : {
				name : "Spider Attunement",
				description : "\n   " + "If my melee attack hits while raging, I can knock prone as a bonus action (up to Large)",
				action : ["bonus action", " (raging: knock prone)"]
			},
			"tiger" : {
				name : "Tiger Attunement",
				description : desc([
					"Raging-move 20 ft in a straight line toward a Large/smaller target-melee wpn attack",
					"I can use a bonus action to make an additional melee weapon attack against it."
				]),
			},
			"wyvern" : {
				name : "Wyvern Attunement",
				description : desc([
					"Raging-move 20 ft in a straight line toward a Large/smaller target-melee wpn attack",
					"I can use a bonus action to make an additional melee weapon attack against it."
				]),
			},
			"phoenix" : {
				name : "Phoenix Attunement",
				description : desc([
					"Raging-weapon attacks turn into fire or lightning damage (my choice)",
					"When hit with a melee attack, they suffer fire damage equal to your rage damage."
				]),
			},
		},
	},
});

//BARD COLLAGES:
AddSubClass("bard", "college of the geisha", {
	regExpSearch : /college of the geisha/i,
	subname : "College of the Geisha",
	fullname : "College of the Geisha",
	source : ["MAH", 38],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : ["MAH", 38],
			minlevel : 3,
			description : desc([
				"I become proficient with the war fan."
			]),
			weapons : [
				[false, false, ["war fan"]],
			],
		},
		"subclassfeature3.1" : {
			name : "Dance of Magic",
			source : ["MAH", 38],
			minlevel : 3,
			description : desc([
				"I can use my body as a spellcasting focus, eliminating the need for an instrument"
			]),
		},
		"subclassfeature3.2" : {
			name : "Fascination",
			source : ["MAH", 38],
			minlevel : 3,
			description : desc([
				"Whenever an ally rolls one of my bardic inspiration dice, they have adv on the roll."
			]),
		},
		"subclassfeature6" : {
			name : "Additional Expertise",
			source : ["MAH", 38],
			minlevel : 6,
			description : desc([
				"choose two of my skill proficiencies. Double prof. skills checks with them"
			]),
			skillstxt : "\n\n" + toUni("Additional Expertise (Bard 6)") + ": Choose any two skill proficiencies",
			additional : levels.map(function (n) {
				if (n < 6) return "with two skills";
				return "with two skills";
			}),
		},
		"subclassfeature14" : {
			name : "Infatuation",
			source : ["MAH", 38],
			minlevel : 14,
			description : desc([
				"hostile creatures have disadv on their saves vs my enchantment/illusion spells."
			]),
		},
	},
});

//CLERIC DOMAINS:
AddSubClass("cleric", "shamanism domain", {
	regExpSearch : /shamanism domain/i,
	subname : "Shamanism Domain",
	source : ["MAH", 38],
	spellcastingExtra : ["faerie fire", "goodberry", "earthbind", "moonbeam", "gaseous form", "haste", "blight", "locate creature", "antilife", "shell", "reincarnate"],
	features : {
		"subclassfeature1" : {
			name : "Spirit Patron",
			source : ["MAH", 39],
			minlevel : 1,
			description : desc([
				"Use the \"Choose Features\" button to add a Spirit Patron to the third page",
				"I form a bond with a patron spirit who empowers my spellcasting",
				"The type of spirit should correspond to my character’s values"
			]),
			extraname : "Spirit Patron",
			extrachoices : ["Ancestral Spirit", "Animal Spirit", "Demonic Spirit", "Primordial Spirit"],
			"ancestral spirit" : {
				name : "Ancestral Spirit",
				source : ["MAH", 39],
				description : desc([
					"The number of cleric spells I can prepare increases by 1"
				]),
			},
			"animal spirit" : {
				name : "Animal Spirit",
				source : ["MAH", 39],
				description : desc([
					"I learn find familiar spell/can cast as ritual-doesn’t count against # of spells known",
					"When the spells cast, type of animal must be the same-if celestial instead of a beast. Its appearance is that of the chosen animal, but translucent."
				]),
				abilitySave : 5,
				spellcastingBonus : {
					name : "Animal Spirit",
					spells : ["find familiar"],
					selection : ["find familiar"]
				},
			},
			"demonic spirit" : {
				name : "Demonic Spirit",
				source : ["MAH", 39],
				description : desc([
					"I can cast disguise self at will, without expending a spell slot",
					"Additionally, I learn a warlock cantrip of my choice, which does not count towards my number of cantrips known"
				]),
				spellcastingAbility : 5,
				spellcastingBonus : [{
					name : "Demonic Spirit",
					spells : ["disguise self"],
					selection : ["disguise self"]
				},	{
					name : "Demonic Spirit",
					"class" : "warlock",
					level : [0, 0]
				}],
			},
			"primordial spirit" : {
				name : "Primordial Spirit",
				source : ["MAH", 39],
				description : desc([
					"When hit by melee attack, (reaction)-vanish from current plane of existence and appear in the Ethereal Plane until the start of my next turn, and move up to half my speed as part of the same reaction.",
					"I disappear right before the triggering attack connects. The spell fails and the casting is wasted if I'm already on the Ethereal Plane",
					"While on the Ethereal Plane, I can see/hear the plane I originated from, which is cast in shades of gray, and I can’t see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren’t there can’t perceive me or interact with me unless they have the ability to do so",
					"Once I use this feature, I must finish a short or long rest before you can do so again."
				]),
				action : ["action", ""],
				recovery : "short rest"
			},
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Spirit Sight",
			source : ["MAH", 39],
			minlevel : 2,
			description : desc([
				"(action)-present my holy symbol-gain truesight 60 ft/1 min"
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Gift of Patronage",
			source : ["MAH", 39],
			minlevel : 6,
			description : desc([
				"Use the \"Choose Features\" button to add a Spirit Patron to the third page",
				"My patron spirit bestows upon me another feature depending on my choice at 1st level"
			]),
			extraname : "Spirits Patronage",
			extrachoices : ["Ancestral Spirit", "Animal Spirit", "Demonic Spirit", "Primordial Spirit"],
			"ancestral spirit" : {
				name : "Ancestral Spirit",
				source : ["MAH", 39],
				description : desc([
					"I can always cast cure wounds/healing word-whether I have them prepared or not."
				]),
				spellcastingBonus : [{
					name : "Ancestral Spirit",
					spells : ["cure wounds"],
					selection : ["cure wounds"]
				},	{
					name : "Ancestral Spirit",
					spells : ["healing word"],
					selection : ["healing word"]
				}]
			},
			"animal spirit" : {
				name : "Animal Spirit",
				source : ["MAH", 39],
				description : desc([
					"I have adv with Wis (perception) checks, as long as I have my familiar within 5 ft of me"
				]),
			},
			"demonic spirit" : {
				name : "Demonic Spirit",
				source : ["MAH", 39],
				description : desc([
					"I can cast polymorph once without using a spell slot.Recovery-Long rest"
				]),
				spellcastingAbility : 5,
				spellcastingBonus : {
					name : "Demonic Spirit (level 6)",
					spells : ["polymorph"],
					selection : ["polymorph"],
					oncelr : true
				},
			},
			"primordial spirit" : {
				name : "Primordial Spirit",
				source : ["MAH", 39],
				description : desc([
					"I gain an additional use of Channel Divinity"
				]),
				action : ["action", ""],
				recovery : "short rest"
			},
		},
		"subclassfeature8" : {
			name : "Efflorescence",
			source : ["MAH", 39],
			minlevel : 8,
			description : desc([
				"(action)-restore hp to any number of friendly creatures in 30 ft of me",
				"Total # hp I restore = x2 cleric level-can divide the healing among my allies as I see fit",
				"Once I use this feature, I must finish a long rest before you can do so again."
			]),
			additional : ["", "", "", "", "", "", "", "16 hp", "18 hp", "20 hp", "22 hp", "24 hp", "26 hp", "28 hp", "30 hp", "32 hp", "34 hp", "36 hp", "38 hp", "40 hp"],
			usage : 1,
			action : ["action", ""],
			recovery : "long rest"
		},
		"subclassfeature17" : {
			name : "Avatar of Battle",
			source : ["MAH", 39],
			minlevel : 17,
			description : desc([
				"I gain resistance to necrotic and radiant damage"
			]),
			dmgres : [["Necrotic"], ["Radiant"]]
		},
	},
});
AddSubClass("cleric", "shugenja domain", {
	regExpSearch : /shugenja domain/i,
	subname : "Shugenja Domain",
	source : ["MAH", 39],
	spellcastingExtra : ["detect magic", "magic missile", "aganazzar’s scorcher", "gust of wind", "lightning bolt", "tidal wave", "stone shape", "storm sphere", "maelstrom", "wall of stone"],
	features : {
		"subclassfeature1" : {
			name : "Sense Elements",
			source : ["MAH", 39],
			minlevel : 1,
			description : desc([
				"(action), I can sense the location/size/direction of a particular element in300 ft of me",
				"Choosing: earth, fire, water, or wind. Lasts 1 min or til I dismiss it as an action",
				"# of times = my Wis mod.(min 1), regain when I finish a short or long rest."
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Wis Mod\").value);",
			recovery : "short rest",
			action : ["action", " (start/end)"],
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Turn Elementals and Fiends",
			source : ["MAH", 39],
			minlevel : 2,
			description : desc([
				"(action)-spread my arms and speak a prayer censuring elementals and fiends",
				"Each elemental and fiend that can see/hear me in 30 ft of me must succeed a Wis save",
				"Fail: become turned for 1 minute or until it takes any damage."
			]),
			action : ["action", ""]
		},
		"subclassfeature2.1" : {
			name : "Elemental Affinity",
			source : ["MAH", 39],
			minlevel : 2,
			description : desc([
				"Use the \"Choose Features\" button above to add an Affinity to the third page",
				"I specialize in one of the following four elements. (air, earth, fire, and water)",
				"My chosen element grants me a new Channel Divinity feature"
			]),
			extraname : "Affinity",
			extrachoices : ["Air Affinity", "Earth Affinity", "Fire Affinity", "Water Affinity"],
			"air affinity" : {
				name : "Air Affinity",
				source : ["MAH", 39],
				description : desc([
					"Channel Divinity: Truesight",
					" (action)-gain truesight 60-for 1 minute"
				]),
				action : ["action", " (truesight 60)"]
			},
			"earth affinity" : {
				name : "Earth Affinity",
				source : ["MAH", 39],
				description : desc([
					"Channel Divinity: Grounding",
					" (action)-five creatures of my choice in 30 ft of me, gain resistance to bludgeoning, piercing, slashing from nonmagical weapons-lasts for 30 seconds, or til I dismiss it (no action)",
					"  Ends early if I'm unconscious, or lose concentration (as if concentrating on a spell)"
				]),
				action : ["action", ""]
			},
			"fire affinity" : {
				name : "Fire Affinity",
				source : ["MAH", 39],
				description : desc([
					"Channel Divinity: Searing Radiance",
					"  (action)-flame bursts from me filling a 20 ft area around me",
					"  All in area-Con save-fail: 18 (4d8) radiant dmg./blinded til the end of my next turn",
					"  Successful save: half dmg./not blinded-Elementals/fiends have disadv on save"
				]),
				action : ["action", ""]
			},
			"water affinity" : {
				name : "Water Affinity",
				source : ["MAH", 39],
				description : desc([
					"Channel Divinity: Life Link",
					" (action), w/Channel Divinity, I make a link w/me+4 others in 30 ft of me",
					"  As long as the link persists, any dmg. taken by a linked creature, is divided evenly among all linked (rounded down). The effect lasts for 2 rounds",
					"  Can unlink self at will (no action required), and is forcefully unlinked if it is ever more than 30 ft away from me",
					"  I can end the link on all affected creatures early at will (no action required). The effect also ends early if I'm unconscious, or if I lose concentration (as if concentrating on a spell)"
				]),
				action : ["action", ""]
			},
		},
		"subclassfeature6" : {
			name : "Elemental Points",
			source : ["MAH", 39],
			minlevel : 6,
			description : desc([
				"Wellspring of magic; elemental points, # of pts = cleric lv. divided by 2 (rounded down)",
				"You regain all spent elemental points when you finish a long rest"
			]),
			usages : ["", "", "", "", "", 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10],
			recovery : "long rest"
		},
		"subclassfeature6.1" : {
			name : "Metamagic",
			source : ["MAH", 39],
			minlevel : 6,
			description : desc([
				"I gain one Metamagic option of my choice; I gain another one at 8th and 17th level",
				"One Metamagic option on a spell when I cast it, unless otherwise noted",
				"I fuel my metamagic options w/ # of pts = sorcery pt."
			]),
			additional : ["", "", "", "", "", "1 known", "1 known", "2 known", "2 known", "2 known", "2 known", "2 known", "2 known", "2 known", "2 known", "2 known", "3 known", "3 known", "3 known", "3 known"],
			recovery : "long rest"
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["MAH", 39],
			minlevel : 8,
			description : desc([
				"I add my Wisdom modifier to the damage I deal with any cleric cantrip"
			]),
			calcChanges : {
				atkCalc : ["if (classes.known.cleric && classes.known.cleric.level > 7 && thisWeapon[4].indexOf('cleric') !== -1 && thisWeapon[3] && SpellsList[thisWeapon[3]].level === 0) { output.extraDmg += What('Wis Mod'); }; ", "My cleric cantrips get my Wisdom modifier added to their damage."]
			}
		},
		"subclassfeature17" : {
			name : "Elemental Personification",
			source : ["MAH", 39],
			minlevel : 17,
			description : desc([
				"Use the \"Choose Features\" button above to add an Affinity to the third page",
				"I gain another feature depending on the Elemental Affinity I chose at 2nd level"
			]),
			extraname : "Personification",
			extrachoices : ["Air Affinity", "Earth Affinity", "Fire Affinity", "Water Affinity"],
			"air affinity" : {
				name : "Air Affinity",
				source : ["MAH", 39],
				description : desc([
					"Mislead",
					"  I can cast mislead without expending a spell slot, by using a bonus action",
					"  Once you used, must finish a short or long rest"
				]),
				recovery : "long rest",
				action : ["bonus action", ""],
				spellcastingBonus : {
					name : "Mislead",
					spells : ["mislead"],
					selection : ["mislead"]
				},
			},
			"earth affinity" : {
				name : "Earth Affinity",
				source : ["MAH", 39],
				description : desc([
					"Shaking the Foundations",
					"  The ground around me in a 20 ft radius is considered difficult terrain when hostile creatures try to move through it",
					"  Creatures that can fly or levitate are not affected"
				]),
			},
			"fire affinity" : {
				name : "Fire Affinity",
				source : ["MAH", 39],
				description : desc([
					"Eruption",
					"  Any hostile creature that moves within 5 ft of me for the first time on a turn or ends its turn there takes 1d10 fire damage"
				]),
			},
			"water affinity" : {
				name : "Water Affinity",
				source : ["MAH", 39],
				description : desc([
					"Elemental Metabolism",
					"  (action), I can restore an amt. of hp to myself = my cleric level./recover: short rest"
				]),
				action : ["action", ""]
			},
		},
	},
});

//DRUID CIRCLES:
AddSubClass("druid", "circle of chaos", {
	regExpSearch : /^(?=.*(druid|shaman))((?=.*\bchaos\b)|((?=.*\bmany\b)(?=.*\bforms?\b))).*$/i,
	subname : "Circle of Chaos",
	source : ["MAH", 40],
	spellcastingExtra : ["darkness", "ray of enfeeblement", "gaseous form", "hunger of hadar", "banishment", "dimension door", "creation", "dominate person"],
	features : {
		"subclassfeature2" : {
			name : "Wild Magic Surge",
			source : [["P", 103], ["MAH", 40]],
			minlevel : 2,
			description : desc([
				"Wild Magic Surges happen 5% of the time that I cast a sorcerer spell (PHB 104)",
				"This doesn't happen with cantrips and I only take this chance if the DM tells me to",
				"I roll on the Wild Surge table when I cast a Circle Spell, and if I roll a natural 1"
			]),
		},
		"subclassfeature6" : {
			name : "Chaotic Vitality",
			source : ["MAH", 40],
			minlevel : 6,
			description : desc([
				"When I roll on the Wild Magic Surge table, I gain temp hp = my Wis mod (min 1)"
			]),
		},
		"subclassfeature10" : {
			name : "Shielded Mind",
			source : ["MAH", 40],
			minlevel : 10,
			description : desc([
				"My thoughts can’t be read by telepathy or other means unless I allow it"
			]),
		},
		"subclassfeature14" : {
			name : "Chaotic Recovery",
			source : ["MAH", 40],
			minlevel : 14,
			description : desc([
				"When I roll 99-100 on the Wild Magic Surge table, I can recover expended spell slots",
				"The slots can have a combined level that's = to or less than my druid level (rounded up)",
				"None of the slots can be 6th level or higher."
			]),
		}
	}
});
AddSubClass("druid", "circle of elementalism", {
	regExpSearch : /^(?=.*(druid|shaman))((?=.*\bElementalism\b)|((?=.*\bmany\b)(?=.*\bforms?\b))).*$/i,
	subname : "Circle of Elementalism",
	source : ["MAH", 40],
	spellcastingExtra : ["aganazzar’s scorcher", "pyrotechnics", "erupting earth", "lightning bolt", "fire shield", "storm sphere", "cone of cold", "immolation"],
	features : {
		"subclassfeature2" : {
			name : "Absorb Spell",
			source : ["MAH", 40],
			minlevel : 2,
			description : desc([
				"If I fail a saving throw against a spell, I can choose to succeed instead",
				"Once I use this feature, I must finish a long rest before you can do so again."
			]),
			usage : 1,
			recovery : "long rest",
		},
		"subclassfeature6" : {
			name : "Elemental Companion",
			source : ["MAH", 40],
			minlevel : 6,
			description : desc([
				"I learn the find familiar spell, and can use it to summon any mephit with a CR maximum of 1/4. Once you reach 10th level, the CR maximum increases to 1/2"
			]),
			spellcastingBonus : {
				name : "Elemental Companion",
				spells : ["find familiar"],
				selection : ["find familiar"]
			},
		},
		"subclassfeature10" : {
			name : "Quickened Spells",
			source : ["MAH", 40],
			minlevel : 10,
			description : desc([
				"I can cast my circle spells using a bonus action"
			]),
		},
		"subclassfeature14" : {
			name : "Investiture of the Elements",
			source : ["MAH", 40],
			minlevel : 14,
			description : desc([
				"I can cast investiture of flame, investiture of ice, investiture of stone, or investiture or wind without expending a spell slot",
				"The elements maintain concentration on the spell, so I don’t have to",
				"Once I use this feature, I must finish a long rest before you can do so again."
			]),
			usage : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Investiture of the Elements",
				spells : ["investiture of flame"],
				selection : ["investiture of flame"]
			},	{
				name : "Investiture of the Elements",
				spells : ["investiture of ice"],
				selection : ["investiture of ice"]
			},	{
				name : "Investiture of the Elements",
				spells : ["investiture of stone"],
				selection : ["investiture of stone"]
			},	{
				name : "Investiture of the Elements",
				spells : ["investiture of wind"],
				selection : ["investiture of wind"]
			}],
		},
	},
});
AddSubClass("druid", "circle of the fey touched", {
	regExpSearch : /^(?=.*(druid|shaman))((?=.*\bfey touched\b)|((?=.*\bmany\b)(?=.*\bforms?\b))).*$/i,
	subname : "Circle of the Fey Touched",
	source : ["MAH", 41],
	spellcastingExtra : ["invisibility", "mirror image", "hypnotic pattern", "major image", "greater invisibility", "phantasmal killer", "mislead", "seeming"],
	features : {
		"subclassfeature2" : {
			name : "Heart Sight",
			source : ["MAH", 40],
			minlevel : 2,
			description : desc([
				"(action)-touch a creature and magically learn it's current emotional state",
				"Target must succeed a Cha save vs. my druid spell save DC",
				"Fail: I also learn it's alignment. Celestials/fiends/undead automatically fail the sae"
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Blink",
			source : ["MAH", 41],
			minlevel : 6,
			description : desc([
				"(action)-I magically teleport, w/any equipment I'm wearing/carrying, up to 40 feet to an unoccupied space I can see"
			]),
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Beguiling Defenses",
			source : ["MAH", 41],
			minlevel : 10,
			description : desc([
				"Immune to charmed, and when attempted-(reaction)-attempt to turn the charm back on that creature",
				"The creature must succeed on a Wis save vs. my druid spell save DC-Fail: charmed by me for 1 minute or until the creature takes any damage"
			]),
			savetxt : {
				immune : ["charmed"],
			},
			action : ["reaction", ""]
		},
		"subclassfeature14" : {
			name : "Magic Resistance",
			source : ["MAH", 41],
			minlevel : 14,
			description : desc([
				"I gain advantage on saving throws against magic"
			]),
			savetxt : {
				adv_vs : ["magic"]
			},
		}
	}
});
AddSubClass("druid", "circle of the land", {
	regExpSearch : /circle of the land/i,
	subname : "Circle of the Land",
	source : [["SRD", 21], ["P", 68], ["MAH", 41]],
	features : {
		"subclassfeature2" : {
			name : "Bonus Cantrip",
			source : [["SRD", 21], ["P", 68]],
			minlevel : 2,
			description : "\n   " + "I know one additional druid cantrip of my choice",
			spellcastingBonus : {
				name : "Bonus Druid Cantrip",
				"class" : "druid",
				level : [0, 0]
			}
		},
		"subclassfeature2.1" : {
			name : "Natural Recovery",
			source : [["SRD", 21], ["P", 68]],
			minlevel : 2,
			description : "\n   " + "After a short rest, I can recover a number of 5th-level or lower spell slots",
			additional : ["1 level spell slots", "1 level spell slots", "2 levels spell slots", "2 levels spell slots", "3 levels spell slots", "3 levels spell slots", "4 levels spell slots", "4 levels spell slots", "5 levels spell slots", "5 levels spell slots", "6 levels spell slots", "6 levels spell slots", "7 levels spell slots", "7 levels spell slots", "8 levels spell slots", "8 levels spell slots", "9 levels spell slots", "9 levels spell slots", "10 levels spell slots", "10 levels spell slots"],
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature3" : {
			name : "Circle Spells",
			source : [["SRD", 21], ["P", 68]],
			minlevel : 3,
			description : "\n   " + "Choose a terrain that grants you spells using the \"Choose Features\" button above",
			choices : ["Arctic", "Coast", "Desert", "Forest", "Grassland", "Mountain", "Shadowlands", "Swamp", "Underdark"],
			"arctic" : {
				name : "Arctic Circle Spells",
				description : "\n   " + "My mystical connection to the arctic infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
				spellcastingExtra : ["hold person", "spike growth", "sleet storm", "slow", "freedom of movement", "ice storm", "commune with nature", "cone of cold"],
				eval : "if (event.target.name === 'Class Features Menu') {app.alert({cMsg: \"You just changed the spells that should appear on the spell sheet. Please use the 'Spells' button or bookmark generate a new spell sheet so that these changes can be incorporated', cTitle: 'Circle Spells need to be added to the Spell Sheet(s)\", nIcon : 3, nType : 0})};"
			},
			"coast" : {
				name : "Coast Circle Spells",
				description : "\n   " + "My mystical connection to the coast infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
				spellcastingExtra : ["mirror image", "misty step", "water breathing", "water walk", "control water", "freedom of movement", "conjure elemental", "scrying"],
				eval : "if (event.target.name === 'Class Features Menu') {app.alert({cMsg: \"You just changed the spells that should appear on the spell sheet. Please use the 'Spells' button or bookmark generate a new spell sheet so that these changes can be incorporated\", cTitle: \"Circle Spells need to be added to the Spell Sheet(s)\", nIcon : 3, nType : 0})};"
			},
			"desert" : {
				name : "Desert Circle Spells",
				description : "\n   " + "My mystical connection to the desert infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
				spellcastingExtra : ["blur", "silence", "create food and water", "protection from energy", "blight", "hallucinatory terrain", "insect plague", "wall of stone"],
					eval : "if (event.target.name === 'Class Features Menu') {app.alert({cMsg: \"You just changed the spells that should appear on the spell sheet. Please use the 'Spells' button or bookmark generate a new spell sheet so that these changes can be incorporated\", cTitle: \"Circle Spells need to be added to the Spell Sheet(s)\", nIcon : 3, nType : 0})};"
				},
			"forest" : {
				name : "Forest Circle Spells",
				description : "\n   " + "My mystical connection to the forest infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
				spellcastingExtra : ["barkskin", "spider climb", "call lightning", "plant growth", "divination", "freedom of movement", "commune with nature", "tree stride"],
				eval : "if (event.target.name === 'Class Features Menu') {app.alert({cMsg: \"You just changed the spells that should appear on the spell sheet. Please use the 'Spells' button or bookmark generate a new spell sheet so that these changes can be incorporated\", cTitle: \"Circle Spells need to be added to the Spell Sheet(s)\", nIcon : 3, nType : 0})};"
			},
			"grassland" : {
				name : "Grassland Circle Spells",
				description : "\n   " + "My connection to the grassland infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
				spellcastingExtra : ["invisibility", "pass without trace", "daylight", "haste", "divination", "freedom of movement", "dream", "insect plague"],
				eval : "if (event.target.name === 'Class Features Menu') {app.alert({cMsg: \"You just changed the spells that should appear on the spell sheet. Please use the 'Spells' button or bookmark generate a new spell sheet so that these changes can be incorporated\", cTitle: \"Circle Spells need to be added to the Spell Sheet(s)\", nIcon : 3, nType : 0})};"
			},
			"mountain" : {
				name : "Mountain Circle Spells",
				description : "\n   " + "My connection to the mountains infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
				spellcastingExtra : ["spider climb", "spike growth", "lightning bolt", "meld into stone", "stone shape", "stoneskin", "passwall", "wall of stone"],
				eval : "if (event.target.name === 'Class Features Menu') {app.alert({cMsg: \"You just changed the spells that should appear on the spell sheet. Please use the 'Spells' button or bookmark generate a new spell sheet so that these changes can be incorporated\", cTitle: \"Circle Spells need to be added to the Spell Sheet(s)\", nIcon : 3, nType : 0})};"
			},
			"shadowlands" : {
				name : "Shadowlands Circle Spells",
				description : desc([
					"Natives to the Shadowlands are evil and remorseless",
					"They do not safeguard nature, but rather seek to corrupt it."
				]),
				spellcastingExtra : ["crown of madness", "ghost light", "fear", "vampiric touch", "magnetism", "wall of bones", "creeping darkness", "dream sight"],
				eval : "if (event.target.name === 'Class Features Menu') {app.alert({cMsg: \"You just changed the spells that should appear on the spell sheet. Please use the 'Spells' button or bookmark generate a new spell sheet so that these changes can be incorporated\", cTitle: \"Circle Spells need to be added to the Spell Sheet(s)\", nIcon : 3, nType : 0})};"
			},
			"swamp" : {
				name : "Swamp Circle Spells",
				description : "\n   " + "My mystical connection to the swamp infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
				spellcastingExtra : ["darkness", "melf's acid arrow", "water walk", "stinking cloud", "freedom of movement", "locate creature", "insect plague", "scrying"],
				eval : "if (event.target.name === 'Class Features Menu') {app.alert({cMsg: \"You just changed the spells that should appear on the spell sheet. Please use the 'Spells' button or bookmark generate a new spell sheet so that these changes can be incorporated\", cTitle: \"Circle Spells need to be added to the Spell Sheet(s)\", nIcon : 3, nType : 0})};"
			},
			"underdark" : {
				name : "Underdark Circle Spells",
				description : "\n   " + "My connection to the underdark infuses me with the ability to cast certain spells" + "\n   " + "These are always prepared, but don't count against the number of spells I can prepare",
				spellcastingExtra : ["spider climb", "web", "gaseous form", "stinking cloud", "greater invisibility", "stone shape", "cloudkill", "insect plague"],
				eval : "if (event.target.name === 'Class Features Menu') {app.alert({cMsg: \"You just changed the spells that should appear on the spell sheet. Please use the 'Spells' button or bookmark generate a new spell sheet so that these changes can be incorporated\", cTitle: \"Circle Spells need to be added to the Spell Sheet(s)\", nIcon : 3, nType : 0})};"
			}
		},
		"subclassfeature6" : {
			name : "Land's Stride",
			source : [["SRD", 22], ["P", 68]],
			minlevel : 6,
			description : "\n   " + "I can travel through nonmagical, difficult terrain without penalty" + "\n   " + "I have advantage on saves vs. plants that impede movement by magical influence",
			savetxt : { adv_vs : ["magical plants that impede movement"] }
		},
		"subclassfeature10" : {
			name : "Nature's Ward",
			source : [["SRD", 22], ["P", 68]],
			minlevel : 10,
			description : "\n   " + "I am immune to poison/disease and I can't be charmed/frightened by elementals or fey",
			savetxt : { text : ["Immune to being charmed or frightened by elementals or fey"], immune : ["poison", "disease"] }
		},
		"subclassfeature14" : {
			name : "Nature's Sanctuary",
			source : [["SRD", 22], ["P", 68]],
			minlevel : 14,
			description : "\n   " + "When a beast or plant attacks me, it must make a Wis save or pick a different target" + "\n   " + "If it can't, it automatically misses; On a successful save, it is immune for 24 hours"
		},
	},
});

//FIGHTER:
AddSubClass("fighter", "bushi", {
	regExpSearch : /bushi/i,
	subname : "Bushi",
	fullname : "Bushi",
	source : ["MAH", 41],
	features : {
		"subclassfeature3" : {
			name : "Bonded Weapon",
			source : ["MAH", 41],
			minlevel : 3,
			description : desc([
				"I can bond with one slashing weapon by meditating with it for 8 hrs",
				"Once done I must bond each day for 1 hr, can't be disarmed/summon as a bonus action"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Ki",
			source : ["MAH", 41],
			abilitySave : 4,
			minlevel : 3,
			description : desc([
				"With my bonded weapon, I can spend ki to fuel my abilities and manuevers",
				"I need to spend 1 hr of a rest meditating with my bonded weapon to regain ki"
			]),
			usages : ["", "", 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest",
		},
		"subclassfeature3.2" : {
			name : "Maneuvers",
			source : ["MAH", 41],
			minlevel : 3,
			description : desc([
				"Use the \"Choose Features\" button above to add a Maneuver to the third page",
				"I choose my maneuvers from the Legacy Maneuvers lists",
				"I can use a Maneuver by expending ki"
			]),
			additional : ["", "", "2 known", "2 known", "2 known", "2 known", "4 known", "4 known", "4 known", "6 known", "6 known", "6 known", "6 known", "6 known", "8 known", "8 known", "8 known", "8 known", "8 known", "8 known"],
			extraname : "Maneuver",
			extrachoices : ["Mind over Body (Legacy Maneuvers)", "Rejuvenation (Legacy Maneuvers)", "Quick-Strike (Legacy Maneuvers)"],
			"mind over body (legacy maneuvers)" : {
				name : "Mind over Body (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc( [
					"[2 ki point]",
					"I can reroll a failed Strength, Dexterity, or Constitution saving throw"
				]),
			},
			"rejuvenation (legacy maneuvers)" : {
				name : "Rejuvenation (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"As an action, I can heal myself for 1 hit die + my Con mod for every 1 Ki used",						"I expend any hit dice I use"
				]),
				action : ["action", ""]
			},
			"quick-strike (legacy maneuvers)" : {
				name : "Quick-Strike (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"When you disengage, you may spend a bonus action to make a single weapon attack with your bonded weapon."
				]),
				action : ["bonus action", ""]
			},
		},
		"subclassfeature7" : {
			name : "Bushi Stance",
			source : ["MAH", 46],
			minlevel : 6,
			description : desc([
				"I can replace a maneuver with a stance",
				"I can enter a stance as a bonus action,/1 ki, if bonded weapons 2h/versatile",
				"Stance lasts 1 min, or until you change stances, or drop bonded weapon/unconscious/die"
			]),
			additional : ["", "", "2 known", "2 known", "2 known", "2 known", "4 known", "4 known", "4 known", "6 known", "6 known", "6 known", "6 known", "6 known", "8 known", "8 known", "8 known", "8 known", "8 known", "8 known"],
			extraname : "Stance",
			extrachoices : ["Chickadee Stance", "Damselfly Stance", "Rabbit Stance", "Rhino Stance", "Scorpionfly Stance", "Viper Stance", "Weasel Stance", "Wolf Stance"],
			"chickadee stance" : {
				name : "Chickadee Stance",
				source : ["MAH", 41],
				description : desc([
					"I have adv on Animal Handling checks and are affected by speak with animals spell."
				]),
			},
			"damselfly stance" : {
				name : "Damselfly Stance",
				source : ["MAH", 41],
				description : desc([
					"I have adv on Int/Cha saving throws."
				]),
			},
			"rabbit stance" : {
				name : "Rabbit Stance",
				source : ["MAH", 41],
				description : desc([
					"Unless deafened, I have blindsight 10 ft, while in Rabbit stance."
				]),
			},
			"rhino stance" : {
				name : "Rhino Stance",
				source : ["MAH", 41],
				description : desc([
					"At the start of each of my turns, I gain temp hp = fighter lv. divided by 3 + Int mod"
				]),
			},
			"scorpionfly stance" : {
				name : "Scorpionfly Stance",
				source : ["MAH", 41],
				description : desc([
					"I have adv on Dex saving throws."
				]),
			},
			"viper stance" : {
				name : "Viper Stance",
				source : ["MAH", 41],
				description : desc([
					"I have a +10 bonus to Dex (stealth) checks, and don't leave tracks/signs of my passage."
				]),
			},
			"weasel stance" : {
				name : "Weasel Stance",
				source : ["MAH", 41],
				description : desc([
					"I can add my Int mod to my Cha checks."
				]),
			},
			"wolf stance" : {
				name : "Wolf Stance",
				source : ["MAH", 41],
				description : desc([
					"My allies have adv on melee attack rolls vs. creatures in 5 ft of me that is hostile to me"
				]),
			},
		},
		"subclassfeature10" : {
			name : "Skilled",
			source : ["MAH", 41],
			minlevel : 10,
			description : desc([
				"I gain proficiency in two of the following skills of my choice: Athletics, Deception, Insight, Intimidation, Perception, Persuasion, and Survival"
			]),
			skillstxt : "\n\n" + toUni("Knowledge Domain") + ": Choose two from Arcana, History, Nature, and Religion. You also gain expertise with these skills.",
		},
		"subclassfeature15" : {
			name : "Focused Self",
			source : ["MAH", 41],
			minlevel : 15,
			description : desc([
				"If I roll for initiative and have no ki points remaining, I regain 1 ki point."
			]),
		},
		"subclassfeature18" : {
			name : "Combat Savant",
			source : ["MAH", 41],
			minlevel : 15,
			description : desc([
				"When a hostile creature attacks me w/melee attack, but before its attack is completed",
				"(reaction)-imm take my next turn, rather than waiting for my turn in the initiative order",
				"When my turn is completed, the creature who’s turn you interruptedcontinues its turn and the initiative order resumes",
				"Once I use this feature, I must finish a long rest before you can do so again"
			]),
			action : ["reaction", ""]
		}
	}
});
AddSubClass("fighter", "hogo-sha", {
	regExpSearch : /hogo-sha/i,
	subname : "Hogo-sha",
	fullname : "Hogo-sha",
	source : ["MAH", 42],
	features : {
		"subclassfeature3" : {
			name : "Bonded Weapon",
			source : ["MAH", 42],
			minlevel : 3,
			description : desc([
				"I can bond with one slashing weapon by meditating with it for 8 hrs",
				"My AC increases by 1 and I have advantage on any checks made to climb",
				"Once done I must bond each day for 1 hr, can't be disarmed/summon as a bonus action"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Guardian’s Bond",
			source : ["MAH", 42],
			minlevel : 3,
			description : desc([
				"When I finish a short/long rest, I can choose one friendly creature to protect",
				"I can cast warding bond at will w/o expending a spell slot/material components, targeting only that creature. I must be bonded to a weapon in order to use this feature"
			]),
			spellcastingBonus : {
				name : "Guardian’s Bond",
				spells : ["warding bond"],
				selection : ["warding bond"]
			},
		},
		"subclassfeature7" : {
			name : "Guardian’s Will",
			source : ["MAH", 42],
			minlevel : 6,
			description : desc([
				"When I finish a short/long rest, I become affected by the death ward spell",
				"I can take the Search action as a bonus action. I must be bonded to a weapon"
			]),
		},
		"subclassfeature10" : {
			name : "Guardian’s Strike",
			source : ["MAH", 42],
			minlevel : 10,
			description : desc([
				"When a hostile creature in my reach attacks me/one of my allies w/melee attack",
				"(reaction)-imm strike back w/adv using my bonded weapon, dealing an additional 1d10 slashing damage if the attack is successful"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Guardian’s Touch",
			source : ["MAH", 42],
			minlevel : 15,
			description : desc([
				"I can cast remove curse at will, without expending a spell slot."
			]),
			spellcastingBonus : {
				name : "Guardian’s Touch",
				spells : ["remove curse"],
				selection : ["remove curse"],
				atwill : true
			},
		},
		"subclassfeature18" : {
			name : "Combat Blade",
			source : ["MAH", 41],
			minlevel : 15,
			description : desc([
				"(reaction)-OA w/my bonded weapon even if I've already used my reaction this round",
				"When I  take the Dodge action, I can make a single attack w/ my bonded weapon as a bonus action."
			]),
			action : ["reaction", ""]
		},
	},
});
AddSubClass("fighter", "satsugai", {
	regExpSearch : /satsugai/i,
	subname : "Satsugai",
	fullname : "Satsugai",
	source : ["MAH", 42],
	features : {
		"subclassfeature3" : {
			name : "Bonded Weapon",
			source : ["MAH", 42],
			minlevel : 3,
			description : desc([
				"I can bond with one slashing weapon by meditating with it for 8 hrs",
				"Once done I must bond each day for 1 hr, can't be disarmed/summon as a bonus action"
			]),
			additional : ["", "", "+1 dmg", "+1 dmg", "+1 dmg", "+1 dmg", "+1 dmg", "+1 dmg", "+1 dmg", "+1d4 dmg", "+1d4 dmg", "+1d4 dmg", "+1d4 dmg", "+1d4 dmg", "+1d4 dmg", "+1d4 dmg", "+1d4 dmg", "+1d4 dmg", "+1d4 dmg", "+1d4 dmg"],
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Spider’s Stealth",
			source : ["MAH", 42],
			minlevel : 3,
			description : desc([
				"My Dex (stealth) checks are made w/ adv while I'm not wearing heavy armor."
			]),
		},
		"subclassfeature7" : {
			name : "Swift",
			source : ["MAH", 42],
			minlevel : 6,
			description : desc([
				"My speed inc. by 10 ft while I'm not wearing heavy armor. I gain prof in Dex saves"
			]),
			speed : {
				allModes : "+10"
			},
			saves : ["Dex"]
		},
		"subclassfeature10" : {
			name : "Implacable",
			source : ["MAH", 42],
			minlevel : 10,
			description : desc([
				"I can move through hostile creatures as if it were difficult terrain and no attacks can be made with advantage against me"
			]),
		},
		"subclassfeature15" : {
			name : "Slayer",
			source : ["MAH", 42],
			minlevel : 15,
			description : desc([
				"When I critically hit a creature w/my bonded weapon, I gain the following bonuses:",
				"• I can imm. move 20 ft w/o provoking opportunity attacks",
				"• My next attack vs. that creature before the end of my next turn hits, even if I would otherwise miss",
				"• Before the end of my next turn, I can make one additional attack vs. the target using your bonus action"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature18" : {
			name : "Wyvern’s Ferocity",
			source : ["MAH", 41],
			minlevel : 15,
			description : desc([
				"When I roll initiative, I can mark a creature that I see as my prey",
				"On my first turn in the combat, my attacks-adv vs. the target creature, my walking speed is doubled, to take the most direct route towards the target creature",
				"Once I use this feature, I must finish a long rest before I can do so again"
			]),
			recovery : "long rest"
		},
	},
});
//fighter-wh stands for witch hunter
AddSubClass("fighter", "fighter-wh", {
	regExpSearch : /fighter-wh/i,
	subname : "Fighter-WH",
	fullname : "Fighter-WH",
	source : ["MAH", 42],
	features : {
		"subclassfeature3" : {
			name : "Detect Evil",
			source : ["MAH", 42],
			minlevel : 3,
			description : desc([
				"I can cast detect evil and good at will, without expending a spell slot",
				"When you cast the spell in this way, it only detects aberrations, fiends, and undead, but it also detects creatures infected with Taint"
			]),
			spellcastingBonus : {
				name : "Detect Evil",
				spells : ["detect evil and good"],
				selection : ["detect evil and good"],
				atwill : true
			},
		},
		"subclassfeature3.1" : {
			name : "Bane of Evil",
			source : ["MAH", 42],
			minlevel : 3,
			description : desc([
				"Once/turn-hit an aberration/fiend/undead/Tainted w/ a melee weapon attack, I can roll one additional weapon damage die",
				"@7th level-hit an aberration/fiend/undead/Tainted w/my Bane of Evil feature, I ignore all resistances the creature has for the rest of my turn",
				"@18th level, I can roll two additional weapon damage dice instead of one"
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Int Mod\").value);",
			recovery : "short rest"
		},
		"subclassfeature7" : {
			name : "Mind’s Finesse",
			source : ["MAH", 42],
			minlevel : 6,
			description : desc([
				"I can add my Int mod to all saving throws."
			]),
			addMod : {
				type : "save", field : "All", mod : "Int", text : "I can add my Intelligence modifier to  all saving throws."
			},
		},
		"subclassfeature10" : {
			name : "Courageous",
			source : ["MAH", 42],
			minlevel : 10,
			description : desc([
				"I can no longer be frightened. Additionally, whenever a creature attempts to frighten me until the end of my next turn, my attacks are made w/adv vs. the creature that attempted to frighten me"
			]),
			savetxt : {
				immune : ["frightened"]
			},
		},
		"subclassfeature15" : {
			name : "Resist Evil",
			source : ["MAH", 42],
			minlevel : 15,
			description : desc([
				"I have adv on saving throws vs. spells cast by aberrations/fiends/undead, and creatures infected with Taint."
			]),
			savetxt : {
				adv_vs : ["spells cast by aberrations/fiends/undead, and creatures infected with Taint"]
			,}
		},
	},
});

//THE KENSAI:
AddSubClass("kensai", "blademaster", {
	regExpSearch : /blademaster/i,
	subname : "Blademaster",
	source : ["MAH", 44],
	abilitySave : 6,
	spellcastingAbility : 6,
	features : {
		"subclassfeature1" : {
			name : "Maneuvers",
			source : ["MAH", 44],
			minlevel : 1,
			description : desc([
				"Use the \"Choose Features\" button above to add a Maneuver to the third page",
				"I choose my maneuvers from the Legacy and Shadow Maneuvers lists",
				"I can use a Maneuver by expending ki"
			]),
			additional : ["", "3 known", "3 known", "3 known", "3 known", "4 known", "4 known", "4 known", "4 known", "5 known", "5 known", "5 known", "5 known", "5 known", "6 known", "6 known", "6 known", "6 known", "6 known", "6 known"],
			extraname : "Maneuver",
			extrachoices : ["Mind over Body (Legacy Maneuvers)", "Rejuvenation (Legacy Maneuvers)", "Quick-Strike (Legacy Maneuvers)", "Dazing Blow (Shadow Maneuvers)", "Cresent Sweep (Shadow Maneuvers)", "Heel Cut (Shadow Maneuvers)", "Ki Shuriken (Shadow Maneuvers)", "Serpent’s Reach (Shadow Maneuvers)", "Shadow Skin (Shadow Maneuvers)"],
			"mind over body (legacy maneuvers)" : {
				name : "Mind over Body (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc( [
					"[2 ki point]",
					"I can reroll a failed Strength, Dexterity, or Constitution saving throw"
				]),
			},
			"rejuvenation (legacy maneuvers)" : {
				name : "Rejuvenation (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"As an action, I can heal myself for 1 hit die + my Con mod for every 1 Ki used",						"I expend any hit dice I use"
				]),
				action : ["action", ""]
			},
			"quick-strike (legacy maneuvers)" : {
				name : "Quick-Strike (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"When you disengage, you may spend a bonus action to make a single weapon attack with your bonded weapon."
				]),
				action : ["bonus action", ""]
			},
			"dazing blow (shadow maneuvers)" : {
				name : "Dazing Blow (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[2 ki point]",
					"When you ht a Large or smaller creature with a melee weapon attack, I can try to daze it",
					"The target must succeed a Con save, or it can't make opportunity attacks until the beginning of your next turn."
				]),
			},
			"cresent sweep (shadow maneuvers)" : {
				name : "Cresent Sweep (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[4 ki point]",
					"As an action, I can empower one attack to hit all enemies within 5 feet of me"
				]),
				action : ["action", ""]
			},
			"heel cut (shadow maneuvers)" : {
				name : "Heel Cut (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[2 ki point]",
					"When I hit a Large or smaller creature with a melee weapon attack, I can try to cripple it",
					"It must succeed a Dex save, or have it’s walking speed halved until the end of my next turn"
				]),
			},
			"ki shuriken (shadow maneuvers)" : {
				name : "Ki Shuriken (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[4 ki point]",
					"Energy shoots from my bonded weapon in a 5 ft by 30 ft line",
					"All in the line must make a Dex saving throw with DC 8 + Cha modifier + prof bonus",
					"It does force damage equal to your kensai level + your Charisma modifier",
					"Half as much damage on a successful save"
				]),
			},
			"serpent’s reach (shadow maneuvers)" : {
				name : "Serpent’s Reach (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"I can increase the reach of one of my melee attack's by 5 ft"
				]),
			},
			"shadow skin (shadow maneuvers)" : {
				name : "Shadow Skin (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[3 ki point]",
					"I can use my reaction to force an attacker to miss me, if he would have hit"
				]),
				action : ["reaction", " (I'm hit with an attack)"]
			},
		},
		"subclassfeature1.1" : {
			name : "Fighting Style",
			source : ["MAH", 44],
			minlevel : 1,
			description : desc([
				"Choose a Fighting Style for the kensai using the \"Choose Feature\" button above"
			]),
			choices : ["Dueling", "Great Weapon Fighting"],
			"dueling" : {
				name : "Dueling Fighting Style",
				description : desc([
					"+2 to damage rolls when wielding a melee weapon in one hand and no other weapons"
				]),
				calcChanges : {
					atkCalc : ["var areOffHands = function(n){for(var i=1;i<=n;i++){if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) {return true; }; }; }(FieldNumbers.actions); if (!areOffHands && isMeleeWeapon && !(/\\b(2|two).?hand(ed)?s?\\b/i).test(theWea.description)) {output.extraDmg += 2; }; ", "When I'm wielding a melee weapon in one hand and no weapon in my other hand, I do +2 damage with that melee weapon. This condition will always be false if the bonus action 'Off-hand Attack' exists."]
				},
			},
			"great weapon fighting" : {
				name : "Great Weapon Fighting Style",
				description : desc([
					"Reroll 1 or 2 on damage if wielding two-handed/versatile melee weapon in both hands"
				]),
				calcChanges : {
					atkAdd : ["if (isMeleeWeapon && (/\\b(versatile|(2|two).?hand(ed)?s?)\\b/i).test(theWea.description)) {fields.Description += (fields.Description ? '; ' : '') + 'Re-roll 1 or 2 on damage die' + ((/versatile/i).test(fields.Description) ? ' when two-handed' : ''); }; ", "While wielding a two-handed or versatile melee weapon in two hands, I can re-roll a 1 or 2 on any damage die once."]
				},
			},
		},
		"subclassfeature1.2" : {
			name : "Way of the Blade",
			source : ["MAH", 44],
			minlevel : 1,
			description : desc([
				"I gain proficiency with martial weapons and the perception skill"
			]),
			weapons : [false, true],
			skills : ["Perception"]
		},
		"subclassfeature6" : {
			name : "Blinkstrike",
			source : ["MAH", 44],
			minlevel : 6,
			description : desc([
				"Once per turn, I can attack and teleport 30 ft away as one action",
				"Teleporting right before you make your attack.",
				"I gain adv on the attack roll, and deal 2d6 extra weapon damage"
			]),
			additional : ["", "", "", "", "", "+2d6", "+2d6", "+2d6", "+2d6", "+2d6", "+4d6; 1 ki", "+4d6; 1 ki", "+4d6; 1 ki", "+4d6; 1 ki", "+4d6; 1 ki", "+4d6; 1 ki", "+6d6; 2 ki", "+6d6; 2 ki", "+6d6; 2 ki", "+6d6; 2 ki"]
		},
		"subclassfeature10" : {
			name : "Ki Defense",
			source : ["MAH", 44],
			minlevel : 10,
			description : desc([
				"Wielding only my bonded weapon, AC + # of med/lg'er creatures in 5 ft of me I can see",
				"bonus action-focus a single target I see; disadv on all attack rolls against me/1 ki",
				"I gain adv on saving throws against its spells; focus broken if I cant see it anymore"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature15" : {
			name : "Inner Peace",
			source : ["MAH", 44],
			minlevel : 15,
			description : desc([
				"Wielding my bonded weapon, I can't be charmed or frightened, and I gain truesight 5 ft",
				"If surprised, I can act normally if i use my blindstrike"
			]),
		},
		"subclassfeature18" : {
			name : "Kai",
			source : ["MAH", 44],
			minlevel : 18,
			description : desc([
				"Wielding my bonded weapon, I can maximize the damage of all dice on a hit",
			]),
			recovery : "short rest"
		},
	},
});
AddSubClass("kensai", "master of the unseen hand", {
	regExpSearch : /^(?=.*master)(?=.*unseen)(?=.*hand).*$/i,
	subname : "Master of the Unseen Hand",
	source : ["MAH", 45],
	abilitySave : 6,
	spellcastingAbility : 6,
	features : {
		"subclassfeature1" : {
			name : "Maneuvers",
			source : ["MAH", 44],
			minlevel : 1,
			description : desc([
				"Use the \"Choose Features\" button above to add a Maneuver to the third page",
				"Choose from the Legacy/Weave lists, I can use a Maneuver by expending ki"
			]),
			additional : ["", "3 known", "3 known", "3 known", "3 known", "4 known", "4 known", "4 known", "4 known", "5 known", "5 known", "5 known", "5 known", "5 known", "6 known", "6 known", "6 known", "6 known", "6 known", "6 known"],
			extraname : "Maneuver",
			extrachoices : ["Mind over Body (Legacy Maneuvers)", "Rejuvenation (Legacy Maneuvers)", "Quick-Strike (Legacy Maneuvers)", "Elemental Empowerment (Weave Maneuvers)", "Ki-Sight (Weave Maneuvers)", "Hand of Force (Weave Maneuvers)"],
			"mind over body (legacy maneuvers)" : {
				name : "Mind over Body (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[2 ki point]",
					"I can reroll a failed Strength, Dexterity, or Constitution saving throw"
				]),
			},
			"rejuvenation (legacy maneuvers)" : {
				name : "Rejuvenation (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"As an action, I can heal myself for 1 hit die + my Con mod for every 1 Ki used",
					"I expend any hit dice I use"
				]),
				action : ["action", ""]
			},
			"quick-strike (legacy maneuvers)" : {
				name : "Quick-Strike (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"When you disengage, you may spend a bonus action to make a single weapon attack with your bonded weapon."
				]),
				action : ["bonus action", ""]
			},
			"elemental empowerment (weave maneuvers)" : {
				name : "Elemental Empowerment (Weave Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"On a hit, replace weapon's damage type with either Acid, Cold, Fire, or Lightning damage",
					"Add 1d4 damage of the same type to the attack’s damage roll"
				]),
			},
			"ki-sight (weave maneuvers)" : {
				name : "Ki-Sight (Weave Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[3 ki point]",
					"As a bonus action, you gain  30 feet of Truesight til the start of your next turn"
				]),
				action : ["bonus action", ""]
			},
			"hand of force (weave maneuvers)" : {
				name : "Hand of Force (Weave Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[3 ki point]",
					"As an action, you cast bigby’s hand as a 5th level spell using only somatic components"
				]),
				action : ["action", ""]
			},
		},
		"subclassfeature1.1" : {
			name : "Dueling Fighting Style",
			source : ["MAH", 45],
			minlevel : 1,
			description : desc([
				"+2 to damage rolls when wielding a melee weapon in one hand and no other weapons"
			]),
			calcChanges : {
				atkCalc : ["var areOffHands = function(n){for(var i=1;i<=n;i++){if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) {return true; }; }; }(FieldNumbers.actions); if (!areOffHands && isMeleeWeapon && !(/\\b(2|two).?hand(ed)?s?\\b/i).test(theWea.description)) {output.extraDmg += 2; }; ", "When I'm wielding a melee weapon in one hand and no weapon in my other hand, I do +2 damage with that melee weapon. This condition will always be false if the bonus action 'Off-hand Attack' exists."]
			},
		},
		"subclassfeature1.2" : {
			name : "Unseen",
			source : ["MAH", 45],
			minlevel : 1,
			description : desc([
				"(action) I can cast blur on myself, w/o concentration, only lasts 30 sec",
			]),
			usages : ["1", "1", "1", "1", "1", "2", "2", "2", "3", "3", "3", "4", "4", "4", "5", "5", "5", "6", "6", "6",],
			recovery : "short rest",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Unseen",
				spells : ["blur"],
				selection : ["blur"]
			},
		},
		"subclassfeature6" : {
			name : "Telekinetic Charges",
			source : ["MAH", 45],
			minlevel : 6,
			description : desc([
				"I gain telekinetic (tk.) charges, Amt = my Cha mod (min 1) Recover-long rest",
				"I lose all my telekinetic powers, if not wielding my Bonded Weapon."
			]),
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Cha Mod\").value);",
			recovery : "long rest",
			extraname : "Master of the Unseen Hand 6",
			eval : "ClassFeatureOptions([\"kensai\", \"subclassfeature6\", \"weave sight\", \"extra\"]); ClassFeatureOptions([\"kensai\", \"subclassfeature6\", \"unseen hand\", \"extra\"]);",
			removeeval : "ClassFeatureOptions([\"kensai\", \"subclassfeature6\", \"weave sight\", \"extra\"], \"remove\"); ClassFeatureOptions([\"kensai\", \"subclassfeature6\", \"unseen hand\", \"extra\"], \"remove\");",
			"weave sight" : {
				name : "Weave Sight",
				source : ["MAH", 45],
				minlevel : 6,
				description : desc([
					"I gain 10 feet of blindsight from my bonded weapon",
					"If I blindfold myself I gain 60 ft of blindsight from my bonded weapon instead",
					"As long as it is on the same plane of existence as you."
				]),
			},
			"unseen hand" : {
				name : "Unseen Hand",
				source : ["MAH", 45],
				minlevel : 6,
				description : desc([
					"I can cast telekinesis (1 tk charge), requires only somatic comp. range. 20 ft",
					"Lasts between turns, with no cost to maintain Unless you actively try to move it",
					"Requires concentration or the spell will fail."
				]),
				additional : ["", "", "", "", "", "20 ft", "20 ft", "20 ft", "20 ft", "40 ft", "40 ft", "40 ft", "40 ft", "40 ft", "60 ft", "60 ft", "60 ft", "60 ft", "60 ft", "60 ft"],
				spellcastingBonus : {
				name : "Unseen Hand",
				spells : ["telekinesis"],
				selection : ["telekinesis"]
				},
			},
		},
		"subclassfeature10" : {
			name : "Telekinetic Wielder",
			source : ["MAH", 45],
			minlevel : 10,
			description : desc([
				"I can try to pull a creature’s weapon out of its grasp (1 tk charge)",
				"It must succed on a Str save, if it fails, its diarmed and I can attack as a bonus action",
				"At end of my turn, I drop it unless I throw it away upto 20 ft as a bonus action",
				"The attack mod with a tk weapon = my prof bonus + Cha mod, + Cha mod to damage"
			]),
			action : ["bonus action", ""],
			extraname : "Master of the Unseen Hand 10",
			eval : "ClassFeatureOptions([\"kensai\", \"subclassfeature10\", \"weave blade\", \"extra\"]);",
			removeeval : "ClassFeatureOptions([\"kensai\", \"subclassfeature10\", \"weave blade\", \"extra\"], \"remove\");",
			"weave blade" : {
				name : "Weave Blade",
				source : ["MAH", 45],
				minlevel : 10,
				description : desc([
					"Wielding only my bonded weapon, my reach with it increase to 30 ft",
					"All damage is force damage and I can't crit",
					"If i spend 1 ki when I hit large or smaller creature its knocked back 10 ft"
				]),
			},
		},
		"subclassfeature15" : {
			name : "Telekinetic Flight",
			source : ["MAH", 45],
			minlevel : 15,
			description : desc([
				"I can lift a # of creatures  = my Cha mod (me included), in the air (1 tk charge)",
				"Creatures in air gain fly 60 ft but can't move on thier own",
				"During my move action i can move the creatures, they fall if more than 30 ft from me",
				"On next turn, can maintain the flight as a action letting me move all 60 ft again",
				"If i dont use a action to maintain, all fall. doesnt use extra charges either"
			]),
			action : ["action", ""]
		},
		"subclassfeature18" : {
			name : "Fling",
			source : ["MAH", 45],
			minlevel : 18,
			description : desc([
				"I can try to grab onto a Huge or smaller creature telekinetically (2 tk charges)",
				"It must succeed a Dex save, vs my maneuver save DC, or be flung 100 ft",
				"Can impose disadv on the save (a 3rd tk charge), then telekineticlly let go"
			]),
			action : ["action", ""]
		},
	},
});
AddSubClass("kensai", "samurai", {
	regExpSearch : /samurai/i,
	subname : "Samurai",
	source : ["MAH", 46],
	abilitySave : 6,
	features : {
		"subclassfeature1" : {
			name : "Maneuvers",
			source : ["MAH", 46],
			minlevel : 1,
			description : desc([
				"Use the \"Choose Features\" button above to add a Maneuver to the third page",
				"I choose from the Legacy Maneuvers lists; Use by spending ki"
			]),
			additional : ["", "3 known", "3 known", "3 known", "3 known", "4 known", "4 known", "4 known", "4 known", "5 known", "5 known", "5 known", "5 known", "5 known", "6 known", "6 known", "6 known", "6 known", "6 known", "6 known"],
			extraname : "Maneuver",
			extrachoices : ["Mind over Body (Legacy Maneuvers)", "Rejuvenation (Legacy Maneuvers)", "Quick-Strike (Legacy Maneuvers)"],
			"mind over body (legacy maneuvers)" : {
				name : "Mind over Body (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc( [
					"[2 ki point]",
					"I can reroll a failed Strength, Dexterity, or Constitution saving throw"
				]),
			},
			"rejuvenation (legacy maneuvers)" : {
				name : "Rejuvenation (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"As an action, I can heal myself for 1 hit die + my Con mod for every 1 Ki used",
					"I expend any hit dice I use"
				]),
				action : ["action", ""]
			},
			"quick-strike (legacy maneuvers)" : {
				name : "Quick-Strike (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"When you disengage, you may spend a bonus action to make a single weapon attack with your bonded weapon."
				]),
				action : ["bonus action", ""]
			},
		},
		"subclassfeature1.1" : {
			name : "Way of the Warrior",
			source : ["MAH", 46],
			minlevel : 1,
			description : desc([
				"I gain proficiency with medium armor and martial weapons"
			]),
			weapons : [false, true],
			armor : [false, true, false, false]
		},
		"subclassfeature1.2" : {
			name : "Great Weapon Fighting Style",
			source : ["MAH", 46],
			minlevel : 1,
			description : desc([
				"Reroll 1 or 2 on damage if wielding two-handed/versatile melee weapon in both hands"
			]),
			calcChanges : {
				atkAdd : ["if (isMeleeWeapon && (/\\b(versatile|(2|two).?hand(ed)?s?)\\b/i).test(theWea.description)) {fields.Description += (fields.Description ? '; ' : '') + 'Re-roll 1 or 2 on damage die' + ((/versatile/i).test(fields.Description) ? ' when two-handed' : ''); }; ", "While wielding a two-handed or versatile melee weapon in two hands, I can re-roll a 1 or 2 on any damage die once."]
			},
		},
		"subclassfeature6" : {
			name : "Martial Stance",
			source : ["MAH", 46],
			minlevel : 6,
			description : desc([
				"I can replace a maneuver with a stance",
				"I enter a stance as a bonus action,/1 ki, if bonded weapons 2h/versatile",
				"Stance lasts 1 min, or until I change stances, or drop bonded weapon/unconscious/die"
			]),
			additional : ["", "", "", "", "", "4 known", "4 known", "4 known", "4 known", "5 known", "5 known", "5 known", "5 known", "5 known", "6 known", "6 known", "6 known", "6 known", "6 known", "6 known"],
			extraname : "Stance",
			extrachoices : ["Crawdad Stance", "Heron Stance", "Pegasus Stance", "Phoenix Stance", "Spider Stance", "Tiger Stance", "Wyvern Stance"],
			"crawdad stance" : {
				name : "Crawdad Stance",
				source : ["MAH", 46],
				description : desc([
					"AC + 1, can spend 1 ki to negate being moved or knocked prone"
				]),
			},
			"heron stance" : {
				name : "Heron Stance",
				source : ["MAH", 46],
				description : desc([
					"As a bonus action on each turn I can dash; or dodge if I use 1 ki",
				]),
				action : ["bonus action", ""]
			},
			"pegasus stance" : {
				name : "Pegasus Stance",
				source : ["MAH", 46],
				description : desc([
					"Mounted, mount’s speed + 30 ft, if you/mount take magic damage,  reaction/1 Ki to half"
				]),
			},
			"phoenix stance" : {
				name : "Phoenix Stance",
				source : ["MAH", 46],
				description : desc([
					"Gain adv vs restraining or incapacitating effects",
					"When reduced to 0 hp, spend 2 ki to make Con save (DC 5 + damage dealt)",
					"Save: reduced to 1 hp (can't use if dropped by Necrotic damage or crit)"
				]),
			},
			"spider stance" : {
				name : "Spider Stance",
				source : ["MAH", 46],
				description : desc([
					"If 1st attack/turn hits; extra 1d10 force damage, 1/turn, spend 1 ki to add 5 ft of reach"
				]),
			},
			"tiger stance" : {
				name : "Tiger Stance",
				source : ["MAH", 46],
				description : desc([
					"At end of my turn, gain temp hp equal my Cha mod. 2 Ki/all ally in 10 ft also gain thp "
				]),
			},
			"wyvern stance" : {
				name : "Wyvern Stance",
				source : ["MAH", 46],
				description : desc([
					"Attacks can't have adv vs me; 1 ki/gain adv on attacks with bonded weapon"
				]),
			},
			action : ["bonus action", ""]
		},
		"clash" : {
			name : "Clash",
			source : ["MAH", 44],
			minlevel : 7,
			description : desc([
				"Once per turn, I can deal an additional 1d4 force damage with my bonded weapon"
			]),
			additional : ["", "", "", "", "", "", "1d4", "1d4", "1d4", "1d8", "2d8", "2d8", "2d8", "2d8", "2d8", "2d8", "3d8", "3d8", "3d8", "3d8"]
		},
		"subclassfeature10" : {
			name : "Enhanced Clash",
			source : ["MAH", 46],
			minlevel : 10,
			description : desc([
				"as long as I wield my bonded weapon in two hands, my Clash dice become d8s."
			]),
		},
		"subclassfeature10.1" : {
			name : "Strengthened Stances",
			source : ["MAH", 46],
			minlevel : 10,
			description : desc([
				"Choose an Improved Stance for the samurai using the \"Choose Feature\" button above",
				"I can choose to strenghten 1 of my stances, and a 2nd one @ 15 lv."
			]),
			additional : ["", "", "", "", "", "", "", "", "", "5 known", "5 known", "5 known", "5 known", "5 known", "6 known", "6 known", "6 known", "6 known", "6 known", "6 known"],
			extraname : "Strengthend Stance",
			extrachoices : ["Improved Crawdad Stance", "Improved Heron Stance", "Improved Pegasus Stance", "Improved Phoenix Stance", "Improved Spider Stance", "Improved Tiger Stance", "Improved Wyvern Stance"],
			"improved crawdad stance" : {
				name : "Improved Crawdad Stance",
				source : ["MAH", 46],
				description : desc([
					"AC + 1, can spend 1 ki to negate being moved or knocked prone",
					"While in Crawdad stance, you cannot be critically hit"
				]),
			},
			"improved heron stance" : {
				name : "Improved Heron Stance",
				source : ["MAH", 46],
				description : desc([
					"As a bonus action on each turn I can dash; or dodge if I use 1 ki",
					"While in Heron stance, my speed by increases 20 feet with no heavy armor"
				]),
				action : ["bonus action", ""]
			},
			"improved pegasus stance" : {
				name : "Improved Pegasus Stance",
				source : ["MAH", 46],
				description : desc([
					"Mounted, mount’s speed + 30 ft, if you/mount take magic damage",
					"While mounted and in Pegasus stance, your initiative + 10, and attacks on me have disadv",
					"Reaction, 1 ki to 1/2 damage"
				]),
				action : ["reaction", ""]
			},
			"improved phoenix stance" : {
				name : "Improved Phoenix Stance",
				source : ["MAH", 46],
				description : desc([
					"Gain adv vs restraining or incapacitating effects",
					"When reduced to 0 hp, spend 2 ki to make Con save (DC 5 + damage dealt)",
					"Save: reduced to 1 hp (can't use if dropped by Necrotic damage or crit)",
					"While in phoenix stance, gain resistance to fire, lightning, psychic, thunder damage"
				]),
			},
 			"improved spider stance" : {
				name : "Improved Spider Stance",
				source : ["MAH", 46],
				description : desc([
					"If 1st attack/turn hits; extra 1d10 force damage, 1/turn, /1 ki to add 5 ft of reach",
					"The additional damage you deal while in Spider stance turns into 2d10 Force damage."
				]),
			},
			"improved tiger stance" : {
				name : "Tiger Stance",
				source : ["MAH", 46],
				description : desc([
					"At end of my turn, gain temp hp equal my Cha mod. 2 Ki/all ally in 10 ft also gain thp",
					"While in Tiger stance, you/allies in 10 ft add my Cha mod to their 1st attack each turn"
				]),
			},
			"improved wyvern stance" : {
				name : "Improved Wyvern Stance",
				source : ["MAH", 46],
				description : desc([
					"Attacks can't have adv vs me; 1 ki/gain adv on attacks with bonded weapon",
					"While in Wyvern stance, can't be frightened",
					"Entering Wyvern stance while frightened suspends the effect."
				]),
			},
		},
		"subclassfeature15" : {
			name : "Honor Bound",
			source : ["MAH", 46],
			minlevel : 15,
			description : desc([
				"Automatically succeed an Honor check or save, 1/short rest",
				"If no Honor Score, you gain advantage on a Cha save"
			]),
		},
		"subclassfeature18" : {
			name : "Stance Mastery",
			source : ["MAH", 46],
			minlevel : 18,
			description : desc([
				"I can enter a 2nd stance/2 ki as an action",
				"With 2 stances active, I can switch one/2 ki as an action",
				"Can only have 1 improved stance active at any given time"
			]),
			action : ["action", ""]
		},
	},
});
AddSubClass("kensai", "shinobi", {
	regExpSearch : /shinobi/i,
	subname : "Shinobi",
	source : ["MAH", 47],
	abilitySave : 6,
	features : {
		"subclassfeature1" : {
			name : "Maneuvers",
			source : ["MAH", 44],
			minlevel : 1,
			description : desc([
				"Use the \"Choose Features\" button above to add a Maneuver to the third page",
				"Choose from the Legacy/Shadow lists, I can use a Maneuver by expending ki"
			]),
			additional : ["", "3 known", "3 known", "3 known", "3 known", "4 known", "4 known", "4 known", "4 known", "5 known", "5 known", "5 known", "5 known", "5 known", "6 known", "6 known", "6 known", "6 known", "6 known", "6 known"],
			extraname : "Maneuver",
			extrachoices : ["Mind over Body (Legacy Maneuvers)", "Rejuvenation (Legacy Maneuvers)", "Quick-Strike (Legacy Maneuvers)", "Dazing Blow (Shadow Maneuvers)", "Cresent Sweep (Shadow Maneuvers)", "Heel Cut (Shadow Maneuvers)", "Ki Shuriken (Shadow Maneuvers)", "Serpent’s Reach (Shadow Maneuvers)", "Shadow Skin (Shadow Maneuvers)"],
			"mind over body (legacy maneuvers)" : {
				name : "Mind over Body (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc( [
					"[2 ki point]",
					"I can reroll a failed Strength, Dexterity, or Constitution saving throw"
				]),
			},
			"rejuvenation (legacy maneuvers)" : {
				name : "Rejuvenation (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"As an action, I can heal myself for 1 hit die + my Con mod for every 1 Ki used",						"I expend any hit dice I use"
				]),
				action : ["action", ""]
			},
			"quick-strike (legacy maneuvers)" : {
				name : "Quick-Strike (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"When you disengage, you may spend a bonus action to make a single weapon attack with your bonded weapon."
				]),
				action : ["bonus action", ""]
			},
			"dazing blow (shadow maneuvers)" : {
				name : "Dazing Blow (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[2 ki point]",
					"When I ht a Large/smaller creature with a melee weapon attack, I can try to daze it",
					"Target must succeed a Con save, Fail; can't make OA's until the start of my next turn"
				]),
			},
			"cresent sweep (shadow maneuvers)" : {
				name : "Cresent Sweep (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[4 ki point]",
					"As an action, I can empower one attack to hit all enemies within 5 feet of me"
				]),
				action : ["action", ""]
			},
			"heel cut (shadow maneuvers)" : {
				name : "Heel Cut (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[2 ki point]",
					"When I hit a Large or smaller creature with a melee weapon attack, I can try to cripple it",
					"It must succeed a Dex save, or have it’s walking speed halved until the end of my next turn"
				]),
			},
			"ki shuriken (shadow maneuvers)" : {
				name : "Ki Shuriken (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[4 ki point]",
					"Energy shoots from my bonded weapon in a 5 ft by 30 ft line",
					"All in the line must make a Dex saving throw with DC 8 + Cha modifier + prof bonus",
					"It does force damage equal to your kensai level + your Charisma modifier",
					"Half as much damage on a successful save"
				]),
			},
			"serpent’s reach (shadow maneuvers)" : {
				name : "Serpent’s Reach (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"I can increase the reach of one of my melee attack's by 5 ft"
				]),
			},
			"shadow skin (shadow maneuvers)" : {
				name : "Shadow Skin (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[3 ki point]",
					"I can use my reaction to force an attacker to miss me, if he would have hit"
				]),
				action : ["reaction", " (I'm hit with an attack)"]
			},
		},
		"subclassfeature1.1" : {
			name : "At Home in the Shadows",
			source : ["MAH", 47],
			minlevel : 1,
			description : desc([
				"While in dim light or darkness;",
				"• I am permanently under the effects of the jump spell",
				"• I gain 10 feet of movement",
				"• I gain darkvision out to a range of 60 feet",
				"• I can take the Hide action as a bonus action"
			]),
			action : ["bonus action", ""],
			vision : [["Darkvision", "fixed 60"]],
			speed : {
				allModes : "+10" ,
			removeeval : "-10"
			},
		},
		"subclassfeature1.2" : {
			name : "Shinobi Versatility",
			source : ["MAH", 47],
			minlevel : 1,
			description : desc([
				"I can cast disguise self/enhance ability without slots or components"
			]),
			recovery : "short rest",
			extraname : "Shinobi Versatility",
			eval : "ClassFeatureOptions([\"kensai\", \"subclassfeature1.2\", \"disguise self\", \"extra\"]); ClassFeatureOptions([\"kensai\", \"subclassfeature1.2\", \"enhance ability\", \"extra\"]);",
			removeeval : "ClassFeatureOptions([\"kensai\", \"subclassfeature1.2\", \"disguise self\", \"extra\"], \"remove\"); ClassFeatureOptions([\"kensai\", \"subclassfeature1.2\", \"enhance ability\", \"extra\"], \"remove\");",
			"disguise self" : {
				name : "Disguise Self",
				source : ["MAH", 47],
				description : desc([
					"I can cast disguise self without spending a spell slot (PHB 233)"
				]),
				action : ["action", ""],
				spellcastingBonus : {
					name : "Disguise Self",
					spells : ["disguise self"],
					selection : ["disguise self"]
				},
			},
			"enhance ability" : {
				name : "Enhance Ability",
				source : ["P", 80],
				description : desc([
					"I can cast enhance ability on myself as a 2nd lv spell without a slot/comp's.(PHB 237)"
				]),
				action : ["action", ""],
				spellcastingBonus : {
					name : "Enhance Ability",
					spells : ["enhance ability"],
					selection : ["enhance ability"]
				},
			},
		},
		"subclassfeature1" : {
			name : "Maneuvers",
			source : ["MAH", 44],
			minlevel : 1,
			description : desc([
				"Use the \"Choose Features\" button above to add a Maneuver to the third page",
				"Choose from the Legacy/Shadow lists, I can use a Maneuver by expending ki"
			]),
			additional : ["", "3 known", "3 known", "3 known", "3 known", "8 known", "8 known", "8 known", "8 known", "10 known", "10 known", "10 known", "10 known", "10 known", "12 known", "12 known", "12 known", "12 known", "12 known", "12 known"],
			extraname : "Maneuver",
			extrachoices : ["Mind over Body (Legacy Maneuvers)", "Rejuvenation (Legacy Maneuvers)", "Quick-Strike (Legacy Maneuvers)", "Dazing Blow (Shadow Maneuvers)", "Cresent Sweep (Shadow Maneuvers)", "Heel Cut (Shadow Maneuvers)", "Ki Shuriken (Shadow Maneuvers)", "Serpent’s Reach (Shadow Maneuvers)", "Shadow Skin (Shadow Maneuvers)"],
			"mind over body (legacy maneuvers)" : {
				name : "Mind over Body (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc( [
					"[2 ki point]",
					"I can reroll a failed Strength, Dexterity, or Constitution saving throw"
				]),
			},
			"rejuvenation (legacy maneuvers)" : {
				name : "Rejuvenation (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"As an action, I can heal myself for 1 hit die + my Con mod for every 1 Ki used",						"I expend any hit dice I use"
				]),
				action : ["action", ""]
			},
			"quick-strike (legacy maneuvers)" : {
				name : "Quick-Strike (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"When you disengage, you may spend a bonus action to make a single weapon attack with your bonded weapon."
				]),
				action : ["bonus action", ""]
			},
			"dazing blow (shadow maneuvers)" : {
				name : "Dazing Blow (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[2 ki point]",
					"When I ht a Large/smaller creature with a melee weapon attack, I can try to daze it",
					"Target must succeed a Con save, Fail; can't make OA's until the start of my next turn"
				]),
			},
			"cresent sweep (shadow maneuvers)" : {
				name : "Cresent Sweep (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[4 ki point]",
					"As an action, I can empower one attack to hit all enemies within 5 feet of me"
				]),
				action : ["action", ""]
			},
			"heel cut (shadow maneuvers)" : {
				name : "Heel Cut (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[2 ki point]",
					"When I hit a Large or smaller creature with a melee weapon attack, I can try to cripple it",
					"It must succeed a Dex save, or have it’s walking speed halved until the end of my next turn"
				]),
			},
			"ki shuriken (shadow maneuvers)" : {
				name : "Ki Shuriken (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[4 ki point]",
					"Energy shoots from my bonded weapon in a 5 ft by 30 ft line",
					"All in the line must make a Dex saving throw with DC 8 + Cha modifier + prof bonus",
					"It does force damage equal to your kensai level + your Charisma modifier",
					"Half as much damage on a successful save"
				]),
			},
			"serpent’s reach (shadow maneuvers)" : {
				name : "Serpent’s Reach (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"I can increase the reach of one of my melee attack's by 5 ft"
				]),
			},
			"shadow skin (shadow maneuvers)" : {
				name : "Shadow Skin (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[3 ki point]",
					"I can use my reaction to force an attacker to miss me, if he would have hit"
				]),
				action : ["reaction", " (I'm hit with an attack)"]
			},
		},
		"subclassfeature6" : {
			name : "Masterful Maneuvering",
			source : ["MAH", 47],
			minlevel : 6,
			description : desc([
				"I learn twice the number of kensai maneuvers I would otherwise be able to."
			]),
		},
		"subclassfeature6.1" : {
			name : "Ninjutsu",
			source : ["MAH", 47],
			minlevel : 6,
			description : desc([
				"When you use a maneuver that includes an attack against a single creature,",
				"Deal a # of d6 = maneuver’s Ki cost as additional force damage.",
				"Gain proficiency with eggshell grenades."
			]),
			weapons : [false, false, ["eggshell grenades"]]
		},
		"subclassfeature10" : {
			name : "Ninpo Maneuvers",
			source : ["MAH", 47],
			minlevel : 10,
			description : desc([
				"Use the \"Choose Features\" button above to add a Maneuver to the third page",
				"I can choose maneuvers from the Ninpo Maneuvers list"
			]),
			additional : ["", "3 known", "3 known", "3 known", "3 known", "8 known", "8 known", "8 known", "8 known", "10 known", "10 known", "10 known", "10 known", "10 known", "12 known", "12 known", "12 known", "12 known", "12 known", "12 known"],
			extraname : "Ninpo Maneuver",
			extrachoices : ["Fly (Ninpo Maneuvers)", "Mirror Image (Ninpo Maneuvers)", "Invisibility (Ninpo Maneuvers)"],
			"fly (ninpo maneuvers)" : {
				name : "Fly (Ninpo Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[4 ki points]",
					"As an action, I can cast the fly spell on myself, without components. Lasts 1 minute"
				]),
				action : ["action", ""],
				spellcastingBonus : {
					name : "Fly (Ninpo Maneuvers)",
					spells : ["fly"],
					selection : ["fly"]
				},
			},
			"mirror image (ninpo maneuvers)" : {
				name : "Mirror Image (Ninpo Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[3 ki points]",
					"As an action, I can cast mirror image."
				]),
				action : ["action", ""],
				spellcastingBonus : {
					name : "Mirror Image (Ninpo Maneuvers)",
					spells : ["mirror image"],
					selection : ["mirror image"]
				},
			},
			"invisibility (ninpo maneuvers)" : {
				name : "Invisibility (Ninpo Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[3 ki points]",
					"As an action, I can cast the invisibility spell on myself, without components."
				]),
				action : ["action", ""],
				spellcastingBonus : {
					name : "Invisibility  (Ninpo Maneuvers)",
					spells : ["invisibility"],
					selection : ["invisibility"]
				},
			},
		},
		"subclassfeature15" : {
			name : "Ninpo Instinct",
			source : ["MAH", 49],
			minlevel : 15,
			description : desc([
				"I gain advantage on initiative rolls and Dexterity (acrobatics) checks.",
				"If surprised, I can instead act normally/2ki2 ki"
				]),
			eval : "Checkbox(\"Init Adv\", true, \"Advantage to Initiative checks was gained from Kensai (Ninpo Instinct)\");",
			removeeval : "Checkbox(\"Init Adv\", false, \"\");"
		},
		"subclassfeature18" : {
			name : "Ninpo Mastery",
			source : ["MAH", 49],
			minlevel : 18,
			description : desc([
				"I become permanently affected by the freedom of movement spell",
				"I can cast misty step by expending 1 Ki, and mislead by expending 5 Ki"
			]),
			extraname : "SNinpo Mastery",
			eval : "ClassFeatureOptions([\"kensai\", \"subclassfeature18\", \"misty step\", \"extra\"]); ClassFeatureOptions([\"kensai\", \"subclassfeature18\", \"mislead\", \"extra\"]);",
			removeeval : "ClassFeatureOptions([\"kensai\", \"subclassfeature18\", \"misty step\", \"extra\"], \"remove\"); ClassFeatureOptions([\"kensai\", \"subclassfeature18\", \"mislead\", \"extra\"], \"remove\");",
			"misty step" : {
				name : "Misty Step",
				source : ["MAH", 49],
				description : desc([
					"I can cast misty step by expending 1 Ki, (PHB 260)"
				]),
				action : ["action", ""],
				spellcastingBonus : {
					name : "Misty Step",
					spells : ["misty step"],
					selection : ["misty step"],
				},
			},
			"mislead" : {
				name : "Mislead",
				source : ["MAH", 49],
				description : desc([
					"I can cast mislead by expending 5 Ki (PHB 260)"
				]),
				action : ["action", ""],
				spellcastingBonus : {
					name : "Mislead",
					spells : ["milead"],
					selection : ["milead"]
				},
			},
		},
	},
});
AddSubClass("kensai", "ravager", {
	regExpSearch : /ravager/i,
	subname : "Ravager",
	source : ["MAH", 48],
	abilitySave : 6,
	features : {
		"subclassfeature1" : {
			name : "Maneuvers",
			source : ["MAH", 48],
			minlevel : 1,
			description : desc([
				"Use the \"Choose Features\" button above to add a Maneuver to the third page",
				"Choose from the Legacy/Sadistic lists, I can use a Maneuver by expending ki"
			]),
			additional : ["", "3 known", "3 known", "3 known", "3 known", "4 known", "4 known", "4 known", "4 known", "5 known", "5 known", "5 known", "5 known", "5 known", "6 known", "6 known", "6 known", "6 known", "6 known", "6 known"],
			extraname : "Maneuvers",
			extrachoices : ["Mind over Body (Legacy Maneuvers)", "Rejuvenation (Legacy Maneuvers)", "Quick-Strike (Legacy Maneuvers)", "Blood Surge (Sadistic Maneuvers)", "Brutal Display (Sadistic Maneuvers)", "Expose (Sadistic Maneuvers)", "Pain Mirror (Sadistic Maneuvers)", "Thrive on Pain (Sadistic Maneuvers)"],
			"mind over body (legacy maneuvers)" : {
				name : "Mind over Body (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[2 ki point]",
					"I can reroll a failed Strength, Dexterity, or Constitution saving throw"
				]),
			},
			"rejuvenation (legacy maneuvers)" : {
				name : "Rejuvenation (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"As an action, I can heal myself for 1 hit die + my Con mod for every 1 Ki used",
					"I expend any hit dice I use"
				]),
				action : ["action", ""]
			},
			"quick-strike (legacy maneuvers)" : {
				name : "Quick-Strike (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"When you disengage, you may spend a bonus action to make a single weapon attack with your bonded weapon."
				]),
				action : ["bonus action", ""]
			},
			"blood surge (sadistic maneuvers)" : {
				name : "Blood Surge (Sadistic Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[3 ki points]",
					"I can succeed on a failed saving throw, Every time after the 1st I suffer a lvof exhaustion"
				]),
			},
			"brutal display (sadistic maneuvers)" : {
				name : "Brutal Display (Sadistic Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[2 ki points]",
					"When I reduce an enemy to 0 hit points on my turn,",
					"I can use a bonus action to try to frighten all enemies within 30 feet of me",
					"All affected must succeed Wis save or be frightened; until the start of my next turn"
				]),
				action : ["bonus action", ""]
			},
			"expose (sadistic maneuvers)" : {
				name : "Expose (Sadistic Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1 ki point]",
					"After dealing damage with my bonded weapon",
					"The next attack roll against this creature (not by me) will be made at advantage"
				]),
			},
			"pain mirror (sadistic maneuvers)" : {
				name : "Pain Mirror (Sadistic Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[4 ki oints]",
					"As a reaction to being damaged, I can mirror the incoming damage back at the attacker.",
					"Creature that damaged me must succeed a Cha save",
					"Fail: it  take force damage = half the damage I took (rounded down) + my kensai level.",
					"On a successful save, the creature takes half the damage."
				]),
				action : ["reaction", " (damaged from attack)"]
			},
			"thrive on pain (sadistic maneuvers)" : {
				name : "Thrive on Pain (Sadistic Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[3 ki points]",
					"When I hit an enemy with a melee attack, I gain temp hp = damage dealt + my Con mod"
				]),
			},
		},
		"subclassfeature1.1" : {
			name : "Dark Return",
			source : ["MAH", 48],
			minlevel : 1,
			description : desc([
				"• I have complete immunity against Taint.",
				"• When I'm healed with magic/potions I only regain half the amount (round down)",
				"• If I die I can only be resurrected by a true resurrection or wish spell.",
				"• I cannot be frightened.",
				"• I gain resistance to necrotic and psychic damage.",
				"• My eyes become black as the blackest night.",
				"• I gain a minor physical feature, as determined in the Minor Physical Feature table."
			]),
			savetxt : {
				immune : ["taint", "frightened"]
			},
			dmgres : ["necrotic", "psychic"],
			extraname : "Ravager 1",
			eval : "ClassFeatureOptions([\"kensai\", \"subclassfeature1.1\", \"minor physical feature table\", \"extra\"]); ClassFeatureOptions([\"kensai\", \"subclassfeature1.1\", \"notoriety\", \"extra\"]);",
			removeeval : "ClassFeatureOptions([\"kensai\", \"subclassfeature1.1\", \"minor physical feature table\", \"extra\"], \"remove\"); ClassFeatureOptions([\"kensai\", \"subclassfeature1.1\", \"notoriety\", \"extra\"], \"remove\");",
			"minor physical feature table" : {
				name : "Minor Physical Feature Table",
				source : ["MAH", 48],
				minlevel : 1,
				description : desc([
					"Minor Physical Feature Table (d6) (see Dark Arts)",
					"1. Your fingernails resemble claws",
					"2. Your spine protrudes through the skin as spikes",
					"3. Your skin is leathery and cracked",
					"4. You smell of decomposition and rot",
					"5. Your veins are blackened and bulge visibly",
					"6. Your heart beats once per hour and you are icy cold to the touch"
				]),
			},
			"notoriety" : {
				name : "Notoriety",
				source : ["MAH", 48],
				minlevel : 1,
				description : desc([
					"I gain proficiency with martial weapons and in the Intimidation skill."
				]),
				weapons : [false, true],
				skills : ["Intimidation"]
			},
		},
		"subclassfeature6" : {
			name : "Exploitive Insight",
			source : ["MAH", 48],
			minlevel : 6,
			description : desc([
				"If I spend 1 min observing/interacting another creature out of combat, gain info",
				"The DM tells me one of the following (if applicable):",
				"• If the creature has any damage vulnerabilities",
				"• If the creature has any fears or can be intimidated",
				"• If affected by the Taint or has used blood magic within the past day"
			]),
			extraname : "Ravager 6",
			eval : "ClassFeatureOptions([\"kensai\", \"subclassfeature6\", \"mortification of the flesh\", \"extra\"]); ClassFeatureOptions([\"kensai\", \"subclassfeature6\", \"visage of terror\", \"extra\"]);",
			removeeval : "ClassFeatureOptions([\"kensai\", \"subclassfeature6\", \"mortification of the flesh\", \"extra\"], \"remove\"); ClassFeatureOptions([\"kensai\", \"subclassfeature6\", \"visage of terror\", \"extra\"], \"remove\");",
			"mortification of the flesh" : {
				name : "Mortification of the Flesh",
				source : ["MAH", 48],
				minlevel : 6,
				description : desc([
					"I can regain expended Ki by inflicting pain on myself.",
					"bonus action, I can do 1d6 necro damage to myself with/bonded weapon/regain 1 Ki.",
					"This damage cannot be reduced or prevented in any way."
				]),
				action : ["bonus action", ""]
			},
			"visage of terror" : {
				name : "Visage of Terror",
				source : ["MAH", 48],
				minlevel : 6,
				description : desc([
					"I cast phantasmal killer as a 4th level spell; using only somatic comp's./4 ki points",
					"I take on the illusory manifestation for the inflicted target."
				]),
				spellcastingBonus : {
					name : "Visage of Terror",
					spells : ["phantasmal killer"],
					selection : ["phantasmal killer"]
				},
			},
		},
		"subclassfeature10" : {
			name : "Eyes of Dread",
			source : ["MAH", 48],
			minlevel : 10,
			description : desc([
				"I'm permanently under the effect of the eyebite spell.",
				 "As a action I can target a creature with asleep/panicked/or sickened effect./2 ki points"
			]),
			action : ["action", ""],
			extraname : "Ravager 10",
			eval : "ClassFeatureOptions([\"kensai\", \"subclassfeature10\", \"despair\", \"extra\"]);",
			removeeval : "ClassFeatureOptions([\"kensai\", \"subclassfeature10\", \"despair\", \"extra\"], \"remove\");",
			"despair" : {
				name : "Despair",
				source : ["MAH", 48],
				minlevel : 10,
				description : desc([
					"When I hit a creature that is frightened by me with my bonded weapon",
					"I can add 2d6 psychic damage to the attack’s damage roll."
				]),
			},
		},
		"subclassfeature15" : {
			name : "Crimson Cut",
			source : ["MAH", 48],
			minlevel : 15,
			description : desc([
				"once/turn; action-attack w/bonded weapon + necrotic dmg = 2d8 + my kensai level",
				"If creature's not resistant to necrotic, I regain 2 ki and gain temp hp = half the damage",
				"I can use this feature # times = my Cha mod./ regain all expended uses-long rest"
			]),
			additional : ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "2d8+15; necrotic", "2d8+16; necrotic", "2d8+17; necrotic", "2d8+18; necrotic", "2d8+19; necrotic", "2d8+20; necrotic"],
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Cha Mod\").value);",
			recovery : "long rest",
			action : ["action", ""]
		},
		"subclassfeature18" : {
			name : "Ravage",
			source : ["MAH", 48],
			minlevel : 18,
			description : desc([
				"I can cast harm /7 Ki; If I spend 10 Ki/target creature has disadvantage on its save"
			]),
			spellcastingBonus : {
				name : "Ravage",
				spells : ["harm"],
				selection : ["harm"]
			},
		},
	},
});

//MONK MONASTIC TRADITIONS: Must use CustomMonk for these to fit in sheet..
AddSubClass("custommonk", "way of ancient symbols", {
	regExpSearch : /way of ancient symbols/i,
	subname : "Way of Ancient Symbols",
	source : ["MAH", 50],
	features : {
		"subclassfeature3" : {
			name : "Tattoo",
			source : ["MAH", 50],
			minlevel : 3,
			description : desc([
				"Use the \"Choose Features\" button above to add a Ancient Symbols to the third page",
				"Tattoos are magical-abilities are supernatural-lose abilities in antimagic field"
			]),
			additional : ["", "", "1 known", "1 known", "1 known", "2 known", "2 known", "2 known", "2 known", "2 known", "4 known", "4 known", "4 known", "4 known", "4 known", "4 known", "5 known", "5 known", "5 known", "5 known"],
			extraname : "Tattoo's",
			extrachoices : ["Bamboo", "Bat", "Bellflower", "Butterfly", "Centipede (Prerequisite: 6th level)", "Chameleon (Prerequisite: 6th level)", "Crawdad", "Heron", "Crysanthemum (Prerequisite: 11th level)", "Dragon", "Damselfly (Prerequisite: 6th level)", "Falcon (Prerequisite: 11th level)", "Wyvern (Prerequisite: 6th level)", "Monkey (Prerequisite: 6th level)", "Phoenix (Prerequisite: 17th level)", "Spider (Prerequisite: 17th level)", "Scorpion (Prerequisite: 11th level)", "Tiger (Prerequisite: 17th level)", "Tortoise", "Pegasus (Prerequisite: 17th level)", "Wasp (Prerequisite: 11th level)", "White Mask (Prerequisite: 6th level)"],
			"bamboo" : {
				name : "Bamboo",
				source : ["MAH", 50],
				description : desc([
					"I have advantage on Constitution saving throws"
				]),
			},
			"bat" : {
				name : "Bat",
				source : ["MAH", 50],
				description : desc([
					"I have advantage on Dexterity saving throws"
				]),
			},
			"bellflower" : {
				name : "Bellflower",
				source : ["MAH", 50],
				description : desc([
					"I have advantage on Charisma saving throws"
				]),
			},
			"butterfly" : {
				name : "Butterfly",
				source : ["MAH", 50],
				description : desc([
					"I have advantage on Wisdom saving throws"
				]),
			},
			"centipede (prerequisite: 6th level)" : {
				name : "Centipede (Prerequisite: 6th level)",
				source : ["MAH", 50],
				description : desc([
					"I can cast misty step w/o a spell slot.",
					"I can use this feature a # times = to # of tattoos I have (max 5)",
					"I regain expended charges when I finish a long rest"
				]),
				spellcastingBonus : {
					name : "Centipede",
					spells : ["misty step"],
					selection : ["misty step"]
				},
			},
			"chameleon (prerequisite: 6th level)" : {
				name : "Chameleon (Prerequisite: 6th level)",
				source : ["MAH", 50],
				description : desc([
					"I can cast alter self w/o a spell slot.",
					"I can use this feature a # times = to # of tattoos I have (max 5)",
					"I regain expended charges when I finish a long rest"
				]),
				spellcastingBonus : {
					name : "Chameleon",
					spells : ["alter self"],
					selection : ["alter self"]
				},
			},
			"crawdad" : {
				name : "Crawdad",
				source : ["MAH", 50],
				description : desc([
					"When I take dmg, it is reduced by an amt = to the # of tattoos I have"
				]),
			},
			"heron" : {
				name : "Heron",
				source : ["MAH", 50],
				description : desc([
					"My step of the wind feature becomes permanent"
				]),
			},
			"crysanthemum (prerequisite: 11th level)" : {
				name : "Crysanthemum (Prerequisite: 11th level)",
				source : ["MAH", 50],
				description : desc([
					"For every full hour I'm in direct sunlight, I heal a # of hp = x2 the # of tattoos I have"
				]),
			},
			"dragon" : {
				name : "Dragon",
				source : ["MAH", 50],
				description : desc([
					"(action)-Dragon Breath weapon.-The type of Dragon tattooed (black, blue, brass, bronze, copper, gold, green, red, silver, white) determines save/size/shape/damage type",
					"All in area save-DC = 8 + Wis mod + prof bonus-Fail: 2d6 damage; Save: half damage"
				]),
				usages : ["", "", "1", "1", "1", "2", "2", "2", "2", "2", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5"],
				additional : ["2d6, cold", "2d6, cold", "2d6, cold", "2d6, cold", "2d6, cold", "3d6, cold", "3d6, cold", "3d6, cold", "3d6, cold", "3d6, cold", "4d6; cold", "4d6; cold", "4d6; cold", "4d6; cold", "4d6; cold", "5d6; cold", "5d6; cold", "5d6; cold", "5d6; cold", "5d6; cold"],
				action : ["action", ""],
			},
			"damselfly (prerequisite: 6th level)" : {
				name : "Damselfly (Prerequisite: 6th level)",
				source : ["MAH", 50],
				description : desc([
					"(bonus action)-increase my AC by 3 a # of rounds = # of tattoos Ihave (max 5)",
					"Re-use: short or long rest"
				]),
			},
			"falcon (prerequisite: 11th level)" : {
				name : "Falcon (Prerequisite: 11th level)",
				source : ["MAH", 50],
				description : desc([
					"Me and all allies in 10 ft of me can add my Wis mod (min 1) to save vs. fear effects"
				]),
			},
			"wyvern (prerequisite: 6th level)" : {
				name : "Wyvern (Prerequisite: 6th level)",
				source : ["MAH", 50],
				description : desc([
					"II can add my Wis mod to the attack/damage rolls of a single attack each round",
					"I can use this feature a # of times = # tattoos I have (max 5). Re-use: long rests"
				]),
			},
			"monkey (prerequisite: 6th level)" : {
				name : "Monkey (Prerequisite: 6th level)",
				source : ["MAH", 50],
				description : desc([
					"I have adv w/ Dex (acrobatics) checks."
				]),
			},
			"phoenix (prerequisite: 17th level)" : {
				name : "Phoenix (Prerequisite: 17th level)",
				source : ["MAH", 50],
				description : desc([
					"(reaction)-reduce any spell damage I take by half",
					"I can use this feature a # of times = # of tattoos I have (max 5). regain charges when you finish a long rest."
				]),
			},
			"spider (prerequisite: 17th level)" : {
				name : "Spider (Prerequisite: 17th level)",
				source : ["MAH", 50],
				description : desc([
					"(reaction) to being attacked w/a melee weapon, I can remove the attacker’s ability to add any modifiers to the attack roll",
					"I can use this feature a # of times = # of tattoos I have (max 5). I regain charges when I finish a long rest"
				]),
			},
			"scorpion (prerequisite: 11th level)" : {
				name : "Scorpion (Prerequisite: 11th level)",
				source : ["MAH", 50],
				description : desc([
					"Once/round, when I successfully hit w/unarmed attack, I can add an amount of poison damage to my strike = to # of tattoos I have (max 5)"
				]),
			},
			"tiger (prerequisite: 17th level)" : {
				name : "Tiger (Prerequisite: 17th level)",
				source : ["MAH", 50],
				description : desc([
					"I gain a +1 bonus on all unarmed attack rolls. Additionally, once every long rest, you can turn an unarmed hit into a critical hit"
				]),
			},
			"tortoise" : {
				name : "Tortoise",
				source : ["MAH", 50],
				description : desc([
					"I gain proficiency with two skills of your choice."
				]),
			},
			"pegasus (prerequisite: 17th level)" : {
				name : "Pegasus (Prerequisite: 17th level)",
				source : ["MAH", 50],
				description : desc([
					"Once on each of my turns, I can grant myself adv on a damage roll I make.",
					"I can use this feature a # of times = # of tattoos I have (max 5). I regain charges when I finish a long rest"
				]),
			},
			"wasp (prerequisite: 11th level)" : {
				name : "Wasp (Prerequisite: 11th level)",
				source : ["MAH", 50],
				description : desc([
					"When I use my flurry of blows feature, instead of making two strikes, I make a # of strikes = to the # of tattoos I have (max 5)",
					"Once I use this feature, I must finish a short or long rest before you can do so again"
				]),
			},
			"white mask (prerequisite: 6th level)" : {
				name : "White Mask (Prerequisite: 6th level)",
				source : ["MAH", 50],
				description : desc([
					"I'm imm to spells and effects that try to read my thoughts or discern whether I'm lying or not."
				]),
			},
		},
	},
});
AddSubClass("custommonk", "way of purity", {
	regExpSearch : /way of purity/i,
	subname : "Way of Purity",
	source : ["MAH", 51],
	features : {
		"subclassfeature3" : {
			name : "Wildshape",
			source : ["MAH", 51],
			minlevel : 3,
			description : desc([
				"(action)-assume shape of a beast or pseudodragon-cost 3 Ki-Must choose from:",
				"Cat, Constrictor Snake, Hawk, Mastiff, Owl, Poisonous Snake, Pseudodragon",
				"Revert to normal form earlier (bonus); Revert unless I spend another use of this feature",
				"I automatically revert if I fall unconscious, or drop to 0 hit points, or die"
			]),
			usages : [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
			recovery : "short rest",
			additional : ["", "1 hour", "1 hour", "2 hours", "2 hours", "3 hours", "3 hours", "4 hours", "4 hours", "5 hours", "5 hours", "6 hours", "6 hours", "7 hours", "7 hours", "8 hours", "8 hours", "9 hours", "9 hours", "10 hours"],
			action : ["action", " (start)"],
			eval : "AddAction('bonus action', 'Wild Shape (end)', 'CustomMonk');",
			removeeval : "RemoveAction('bonus action', 'Wild Shape (end)', 'CustomMonk');"
		},
		"subclassfeature6" : {
			name : "Purity of the Shin",
			source : ["MAH", 51],
			minlevel : 6,
			description : desc([
				"(2 Ki)-(action)-my body sheds bright light: 30 ft radius, and dim light: 30 feet",
				"Creatures in 10 ft of me, have disadv on attack rolls vs, me while light shines from me",
				"Lasts # min = Wis mod-ends early (bonus)/concentration broken/I fall unconscious/die"
				]),
			action : ["action", ""],
			eval : "AddAction('bonus action', 'Purity of the Shin (end)', 'CustomMonk');",
			removeeval : "RemoveAction('bonus action', 'Purity of the Shin (end)', 'CustomMonk');"
		},
		"subclassfeature11" : {
			name : "Purity of Mind",
			source : ["MAH", 51],
			minlevel : 11,
			description : desc([
				" Immune to magical effects that would stun or slow me, as well as magical sleep effects"
			]),
			savetxt : { text : ["immune to magical effects that would stun or slow me"], immune : ["magical sleep effects"] }
		},
		"subclassfeature17" : {
			name : "Muting Gaze",
			source : ["MAH", 51],
			minlevel : 17,
			description : desc([
				"Choose single creature in 30 ft of me I see/see me-must make Wis save-fail: silenced 1 min/2d10 psychic dmg; success: no dmg/not silenced/immune to Muting Gaze for 24 hr. repeat save at end of turn. End of turn-psychic damage inc by 1d10, if the effect persists"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Wis Mod\").value);",
			recovery : "long rest"
		},
	},
});
AddSubClass("custommonk", "way of righteous fury", {
	regExpSearch : /way of righteous fury/i,
	subname : "Way of Righteous Fury",
	source : ["MAH", 51],
	features : {
		"subclassfeature3" : {
			name : "Ki Frenzy",
			source : ["MAH", 51],
			minlevel : 3,
			description : desc([
				"Focus my Ki into a frenzy of berserk energy, (w/o armor/shield). While in Frenzy:",
				"I can’t cast spells or concentrate on them while in Ki frenzy",
				"I can spend 2 Ki-(bonus)-enter or Ki frenzy-lasts 1 min.-(bonus) to end",
				"Ends early if incapacitated/don armor or shield/haven’t attacked a hostile since last turn or taken damage since then",
				"• My walking speed increases by 10 feet",
				"• I have advantage on Dexterity checks and Dexterity saving throws",
				"• All physical damage I take, both magical/nonmagical, is reduced an amt = my Wis mod",
				"• I have adv on melee attack rolls using Dex, but attack rolls vs. me also have adv"
			]),
			usages : [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
			speed : {
				allModes : "+10"
			},
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Haste",
			source : ["MAH", 51],
			minlevel : 6,
			description : desc([
				"(action)-spend 4 Ki points to cast the haste spell on myself, w/o material components"
			]),
			action : ["action", " (4 ki points)"],
			spellcastingBonus : {
				name : "Haste",
				spells : ["haste"],
				selection : ["haste"],
				atwill : true
			},
		},
		"subclassfeature11" : {
			name : "Brutality",
			source : ["MAH", 51],
			minlevel : 11,
			description : desc([
				"If I roll a 1 on a martial arts die, I can reroll the die-must use the new roll, even if a 1"
			]),
		},
		"subclassfeature17" : {
			name : "Furious Blows",
			source : ["MAH", 51],
			minlevel : 17,
			description : desc([
				"while in my Ki frenzy, I deal 2 additional dmg w/ every successful melee attack."
			]),
		},
	},
});

//PALADIN OATHS:
AddSubClass("paladin", "oath of the stalwart defender", {
	regExpSearch : /oath of the stalwart defender/i,
	subname : "Oath of the Stalwart Defender",
	source : ["MAH", 52],
	spellcastingExtra : ["alarm", "longstrider", "arcane lock", "warding bond", "beacon of hope", "counterspell", "freedom of movement", "stoneskin", "greater restoration", "hold monster"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Sacred Defense",
			source : ["MAH", 52],
			minlevel : 3,
			description : desc([
				"(action)-radiant energies infuse me/all willing creatures in 30 feet of me",
				"Affected creatures can Dodge-(bonus)-while the effect persists"
			]),
			usages : "Charisma modifier per",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Cha Mod\").value);",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Sacred Watch",
			source : ["MAH", 52],
			minlevel : 3,
			description : desc([
				"(bonus)-1 min, all traps/hidden doors/invisible-hidden creatures in 60 ft of me radiate subtle white glow-I know their exact nature/location. The glow is visible only to me The effect ends if my concentration is broken"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature3.2" : {
			name : "Bonded Weapon",
			source : ["MAH", 52],
			minlevel : 3,
			description : desc([
				"Bond w/1 slashing wpn-meditating for 8 hrs+1 hr a day/can't disarm/summon (bonus)"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Stalwart Deflection",
			source : ["MAH", 52],
			minlevel : 7,
			description : desc([
				"W/a melee weapon in two hands-if ally in 5 ft of me is hit by a melee attack",
				"(reaction)-ally’s AC inc. an amt = my prof bonus, potentially making the attack miss"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Peak Physicality",
			source : ["MAH", 52],
			minlevel : 15,
			description : desc([
				"I gain adv on Strength and Constitution saving throws"
			]),
		},
		"subclassfeature20" : {
			name : "Stalwart Champion",
			source : ["MAH", 52],
			minlevel : 20,
			description : desc([
				"(action)-one w/the Crawdad-# of rounds = my Cha mod, gaining the following benefits:",
				"• My AC inc. an amt = my prof bonus                  • I can use two reactions every round",
				"• I can't be pushed/knocked prone against my will  • Concentration can't be broken"
			]),
			recovery : "long rest",
			action : ["action", ""]
		}
	}
});

//RANGER CONCLAVES:
AddSubClass("ranger", "ishi ranger", {
	regExpSearch : /ishi ranger/i,
	subname : "Ishi Ranger",
	fullname : "Ishi Ranger",
	source : ["MAH", 52],
	features : {
		"subclassfeature3" : {
			name : "Ranger's Companion",
			source : ["MAH", 52],
			minlevel : 3,
			description : desc([
				"I can add my Wis mod (min 1) to an attack roll using a weapon; 1/short rest",
				"If the attack connects, it deals additional dmg = my ranger level"
			]),
			usages : ["", "", "+3 dmg", "+4 dmg", "+5 dmg", "+6 dmg", "+7 dmg", "+8 dmg", "+9 dmg", "+10 dmg", "+11 dmg", "+12 dmg", "+13 dmg", "+14 dmg", "+15 dmg", "+16 dmg", "+17 dmg", "+18 dmg", "+19 dmg", "+20 dmg"],
			recovery : "short rest"
		},
		"subclassfeature3.1" : {
			name : "Ishi Influence",
			source : ["MAH", 52],
			minlevel : 3,
			description : desc([
				"I gain advantage on Charisma (persuasion) checks"
			]),
		},
		"subclassfeature7" : {
			name : "Superior Battle Tactics",
			source : ["MAH", 52],
			minlevel : 7,
			description : desc([
				" (action)-I allow a willing creature in 30 ft of me, I see/sees me-(reaction)-makes a single attack, or move up to their speed w/o provoking attacks of opportunity; 1/short rest"
			]),
			action : ["action", ""],
			recovery : "short rest"
		},
		"subclassfeature11" : {
			name : "Inspire Greatness",
			source : ["MAH", 52],
			minlevel : 11,
			description : desc([
				"(action)-grant up to five willing creatures in 30 ft of me I see/hear me-temp hp = my Wis mod + 1/2 my  ranger level; until start of my next turn, all affected creatures can also add my Wis mod (min 1) to their attack rolls/saving throws; 1/long rest"
			]),
			action : ["action", ""],
			recovery : "long rest"
		},
		"subclassfeature15" : {
			name : "Favored Battlefield",
			source : ["MAH", 52],
			minlevel : 15,
			description : desc([
				" Fighting in my favored terrain, me/all allies in 10 ft of me-gain +1 to attack rolls and adv on Dex saving throws; If I'm blinded/charmed/deafened/frightened/unconscious, I don’t gain this benefit"
			]),
		},
	},
});
AddSubClass("ranger", "niten master ranger", {
	regExpSearch : /niten master ranger/i,
	subname : "Niten Master Ranger",
	fullname : "Niten Master Ranger",
	source : ["MAH", 52],
	abilitySave : 5,
	features : {
		"subclassfeature3" : {
			name : "Bonded Weapon",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"Bond w/1 slashing wpn-meditating for 8 hrs+1 hr a day/can't disarm/summon (bonus)"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Niten Technique",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"Attack action-attack w/melee weapon I'm holding in one hand-(bonus)-attack w/light melee weapon I'm holding in other hand-1 wpn must be bonded weapon-only 1 light"
			]),
		},
		"subclassfeature3.2" : {
			name : "Niten Maneuvers",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"I satisfy somatic/material comp's of ranger spells wielding a weapon in each hand",
				"Legacy/shadow List-# learned inc as I gain levels; Each learned counts towards max # spells known; Use the \"Choose Features\" button above to add a Maneuver to the third page",
				"Instead of Ki, I spend spell slots to power my maneuvers-spell slot level = Ki cost"
			]),
			additional : ["", "", "1 known", "1 known", "2 known", "2 known", "3 known", "3 known", "4 known", "4 known", "4 known", "4 known", "5 known", "5 known", "5 known", "5 known", "6 known", "6 known", "6 known", "6 known"],
			extraname : "Maneuver",
			extrachoices : ["Mind over Body (Legacy Maneuvers)", "Rejuvenation (Legacy Maneuvers)", "Quick-Strike (Legacy Maneuvers)", "Dazing Blow (Shadow Maneuvers)", "Cresent Sweep (Shadow Maneuvers)", "Heel Cut (Shadow Maneuvers)", "Ki Shuriken (Shadow Maneuvers)", "Serpent’s Reach (Shadow Maneuvers)", "Shadow Skin (Shadow Maneuvers)"],
			"mind over body (legacy maneuvers)" : {
				name : "Mind over Body (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc( [
					"[2nd lv slot]",
					"I can reroll a failed Strength, Dexterity, or Constitution saving throw"
				]),
			},
			"rejuvenation (legacy maneuvers)" : {
				name : "Rejuvenation (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1st lv slot]",
					"As an action, I can heal myself for 1 hit die + my Con mod for every 1 Ki used",						"I expend any hit dice I use"
				]),
				action : ["action", ""]
			},
			"quick-strike (legacy maneuvers)" : {
				name : "Quick-Strike (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1st lv slot]",
					"When you disengage, you may spend a bonus action to make a single weapon attack with your bonded weapon."
				]),
				action : ["bonus action", ""]
			},
			"dazing blow (shadow maneuvers)" : {
				name : "Dazing Blow (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[2nd lv slot]",
					"When I ht a Large/smaller creature with a melee weapon attack, I can try to daze it",
					"Target must succeed a Con save, Fail; can't make OA's until the start of my next turn"
				]),
			},
			"cresent sweep (shadow maneuvers)" : {
				name : "Cresent Sweep (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[4th lv slot]",
					"As an action, I can empower one attack to hit all enemies within 5 feet of me"
				]),
				action : ["action", ""]
			},
			"heel cut (shadow maneuvers)" : {
				name : "Heel Cut (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[2nd lv slot]",
					"When I hit a Large or smaller creature with a melee weapon attack, I can try to cripple it",
					"It must succeed a Dex save, or have it’s walking speed halved until the end of my next turn"
				]),
			},
			"ki shuriken (shadow maneuvers)" : {
				name : "Ki Shuriken (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[4th lv slot]",
					"Energy shoots from my bonded weapon in a 5 ft by 30 ft line",
					"All in the line must make a Dex saving throw with DC 8 + Cha modifier + prof bonus",
					"It does force damage equal to your kensai level + your Charisma modifier",
					"Half as much damage on a successful save"
				]),
			},
			"serpent’s reach (shadow maneuvers)" : {
				name : "Serpent’s Reach (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1st lv slot]",
					"I can increase the reach of one of my melee attack's by 5 ft"
				]),
			},
			"shadow skin (shadow maneuvers)" : {
				name : "Shadow Skin (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[3rd lv slot]",
					"I can use my reaction to force an attacker to miss me, if he would have hit"
				]),
				action : ["reaction", " (I'm hit with an attack)"]
			},
		},
		"subclassfeature7" : {
			name : "Niten Parry",
			source : ["MAH", 53],
			minlevel : 7,
			description : desc([
				"My AC increases by 1 as long as Im wielding a melee weapon in each hand"
			]),
			eval : "AddACMisc(1, 'Niten Parry (if 2 weapons)', 'When wielding a melee weapon in each hand, the Niten Parry feature gives a +1 bonus to AC', 'ACshield');",
			removeeval : "AddACMisc(0, 'Niten Parry (if 2 weapons)', 'When wielding a melee weapon in each hand, the Niten Parry feature gives a +1 bonus to AC');"
		},
		"subclassfeature11" : {
			name : "Niten Speed",
			source : ["MAH", 53],
			minlevel : 11,
			description : desc([
				"My speed increases by 10 as long as I'm wielding a melee weapon in each hand"
			]),
			speed : {
				allModes : "+10"
			},
		},
		"subclassfeature15" : {
			name : "Niten Mastery",
			source : ["MAH", 53],
			minlevel : 15,
			description : desc([
				"Attack action-attack w/melee wpn in one hand-(bonus)-attack twice w/melee weapon I'm holding in the other hand-One wpn must be my bonded wpn"
			]),
		},
	},
});

//ROGUE:
AddSubClass("rogue", "shadow spy", {
	regExpSearch : /shadow spy/i,
	subname : "Shadow Spy",
	fullname : "Shadow Spy",
	source : ["MAH", 53],
	abilitySave : 2,
	features : {
		"subclassfeature3" : {
			name : "Wind Runner",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"Gain a fly speed of 10 ft. This works only in short bursts; fall if turn ends in the air and nothing else is holding you aloft; My fly speed increases as I gain levels in this class"
			]),
			additional : levels.map(function (n) {
					if (n < 3) return "";
					if (n < 6) return "+10 ft";
					if (n < 9) return "+20 ft";
					if (n < 13) return "+30 ft";
					if (n < 17) return "+40 ft";
					return "+50 ft";
				}),
				changeeval : "var rogueSpd = function(n) {return '+' + (n < 3 ? 0 : n < 6 ? 10 : n < 9 ? 20 : n < 13 ? 30 : n < 17 ? 40 : 50);}(classes.known.rogue.level); SetProf('speed', rogueSpd !== '+0', {fly : rogueSpd}, profDisplNm);"
		},
		"subclassfeature3.1" : {
			name : "A Thousand Faces",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"I gain the ability to cast alter self at will, without expending a spell slot"
			]),
			spellcastingBonus : {
				name : "A Thousand Faces",
				spells : ["alter self"],
				selection : ["alter self"],
				atwill : true
			},
		},
		"subclassfeature9" : {
			name : "Master Deceiver",
			source : ["MAH", 53],
			minlevel : 9,
			description : desc([
				"Fail to deceive a creature w/Cha (deception) check, I can re-roll w/adv; 1/short rest"
			]),
			recovery : "short rest"
		},
		"subclassfeature13" : {
			name : "Eavesdrop",
			source : ["MAH", 53],
			minlevel : 13,
			description : desc([
				"When you place my hand against a solid surface",
				"(action)-I can hear w/perfect clarity as if I stood on the other side of the surface I touch",
				"I can eavesdrop through most barriers in this manner, but I'm blocked by 6 ft of stone, 3 in of common metal, a thin sheet of lead, or 12 ft of wood or dirt"
			]),
			action : ["action", " (touch surface)"]
		},
		"subclassfeature17" : {
			name : "Mind Mapping",
			source : ["MAH", 53],
			minlevel : 17,
			description : desc([
				"When I place my hand against a solid surface",
				"(action)-I map the layout/creatures not hidden on the other side of the surface I touch",
				"I map an area as either a 60 ft cone or a 30 ft half-circle. I can mind map through most barriers in this manner, but I'm blocked by 6 ft of stone, 3 in of common metal, a thin sheet of lead, or 12 ft of wood or dirt"
			]),
			action : ["action", " (touch)"]
		}
	}
});
AddSubClass("rogue", "skirmisher", {
	regExpSearch : /skirmisher/i,
	subname : "Skirmisher",
	fullname : "Skirmisher",
	source : ["MAH", 53],
	abilitySave : 2,
	features : {
		"subclassfeature3" : {
			name : "Archery",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"I gain a +2 bonus to attack rolls you make with ranged weapons"
			]),
			calcChanges : {
				atkCalc : ["if (isRangedWeapon) {output.extraHit += 2; }; ", "My ranged weapons get a +2 bonus on the To Hit."]
			},
		},
		"subclassfeature3.1" : {
			name : "Skirmish Attack",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"1/turn, instead of sneak attack, I can make a skirmish attack-move at least half my speed before making the attack-deals dmg = Sneak Attack dmg"
			]),
			additional : ["", "", "+2d6", "+2d6", "+3d6", "+3d6", "+4d6", "+4d6", "5d6", "+5d6", "+6d6", "+6d6", "+7d6", "+7d6", "+8d6", "+8d6", "+9d6", "+9d6", "+10d6", "+10d6"]
		},
		"subclassfeature9" : {
			name : "Master Deceiver",
			source : ["MAH", 53],
			minlevel : 9,
			description : desc([
				"Speed inc 10 feet while not wearing heavy armor-difficult terrain doesn’t hinder me",
				" I remain alert to danger while traveling, (even if foraging, navigating, or tracking)"
			]),
			speed : {
				allModes : "+10"
			},
		},
		"subclassfeature13" : {
			name : "Skirmisher’s Stealth",
			source : ["MAH", 53],
			minlevel : 13,
			description : desc([
				"At the start of my turn, pick a creature I'm hidden from",
				"I remain hidden from that creature during my turn, regardless of my actions or the actions of other creatures. If I don’t make a Dex (stealth) check before the end of my turn, my skirmisher’s stealth ends"
			]),
		},
		"subclassfeature17" : {
			name : "Ambuscade",
			source : ["MAH", 53],
			minlevel : 17,
			description : desc([
				"When I roll initiative, I gain a special turn that takes place before other creatures can act",
				"On this turn, I can use my action to take either the Attack or Hide action",
				"If more than one creature in an encounter has this feature, they all act first in order of initiative, then the regular initiative order begins",
				"If I would normally be surprised at the start of an encounter, I'm not surprised but you do not gain this extra turn"
			]),
		},
	},
});

//PALADIN OATHS:
AddSubClass("paladin", "oath of the stalwart defender", {
	regExpSearch : /oath of the stalwart defender/i,
	subname : "Oath of the Stalwart Defender",
	source : ["MAH", 52],
	spellcastingExtra : ["alarm", "longstrider", "arcane lock", "warding bond", "beacon of hope", "counterspell", "freedom of movement", "stoneskin", "greater restoration", "hold monster"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Sacred Defense",
			source : ["MAH", 52],
			minlevel : 3,
			description : desc([
				"(action)-radiant energies infuse me/all willing creatures in 30 feet of me",
				"Affected creatures can Dodge-(bonus)-while the effect persists"
			]),
			usages : "Charisma modifier per",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Cha Mod\").value);",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Sacred Watch",
			source : ["MAH", 52],
			minlevel : 3,
			description : desc([
				"(bonus)-1 min, all traps/hidden doors/invisible-hidden creatures in 60 ft of me radiate subtle white glow-I know their exact nature/location. The glow is visible only to me The effect ends if my concentration is broken"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature3.2" : {
			name : "Bonded Weapon",
			source : ["MAH", 52],
			minlevel : 3,
			description : desc([
				"Bond w/1 slashing wpn-meditating for 8 hrs+1 hr a day/can't disarm/summon (bonus)"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Stalwart Deflection",
			source : ["MAH", 52],
			minlevel : 7,
			description : desc([
				"W/a melee weapon in two hands-if ally in 5 ft of me is hit by a melee attack",
				"(reaction)-ally’s AC inc. an amt = my prof bonus, potentially making the attack miss"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Peak Physicality",
			source : ["MAH", 52],
			minlevel : 15,
			description : desc([
				"I gain adv on Strength and Constitution saving throws"
			]),
		},
		"subclassfeature20" : {
			name : "Stalwart Champion",
			source : ["MAH", 52],
			minlevel : 20,
			description : desc([
				"(action)-one w/the Crawdad-# of rounds = my Cha mod, gaining the following benefits:",
				"• My AC inc. an amt = my prof bonus                  • I can use two reactions every round",
				"• I can't be pushed/knocked prone against my will  • Concentration can't be broken"
			]),
			recovery : "long rest",
			action : ["action", ""]
		}
	}
});

//RANGER CONCLAVES:
AddSubClass("ranger", "ishi ranger", {
	regExpSearch : /ishi ranger/i,
	subname : "Ishi Ranger",
	fullname : "Ishi Ranger",
	source : ["MAH", 52],
	features : {
		"subclassfeature3" : {
			name : "Ranger's Companion",
			source : ["MAH", 52],
			minlevel : 3,
			description : desc([
				"I can add my Wis mod (min 1) to an attack roll using a weapon; 1/short rest",
				"If the attack connects, it deals additional dmg = my ranger level"
			]),
			usages : ["", "", "+3 dmg", "+4 dmg", "+5 dmg", "+6 dmg", "+7 dmg", "+8 dmg", "+9 dmg", "+10 dmg", "+11 dmg", "+12 dmg", "+13 dmg", "+14 dmg", "+15 dmg", "+16 dmg", "+17 dmg", "+18 dmg", "+19 dmg", "+20 dmg"],
			recovery : "short rest"
		},
		"subclassfeature3.1" : {
			name : "Ishi Influence",
			source : ["MAH", 52],
			minlevel : 3,
			description : desc([
				"I gain advantage on Charisma (persuasion) checks"
			]),
		},
		"subclassfeature7" : {
			name : "Superior Battle Tactics",
			source : ["MAH", 52],
			minlevel : 7,
			description : desc([
				" (action)-I allow a willing creature in 30 ft of me, I see/sees me-(reaction)-makes a single attack, or move up to their speed w/o provoking attacks of opportunity; 1/short rest"
			]),
			action : ["action", ""],
			recovery : "short rest"
		},
		"subclassfeature11" : {
			name : "Inspire Greatness",
			source : ["MAH", 52],
			minlevel : 11,
			description : desc([
				"(action)-grant up to five willing creatures in 30 ft of me I see/hear me-temp hp = my Wis mod + 1/2 my  ranger level; until start of my next turn, all affected creatures can also add my Wis mod (min 1) to their attack rolls/saving throws; 1/long rest"
			]),
			action : ["action", ""],
			recovery : "long rest"
		},
		"subclassfeature15" : {
			name : "Favored Battlefield",
			source : ["MAH", 52],
			minlevel : 15,
			description : desc([
				" Fighting in my favored terrain, me/all allies in 10 ft of me-gain +1 to attack rolls and adv on Dex saving throws; If I'm blinded/charmed/deafened/frightened/unconscious, I don’t gain this benefit"
			]),
		},
	},
});
AddSubClass("ranger", "niten master ranger", {
	regExpSearch : /niten master ranger/i,
	subname : "Niten Master Ranger",
	fullname : "Niten Master Ranger",
	source : ["MAH", 52],
	abilitySave : 5,
	features : {
		"subclassfeature3" : {
			name : "Bonded Weapon",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"Bond w/1 slashing wpn-meditating for 8 hrs+1 hr a day/can't disarm/summon (bonus)"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Niten Technique",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"Attack action-attack w/melee weapon I'm holding in one hand-(bonus)-attack w/light melee weapon I'm holding in other hand-1 wpn must be bonded weapon-only 1 light"
			]),
		},
		"subclassfeature3.2" : {
			name : "Niten Maneuvers",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"I satisfy somatic/material comp's of ranger spells wielding a weapon in each hand",
				"Legacy/shadow List-# learned inc as I gain levels; Each learned counts towards max # spells known; Use the \"Choose Features\" button above to add a Maneuver to the third page",
				"Instead of Ki, I spend spell slots to power my maneuvers-spell slot level = Ki cost"
			]),
			additional : ["", "", "1 known", "1 known", "2 known", "2 known", "3 known", "3 known", "4 known", "4 known", "4 known", "4 known", "5 known", "5 known", "5 known", "5 known", "6 known", "6 known", "6 known", "6 known"],
			extraname : "Maneuver",
			extrachoices : ["Mind over Body (Legacy Maneuvers)", "Rejuvenation (Legacy Maneuvers)", "Quick-Strike (Legacy Maneuvers)", "Dazing Blow (Shadow Maneuvers)", "Cresent Sweep (Shadow Maneuvers)", "Heel Cut (Shadow Maneuvers)", "Ki Shuriken (Shadow Maneuvers)", "Serpent’s Reach (Shadow Maneuvers)", "Shadow Skin (Shadow Maneuvers)"],
			"mind over body (legacy maneuvers)" : {
				name : "Mind over Body (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc( [
					"[2nd lv slot]",
					"I can reroll a failed Strength, Dexterity, or Constitution saving throw"
				]),
			},
			"rejuvenation (legacy maneuvers)" : {
				name : "Rejuvenation (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1st lv slot]",
					"As an action, I can heal myself for 1 hit die + my Con mod for every 1 Ki used",						"I expend any hit dice I use"
				]),
				action : ["action", ""]
			},
			"quick-strike (legacy maneuvers)" : {
				name : "Quick-Strike (Legacy Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1st lv slot]",
					"When you disengage, you may spend a bonus action to make a single weapon attack with your bonded weapon."
				]),
				action : ["bonus action", ""]
			},
			"dazing blow (shadow maneuvers)" : {
				name : "Dazing Blow (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[2nd lv slot]",
					"When I ht a Large/smaller creature with a melee weapon attack, I can try to daze it",
					"Target must succeed a Con save, Fail; can't make OA's until the start of my next turn"
				]),
			},
			"cresent sweep (shadow maneuvers)" : {
				name : "Cresent Sweep (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[4th lv slot]",
					"As an action, I can empower one attack to hit all enemies within 5 feet of me"
				]),
				action : ["action", ""]
			},
			"heel cut (shadow maneuvers)" : {
				name : "Heel Cut (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[2nd lv slot]",
					"When I hit a Large or smaller creature with a melee weapon attack, I can try to cripple it",
					"It must succeed a Dex save, or have it’s walking speed halved until the end of my next turn"
				]),
			},
			"ki shuriken (shadow maneuvers)" : {
				name : "Ki Shuriken (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[4th lv slot]",
					"Energy shoots from my bonded weapon in a 5 ft by 30 ft line",
					"All in the line must make a Dex saving throw with DC 8 + Cha modifier + prof bonus",
					"It does force damage equal to your kensai level + your Charisma modifier",
					"Half as much damage on a successful save"
				]),
			},
			"serpent’s reach (shadow maneuvers)" : {
				name : "Serpent’s Reach (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[1st lv slot]",
					"I can increase the reach of one of my melee attack's by 5 ft"
				]),
			},
			"shadow skin (shadow maneuvers)" : {
				name : "Shadow Skin (Shadow Maneuvers)",
				source : ["MAH", 49],
				description : desc([
					"[3rd lv slot]",
					"I can use my reaction to force an attacker to miss me, if he would have hit"
				]),
				action : ["reaction", " (I'm hit with an attack)"]
			},
		},
		"subclassfeature7" : {
			name : "Niten Parry",
			source : ["MAH", 53],
			minlevel : 7,
			description : desc([
				"My AC increases by 1 as long as Im wielding a melee weapon in each hand"
			]),
			eval : "AddACMisc(1, 'Niten Parry (if 2 weapons)', 'When wielding a melee weapon in each hand, the Niten Parry feature gives a +1 bonus to AC', 'ACshield');",
			removeeval : "AddACMisc(0, 'Niten Parry (if 2 weapons)', 'When wielding a melee weapon in each hand, the Niten Parry feature gives a +1 bonus to AC');"
		},
		"subclassfeature11" : {
			name : "Niten Speed",
			source : ["MAH", 53],
			minlevel : 11,
			description : desc([
				"My speed increases by 10 as long as I'm wielding a melee weapon in each hand"
			]),
			speed : {
				allModes : "+10"
			},
		},
		"subclassfeature15" : {
			name : "Niten Mastery",
			source : ["MAH", 53],
			minlevel : 15,
			description : desc([
				"Attack action-attack w/melee wpn in one hand-(bonus)-attack twice w/melee weapon I'm holding in the other hand-One wpn must be my bonded wpn"
			]),
		},
	},
});

//ROGUE:
AddSubClass("rogue", "shadow spy", {
	regExpSearch : /shadow spy/i,
	subname : "Shadow Spy",
	fullname : "Shadow Spy",
	source : ["MAH", 53],
	abilitySave : 2,
	features : {
		"subclassfeature3" : {
			name : "Wind Runner",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"Gain a fly speed of 10 ft. This works only in short bursts; fall if turn ends in the air and nothing else is holding you aloft; My fly speed increases as I gain levels in this class"
			]),
			additional : levels.map(function (n) {
					if (n < 3) return "";
					if (n < 6) return "+10 ft";
					if (n < 9) return "+20 ft";
					if (n < 13) return "+30 ft";
					if (n < 17) return "+40 ft";
					return "+50 ft";
				}),
				changeeval : "var rogueSpd = function(n) {return '+' + (n < 3 ? 0 : n < 6 ? 10 : n < 9 ? 20 : n < 13 ? 30 : n < 17 ? 40 : 50);}(classes.known.rogue.level); SetProf('speed', rogueSpd !== '+0', {fly : rogueSpd}, profDisplNm);"
		},
		"subclassfeature3.1" : {
			name : "A Thousand Faces",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"I gain the ability to cast alter self at will, without expending a spell slot"
			]),
			spellcastingBonus : {
				name : "A Thousand Faces",
				spells : ["alter self"],
				selection : ["alter self"],
				atwill : true
			},
		},
		"subclassfeature9" : {
			name : "Master Deceiver",
			source : ["MAH", 53],
			minlevel : 9,
			description : desc([
				"Fail to deceive a creature w/Cha (deception) check, I can re-roll w/adv; 1/short rest"
			]),
			recovery : "short rest"
		},
		"subclassfeature13" : {
			name : "Eavesdrop",
			source : ["MAH", 53],
			minlevel : 13,
			description : desc([
				"When you place my hand against a solid surface",
				"(action)-I can hear w/perfect clarity as if I stood on the other side of the surface I touch",
				"I can eavesdrop through most barriers in this manner, but I'm blocked by 6 ft of stone, 3 in of common metal, a thin sheet of lead, or 12 ft of wood or dirt"
			]),
			action : ["action", " (touch surface)"]
		},
		"subclassfeature17" : {
			name : "Mind Mapping",
			source : ["MAH", 53],
			minlevel : 17,
			description : desc([
				"When I place my hand against a solid surface",
				"(action)-I map the layout/creatures not hidden on the other side of the surface I touch",
				"I map an area as either a 60 ft cone or a 30 ft half-circle. I can mind map through most barriers in this manner, but I'm blocked by 6 ft of stone, 3 in of common metal, a thin sheet of lead, or 12 ft of wood or dirt"
			]),
			action : ["action", " (touch)"]
		}
	}
});
AddSubClass("rogue", "skirmisher", {
	regExpSearch : /skirmisher/i,
	subname : "Skirmisher",
	fullname : "Skirmisher",
	source : ["MAH", 53],
	abilitySave : 2,
	features : {
		"subclassfeature3" : {
			name : "Archery",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"I gain a +2 bonus to attack rolls you make with ranged weapons"
			]),
			calcChanges : {
				atkCalc : ["if (isRangedWeapon) {output.extraHit += 2; }; ", "My ranged weapons get a +2 bonus on the To Hit."]
			},
		},
		"subclassfeature3.1" : {
			name : "Skirmish Attack",
			source : ["MAH", 53],
			minlevel : 3,
			description : desc([
				"1/turn, instead of sneak attack, I can make a skirmish attack-move at least half my speed before making the attack-deals dmg = Sneak Attack dmg"
			]),
			additional : ["", "", "+2d6", "+2d6", "+3d6", "+3d6", "+4d6", "+4d6", "5d6", "+5d6", "+6d6", "+6d6", "+7d6", "+7d6", "+8d6", "+8d6", "+9d6", "+9d6", "+10d6", "+10d6"]
		},
		"subclassfeature9" : {
			name : "Master Deceiver",
			source : ["MAH", 53],
			minlevel : 9,
			description : desc([
				"Speed inc 10 feet while not wearing heavy armor-difficult terrain doesn’t hinder me",
				" I remain alert to danger while traveling, (even if foraging, navigating, or tracking)"
			]),
			speed : {
				allModes : "+10"
			},
		},
		"subclassfeature13" : {
			name : "Skirmisher’s Stealth",
			source : ["MAH", 53],
			minlevel : 13,
			description : desc([
				"At the start of my turn, pick a creature I'm hidden from",
				"I remain hidden from that creature during my turn, regardless of my actions or the actions of other creatures. If I don’t make a Dex (stealth) check before the end of my turn, my skirmisher’s stealth ends"
			]),
		},
		"subclassfeature17" : {
			name : "Ambuscade",
			source : ["MAH", 53],
			minlevel : 17,
			description : desc([
				"When I roll initiative, I gain a special turn that takes place before other creatures can act",
				"On this turn, I can use my action to take either the Attack or Hide action",
				"If more than one creature in an encounter has this feature, they all act first in order of initiative, then the regular initiative order begins",
				"If I would normally be surprised at the start of an encounter, I'm not surprised but you do not gain this extra turn"
			]),
		},
	},
});

//SHOGUN Strategic Discipline
AddSubClass("shogun", "crawdad", {
	regExpSearch : /crawdad/i,
	subname : "Crawdad",
	source : ["MAH", 55],
	abilitySave : 6,
	spellcastingAbility : 6,
	features : {
		"subclassfeature3" : {
			name : "Armored Companion",
			source : ["MAH", 55],
			minlevel : 3,
			description : desc([
				"My watchful companion’s AC equals my AC"
			]),
		},
		"subclassfeature3.1" : {
			name : "Decree of Iron",
			source : ["MAH", 55],
			minlevel : 3,
			description : desc([
				"My ancestral decree feature grants additional temp hp's = my Cha mod"
			]),
		},
		"subclassfeature7" : {
			name : "War Historian",
			source : ["MAH", 55],
			minlevel : 7,
			description : desc([
				"Int (history)/Wis (insight) checks-war/strategy/army movement-add my prof bonus"
			]),
		},
		"subclassfeature10" : {
			name : "Ever Watchful",
			source : ["MAH", 55],
			minlevel : 10,
			description : desc([
				"Ignore Overwatch' distance requirement-if my companion can see me/overwatched ally",
				"I can now ward any # of allied creatures w/my overwatch-paralyzed/stunned doesn’t end the effect-instead suspends it til I'm no longer paralyzed/stunned"
			]),
		},
		"subclassfeature15" : {
			name : "Beacon of Heroism",
			source : ["MAH", 55],
			minlevel : 15,
			description : desc([
				"W/beacon-creature can reroll failed save, taking the higher of the two rolls, and then adds my command die to the roll"
			]),
		},
		"subclassfeature18" : {
			name : "Harassment",
			source : ["MAH", 55],
			minlevel : 18,
			description : desc([
				"(Bonus)-spend command die-I command companion to harass a foe in 30 ft of me that companion/I can see; die tells how many rounds the harassment lasts",
				"Companion now harasseses target by flying around it/screeching/clawing at it-target: disadv on all attack rolls; Companion occupies same space as target while harassing",
				"Companion can only be attacked by harassed creature"
			]),
			action : ["bonus action", ""]
		},
	},
});
AddSubClass("shogun", "heron", {
	regExpSearch : /heron/i,
	subname : "Heron",
	source : ["MAH", 55],
	abilitySave : 6,
	spellcastingAbility : 6,
	features : {
		"subclassfeature3" : {
			name : "Decree of Swiftness",
			source : ["MAH", 55],
			minlevel : 3,
			description : desc([
				"My ancestral decree grants +10 walking speed, if creature has temp hp remaining"
			]),
		},
		"subclassfeature3.1" : {
			name : "Hasty Companion",
			source : ["MAH", 55],
			minlevel : 3,
			description : desc([
				"My watchful companion’s speed is doubled, and doesn’t provoke OA.s"
			]),
		},
		"subclassfeature7" : {
			name : "Unexhausted",
			source : ["MAH", 55],
			minlevel : 7,
			description : desc([
				"I have adv on Con saves vs. effects that would exhaust me"
			]),
			savetxt : { text : ["Adv. on Con saves vs. exhaustion"] },
		},
		"subclassfeature10" : {
			name : "Flight or Fright",
			source : ["MAH", 55],
			minlevel : 10,
			description : desc([
				"Expending a command die when I take the Attack action, I add the command die to my attack’s damage roll, and allow all allies in 30 ft of me who are not frightened to use their reaction to move up to their speed without provoking opportunity attacks"
			]),
		},
		"subclassfeature15" : {
			name : "Wings of the Heron",
			source : ["MAH", 55],
			minlevel : 15,
			description : desc([
				"I gain  a flying speed = my current walking speed",
				"This benefit works only in short bursts; I fall if I end my turn in the air and nothing else is holding me aloft. Additionally, other creatures have disadv on OA's vs. me"
			]),
		},
		"subclassfeature18" : {
			name : "Unhindered Herd",
			source : ["MAH", 55],
			minlevel : 18,
			description : desc([
				"(I become permanently affected by the freedom of movement spell",
				"(Action)-expend a command die-I can cast freedom of movement on a willing creature in range without expending a spell slot or material components. The spell lasts # rounds =  the command die + my Cha mod"
			]),
			action : ["action", ""]
		},
	},
});
AddSubClass("shogun", "pegasus", {
	regExpSearch : /pegasus/i,
	subname : "Pegasus",
	source : ["MAH", 56],
	abilitySave : 6,
	spellcastingAbility : 6,
	features : {
		"subclassfeature3" : {
			name : "Decree of Swiftness",
			source : ["MAH", 56],
			minlevel : 3,
			description : desc([
				"Creature affected by ancestral decree adds my Cha mod to its initiative roll"
			]),
		},
		"subclassfeature3.1" : {
			name : "Steed Companion",
			source : ["MAH", 56],
			minlevel : 3,
			description : desc([
				"My watchful companion is replaced by an ancient pegasus",
				"My watchful companion is replaced by an ancient pegasus/unicorn",
				"Learn find steed spell-cast w/o a spell slot-always a pegasus or unicorn",
				"BUT Neither can attack, cast spells, or take legendary actions, and the pegasus only has a 30 ft fly speed; can only interact physically w/me, and only one steed at a time-don’t need to bond with either steed, and it doesn’t require food or water"
			]),
			spellcastingBonus : {
				name : "Steed Companion)",
				spells : ["find steed"],
				selection : ["find steed"],
				atwill : true
			},
		},
		"subclassfeature7" : {
			name : "Animal Whisperer",
			source : ["MAH", 56],
			minlevel : 7,
			description : desc([
				"I can use Charisma instead of Wisdom for Wisdom(animal handling) checks."
			]),
		},
		"subclassfeature10" : {
			name : "Spirit Rider",
			source : ["MAH", 56],
			minlevel : 10,
			description : desc([
				"(action)-While mounted on my steed, I can command it to use it’s attack or multiattack feature. Additionally, the flying speed of my pegasus increases to 60 feet."
			]),
			action : ["action", ""]
		},
		"subclassfeature15" : {
			name : "Steed Ally",
			source : ["MAH", 56],
			minlevel : 15,
			description : desc([
				"(action)-pegasus companion fly speed inc. to 90 ft/can command it to use either its healing touch, teleport, or shimmering shield ability, or cast one of it’s spells"
			]),
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Cha Mod\").value);",
			recovery : "long rest",
			action : ["action", ""]
		},
		"subclassfeature18" : {
			name : "Unhindered Herd",
			source : ["MAH", 56],
			minlevel : 18,
			description : desc([
				"If my pegasus/unicorn companion would take damage, I can choose to take all or a portion of the damage instead. This damage can’t be reduced or prevented in any way"
			]),
		},
	},
});
AddSubClass("shogun", "phoenix", {
	regExpSearch : /phoenix/i,
	subname : "Phoenix",
	source : ["MAH", 56],
	abilitySave : 6,
	spellcastingAbility : 6,
	features : {
		"subclassfeature3" : {
			name : "Decree of the Mystic",
			source : ["MAH", 56],
			minlevel : 3,
			description : desc([
				"Creature affected by ancestral decree adds d4 to dmg rolls of spell attacks-target one target, as long as the creature has temp hp remaining"
			]),
		},
		"subclassfeature3.1" : {
			name : "Phoenix Companion",
			source : ["MAH", 56],
			minlevel : 3,
			description : desc([
				"My watchful companion transforms into a lesser phoenix-doesn’t need food/water-if it dies I resummon it (action)-appears in a spot I choose in 10 ft of me"
			]),
		},
		"subclassfeature7" : {
			name : "Burning Vitality",
			source : ["MAH", 56],
			minlevel : 7,
			description : desc([
				"I no longer require food or water."
			]),
		},
		"subclassfeature10" : {
			name : "Beacon of Hope",
			source : ["MAH", 56],
			minlevel : 10,
			description : desc([
				" If creature still fails it’s saving throw (affected by beacon)-can spend any # of command die as part of the same reaction  as long as I have command dice to expend"
			]),
		},
		"subclassfeature15" : {
			name : "Fiery Rebirth",
			source : ["MAH", 56],
			minlevel : 15,
			description : desc([
				"If ally in 30 ft of me I see drops to 0 hp, (reaction)-expend a command die-drops to 1",
				"Creatures standing in 15 ft of ally takes fire dmg = command die + my Cha mod"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature18" : {
			name : "Flames of Life",
			source : ["MAH", 56],
			minlevel : 18,
			description : desc([
				"If watchful companion is ignited by benign flames-(bonus)-command it to move up to it’s speed and expend 1 shogun hd on friendly creature it touches in order to heal it"
			]),
			action : ["bonus action", ""]
		},
	},
});
AddSubClass("shogun", "spider", {
	regExpSearch : /spider/i,
	subname : "Spider",
	source : ["MAH", 56],
	abilitySave : 6,
	spellcastingAbility : 6,
	features : {
		"subclassfeature3" : {
			name : "Dark Companion",
			source : ["MAH", 56],
			minlevel : 3,
			description : desc([
				"My watchful companion transforms into a demonic spirit (imp)",
				"Imp doesn’t need food/water-if dies, resummon (action)-appear in spot I see in 10 ft"
			]),
		},
		"subclassfeature3.1" : {
			name : "Mighty Mandibles",
			source : ["MAH", 56],
			minlevel : 3,
			description : desc([
				"My might feature allows the affected creature to add my Cha mod to attack’s dmg roll."
			]),
		},
		"subclassfeature7" : {
			name : "Spider’s Balance",
			source : ["MAH", 56],
			minlevel : 7,
			description : desc([
				"I have adv on Dext (acrobatics) checks to keep my balance, and standing up from prone only uses 5 ft of movement"
			]),
		},
		"subclassfeature10" : {
			name : "Trickster’s Advance",
			source : ["MAH", 56],
			minlevel : 10,
			description : desc([
				"(Action)-expend a command die-I can empower a friendly creature I/my companion can see, to move up to it’s speed and take the Hide action as a reaction. The creature adds the command die to it’s Dexterity (stealth) check."
			]),
			action : ["action", ""]
		},
		"subclassfeature15" : {
			name : "Paralytic Surprise",
			source : ["MAH", 56],
			minlevel : 15,
			description : desc([
				" Successfully attack a surprised creature-Con save or remain surprised and become paralyzed til end of its next turn.-add command die to attack’s dmg roll as poison dmg"
			]),
		},
		"subclassfeature18" : {
			name : "Fighting Dirty",
			source : ["MAH", 56],
			minlevel : 18,
			description : desc([
				"When I or a friendly creature in 30 ft of me lands an OA. or a critical hit against a creature that is hostile towards me, they deal an additional 2d6 poison damage"
			]),
		},
	},
});
AddSubClass("shogun", "tiger", {
	regExpSearch : /tiger/i,
	subname : "Tiger",
	source : ["MAH", 56],
	abilitySave : 6,
	spellcastingAbility : 6,
	features : {
		"subclassfeature3" : {
			name : "Decree of the Warrior",
			source : ["MAH", 56],
			minlevel : 3,
			description : desc([
				"My ancestral decree feature allows an affected creature to add a d4 to the damage rolls of its weapon attacks that target only one target, as long as the affected creature has temp hps remaining from my ancestral decree"
			]),
		},
		"subclassfeature7" : {
			name : "Pounce",
			source : ["MAH", 56],
			minlevel : 7,
			description : desc([
				"I gain prof w/siege weapons and vehicles (land)"
			]),
			toolProfs : ["Vehicles (land)", "Siege weapons"],
		},
		"subclassfeature10" : {
			name : "Warrior’s Might",
			source : ["MAH", 56],
			minlevel : 10,
			description : desc([
				"My might feature allows the creature to move up to it’s speed as part of the same reaction, and make two attacks in place of one"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Bestial Aggression",
			source : ["MAH", 56],
			minlevel : 15,
			description : desc([
				"My allies have adv on melee attack rolls vs. any creature in 5 ft that is hostile to me"
			]),
		},
		"subclassfeature18" : {
			name : "Break Armor",
			source : ["MAH", 56],
			minlevel : 18,
			description : desc([
				"Successful weapon attack vs. a foe, I can expend a command die to reduce the target’s AC by 2 for a # rounds = my Cha mod. Once a creature’s armor has been reduced in this manner, I can't do so again on the same creature for 24 hours. I add my command die to the attack’s damage roll"
			]),
		},
	},
});
AddSubClass("shogun", "wyvern", {
	regExpSearch : /wyvern/i,
	subname : "Wyvern",
	source : ["MAH", 56],
	abilitySave : 6,
	spellcastingAbility : 6,
	features : {
		"command dice" : {
			name : "Command Dice",
			source : ["MAH", 54],
			minlevel : 2,
			description : desc([
				"Command dice fuel my features; Regain after a short or long rest"
			]),
			additional : ["", "d6", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10"],
			usages : [0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6],
			recovery : "short rest"
		},
		"subclassfeature3" : {
			name : "Ancestral Commands",
			source : ["MAH", 56],
			minlevel : 3,
			description : desc([
				"My command dice turn into d8’s"
			]),
		},
		"subclassfeature3.1" : {
			name : "Wyvern Companion",
			source : ["MAH", 56],
			minlevel : 3,
			description : desc([
				"My companion transforms into a pseudodragon. It can't be frightened, I don’t need to bond with it, it doesn’t require food/water, and if it dies I can summon it back using an action. If summoned, the pseudodragon will appear in a spot I choose in 10 ft of me"
			]),
		},
		"subclassfeature7" : {
			name : "Additional Fighting Style",
			source : ["MAH", 56],
			minlevel : 7,
			description : desc([
				"I can choose a second Fighting Style"
			]),
			choices : ["Archery", "Defense", "Dueling"],
			"archery" : {
				name : "Archery Fighting Style",
				description : desc([
					"+2 bonus to attack rolls I make with ranged weapons"
				]),
				calcChanges : {
					atkCalc : ["if (isRangedWeapon) {output.extraHit += 2; }; ", "My ranged weapons get a +2 bonus on the To Hit."]
				}
			},
			"dueling" : {
				name : "Dueling Fighting Style",
				description : desc([
					"+2 to damage rolls when wielding a melee weapon in one hand and no other weapons"
				]),
				calcChanges : {
					atkCalc : ["var areOffHands = function(n){for(var i=1;i<=n;i++){if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) {return true; }; }; }(FieldNumbers.actions); if (!areOffHands && isMeleeWeapon && !(/\\b(2|two).?hand(ed)?s?\\b/i).test(theWea.description)) {output.extraDmg += 2; }; ", "When I'm wielding a melee weapon in one hand and no weapon in my other hand, I do +2 damage with that melee weapon. This condition will always be false if the bonus action 'Off-hand Attack' exists."]
				},
			},
			"defense" : {
				name : "Defense Fighting Style",
				description : desc([
					"+1 bonus to AC when I'm wearing armor"
				]),
				eval : "AddACMisc(1, 'Defense Fighting Style', 'When wearing armor, the class feature Defense Fighting Style gives a +1 bonus to AC', 'CurrentArmour.known && !ArmourList[CurrentArmour.known].type')",
				removeeval : "AddACMisc(0, 'Defense Fighting Style', 'When wearing armor, the class feature Defense Fighting Style gives a +1 bonus to AC')"
			},
		},
		"subclassfeature10" : {
			name : "Ancient Commands",
			source : ["MAH", 56],
			minlevel : 10,
			description : desc([
				"My command dice turn into d10’s."
			]),
			action : ["action", ""]
		},
		"subclassfeature15" : {
			name : "Draconic Focus",
			source : ["MAH", 56],
			minlevel : 15,
			description : desc([
				"I gain one additional command die."
			]),
		},
		"subclassfeature18" : {
			name : "Commanding Presence",
			source : ["MAH", 56],
			minlevel : 18,
			description : desc([
				"When I roll a command die, I can add my Cha mod (min 1) to the roll"
			]),
		},
	},
});

//SORCERER SORCEROUS ORIGINS:
AddSubClass("sorcerer", "void disciple", {
	regExpSearch : /void disciple/i,
	subname : "Void Disciple",
	source : ["MAH", 57],
	features : {
		"subclassfeature1" : {
			name : "Unbreakable Clarity",
			source : ["MAH", 57],
			minlevel : 1,
			description : desc([
				"I have adv on saves vs. being charmed and vs any spell/effect that trys to silence me",
				"I'm resistant to psychic dmg/magic can’t put me to sleep"
			]),
			savetxt : {
				adv_vs : ["charmed", "effects that interrupt my spells"],
				text : ["Can't put me to sleep"]
			},
			dmgres : ["Psychic"],
		},
		"subclassfeature6" : {
			name : "Sense Void",
			source : ["MAH", 57],
			minlevel : 6,
			description : desc([
				"I use all my senses (sight, hearing, touch, taste, and smell) to perceive whatever area, person/thing I direct my attention to. In order to do so I must succeed a Cha save w/DC",
				"10; 100 feet, line of sight, 15; 100 feet, 20; 1 mile, 25; 10 miles, 30; 100 miles",
				"If I scry a creature, it must succeed a Wis save vs my spell DC, in order to be aware that it is being observed/touched through the void. If it succeeds by 5 or more, it also becomes aware of who I am and where I am physically located",
				"Sense void lasts for 1 min or til I end the condition as an action. The effect also ends early if any harm is done to my body. 1\long rest"
			]),
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Altering the Course",
			source : ["MAH", 57],
			minlevel : 14,
			description : desc([
				"(action), A creature must reroll its init. roll, adding its, or my init. mod (my choice)",
				"I double area of effect for a spell, as the void weakens the spell’s edges. 1/long rest"
			]),
			recovery : "long rest",
			action : ["action", ""]
		},
		"subclassfeature18" : {
			name : "Void Suppression",
			source : ["MAH", 57],
			minlevel : 18,
			description : desc([
				"(action)-I open a vein into the void that fills a 30 ft area centered on me. The area is lightly obscured, counts as difficult terrain, and all creatures in the area gain the following:",
				"• Can't be blinded/charmed/deafened/frightened/incapacitated/invisible/paralyzed, petrified/stunned.                  • Can't benefit from healing except from potions",
				"• Disadv on all saving throws.     • Vulnerable to bludgeoning/piercing/slashing damage",
				"When a creature starts its turn inside the suppression field, its max hp reduced by 1d6",
				"Suppression field lasts 1 min/til concentration is broken/til I fall unconscious/die"
			]),
			savetxt : {
				immune : ["blinded", "charmed", "deafened", "frightened", "incapacitated", "invisible", "paralyzed", "petrified", "stunned"]
			},
			action : ["action", ""]
		},
	},
});

//WARLOCK: OTHERWORLDLY PATRON'S / BOON'S / INVOCATIONS:
//New Patrons from the Orient:
AddSubClass("warlock", "the great phoenix", {
	regExpSearch : /the great phoenix/i,
	subname : "The Great Phoenix",
	source : ["MAH", 58],
	spellcastingExtra : ["absorb elements", "burning hands", "heat metal", "pyrotechnics", "beacon of hope", "fireball", "death ward", "fire shield", "immolation", "reincarnate"],
	features : {
		"subclassfeature1" : {
			name : "Kindled Spirit",
			source : ["MAH", 58],
			minlevel : 1,
			description : desc([
				"I learn the create bonfire cantrip, it doesn't count against my list of cantrips known",
				"When I make a save to avoid fire/radiant dmg from a spell I cast, I instead take no dmg and gain temp hp = my Cha mod + 1"
			]),
			spellcastingBonus : {
				name : "Kindled Spirit",
				spells : ["create bonfire"],
				selection : ["create bonfire"],
				atwill : true
			},
		},
		"subclassfeature6" : {
			name : "Firebird’s Vengeance",
			source : ["MAH", 58],
			minlevel : 6,
			description : desc([
				"When a creature I see in 60 ft deals dmg to me or friendly creature-(reaction)-force attacker to make a Dex save. It takes fire dmg = 2d10 + my Warlock level on a failed save, or half dmg on a successful one. 1/short rest"
			]),
			action : ["reaction", " (I take damage)"],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "True Nature of Fire",
			source : ["MAH", 58],
			minlevel : 10,
			description : desc([
				"I gain resistance to fire dmg, and when I cast a spell of 1st level/higher that deals fire dmg, I can cause the spell to deal radiant dmg instead"
			]),
			dmgres : ["Fire"]
		},
		"subclassfeature14" : {
			name : "Inextinguishable Soul",
			source : ["MAH", 58],
			minlevel : 14,
			description : desc([
				"I gain the ability to summon fiery wings-(bonus: summon/dismiss)-When wings are active, I gain a flying speed = 1/2 my walking speed, and they last til I dismiss them",
				"(action)-I wrap myself/friendly creature in my wings to channel the fiery energy of Creation into their soul. The target regains 10d10 hp. 1/long rest"
			]),
			recovery : "long rest",
			usages : 1,
			action : ["bonus action", " (summon/dismiss wings)"]
		},
	},
});
AddSubClass("warlock", "the great sylvan", {
	regExpSearch : /the great sylvan/i,
	subname : "The Great Sylvan",
	source : ["MAH", 58],
	spellcastingExtra : ["animal friendship", "faerie fire", "barkskin", "heat metal", "create food and water", "plant growth", "dominate beast", "freedom of movement", "awaken", "tree stride"],
	features : {
		"subclassfeature1" : {
			name : "Sylvan Magic",
			source : ["MAH", 58],
			minlevel : 1,
			description : desc([
				"I learn the druidcraft, mending, mold earth, and shillelagh cantrips-don’t count towards my list of cantrips known; I learn to speak, read, and write Sylvan."
			]),
			languageProfs : ["Sylvan"],
			spellcastingBonus : [{
					name : "Sylvan Magic",
					spells : ["druidcraft"],
					selection : ["druidcraft"],
					atwill : true
				},	{
					name : "Sylvan Magic",
					spells : ["mending"],
					selection : ["mending"],
					atwill : true
				},	{
					name : "Sylvan Magic",
					spells : ["mold earth"],
					selection : ["mold earth"],
					atwill : true
				},	{
					name : "Sylvan Magic",
					spells : ["shillelagh"],
					selection : ["shillelagh"],
					atwill : true
				},
			],
		},
		"subclassfeature6" : {
			name : "Naturalist",
			source : ["MAH", 58],
			minlevel : 6,
			description : desc([
				"I can cast animal messenger and speak with plants spells at will, and the lesser restoration spell by expending a warlock spell slot. Neither spell counts against my spells known max"
			]),
			spellcastingBonus : [{
					name : "Naturalist",
					spells : ["animal messenger"],
					selection : ["animal messenger"],
					atwill : true
				},	{
					name : "Naturalist",
					spells : ["speak with plants"],
					selection : ["speak with plants"],
					atwill : true
				},	{
					name : "Naturalist",
					spells : ["lesser restoration"],
					selection : ["lesser restoration"],
					atwill : false
				},
			],
		},
		"subclassfeature10" : {
			name : "Faultless Tracker",
			source : ["MAH", 58],
			minlevel : 10,
			description : desc([
				"I can cast locate animals and plants and locate creature spells at will. Neither spell counts against my spells known maximum."
			]),
			spellcastingBonus : [{
					name : "Faultless Tracker",
					spells : ["locate animals and plants"],
					selection : ["locate animals and plants"],
					atwill : true
				},	{
					name : "Faultless Tracker",
					spells : ["locate creature"],
					selection : ["locate creature"],
					atwill : true
				},
			],
		},
		"subclassfeature14" : {
			name : "Planar Empowerment",
			source : ["MAH", 58],
			minlevel : 14,
			description : desc([
				"I can cast contact other plane spell and planar binding as a 5th level spell w/o a slot. If I cast contact other plane, I don't have to make an Int save-creature I contact is my Great Sylvan patron, though it will only answer one question; 1/long rest."
			]),
			recovery : "long rest",
			spellcastingBonus : [{
					name : "Faultless Tracker",
					spells : ["contact other plane"],
					selection : ["contact other plane"],
					oncelr : true
				},	{
					name : "Faultless Tracker",
					spells : ["planar binding"],
					selection : ["planar binding"],
					oncelr : true
				},
			],
		},
	},
});
AddSubClass("warlock", "the great turtle", {
	regExpSearch : /the great turtle/i,
	subname : "The Great Turtle",
	source : ["MAH", 58],
	spellcastingExtra : ["create spring", "cure wounds", "aid", "lesser restoration", "wall of water", "water walk", "control water", "watery sphere", "commune with nature", "dispel evil and good"],
	features : {
		"subclassfeature1" : {
			name : "Amphibious",
			source : ["MAH", 59],
			minlevel : 1,
			description : desc([
				"I can breathe water, I gain a swim speed = my walking speed; invisible while fully submerged in water. Additionally, I learn to speak, read, and write Aquan"
			]),
			languageProfs : ["Aquan"]
		},
		"subclassfeature6" : {
			name : "Semi-Liquid Physique",
			source : ["MAH", 59],
			minlevel : 6,
			description : desc([
				"Gain resistance: cold/ranged weapon attacks-no adv vs. me/ally in cover behind me"
			]),
			dmgres : ["Cold"]
		},
		"subclassfeature10" : {
			name : "Water Form",
			source : ["MAH", 59],
			minlevel : 10,
			description : desc([
				"(action)-transform into a water elemental; stay in form # hr = 1/2 warlock level",
				"Revert to normal form early-(action)/if I fall unconscious/drop to 0 hp/die/time expires",
				"Transformed, the rules for the druid’s Wild Shape feature also apply to me. 1/long rest"
			]),
			recovery : "long rest",
			action : ["action", " (transform-start/end)"]
		},
		"subclassfeature14" : {
			name : "Great Turtle’s Blessing",
			source : ["MAH", 59],
			minlevel : 14,
			description : desc([
				"When a hostile comes in 10 ft of me-(reaction)-conjure a geyser from my palm, targeting the hostile-target must succeed a Str save; vs. my spell DC or pushed 15 ft backwards",
				"I age slowly. For every 10 years, my body ages only 1 year"
			]),
			action : ["reaction", ""]
		},
	},
});
AddSubClass("warlock", "the great wyrm", {
	regExpSearch : /the great wyrm/i,
	subname : "The Great Wyrm",
	source : ["MAH", 59],
	spellcastingExtra : ["color spray", "thunderous smite", "knock", "warding wind", "call lightning", "sleet storm", "Mordenkainen’s private sanctum", "storm sphere", "control wind", "destructive wave"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrips",
			source : ["MAH", 59],
			minlevel : 1,
			description : desc([
				"I gain the shocking grasp and thunderclap cantrips; don’t count against my # of cantrips"
			]),
			spellcastingBonus : [{
					name : "Bonus Cantrips",
					spells : ["shocking grasp"],
					selection : ["shocking grasp"],
					atwill : true
				},	{
					name : "Bonus Cantrips",
					spells : ["thunderclap"],
					selection : ["thunderclap"],
					atwill : true
				},
			],
		},
		"subclassfeature1.1" : {
			name : "Tempestuous",
			source : ["MAH", 59],
			minlevel : 1,
			description : desc([
				"When I deal lightning/thunder dmg to Large/smaller creature, I can push it 5 ft away",
				"When creature in 5 ft of me hits me w/an attack-(reaction)-deal 1d8 lightning/thunder"
			]),
		},
		"subclassfeature6" : {
			name : "Static Discharge",
			source : ["MAH", 59],
			minlevel : 6,
			description : desc([
				"Attack action on my turn-(bonus)-to cast shocking grasp."
			]),
			action : ["bonus action", " (shocking grasp)"]
		},
		"subclassfeature10" : {
			name : "Wind Walker",
			source : ["MAH", 59],
			minlevel : 10,
			description : desc([
				"(bonus)-Dash action; other creatures have disadv on OA's vs. me/gain fly speed = my walking speed. I fall if I end my turn in air and nothing is holding me up"
			]),
			action : ["bonus action", " (Dash)"]
		},
		"subclassfeature14" : {
			name : "Sonic Boom",
			source : ["MAH", 59],
			minlevel : 14,
			description : desc([
				"(action)-instantly move 100 ft in direction I choose. Each creature I pass through takes 18 (4d8) thunder dmg/must succeed Str save: or become knocked prone. 1/long rest"
			]),
			recovery : "long rest",
			action : ["action", ""]
		},
	},
});
AddSubClass("warlock", "seishin mystic", {
	regExpSearch : /seishin mystic/i,
	subname : "Seishin Mystic",
	source : ["MAH", 59],
	spellcastingExtra : ["heroism", "sanctuary", "lesser restoration", "warding bond", "magic circle", "spirit guardians", "arcane eye", "staggering smite", "hallow", "legend lore"],
	features : {
		"subclassfeature1" : {
			name : "Riddle of Interaction",
			source : ["MAH", 59],
			minlevel : 1,
			description : desc([
				"I cast charm person or augury as a 1st level spell w/o spending spell slots. 1/short rest"
			]),
			recovery : "short rest",
			spellcastingBonus : [{
					name : "Riddle of Interaction",
					spells : ["charm person"],
					selection : ["charm person"],
					oncesr : true,
					atwill : true
				},	{
					name : "Riddle of Interaction",
					spells : ["augury"],
					selection : ["augury"],
					oncesr : true,
					atwill : true
				},
			],
		},
		"subclassfeature1.1" : {
			name : "Riddle of Health",
			source : ["MAH", 59],
			minlevel : 1,
			description : desc([
				"I gain 1 additional hp per warlock level, and I become immune to possession from entities other than my patron"
			]),
			calcChanges : {
				hp : "extrahp += totalhd; extrastring += \"\\n + \" + totalhd + \" from Riddle of Health\";"
			},
		},
		"subclassfeature6" : {
			name : "Otherworldly Awareness",
			source : ["MAH", 59],
			minlevel : 6,
			description : desc([
				"I gain blindsight 30 ft, and I can't be surprised, even while unconscious"
			]),
			vision : ["Blindsight", 30]
		},
		"subclassfeature6.1" : {
			name : "Riddle of Flame",
			source : ["MAH", 59],
			minlevel : 6,
			description : desc([
				"I can cast fire shield on myself w/o expending a spell slot/material components. While the shield persists, my attacks deal an additional 1d6 fire or cold dmg, depending on if my fire shield is warm or chill. 1/sjort rest"
			]),
			recovery : "short rest",
			spellcastingBonus : {
				name : "Riddle of Flame",
				spells : ["fire shield"],
				selection : ["fire shield"],
				atwill : true
			},
		},
		"subclassfeature10" : {
			name : "Cleansing Spirit",
			source : ["MAH", 59],
			minlevel : 10,
			description : desc([
				"I gain immunity to disease and poison"
			]),
			savetxt : {
				immune : ["disease", "poison"]
			},
		},
		"subclassfeature14" : {
			name : "Timeless Body",
			source : ["MAH", 59],
			minlevel : 14,
			description : desc([
				"I suffer none of the frailty of old age, and I can’t be aged magically. I can still die of old age, but I no longer need air/food/water"
			]),
		},
	},
});
//Patrons's from PHB not in SRD:
AddSubClass("warlock", "the archfey", {
	regExpSearch : /the archfey/i,
	subname : "the Archfey",
	source : ["P", 109],
	spellcastingExtra : ["faerie fire", "sleep", "calm emotions", "phantasmal force", "blink", "plant growth", "dominate beast", "greater invisibility", "dominate person", "seeming"],
	features : {
		"subclassfeature1" : {
			name : "Fey Presence",
			source : ["P", 109],
			minlevel : 1,
			description : desc([
				"As an action, all creatures in a 10-ft cube around me must make a Wisdom save",
				"If failed, they're all charmed or frightened (my choice) until the end of my next turn"
			]),
			recovery : "short rest",
			usages : 1,
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Misty Escape",
			source : ["P", 109],
			minlevel : 6,
			description : desc([
				"As a reaction, when I take damage, I can turn invisible and teleport up to 60 ft",
				"I stay invisible until the start of my next turn or until I attack or cast a spell"
			]),
			action : ["reaction", " (taking damage)"],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Beguiling Defenses",
			source : ["P", 109],
			minlevel : 10,
			description : desc([
				"As a reaction, when a creature tries to charm me, I can turn the charm back on it",
				"It must make a Wis save or be charmed by me for 1 minute or until taking damage",
				"I am immune to being charmed"
			]),
			action : ["reaction", " (when charmed)"],
			savetxt : { immune : ["charmed"] }
		},
		"subclassfeature14" : {
			name : "Dark Delirium",
			source : ["P", 109],
			minlevel : 14,
			description : desc([
				"As an action, a creature within 60 ft must make a Wis save or be charmed/frightened",
				"This lasts for 1 minute or until my concentration is broken or it takes damage",
				"During this time, it can't see or hear anything but the illusion, me, and itself"
			]),
			recovery : "short rest",
			usages : 1,
			action : ["action", ""]
		},
	},
});
AddSubClass("warlock", "the great old one", {
	regExpSearch : /the great old one/i,
	subname : "The Great Old One",
	source : ["P", 110],
	spellcastingExtra : ["dissonant whispers", "tasha's hideous laughter", "detect thoughts", "phantasmal force", "clairvoyance", "sending", "dominate beast", "evard's black tentacles", "dominate person", "telekinesis"],
	features : {
		"subclassfeature1" : {
			name : "Awakened Mind",
			source : ["P", 110],
			minlevel : 1,
			description : desc([
				"I can telepathically speak to creatures I can see within 30 ft if they know a language"
			]),
		},
		"subclassfeature6" : {
			name : "Entropic Ward",
			source : ["P", 110],
			minlevel : 6,
			description : desc([
				"As a reaction, when I'm attacked, I can impose disadvantage to that attack roll",
				"If it misses me, I have adv. on my next attack vs. the attacker during my next turn"
			]),
			action : ["reaction", " (when attacked)"],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Thought Shield",
			source : ["P", 110],
			minlevel : 10,
			description : desc([
				"No one can read my mind unless I allow it; I have resistance to psychic damage",
				"When I take psychic damage, the dealer of the psychic damage takes the same amount"
			]),
			dmgres : ["Psychic"]
		},
		"subclassfeature14" : {
			name : "Create Thrall",
			source : ["P", 110],
			minlevel : 14,
			description : desc([
				"As an action, I can charm an incapacitated humanoid by touch",
				"While it is charmed, I can communicate with it telepathically if it is on the same plane",
				"This lasts until the charm is removed (can be by Remove Curse) or I use this again"
			]),
			action : ["action", ""]
		}
	},
});
//Invocations:
// All XGtE invocations not in the SRD
if (!SourceList.x) {
	SourceList.X={
		name : "Xanathar's Guide to Everything",
		abbreviation : "XGtE",
		group : "Primary Sources",
		url : "http://dnd.wizards.com/products/tabletop-games/rpg-products/xanathars-guide-everything",
		date : "2017/11/21"
	};
	AddWarlockInvocation("Aspect of the Moon (prereq: Pact of the Tome)", {
		name : "Aspect of the Moon",
		description : "\n   " + "I don't need sleep nor can be forced to by any means; I can rest while doing light activity",
		source : [["X", 56], ["UA:RCO", 5]],
		prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the tome') !== -1",
		savetxt : { text : ["Nothing can force me to sleep"] }
	});
	AddWarlockInvocation("Cloak of Flies (prereq: level 5 warlock)", {
		name : "Cloak of Flies",
		description : desc([
			"As a bonus action, I can surround myself with a 5-ft radius magical aura of buzzing flies",
			"It lasts until I'm incapacitated or dismiss it as a bonus action; Total cover block the aura",
			"The aura grants me adv. on Cha (Intimidation), but disadv. on all other Cha checks",
			"Creatures starting their turn in the aura take my Cha mod (min 0) in poison damage"
		]),
		source : [["X", 56], ["UA:RCO", 5]],
		prereqeval : "classes.known.warlock.level >= 5",
		recovery : "short rest",
		usages : 1,
		action : ["bonus action", " (start/stop)"]
	});
	AddWarlockInvocation("Eldritch Smite (prereq: level 5 warlock, Pact of the Blade)", {
		name : "Eldritch Smite",
		description : desc([
			"Once per turn when I hit a creature with my pact weapon, I can empower the strike",
			"By expending a warlock spell slot, the creature takes extra damage and is knocked prone",
			"It takes 1d8 force damage and another 1d8 force damage per level of the spell slot",
			"The target is only knocked prone if it is Huge or smaller"
		]),
		source : ["X", 56],
		prereqeval : "classes.known.warlock.level >= 5 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1"
	});
	AddWarlockInvocation("Ghostly Gaze (prereq: level 7 warlock)", {
		name : "Ghostly Gaze",
		description : desc([
			"As an action, I can gain darkvision, and the ability to see through solid objects, out to 30 ft",
			"Objects appear ghostly to me; This lasts up to 1 minute, while I'm concentrating on this"
		]),
		source : ["X", 56],
		prereqeval : "classes.known.warlock.level >= 7",
		recovery : "short rest",
		usages : 1,
		action : ["action", ""]
	});
	AddWarlockInvocation("Gift of the Depths (prereq: level 5 warlock)", {
		name : "Gift of the Depths",
		description : desc([
			"I can breathe underwater and I have a swim speed equal to my walking speed",
			"Once per long rest, I can cast Water Breathing without using a spell slot (PHB 287)"
		]),
		source : [["X", 57], ["UA:RCO", 6]],
		spellcastingBonus : {
			name : "Gift of the Depths",
			spells : ["water breathing"],
			selection : ["water breathing"],
			oncelr : true
		},
		prereqeval : "classes.known.warlock.level >= 5",
		speed : { swim : { spd : "walk", enc : "walk" } }
	});
	AddWarlockInvocation("Gift of the Ever-Living Ones (prereq: Pact of the Chain)", {
		name : "Gift of the Ever-Living Ones",
		description : "\n   " + "When I regain HP while my familiar is within 100 ft, I regain the max the dice can roll",
		source : [["X", 57], ["UA:RCO", 6]],
		prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the chain') !== -1"
	});
	AddWarlockInvocation("Grasp of Hadar (prereq: Eldritch Blast cantrip)", {
		name : "Grasp of Hadar",
		description : "\n   " + "When my Eldritch Blast hits a creature once or more, I can move it 10 ft closer to me",
		source : [["X", 57], ["UA:RCO", 6]],
		prereqeval : "hasEldritchBlast",
		calcChanges : {
			atkAdd : ["if (theWea && (/eldritch blast/i).test(theWea.name)) {fields.Description += '; Target moved 10 ft to me'; }; ", "When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can move it in a straight line 10 ft closer to me."]
		},
	});
	AddWarlockInvocation("Improved Pact Weapon (prereq: Pact of the Blade)", {
		name : "Improved Pact Weapon",
		description : desc([
			"I can use any pact weapon I create as my spellcasting focus for warlock spells",
			"Any pact weapon I create has a +1 magic weapon, if it isn't already a magic weapon",
			"I can now also conjure a shortbow, longbow, or light or heavy crossbow as my pact weapon"
		]),
		source : ["X", 57],
		prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
		calcChanges : {
			atkCalc : ["if (!thisWeapon[1] && (/\\bpact\\b/i).test(inputText)) { var pactMag = pactMag !== undefined ? 1 - pactMag : 1; output.magic += pactMag; }; if ((/^(shortbow|longbow|light crossbow|heavy crossbow)$/).test(WeaponName) && (/\\bpact\\b/i).test(inputText)) {fields.Proficiency = true; fields.Description += thisWeapon[1] ? '' : (fields.Description ? '; ' : '') + 'Counts as magical'; }; ", "If I include the word 'Pact' in a the name of a melee weapon, shortbow, longbow, light crossbow, or heavy crossbow, it will be treated as my Pact Weapon. If it doesn't already include a magical bonus in its name, the calculation will add +1 to its To Hit and Damage."]
		},
	});
	AddWarlockInvocation("Lance of Lethargy (prereq: Eldritch Blast cantrip)", {
		name : "Lance of Lethargy",
		description : desc([
			"Once per turn when my Eldritch Blast hits a creature, I can reduce its speed by 10 ft",
			"This speed reduction lasts until the end of my next turn"
		]),
		source : ["X", 57],
		prereqeval : "hasEldritchBlast",
		calcChanges : {
			atkAdd : ["if (theWea && (/eldritch blast/i).test(theWea.name)) {fields.Description += '; 1 target -10 ft speed'; }; ", "Once on each of my turns when I hit a creature with my Eldritch Blast cantrip, I can reduce its speed by 10 ft until the end of my next turn."]
		},
	});
	AddWarlockInvocation("Maddening Hex (prereq: level 5 warlock, Hex spell or warlock feature that curses)", {
		name : "Maddening Hex",
		description : desc([
			"As a bonus action, I cause pain around a target hexed by me within 30 ft that I can see",
			"It and any within 5 ft of it that I can see take my Cha mod (min 1) in psychic damage",
			"The Hex spell and any of my warlock features that curse are considered a hex for this"
		]),
		source : ["X", 57],
		prereqeval : "classes.known.warlock.level >= 5 && (isSpellUsed('hex', true) || (/hexblade/).test(classes.known.warlock.subclass) || (/sign of ill omen/i).test(toTestE))",
		action : ["bonus action", ""]
	});
	AddWarlockInvocation("Relentless Hex (prereq: level 7 warlock, Hex spell or warlock feature that curses)", {
		name : "Relentless Hex",
		description : desc([
			"As a bonus action, I can teleport to a target hexed by me within 30 ft that I can see",
			"I teleport up to 30 ft to an unoccupied space that I can see within 5 ft of the target"
		]),
		source : ["X", 57],
		prereqeval : "classes.known.warlock.level >= 7 && (isSpellUsed('hex', true) || (/hexblade/).test(classes.known.warlock.subclass) || (/sign of ill omen/i).test(toTestE))",
		action : ["bonus action", ""]
	});
	AddWarlockInvocation("Shroud of Shadow (prereq: level 15 warlock)", {
		name : "Shroud of Shadow",
		description : "\n   " + "I can cast Invisibility at will, without using spell slots (PHB 254)",
		source : [["X", 57], ["UA:RCO", 6]],
		spellcastingBonus : {
			name : "Shroud of Shadow",
			spells : ["invisibility"],
			selection : ["invisibility"],
			atwill : true
		},
		prereqeval : "classes.known.warlock.level >= 15"
	});
	AddWarlockInvocation("Tomb of Levistus (prereq: level 5 warlock)", {
		name : "Tomb of Levistus",
		description : desc([
			"As a reaction when I take damage, I can entomb myself in ice until the end of my turn",
			"During, I get 10 temp. HP per warlock level, which I use to absorb the triggering damage",
			"After, till the ice is gone, I also get vulnerability to fire, 0 speed, and am incapacitated"
		]),
		source : [["X", 57], ["UA:RCO", 6]],
		prereqeval : "classes.known.warlock.level >= 5",
		recovery : "short rest",
		usages : 1,
		action : ["reaction", ""],
		additional : levels.map( function(n) { return (n * 10) + " temp HP"; })
	});
	AddWarlockInvocation("Trickster's Escape (prereq: level 7 warlock)", {
		name : "Trickster's Escape",
		description : "\n   " + "Once per long rest, I can cast Freedom of Movement on myself without using a spell slot",
		source : [["X", 57], ["UA:RCO", 7]],
		spellcastingBonus : {
			name : "Trickster's Escape",
			spells : ["freedom of movement"],
			selection : ["freedom of movement"],
			oncelr : true
		},
		prereqeval : "classes.known.warlock.level >= 7"
	});
};
// New Warlock Invocations - Heroes of the Orient
AddWarlockInvocation("Collared Chains (prereq: level 15 warlock, Pact of the Chain)", {
	name : "Collared Chains",
	source : ["MAH", 60],
	description : "\n   " + "I can have up to two familiars of different types simultaneously",
	prereqeval : "classes.known.warlock.level >= 15 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the chain') !== -1"
});
AddWarlockInvocation("Death’s Refusal (prereq: level 9 warlock)", {
	name : "Death’s Refusal",
	source : ["MAH", 60],
	description : "\n   " + "Once per long rest, I can cast revivify",
	spellcastingBonus : {
		name : "Death’s Refusal",
		spells : ["revivify"],
		selection : ["revivify"],
		oncelr : true
	},
	prereqeval : "classes.known.warlock.level >= 9"
});
AddWarlockInvocation("Eldritch Materials (prereq: level 15 warlock, Pact of the Blade)", {
	name : "Eldritch Materials",
	source : ["MAH", 60],
	description : "\n   " + "1 hr ritual w/my pact wpn, that fails if I'm disturbed-gains prop. of adamantine, jade, kirinwood, or mithral-if it can be made of these, or the ritual will fail",
	prereqeval : "classes.known.warlock.level >= 15 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1"
});
AddWarlockInvocation("Eldritch Eyes", {
	name : "Eldritch Eyes",
	source : ["MAH", 60],
	description : "\n   " + "My vision rg. inc 30 ft; I see up to 1 mile away w/no difficulty, able to discern even fine details as though looking at something no more than 100 ft away" + "\n   " + "Prereq: blindsight/darkvision/devil’s sight/tremorsense/truesight"
}),
AddWarlockInvocation("Fey Haste (prereq: the Archfey patron)", {
	name : "Fey Haste",
	source : ["MAH", 60],
	description : "\n   " + "If a hostile creature comes in 10 ft of me-(reaction)-move up to my speed.",
	action : ["reaction", " (move upto my spd)"],
	prereqeval : "(/\\barchfey\\b/).test(classes.known.warlock.subclass)"
});
AddWarlockInvocation("Fire Lance (prereq: level 5 warlock, the Great Phoenix patron)", {
	name : "Fire Lance",
	source : ["MAH", 60],
	description : "\n   " + "Learn fire bolt sp. at will, w/o sp. slots, doesn't count toward # known" + "\n   " + "When I cast fire bolt-(bonus)-cast it again if targets same",
	action : ["bonus action", " (2nd bolt vs same cre)"],
	spellcastingBonus : {
		name : "Fire Lance",
		spells : ["fire bolt"],
		selection : ["fire bolt"],
		atwill : true
	},
	prereqeval : "(/great phoenix/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5",
});
AddWarlockInvocation("Fists from Beyond (prereq: level 5 warlock, Seishin Mystic patron)", {
	name : "Fists from Beyond",
	source : ["MAH", 60],
	description : "\n   " + "I can attack twice w/my unarmed strikes, instead of once. Unarmed Strikes do d6, instead of d4" + "\n   " + "prereq: Martial Spirits invocation",
	prereqeval : "(/seishin mystic/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5",
});
AddWarlockInvocation("Forced Fate (prereq: level 5 warlock, the Great Old One patron)", {
	name : "Forced Fate",
	source : ["MAH", 60],
	description : "\n   " + "Fail a save:-(Reaction)-spend a warlock spell slot to succeed on the save instead",
	usages : 1,
	action : ["reaction", " (spend slot to save)"],
	recovery : "short rest",
	prereqeval : "(/great old one/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5",
});
AddWarlockInvocation("Fulmination (prereq: level 5 warlock, the Great Wyrm patron)", {
	name : "Fulmination",
	source : ["MAH", 60],
	description : "\n   " + "Casting thunderous smite w/a spell slot of 2nd level/higher, dmg inc 2d6/slot above 1st",
	prereqeval : "(/great wyrm/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5",
});
AddWarlockInvocation("Fulmination (prereq: level 5 warlock, the Great Wyrm patron)", {
	name : "Fulmination",
	source : ["MAH", 60],
	description : "\n   " + "Casting thunderous smite w/a spell slot of 2nd level/higher, dmg inc 2d6/slot above 1st",
	prereqeval : "(/great wyrm/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5",
});
AddWarlockInvocation("Grand Invoker (prereq: level 15 warlock, Pact of the Invoker)", {
	name : "Grand Invoker",
	source : ["MAH", 60],
	description : "\n   " + "After a long rest, I can replace 1 known invocation with an unknown one",
	prereqeval : "classes.known.warlock.level >= 15 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the invoker') !== -1",
});
AddWarlockInvocation("Gravity Well (prereq: level 15 warlock)", {
	name : "Gravity Well",
	source : ["MAH", 60],
	description : "\n   " + "I can cast reverse gravity once using a spell slot",
	spellcastingBonus : {
		name : "Gravity Well",
		spells : ["reverse gravity"],
		selection : ["reverse gravity"],
		oncelr : true
	},
	prereqeval : "classes.known.warlock.level >= 15",
});
AddWarlockInvocation("Illogical Initiative (prereq: level 15 warlock, Pact of the Swift)", {
	name : "Illogical Initiative",
	source : ["MAH", 60],
	description : "\n   " + "I add my proficiency bonus to my initiative",
	prereqeval : "classes.known.warlock.level >= 15 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the swift') !== -1"
});
AddWarlockInvocation("Impervious Shell (prereq: level 5 warlock, the Great Turtle patron)", {
	name : "Impervious Shell",
	source : ["MAH", 60],
	description : "\n   " + "I take dmg-(Reaction)-cast shield w/o a spell slot. dont prevent this dmg",
	action:["reaction", " (cast shield)"],
	spellcastingBonus : {
		name : "Impervious Shell",
		spells : ["shield"],
		selection : ["sheld"],
		atwill : true
	},
	prereqeval : "(/great turtle/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5"
});
AddWarlockInvocation("Incorporeal Mind (prereq: level 5 warlock, Pact of the Immaterial)", {
	name : "Incorporeal Mind",
	source : ["MAH", 60],
	description : "\n   " + "Once incorporeal, effects blinding/charming/deafening/frightening me are removed.",
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the immaterial') !== -1 && classes.known.warlock.level >= 5"
});
AddWarlockInvocation("Limited Magic Immunity (prereq: level 5 warlock, the Great Sylvan patron)", {
	name : "Limited Magic Immunity",
	source : ["MAH", 60],
	description : "\n   " + "I'm immune to spells of 2nd lv./lower. Cantrips affect me as normal.",
	savetxt : {
		immune : ["spells of 2nd level or lower"],
	},
	prereqeval : "(/great sylvan/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5"
});
AddWarlockInvocation("Martial Spirit (prereq: Seishin Mystic patron)", {
	name : "Martial Spirit",
	source : ["MAH", 60],
	description : "\n   " + "I can use Cha for unarmed strikes atk/dmg rolls; d4 for dmg ",
	prereqeval : "(/seishin mystic/).test(classes.known.warlock.subclass)"
});
AddWarlockInvocation("Master Escapist (prereq: level 15 warlock, Pact of the Immaterial)", {
	name : "Master Escapist",
	source : ["MAH", 60],
	description : "\n   " + "(Action)-I become incorporeal (even incapacitated-Unless paralyzed/petrified)" + "\n   " + "The incapacitating effect's removed",
	prereqeval : "classes.known.warlock.level >= 15 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the immaterial') !== -1"
});
AddWarlockInvocation("Otherworldly Armor (prereq: level 15 warlock)", {
	name : "Otherworldly Armor",
	source : ["MAH", 60],
	description : "\n   " + "I gain a +1 bonus to AC and saving throws.",
	prereqeval : "classes.known.warlock.level >= 15"
});
AddWarlockInvocation("Stolen Pact Magic (prereq: level 12 warlock, Pact of the Invoker)", {
	name : "Stolen Pact Magic",
	source : ["MAH", 60],
	description : "\n   " + "1/long rest, I gain an additional warlock spell slot",
	prereqeval : "classes.known.warlock.level >= 12 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the invoker') !== -1"
});
AddWarlockInvocation("Thermal Flux (prereq: level 15 warlock, Seishin Mystic patron)", {
	name : "Thermal Flux",
	source : ["MAH", 60],
	description : "\n   " + " Hit w/eldritch blast/unarmed strike-(bonus)-cast cone of cold/heat metal w/sp.slot" + "\n   " + "Spell must be centered on creature I hit; I have adv on Con saves to maintain concentration on the heat metal spell, as I'm assisted by my patron.",
	action:["bonus action", " (cast a spell*)"],
	spellcastingBonus : {
	    name : "Thermal Flux",
			spells : ["cone of cold", "heat metal"],
	    selection : ["cone of cold", "heat metal"]
	},
	prereqeval : "(/seishin mystic/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 15"
});
AddWarlockInvocation("Thundercrack (prereq: level 15 warlock, the Great Wyrm patron)", {
	name : "Thundercrack",
	source : ["MAH", 60],
	description : "\n   " + "When I deal dmg w/thunderous smite, my target has disadv on its saves vs. it.",
	prereqeval : "(/great wyrm/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 15"
});
AddWarlockInvocation("Tie Breaker (prereq: level 5 warlock, Pact of the Swift)", {
	name : "Tie Breaker",
	source : ["MAH", 60],
	description : "\n   " + "I win all initiative ties.",
	prereqeval : "classes.known.warlock.level >= 5 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the swift') !== -1"
});
//New Pact Boons:
var AddWarlockPactBoon = function(boonName, boonObj) {
	var warInv = ClassList.warlock.features["pact boon"];
	if (!warInv || (warInv.choices.indexOf(boonName) !== -1 && warInv[boonName.toLowerCase()].source && boonObj.source && warInv[boonName.toLowerCase()].source.toSource() === boonObj.source.toSource())) return; // the exact same thing is being added again, so skip it
	var useName = boonName;
	var suffix = 1;
	while (warInv.choices.indexOf(useName) !== -1) {
		suffix += 1;
		useName = boonName + " [" + suffix + "]";
	};
	warInv.choices.push(useName);
	warInv[useName.toLowerCase()] = boonObj;
};
AddWarlockPactBoon("pact of the immaterial", {
	name : "Pact of the Immaterial",
	source : ["MAH", 58],
	description : "\n   " + "(action)-become incorporeal til end of my turn. While incorporeal, I can move through other creatures/objects as if they were difficult terrain. I take 5 (1d10) force damage if I end my turn inside a creature/object and ejected into the nearest empty space",
	usages : ["", "", 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6],
	recovery : "long rest",
	action : ["action", " (become incoporial-end/turn)"]
});
AddWarlockPactBoon("pact of the invoker", {
	name : "Pact of the Invoker",
	source : ["MAH", 58],
	description : "\n   " + "I learn a 1st level wizard spell-counts as warlock spell for me-doesn’t count against my # spells known. I cast the spell once w/o spell slot. 1/long rest-cast spell at higher level by spending a spell slot as normal. @5th lv. I learn an additional invocation, and again @ 11th lv, and @ 17th lv; These invocations don’t count towards my max invocations known",
	usages : 1,
	recovery : "long rest",
	spellcastingBonus : {
		name : "Pact of the Invoker",
		class : "wizard",
		level : [1, 1],
		oncelr : true,
		atwill : true
	},
}),
AddWarlockPactBoon("pact of the swift", {
	name : "Pact of the Swift",
	source : ["MAH", 58],
	description : "\n   " + "My initiative roll always = my Cha score (losing ties, inc vs. Lair Actions)",
	addMod : {
		type : "skill", field : "Init", mod : "Cha-Dex", text : "I use my Charisma modifier for initiative rolls instead of Dexterity."
	},
});

//WIZARD ARCANE TRADITIONS:
//WU JEN
AddSubClass("wizard", "earth-wu jen", {
	regExpSearch : /earth-wu jen/i,
	subname : "Earth-wu jen",
	fullname : "Earth-wu jen",
	source : ["MAH", 61],
	features : {
		"subclassfeature2" : {
			name : "Elemental Earth Mastery",
			source : ["MAH", 61],
			minlevel : 2,
			description : "\n   " + "I have adv on Con saves to maintain concentration.",
			savetxt : {
			    text : ["adv on Con saves to maintain concentration"]
			},
		},
		"subclassfeature2.1" : {
			name : "Linguist",
			source : ["MAH", 61],
			minlevel : 2,
			description : "\n   " + "I know two additional languages of my choice.",
			languageProfs : [2]
		},
		"subclassfeature6" : {
			name : "Elemental Earth Resistance",
			source : ["MAH", 61],
			minlevel : 6,
			description : "\n   " + "I gain resistance to acid damage.",
			dmgres : ["Acid"]
		},
		"subclassfeature6.1" : {
			name : "Watchful Spirit",
			source : ["MAH", 61],
			minlevel : 6,
			description : "\n   " + "I can gain adv on an initiative roll.",
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature10" : {
			name : "Improved Spell Critical",
			source : ["MAH", 61],
			minlevel : 10,
			description : "\n   " + "My spell attacks crit on a roll of 19 or 20.",
			calcChanges : {
				atkAdd : ["if (!isSpell && classes.known.wizard && classes.known.wizard.level > 9 && classes.known.wizard.level < 20 && !CritChance) {var CritChance = 19; fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; }; ", "My spell attacks score a critical on a to hit roll of both 19 and 20."]
			},
		},
		"subclassfeature14" : {
			name : "Elemental Earth Empowerment",
			source : ["MAH", 61],
			minlevel : 14,
			description : "\n   " + "I gain tremor sense 30 ft. I must be in contact w/the ground",
			vision : [["Tremor Sence", 30]]
		},
	},
});
AddSubClass("wizard", "fire-wu jen", {
	regExpSearch : /fire-wu jen/i,
	subname : "Fire-wu jen",
	fullname : "Fire-wu jen",
	source : ["MAH", 61],
	features : {
		"subclassfeature2" : {
			name : "Elemental Fire Mastery",
			source : ["MAH", 61],
			minlevel : 2,
			description : "\n   " + "As a bonus action, I can burn one or more hit dice to regain hp.",
			action : ["bonus action", " (spend HD for HP)"]
		},
		"subclassfeature2.1" : {
			name : "Linguist",
			source : ["MAH", 61],
			minlevel : 2,
			description : "\n   " + "I know two additional languages of my choice.",
			languageProfs : [2]
		},
		"subclassfeature6" : {
			name : "Elemental Fire Resistance",
			source : ["MAH", 61],
			minlevel : 6,
			description : "\n   " + "I gain resistance to fire damage.",
			dmgres : ["Fire"]
		},
		"subclassfeature6.1" : {
			name : "Watchful Spirit",
			source : ["MAH", 61],
			minlevel : 6,
			description : "\n   " + "I can gain adv on an initiative roll.",
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature10" : {
			name : "Improved Spell Critical",
			source : ["MAH", 61],
			minlevel : 10,
			description : "\n   " + "My spell attacks crit on a roll of 19 or 20.",
			calcChanges : {
				atkAdd : ["if (!isSpell && classes.known.wizard && classes.known.wizard.level > 9 && classes.known.wizard.level < 20 && !CritChance) {var CritChance = 19; fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; }; ", "My spell attacks score a critical on a to hit roll of both 19 and 20."]
			},
		},
		"subclassfeature14" : {
			name : "Elemental Fire Empowerment",
			source : ["MAH", 61],
			minlevel : 14,
			description : "\n   " + "When someone casts a fire damaging spell in 60 ft of me" +"\n   " + "(reaction)-try to make sp. blow up in caster’s hands" + "\n   " + "Cha save, or targeted by his own spell" + "\n   " + "Successful save-casting is simply interrupted" + "\n   " + "I auto. sense someone casting a fire sp.-I must pass Arcana check (DC 10 + the spell’s level) to know which sp.",
			usages : 1,
			recovery  : "long rest"
		},
	},
});
AddSubClass("wizard", "metal-wu jen", {
	regExpSearch : /metal-wu jen/i,
	subname : "Metal-wu jen",
	fullname : "Metal-wu jen",
	source : ["MAH", 61],
	features : {
		"subclassfeature2" : {
			name : "Elemental Metal Mastery",
			source : ["MAH", 61],
			minlevel : 2,
			description : "\n   " + "My AC magically increases by 1."
		},
		"subclassfeature2.1" : {
			name : "Linguist",
			source : ["MAH", 61],
			minlevel : 2,
			description : "\n   " + "I know two additional languages of my choice.",
			languageProfs : [2]
		},
		"subclassfeature6" : {
			name : "Elemental Metal Resistance",
			source : ["MAH", 61],
			minlevel : 6,
			description : "\n   " + "I gain resistance to force damage.",
			dmgres : ["Force"]
		},
		"subclassfeature6.1" : {
			name : "Watchful Spirit",
			source : ["MAH", 61],
			minlevel : 6,
			description : "\n   " + "I can gain adv on an initiative roll.",
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature10" : {
			name : "Improved Spell Critical",
			source : ["MAH", 61],
			minlevel : 10,
			description : "\n   " + "My spell attacks crit on a roll of 19 or 20.",
			calcChanges : {
				atkAdd : ["if (!isSpell && classes.known.wizard && classes.known.wizard.level > 9 && classes.known.wizard.level < 20 && !CritChance) {var CritChance = 19; fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; }; ", "My spell attacks score a critical on a to hit roll of both 19 and 20."]
			},
		},
		"subclassfeature14" : {
			name : "Elemental Metal Empowerment",
			source : ["MAH", 61],
			minlevel : 14,
			description : "\n   " + "I'm resistant to bludgeoning, piercing, and slashing damage.",
			dmgres : [["Bludgeoning"], ["Piercing"], ["Slashing"]]
		},
	},
});
AddSubClass("wizard", "water-wu jen", {
	regExpSearch : /water-wu jen/i,
	subname : "Water-wu jen",
	fullname : "Water-wu jen",
	source : ["MAH", 61],
	features : {
		"subclassfeature2" : {
			name : "Elemental Water Mastery",
			source : ["MAH", 61],
			minlevel : 2,
			description : "\n   " + "You gain 2 additional hit points per wizard level.",
			calcChanges : {
				hp : "if (classes.known.wizard) {extrahp += 2*classes.known.wizard.level; extrastring += '\\n + ' + 2*classes.known.wizard.level + ' from Elemental Water Mastery (Wizard)'; }; "
			},
		},
		"subclassfeature2.1" : {
			name : "Linguist",
			source : ["MAH", 61],
			minlevel : 2,
			description : "\n   " + "I know two additional languages of my choice.",
			languageProfs : [2]
		},
		"subclassfeature6" : {
			name : "Elemental Water Resistance",
			source : ["MAH", 61],
			minlevel : 6,
			description : "\n   " + "I gain resistance to cold damage.",
			dmgres : ["Cold"]
		},
		"subclassfeature6.1" : {
			name : "Watchful Spirit",
			source : ["MAH", 61],
			minlevel : 6,
			description : "\n   " + "I can gain adv on an initiative roll.",
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature10" : {
			name : "Improved Spell Critical	",
			source : ["MAH", 61],
			minlevel : 10,
			description : "\n   " + "My spell attacks crit on a roll of 19 or 20.",
			calcChanges : {
				atkAdd : ["if (!isSpell && classes.known.wizard && classes.known.wizard.level > 9 && classes.known.wizard.level < 20 && !CritChance) {var CritChance = 19; fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; }; ", "My spell attacks score a critical on a to hit roll of both 19 and 20."]
			},
		},
		"subclassfeature14" : {
			name : "Elemental Water Empowerment",
			source : ["MAH", 61],
			minlevel : 14,
			description : "\n   " + "(Action or Reaction to taking dmg)-I entomb myself in ice" + "\n   " + "End of each of my turns, I gain temp hp = my Int mod for each wizard level" + "\n   " + "Entombed-(up to 1 year), I'm awake, don’t need food/drink, dont age, can't take actions/reactions-unless to end" + "\n   " + "The effect lasts til I end as an action, or if all temp hp are removed or take fire dmg = Wizard lv.",
			usages : 1,
			recovery : "long rest"
		},
	},
});
AddSubClass("wizard", "wood-wu jen", {
	regExpSearch : /wood-wu jen/i,
	subname : "Wood-wu jen",
	fullname : "Wood-wu jen",
	source : ["MAH", 61],
	features : {
		"subclassfeature2" : {
			name : "Elemental Wood Mastery",
			source : ["MAH", 61],
			minlevel : 2,
			description : "\n   " + "I have adv on saves vs. charm effects, and if given a command while charmed, I can roll a d20 - on a 10 or higher I can ignore the command.",
			savetxt : {
			    adv_vs : ["charmed"]
			},
		},
		"subclassfeature2.1" : {
			name : "Linguist",
			source : ["MAH", 61],
			minlevel : 2,
			description : "\n   " + "I know two additional languages of my choice.",
			languageProfs : [2]
		},
		"subclassfeature6" : {
			name : "Elemental Wood Resistance",
			source : ["MAH", 61],
			minlevel : 6,
			description : "\n   " + "I gain resistance to lightning damage.",
			dmgres : ["Lightning"]
		},
		"subclassfeature6.1" : {
			name : "Watchful Spirit",
			source : ["MAH", 61],
			minlevel : 6,
			description : "\n   " + "I can gain adv on an initiative roll.",
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature10" : {
			name : "Improved Spell Critical",
			source : ["MAH", 61],
			minlevel : 10,
			description : "\n   " + "My spell attacks crit on a roll of 19 or 20.",
			calcChanges : {
				atkAdd : ["if (!isSpell && classes.known.wizard && classes.known.wizard.level > 9 && classes.known.wizard.level < 20 && !CritChance) {var CritChance = 19; fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; }; ", "My spell attacks score a critical on a to hit roll of both 19 and 20."]
			},
		},
		"subclassfeature14" : {
			name : "Elemental Wood Empowerment",
			source : ["MAH", 61],
			minlevel : 14,
			description : "\n   " + "The max amt of dmg I can suffer in a single attack = twice my char lv."
		},
	},
});
//MAHO-TSUKAI - BLOOD images
AddSubClass("wizard", "maho-tsukai blood-mage", {
	regExpSearch : /maho-tsukai blood-mage/i,
	subname : "Maho-Tsukai Blood-Mage",
	fullname : "Maho-Tsukai Blood-Mage",
	source : ["MAH", 62],
	features : {
		"subclassfeature2" : {
			name : "Maho",
			source : ["MAH", 62],
			minlevel : 2,
			description : "\n   " + "I cast my wizard spells with my own life force, instead of spell slot" + "\n   " + "Roll # of d6 = spell’s lv. Me and all creatures in 5 ft of me take necrotic dmg = total" + "\n   " + "When I take dmg from my maho, my hp max is decreased by amt = dmg I took" + "\n   " + "HP reduction lasts til I finish a long rest.",
			savetxt : {
				adv_vs : ["charmed"]
			},
		},
		"subclassfeature2.1" : {
			name : "Initiation-Unholy Vitality",
			source : ["MAH", 62],
			minlevel : 2,
			description : "\n   " + "My hp max inc by 4, and then +2 per lv.",
		},
		"subclassfeature6" : {
			name : "Zealotry-Blood Empowermente",
			source : ["MAH", 62],
			minlevel : 6,
			description : "\n   " + "I empower spells I cast by spending spell slots w/maho, inc spell to a higher lv." + "\n   " + "Example: cast fireball w/3rd lv sp. slot, I then roll 2d6 w/maho feature, to inc spell’s lv. to a 5th lv. spell." + "\n   " + "When casting in this way, I need to supply any material components as you normally would."
		},
		"subclassfeature10" : {
			name : "Maho Mastery",
			source : ["MAH", 62],
			minlevel : 10,
			description : "\n   " + "When I cast a spell w/Maho while one/more hostiles' in 5 ft of me, I can make a Con save (save DC = 10 + spell’s level). Save: I take no dmg from the casting-If I succeed by 5 or more, I regain # hp = 1/2 dmg I would have taken on a failed save. "
		},
		"subclassfeature14" : {
			name : "Mastery-Relentless",
			source : ["MAH", 62],
			minlevel : 14,
			description : "\n   " + "If I drop to 0 hp and don’t die , I can make a DC 10 Con save" + "\n   " + "Save: I drop to 1 hp instead. If dropped to 0 hps from Maho, I have adv on the save" + "\n   " + "When you finish a short or long rest, the DC resets to 10."
		},
	},
});
AddSubClass("wizard", "maho-tsukai blood-magus", {
	regExpSearch : /maho-tsukai blood-magus/i,
	subname : "Maho-Tsukai Blood-Magus",
	fullname : "Maho-Tsukai Blood-Magus",
	source : ["MAH", 62],
	features : {
		"subclassfeature2" : {
			name : "Maho",
			source : ["MAH", 62],
			minlevel : 2,
			description : "\n   " + "I cast my wizard spells with my own life force, instead of spell slot" + "\n   " + "Roll # of d6 = spell’s lv. Me and all creatures in 5 ft of me take necrotic dmg = total" + "\n   " + "When I take dmg from my maho, my hp max is decreased by amt = dmg I took" + "\n   " + "HP reduction lasts til I finish a long rest.",
			savetxt : {
				adv_vs : ["charmed"]
			},
		},
		"subclassfeature2.1" : {
			name : "Initiation-Regeneration.",
			source : ["MAH", 62],
			minlevel : 2,
			description : "\n   " + " At beginning of each of my turns, I gain temp hp = my Con mod (minimum of 1), so long as I have at least 1 hp. Any severed limbs regenerate after a short/long rest."
		},
		"subclassfeature6" : {
			name : "Zealotry-Blood Empowermente",
			source : ["MAH", 62],
			minlevel : 6,
			description : "\n   " + "I add my Int mod to my melee attack/damage rolls; attacks count as magical"
		},
		"subclassfeature10" : {
			name : "Maho Mastery",
			source : ["MAH", 62],
			minlevel : 10,
			description : "\n   " + "When I cast a spell w/Maho while one/more hostiles' in 5 ft of me, I can make a Con save (save DC = 10 + spell’s level). Save: I take no dmg from the casting-If I succeed by 5 or more, I regain # hp = 1/2 dmg I would have taken on a failed save. "
		},
		"subclassfeature14" : {
			name : "Mastery-Necrotic Strikes",
			source : ["MAH", 62],
			minlevel : 14,
			description : "\n   " + "My melee wpn atk's deal extra 2d8 necrotic dmg, and regain hp = nec dmg dealt."
		},
	},
});
AddSubClass("wizard", "maho-tsukai blood-necromancer", {
	regExpSearch : /maho-tsukai blood-necromancer/i,
	subname : "Maho-Tsukai Blood-Necromancer",
	fullname : "Maho-Tsukai Blood-Necromancer",
	source : ["MAH", 62],
	features : {
		"subclassfeature2" : {
			name : "Maho",
			source : ["MAH", 62],
			minlevel : 2,
			description : "\n   " + "I cast my wizard spells with my own life force, instead of spell slot" + "\n   " + "Roll # of d6 = spell’s lv. Me and all creatures in 5 ft of me take necrotic dmg = total" + "\n   " + "When I take dmg from my maho, my hp max is decreased by amt = dmg I took" + "\n   " + "HP reduction lasts til I finish a long rest.",
			savetxt : {
				adv_vs : ["charmed"]
			},
		},
		"subclassfeature2.1" : {
			name : "Initiation-Grim Harvest",
			source : ["MAH", 62],
			minlevel : 2,
			description : "\n   " + "Once per turn, when I kill one/more creatures w/spell of 1st lv/higher, I regain hip = twice the spell’s lv, or three times its lv if the spell belongs to the School of Necromancy" + "\n   " + "I don’t gain this benefit for killing constructs or undead."
		},
		"subclassfeature6" : {
			name : "Zealotry-Undead Thralls",
			source : ["MAH", 62],
			minlevel : 6,
			description : "\n   " + "I add the animate dead spell to my spellbook if it is not there already" + "\n   " + "When I cast animate dead, I can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate" + "\n   " + "When I create an undead using a necromancy spell, it has additional benefits:" + "\n   " + "• The creature’s hp max is inc by an amt = my wizard level" + "\n   " + "• The creature adds my prof bonus to its weapon damage rolls",
			spellcastingBonus : {
				name : "Zealotry-Undead Thralls",
				spells : ["animate dead"],
				selection : ["animate dead"]
			},
		},
		"subclassfeature10" : {
			name : "Maho Mastery",
			source : ["MAH", 62],
			minlevel : 10,
			description : "\n   " + "When I cast a spell w/Maho while one/more hostiles' in 5 ft of me, I can make a Con save (save DC = 10 + spell’s level). Save: I take no dmg from the casting-If I succeed by 5 or more, I regain # hp = 1/2 dmg I would have taken on a failed save. "
		},
		"subclassfeature14" : {
			name : "Mastery-Conjure Plasmin",
			source : ["MAH", 62],
			minlevel : 14,
			description : "\n   " + "(bonus)-conjure a plasmin-Must be able to see a creature at 0 hp in 30 ft of me" + "\n   " + "The plasmin appears in the target creature’s space, and acts on my turn. As the target creature is drained of all its remaining blood, it can't be brought back to life through any means other than a true resurrection or wish spell. I can't conjure a plasmin from constructs/oozes/undeads/other creatures that don’t have blood" + "\n   " + "Plasmin is destroyed if ever further than 100 ft from me. When it dies, it splashes to the ground and turns into black, coagulated blood.",
			action : ["bonus action", " (conjurs Plasmin)"]
		},
	},
});

//RACES OF THE ORIENT
//ORIENTAL CLANSMAN - HUMANS OF THE ORIENT:

RaceList["chickadee clansman"] = {
	regExpSearch : /chickadee clansman/i,
	name : "Chickadee Clansman",
	sortname : "Clansman, Chickadee",
	source : ["MAH", 37],
	plural : "Chickadee Clansmans",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Oriental"],
	savetxt : "Adv. vs. Magic (Int, Wis, Cha)",
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Human: +1 Dexterity, Two ability scores of my choice increase by +1;",
	scores : [0, 1, 0, 0, 0, 0],
	trait : "Human (+1 Dexterity, Two ability scores of my choice increase by 1)"
};
RaceList["crawdad clansman"] = {
	regExpSearch : /crawdad clansman/i,
	name : "Crawdad Clansman",
	sortname : "Clansman, Crawdad",
	source : ["MAH", 37],
	plural : "Crawdad Clansmans",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Oriental"],
	weaponprofs : [false, false, ["one martial weapon of your choice"]],
	armor : [true, true, false, false],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Crawdad Clansman: +1 Constitution, Two ability scores of my choice increase by 1;",
	scores : [0, 0, 1, 0, 0, 0],
	trait : "Crawdad Clansman (+1 Constitution, Two ability scores of my choice increase by 1)\n\nCrawdad Endurance: My hit point maximum increases by 1 for every level I have\nHonor of the Great Clans: You gain advantage on a Charisma or Honor saving throw. Once you use this feature, you must finish a long rest before you can do so again.",
	features : {
		"crawdad endurance" : {
			name : "Crawdad Endurance",
			minlevel : 1,
			calcChanges : {
				hp : "extrahp += totalhd; extrastring += \"\\n + \" + totalhd + \" from Dwarven Toughness\";"
			},
		},
	},
};
RaceList["damselfly clansman"] = {
	regExpSearch : /damselfly clansman/i,
	name : "Damselfly Clansman",
	sortname : "Clansman, Damselfly",
	source : ["MAH", 37],
	plural : "Damselfly Clansmans",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Oriental"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Damselfly Clansman: +2 to two ability scores of my choice;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Damselfly Clansman (+2 to two ability scores of my choice)\nDark Legacy: Whenever you make a Charisma (persuasion) check to convince others who you are (or who you aren’t!), you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply"
};
RaceList["viper clansman"] = {
	regExpSearch : /viper clansman/i,
	name : "Viper Clansman",
	sortname : "Clansman, Viper",
	source : ["MAH", 37],
	plural : "Viper Clansmans",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Oriental"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Viper Clansman: +2 to two ability scores of my choice;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Viper Clansman (+2 to two ability scores of my choice)\nDark Legacy: Whenever you make a Charisma (persuasion) check to convince others who you are (or who you aren’t!), you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply"
};
RaceList["heron clansman"] = {
	regExpSearch : /heron clansman/i,
	name : "Heron Clansman",
	sortname : "Clansman, Heron",
	source : ["MAH", 37],
	plural : "Heron Clansmans",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Oriental"],
	weaponprofs : [false, false, ["hankyu shortbow", "daikyu longbow"]],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Heron Clansman: +1 Dexterity, +1 to two ability scores of my choice;",
	scores : [0, 1, 0, 0, 0, 0],
	trait : "Heron Clansman (+1 Dexterity, +1 to two ability scores of my choice)\nHonor of the Great Clans. You gain advantage on a Charisma or Honor saving throw. Once you use this feature, you must finish a long rest before you can do so again."
};
RaceList["pegasus clansman"] = {
	regExpSearch : /pegasus clansman/i,
	name : "Pegasus Clansman",
	sortname : "Clansman, Pegasus",
	source : ["MAH", 37],
	plural : "Pegasus Clansmans",
	size : 3,
	speed : { walk : { spd : 35, enc : 25 } },
	languageProfs : ["Oriental"],
	weaponprofs : [false, false, ["hankyu shortbow", "daikyu longbow"]],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Pegasus Clansman: +1 to two ability scores of my choice;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Pegasus Clansman (+1 to two ability scores of my choice)\nMounted Combatant: I gain the Mounted Combatant feat as described in the PHB\nHonor of the Great Clans: I gain advantage on a Charisma or Honor saving throw. Once I use this feature, I must finish a long rest before I can do so again.",
	eval : "Value('Feat Name 1', 'Mounted Combatant');",
	removeeval : "Value('Feat Name 1', '');"
};
RaceList["phoenix clansman"] = {
	regExpSearch : /phoenix clansman/i,
	name : "Phoenix Clansman",
	sortname : "Clansman, Phoenix",
	source : ["MAH", 37],
	plural : "Phoenix Clansmans",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Oriental"],
	savetxt : {
		adv_vs : ["charmed"]
	},
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Phoenix Clansman: +1 Charisma, +1 to two ability scores of my choice;",
	scores : [0, 0, 0, 0, 0, 1],
	trait : "Phoenix Clansman (+1 Charisma, +1 to two ability scores of my choice)\nHonor of the Great Clans. You gain advantage on a Charisma or Honor saving throw. Once you use this feature, you must finish a long rest before you can do so again.\nInner Fire: You gain temporary hit points equal to half your character level (rounded up), whenever you succeed a Wisdom, Intelligence, or Charisma saving throw against a spell cast by a hostile creature that you can see"
};
RaceList["rabbit clansman"] = {
	regExpSearch : /rabbit clansman/i,
	name : "Rabbit Clansman",
	sortname : "Clansman, Rabbit",
	source : ["MAH", 37],
	plural : "Rabbit Clansmans",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Oriental"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Rabbit Clansman: +1 Strength or Dexterity, +1 to two ability scores of my choice;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Rabbit Clansman (+1 Strength or Dexterity, +1 to two ability scores of my choice)\nForest Born: Difficult terrain caused by plants doesn’t slow my movement.\nSmall Build: I count as one size smaller for the purpose of determining cover.\nSpeak with Small Beasts: Through sounds and gestures, I can communicate simple ideas with Small or smaller beasts."
};
RaceList["rhino clansman"] = {
	regExpSearch : /rhino clansman/i,
	name : "Rhino Clansman",
	sortname : "Clansman, Rhino",
	source : ["MAH", 37],
	plural : "Rhino Clansmans",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	toolProfs : [["Smith’s Tools", 1], ["Climber’s Kit", "Dex"]],
	languageProfs : ["Oriental"],
	weaponprofs : [false, false, ["one martial weapon of my choice"]],
	armor : [true, true, false, false],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Rhino Clansman: +1 Constitution, +1 to two ability scores of my choice;",
	scores : [0, 0, 2, 0, 0, 0],
	trait : "Rhino Clansman (+1 Constitution, +1 to two ability scores of my choice)\nSpeak with Rhinoceroses: Through sounds and gestures, you can communicate simple ideas with rhinos."
};
RaceList["scorpionfly clansman"] = {
	regExpSearch : /scorpionfly clansman/i,
	name : "Scorpionfly Clansman",
	sortname : "Clansman, Scorpionfly",
	source : ["MAH", 37],
	plural : "Scorpionfly Clansmans",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	skillstxt : "I gain proficiency in one skill of my choice",
	languageProfs : ["Oriental"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Scorpionfly Clansman: +1 Constitution or Dexterity, +1 to two ability scores of my choice;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Scorpionfly Clansman (+1 Constitution or Dexterity, +1 to two ability scores of my choice) You gain advantage on a Dexterity saving throw. Once you use this feature, you must finish a long rest before you can do so again.\nSeafarer’s Endurance: When you would suffer a level of exhaustion due to strenuous activity or malnutrition, you can sacrifice a hit die to not suffer exhaustion. Once you use this feature, you cannot do so again until you finish a long rest."
};
RaceList["spider clansman"] = {
	regExpSearch : /spider clansman/i,
	name : "Spider Clansman",
	sortname : "Clansman, Spider",
	source : ["MAH", 37],
	plural : "Spider Clansmans",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	skillstxt : "I gain proficiency in two skills of my choice",
	languageProfs : ["Oriental"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Spider Clansman: +2 Dexterity, Neither of the ability scores you chose as human can be Dexterity; +1 to two ability scores of my choice;",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Spider Clansman (+2 Dexterity,Neither of the ability scores you chose as human can be Dexterity, +1 to two ability scores of my choice)\nHonor of the Great Clans: You gain advantage on a Charisma or Honor saving throw. Once you use this feature, you must finish a long rest before you can do so again."
};
RaceList["tiger clansman"] = {
	regExpSearch : /tiger clansman/i,
	name : "Tiger Clansman",
	sortname : "Clansman, Tiger",
	source : ["MAH", 37],
	plural : "Tiger Clansmans",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Oriental"],
	weaponprofs : [false, false, ["kamayari halberd", "naginata glaive", "nodachi greatsword"]],
	armor : [true, false, false, false],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Tiger Clansman: +1 Strength, +1 to two ability scores of my choice;",
	scores : [1, 0, 0, 0, 0, 0],
	trait : "Tiger Clansman (+1 Strength, +1 to two ability scores of my choice)\nHistorian’s Lore: Whenever you make an Intelligence (history) check related to the Clans or Lands of the Orient, you can add twice your proficiency bonus, instead of any proficiency bonus you would normally apply\nHonor of the Great Clans: You gain advantage on a Charisma or Honor saving throw. Once you use this feature, you must finish a long rest before you can do so again.\nTiger Endurance: When you take damage, you can use your reaction to roll a d12. Add your constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can’t use it again until you finish a short or long rest. Speak with Tigers: Through sounds and gestures, you can communicate imple ideas with tigers"
};
RaceList["unaffiliated clansman"] = {
	regExpSearch : /unaffiliated clansman/i,
	name : "Unaffiliated Clansman",
	sortname : "Clansman, Unaffiliated",
	source : ["MAH", 37],
	plural : "Unaffiliated Clansmans",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Oriental", "plus one other skill"],
	skillstxt : "I gain proficiency in one skill of my choice",
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Unaffiliated Clansman: +2 to two ability scores of my choice;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Unaffiliated Clansman (+2 to two ability scores of my choice)"
};
RaceList["weasel clansman"] = {
	regExpSearch : /weasel clansman/i,
	name : "Weasel Clansman",
	sortname : "Clansman, Weasel",
	source : ["MAH", 37],
	plural : "Weasel Clansmans",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Oriental", "plus one other skill"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Weasel Clansman: +1 Dexterirt or Intelligence, +1 to two ability scores of my choice;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Weasel Clansman (+1 Dexterirt or Intelligence, +1 to two ability scores of my choice)\nMask of the Wild: You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena. One Eye Open: For the first two hours, whenever you sleep, you can remain aware of your surroundings"
};
RaceList["wolf clansman"] = {
	regExpSearch : /wolf clansman/i,
	name : "Wolf Clansman",
	sortname : "Clansman, Wolf",
	source : ["MAH", 37],
	plural : "Wolf Clansmans",
	size : 3,
	speed : { walk : { spd : 35, enc : 25 } },
	languageProfs : ["Oriental", "plus one other skill"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Wolf Clansman: +2 to two ability scores of my choice;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Wolf Clansman (+2 to two ability scores of my choice)"
};
RaceList["wyvern clansman"] = {
	regExpSearch : /wyvern clansman/i,
	name : "Wyvern Clansman",
	sortname : "Clansman, Wyvern",
	source : ["MAH", 37],
	plural : "Wyvern Clansmans",
	size : 3,
	speed : { walk : { spd : 35, enc : 25 } },
	languageProfs : ["Oriental", "plus one other skill"],
	skills : ["Perception"],
	toolProfs : ["Smith’s Tools", 1],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Wyvern Clansman: +2 Wisdom, Neither of the ability scores you chose as human can be Wisdom; +1 to two ability scores of my choice;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Wyvern Clansman (+2 Wisdom, Neither of the ability scores you chose as human can be Wisdom; +1 to two ability scores of my choice)\nHonor of the Great Clans: You gain advantage on a Charisma or Honor saving throw. Once you use this feature, you must finish a long rest before you can do so again"
};
//NEZUMI - RATFOLK OF THE ORIENT
RaceList["cotton ratling"] = {
	regExpSearch : /^(?!.*cotton)(?!.*ratling)(?=.*nezumi).*$/i,
	name : "Nezumi",
	sortname : "Ratling, Cotton (Nezumi)",
	source : ["MAH", 33],
	plural : "Nezumi",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Common", "Nezumi"],
	vision : "Darkvision 60 ft",
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	weapons : ["claws"],
	weaponprofs : [false, false, ["claws"]],
	skills : ["Survival"],
	age : " Nezumi reach maturity around age 5. Compared to humans, nezumi usually don’t live longer than 40 years.",
	improvements : "Drow: +2 Constitution, +1 Charisma;",
	scores : [0, 0, 2, 0, 0, 1],
	trait : "Nezumi (+2 Constitution, +1 Charisma)\nKeen Smell: You have advantage on Wisdom (Perception) checks that rely on smell.\nTaint Immunity: Your Taint score cannot increase above 0, and you are immune to all Taint effects.\nClaws: You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit.",
	features : {
		"claws" : {
			name : "Claws",
			minlevel : 1,
			calcChanges : {
				atkAdd : ["if ((/unarmed strike/i).test(WeaponName)) { fields.Damage_Type = 'slashing'; if (fields.Damage_Die == 1) {fields.Damage_Die = '1d4'; }; }; ", "I have claws, which cause my unarmed strikes to deal 1d4 slashing damage."]
			}
		}
	}
};
RaceList["dusky ratling"] = {
	regExpSearch : /^(?!.*dusky)(?!.*ratling)(?=.*nezumi).*$/i,
	name : "Nezumi",
	sortname : "Ratling, Dusky (Nezumi)",
	source : ["MAH", 33],
	plural : "Nezumi",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Common", "Nezumi"],
	vision : "Darkvision 60 ft",
	weapons : ["claws"],
	weaponprofs : [false, false, ["claws"]],
	skills : ["Survival"],
	age : " Nezumi reach maturity around age 5. Compared to humans, nezumi usually don’t live longer than 40 years.",
	improvements : "Drow: +2 Constitution, +1 Dexterity;",
	scores : [0, 1, 2, 0, 0, 0],
	trait : "Nezumi (+2 Constitution, +1 Dexterity)\nKeen Smell: You have advantage on Wisdom (Perception) checks that rely on smell.\nTaint Immunity: Your Taint score cannot increase above 0, and you are immune to all Taint effects.\nClaws: You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit\nAt Home in the Shadows: You have advantage on Dexterity (stealth) checks in dim light or darkness",
	features : {
		"claws" : {
			name : "Claws",
			minlevel : 1,
			calcChanges : {
				atkAdd : ["if ((/unarmed strike/i).test(WeaponName)) { fields.Damage_Type = 'slashing'; if (fields.Damage_Die == 1) {fields.Damage_Die = '1d4'; }; }; ", "I have claws, which cause my unarmed strikes to deal 1d4 slashing damage."]
			}
		}
	}
};
RaceList["pale ratling"] = {
	regExpSearch : /^(?!.*pale)(?!.*ratling)(?=.*nezumi).*$/i,
	name : "Nezumi",
	sortname : "Ratling, Pale (Nezumi)",
	source : ["MAH", 33],
	plural : "Nezumi",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Common", "Nezumi"],
	vision : "Darkvision 120 ft",
	weapons : ["claws"],
	weaponprofs : [false, false, ["claws"]],
	skills : ["Survival"],
	age : " Nezumi reach maturity around age 5. Compared to humans, nezumi usually don’t live longer than 40 years.",
	improvements : "Drow: +2 Constitution, +1 Strength;",
	scores : [1, 0, 2, 0, 0, 0],
	trait : "Nezumi (+2 Constitution, +1 Strength)\nKeen Smell: You have advantage on Wisdom (Perception) checks that rely on smell.\nTaint Immunity: Your Taint score cannot increase above 0, and you are immune to all Taint effects.\nClaws: You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit\nSunlight Sensitivity: You have disadvantage on attack rolls and Wisdom (perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
	features : {
		"claws" : {
			name : "Claws",
			minlevel : 1,
			calcChanges : {
				atkAdd : ["if ((/unarmed strike/i).test(WeaponName)) { fields.Damage_Type = 'slashing'; if (fields.Damage_Die == 1) {fields.Damage_Die = '1d4'; }; }; ", "I have claws, which cause my unarmed strikes to deal 1d4 slashing damage."]
			}
		}
	}
};
//HENGEYOKI - "YOKAI"
RaceList["badger hengeyokai"] = {
	regExpSearch : /^(?=.*(badger))(?=.*\hengeyokai?\b).*$/i,
	name : "Badger Hengeyokai",
	sortname : "Hengeyokai, Badger",
	source : ["MAH", 34],
	plural : "Badger Hengeyokai",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Common", "Hengeyokai"],
	vision : "Darkvision 60 ft",
	savetxt : "Adv. on Wisdom (insight) checks to tell if I'm being lied to.",
	skills : ["Stealth"],
	age : " Hengeyokai reach adulthood around age 40 and are relatively long lived, often living past 400 years",
	height : " range from under 5 to over 6 feet tall and have slender builds (4'6\" + 2d10\")",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	improvements : "Badger Hengeyokai: +1 Dexterity, +2 Strength;",
	scores : [2, 1, 0, 0, 0, 0],
	features : {
		"shapechanger" : {
			name : "Shapechanger",
			minlevel : 1,
			action : ["action", " (change to badger, human, or hybrid)"],
		}
	},
	trait : "Badger Hengeyokai (+1 Dexterity, +2 Strengthe)\nShapechanger: Hengeyokai can change into an animal, human form, or hybrid form. The animal type depends on your subrace. My abilities, Str/Dex/Con scores change, but Int/Wis/Cha scores stay the same. In hybrid form I look like my animal in humanoid form; Bonus action to revert early; Lasts a # of hours = 1/2 your level (min 1 hour)\nAnimal Statistics: Badger"
};
RaceList["cat hengeyokai"] = {
	regExpSearch : /^(?=.*(cat))(?=.*\hengeyokai?\b).*$/i,
	name : "Cat Hengeyokai",
	sortname : "Hengeyokai, Cat",
	source : ["MAH", 34],
	plural : "Cat Hengeyokai",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Common", "Hengeyokai"],
	vision : "Darkvision 60 ft",
	savetxt : "Adv. on Wisdom (insight) checks to tell if I'm being lied to.",
	skills : ["Stealth"],
	age : " Hengeyokai reach adulthood around age 40 and are relatively long lived, often living past 400 years",
	height : " range from under 5 to over 6 feet tall and have slender builds (4'6\" + 2d10\")",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	improvements : "Cat Hengeyokai: +2 Dexterity, +1 Wisdon;",
	scores : [0, 2, 0, 0, 1, 0],
	features : {
		"shapechanger" : {
			name : "Shapechanger",
			minlevel : 1,
			action : ["action", " (change to cat , human, or hybrid)"],
		}
	},
	trait : "Cat Hengeyokai (+2 Dexterity, +1 Wisdon)\nShapechanger: Hengeyokai can change into an animal, human form, or hybrid form. The animal type depends on your subrace. My abilities, Str/Dex/Con scores change, but Int/Wis/Cha scores stay the same. In hybrid form I look like my animal in humanoid form; Bonus action to revert early; Lasts a # of hours = 1/2 your level (min 1 hour)\nAnimal Statistics: Cat"
};
RaceList["crawdad hengeyokai"] = {
	regExpSearch : /^(?=.*(crawdad))(?=.*\hengeyokai?\b).*$/i,
	name : "Crawdad Hengeyokai",
	sortname : "Hengeyokai, Crawdad",
	source : ["MAH", 34],
	plural : "Crawdad Hengeyokai",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Common", "Hengeyokai"],
	vision : "Darkvision 60 ft",
	savetxt : "Adv. on Wisdom (insight) checks to tell if I'm being lied to.",
	skills : ["Stealth"],
	age : " Hengeyokai reach adulthood around age 40 and are relatively long lived, often living past 400 years",
	height : " range from under 5 to over 6 feet tall and have slender builds (4'6\" + 2d10\")",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	improvements : "Crawdad Hengeyokai: +1 Dexterity, +2 Constitution;",
	scores : [0, 1, 2, 0, 0, 0],
	features : {
		"shapechanger" : {
			name : "Shapechanger",
			minlevel : 1,
			action : ["action", " (change to crab, human, or hybrid)"],
		}
	},
	trait : "Crawdad Hengeyokai (+1 Dexterity, +2 Constitution)\nShapechanger: Hengeyokai can change into an animal, human form, or hybrid form. The animal type depends on your subrace. My abilities, Str/Dex/Con scores change, but Int/Wis/Cha scores stay the same. In hybrid form I look like my animal in humanoid form; Bonus action to revert early; Lasts a # of hours = 1/2 your level (min 1 hour)\nAnimal Statistics: Crawdad"
};
RaceList["heron hengeyokai"] = {
	regExpSearch : /^(?=.*(heron))(?=.*\hengeyokai?\b).*$/i,
	name : "Heron Hengeyokai",
	sortname : "Hengeyokai, Heron",
	source : ["MAH", 34],
	plural : "Heron Hengeyokai",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Common", "Hengeyokai"],
	vision : "Darkvision 60 ft",
	savetxt : "Adv. on Wisdom (insight) checks to tell if I'm being lied to.",
	skills : ["Stealth"],
	age : " Hengeyokai reach adulthood around age 40 and are relatively long lived, often living past 400 years",
	height : " range from under 5 to over 6 feet tall and have slender builds (4'6\" + 2d10\")",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	improvements : "Heron Hengeyokai: +1 Dexterity, +2 Wisdon;",
	scores : [0, 1, 0, 0, 2, 0],
	features : {
		"shapechanger" : {
			name : "Shapechanger",
			minlevel : 1,
			action : ["action", " (change to heron, human, or hybrid)"],
		}
	},
	trait : "Heron Hengeyokai (+1 Dexterity, +2 Wisdon)\nShapechanger: Hengeyokai can change into an animal, human form, or hybrid form. The animal type depends on your subrace. My abilities, Str/Dex/Con scores change, but Int/Wis/Cha scores stay the same. In hybrid form I look like my animal in humanoid form; Bonus action to revert early; Lasts a # of hours = 1/2 your level (min 1 hour)\nAnimal Statistics: Heron"
};
RaceList["fox hengeyokai"] = {
	regExpSearch : /^(?=.*(fox))(?=.*\hengeyokai?\b).*$/i,
	name : "Fox Hengeyokai",
	sortname : "Hengeyokai, Fox",
	source : ["MAH", 34],
	plural : "Fox Hengeyokai",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Common", "Hengeyokai"],
	vision : "Darkvision 60 ft",
	savetxt : "Adv. on Wisdom (insight) checks to tell if I'm being lied to.",
	skills : ["Stealth"],
	age : " Hengeyokai reach adulthood around age 40 and are relatively long lived, often living past 400 years",
	height : " range from under 5 to over 6 feet tall and have slender builds (4'6\" + 2d10\")",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	improvements : "Fox Hengeyokai: +1 Dexterity, +1 Intelligence, +1 to one other ability scores of my choice;",
	scores : [0, 1, 0, 0, 1, 0],
	features : {
		"shapechanger" : {
			name : "Shapechanger",
			minlevel : 1,
			action : ["action", " (change to jackal, human, or hybrid)"],
		}
	},
	trait : "Fox Hengeyokai (+1 Dexterity, +1 Intelligence, +1 to one other ability scores of my choice)\nShapechanger: Hengeyokai can change into an animal, human form, or hybrid form. The animal type depends on your subrace. My abilities, Str/Dex/Con scores change, but Int/Wis/Cha scores stay the same. In hybrid form I look like my animal in humanoid form; Bonus action to revert early; Lasts a # of hours = 1/2 your level (min 1 hour)\nAnimal Statistics: Fox"
};
RaceList["hare hengeyokai"] = {
	regExpSearch : /^(?=.*(hare))(?=.*\hengeyokai?\b).*$/i,
	name : "Hare Hengeyokai",
	sortname : "Hengeyokai, Hare",
	source : ["MAH", 34],
	plural : "Hare Hengeyokai",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Common", "Hengeyokai"],
	vision : "Darkvision 60 ft",
	savetxt : "Adv. on Wisdom (insight) checks to tell if I'm being lied to.",
	skills : ["Stealth"],
	age : " Hengeyokai reach adulthood around age 40 and are relatively long lived, often living past 400 years",
	height : " range from under 5 to over 6 feet tall and have slender builds (4'6\" + 2d10\")",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	improvements : "Hare Hengeyokai: +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1],
	features : {
		"shapechanger" : {
			name : "Shapechanger",
			minlevel : 1,
			action : ["action", " (change to weasel, human, or hybrid)"],
		}
	},
	trait : "Hare Hengeyokai (+2 Dexterity, +1 Charisma)\nShapechanger: Hengeyokai can change into an animal, human form, or hybrid form. The animal type depends on your subrace. My abilities, Str/Dex/Con scores change, but Int/Wis/Cha scores stay the same. In hybrid form I look like my animal in humanoid form; Bonus action to revert early; Lasts a # of hours = 1/2 your level (min 1 hour)\nAnimal Statistics: Hare"
};
RaceList["sparrow hengeyokai"] = {
	regExpSearch : /^(?=.*(sparrow))(?=.*\hengeyokai?\b).*$/i,
	name : "Sparrow Hengeyokai",
	sortname : "Hengeyokai, Sparrow",
	source : ["MAH", 34],
	plural : "Sparrow Hengeyokai",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Common", "Hengeyokai"],
	vision : "Darkvision 60 ft",
	savetxt : "Adv. on Wisdom (insight) checks to tell if I'm being lied to.",
	skills : ["Stealth"],
	age : " Hengeyokai reach adulthood around age 40 and are relatively long lived, often living past 400 years",
	height : " range from under 5 to over 6 feet tall and have slender builds (4'6\" + 2d10\")",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	improvements : "Sparrow Hengeyokai: +1 Dexterity, +2 Charisma;",
	scores : [0, 1, 0, 0, 0, 2],
	features : {
		"shapechanger" : {
			name : "Shapechanger",
			minlevel : 1,
			action : ["action", " (change to chickadee, human, or hybrid)"],
		}
	},
	trait : "Sparrow Hengeyokai (+1 Dexterity, +2 Charisma)\nShapechanger: Hengeyokai can change into an animal, human form, or hybrid form. The animal type depends on your subrace. My abilities, Str/Dex/Con scores change, but Int/Wis/Cha scores stay the same. In hybrid form I look like my animal in humanoid form; Bonus action to revert early; Lasts a # of hours = 1/2 your level (min 1 hour)\nAnimal Statistics: Sparrow"
};
RaceList["spider hengeyokai"] = {
	regExpSearch : /^(?=.*(spider))(?=.*\hengeyokai?\b).*$/i,
	name : "Spider Hengeyokai",
	sortname : "Hengeyokai, Spider",
	source : ["MAH", 34],
	plural : "Spider Hengeyokai",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Common", "Hengeyokai"],
	vision : "Darkvision 60 ft",
	savetxt : "Adv. on Wisdom (insight) checks to tell if I'm being lied to.",
	skills : ["Stealth"],
	age : " Hengeyokai reach adulthood around age 40 and are relatively long lived, often living past 400 years",
	height : " range from under 5 to over 6 feet tall and have slender builds (4'6\" + 2d10\")",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	improvements : "Spider Hengeyokai: +1 Dexterity, +1 to two ability scores of your choice;",
	scores : [0, 1, 0, 0, 0, 0],
	features : {
		"shapechanger" : {
			name : "Shapechanger",
			minlevel : 1,
			action : ["action", " (change to spider, human, or hybrid)"],
		}
	},
	trait : "Spider Hengeyokai (+1 Dexterity, +1 to two ability scores of your choice)\nShapechanger: Hengeyokai can change into an animal, human form, or hybrid form. The animal type depends on your subrace. My abilities, Str/Dex/Con scores change, but Int/Wis/Cha scores stay the same. In hybrid form I look like my animal in humanoid form; Bonus action to revert early; Lasts a # of hours = 1/2 your level (min 1 hour)\nAnimal Statistics: Spider"
};
RaceList["viper hengeyokai"] = {
	regExpSearch : /^(?=.*(viper))(?=.*\hengeyokai?\b).*$/i,
	name : "Viper Hengeyokai",
	sortname : "Hengeyokai, Viper",
	source : ["MAH", 34],
	plural : "Viper Hengeyokai",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Common", "Hengeyokai"],
	vision : "Darkvision 60 ft",
	savetxt : "Adv. on Wisdom (insight) checks to tell if I'm being lied to.",
	skills : ["Stealth"],
	age : " Hengeyokai reach adulthood around age 40 and are relatively long lived, often living past 400 years",
	height : " range from under 5 to over 6 feet tall and have slender builds (4'6\" + 2d10\")",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	improvements : "Viper Hengeyokai: +2 Dexterity, +1 to one other ability score of your choice;",
	scores : [0, 2, 0, 0, 0, 0],
	features : {
		"shapechanger" : {
			name : "Shapechanger",
			minlevel : 1,
			action : ["action", " (change to poisonous snake, human, or hybrid)"],
		}
	},
	trait : "Viper Hengeyokai (+2 Dexterity, +1 to one other ability score of your choice)\nShapechanger: Hengeyokai can change into an animal, human form, or hybrid form. The animal type depends on your subrace. My abilities, Str/Dex/Con scores change, but Int/Wis/Cha scores stay the same. In hybrid form I look like my animal in humanoid form; Bonus action to revert early; Lasts a # of hours = 1/2 your level (min 1 hour)\nAnimal Statistics: Viper"
};
RaceList["wolf hengeyokai"] = {
	regExpSearch : /^(?=.*(wolf))(?=.*\hengeyokai?\b).*$/i,
	name : "Wolf Hengeyokai",
	sortname : "Hengeyokai, Wolf",
	source : ["MAH", 34],
	plural : "Wolf Hengeyokai",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Common", "Hengeyokai"],
	vision : "Darkvision 60 ft",
	savetxt : "Adv. on Wisdom (insight) checks to tell if I'm being lied to.",
	skills : ["Stealth"],
	age : " Hengeyokai reach adulthood around age 40 and are relatively long lived, often living past 400 years",
	height : " range from under 5 to over 6 feet tall and have slender builds (4'6\" + 2d10\")",		heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	improvements : "Wolf Hengeyokai: +2 Dexterity, +1 Strength;",
	scores : [1, 2, 0, 0, 0, 0],
	features : {
		"shapechanger" : {
			name : "Shapechanger",
			minlevel : 1,
			action : ["action", " (change to wolf, human, or hybrid)"],
		}
	},
	trait : "Wolf Hengeyokai (+2 Dexterity, +1 Strength)\nShapechanger: Hengeyokai can change into an animal, human form, or hybrid form. The animal type depends on your subrace. My abilities, Str/Dex/Con scores change, but Int/Wis/Cha scores stay the same. In hybrid form I look like my animal in humanoid form; Bonus action to revert early; Lasts a # of hours = 1/2 your level (min 1 hour)\nAnimal Statistics: Wolf"
};
//SPIRITFOLK
RaceList["bamboo spirit folk"] = {
	regExpSearch : /^(?=.*(spirit folk))(?=.*\bbamboo?\b).*$/i,
	name : "Bamboo Spirit Folk",
	sortname : "Spirit Folk, Bamboo",
	source : ["MAH", 35],
	plural : "Bamboo Spirit Folk",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Oriental", "Kami"],
	vision : "Spirit Sight",
	age : " reach adulthood at roghly 110 years old and live between 600 and 700 years.",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Bamboo Spirit Folk: +1 Intelligence, +1 Charisma;",
	scores : [0, 0, 0, 1, 0, 1],
	trait : "Bamboo Spirit Folk (+1 Intelligence, +1 Charisma)\nSpirit Sight: You can see in dim light as if it were bright light, and in darkness as if it were dim light, and you can see into the ethereal plane, all within 30 feet of you. You can discern color in darkness.\nVanish in the Woods: You can take the Hide action while only lightly obscured if you are in a forest or jungle.\nAnimalistic: You can cast speak with animals at will as a ritual",
};
RaceList["mountain spirit folk"] = {
	regExpSearch : /^(?=.*(spirit folk))(?=.*\bmountain?\b).*$/i,
	name : "Mountain Spirit Folk",
	sortname : "Spirit Folk, Mountain",
	source : ["MAH", 35],
	plural : "Mountain Spirit Folk",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Oriental", "Kami"],
	vision : "Spirit Sight",
	savetxt : "Adv. on Constitution saving throws against spells",
	age : " reach adulthood at roughly 110 years old and live between 600 and 700 years.",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Mountain Spirit Folk: +1 Intelligence, +1 Constitution;",
	scores : [0, 0, 1, 1, 0, 0],
	trait : "Mountain Spirit Folk (+1 Intelligence, +1 Constitution)\nSpirit Sight: You can see in dim light as if it were bright light, and in darkness as if it were dim light, and you can see into the ethereal plane, all within 30 feet of you. You can discern color in darkness.\nMountain Born: You’re acclimated to high altitude, including elevations above 20,000 feet. You’re also naturally adapted to cold climates",
};
RaceList["river spirit folk"] = {
	regExpSearch : /^(?=.*(spirit folk))(?=.*\briver?\b).*$/i,
	name : "River Spirit Folk",
	sortname : "Spirit Folk, River",
	source : ["MAH", 35],
	plural : "River Spirit Folk",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 }, swim : { spd : 30, enc : 20 } },
	languages : ["Oriental", "Kami"],
	vision : "",
	savetxt : "Adv. ",
	age : " reach adulthood at roughly 110 years old and live between 600 and 700 years.",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "River Spirit Folk: +1 Intelligence, +1 Dexterity;",
	scores : [0, 1, 0, 1, 0, 0],
	trait : "River Spirit Folk (+1 Intelligence, +1 Dexterity)\nSpirit Sight: You can see in dim light as if it were bright light, and in darkness as if it were dim light, and you can see into the ethereal plane, all within 30 feet of you. You can discern color in darkness.\nUnderwater Breathing: You can breathe underwater\nWater Craving: You either need to be submerged in water daily, or drink twice as much water as you would otherwise have to.",
};
//VANARA - MONKEYFOLK...
RaceList["vanara"] = {
	regExpSearch : /vanara/i,
	name : "Vanara",
	sortname : "Vanara",
	source : ["MAH", 35],
	plural : "Vanarans",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 }, climb : { spd : 30, enc : 10 } },
	languages : ["Oriental", "Vaneran"],
	savetxt : { adv_vs : ["frightened"] },
	age : " reach maturity around age 30, and can live to a little over 200 years old.",
	height : " range from barely 4 to well over 5 feet tall",
	improvements : "Vanara: +2 Dexterity, +1 Intelligence;",
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Vanara (+2 Dexterity, +1 Intelligence)\nPrehensile Tail: You can use your tail to hold objects no larger than half a cubic foot, weighing no more than 4 lbs. You cannot wield a weapon or shield with your tail. You have advantage on Dexterity (acrobatics) checks while you aren’t holding an object with your tail.\nBrash Honesty: You have disadvantage with Charisma (deception) and Charisma (persuasion) checks.",
};
//HAKUMA
RaceList["brute hakuma"] = {
	regExpSearch : /^(?=.*hakuma)(?=.*brute).*$/i,
	name : "Brute Hakuma",
	source : ["MAH", 36],
	plural : "Brute Hakuma",
	sortname : "Hakuma, Brute",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Oriental", "Oni"],
	vision : "Darkvision 60 ft",
	savetxt : { adv_vs : ["taint"] },
	dmgres : ["fire"],
	age : " mature at the same rate as humans.",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Brute Hakuma: +1 Constitution, +1 Charisma, +1 Strength;",
	scores : [1, 0, 1, 0, 0, 1],
	trait : "Brute Hakuma (+1 Constitution, +1 Charisma, +1 Strength)\nAppearance: You’re about a foot taller than most humans with your considerable bulk, you have three tongues, and you smell of sulfur.",
};
RaceList["foul hakuma"] = {
	regExpSearch : /^(?=.*hakuma)(?=.*foul).*$/i,
	name : "Foul Hakuma",
	source : ["MAH", 36],
	plural : "Foul Hakuma",
	sortname : "Hakuma, Foul",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Oriental", "Oni"],
	vision : "Darkvision 60 ft",
	savetxt : { adv_vs : ["frightened"] },
	immune : "Immune to disease",
	dmgres : ["necrotic"],
	age : " mature at the same rate as humans.",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Foul Hakuma: +2 Constitution, +1 Charisma;",
	scores : [0, 0, 2, 0, 0, 1],
	trait : "Foul Hakuma (+2 Constitution, +1 Charisma)\nAppearance: One of your eyes is permanently red with infection and you reek of decay.",
};
RaceList["warped hakuma"] = {
	regExpSearch : /^(?=.*hakuma)(?=.*warped).*$/i,
	name : "Warped Hakuma",
	source : ["MAH", 36],
	plural : "Warped Hakuma",
	sortname : "Hakuma, Warped",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languages : ["Oriental", "Oni"],
	vision : "Darkvision 60 ft",
	savetxt : { adv_vs : ["frightened"] },
	immune : "Immune to disease",
	dmgres : ["necrotic"],
	age : " mature at the same rate as humans.",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Warped Hakuma: +1 Constitution, +2 Charisma;",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Warped Hakuma (1 Constitution, +2 Charisma)\nAppearance: You have a bright blue mane\nJigokuan Legacy: 1st level: Chill Touch cantrip; 3rd level: Invisibility; 5th level: Darkness. Both spells can be used once per long rest. Charisma is my spellcasting ability for these.",		abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Jigokuan Legacy (level 1)",
		spells : ["chill touch"],
		selection : ["chill touch"],
		atwill : true,
	},
	features : {
		"invisibility" : {
			name : "Invisibility",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Jigokuan Legacy)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Jigokuan Legacy (level 3)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				oncelr : true,
			},
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Jigokuan Legacy)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Jigokuan Legacy (level 5)",
				spells : ["darkness"],
				selection : ["darkness"],
				oncelr : true,
			},
		},
	},
};
//SERAFU
RaceList["serafu"] = {
	regExpSearch : /serafu/i,
	name : "Serafu",
	source : ["MAH", 36],
	plural : "Serafic",
	size : 4,
	speed : { walk : { spd : 25, enc : 15 } },
	languages : ["Oriental", "Kami"],
	age : " attain the size and development of a 10-year-old human child by the age of 5, and reach adulthood by 15. They live to be around 120.",
	height : " are between 3 and 4 feet tall",
	weight : " average about 50 pounds",
	improvements : "Serafu: +1 Constitution, +1 to two other ability score of your choice;",
	scores : [0, 0, 1, 0, 0, 0],
	trait : "Serafu (+1 Constitution, +1 to two other ability score of your choice)\nSerafic Ancestry: Choose one type of ancestor using the \"Racial Options\" button. I gain ancestral radiace and a cantrip and save vs magic associated with ancestor."
};

//Racial Variants
AddRacialVariant("serafu", "serafu great phoenix", {
	regExpSearch : /great phoenix/i,
	name : "Great Phoenix",
	source : ["MAH", 36],
	plural : "Great phoenixs",
	savetxt : {
		adv_vs : ["magic (Cha)"]
	},
	weapons : ["ancestral radiance"],
	trait : "Great Phoenix (+1 Constitution, 1 to two other ability score of your choice)\nAncestral Radiance: Radiate powerful energies as a action in a 30 ft sphere around me; save and damage type are found in the table. All in the area must make a saving throw with DC 8 + Con modifier + prof bonus. It does 2d6 (+1d6 at level 6, 11, 16) damage, half as much damage on asuccessful save. I can use it again after a short rest",
	abilitySave : 3,
	spellcastingAbility : 3,
	spellcastingBonus : {
		name : "Ancestral Magic (level 1)",
		spells : ["spare the dying"],
		selection : ["spare the dying"],
		atwill : true,
	},
	features : {
		"ancestral radiance" : {
			name : "Ancestral Radiance",
			minlevel : 1,
			usages : 1,
			additional : ["2d6, fire", "2d6, fire", "2d6, fire", "2d6, fire", "2d6, fire", "3d6, fire", "3d6, fire", "3d6, fire", "3d6, fire", "3d6, fire", "4d6; fire", "4d6; fire", "4d6; fire", "4d6; fire", "4d6; fire", "5d6; fire", "5d6; fire", "5d6; fire", "5d6; fire", "5d6; fire"],
			recovery : "short rest",
			tooltip : " (Ancestral Radiance)",
			action : ["action", ""],
			calcChanges : {
				atkAdd : ["if (WeaponName === 'ancestral raddiance' && CurrentRace.known === 'serafu' && CurrentRace.variant); fields.Description = fields.Description.replace(/(dex|con) save/i, ((/great phoenix/i).test(CurrentRace.variant) ? 'Dex' : 'Con') + ' save'); fields.Range = (/great phoenix/i).test(CurrentRace.variant) ? '5-ft \u00D7 30-ft line' : '15-ft cone'; }; ", "As a Serafu I gain ancestral radiance. The save and damage type are dependent oby which variant of Serafu I am. Furthermore, the amount of damage is dependent on my character level."],
				atkCalc : ["if (WeaponName === 'ancestral radiance' && CurrentRace.known === 'serafu' && CurrentRace.level > 5) { output.die = output.die.replace('2d6', (CurrentRace.level < 11 ? 3 : CurrentRace.level < 16 ? 4 : 5) + 'd6'); }; ", ""]
			},
		},
	},
});
AddRacialVariant("serafu", "serafu great turtle", {
	regExpSearch : /great turtle/i,
	name : "Great turtle",
	source : ["MAH", 36],
	plural : "Great Turtles",
	savetxt : {
		adv_vs : ["magic (Con)"]
	},
	weapons : ["ancestral radiance"],
	trait : "Great Turtle (+1 Constitution, 1 to two other ability score of your choice)\nAncestral Radiance: Radiate powerful energies as a action in a 30 ft sphere around me; save and damage type are found in the table. All in the area must make a saving throw with DC 8 + Con modifier + prof bonus. It does 2d6 (+1d6 at level 6, 11, 16) damage, half as much damage on asuccessful save. I can use it again after a short rest",
	abilitySave : 3,
	spellcastingAbility : 3,
	spellcastingBonus : {
		name : "Ancestral Magic (level 1)",
		spells : ["shape water"],
		selection : ["shape water"],
		atwill : true,
	},
	features : {
		"ancestral radiance" : {
			name : "Ancestral Radiance",
			minlevel : 1,
			usages : 1,
			additional : ["2d6, cold", "2d6, cold", "2d6, cold", "2d6, cold", "2d6, cold", "3d6, cold", "3d6, cold", "3d6, cold", "3d6, cold", "3d6, cold", "4d6; cold", "4d6; cold", "4d6; cold", "4d6; cold", "4d6; cold", "5d6; cold", "5d6; cold", "5d6; cold", "5d6; cold", "5d6; cold"],
			recovery : "short rest",
			tooltip : " (Ancestral Radiance)",
			action : ["action", ""],
			calcChanges : {
				atkAdd : ["if (WeaponName === 'ancestral raddiance' && CurrentRace.known === 'serafu' && CurrentRace.variant); fields.Description = fields.Description.replace(/(dex|con) save/i, ((/great phoenix/i).test(CurrentRace.variant) ? 'Dex' : 'Con') + ' save'); fields.Range = (/great phoenix/i).test(CurrentRace.variant) ? '5-ft \u00D7 30-ft line' : '15-ft cone'; }; ", "As a Serafu I gain ancestral radiance. The save and damage type are dependent oby which variant of Serafu I am. Furthermore, the amount of damage is dependent on my character level."],
				atkCalc : ["if (WeaponName === 'ancestral radiance' && CurrentRace.known === 'serafu' && CurrentRace.level > 5) { output.die = output.die.replace('2d6', (CurrentRace.level < 11 ? 3 : CurrentRace.level < 16 ? 4 : 5) + 'd6'); }; ", ""]
			},
		},
	},
});
AddRacialVariant("serafu", "serafu-great wyrm", {
	regExpSearch : /great wyrm/i,
	name : "Great Wyrm",
	source : ["MAH", 36],
	plural : "Great Sylvans",
	savetxt : {
		adv_vs : ["magic (Int)"]
	},
	weapons : ["ancestral radiance"],
	trait : "Great Wyrm (+1 Constitution, 1 to two other ability score of your choice)\nAncestral Radiance: Radiate powerful energies as a action in a 30 ft sphere around me; save and damage type are found in the table. All in the area must make a saving throw with DC 8 + Con modifier + prof bonus. It does 2d6 (+1d6 at level 6, 11, 16) damage, half as much damage on asuccessful save. I can use it again after a short rest",
	abilitySave : 3,
	spellcastingAbility : 3,
	spellcastingBonus : {
		name : "Ancestral Magic (level 1)",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		atwill : true,
	},
	features : {
		"ancestral radiance" : {
			name : "Ancestral Radiance",
			minlevel : 1,
			usages : 1,
			additional : ["2d6, thunder", "2d6, thunder", "2d6, thunder", "2d6, thunder", "2d6, thunder", "3d6, thunder", "3d6, thunder", "3d6, thunder", "3d6, thunder", "3d6, thunder", "4d6; thunder", "4d6; thunder", "4d6; thunder", "4d6; thunder", "4d6; thunder", "5d6; thunder", "5d6; thunder", "5d6; thunder", "5d6; thunder", "5d6; thunder"],
			recovery : "short rest",
			tooltip : " (Ancestral Radiance)",
			action : ["action", ""],
			calcChanges : {
				atkAdd : ["if (WeaponName === 'ancestral raddiance' && CurrentRace.known === 'serafu' && CurrentRace.variant); fields.Description = fields.Description.replace(/(dex|con) save/i, ((/great phoenix/i).test(CurrentRace.variant) ? 'Dex' : 'Con') + ' save'); fields.Range = (/great phoenix/i).test(CurrentRace.variant) ? '5-ft \u00D7 30-ft line' : '15-ft cone'; }; ", "As a Serafu I gain ancestral radiance. The save and damage type are dependent oby which variant of Serafu I am. Furthermore, the amount of damage is dependent on my character level."],
				atkCalc : ["if (WeaponName === 'ancestral radiance' && CurrentRace.known === 'serafu' && CurrentRace.level > 5) { output.die = output.die.replace('2d6', (CurrentRace.level < 11 ? 3 : CurrentRace.level < 16 ? 4 : 5) + 'd6'); }; ", ""]
			},
		},
	},
});
AddRacialVariant("serafu", "serafu-great sylvan", {
	regExpSearch : /great sylvan/i,
	name : "Great Sylvan",
	source : ["MAH", 36],
	plural : "Great Sylvans",
	savetxt : {
		adv_vs : ["magic (Wis)"]
	},
	trait : "Great Sylvan (+1 Constitution, 1 to two other ability score of your choice)\nSylvan Shapechange: If I choose the Great Sylvan ancestor, I can shapechange to a white cat instead of gaining ancestral radiancee. I can change to a Cat with white fur, or back to serafu form. (white tiger at level 5, white sabre-toothed tiger at level 11) I can use it again after a short rest.",
	abilitySave : 3,
	spellcastingAbility : 3,
	spellcastingBonus : {
		name : "Ancestral Magic (level 1)",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		atwill : true,
	},
	features : {
		"sylvan shapechange" : {
			name : "Sylvan Shapechange",
			source : ["MAH", 36],
			minlevel : 1,
			usages : 1,
			usages : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, "\u221E\u00D7 per "],
			recovery : "short rest",
			additional : ["white cat", "white cat; 1 hour", "white cat; 1 hour", "white cat; 2 hours", "white tiger; 2 hours", "white tiger; 3 hours", "white tiger; 3 hours", "white tiger; 4 hours", "white tiger; 4 hours", "white tiger; 5 hours", "white sabre-toothed tiger; 5 hours", "white sabre-toothed tiger; 6 hours", "white sabre-toothed tiger; 6 hours", "white sabre-toothed tiger; 7 hours", "white sabre-toothed tiger; 7 hours", "white sabre-toothed tiger; 8 hours", "white sabre-toothed tiger; 8 hours", "white sabre-toothed tiger; 9 hours", "white sabre-toothed tiger; 9 hours", "white sabre-toothed tiger; 10 hours"],
			tooltip : " (Sylvan Shapechange)",
			action : ["action", " (start)"],
			eval : "AddAction('bonus action', 'Sylvan Shapechange (end)', 'Great Sylvan');",
			removeeval : "RemoveAction('bonus action', 'Sylvan Shapechange (end)', 'Great Sylvan');"
		},
	},
});
UpdateDropdown("race");


//WEAPONS OF THE ORIENT
WeaponsList["tonfa club"] = {
	regExpSearch : /tonfa club/i,
	name : "Tonfa Club",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	weight : 2,
	description : "Light",
		abilitytodamage : true,
		monkweapon : true
};
WeaponsList["tanto dagger"] = {
	regExpSearch : /tanto dagger/i,
	name : "Tanto Dagger",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "piercing"],
	range : "Melee, 20/60 ft",
	weight : 1,
	description : "Finesse, light, thrown",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["sai"] = {
	regExpSearch : /sai/i,
	name : "Sai",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "piercing"],
	range : "Melee",
	weight : 1,
	description : "Finesse, light, special-dual wielding two sais, your AC increases by 1",
	abilitytodamage : true
};
WeaponsList["Chakram"] = {
	regExpSearch : /Chakram/i,
	name : "Chakram",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "slashing"],
	range : "Melee, 30/90 ft",
	weight : 2,
	description : "Finesse, light, thrown , special-can be split in half/dual wielded",
	abilitytodamage : true
};
WeaponsList["tetsubo greatclub"] = {
	regExpSearch : /tetsubo greatclub/i,
	name : "Tetsubo Greatclub",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	weight : 10,
	description : "Two-handed",
	abilitytodamage : true
};
WeaponsList["ono handaxe"] = {
	name : "Ono Handaxe",
	regExpSearch : /ono handaxe/i,
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 6, "slashing"],
	range : "Melee, 20/60 ft",
	weight : 2,
	description : "Light, thrown",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["uchi-ne javelin"] = {
	regExpSearch : /uchi-ne javelin/i,
	name : "Uchi-ne Javelin",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 6, "piercing"],
	range : "Melee, 30/120 ft",
	weight : 2,
	description : "Thrown",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["kanabo mace"] = {
	regExpSearch : /kanabo mace/i,
	name : "Kanabo Mace",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	weight : 4,
	description : "",
	monkweapon : true,
	abilitytodamage : true
};
WeaponsList["bo quarterstaff"] = {
	regExpSearch : /bo quarterstaff/i,
	name : "Bo Quarterstaff",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	weight : 4,
	description : "Versatile (1d8)",
	monkweapon : true,
	abilitytodamage : true
};
WeaponsList["kama sickle"] = {
	regExpSearch : /^kama sickle/i,
	name : "Kama Sickle",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "slashing"],
	range : "Melee",
	weight : 2,
	description : "Light",
	monkweapon : true,
	abilitytodamage : true
};
WeaponsList["kusari-gama"] = {
	regExpSearch : /Kusari-gamai/,
	name : "Kusari-gama",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Two-handed, special/chain deals 1d4 bludgeoning damage-reach",
	abilitytodamage : true
};
WeaponsList["yari spear"] = {
	regExpSearch : /yari spear/i,
	name : "Yari Spear",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 6, "piercing"],
	range : "Melee, 20/60 ft",
	weight : 3,
	description : "Thrown, versatile (1d8)",
	monkweapon : true,
	abilitytodamage : true
};
WeaponsList["shuriken dart"] = {
	regExpSearch : /shuriken dart/i,
	name : "Shuriken Dart",
	source : ["MAH", 19],
	list : "ranged",
	ability : 2,
	type : "Simple",
	damage : [1, 4, "piercing"],
	range : "20/60 ft",
	weight : 0.25,
	description : "Finesse, thrown",
	abilitytodamage : true
};
WeaponsList["hankyu shortbow"] = {
	regExpSearch : /hankyu shortbow/i,
	name : "Hankyu Shortbow",
	source : ["MAH", 19],
	list : "ranged",
	ability : 2,
	type : "Simple",
	damage : [1, 6, "piercing"],
	range : "80/320 ft",
	weight : 2,
	description : "Ammunition, two-handed",
	abilitytodamage : true,
	ammo : "arrow"
};
WeaponsList["masakari battleaxe"] = {
	regExpSearch : /masakari battleaxe/i,
	name : "Masakari Battleaxe",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "slashing"],
	range : "Melee",
	weight : 4,
	description : "Versatile (1d10)",
	abilitytodamage : true
};
WeaponsList["nunchaku flail"] = {
	regExpSearch : /nunchaku flail/i,
	name : "Nunchaku Flail",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	weight : 2,
	description : "",
	abilitytodamage : true
};
WeaponsList["Naginata glaive"] = {
	regExpSearch : /Naginata glaive/i,
	name : "Naginata Glaive",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Heavy, reach, two-handed, pristine",
	abilitytodamage : true
};
WeaponsList["dual naginata glaive"] = {
	regExpSearch : /dual naginata glaive/i,
	name : "Dual naginata Glaive",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 12, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Heavy, two-handed, pristine",
	abilitytodamage : true
};
WeaponsList["nodachi greatsword"] = {
	regExpSearch : /nodachi greatsword/i,
	name : "Nodachi Greatsword",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 6, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Heavy, two-handed, pristine",
	abilitytodamage : true
};
WeaponsList["kamayari halberd"] = {
	regExpSearch : /kamayari halberd/i,
	name : "Kamayari Halberd",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Heavy, reach, two-handed",
	abilitytodamage : true
};
WeaponsList["umayari lance"] = {
	regExpSearch : /umayari lance/i,
	name : "Umayari Lance",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 12, "piercing"],
	range : "Melee",
	weight : 6,
	description : "Reach, disadvantage to attack within 5 ft, two-handed when not mounted",
	abilitytodamage : true
};
WeaponsList["katana longsword"] = {
	regExpSearch : /katana longsword/i,
	name : "Katana Longsword",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Versatile (1d10), pristine",
	abilitytodamage : true
};
WeaponsList["nagamaki"] = {
	regExpSearch : /Nagamaki/i,
	name : "Nagamaki",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Versatile (2d4), reach, pristine",
	abilitytodamage : true
};
WeaponsList["nagaeyari pike"] = {
	regExpSearch : /nagaeyari pike/i,
	name : "Nagaeyari Pike",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "piercing"],
	range : "Melee",
	weight : 18,
	description : "Heavy, reach, two-handed",
	abilitytodamage : true
};
WeaponsList["wakizashi scimitar"] = {
	regExpSearch : /wakizashi scimitar/i,
	name : "Wakizashi Scimitar",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, light, pristine",
	abilitytodamage : true
};
WeaponsList["ninja-to shortsword"] = {
	regExpSearch : /ninja-to shortsword/i,
	name : "Ninja-to Shortsword",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "piercing"],
	range : "Melee",
	weight : 2,
	description : "Finesse, light, pristine",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["magariyari trident"] = {
	regExpSearch : /magariyari trident/i,
	name : "Magariyari Trident",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "piercing"],
	range : "Melee, 20/60 ft",
	weight : 4,
	description : "Thrown, versatile (1d8)",
	abilitytodamage : true
};
WeaponsList["war fan"] = {
	regExpSearch : /war fan/i,
	name : "War Fan",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "piercing"],
	range : "Melee",
	weight : 1,
	description : "Finesse, light",
	abilitytodamage : true
};
WeaponsList["kuwa war pick"] = {
	regExpSearch : /kuwa war pick/i,
	name : "Kuwa War pick",
	source : ["MAH", 19],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "piercing"],
	range : "Melee",
	weight : 2,
	description : "",
	abilitytodamage : true,
};
WeaponsList["daikyu longbow"] = {
		regExpSearch : /daikyu longbow/i,
	name : "Daikyu Longbow",
	source : ["MAH", 19],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 8, "piercing"],
	range : "150/600 ft",
	weight : 2,
	description : "Ammunition, heavy, two-handed",
	abilitytodamage : true,
	ammo : "arrow"
};
WeaponsList["breath weapon"] = {
	regExpSearch : /^(?=.*breath)(?=.*weapon).*$/i,
	name : "Breath Weapon",
	source : [["SRD", 5], ["P", 34]],
	ability : 3,
	type : "Natural",
	damage : [2, 6, "fire"],
	range : "15-ft cone",
	description : "Hits all in area; Dex save, success - half damage; Usable only once per short rest",
	abilitytodamage : false,
	dc : true
};
WeaponsList["ancestral radiance"] = {
	regExpSearch : /^(?=.*ancestral)(?=.*radiance).*$/i,
	name : "Ancestral Radiance",
	source : ["MAH", 36],
	ability : 3,
	type : "Natural",
	damage : [2, 6, ""],
	range : "30-ft sphere",
	description : "Hits all in area; save, success - half damage; Usable only once per short rest",
	abilitytodamage : false,
	dc : true
};
WeaponsList["claws"] = {
	regExpSearch : /claws/i,
	name : "Sharp Claws",
	source : ["V", 115],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};
UpdateDropdown("weapon");


//Armor of the Orient:
//Light Armor:
//Light Armor
ArmourList["cord padded"] = {
	regExpSearch : /cord padded/i,
	name : "Cord Padded",
	source : ["MAH", 18],
	type : "light",
	ac : 11,
	stealthdis : true,
	weight : 8,
	strReq : 0,
	invName : "Cord armor"
};
ArmourList["ashigaru leather"] = {
	regExpSearch : /ashigaru leather/i,
	name : "Ashigaru Leather",
	source : ["MAH", 18],
	type : "light",
	ac : 11,
	stealthdis : false,
	weight : 10,
	strReq : 0,
	invName : "Ashigaru armor"
};
ArmourList["Reinforced shozoku"] = {
	regExpSearch : /^Reinforced shozoku/i,
	name : "Reinforced shozoku",
	source : ["MAH", 18],
	type : "light",
	ac : 12,
	stealthdis : false,
	weight : 2,
	strReq : 0,
	invName : "Reinforced shozoku"
};
//Medium Armor:
ArmourList["dhenuka hide"] = {
	regExpSearch : /dhenuka hide/i,
	name : "Dhenuka Hide",
	source : ["MAH", 18],
	type : "medium",
	ac : 12,
	dex : 2,
	stealthdis : false,
	weight : 12,
	strReq : 0,
	invName : "Dhenuka armor"
};
ArmourList["brigandine chain shirt"] = {
	regExpSearch : /brigandine chain shirt$/i,
	name : "Brigandine Chain shirt",
	source : ["MAH", 18],
	type : "medium",
	ac : 13,
	dex : 2,
	stealthdis : false,
	weight : 20,
	strReq : 0,
	invName : "Brigandine armor"
};
ArmourList["partial breastplate"] = {
	regExpSearch : /partial breastplate/i,
	name : "Partial Breastplate",
	source : ["MAH", 18],
	type : "medium",
	ac : 14,
	dex : 2,
	stealthdis : false,
	weight : 20,
	strReq : 0,
	invName : "Partial armor"
};
ArmourList["lamellar half plate"] = {
	regExpSearch : /lamellar half plate/i,
	name : "Lamellar Half plate",
	source : ["MAH", 18],
	type : "medium",
	ac : 15,
	stealthdis : true,
	weight : 40,
	strReq : 0,
	invName : "Lamellar armor"
};
ArmourList["heroic kozane"] = {
	regExpSearch : /heroic kozane/i,
	name : "Heroic kozane",
	source : ["MAH", 18],
	type : "medium",
	ac : 16,
	stealthdis : true,
	weight : 20,
	strReq : 0,
	invName : "Heroic kozane"
};
//Heavy Armor:
ArmourList["hatomune cuirass splint"] = {
	regExpSearch : /hatomune cuirass splint/i,
	name : "Hatomune cuirass Splint",
	source : ["MAH", 18],
	type : "heavy",
	ac : 17,
	stealthdis : true,
	weight : 60,
	strReq : 15,
	invName : "Hatomune cuirass"
};
ArmourList["great armor plate"] = {
	regExpSearch : /great armor plate/i,
	name : "Great Armor Plate",
	source : ["MAH", 18],
	type : "heavy",
	ac : 18,
	stealthdis : true,
	weight : 65,
	strReq : 15,
	invName : "Great armor"
};
ArmourList["tameshi-gusoku plate"] = {
	regExpSearch : /tameshi-gusoku plate/i,
	name : "Tameshi-gusoku Plate",
	source : ["MAH", 18],
	type : "heavy",
	ac : 19,
	stealthdis : true,
	weight : 80,
	strReq : 17,
	invName : "Tameshi-gusoku"
};
UpdateDropdown("armor");


//FEATS OF THE ORIENT:
FeatsList["bonded weapon wielder"] = {
	name : "Bonded Weapon Wielder",
	source : ["MAH", 66],
	description : "I learn a ritual-weapon bond with a slashing weapon./only one weapon.\nTakes 8 hr-must be in reach-end/touch weapon and forge the bond.\nBonded-can’t be disarmed/call to hand (bonus)/ Must bond one hr each day (short rest)",
};
FeatsList["hengeyokai ancestry"] = {
	name : "Hengeyokai Ancestry",
	source : ["MAH", 66],
	description : "(Action), change to animal/human/hybrid form. Type of animal depends on ancestry.\nAnimal-no class abilities-Int/Wis/Cha/hp stay the same, hybrid form-animal in humanoid form-no animal abilities. Choose multiple times-choose different animal.",
	action : ["action", ""]
};
FeatsList["immovable"] = {
	name : "Immovable",
	source : ["MAH", 66],
	description : "Can't be grappled/knocked prone/moved by a Huge/smaller creature, except through magical means. [+1 Strength]",
	improvements : "Immovable (feat): +1 Strength;",
	scores : [1, 0, 0, 0, 0, 0]
};
FeatsList["instinctive"] = {
	name : "Instinctive",
	source : ["MAH", 66],
	description : "I have advantage on Wisdom (insight) checks to discern if somebody is lying to me and Wisdom (perception) checks to spot traps or their related triggers.\nI instinctively know the fastest route to travel and how a trap works when you inspect it. [+1 Wisdom]",
	improvements : "Instinctive (feat): +1 Wisdom;",
};
FeatsList["knife juggler"] = {
	name : "Knife Juggler",
	source : ["MAH", 66],
	description : "Draw/throw a weapon/item-as same action.(Attack action)-throw a weapon/object; (bonus)-2nd throw w/lite thrown weapon (proficient); Short/long rg. is doubled.\n(Reaction)-throw light thrown weapon when hostile creature enters short rg of weapon.",
};
FeatsList["mounted combatant"] = {
	name : "Mounted Combatant",
	source : ["P", 168],
	prerequisite : "Being a Pegasus Clansman",
	prereqeval : "CurrentRace.known === 'pegasus Clansman'",
	description : "I have advantage on melee attack rolls against unmounted creatures smaller than my mount. I can force attacks targeting my mount to target me instead. When a Dex save would halve damage, my mount takes no damage on success and half damage on failure.",
};
FeatsList["offensive duelist"] = {
	name : "Offensive Duelist",
	source : ["MAH", 66],
	description : "Wielding a 2H/versatile melee weapon in two hands (proficient w/) and another creature hits me w/a melee attack, (reaction)-immediately retaliate with an opportunity attack.\nAdditionally, I can ignore any AC a hostile creature gains from wielding a shield",
};
FeatsList["Phoenix Touched"] = {
	name : "Phoenix Touched",
	source : ["MAH", 66],
	description : "IDrop to 0 hp-but don’t die, drop to 1 hp-flames burst from me; All in 10 ft of me Dex save (DC = 8 + prof bonus. + Con mod); 21 (6d6) fire dmg. or 1/2 (save); Adv on death saves; fire damage (reaction)-resist fire dmg. til start of my next turn.",
	usages : 1,
	recovery : "long rest",
};
FeatsList["Tainted"] = {
	name : "Tainted",
	source : ["MAH", 66],
	description : "Immune vs. Taint/its effects. I recognize Tainted creatures/Adv-attack rolls vs Shadowlands creatures; My appearance canges. Roll/choose from the Minor Physical Feature table (Kensai-Ravager); Adv-Cha (intimidation) checks vs. Tainted creatures.",
};
FeatsList["tattooed"] = {
	name : "Tattooed",
	source : ["MAH", 66],
	description : "Choose a tattoo w/o prerequisites from Way of Ancient Symbols monk\nTattoos are magical/abilities are supernatural. Lose tattoo abilities in antimagic field\nCan select multiple times/Each time I must choose a different tattoo.",
};
FeatsList["yari master"] = {
	name : "Yari Master",
	source : ["MAH", 66],
	prerequisite : "yari spear, kamayari halberd, umayari lance, nagaeyari pike, magariyari trident",
	description : "(Attack) w/wpn.-(bonus) inc. reach 5 ft til the end of my turn\nAdv-attack rolls vs mounted combatants-If enters my reach\n(reaction)-OA., creature/mount.-If hit mount's spd: 0 til end of its next turn",
};
FeatsList["void touched"] = {
	name : "Void Touched",
	source : ["MAH", 66],
	description : "If I fail a save, I can choose to succeed instead.\nAfter rolling initiative, I can steal another creature’s initiative/replace it with mine.\nOnce I use either feature, I can't do so again until you finish a long rest. [+1 Intelligence or Charisma]",
	improvements : "Athlete (feat): +1 Intelligence or Charisma;",
	usages : 1,
	recovery : "long rest"
};
UpdateDropdown("feat");


//BACKGROUNDS OF THE ORIENT:
BackgroundList["free spirit"] = {
	regExpSearch : /free spirit/i,
	name : "Free Spirit",
	source : ["MAH", 63],
	skills : ["Animal Handling", "Nature", "Survival"],
	gold : 10,
	equipright : [
		["A tool I'm proficient with", "", ""],
		["waterskin", "", ""],
		["set of traveler’s clothes", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Oriental Heritage",
	trait : [
		"I'm always respectful and polite.",
		"I'm haunted by memories of war. I can't get the violent images out of my mind.",
		"I'm slow to make new friends, because I've lost too many old ones.",
		"I'm full of inspiring and cautionary tales from my military experience with some relevance to almost every type of combat situation.",
		"I can stare down a owlbear without flinching.",
		"I enjoy my strength and like to break things.",
		"I have a rough sense of humor.",
		"I approach problems head-on. A simple, direct course is the best path to a solution."
	],
	ideal : [
		["Greater Good",
			"Greater Good: Our fate is to give our lives in the defense of others. (Good)"
		],
		["Responsibility",
			"Responsibility: I do what I have to and follow just authority. (Lawful)"
		],
		["Independence",
			"Independence: When people obey orders blindly, they affirm a kind of tyranny. (Chaotic)"
		],
		["Might",
			"Might: In life as in war, the mightier force prevails. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Ideals aren't worth killing over or going to war for. (Neutral)"
		],
		["Nation",
			"Nation: My city, state, or people are the only things that matter. (Any)"
		],
	],
	bond : [
		"I would still give my life for the people I have served with.",
		"Someone saved my life on the battlefield. Even now, I would never leave a friend behind.",
		"My honor is my life.",
		"I'll never forget the crushing defeat my company endured or the foes who inflicted it.",
		"Those who fight with me are those worth laying down my life for.",
		"I fight for those who cannot fight for themselves."
	],
	flaw : [
		"The atrocious enemy we faced in battle still leaves me trembling with fear.",
		"I have little respect for those who are not a tested warrior.",
		"A disastrous mistake I made in battle cost many lives\u2015 I will do anything to keep that mistake a secret.",
		"My hatred of my foes is blind and unreasoning. ",
		"I uphold the law, even if the law causes suffering.",
		"I'd rather eat my weapon than admit when I'm wrong."
	],
	toolProfs : ["Artisan's tools", 1],
	languageProfs : [1, "dwarvish", "nezumi", "hengeyokai", "spirit tongue"],
	lifestyle : "modest"
};
BackgroundList["great crawdad clan warrior"] = {
	regExpSearch : /great crawdad clan warrior/i,
	name : "Great Crawdad Clan Warrior",
	source : ["MAH", 63],
	skills : ["Medicine", "Survival"],
	gold : 30,
	equipright : [
		["A scroll proving your clan affiliation and heritage", "", ""],
		["set of fine clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Heirloom",
	trait : [
		"I'm always respectful and polite.",
		"I'm haunted by memories of war. I can't get the violent images out of my mind.",
		"I'm slow to make new friends, because I've lost too many old ones.",
		"I'm full of inspiring and cautionary tales from my military experience with some relevance to almost every type of combat situation.",
		"I can stare down a owlbear without flinching.",
		"I enjoy my strength and like to break things.",
		"I have a rough sense of humor.",
		"I approach problems head-on. A simple, direct course is the best path to a solution."
	],
	ideal : [
		["Greater Good",
			"Greater Good: Our fate is to give our lives in the defense of others. (Good)"
		],
		["Responsibility",
			"Responsibility: I do what I have to and follow just authority. (Lawful)"
		],
		["Independence",
			"Independence: When people obey orders blindly, they affirm a kind of tyranny. (Chaotic)"
		],
		["Might",
			"Might: In life as in war, the mightier force prevails. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Ideals aren't worth killing over or going to war for. (Neutral)"
		],
		["Nation",
			"Nation: My city, state, or people are the only things that matter. (Any)"
		],
	],
	bond : [
		"I would still give my life for the people I have served with.",
		"Someone saved my life on the battlefield. Even now, I would never leave a friend behind.",
		"My honor is my life.",
		"I'll never forget the crushing defeat my company endured or the foes who inflicted it.",
		"Those who fight with me are those worth laying down my life for.",
		"I fight for those who cannot fight for themselves."
	],
	flaw : [
		"The atrocious enemy we faced in battle still leaves me trembling with fear.",
		"I have little respect for those who are not a tested warrior.",
		"A disastrous mistake I made in battle cost many lives\u2015 I will do anything to keep that mistake a secret.",
		"My hatred of my foes is blind and unreasoning. ",
		"I uphold the law, even if the law causes suffering.",
		"I'd rather eat my weapon than admit when I'm wrong."
	],
	extra : ["Select a heirloom",
		"Choose an heirloom",
		"Ancient animal styled shogun mask",
		"Large scale w/strange symbols on inside",
		"A seemingly ordinary wakizashi",
		"A jade figurine of your clan’s animal",
		"A trinket (see “Trinkets” PHB. ch.5)",
		"A bonsai tree over 500 years old",
		"A riding horse-my best friend for years",
		"Scroll w/my family tree; half is missing"
	],
	toolProfs : ["Artisan's tools", 1],
	languageProfs : [1, "nezumi"],
	lifestyle : "modest"
};
BackgroundList["great heron clan warrior"] = {
	regExpSearch : /great heron clan warrior/i,
	name : "Great Heron Clan Warrior",
	source : ["MAH", 63],
	skills : ["Medicine", "Insight", "Persuasion"],
	gold : 30,
	equipright : [
		["A scroll proving your clan affiliation and heritage", "", ""],
		["set of fine clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Heirloom",
	trait : [
		"My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
		"The common folk love me for my kindness and generosity.",
		"No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
		"I take great pains to always look my best and follow the latest fashions.",
		"I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
		"Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
		"My favor, once lost, is lost forever.",
		"If you do me an injury, I will crush you, ruin your name, and salt your fields."
	],
	ideal : [
		["Respect",
			"Respect: Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)"
		],
		["Responsibility",
			"Responsibility: It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)"
		],
		["Independence",
			"Independence: I must prove that I can handle myself without the coddling of my family. (Chaotic)"
		],
		["Power",
			"Power: If I can attain more power, no one will tell me what to do. (Evil)"
		],
		["Family",
			"Family: Blood runs thicker than water. (Any)"
		],
		["Noble Obligation",
			"Noble Obligation: It is my duty to protect and care for the people beneath me. (Good)"
		],
	],
	bond : [
		"I will face any challenge to win the approval of my family.",
		"My house's alliance with another noble family must be sustained at all costs.",
		"Nothing is more important than the other members of my family.",
		"I am in love with the heir of a family that my family despises.",
		"My loyalty to my sovereign is unwavering.",
		"The common folk must see me as a hero of the people."
	],
	flaw : [
		"I secretly believe that everyone is beneath me.",
		"I hide a truly scandalous secret that could ruin my family forever.",
		"I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
		"I have an insatiable desire for carnal pleasures.",
		"In fact, the world does revolve around me.",
		"By my words and actions, I often bring shame to my family."
	],
	extra : ["Select a heirloom",
		"Ancient animal styled shogun mask",
		"Large scale w/strange symbols on inside",
		"A seemingly ordinary wakizashi",
		"A jade figurine of your clan’s animal",
		"A trinket (see “Trinkets” PHB. ch.5)",
		"A bonsai tree over 500 years old",
		"A riding horse-my best friend for years",
		"Scroll w/my family tree; half is missing"
	],
	toolProfs : ["Artisan's tools", 1],
	languageProfs : [1, "Oriental"],
	lifestyle : "modest"
};
BackgroundList["great tiger clan warrior"] = {
	regExpSearch : /great tiger clan warrior/i,
	name : "Great Tiger Clan Warrior",
	source : ["MAH", 63],
	skills : ["Medicine", "Survival"],
	gold : 30,
	equipright : [
		["A scroll proving your clan affiliation and heritage", "", ""],
		["set of fine clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Heirloom",
	trait : [
		"I'm always respectful and polite.",
		"I'm haunted by memories of war. I can't get the violent images out of my mind.",
		"I'm slow to make new friends, because I've lost too many old ones.",
		"I'm full of inspiring and cautionary tales from my military experience with some relevance to almost every type of combat situation.",
		"I can stare down a owlbear without flinching.",
		"I enjoy my strength and like to break things.",
		"I have a rough sense of humor.",
		"I approach problems head-on. A simple, direct course is the best path to a solution."
	],
	ideal : [
		["Greater Good",
			"Greater Good: Our fate is to give our lives in the defense of others. (Good)"
		],
		["Responsibility",
			"Responsibility: I do what I have to and follow just authority. (Lawful)"
		],
		["Independence",
			"Independence: When people obey orders blindly, they affirm a kind of tyranny. (Chaotic)"
		],
		["Might",
			"Might: In life as in war, the mightier force prevails. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Ideals aren't worth killing over or going to war for. (Neutral)"
		],
		["Nation",
			"Nation: My city, state, or people are the only things that matter. (Any)"
		],
	],
	bond : [
		"I would still give my life for the people I have served with.",
		"Someone saved my life on the battlefield. Even now, I would never leave a friend behind.",
		"My honor is my life.",
		"I'll never forget the crushing defeat my company endured or the foes who inflicted it.",
		"Those who fight with me are those worth laying down my life for.",
		"I fight for those who cannot fight for themselves."
	],
	flaw : [
		"The atrocious enemy we faced in battle still leaves me trembling with fear.",
		"I have little respect for those who are not a tested warrior.",
		"A disastrous mistake I made in battle cost many lives\u2015 I will do anything to keep that mistake a secret.",
		"My hatred of my foes is blind and unreasoning. ",
		"I uphold the law, even if the law causes suffering.",
		"I'd rather eat my weapon than admit when I'm wrong."
	],
	extra : ["Select a heirloom",
		"Ancient animal styled shogun mask",
		"Large scale w/strange symbols on inside",
		"A seemingly ordinary wakizashi",
		"A jade figurine of your clan’s animal",
		"A trinket (see “Trinkets” PHB. ch.5)",
		"A bonsai tree over 500 years old",
		"A riding horse-my best friend for years",
		"Scroll w/my family tree; half is missing"
	],
	toolProfs : ["Artisan's tools", 1],
	languageProfs : [1, "nezumi"],
	lifestyle : "modest"
};
BackgroundList["great pegasus clan warrior"] = {
	regExpSearch : /great pegasus clan warrior/i,
	name : "Great Pegasus Clan Warrior",
	source : ["MAH", 63],
	skills : ["Medicine", "Animal Handling"],
	gold : 30,
	equipright : [
		["A scroll proving your clan affiliation and heritage", "", ""],
		["set of fine clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Born Rider",
	trait : [
		"I judge people by their actions, not their words.",
		"If someone is in trouble, I'm always ready to lend help.",
		"When I set my mind to something, I follow through no matter what gets in my way.",
		"I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
		"I'm confident in my own abilities and do what I can to instill confidence in others.",
		"Thinking is for other people. I prefer action.",
		"I misuse long words in an attempt to sound smarter.",
		"I get bored easily. When am I going to get on with my destiny?"
	],
	ideal : [
		["Respect",
			"Respect: People deserve to be treated with dignity and respect. (Good)"
		],
		["Fairness",
			"Fairness: No one should get preferential treatment before the law, and no one is above the law. (Lawful)"
		],
		["Freedom",
			"Freedom: Tyrants must not be allowed to oppress the people. (Chaotic)"
		],
		["Might",
			"Might: If I become strong, I can take what I want\u2015 what I deserve. (Evil)"
		],
		["Sincerity",
			"Sincerity: There's no good in pretending to be something I'm not. (Neutral)"
		],
		["Destiny",
			"Destiny: Nothing and no one can steer me away from my higher calling. (Any)"
		],
	],
	bond : [
		"I have a family, but I have no idea where they are. One day, I hope to see them again.",
		"I worked the land, I love the land, and I will protect the land.",
		"A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
		"My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
		"I protect those who cannot protect themselves.",
		"I wish my childhood sweetheart had come with me to pursue my destiny."
	],
	flaw : [
		"The tyrant who rules my land will stop at nothing to see me killed.",
		"I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
		"The people who knew me when I was young know my shameful secret, so I can never go home again.",
		"I have a weakness for the vices of the city, especially hard drink.",
		"Secretly, I believe that things would be better if I were a tyrant lording over the land.",
		"I have trouble trusting in my allies."
	],
	extra : ["Select a heirloom",
		"Ancient animal styled shogun mask",
		"Large scale w/strange symbols on inside",
		"A seemingly ordinary wakizashi",
		"A jade figurine of your clan’s animal",
		"A trinket (see “Trinkets” PHB. ch.5)",
		"A bonsai tree over 500 years old",
		"A riding horse-my best friend for years",
		"Scroll w/my family tree; half is missing"
	],
	toolProfs : ["Artisan's tools", 1],
	languageProfs : [1, "Oriental"],
	lifestyle : "modest"
};
BackgroundList["great phoenix clan warrior"] = {
	regExpSearch : /great phoenix clan warrior/i,
	name : "Great Phoenix Clan Warrior",
	source : ["MAH", 63],
	skills : ["Medicine", "Arcana", "Religion"],
	gold : 30,
	equipright : [
		["A scroll proving your clan affiliation and heritage", "", ""],
		["set of fine clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Heirloom",
	trait : [
		"I use polysyllabic words that convey the impression of great erudition.",
		"I've read every book in the world's greatest libraries\u2015 or I like to boast that I have.",
		"I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
		"There's nothing I like more than a good mystery.",
		"I'm willing to listen to every side of an argument before I make my own judgment.",
		"I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost. . . everyone . . . is . . . compared . . . to me.",
		"I am horribly, horribly awkward in social situations.",
		"I'm convinced that people are always trying to steal my secrets."
	],
	ideal : [
		["Knowledge",
			"Knowledge: The path to power and self-improvement is through knowledge. (Neutral)"
		],
		["Beauty",
			"Beauty: What is beautiful points us beyond itself toward what is true. (Good)"
		],
		["Logic",
			"Logic: Emotions must not cloud our logical thinking. (Lawful)"
		],
		["No Limits",
			"No Limits: Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)"
		],
		["Power",
			"Power: Knowledge is the path to power and domination. (Evil)"
		],
		["Self-Improvement",
			"Self-Improvement: The goal of a life of study is the betterment of oneself. (Any)"
		],
	],
	bond : [
		"It is my duty to protect my students.",
		"I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
		"I work to preserve a library, university, scriptorium, or monastery.",
		"My life's work is a series of tomes related to a specific field of lore.",
		"I've been searching my whole life for the answer to a certain question.",
		"I sold my soul for knowledge. I hope to do great deeds and win it back."
	],
	flaw : [
		"I am easily distracted by the promise of information.",
		"Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
		"Unlocking an ancient mystery is worth the price of a civilization.",
		"I overlook obvious solutions in favor of complicated ones.",
		"I speak without really thinking through my words, invariably insulting others.",
		"I can't keep a secret to save my life, or anyone else's."
	],
	extra : ["Select a heirloom",
		"Ancient animal styled shogun mask",
		"Large scale w/strange symbols on inside",
		"A seemingly ordinary wakizashi",
		"A jade figurine of your clan’s animal",
		"A trinket (see “Trinkets” PHB. ch.5)",
		"A bonsai tree over 500 years old",
		"A riding horse-my best friend for years",
		"Scroll w/my family tree; half is missing"
	],
	toolProfs : ["Artisan's tools", 1],
	languageProfs : [1, "nezumi"],
	lifestyle : "modest"
};
BackgroundList["great spider clan warrior"] = {
	regExpSearch : /great spider clan warrior/i,
	name : "Great Spider Clan Warrior",
	source : ["MAH", 63],
	skills : ["Medicine", "Deception", "Stealth"],
	gold : 30,
	equipright : [
		["A scroll proving your clan affiliation and heritage", "", ""],
		["set of fine clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Swamp Lander",
	trait : [
		"I always have a plan for what to do when things go wrong.",
		"I am always calm, no matter the situation. I never raise my voice or let my emotions control me.",
		"The first thing I do in a new place is note the locations of everything valuable \u2015 or where such things could be hidden.",
		"I would rather make a new friend than a new enemy.",
		"I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
		"I don't pay attention to the risks in a situation. Never tell me the odds.",
		"The best way to get me to do something is to tell me I can't do it.",
		"I blow up at the slightest insult."
	],
	ideal : [
		["Honor",
			"Honor: I don't steal from others in the trade. (Lawful)"
		],
		["Freedom",
			"Freedom: Chains are meant to be broken, as are those who would forge them. (Chaotic)"
		],
		["Charity",
			"Charity: I steal from the wealthy so that I can help people in need. (Good)"
		],
		["Greed",
			"Greed: I will do whatever it takes to become wealthy. (Evil)"
		],
		["People",
			"People: I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)"
		],
		["Redemption",
			"Redemption: There's a spark of good in everyone. (Good)"
		],
	],
	bond : [
		"I'm trying to pay off an old debt I owe to a generous benefactor.",
		"My ill-gotten gains go to support my family.",
		"Something important was taken from me, and I aim to steal it back.",
		"I will become the greatest thief that ever lived.",
		"I'm guilty of a terrible crime. I hope I can redeem myself for it.",
		"Someone I loved died because of a mistake I made. That will never happen again."
	],
	flaw : [
		"When I see something valuable, I can't think about anything but how to steal it.",
		"When faced with a choice between money and my friends, I usually choose the money.",
		"If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
		"I have a \"tell\" that reveals when I'm lying.",
		"I turn tail and run when things look bad.",
		"An innocent person is in prison for a crime that I committed. I'm okay with that."
	],
	extra : ["Select a heirloom",
		"Ancient animal styled shogun mask",
		"Large scale w/strange symbols on inside",
		"A seemingly ordinary wakizashi",
		"A jade figurine of your clan’s animal",
		"A trinket (see “Trinkets” PHB. ch.5)",
		"A bonsai tree over 500 years old",
		"A riding horse-my best friend for years",
		"Scroll w/my family tree; half is missing"
	],
	toolProfs : ["Artisan's tools", 1],
	languageProfs : [1, "nezumi"],
	lifestyle : "modest"
};
BackgroundList["great wyvern clan warrior"] = {
	regExpSearch : /great wyvern clan warrior/i,
	name : "Great Wyvern Clan Warrior",
	source : ["MAH", 63],
	skills : ["Medicine", "Insight", "Religion"],
	gold : 30,
	equipright : [
		["A scroll proving your clan affiliation and heritage", "", ""],
		["set of fine clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Mountain Born",
	trait : [
		"I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
		"I am utterly serene, even in the face of disaster.",
		"The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
		"I feel tremendous empathy for all who suffer.",
		"I'm oblivious to etiquette and social expectations.",
		"I connect everything that happens to me to a grand, cosmic plan.",
		"I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
		"I am working on a grand philosophical theory and love sharing my ideas."
	],
	ideal : [
		["Greater Good",
			"Greater Good: My gifts are meant to be shared with all, not used for my own benefit. (Good)"
		],
		["Logic",
			"Logic: Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)"
		],
		["Free Thinking",
			"Free Thinking: Inquiry and curiosity are the pillars of progress. (Chaotic)"
		],
		["Power",
			"Power: Solitude and contemplation are paths toward mystical or magical power. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Meddling in the affairs of others only causes trouble. (Neutral)"
		],
		["Self-Knowledge",
			"Self-Knowledge: If you know yourself, there's nothing left to know. (Any)"
		],
	],
	bond : [
		"Nothing is more important than the other members of my hermitage, order, or association.",
		"I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
		"I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
		"I entered seclusion because I loved someone I could not have.",
		"Should my discovery come to light, it could bring ruin to the world.",
		"My isolation gave me great insight into a great evil that only I can destroy."
	],
	flaw : [
		"Now that I've returned to the world, I enjoy its delights a little too much.",
		"I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
		"I am dogmatic in my thoughts and philosophy.",
		"I let my need to win arguments overshadow friendships and harmony.",
		"I'd risk too much to uncover a lost bit of knowledge.",
		"I like keeping secrets and won't share them with anyone."
	],
	extra : ["Select a heirloom",
		"Ancient animal styled shogun mask",
		"Large scale w/strange symbols on inside",
		"A seemingly ordinary wakizashi",
		"A jade figurine of your clan’s animal",
		"A trinket (see “Trinkets” PHB. ch.5)",
		"A bonsai tree over 500 years old",
		"A riding horse-my best friend for years",
		"Scroll w/my family tree; half is missing"
	],
	toolProfs : ["Artisan's tools", 1],
	languageProfs : [1, "nezumi"],
	lifestyle : "modest"
};
BackgroundList["jade bailiff"] = {
	regExpSearch : /jade bailiff/i,
	name : "Jade Bailiff",
	source : ["MAH", 63],
	skills : ["Insight", "Perception"],
	gold : 20,
	equipright : [
		["olive-green bailiff uniform-cloak/helmet,", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Respect among the Clans",
	trait : [
		"I'm always respectful and polite.",
		"I'm haunted by memories of war. I can't get the violent images out of my mind.",
		"I'm slow to make new friends, because I've lost too many old ones.",
		"I'm full of inspiring and cautionary tales from my military experience with some relevance to almost every type of combat situation.",
		"I can stare down a owlbear without flinching.",
		"I enjoy my strength and like to break things.",
		"I have a rough sense of humor.",
		"I approach problems head-on. A simple, direct course is the best path to a solution."
	],
	ideal : [
		["Greater Good",
			"Greater Good: Our fate is to give our lives in the defense of others. (Good)"
		],
		["Responsibility",
			"Responsibility: I do what I have to and follow just authority. (Lawful)"
		],
		["Independence",
			"Independence: When people obey orders blindly, they affirm a kind of tyranny. (Chaotic)"
		],
		["Might",
			"Might: In life as in war, the mightier force prevails. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Ideals aren't worth killing over or going to war for. (Neutral)"
		],
		["Nation",
			"Nation: My city, state, or people are the only things that matter. (Any)"
		],
	],
	bond : [
		"I would still give my life for the people I have served with.",
		"Someone saved my life on the battlefield. Even now, I would never leave a friend behind.",
		"My honor is my life.",
		"I'll never forget the crushing defeat my company endured or the foes who inflicted it.",
		"Those who fight with me are those worth laying down my life for.",
		"I fight for those who cannot fight for themselves."
	],
	flaw : [
		"The atrocious enemy we faced in battle still leaves me trembling with fear.",
		"I have little respect for those who are not a tested warrior.",
		"A disastrous mistake I made in battle cost many lives\u2015 I will do anything to keep that mistake a secret.",
		"My hatred of my foes is blind and unreasoning. ",
		"I uphold the law, even if the law causes suffering.",
		"I'd rather eat my weapon than admit when I'm wrong."
	],
	toolProfs : ["Gaming set", 1],
	languageProfs : [1],
	lifestyle : "modest"
};
BackgroundList["minor chickadee clan member"] = {
	regExpSearch : /minor chickadee clan member/i,
	name : "Minor Chickadee Clan Member",
	source : ["MAH", 64],
	skills : ["Survival", "Nature", "Performance"],
	gold : 10,
	equipright : [
		["A hunting trap", "", ""],
		["set of travelor's clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Wanderer",
	trait : [
		"I'm driven by a wanderlust that led me away from home.",
		"I watch over my friends as if they were a litter of newborn pups.",
		"I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
		"I have a lesson for every situation, drawn from observing nature.",
		"I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
		"I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
		"I feel far more comfortable around animals than people.",
		"I was, in fact, raised by wolves."
	],
	ideal : [
		["Change",
			"Change: Life is like the seasons, in constant change, and we must change with it. (Chaotic)"
		],
		["Greater Good",
			"Greater Good: It is each person's responsibility to make the most happiness for the whole tribe. (Good)"
		],
		["Honor",
			"Honor: If I dishonor myself, I dishonor my whole clan. (Lawful)"
		],
		["Might",
			"Might: The strongest are meant to rule. (Evil)"
		],
		["Nature",
			"Nature: The natural world is more important than all the constructs of civilization. (Neutral)"
		],
		["Glory",
			"Glory: I must earn glory in battle, for myself and my clan. (Any)"
		],
	],
	bond : [
		"My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
		"An injury to the unspoiled wilderness of my home is an injury to me.",
		"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
		"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
		"I suffer awful visions of a coming disaster and will do anything to prevent it.",
		"It is my duty to provide children to sustain my tribe."
	],
	flaw : [
		"I am too enamored of ale, wine, and other intoxicants.",
		"There's no room for caution in a life lived to the fullest.",
		"I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
		"I am slow to trust members of other races, tribes, and societies.",
		"Violence is my answer to almost any challenge.",
		"Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
	],
	toolProfs : [["Gamng Set", 1], ["Musical instrument", 1]],
	languageProfs : [1, "dwarvish", "nezumi", "hengeyokai", "spirit tongue"],
	lifestyle : "modest"
};
BackgroundList["minor damselfly clan member"] = {
	regExpSearch : /minor damselfly clan member/i,
	name : "Minor Damselfly Clan Member",
	source : ["MAH", 64],
	skills : ["Survival", "Deception",],
	gold : 10,
	equipright : [
		["A hunting trap", "", ""],
		["set of travelor's clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Wanderer",
	trait : [
		"I keep scraps of food and trinkets hidden away in my pockets.",
		"I ask questions all the time.",
		"I like to squeeze into compact places where nobody can harm me.",
		"I sleep with my back to solid surface, with all that I own embraced tightly in my arms.",
		"I have bad manners and eat like a pig.",
		"I expect that anybody who's nice to me is hiding malicious intent.",
		"I eschew bathing.",
		"I say, without reserve, what other people are implying or masking."
	],
	ideal : [
		["Respect",
			"Respect: Everybody, no matter their riches, deserves respect. (Good)"
		],
		["Community",
			"Community: We have to take look out for each other, because nobody else will do it for us. (Lawful)"
		],
		["Change",
			"Change: The low rise up, and the high and mighty come down. Change is natural. (Chaotic)"
		],
		["Retribution",
			"Retribution: The rich need to be shown how it is to live and die in the poor quarters. (Evil)"
		],
		["People",
			"People: I help those who help me\u2015 that is what lets us stay alive. (Neutral)"
		],
		["Aspiration",
			"Aspiration: I'm going to prove that I'm worthy of a better life. (Any)"
		],
	],
	bond : [
		"My town or city is my home, and I'll battle those that threaten it.",
		"I'm the benefactor of an orphanage so others may be kept from enduring what I was forced to endure.",
		"I owe my life to another urchin who taught me the ways of living in the gutters.",
		"I owe a debt I can never repay to the person who showed me sympathy.",
		"I got away from my life of poverty by robbing an influential person, and I'm wanted for it.",
		"No one else should have to suffer the difficulties I've been through."
	],
	flaw : [
		"I will run away from a fight if I'm outnumbered.",
		"A gold piece already has a lot of value to me, and I'll do just about anything for more of it.",
		"I will never completely trust another. I only trust myself.",
		"I would rather use an unfair advantage than fight honorably.",
		"It's not theft if I have more use for it than someone else.",
		"People who are incapable of taking care of themselves get what they deserve."
	],
	toolProfs : [["Gaming Set", 1], ["Musical instrument", 1], ["Disguise kit", "Dex"]],
	languageProfs : [1, "dwarvish", "nezumi", "hengeyokai", "spirit tongue"],
	lifestyle : "modest"
};
BackgroundList["minor rabbit clan member"] = {
	regExpSearch : /minor rabbit clan member/i,
	name : "Minor Rabbit Clan Member",
	source : ["MAH", 64],
	skills : ["Survival", "Medicine", "Nature"],
	gold : 10,
	equipright : [
		["A hunting trap", "", ""],
		["set of travelor's clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Wanderer",
	trait : [
		"I'm driven by a wanderlust that led me away from home.",
		"I watch over my friends as if they were a litter of newborn pups.",
		"I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
		"I have a lesson for every situation, drawn from observing nature.",
		"I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
		"I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
		"I feel far more comfortable around animals than people.",
		"I was, in fact, raised by wolves."
	],
	ideal : [
		["Change",
			"Change: Life is like the seasons, in constant change, and we must change with it. (Chaotic)"
		],
		["Greater Good",
			"Greater Good: It is each person's responsibility to make the most happiness for the whole tribe. (Good)"
		],
		["Honor",
			"Honor: If I dishonor myself, I dishonor my whole clan. (Lawful)"
		],
		["Might",
			"Might: The strongest are meant to rule. (Evil)"
		],
		["Nature",
			"Nature: The natural world is more important than all the constructs of civilization. (Neutral)"
		],
		["Glory",
			"Glory: I must earn glory in battle, for myself and my clan. (Any)"
		],
	],
	bond : [
		"My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
		"An injury to the unspoiled wilderness of my home is an injury to me.",
		"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
		"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
		"I suffer awful visions of a coming disaster and will do anything to prevent it.",
		"It is my duty to provide children to sustain my tribe."
	],
	flaw : [
		"I am too enamored of ale, wine, and other intoxicants.",
		"There's no room for caution in a life lived to the fullest.",
		"I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
		"I am slow to trust members of other races, tribes, and societies.",
		"Violence is my answer to almost any challenge.",
		"Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
	],
	toolProfs : [["Gaming Set", 1], ["Musical instrument", 1], ["Disguise kit", "Dex"]],
	languageProfs : [1, "dwarvish", "nezumi", "hengeyokai", "spirit tongue"],
	lifestyle : "modest"
};
BackgroundList["minor rhino clan member"] = {
	regExpSearch : /minor rhino clan member/i,
	name : "Minor Rhino Clan Member",
	source : ["MAH", 64],
	skills : ["Survival", "Animal Handling"],
	gold : 10,
	equipright : [
		["A hunting trap", "", ""],
		["set of travelor's clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Wanderer",
	trait : [
		"I believe that anything worth doing is worth doing right. I can't help it\u2015 I'm a perfectionist.",
		"I'm a snob who looks down on those who can't appreciate fine art.",
		"I always want to know how things work and what makes people tick.",
		"I'm full of witty aphorisms and have a proverb for every occasion.",
		"I'm rude to people who lack my commitment to hard work and fair play.",
		"I like to talk at length about my profession.",
		"I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
		"I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
	],
	ideal : [
		["Community",
			"Community: It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)"
		],
		["Generosity",
			"Generosity: My talents were given to me so that I could use them to benefit the world. (Good)"
		],
		["Freedom",
			"Freedom: Everyone should be free to pursue his or her own livelihood. (Chaotic)"
		],
		["Greed",
			"Greed: I'm only in it for the money. (Evil)"
		],
		["People",
			"People: I'm committed to the people I care about, not to ideals. (Neutral)"
		],
		["Aspiration",
			"Aspiration: I work hard to be the best there is at my craft. (Any)"
		],
	],
	bond : [
		"The workshop where I learned my trade is the most important place in the world to me.",
		"I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
		"I owe my guild a great debt for forging me into the person I am today.",
		"I pursue wealth to secure someone's love.",
		"One day I will return to my guild and prove that I am the greatest artisan of them all.",
		"I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
	],
	flaw : [
		"I'll do anything to get my hands on something rare or priceless.",
		"I'm quick to assume that someone is trying to cheat me.",
		"No one must ever learn that I once stole money from guild coffers.",
		"I'm never satisfied with what I have\u2015 I always want more.",
		"I would kill to acquire a noble title.",
		"I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
	],
	toolProfs : [["Gaming Set", 1], ["Musical instrument", 1], ["Artisan's tools", 1]],
	languageProfs : [1, "dwarvish", "nezumi", "hengeyokai", "spirit tongue"],
	lifestyle : "modest"
};
BackgroundList["minor scorpionfly clan member"] = {
	regExpSearch : /minor scorpionfly clan member/i,
	name : "Minor Scorpionfly Clan Member",
	source : ["MAH", 64],
	skills : ["Survival", "Animal Handling"],
	gold : 10,
	equipright : [
		["A hunting trap", "", ""],
		["set of travelor's clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Wanderer",
	trait : [
		"My friends know they can rely on me, no matter what.",
		"I work hard so that I can play hard when the work is done.",
		"I enjoy sailing into new ports and making new friends over a flagon of ale.",
		"I stretch the truth for the sake of a good story.",
		"To me, a tavern brawl is a nice way to get to know a new city.",
		"I never pass up a friendly wager.",
		"My language is as foul as an otyugh nest.",
		"I like a job well done, especially if I can convince someone else to do it."
	],
	ideal : [
		["Respect",
			"Respect: The thing that keeps a ship together is mutual respect between captain and crew. (Good)"
		],
		["Fairness",
			"Fairness: We all do the work, so we all share in the rewards. (Lawful)"
		],
		["Freedom",
			"Freedom: The sea is freedom\u2015 the freedom to go anywhere and do anything. (Chaotic)"
		],
		["Mastery",
			"Mastery: I'm a predator, and the other ships on the sea are my prey. (Evil)"
		],
		["People",
			"People: I'm committed to my crewmates, not to ideals. (Neutral)"
		],
		["Aspiration",
			"Aspiration: Someday I'll own my own ship and chart my own destiny. (Any)"
		],
	],
	bond : [
		"I'm loyal to my captain first, everything else second.",
		"The ship is most important\u2015 crewmates and captains come and go.",
		"I'll always remember my first ship.",
		"In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
		"I was cheated out of my fair share of the profits, and I want to get my due.",
		"Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."
	],
	flaw : [
		"I follow orders, even if I think they're wrong.",
		"I'll say anything to avoid having to do extra work.",
		"Once someone questions my courage, I never back down no matter how dangerous the situation.",
		"Once I start drinking, it's hard for me to stop.",
		"I can't help but pocket loose coins and other trinkets I come across.",
		"My pride will probably lead to my destruction."
	],
	toolProfs : [["Gaming Ser", 1], ["Musical instrument", 1], ["Navigator's tools"], ["Vehicles (water)"]],
	languageProfs : [1, "dwarvish", "nezumi", "hengeyokai", "spirit tongue"],
	lifestyle : "modest"
};
BackgroundList["minor viper clan member"] = {
	regExpSearch : /minor viper clan member/i,
	name : "Minor Viper Clan Member",
	source : ["MAH", 64],
	skills : ["Survival", "Insight"],
	gold : 10,
	equipright : [
		["A hunting trap", "", ""],
		["set of travelor's clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Wanderer",
	trait : [
		"I keep scraps of food and trinkets hidden away in my pockets.",
		"I ask questions all the time.",
		"I like to squeeze into compact places where nobody can harm me.",
		"I sleep with my back to solid surface, with all that I own embraced tightly in my arms.",
		"I have bad manners and eat like a pig.",
		"I expect that anybody who's nice to me is hiding malicious intent.",
		"I eschew bathing.",
		"I say, without reserve, what other people are implying or masking."
	],
	ideal : [
		["Respect",
			"Respect: Everybody, no matter their riches, deserves respect. (Good)"
		],
		["Community",
			"Community: We have to take look out for each other, because nobody else will do it for us. (Lawful)"
		],
		["Change",
			"Change: The low rise up, and the high and mighty come down. Change is natural. (Chaotic)"
		],
		["Retribution",
			"Retribution: The rich need to be shown how it is to live and die in the poor quarters. (Evil)"
		],
		["People",
			"People: I help those who help me\u2015 that is what lets us stay alive. (Neutral)"
		],
		["Aspiration",
			"Aspiration: I'm going to prove that I'm worthy of a better life. (Any)"
		],
	],
	bond : [
		"My town or city is my home, and I'll battle those that threaten it.",
		"I'm the benefactor of an orphanage so others may be kept from enduring what I was forced to endure.",
		"I owe my life to another urchin who taught me the ways of living in the gutters.",
		"I owe a debt I can never repay to the person who showed me sympathy.",
		"I got away from my life of poverty by robbing an influential person, and I'm wanted for it.",
		"No one else should have to suffer the difficulties I've been through."
	],
	flaw : [
		"I will run away from a fight if I'm outnumbered.",
		"A gold piece already has a lot of value to me, and I'll do just about anything for more of it.",
		"I will never completely trust another. I only trust myself.",
		"I would rather use an unfair advantage than fight honorably.",
		"It's not theft if I have more use for it than someone else.",
		"People who are incapable of taking care of themselves get what they deserve."
	],
	toolProfs : [["Gaming Set", 1], ["Musical instrument", 1], ["Disguise Kit", "Dex"]],
	languageProfs : [1, "dwarvish", "nezumi", "hengeyokai", "spirit tongue"],
	lifestyle : "modest"
};
BackgroundList["minor weasel clan member"] = {
	regExpSearch : /minor weasel clan member/i,
	name : "Minor Weasel Clan Member",
	source : ["MAH", 64],
	skills : ["Survival", "Performance"],
	gold : 10,
	equipright : [
		["A hunting trap", "", ""],
		["set of travelor's clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Wanderer",
	trait : [
		"I know a story relevant to almost every situation.",
		"Whenever I come to a new place, I collect local rumors and spread gossip.",
		"I'm a hopeless romantic, always searching for that 'special someone'.",
		"Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
		"I love a good insult, even one directed at me.",
		"I get bitter if I'm not the center of attention.",
		"I'll settle for nothing less than perfection.",
		"I change my mood or my mind as quickly as I change key in a song."
	],
	ideal : [
		["Beauty",
			"Beauty: When I perform, I make the world better than it was. (Good)"
		],
		["Tradition",
			"Tradition: The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)"
		],
		["Creativity",
			"Creativity: The world is in need of new ideas and bold action. (Chaotic)"
		],
		["Greed",
			"Greed: I'm only in it for the money and fame. [Evil]"
		],
		["People",
			"People: I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)"
		],
		["Honesty",
			"Honesty: Art should reflect the soul; it should come from within and reveal who we really are. (Any)"
		],
	],
	bond : [
		"My instrument is my most treasured possession, and it reminds me of someone I love.",
		"Someone stole my precious instrument, and someday I'll get it back.",
		"I want to be famous, whatever it takes.",
		"I idolize a hero of the old tales and measure my deeds against that person's.",
		"I will do anything to prove myself superior to my hated rival.",
		"I would do anything for the other members of my old troupe."
	],
	flaw : [
		"I'll do anything to win fame and renown.",
		"I'm a sucker for a pretty face.",
		"A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
		"I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
		"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
		"Despite my best efforts, I am unreliable to my friends."
	],
	toolProfs : [["Gaming Set", 1], ["Musical instrument", 1], ["Musical instrument", 1]],
	languageProfs : [1, "dwarvish", "nezumi", "hengeyokai", "spirit tongue"],
	lifestyle : "modest"
};
BackgroundList["minor wolf clan member"] = {
	regExpSearch : /minor wolf clan member/i,
	name : "Minor Wolf Clan Member",
	source : ["MAH", 64],
	skills : ["Survival", "Nature"],
	skillstxt : "Survival, Nature and choose one from Acrobatics or Athletics",
	gold : 10,
	equipright : [
		["A hunting trap", "", ""],
		["set of travelor's clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Wanderer",
	trait : [
		"I'm driven by a wanderlust that led me away from home.",
		"I watch over my friends as if they were a litter of newborn pups.",
		"I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
		"I have a lesson for every situation, drawn from observing nature.",
		"I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
		"I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
		"I feel far more comfortable around animals than people.",
		"I was, in fact, raised by wolves."
	],
	ideal : [
		["Change",
			"Change: Life is like the seasons, in constant change, and we must change with it. (Chaotic)"
		],
		["Greater Good",
			"Greater Good: It is each person's responsibility to make the most happiness for the whole tribe. (Good)"
		],
		["Honor",
			"Honor: If I dishonor myself, I dishonor my whole clan. (Lawful)"
		],
		["Might",
			"Might: The strongest are meant to rule. (Evil)"
		],
		["Nature",
			"Nature: The natural world is more important than all the constructs of civilization. (Neutral)"
		],
		["Glory",
			"Glory: I must earn glory in battle, for myself and my clan. (Any)"
		],
	],
	bond : [
		"My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
		"An injury to the unspoiled wilderness of my home is an injury to me.",
		"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
		"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
		"I suffer awful visions of a coming disaster and will do anything to prevent it.",
		"It is my duty to provide children to sustain my tribe."
	],
	flaw : [
		"I am too enamored of ale, wine, and other intoxicants.",
		"There's no room for caution in a life lived to the fullest.",
		"I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
		"I am slow to trust members of other races, tribes, and societies.",
		"Violence is my answer to almost any challenge.",
		"Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
	],
	toolProfs : [["Gaming Set", 1], ["Musical instrument", 1], ["Artisan's tools", 1]],
	languageProfs : [1, "dwarvish", "nezumi", "hengeyokai", "spirit tongue"],
	lifestyle : "modest"
};
BackgroundList["scholar of the ancient ways-martial artist"] = {
	regExpSearch : /scholar of the ancient ways-martial artist/i,
	name : "Scholar of the Ancient Ways-Martial Artist",
	source : ["MAH", 65],
	skills : ["Acrobatics", "Medicine", "Performance"],
	gold : 10,
	equipright : [
		["Sacred text-foundation of my training", "", ""],
		["set of common clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Are You Entertained?",
	trait : [
		"I judge people by their actions, not their words.",
		"If someone is in trouble, I'm always ready to lend help.",
		"When I set my mind to something, I follow through no matter what gets in my way.",
		"I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
		"I'm confident in my own abilities and do what I can to instill confidence in others.",
		"Thinking is for other people. I prefer action.",
		"I misuse long words in an attempt to sound smarter.",
		"I get bored easily. When am I going to get on with my destiny?"
	],
	ideal : [
		["Respect",
			"Respect: People deserve to be treated with dignity and respect. (Good)"
		],
		["Fairness",
			"Fairness: No one should get preferential treatment before the law, and no one is above the law. (Lawful)"
		],
		["Freedom",
			"Freedom: Tyrants must not be allowed to oppress the people. (Chaotic)"
		],
		["Might",
			"Might: If I become strong, I can take what I want\u2015 what I deserve. (Evil)"
		],
		["Sincerity",
			"Sincerity: There's no good in pretending to be something I'm not. (Neutral)"
		],
		["Destiny",
			"Destiny: Nothing and no one can steer me away from my higher calling. (Any)"
		],
	],
	bond : [
		"I have a family, but I have no idea where they are. One day, I hope to see them again.",
		"I worked the land, I love the land, and I will protect the land.",
		"A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
		"My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
		"I protect those who cannot protect themselves.",
		"I wish my childhood sweetheart had come with me to pursue my destiny."
	],
	flaw : [
		"The tyrant who rules my land will stop at nothing to see me killed.",
		"I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
		"The people who knew me when I was young know my shameful secret, so I can never go home again.",
		"I have a weakness for the vices of the city, especially hard drink.",
		"Secretly, I believe that things would be better if I were a tyrant lording over the land.",
	],
	languageProfs : [2],
	lifestyle : "modest"
};
BackgroundList["scholar of the ancient ways-master swordsman"] = {
	regExpSearch : /scholar of the ancient ways-master swordsman/i,
	name : "Scholar of the Ancient Ways-Master Swordsman",
	source : ["MAH", 65],
	skills : ["Athletics", "Acrobatics", "Survival"],
	gold : 10,
	equipright : [
		["Sacred text-foundation of my training", "", ""],
		["set of common clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Heirloom",
	trait : [
		"I'm always respectful and polite.",
		"I'm haunted by memories of war. I can't get the violent images out of my mind.",
		"I'm slow to make new friends, because I've lost too many old ones.",
		"I'm full of inspiring and cautionary tales from my military experience with some relevance to almost every type of combat situation.",
		"I can stare down a owlbear without flinching.",
		"I enjoy my strength and like to break things.",
		"I have a rough sense of humor.",
		"I approach problems head-on. A simple, direct course is the best path to a solution."
	],
	ideal : [
		["Greater Good",
			"Greater Good: Our fate is to give our lives in the defense of others. (Good)"
		],
		["Responsibility",
			"Responsibility: I do what I have to and follow just authority. (Lawful)"
		],
		["Independence",
			"Independence: When people obey orders blindly, they affirm a kind of tyranny. (Chaotic)"
		],
		["Might",
			"Might: In life as in war, the mightier force prevails. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Ideals aren't worth killing over or going to war for. (Neutral)"
		],
		["Nation",
			"Nation: My city, state, or people are the only things that matter. (Any)"
		],
	],
	bond : [
		"I would still give my life for the people I have served with.",
		"Someone saved my life on the battlefield. Even now, I would never leave a friend behind.",
		"My honor is my life.",
		"I'll never forget the crushing defeat my company endured or the foes who inflicted it.",
		"Those who fight with me are those worth laying down my life for.",
		"I fight for those who cannot fight for themselves."
	],
	flaw : [
		"The atrocious enemy we faced in battle still leaves me trembling with fear.",
		"I have little respect for those who are not a tested warrior.",
		"A disastrous mistake I made in battle cost many lives\u2015 I will do anything to keep that mistake a secret.",
		"My hatred of my foes is blind and unreasoning. ",
		"I uphold the law, even if the law causes suffering.",
		"I'd rather eat my weapon than admit when I'm wrong."
	],
	languageProfs : [2],
	lifestyle : "modest"
};
BackgroundList["scholar of the ancient ways-tactician"] = {
	regExpSearch : /scholar of the ancient ways-tactician/i,
	name : "Scholar of the Ancient Ways-Tactician",
	source : ["MAH", 65],
	skills : ["Deception", "Insight", "Perception"],
	gold : 10,
	equipright : [
		["Sacred text-foundation of my training", "", ""],
		["set of common clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Retainers",
	trait : [
		"I'm always respectful and polite.",
		"I'm haunted by memories of war. I can't get the violent images out of my mind.",
		"I'm slow to make new friends, because I've lost too many old ones.",
		"I'm full of inspiring and cautionary tales from my military experience with some relevance to almost every type of combat situation.",
		"I can stare down a owlbear without flinching.",
		"I enjoy my strength and like to break things.",
		"I have a rough sense of humor.",
		"I approach problems head-on. A simple, direct course is the best path to a solution."
	],
	ideal : [
		["Greater Good",
			"Greater Good: Our fate is to give our lives in the defense of others. (Good)"
		],
		["Responsibility",
			"Responsibility: I do what I have to and follow just authority. (Lawful)"
		],
		["Independence",
			"Independence: When people obey orders blindly, they affirm a kind of tyranny. (Chaotic)"
		],
		["Might",
			"Might: In life as in war, the mightier force prevails. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Ideals aren't worth killing over or going to war for. (Neutral)"
		],
		["Nation",
			"Nation: My city, state, or people are the only things that matter. (Any)"
		],
	],
	bond : [
		"I would still give my life for the people I have served with.",
		"Someone saved my life on the battlefield. Even now, I would never leave a friend behind.",
		"My honor is my life.",
		"I'll never forget the crushing defeat my company endured or the foes who inflicted it.",
		"Those who fight with me are those worth laying down my life for.",
		"I fight for those who cannot fight for themselves."
	],
	flaw : [
		"The atrocious enemy we faced in battle still leaves me trembling with fear.",
		"I have little respect for those who are not a tested warrior.",
		"A disastrous mistake I made in battle cost many lives\u2015 I will do anything to keep that mistake a secret.",
		"My hatred of my foes is blind and unreasoning. ",
		"I uphold the law, even if the law causes suffering.",
		"I'd rather eat my weapon than admit when I'm wrong."
	],
	languageProfs : [2],
	lifestyle : "modest"
};
BackgroundList["scholar of the ancient ways-Lremaster"] = {
	regExpSearch : /scholar of the ancient ways-loremaster/i,
	name : "Scholar of the Ancient Ways-Loremaster",
	source : ["MAH", 65],
	skills : ["Arcana", "Insight", "History"],
	gold : 10,
	equipright : [
		["Sacred text-foundation of my training", "", ""],
		["set of common clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Researcher",
	trait : [
		"I use polysyllabic words that convey the impression of great erudition.",
		"I've read every book in the world's greatest libraries\u2015 or I like to boast that I have.",
		"I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
		"There's nothing I like more than a good mystery.",
		"I'm willing to listen to every side of an argument before I make my own judgment.",
		"I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost. . . everyone . . . is . . . compared . . . to me.",
		"I am horribly, horribly awkward in social situations.",
		"I'm convinced that people are always trying to steal my secrets."
	],
	ideal : [
		["Knowledge",
			"Knowledge: The path to power and self-improvement is through knowledge. (Neutral)"
		],
		["Beauty",
			"Beauty: What is beautiful points us beyond itself toward what is true. (Good)"
		],
		["Logic",
			"Logic: Emotions must not cloud our logical thinking. (Lawful)"
		],
		["No Limits",
			"No Limits: Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)"
		],
		["Power",
			"Power: Knowledge is the path to power and domination. (Evil)"
		],
		["Self-Improvement",
			"Self-Improvement: The goal of a life of study is the betterment of oneself. (Any)"
		],
	],
	bond : [
		"It is my duty to protect my students.",
		"I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
		"I work to preserve a library, university, scriptorium, or monastery.",
		"My life's work is a series of tomes related to a specific field of lore.",
		"I've been searching my whole life for the answer to a certain question.",
		"I sold my soul for knowledge. I hope to do great deeds and win it back."
	],
	flaw : [
		"I am easily distracted by the promise of information.",
		"Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
		"Unlocking an ancient mystery is worth the price of a civilization.",
		"I overlook obvious solutions in favor of complicated ones.",
		"I speak without really thinking through my words, invariably insulting others.",
		"I can't keep a secret to save my life, or anyone else's."
	],
	languageProfs : [2],
	lifestyle : "modest"
};
BackgroundList["scholar of the ancient ways-infiltrator."] = {
	regExpSearch : /scholar of the ancient ways-infiltrator./i,
	name : "Scholar of the Ancient Ways-Infiltrator.",
	source : ["MAH", 65],
	skills : ["Acrobatics", "Deception", "Stealth"],
	gold : 10,
	equipright : [
		["Sacred text-foundation of my training", "", ""],
		["set of common clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "False Identity",
	trait : [
		"I fall in and out of love easily, and am always pursuing someone.",
		"I have a joke for every occasion, especially occasions where humor is inappropriate.",
		"Flattery is my preferred trick for getting what I want.",
		"I'm a born gambler who can't resist taking a risk for a potential payoff.",
		"I lie about almost everything, even when there's no good reason to.",
		"Sarcasm and insults are my weapons of choice.",
		"I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
		"I pocket anything I see that might have some value."
	],
	ideal : [
		["Independence",
			"Independence: I am a free spirit \u2015 no one tells me what to do. (Chaotic)"
		],
		["Fairness",
			"Fairness: I never target people who can't afford to lose a few coins. (Lawful)"
		],
		["Charity",
			"Charity: I distribute the money I acquire to the people who really need it. (Good)"
		],
		["Creativity",
			"Creativity: I never run the same con twice. (Chaotic)"
		],
		["Friendship",
			"Friendship: Material goods come and go. Bonds of friendship last forever. (Good)"
		],
		["Aspiration",
			"Aspiration: I'm determined to make something of myself. (Any)"
		],
	],
	bond : [
		"I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
		"I owe everything to my mentor \u2015 a horrible person who's probably rotting in jail somewhere.",
		"Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
		"I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
		"A powerful person killed someone I love. Someday soon, I'll have my revenge.",
		"I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
	],
	flaw : [
		"I can't resist a pretty face.",
		"I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
		"I'm convinced that no one could ever fool me the way I fool others.",
		"I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
		"I can't resist swindling people who are more powerful than me.",
		"I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
	],
	languageProfs : [2],
	lifestyle : "modest"
};
BackgroundList["scholar of the ancient ways-elementalist."] = {
	regExpSearch : /scholar of the ancient ways-elementalist./i,
	name : "Scholar of the Ancient Ways-Elementalist.",
	source : ["MAH", 65],
	skills : ["Arcana", "Nature", "Religion"],
	gold : 10,
	equipright : [
		["Sacred text-foundation of my training", "", ""],
		["set of common clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Shelter of the Faithful",
	trait : [
		"I venerate a distinct hero of my faith, and persistently reference that individual's accomplishments and lessons.",
		"I can find universal ground between the most vehement enemies, sympathizing with them and always moving toward unity.",
		"I see portents in all things. The gods attempt to communicate to us, we just need to pay attention.",
		"Nothing can rattle my positive attitude.",
		"I quote (or misquote) holy scripture and aphorisms in nearly all circumstances.",
		"I am accepting (or unaccepting) of other faiths and honor (or dishonor) the devotion to other deities.",
		"I've enjoyed exquisite food, drink, and aristocracy among my faith's most elite. Rougher lifestyles chafe me.",
		"I've spent so much time in the confines of the temple that I have few functional skills interacting with individuals in the rest of the world."
	],
	ideal : [
		["Tradition",
			"Tradition: The age-old institutions of devotion and forfeiture must be sustained and maintained. (Lawful)"
		],
		["Charity",
			"Charity: I always attempt to assist those in need, regardless of the personal cost. (Good)"
		],
		["Change",
			"Change: We must help induce the developments the gods are continually cultivating in the world. (Chaotic)"
		],
		["Power",
			"Power: I aspire to someday ascend to the elite of my faith's highest echelon. (Lawful)"
		],
		["Faith",
			"Faith: I believe that my deity will direct my work. I have confidence that if I work diligently, my work will be rewarded. (Lawful)"
		],
		["Aspiration",
			"Aspiration: I aim to demonstrate myself worth my deity's favor by paralleling my actions against their instruction. (Any)"
		],
	],
	bond : [
		"I would sacrifice anything to recover a long lost ancient relic of my temple (or faith).",
		"I will get revenge on my temple's corrupted hierarchy that branded me a heretic.",
		"I can never repay what I owe to the priest that took me in as an orphan.",
		"Everything I do is for those less fortunate.",
		"I will do whatever is necessary to keep my temple safe.",
		"I safeguard holy scripture that some claim is heretical and seek to destroy."
	],
	flaw : [
		"I hold others to a high standard, and myself even higher.",
		"I place too much faith in those most powerful within my temple's hierarchy.",
		"My religiosity can lead me to naively trust those that claim faith in my deity.",
		"I am very stubborn in my thinking.",
		"I am pessimistic and distrustful of strangers.",
		"Once I choose an objective, I become so single minded that the rest of my life fades into the background."
	],
	languageProfs : [2],
	lifestyle : "modest"
};
BackgroundList["scholar of the ancient ways-shaman."] = {
	regExpSearch : /scholar of the ancient ways-shaman./i,
	name : "Scholar of the Ancient Ways-Shaman.",
	source : ["MAH", 65],
	skills : ["Arcana", "Insight", "Nature"],
	gold : 10,
	equipright : [
		["Sacred text-foundation of my training", "", ""],
		["set of common clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Wanderer",
	trait : [
		"I'm driven by a wanderlust that led me away from home.",
		"I watch over my friends as if they were a litter of newborn pups.",
		"I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
		"I have a lesson for every situation, drawn from observing nature.",
		"I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
		"I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
		"I feel far more comfortable around animals than people.",
		"I was, in fact, raised by wolves."
	],
	ideal : [
		["Change",
			"Change: Life is like the seasons, in constant change, and we must change with it. (Chaotic)"
		],
		["Greater Good",
			"Greater Good: It is each person's responsibility to make the most happiness for the whole tribe. (Good)"
		],
		["Honor",
			"Honor: If I dishonor myself, I dishonor my whole clan. (Lawful)"
		],
		["Might",
			"Might: The strongest are meant to rule. (Evil)"
		],
		["Nature",
			"Nature: The natural world is more important than all the constructs of civilization. (Neutral)"
		],
		["Glory",
			"Glory: I must earn glory in battle, for myself and my clan. (Any)"
		],
	],
	bond : [
		"My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
		"An injury to the unspoiled wilderness of my home is an injury to me.",
		"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
		"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
		"I suffer awful visions of a coming disaster and will do anything to prevent it.",
		"It is my duty to provide children to sustain my tribe."
	],
	flaw : [
		"I am too enamored of ale, wine, and other intoxicants.",
		"There's no room for caution in a life lived to the fullest.",
		"I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
		"I am slow to trust members of other races, tribes, and societies.",
		"Violence is my answer to almost any challenge.",
		"Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
	],
	languageProfs : [2],
	lifestyle : "modest"
};
BackgroundList["scholar of the ancient ways-diplomat."] = {
	regExpSearch : /scholar of the ancient ways-diplomat./i,
	name : "Scholar of the Ancient Ways-Diplomat.",
	source : ["MAH", 65],
	skills : ["Deception", "Persuasion", "Performance"],
	gold : 10,
	equipright : [
		["Sacred text-foundation of my training", "", ""],
		["set of common clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Position of Privilege",
	trait : [
		"My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
		"The common folk love me for my kindness and generosity.",
		"No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
		"I take great pains to always look my best and follow the latest fashions.",
		"I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
		"Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
		"My favor, once lost, is lost forever.",
		"If you do me an injury, I will crush you, ruin your name, and salt your fields."
	],
	ideal : [
		["Respect",
			"Respect: Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)"
		],
		["Responsibility",
			"Responsibility: It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)"
		],
		["Independence",
			"Independence: I must prove that I can handle myself without the coddling of my family. (Chaotic)"
		],
		["Power",
			"Power: If I can attain more power, no one will tell me what to do. (Evil)"
		],
		["Family",
			"Family: Blood runs thicker than water. (Any)"
		],
		["Noble Obligation",
			"Noble Obligation: It is my duty to protect and care for the people beneath me. (Good)"
		],
	],
	bond : [
		"I will face any challenge to win the approval of my family.",
		"My house's alliance with another noble family must be sustained at all costs.",
		"Nothing is more important than the other members of my family.",
		"I am in love with the heir of a family that my family despises.",
		"My loyalty to my sovereign is unwavering.",
		"The common folk must see me as a hero of the people."
	],
	flaw : [
		"I secretly believe that everyone is beneath me.",
		"I hide a truly scandalous secret that could ruin my family forever.",
		"I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
		"I have an insatiable desire for carnal pleasures.",
		"In fact, the world does revolve around me.",
		"By my words and actions, I often bring shame to my family."
	],
	languageProfs : [2],
	lifestyle : "modest"
};
BackgroundList["yakuza"] = {
	regExpSearch : /yakuza/i,
	name : "Yakuza",
	source : ["MAH", 65],
	skills : ["Deception", "Intimidation"],
	gold : 25,
	equipright : [
		["Ledger w/20 names (owe me 5gp)", "", ""],
		["set of fine clothes", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Insightful Criminal",
	trait : [
		"I always have a plan for what to do when things go wrong.",
		"I am always calm, no matter the situation. I never raise my voice or let my emotions control me.",
		"The first thing I do in a new place is note the locations of everything valuable \u2015 or where such things could be hidden.",
		"I would rather make a new friend than a new enemy.",
		"I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
		"I don't pay attention to the risks in a situation. Never tell me the odds.",
		"The best way to get me to do something is to tell me I can't do it.",
		"I blow up at the slightest insult."
	],
	ideal : [
		["Honor",
			"Honor: I don't steal from others in the trade. (Lawful)"
		],
		["Freedom",
			"Freedom: Chains are meant to be broken, as are those who would forge them. (Chaotic)"
		],
		["Charity",
			"Charity: I steal from the wealthy so that I can help people in need. (Good)"
		],
		["Greed",
			"Greed: I will do whatever it takes to become wealthy. (Evil)"
		],
		["People",
			"People: I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)"
		],
		["Redemption",
			"Redemption: There's a spark of good in everyone. (Good)"
		],
	],
	bond : [
		"I'm trying to pay off an old debt I owe to a generous benefactor.",
		"My ill-gotten gains go to support my family.",
		"Something important was taken from me, and I aim to steal it back.",
		"I will become the greatest thief that ever lived.",
		"I'm guilty of a terrible crime. I hope I can redeem myself for it.",
		"Someone I loved died because of a mistake I made. That will never happen again."
	],
	flaw : [
		"When I see something valuable, I can't think about anything but how to steal it.",
		"When faced with a choice between money and my friends, I usually choose the money.",
		"If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
		"I have a \"tell\" that reveals when I'm lying.",
		"I turn tail and run when things look bad.",
		"An innocent person is in prison for a crime that I committed. I'm okay with that."
	],
	languageProfs : [1],
	lifestyle : "modest"
};
// Add the backgrounds features
BackgroundFeatureList["oriental heritage"] = {
	description : "I have excellent knowledge of terrain/natural resources in the Orient.\nI find twice as much food/water in wilderness areas when i forage there.\nAdditionally, I always know the time of day and which way is north.",
	source : ["MAH", 63]
};
BackgroundFeatureList["heirloom"] = {
	description : "As a warrior of one of the great clans, I have an heirloom of great significance to me.\nI have either inherited it or earned it through impressive accomplishments.",
	source : ["MAH", 63]
};
BackgroundFeatureList["born rider"] = {
	description : "I have advantage on any check I make to remain mounted.",
	source : ["MAH", 63]
};
BackgroundFeatureList["swamp lander"] = {
	description : "Difficult terrain doesn’t slow my travel in a swamp and I can't get lost in a swamp except through magical means.\nI also have adv. on saving throws against wilderness hazards such as quicksand and razorvine.",
	source : ["MAH", 63]
};
BackgroundFeatureList["mountain born"] = {
	description : "You’re acclimated to high altitude, including elevations above 20,000 feet.\nYou’re also naturally adapted to cold climates.",
	source : ["MAH", 63]
};
BackgroundFeatureList["respect among the clans"] = {
	description : "I always get free room and board anywhere members of great or minor clans dwell.\nIndividuals in such a settlement might vie among themselves to determine who can offer me (and possibly my compatriots) the finest accommodations and assistance.",
	source : ["MAH", 63]
};
BackgroundFeatureList["wanderer"] = {
	description : "I have an excellent memory for maps and geography, and I can always recall the general layout of terrain, settlements, and other features around me. In addition, I can find food and fresh water for myself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.",
	source : ["MAH", 64]
};
BackgroundFeatureList["by popular demand"] = {
	description : "I can always find a place to perform-inn/tavern/circus/theater, or noble’s court.\nI receive free lodging/food there as long as I perform each night.\nMy performance makes me something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.",
	source : ["MAH", 64]
};
BackgroundFeatureList["false identity"] = {
	description : "I have a 2nd identity-inc. documentation,/acquaintances/disguises\nI can forge documents including official papers/personal letters, as long as I have seen an example of the kind of document or the handwriting I'm trying to copy.",
	source : ["MAH", 64]
};
BackgroundFeatureList["mercenary at sea"] = {
	description : "I can find mercenary work between adventures to maintain a comfortable lifestyle\nAdditionally, when I need to, I can secure free passage on a sailing ship for myself and my adventuring companions. In return for your free passage, me and my companions are expected to assist the crew during the voyage.",
	source : ["MAH", 64]
};
BackgroundFeatureList["are you entertained?"] = {
	description : "I can always find a place to perform (arena/pit fight), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me.",
	source : ["P", 131]
};
BackgroundFeatureList["retainers"] = {
	description : "I have the service of three retainers loyal to me family, one of whom is another noble and my squire. My other retainers are commoners who can perform mundane tasks for me, but they do not fight for me, will not follow me into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.",
	source : ["P", 136]
};
BackgroundFeatureList["researcher"] = {
	description : "When I attempt to learn or recall a piece of lore, if I do not know that information, I often know where and from whom I can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.",
	source : ["P", 138]
};
BackgroundFeatureList["false identity"] = {
	description : "I have created a second identity that includes documentation, established acquaintances, and disguises that allow me to assume that persona. Additionally, I can forge documents, including official papers and personal letters, as long as I have seen an example of the kind of document or the handwriting I am trying to copy.",
	source : ["P", 128]
};
BackgroundFeatureList["shelter of the faithful"] = {
	description : "I command the respect of those who share my faith. I can perform the religious ceremonies of my faith. My companions and I can expect free healing and care at an establishment of my faith, though I must provide any material components needed for spells. Those who share my religion will support me at a modest lifestyle.",
	source : ["P", 127]
};
BackgroundFeatureList["position of privilege"] = {
	description : "I am welcome in high society, and people assume I have the right to be wherever I am. The common folk make every effort to accommodate me and avoid my displeasure, and other people of high birth treat me as a member of the same social sphere. I can secure an audience with a local noble if I need to.",
	source : ["P", 135]
};
BackgroundFeatureList["position of privilege"] = {
	description : "I know a lot about what goes on in/out of my “territory”.\nIn any civilized area, I might know things others don’t.\nSee how much you know by consulting the table below.\nDC:5-common, DC:10-uncommon, DC:15-obscure, DC:20-extremely obscure",
	source : ["MAH", 65]
};


//CREATURES OF THE ORIENT:
//MOUNTS/VEHICLES:
//Mounts - Vehicles
CreatureList["chickadee"] = {
	name : "Chickadee",
	source : ["MAH", 24],
	size : 5, //Tiny,
	type : "Beast",
	subtype : "",
	companion : "mount",
	alignment : "Unaligned",
	ac : 12,
	hp :  1,
	hd : [1, 4], //[#, die]
	Speed : "10 ft, fly 20 ft",
	scores : [2, 14, 9, 2, 11, 12], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacks : [{
			name : "Beak",
			ability : 2,
			damage : [1, 4, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
		},
	],
	traits : [{
			name : "Flyby",
			description : "The chickadee doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
		}, {
			name : "Keen Hearing and Sight",
			description : "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
		}
	],
};
CreatureList["draft elephant"] = {
	name : "Draft Elephant",
	source : ["MAH", 24],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	companion : "mount",
	alignment : "Unaligned",
	ac : 15,
	hp : 92,
	hd : [8, 12], //[#, die]
	speed : "30 ft",
	scores : [22, 9, 20, 3, 15, 8], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [3, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Trampling Charge trait",
		},
	],
	traits : [{
			name : "Trampling Charge",
			description : "If the elephant moves at least 20 ft straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action.",
		},
	],
};
CreatureList["riding elephant"] = {
	name : "Riding Elephant",
	source : ["MAH", 25],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	companion : "mount",
	alignment : "Unaligned",
	ac : 15,
	hp : 69,
	hd : [6, 12], //[#, die]
	speed : "40 ft",
	scores : [20, 9, 20, 3, 15, 8], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 1,
		attacks : [{
			name : "Gore",
			ability : 1,
			damage : [2, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Trampling Charge trait",
		}, {
			name : "Stomp",
			ability : 1,
			damage : [3, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Can only be used on prone creatures (also see Trampling Charge trait)",
		},
	],
	traits : [{
			name : "Trampling Charge",
			description : "If the elephant moves at least 20 ft straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action.",
		},
	],
};
CreatureList["war elephant"] = {
	name : "War Elephant",
	source : ["MAH", 25],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	companion : "mount",
	alignment : "Unaligned",
	ac : 15,
	hp : 138,
	hd : [12, 12], //[#, die]
	speed : "40 ft",
	scores : [24, 9, 20, 3, 15, 8], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "6",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [3, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : "If used after moving 20 ft straight in the same round, see Trampling Charge trait",
		}, {
			name : "Stomp",
			ability : 1,
			damage : [3, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Can only be used on prone creatures (also see Trampling Charge trait)",
		},
	],
	traits : [{
			name : "Trampling Charge",
			description : "If the elephant moves at least 20 ft straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action.",
		},
	],
};
CreatureList["draft rhinoceros"] = {
	name : "Draft Rhinoceros",
	source : ["MAH", 24],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	companion : "mount",
	alignment : "Unaligned",
	ac : 17,
	hp : 95,
	hd : [10, 10], //[#, die]
	speed : "30 ft",
	scores : [21, 10, 8, 2, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 11,
	languages : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Charge trait",
		},
	],
	traits : [{
			name : "Charge",
			description : "If the rhinoceros moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
		}, {
			name : "Sure-Footed",
			description : "Whenever the rhino would be knocked prone, it stays on its feet if it succeeds on a DC 10 Strength saving throw",
		},
	],
};
CreatureList["riding rhinoceros"] = {
	name : "Riding Rhinoceros",
	source : ["MAH", 25],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	companion : "mount",
	alignment : "Unaligned",
	ac : 17,
	hp : 76,
	hd : [8, 10], //[#, die]
	speed : "50 ft",
	scores : [20, 9, 20, 3, 15, 8], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [2, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Charge trait",
		}, {
			name : "Stomp",
			ability : 1,
			damage : [3, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Can only be used on prone creatures (also see Trampling Charge trait)",
		},
	],
	traits : [{
			name : "Charge",
			description : "If the rhinoceros moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
		}, {
			name : "Sure-Footed",
			description : "Whenever the rhino would be knocked prone, it stays on its feet if it succeeds on a DC 10 Strength saving throw",
		},
	],
};
CreatureList["war rhinoceros"] = {
	name : "war Rhinoceros",
	source : ["MAH", 25],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	companion : "mount",
	alignment : "Unaligned",
	ac : 17,
	hp : 114,
	hd : [12, 10], //[#, die]
	speed : "50 ft",
	scores : [22, 10, 18, 3, 15, 8], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"Athletics" : 7,
	},
	passivePerception : 12,
	languages : "",
	challengeRating : "5",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [2, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Impale trait",
		},
	],
	traits : [{
			name : "Impale",
			desription : "If the rhinoceros moves at least 20 feet straight toward a creature right before hitting it with a gore attack, the target takes an extra 18 (4d8) piercing damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the rhino can’t impale another target",
		}, {
			name : "Sure-Footed",
			description : "Whenever the rhino would be knocked prone, it stays on its feet if it succeeds on a DC 10 Strength saving throw",
		},	{
			name : "Relentless (Recharge short rest)",
			description : "If the rhino takes damage that reduces it to 0 hit points, unless the damage is from a critical hit, it drops to 1 hit point instead",
		},
	],
};
CreatureList["heron"] = {
	name : "Heron",
	source : ["MAH", 25],
	size : 4, //Small
	type : "Beast",
	subtype : "",
	companion : "mount",
	alignment : "Unaligned",
	ac : 11,
	hp : 2,
	hd : [1, 4], //[#, die]
	speed : "20 ft, fly 40 ft",
	scores : [2, 12, 10, 2, 13, 10], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 4,
	},
	senses : "Adv. on Wis (Perception) checks using hearing/sight",
	passivePerception : 15,
	languages : "Giant Owl, understands Common, Elvish, and Sylvan but can't speak",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Talons",
			ability : 1,
			damage : [1, "", "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
		},
	],
	traits : [{
			name : "Keen Hearing and Sight",
			description : "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
		},
	],
};
CreatureList["war-tiger"] = {
	name : "War-Tiger",
	source : [["M", 336], ["MAH", 25]],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 17,
	hp : 52,
	hd : [7, 10], //[#, die]
	speed : "40 ft",
	scores : [18, 14, 15, 3, 12, 8], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3,
		"stealth" : 6,
	},
	senses : "Adv. on Wis (Perception) checks using smell",
	passivePerception : 13,
	languages : "",
	challengeRating : "5",
	proficiencyBonus : 2,
	attacksAction : 3,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [2, 8, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, can attack twice while pouncing see Pounce trait",
			modifiers : ["", 1, ""], //[to hit, to damage, add ability to damage] "" means ignore
		}, {
			name : "Bite",
			ability : 1,
			damage : [2, 10, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
		},
	],
	traits : [{
			name : "Keen Smell",
		description : "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
		}, {
			name : "Pounce",
			description : "If the tiger moves at least 20 feet straight toward a creature and then hits it with a reinforced claw attack on the same turn, that target must succeed on a DC 15 Strength saving throw or be knocked prone. If the target is prone, the tiger can make two additional attacks with its claws against it as a bonus action .",
		}, {
			name : "War-tiger Armor",
			description : "The War-tiger wears lamellar barding (giving it 17 AC)",
		},
	],
};
//FAMILIARS OF THE ORIENT
CreatureList["ancestral spark"] = {
	name : "Ancestral Spark",
	source : ["MAH", 26],
	size : 5, //Tiny
	type : "Elemental",
	subtype : "",
	companion : "familiar",
	alignment : "Neutral",
	ac : 15,
	hp : 5,
	hd : [2, 4],
	speed : "0 ft, fly 30 ft (hover)",
	scores : [4, 20, 10, 10, 15, 15], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"history" : 5,
	},
	condition_immunities : "charmed, exhaustion, grappled, paralyzed, poisoned, prone, restrained, unconscious",
	senses : "Darkvision 60 ft",
	passivePerception : 13,
	languages : "The languages it knew in life, telepathy 60 ft",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [],
	traits : [{
			name : "Ephemeral",
			description : "The spark can’t wear or carry anything",
		}, 	{
			name : "Innate Spellcasting",
			description : "The spark’s innate spellcasting ability is Wisdom (spellsave DC 12, +4 to hit with spell attacks). The spark can innately cast the following spells, requiring no material components: At will: shocking grasp 1/day each: faerie fire Lesser Nature Spirit",
		},
	],
};
CreatureList["lesser nature spirit"] = {
	name : "Lesser Nature Spirit",
	source : ["MAH", 26],
	size : 5, //Tiny
	type : "Celestial",
	subtype : "",
	companion : "familiar",
	alignment : "Neutral",
	ac : 14,
	hp : 9,
	hd : [2, 4],
	speed : "0 ft, fly 30 ft (hover)",
	scores : [1, 19, 14, 13, 19, 11], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"nature" : 6,
	},
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, grappled, paralyzed, poisoned, prone, restrained, unconscious",
	senses : "Darkvision 120 ft",
	passivePerception : 14,
	languages : "Oriental (common), Druidic, Sylvan, telepathy 120 ft.",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [],
	traits : [{
			name : "Ephemeral",
			description : "The spark can’t wear or carry anything",
		}, 	{
			name : "Innate Spellcasting",
			description : "The nature spirit’s innate spellcasting ability is Wisdom (spellsave DC 14). The nature spirit can innately cast the following spells, requiring no material components: At will: druidcraft 1/day each: entangle, goodberry",
		},	{
			name : "Speak with Beasts and Plants",
			description : "The nature spirit can communicate with beasts and plants as if they shared a language",
		},
	],
};
CreatureList["lesser phoenix"] = {
	name : "Lesser Phoenix",
	source : ["MAH", 26],
	size : 5, //Tiny
	type : "Elemental",
	subtype : "",
	companion : "familiar",
	alignment : "Neutral good",
	ac : 13,
	hp : 13,
	hd : [3, 4],
	speed : "10 ft, fly 40 ft",
	scores : [3, 17, 14, 10, 15, 10], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 4,
	},
	damage_resistances : "lightning",
	damage_immunities : "fire, radiant",
	condition_immunities : "charmed, exhaustion, paralyzed, poisoned",
	senses : "",
	passivePerception : 14,
	languages : "Common, Oriental, Primordial",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Radiant talons",
			ability : 2,
			damage : [1, 4, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "The target must make a DC 11 Constitution aving throw, taking 10 (3d6) radiant damage on a failed save, or half as much damage on a successful one.",
		},
	],
	traits : [{
			name : "Illumination",
			decription : "The phoenix sheds bright light in a 10-foot radius and dim light for an additional 10 feet",
		}, 	{
			name : "Magic Resistance",
			description : "The phoenix has advantage on saving throws against spells and other magical effects",
		},	{
			name : "Undying Flames",
			description : "If damage reduces the phoenix to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is necrotic or from a critical hit. On a success, the phoenix drops to 1 hit point instead, and all creatures within 5 feet take 3d6 radiant damage as the phoenix returns to life in a burst of heavenly flames",
		},
	],
};
CreatureList["void thing"] = {
	name : "Void Thing",
	source : ["MAH", 26],
	size : 5, //Tiny
	type : "Abboration",
	subtype : "",
	companion : "familiar",
	alignment : "Unalignment",
	ac : 19,
	hp : 2,
	hd : [1, 4],
	speed : "10 ft, fly 30 ft (hover)",
	scores : [1, 28, 10, 17, 14, 11], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 7,
	},
	damage_resistances : "acid, cold, fire, lightning, necrotic, radiant, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
	condition_immunities : "charmed, exhaustion, grappled, paralyzed, poisoned, prone, restrained, unconscious",
	senses : "darkvision 120 ft",
	passivePerception : 12,
	languages : "understands all languages but can’t speak",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Void Tendril",
			ability : 5,
			damage : [2, 4, "cold, lightning, necrotic, radiant, or thunder damage (void thing’s choice)."],
			range : "Melee (5 ft)",
			description : "The target must make a DC 11 Constitution saving throw, taking 10 (3d6) radiant damage on a failed save, or half as much damage on a successful one.",
		},
	],
	actions : [{
			name : "Invisibility",
			description : "The void thing and its darkness magically become invisible until it attacks, or until its concentration ends (as if concentrating on a spell)"
		},
	],
	traits : [{
			name : "Ephemeral",
			description : "The void thing can’t wear or carry anything",
		},	{
			name : "Incorporeal Movement",
			description : "The void thing can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object",
		},	{
			name : "Limited Telepathy",
			description : "The void thing can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language",
		},	{
			name : "Variable Darkness",
			description : "The void thing spreads darkness in a 5 to 20 ft radius around itself. The void thing can alter the radius as a bonus action.",
		},
	],
};
//Other Summonable CREATURES
CreatureList["plasmin"] = {
	name : "Plasmin",
	source : ["MAH", 26],
	size : 4, //Medium
	type : "Ooze (Tainted)",
	subtype : "",
	companion : "",
	alignment : "Unalignment",
	ac : 8,
	hp : 30,
	hd : [4, 8],
	speed : "10 ft",
	scores : [12, 6, 16, 1, 1, 2], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	damage_immunities : "necrotic, psychic",
	damage_resistances : "slashing",
	damage_vulnerabilities : "poison",
	condition_immunities : "blinded, charmed, deafened, exhaustion, frightened, prone",
	senses : "blindsight 60 ft. (blind beyond this radius)",
	passivePerception : 5,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Pseudopod",
			ability : 1,
			damage : [2, 6, "necrotic"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If target is a creature, it must succeed a DC 13 Con save or be cursed w/blood rot." + "\n   " + "The cursed target can’t regain hp. If the cursed target is reduced to 0 hp, it has disadv on death saves" + "\n   " + "If cursed target dies, its blood begins to swirl, and rises as a plasmin in 1d4 rounds." + "\n   " + "Curse lasts til removed by remove curse spell or other magic."
		},
	],
	traits : [{
			name : "Amorphous",
			description : "The ooze can move through a space as narrow as 1 inch wide without squeezing",
		},	{
			name : "Bound by Maho",
			description : "The ooze is bound to a maho-tsukai who forms a telepathic bond" + "\n   " + "The maho-tsukai can command the ooze using a bonus action on each of its turns.",
		},	{
			name : "Maho Fuel",
			description : "While in 20 ft of ooze, the maho-tsukai can use ooze’s vitality, instead of its own for spells" + "\n   " + "If a maho-tsukai does-ooze takes the dmg the maho-tsukai would",
		},
	],
};