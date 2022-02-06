Hooks.once('KTMC Registered', ()=>{

  KTMC.data = {
      'arenea': {
        name: 'arenea',
        menu: 'Arenea',
        title: '',
        hd: 6,
        hdMod: [0],
        saves: {
          6: [11, 12, 11, 14, 12],
          1: [13, 14, 13, 16, 15],
        },
        thac0: {
          6: [17, 2],
          1: [19, 0]
        },
        xp: [2800, 5600, 11200, 12400, 44800, 89600, 168000, 318000, 468000],
        req: 'INT DEX | INT 13',
        spellCaster: true,
        spellSlot: {
          1:{1: {max: 1}, 2: {max: 0}, 3: {max: 0}, 4: {max: 0}, 5: {max: 0}, 6: {max: 0}},
          2:{1: {max: 2}, 2: {max: 0}, 3: {max: 0}, 4: {max: 0}, 5: {max: 0}, 6: {max: 0}},
          3:{1: {max: 2}, 2: {max: 1}, 3: {max: 0}, 4: {max: 0}, 5: {max: 0}, 6: {max: 0}},
          4:{1: {max: 2}, 2: {max: 2}, 3: {max: 0}, 4: {max: 0}, 5: {max: 0}, 6: {max: 0}},
          5:{1: {max: 2}, 2: {max: 2}, 3: {max: 1}, 4: {max: 0}, 5: {max: 0}, 6: {max: 0}},
          6:{1: {max: 2}, 2: {max: 2}, 3: {max: 2}, 4: {max: 0}, 5: {max: 0}, 6: {max: 0}},
          7:{1: {max: 3}, 2: {max: 2}, 3: {max: 2}, 4: {max: 1}, 5: {max: 0}, 6: {max: 0}},
          8:{1: {max: 3}, 2: {max: 3}, 3: {max: 2}, 4: {max: 2}, 5: {max: 0}, 6: {max: 0}},
          9:{1: {max: 3}, 2: {max: 3}, 3: {max: 3}, 4: {max: 2}, 5: {max: 1}, 6: {max: 0}},
          10:{1: {max: 3}, 2: {max: 3}, 3: {max: 3}, 4: {max: 3}, 5: {max: 2}, 6: {max: 0}}
        },
        spellType: 'magic-user',
        spellPackName: 'OSE-CharacterBuilder.OSE-SRD-spells',
        description: `<p><strong>Requirements</strong>: INT 13</p>
        <p><strong>Prime Requisite</strong>: INT and DEX</p>
        <p><strong>Hit Dice</strong>: 1d6</p>
        <p><strong>Maximum Level</strong>: 10</p>
        <p><strong>Armor</strong>: None</p>
        <p><strong>Weapons</strong>: Small Weapons</p>
        <p><strong>Languages</strong>: Alignment, Common, Elf, Arenea</p>
        `,
        notes: `<p>Arenea are intelligent Spiders, about the size of a small pony. Generally brown or greenish in color, an oddly shaped dome on their back (which houses their brain) and their eight eyes, glimmering with intelligence betray their true nature. Their pedipalps are each divided into five somewhat weak, but flexible digits which they can use to manipulate small items and tools.</p>
        <p>Innately Magical, most Arenea are preoccupied with seeking to unlock the mysteries of Magic through constant Research, developing unusual Spells and Items in the process.&nbsp;</p>`,
        languages: ['Alignment', 'Common', 'Elf', 'Arenea'],
        journal: `<br><br><b>Journal Entry</b>: @Compendium[ktrey-monster-classes.journalentries.HqJ9NYsBPOTWBCQc]{Arenea Progression}<br>`,
        maxLvl: 10
      },
      'chameleon man': {
        name: 'chameleon man',
        menu: 'Chameleon Man',
        title: '',
        hd: 8,
        hdMod: [],
        saves: {
          7: [8, 9, 10, 10, 12],
          4: [10, 11, 12, 13, 14],
          1: [12, 13, 14, 15, 16],
        },
        thac0: {
          7: [14, 5],
          4: [17, 2],
          1: [19, 0]
        },
        xp: [2800, 5600, 11200, 22400, 45800, 91600, 183200, 283200],
        req: 'DEX , WIS | WIS 9',
        spellCaster: false,
        description: `<p><strong>Requirements</strong>: WIS 9</p>
        <p><strong>Prime Requisite</strong>: DEX and WIS</p>
        <p><strong>Hit Dice</strong>: 1d8</p>
        <p><strong>Maximum Level</strong>: 9</p>
        <p><strong>Armor</strong>: None (Shields Permitted)</p>
        <p><strong>Weapons</strong>: Any</p>
        <p><strong>Languages</strong>: Alignment, Common, Lizard Man</p>`,
        notes: `<p>Chameleon Men are an enigmatic people that generally dwell far from civilization, often within the safety of deep caverns and forgotten forests. Extremely tall compared to Humans (seven feet in height is not uncommon), they are typically very thin in proportion, with long spindly arms and gangly legs that grant them an awkward gait.</p>
        <p>Their most striking feature is their multicolored skin, covered in tiny, close-knit, and ever-shifting, scales that are that usually form resplendent zebra-like stripes. It&rsquo;s said that these can encompass all the colors of the rainbow and more. These colors almost seem to swirl and shift as they move, a trick of the light as it refracts off their scales.</p>
        <p>Seen as &ldquo;primitive&rdquo; and &ldquo;uncivilized&rdquo; by most Sages, Chameleon Men generally live in harmony with nature, eschewing most forms of technology. They have good reason to be cautious around outsiders: For centuries, unscrupulous Alchemist and Arcanists have hunted them for their skins, which are then used as a grisly reagent in the construction of <em>Robes of Blending</em>.</p>
        <p>Occasionally, a member of their community will leave their society, though they remain tightlipped about the reasons. It&rsquo;s speculated that the structure of their society is such that to challenge their leadership, they must first experience ostracization in the outside world.</p>`,
        languages: ['Alignment', 'Common', 'Lizard Man'],
        journal: `<br><br><b>Journal Entry</b>: @Compendium[ktrey-monster-classes.journalentries.8vOXk9xAAM68DBWz]{Lizard Man Progression}<br>`,
        maxLvl: 9
      },
      'eye tyrant': {
        name: 'eye tyrant',
        menu: 'Eye Tyrant',
        title: '',
        hd: 8,
        hdMod: [0,0],
        saves: {
          11: [8, 9, 8, 11, 8],
          6: [11, 12, 11, 14, 12],
          1: [12, 13, 14, 15, 16],
        },
        thac0: {
          11: [14, 5],
          6: [17, 2],
          1: [19, 0]
        },
        xp: [4300, 8600, 17200, 34400, 68800, 137600, 258000, 408000, 558000, 708000],
        req: 'CON , INT | INT 15',
        spellCaster: false,
        description: `<p><strong>Requirements</strong>: INT 15</p>
        <p><strong>Prime Requisite</strong>: CON and INT</p>
        <p><strong>Hit Dice</strong>: 1d8</p>
        <p><strong>Maximum Level</strong>: 11</p>
        <p><strong>Armor</strong>: None (Shields Not Permitted)</p>
        <p><strong>Weapons</strong>: None</p>
        <p><strong>Languages</strong>: Alignment, Common</p>`,
        notes: `<p>Dominated by their large, central namesake Eye, Eye Tyrants are roughly sphere shaped with large toothy maws and long, prehensile tongues. Their orb-like body sprouts 10 writhing stalks, each terminating with a smaller Eye.</p>`,
        languages: ['Alignment', 'Common'],
        journal: `<br><br><b>Journal Entry</b>: @Compendium[ktrey-monster-classes.journalentries.cJKGnu2WwRwDZUIL]{Eye Tyrant Progression}<br>`,
        maxLvl: 11
      },
      'flutterling': {
        name: 'flutterling',
        menu: 'Flutterling',
        title: '',
        hd: 10,
        hdMod: [0],
        saves: {
          10: [6, 7, 8, 8, 8],
          7: [8, 9, 9, 10, 10],
          4: [10, 11, 11, 13, 12],
          1: [12, 13, 14, 15, 16],
        },
        thac0: {
          9: [14, 5],
          5: [17, 2],
          1: [19, 0]
        },
        xp: [3800, 7600, 15200, 30400, 60800, 121600, 128000, 378000, 528000],
        req: 'DEX | All < 15',
        spellCaster: false,
        description: `<p><strong>Requirements</strong>: No Score Above 15</p>
        <p><strong>Prime Requisite</strong>: DEX</p>
        <p><strong>Hit Dice</strong>: 1d10 (special)</p>
        <p><strong>Maximum Leve</strong>l: 10</p>
        <p><strong>Armor</strong>: None (Shields Not Permitted)</p>
        <p><strong>Weapons</strong>: Special</p>
        <p><strong>Languages</strong>: Alignment, Common, Elvish, Pixie</p>`,
        notes: `<p>Flutterlings are diminutive Sylvan humanoids less than an inch tall with clear, veined, Dragonfly-like wings sprouting from their backs. They are very delicate in appearance, sparkling slightly with a silvery cast and are nearly always found in groups (called a Shimmer). These Shimmers act in concert as a single Character and are incapable of travelling outside of sight of each other.</p>`,
        languages: ['Alignment', 'Common', 'Elvish', 'Pixie'],
        journal: `<br><br><b>Journal Entry</b>: @Compendium[ktrey-monster-classes.journalentries.na9p5UljpXTEqN6w]{Flutterling Progression}<br>`,
        maxLvl: 10
      },
      'gnoll': {
        name: 'gnoll',
        menu: 'Gnoll',
        title: '',
        hd: 8,
        hdMod: [],
        saves: {
          7: [8, 9, 10, 10, 12],
          4: [10, 11, 12, 13, 14],
          1: [12, 13, 14, 15, 16],
        },
        thac0: {
          8: [12, 7],
          7: [13, 6],
          6: [14, 5],
          5: [15, 4],
          4: [16, 3],
          3: [17, 2],
          2: [18, 1],
          1: [19, 0]
        },
        xp: [2300, 4600, 9200, 18400, 37800, 75600, 151200],
        req: 'STR | STR 15',
        spellCaster: false,
        description: `<p><strong>Requirements</strong>: STR 13</p>
        <p><strong>Prime Requisite</strong>: STR</p>
        <p><strong>Hit Dice</strong>: 1d8</p>
        <p><strong>Maximum Level</strong>: 8</p>
        <p><strong>Armor</strong>: Leather, Chainmail, Shields</p>
        <p><strong>Weapons</strong>: Any</p>
        <p><strong>Languages</strong>: Alignment, Common, Gnoll</p>`,
        notes: `<p>Gnolls are ferocious humanoids that resemble a cross between a very tall Human and a Hyena. They have hyenalike heads, and long gangly limbs that possess a lean and surprising strength. Their bodies are covered in coarse fur that can vary in color from dull yellow to a rusty reddish-brown and is often spotted.</p>
        <p>Their society is almost completely Matriarchal, and it can be incredibly difficult for other peoples to tell apart a Male Gnoll from a Female Gnoll (the Females are usually larger). In their Clans, Males are generally seen as disposable and even used as an emergency food source in very lean times.</p>
        <p>Although they are prone to form packs (known as Clans or Cackles), their violent and competitive society occasionally results in Gnolls embarking on their own adventures.</p>
        <p>Ever voracious, Gnolls are known to be able to eat almost anything, subsisting largely on carrion and stolen prey from other Carnivores. Their prodigious jaw strength allows them to even break through thicker bones to slurp the nutrient rich marrow inside.</p>
        <p>Somewhat suspect rumors suggest that the first Gnolls were the result of a magical combination of a Gnome and Troll, but Gnolls have no similar stories in their extensive oral histories and greet any such tales with their tell-tale maniacal and eerie cackling laughter.</p>
        `,
        languages: ['Alignment', 'Common', 'Gnoll'],
        journal: `<br><br><b>Journal Entry</b>: @Compendium[ktrey-monster-classes.journalentries.N8WtCJseEdhtx0CV]{Gnoll Progression}<br>`,
        maxLvl: 8
      },
      'harpy': {
        name: 'harpy',
        menu: 'Harpy',
        title: '',
        hd: 6,
        hdMod: [],
        saves: {
          7: [4, 5, 6, 7, 8],
          4: [6, 7, 8, 10, 10],
          1: [8, 9, 10, 13, 12],
        },
        thac0: {
          7: [14, 5],
          4: [17, 2],
          1: [19, 0]
        },
        xp: [2200, 4400, 8800, 17600, 36200, 72400, 144800],
        req: 'CHA, DEX | DEX 13',
        spellCaster: false,
        description: `<p><strong>Requirements</strong>: DEX 13</p>
        <p><strong>Prime Requisite</strong>: CHA and DEX</p>
        <p><strong>Hit Dice</strong>: 1d6</p>
        <p><strong>Maximum Level</strong>: 8</p>
        <p><strong>Armor</strong>: None (Shields Permitted)</p>
        <p><strong>Weapons</strong>: Any appropriate to Size</p>
        <p><strong>Languages</strong>: Alignment, Common, Harpy</p>`,
        notes: `<p>Harpies possess an upper body that is not dissimilar to that of a small Human and a lower body and wings of a giant bird of prey. Their wings are large and feathered to support flight, with two small finger claws that are mostly used for grooming. Their feet terminate in large, wickedly sharp talons.</p>`,
        languages: ['Alignment', 'Common', 'Harpy'],
        journal: `<br><br><b>Journal Entry</b>: @Compendium[ktrey-monster-classes.journalentries.qKyH8uMmT1J2StNg]{Harpy Progression}<br>`,
        maxLvl: 8
      },
      'living statue': {
        name: 'living statue',
        menu: 'Living Statue',
        title: '',
        hd: 8,
        hdMod: [],
        saves: {
          4: [10, 11, 11, 13, 12],
          1: [12, 13, 14, 15, 16],
        },
        thac0: {
          4: [17, 2],
          1: [19, 0]
        },
        xp: [2000, 4000, 8000, 16000, 33000, 132000, 232000, 332000, 432000, 532000],
        req: 'CHA/STR/DEX | CON 13',
        spellCaster: false,
        description: `<p><strong>Requirements</strong>: CON 13<br /><strong>Prime Requisite</strong>: by Alignment (CHA, STR, DEX) Hit Dice: 1d8<br /><strong>Maximum Level</strong>: 12<br /><strong>Armor</strong>: None (Shields permitted)<br /><strong>Weapons</strong>: Any<br /><strong>Languages</strong>: Alignment, Common, Gargoyle</p>`,
        notes: `<p>Living Statues appear as Statues that display distinctive characteristics depending on their Alignment. Lawful Living Statues have a Crystalline, faceted Appearance. Neutral Living Statues appear to be forged from solid Iron. Chaotic Living Statues are covered with a Stony skin-like crust but seethe and churn internally with molten Magma.</p>
        <p>Conventional Lore dictates that Living Statues are created by powerful wizards, but some Sages seem to disagree on these points. Unlike Golems, Living Statues seem to be possessed of free-will, and do not blindly follow the instructions of their &ldquo;creator.&rdquo;</p>
        <p>Though magic is obviously involved in bringing them &ldquo;to life&rdquo; some speculate they may be more akin to spirits summoned or bound to animate their mineral material, with the Alignment of the Summoner potentially influencing which spirits respond.</p>
        <p>Once animated, Living Statues often outlive those who brought them into being, and sometimes form distinctive societies by type.</p>`,
        languages: ['Alignment', 'Common', 'Gargoyle'],
        journal: `<br><br><b>Journal Entry</b>: @Compendium[ktrey-monster-classes.journalentries.vaJca9gZNlk9eEhc]{Living Statue Progression}<br>`,
        maxLvl: 4
      },
      'lizard man': {
        name: 'lizard man',
        menu: 'Lizard Man',
        title: '',
        hd: 6,
        hdMod: [],
        saves: {
          1: [11, 12, 14, 16, 15],
        },
        thac0: {
          13: [10, 9],
          10: [12, 7],
          7: [14, 5],
          4: [17, 2],
          1: [19, 0]
        },
        thac0: {
          1: [19, 0]
        },
        xp: [1500, 3000, 6000],
        req: 'STR | STR 13, CON 9',
        spellCaster: false,
        description: `<p><strong>Requirements</strong>: STR 13, CON 9</p>
        <p><strong>Prime Requisite</strong>: STR</p>
        <p><strong>Hit Dice</strong>: 1d6</p>
        <p><strong>Maximum Level</strong>: 12</p>
        <p><strong>Armor</strong>: None (Shields permitted)</p>
        <p><strong>Weapons</strong>: Any</p>
        <p><strong>Languages</strong>: Alignment, Common, Lizard Man, Dragon</p>`,
        notes: `<p>Lizard Men are a swamp-dwelling people that stand between six to seven feet tall. As their name suggests, they are reptilian in appearance, with thoroughly scaled-skin and strong tails.</p>
        <p>Their hands and feet are clawed and webbed (to aid in swimming). The color of their scales can vary wildly in hue with yellow, various shades of green, and deep black being the most common. Very rarely, leucistic colorations of pale white with reddish pink eyes have been known to occur.</p>
        <p>Lizard Men generally do not wear clothing over their scales but may occasionally don belts/baldrics for storage of weapons and other small items.</p>
        <p><strong>Alignment</strong>: Lizard Men may be of any alignment, but most are Neutral.</p>`,
        languages: ['Alignment', 'Common', 'Lizard Man', 'Dragon'],
        journal: `<br><br><b>Journal Entry</b>:@Compendium[ktrey-monster-classes.journalentries.8vOXk9xAAM68DBWz]{Lizard Man Progression}<br>`,
        maxLvl: 4
      },
      'phanaton': {
        name: 'phanaton',
        menu: 'Phanaton',
        title: '',
        hd: 8,
        hdMod: [],
        saves: {

          7: [4, 5, 6, 7, 8],
          4: [6, 7, 8, 10, 10],
          1: [8, 9, 10, 13, 12],
        },
        thac0: {
          7: [14, 5],
          4: [17, 2],
          1: [19, 0]
        },
        xp: [1600, 3200, 6400, 12800, 25600, 51200, 96000],
        req: 'DEX | WIS 13',
        spellCaster: false,
        description: `<p><strong>Requirements</strong>: WIS 13</p>
        <p><strong>Prime Requisite</strong>: DEX</p>
        <p><strong>Hit Dice</strong>: 1d6</p>
        <p><strong>Maximum Level</strong>: 8</p>
        <p><strong>Armor</strong>: Leather Only</p>
        <p><strong>Weapons</strong>: Any appropriate to Size</p>
        <p><strong>Languages</strong>: Alignment, Common, Elf, Treant, Pixie</p>`,
        notes: `<p>Resembling a cross between a Racoon and a Ring-Tailed Lemur, Phanatons are a small, inquisitive, people that usually are found within Forests and Jungles.</p>
        <p>They are roughly the size of Halflings and possess four-foot- long tails and feet that are effective at grasping and assist with climbing. Additionally, they possess a membrane of colorful skin, stretching from their under-arm to their upper thighs that allows them to Glide from branch-to-branch.</p>
        <p>Phanatons live in villages in the treetops/canopy, harmoniously constructed from woven vines, wood, and linked together with rope bridges. The prefer to subsit mostly on Fruit and Vegetables, but they may eat Meat occasionally. Spiders are considered a delicacy.</p>
        <p>Traditionally, Phanatons get along very well with the other Woodland Peoples (Elfs, Treants, Dryads, etc.) but sometimes run afoul with Humans and other Humanoids who attempt to cut down their Forest homes. Phantons have been known to sabotage any timber-harvesting efforts in their territory, often by annoying, but harmless tricks on the woodcutters or by damaging or destroying vital equipment.</p>`,
        languages: ['Alignment', 'Common', 'Treant', 'Pixie'],
        journal: `<br><br><b>Journal Entry</b>: @Compendium[ktrey-monster-classes.journalentries.YPYP1RAtFAqBjwoj]{Phanaton Progression}<br>`,
        maxLvl: 10
      },
      'rock man': {
        name: 'rock man',
        menu: 'Rock Man',
        title: '',
        hd: 12,
        hdMod: [],
        saves: {
          7: [4, 5, 6, 7, 8],
          4: [6, 7, 8, 10, 10],
          1: [8, 9, 10, 13, 12],
        },
        thac0: {
          7: [14, 5],
          4: [17, 2],
          1: [19, 0]
        },
        xp: [2700, 5400, 10800, 21600, 44200, 88400, 176800, 276800],
        req: 'STR CON | CON 13',
        spellCaster: false,
        description: `<p><strong>Requirements</strong>: CON 13</p>
        <p><strong>Prime Requisite</strong>: STR and CON</p>
        <p><strong>Hit Dice</strong>: 1d12</p>
        <p><strong>Maximum Level</strong>: 9</p>
        <p><strong>Armor</strong>: None (Shields Not Permitted)</p>
        <p><strong>Weapons</strong>: None</p>
        <p><strong>Languages</strong>: Alignment, Common, Dwarf, Gargoyle</p>`,
        notes: `<p>Rock Men are a strange, stocky people who have skin that is not unlike granite. Their bodies tend taper toward the top, creating a pointed head that resembles a stalagmite or small stone spire.</p>
        <p>They favor mountains and caverns, but do not build villages or use weapons or clothing. When standing still, a Rock Man is often completely indistinguishable from the surrounding terrain features.</p>
        <p>Slow in speech and even slower to react, Rock Men often are drawn to roads and passes near their territory, where they exact tolls on Travelers wishing to traverse the area. They will usually accept less if paid in Gems or Jewelry. Their diet consists of these exotic minerals and some metals.</p>`,
        languages: ['Alignment', 'Common', 'Dwarf', 'Gargoyle'],
        journal: `<br><br><b>Journal Entry</b>: @Compendium[ktrey-monster-classes.journalentries.wiI6OjBoGREEnplH]{Rock Man Progression}<br>`,
        maxLvl: 9
      },
      'tortoisefolk': {
        name: 'tortoisefolk',
        menu: 'Tortoisefolk',
        title: '',
        hd: 10,
        hdMod: [0],
        saves: {
          10: [6, 7, 8, 9, 10],
          7: [8, 9, 10, 10, 12],
          4: [10, 11, 12, 13, 14],
          1: [12, 13, 14, 15, 16],
        },
        thac0: {
          8: [14, 5],
          4: [17, 2],
          1: [19, 0]
        },
        xp: [2600, 5200, 10400, 20800, 42600, 85200, 170400, 270400, 370400],
        req: 'CON WIS | DEX 12',
        spellCaster: false,
        description: `<p><strong>Requirements</strong>: Maximum DEX 12</p>
        <p><strong>Prime Requisite</strong>: CON and WIS</p>
        <p><strong>Hit Dice</strong>: 1d8</p>
        <p><strong>Maximum Level</strong>: 10</p>
        <p><strong>Armor</strong>: None (Shields Permitted)</p>
        <p><strong>Weapons</strong>: Any</p>
        <p><strong>Languages</strong>: Alignment, Common, Tortoisefolk</p>`,
        notes: `<p>Land-dwelling, humanoid Turtles, Tortoisefolk stand about as tall as a Human but walk upright but with very ponderous and deliberate steps. They have leathery reptilian skin, usually in shades of olive or bluish green, and possess extraordinary shells that cover most of their torso, leaving only their heads and limbs exposed. They can withdraw into this strong and hardy shell for significant protection if needed, and while not the strongest of swimmers, they are naturally buoyant and can easily float.</p>
        <p>Tortoisefolk are generally peaceful and scholarly farmers but are fiercely protective of their homelands. As a people, they rarely wear clothing, save the occasional belt or harnesses for carrying tools and supplies.</p>
        <p>Far too heavy and bulky to use conventional mounts, they prefer to use wagons and carts in conjunction with draft animals to travel more rapidly than their slow stride allows.</p>
        <p>Tortoisefolk have a marked preference for warmer climates and have little tolerance for cold weather. Those who live in temperate regions tend to migrate to warmer lands when winter draws near, packing up everything they own onto large, slow-moving wagon trains.</p>`,
        languages: ['Alignment', 'Common', 'Tortoisefolk'],
        journal: `<br><br><b>Journal Entry</b>:@Compendium[ktrey-monster-classes.journalentries.FWPM9OPcuInS7FFk]{Tortoisefolk Progression}<br>`,
        maxLvl: 10
      },
    }


});