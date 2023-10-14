const animals = [
    {
        id: 1,
        name: 'Black Bear',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ursus_americanus_americanus_%28American_black_bear%29.jpg/1200px-Ursus_americanus_americanus_%28American_black_bear%29.jpg',
        fact: 'Black bears are the most common bear in North America.',
        parks: [],
        found: false
    },
    {
        id: 2,
        name: 'Grizzly Bear',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ursus_arctos_horribilis_%28Grizzly_bear%29.jpg/1200px-Ursus_arctos_horribilis_%28Grizzly_bear%29.jpg',
        fact: 'Grizzly bears are the largest bears in North America.',
        parks: [],
        found: false
    },
    {
        id: 3,
        name: 'Pine Marten',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Martes_martes_%28pine_marten%29.jpg/1200px-Martes_martes_%28pine_marten%29.jpg',
        fact: 'Pine martens are small, agile members of the weasel family.',
        parks: [],
        found: false
    },
    {
        id: 4,
        name: 'American Badger',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Taxidea_taxus_01.jpg/1200px-Taxidea_taxus_01.jpg',
        fact: 'American badgers are known for their powerful digging abilities.',
        parks: [],
        found: false
    },
    {
        id: 5,
        name: 'Alaska Red Fox',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vulpes_vulpes_alascensis.jpg/1200px-Vulpes_vulpes_alascensis.jpg',
        fact: 'Alaska red foxes are the largest subspecies of red fox.',
        parks: [],
        found: false
    },
    {
        id: 6,
        name: 'Gray Fox',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Urocyon_cinereoargenteus_cinereoargenteus.jpg/1200px-Urocyon_cinereoargenteus_cinereoargenteus.jpg',
        fact: 'Gray foxes are the only foxes that can climb trees.',
        parks: [],
        found: false
    },
    {
        id: 7,
        name: 'Coyote',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Canis_latrans_or_Canis_lupus_latrans.jpg/1200px-Canis_latrans_or_Canis_lupus_latrans.jpg',
        fact: 'Coyotes are highly adaptable animals and can be found in a variety of habitats.',
        parks: [],
        found: false
    },
    {
        id: 8,
        name: 'Mountain Lion',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Puma_concolor_%28cougar%29.jpg/1200px-Puma_concolor_%28cougar%29.jpg',
        fact: 'Mountain lions are the largest cats in North America.',
        parks: [],
        found: false
    }
    // ,
    // {goldenManteledMarmot: {
    //     id: 9,
    //     name: 'Golden-mantled Marmot',
    //     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Marmota_flaviventris_flaviventris_%28Golden-mantled_marmot%29.jpg/1200px-Marmota_flaviventris_flaviventris_%28Golden-mantled_marmot%29.jpg',
    //     fact: 'Golden-mantled marmots are known for their whistling calls.',
    //     parks: []
    // }},
    // {fisherGroundSquirrel: {
    //     id: 10,
    //     name: 'Fisher Ground Squirrel',
    //     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Spermophilus_richardsonii.jpg/1200px-Spermophilus_richardsonii.jpg',
    //     fact: 'Fisher ground squirrels are found in a variety of habitats',
    //     parks: []
    // }},
    // {mantledGroundSquirrel: {
    //     id: 11,
    //     name: 'Mantled Ground Squirrel',
    //     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Callospermophilus_lateralis.jpg/1200px-Callospermophilus_lateralis.jpg',
    //     fact: 'Mantled ground squirrels are the largest ground squirrels in North America.',
    //     parks: []
    // }},
    // {sierraGoldenMantledGroundSquirrel: {
    //     id: 12,
    //     name: 'Sierra Golden-mantled Ground Squirrel',
    //     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Callospermophilus_saturatus.jpg/1200px-Callospermophilus_saturatus.jpg',
    //     fact: 'Sierra golden-mantled ground squirrels are found at higher elevations than other ground squirrels.',
    //     parks: []
    // }},
    // {nushagakGroundSquirrel: {
    //     id: 13,
    //     name: 'Nushagak Ground Squirrel',
    //     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Spermophilus_parryii_kodiacensis.jpg/1200px-Spermophilus_parryii_kodiacensis.jpg',
    //     fact: 'Nushagak ground squirrels are the only ground squirrels found on Kodiak Island.',
    //     parks: []
    // }},
    // {chipmunk: {
    //     id: 14,
    //     name: 'Chipmunk',
    //     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Eastern_Chipmunk_profile.jpg/1200px-Eastern_Chipmunk_profile.jpg',
    //     fact: 'Chipmunks can climb trees and swim.',
    //     parks: []
    // }},
    // {northernRedSquirrel: {
    //     id: 15,
    //     name: 'Northern Red Squirrel',
    //     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tamiasciurus_hudsonicus.jpg/1200px-Tamiasciurus_hudsonicus.jpg',
    //     fact: 'Northern red squirrels are known for their aggressive behavior and their loud calls, especially when they are defending their territory.',
    //     parks: []
    // }},
    // {sierraChickaree: {
    //     id: 16,
    //     name: 'Sierra Chickaree',
    //     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Tamiasciurus_douglasii.jpg/1200px-Tamiasciurus_douglasii.jpg',
    //     fact: 'Sierra chickarees are found in the coniferous forests of the Sierra Nevada mountains and are known for their loud calls.',
    //     parks: []
    // }}
]

export default animals
