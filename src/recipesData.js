export const categories = [
  { id: "all", name: "All Items" },
  { id: "base", name: "Base Blocks & Items" },
  { id: "nether", name: "Nether Resources" },
  { id: "end", name: "End Resources" },
  { id: "combat_utility", name: "Combat & Utility" },
  { id: "armor_trims", name: "Armor Trims" },
  { id: "custom_food", name: "Filipino Cuisine (Custom)" }
];

export const recipesData = [
  {
    id: "sand",
    name: "Sand",
    category: "base",
    tier: 0,
    outputImage: "/recipes/output_recipe/sand.png",
    recipeImage: "/recipes/sand.png",
    inputs: [],
    description: "Who in the right mind na mag crcraft neto??."
  },
  {
    id: "red_sand",
    name: "Red Sand",
    category: "base",
    tier: 0,
    outputImage: "/recipes/output_recipe/red_sand.png",
    recipeImage: "/recipes/red_sand.png",
    inputs: [],
    description: "Basta red sya na sand."
  },
  {
    id: "netherrack",
    name: "Netherrack",
    category: "nether",
    tier: 0,
    outputImage: "/recipes/output_recipe/netherrack.png",
    recipeImage: "/recipes/netherrack.png",
    inputs: [],
    description: "The only way to get netherrack tho."
  },
  {
    id: "soul_sand",
    name: "Soul Sand",
    category: "nether",
    tier: 0,
    outputImage: "/recipes/output_recipe/soul_sand.png",
    recipeImage: "/recipes/soul_sand.png",
    inputs: ["netherrack"],
    description: "You probably need one of these."
  },
  {
    id: "soul_soil",
    name: "Soul Soil",
    category: "nether",
    tier: 0,
    outputImage: "/recipes/output_recipe/soul_soil.png",
    recipeImage: "/recipes/soul_soil.png",
    inputs: ["soul_sand"],
    description: "A soil block found in the Soul Sand Valley."
  },
  {
    id: "basalt",
    name: "Basalt",
    category: "nether",
    tier: 0,
    outputImage: "/recipes/output_recipe/basalt.png",
    recipeImage: "/recipes/basalt.png",
    inputs: [],
    description: "A dark volcanic rock found in the Nether."
  },
  {
    id: "blackstone",
    name: "Blackstone",
    category: "nether",
    tier: 0,
    outputImage: "/recipes/output_recipe/blackstone.png",
    recipeImage: "/recipes/black_stone.png",
    inputs: ["netherrack"],
    description: "A dark cobblestone-like block found in basalt deltas."
  },
  {
    id: "calcite",
    name: "Calcite",
    category: "base",
    tier: 0,
    outputImage: "/recipes/output_recipe/calcite.png",
    recipeImage: "/recipes/calcite.png",
    inputs: ["nether_quartz_ore"],
    description: "White solid stuff."
  },
  {
    id: "blaze_rod",
    name: "Blaze Rod",
    category: "nether",
    tier: 0,
    outputImage: "/recipes/output_recipe/blaze_rod.png",
    recipeImage: "/recipes/blaze_rod.png",
    inputs: [],
    description: "My Hot Rod"
  },
  {
    id: "ghast_tear",
    name: "Ghast Tear",
    category: "nether",
    tier: 0,
    outputImage: "/recipes/output_recipe/ghast_tear.png",
    recipeImage: "/recipes/ghast_tear.png",
    inputs: ["soul_sand"],
    description: "I dont know what kind of book is that in the recipe."
  },
  {
    id: "shulker_shell",
    name: "Shulker Shell",
    category: "end",
    tier: 0,
    outputImage: "/recipes/output_recipe/shulker_shell.png",
    recipeImage: "/recipes/shulker_shell.png",
    inputs: [],
    description: "That turte helmet tho is a pain in the neck"
  },
  {
    id: "end_stone",
    name: "End Stone",
    category: "end",
    tier: 0,
    outputImage: "/recipes/output_recipe/end_stone.png",
    recipeImage: "/recipes/end_stone.png",
    inputs: [],
    description: "Yup, you can cook gilded blackstone. "
  },
  {
    id: "nether_wart",
    name: "Nether Wart",
    category: "nether",
    tier: 0,
    outputImage: "/recipes/output_recipe/nether_wart.png",
    recipeImage: "/recipes/nether_wart.png",
    inputs: ["netherrack"],
    description: "The Giga-chad for all potion ingredients"
  },
  {
    id: "sugar_cane",
    name: "Sugar Cane",
    category: "base",
    tier: 0,
    outputImage: "/recipes/output_recipe/sugar_cane.png",
    recipeImage: "/recipes/output_recipe/sugar_cane.png",
    inputs: [],
    description: "Sugar cane lang boss."
  },
  {
    id: "leather",
    name: "Leather",
    category: "base",
    tier: 0,
    outputImage: "/recipes/output_recipe/leather.png",
    recipeImage: "/recipes/leather.png",
    inputs: [],
    description: "#MayGamitNadenPagpag"
  },
  {
    id: "xp",
    name: "Experience Bottle",
    category: "combat_utility",
    tier: 0,
    outputImage: "/recipes/output_recipe/experience_bottle.png",
    recipeImage: "/recipes/xp.png",
    inputs: [],
    description: "All visayans love this."
  },
  {
    id: "blaze_powder",
    name: "Blaze Powder",
    category: "nether",
    tier: 1,
    outputImage: "/recipes/output_recipe/blaze_powder.png",
    recipeImage: "/recipes/blaze_powder.png",
    inputs: ["blaze_rod"],
    description: "Can be used as a fuel for witchcraft potions"
  },
  {
    id: "bone_meal",
    name: "Bone Meal",
    category: "base",
    tier: 1,
    outputImage: "/recipes/output_recipe/bone_meal.png",
    recipeImage: "/recipes/bonemeal-1.png",
    inputs: [],
    description: "Fertilizer crafted from bones. (You can fertilize me mommy)"
  },
  {
    id: "gunpowder",
    name: "Gunpowder",
    category: "combat_utility",
    tier: 1,
    outputImage: "/recipes/output_recipe/gunpowder.png",
    recipeImage: "/recipes/gun_powde.png",
    inputs: [],
    description: "Explosive powder dropped by Creepers, there i said it...dont even think about crafting this"
  },
  {
    id: "nether_brick",
    name: "Nether Brick",
    category: "nether",
    tier: 1,
    outputImage: "/recipes/output_recipe/nether_brick.png",
    recipeImage: "/recipes/nether_brick.png",
    inputs: ["ancient_debris"],
    description: "Smelted netherrack, used to build fortresses."
  },
  {
    id: "purpur_block",
    name: "Purpur Block",
    category: "end",
    tier: 1,
    outputImage: "/recipes/output_recipe/purpur_block.png",
    recipeImage: "/recipes/purpu_block.png",
    inputs: ["chorus_flower"],
    description: "Decorative purpur skrrktt skrrtt."
  },
  {
    id: "chorus_flower",
    name: "Chorus Flower",
    category: "end",
    tier: 1,
    outputImage: "/recipes/output_recipe/chorus_flower.png",
    recipeImage: "/recipes/chorus_flower.png",
    inputs: ["end_stone"],
    description: "Pink kipay. ay violet ."
  },
  {
    id: "crimson_fungus",
    name: "Crimson Fungus",
    category: "nether",
    tier: 1,
    outputImage: "/recipes/output_recipe/crimson_fungus.png",
    recipeImage: "/recipes/crimson_fungus.png",
    inputs: ["nether_wart"],
    description: "Fungus found in the Crimson Forest."
  },
  {
    id: "crimson_nylium",
    name: "Crimson Nylium",
    category: "nether",
    tier: 1,
    outputImage: "/recipes/output_recipe/crimson_nylium.png",
    recipeImage: "/recipes/crimson_nylium.png",
    inputs: [],
    description: "Mycelium-like netherrack variant."
  },
  {
    id: "warped_fungus",
    name: "Warped Fungus",
    category: "nether",
    tier: 1,
    outputImage: "/recipes/output_recipe/warped_fungus.png",
    recipeImage: "/recipes/warped_fungus.png",
    inputs: ["crimson_fungus"],
    description: "Fungus found in the Warped Forest."
  },
  {
    id: "warped_nylium",
    name: "Warped Nylium",
    category: "nether",
    tier: 1,
    outputImage: "/recipes/output_recipe/warped_nylium.png",
    recipeImage: "/recipes/warped_nylium.png",
    inputs: [],
    description: "Cyan mycelium-like netherrack variant."
  },
  {
    id: "ancient_debris",
    name: "Ancient Debris",
    category: "nether",
    tier: 1,
    outputImage: "/recipes/output_recipe/ancient_debris.png",
    recipeImage: "/recipes/ancient_debri.png",
    inputs: ["end_stone"],
    description: "You better store this shi immediately after you craft"
  },
  {
    id: "nether_quartz_ore",
    name: "Nether Quartz Ore",
    category: "nether",
    tier: 1,
    outputImage: "/recipes/output_recipe/nether_quartz_ore.png",
    recipeImage: "/recipes/nether_quartz_ore.png",
    inputs: ["netherrack"],
    description: "Probably the most complicated recipe ive seen so far."
  },
  {
    id: "gilded_blackstone",
    name: "Gilded Blackstone",
    category: "nether",
    tier: 1,
    outputImage: "/recipes/output_recipe/gilded_blackstone.png",
    recipeImage: "/recipes/guilded_blackstone.png",
    inputs: ["blackstone"],
    description: "Blackstone containing gold veins (but my veins are harder)."
  },
  {
    id: "ender_eye",
    name: "Ender Eye",
    category: "end",
    tier: 2,
    outputImage: "/recipes/output_recipe/ender_eye.png",
    recipeImage: "/recipes/ender_eye.png",
    inputs: ["end_stone"],
    description: "Muntik na maging useless to."
  },
  {
    id: "crying_obsidian",
    name: "Crying Obsidian",
    category: "nether",
    tier: 2,
    outputImage: "/recipes/output_recipe/crying_obsidian.png",
    recipeImage: "/recipes/crying_obsidian.png",
    inputs: [],
    description: "Luminous obsidian variant used to craft Respawn Anchors."
  },
  {
    id: "brewing_stand",
    name: "Brewing Stand",
    category: "combat_utility",
    tier: 2,
    outputImage: "/recipes/output_recipe/brewing_stand.png",
    recipeImage: "/recipes/brewing_stand.png",
    inputs: ["blaze_rod"],
    description: "Witchcraft Stand ng Visayas."
  },
  {
    id: "tnt",
    name: "TNT",
    category: "combat_utility",
    tier: 2,
    outputImage: "/recipes/output_recipe/tnt.png",
    recipeImage: "/recipes/tnt.png",
    inputs: ["ghast_tear"],
    description: "Mindanao's Favorite Block."
  },
  {
    id: "netherite_ingot",
    name: "Netherite Ingot",
    category: "nether",
    tier: 2,
    outputImage: "/recipes/output_recipe/netherite_ingot.png",
    recipeImage: "/recipes/netherite_ingot.png",
    inputs: ["ancient_debris"],
    description: "Strongest alloy metal, crafted from Ancient Debris and Gold."
  },
  {
    id: "dried_ghast",
    name: "Dried Ghast",
    category: "nether",
    tier: 2,
    outputImage: "/recipes/output_recipe/dried_ghast.png",
    recipeImage: "/recipes/dried_ghast.png",
    inputs: ["calcite"],
    description: "A specially dried Ghast ingredient."
  },
  {
    id: "end_crystal",
    name: "End Crystal",
    category: "end",
    tier: 3,
    outputImage: "/recipes/output_recipe/end_crystal.png",
    recipeImage: "/recipes/End_crystal.png",
    inputs: ["ender_eye", "tnt_minecart"],
    description: "CPvp when?."
  },
  {
    id: "respawn_anchor",
    name: "Respawn Anchor",
    category: "nether",
    tier: 3,
    outputImage: "/recipes/output_recipe/respawn_anchor.png",
    recipeImage: "/recipes/respawn_anchor.png",
    inputs: ["end_crystal", "crying_obsidian"],
    description: "Late game demon block fr fr."
  },
  {
    id: "ender_chest",
    name: "Ender Chest",
    category: "end",
    tier: 3,
    outputImage: "/recipes/output_recipe/ender_chest.png",
    recipeImage: "/recipes/ender_chest.png",
    inputs: ["ender_eye", "gilded_blackstone", "crying_obsidian"],
    description: "The only way to use your chests anywhere."
  },
  {
    id: "shulker_box",
    name: "Shulker Box",
    category: "end",
    tier: 3,
    outputImage: "/recipes/output_recipe/shulker_box.png",
    recipeImage: "/recipes/shulker_box.png",
    inputs: ["ender_chest", "shulker_shell"],
    description: "You crafted this just to store some dirt, how wonderful."
  },
  {
    id: "tnt_minecart",
    name: "TNT Minecart",
    category: "combat_utility",
    tier: 3,
    outputImage: "/recipes/output_recipe/tnt_minecart.png",
    recipeImage: "/recipes/tnt_minecart.png",
    inputs: ["tnt"],
    description: "Mindanao's Favorite Block but in a minecart."
  },
  {
    id: "mace",
    name: "Mace",
    category: "combat_utility",
    tier: 3,
    outputImage: "/recipes/output_recipe/mace.png",
    recipeImage: "/recipes/mace.png",
    inputs: ["respawn_anchor", "dragon_breath"],
    description: "A Nerfed weapon, but people still craft it anyways "
  },
  {
    id: "dragon_head",
    name: "Dragon Head",
    category: "end",
    tier: 3,
    outputImage: "/recipes/output_recipe/dragon_head.png",
    recipeImage: "/recipes/dragon_head.png",
    inputs: ["ender_eye", "ancient_debris", "crying_obsidian"],
    description: "Rawr."
  },
  {
    id: "dragon_breath",
    name: "Dragon's Breath",
    category: "end",
    tier: 3,
    outputImage: "/recipes/output_recipe/dragon_breath.png",
    recipeImage: "/recipes/dragons_breath.png",
    inputs: ["dragon_head"],
    description: "Brewing ingredient used to create lingering potions."
  },
  {
    id: "end_rod",
    name: "End Rod",
    category: "end",
    tier: 3,
    outputImage: "/recipes/output_recipe/end_rod.png",
    recipeImage: "/recipes/end_rod.png",
    inputs: ["end_stone"],
    description: "I got good memories from this btw"
  },
  {
    id: "wither_skeleton_skull",
    name: "Wither Skeleton Skull",
    category: "nether",
    tier: 3,
    outputImage: "/recipes/output_recipe/wither_skeleton_skull.png",
    recipeImage: "/recipes/wither_skeleton_skull.png",
    inputs: ["skeleton_skull"],
    description: "Stay away immediately if you see this in a soul sand"
  },
  {
    id: "skeleton_skull",
    name: "Skeleton Skull",
    category: "combat_utility",
    tier: 3,
    outputImage: "/recipes/output_recipe/skeleton_skull.png",
    recipeImage: "/recipes/skeleton_gead.png",
    inputs: ["dried_ghast"],
    description: "Decorative skull of a Skeleton."
  },
  {
    id: "dune_trim",
    name: "Dune Armor Trim",
    category: "armor_trims",
    tier: 2,
    outputImage: "/trims/Dune_Armor_Trim_Smithing_Template_JE2_BE2.png",
    recipeImage: "/recipes/dune_trim.png",
    inputs: [],
    description: "Custom trim template found in Desert Temples."
  },
  {
    id: "host_trim",
    name: "Host Armor Trim",
    category: "armor_trims",
    tier: 2,
    outputImage: "/trims/Host_Armor_Trim_Smithing_Template_JE1_BE1.png",
    recipeImage: "/recipes/host_trim.png",
    inputs: [],
    description: "Custom trim template found in Trail Ruins."
  },
  {
    id: "raiser_trim",
    name: "Raiser Armor Trim",
    category: "armor_trims",
    tier: 2,
    outputImage: "/trims/Raiser_Armor_Trim_Smithing_Template_JE1_BE1.png",
    recipeImage: "/recipes/raiser_trim.png",
    inputs: [],
    description: "Custom trim template found in Trail Ruins."
  },
  {
    id: "rib_trim",
    name: "Rib Armor Trim",
    category: "armor_trims",
    tier: 2,
    outputImage: "/trims/Rib_Armor_Trim_Smithing_Template_JE1_BE1.png",
    recipeImage: "/recipes/rib_armor_trim.png",
    inputs: ["nether_brick"],
    description: "Custom trim template found in Nether Fortresses. Which you wont see"
  },
  {
    id: "sentry_trim",
    name: "Sentry Armor Trim",
    category: "armor_trims",
    tier: 2,
    outputImage: "/trims/Sentry_Armor_Trim_Smithing_Template_JE2_BE2.png",
    recipeImage: "/recipes/sentry_armor_trim.png",
    inputs: ["rib_trim", "sprite_trim"],
    description: "Custom trim template found in Pillager Outposts."
  },
  {
    id: "shaper_trim",
    name: "Shaper Armor Trim",
    category: "armor_trims",
    tier: 2,
    outputImage: "/trims/Shaper_Armor_Trim_Smithing_Template_JE1_BE1.png",
    recipeImage: "/recipes/shaper_trim.png",
    inputs: [],
    description: "Custom trim template found in Trail Ruins."
  },
  {
    id: "sprite_trim",
    name: "Spire Armor Trim",
    category: "armor_trims",
    tier: 2,
    outputImage: "/trims/Spire_Armor_Trim_Smithing_Template_JE1_BE1.png",
    recipeImage: "/recipes/sprite_armor_trim.png",
    inputs: ["shulker_shell"],
    description: "Custom trim template found in Trail Ruins."
  },
  {
    id: "vex_trim",
    name: "Vex Armor Trim",
    category: "armor_trims",
    tier: 2,
    outputImage: "/trims/Vex_Armor_Trim_Smithing_Template_JE1_BE1.png",
    recipeImage: "/recipes/vex_trim.png",
    inputs: [],
    description: "Custom trim template found in Woodland Mansions."
  },
  {
    id: "wayfinder_trim",
    name: "Wayfinder Armor Trim",
    category: "armor_trims",
    tier: 2,
    outputImage: "/trims/Wayfinder_Armor_Trim_Smithing_Template_JE1_BE1.png",
    recipeImage: "/recipes/wayfinder_trim.png",
    inputs: [],
    description: "Custom trim template found in Trail Ruins."
  },
  {
    id: "snout_trim",
    name: "Snout Armor Trim",
    category: "armor_trims",
    tier: 2,
    outputImage: "/trims/Snout_Armor_Trim_Smithing_Template_JE1_BE1.png",
    recipeImage: "/recipes/snout-armor-trim.png",
    inputs: ["sentry_trim", "rib_trim", "sprite_trim"],
    description: "Custom trim template found in Bastion Remnants."
  },

  {
    id: "asin",
    name: "Salt (Asin)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/pumpkin_seeds.png",
    recipeImage: "/recipes/asin.png",
    inputs: [],
    description: "A mineral spice vital for adobo seasoning."
  },
  {
    id: "bawang",
    name: "Garlic (Bawang)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/pumpkin_seeds.png",
    recipeImage: "/recipes/bawang.png",
    inputs: [],
    description: "A fundamental aromatic spice."
  },
  {
    id: "sibuyas",
    name: "Onion (Sibuyas)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/beetroot.png",
    recipeImage: "/recipes/sibuyas.png",
    inputs: [],
    description: "Purple aromatic veggie."
  },
  {
    id: "suka",
    name: "Vinegar (Suka)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/Potion_of_Invisibility_JE3.png",
    recipeImage: "/recipes/suka.png",
    inputs: [],
    description: "Sour seasoning made from sugarcane fermentation."
  },
  {
    id: "soy_sauce",
    name: "Soy Sauce (Toyo)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/Potion_of_Weakness_JE2_BE2.png",
    recipeImage: "/recipes/soy_sauce.png",
    inputs: ["asin"],
    description: "Rich dark condiment."
  },
  {
    id: "paminta",
    name: "Black Pepper (Paminta)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/melon_seeds.png",
    recipeImage: "/recipes/paminta.png",
    inputs: [],
    description: "Crushed black peppercorns."
  },
  {
    id: "luya",
    name: "Ginger (Luya)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/pumpkin_seeds.png",
    recipeImage: "/recipes/luya.png",
    inputs: [],
    description: "Spicy aromatic root."
  },
  {
    id: "sili",
    name: "Chili (Sili)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/nether_wart.png",
    recipeImage: "/recipes/sili.png",
    inputs: [],
    description: "Spicy red or green chili."
  },
  {
    id: "sitaw",
    name: "String Beans (Sitaw)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/sugar_cane.png",
    recipeImage: "/recipes/sitaw.png",
    inputs: [],
    description: "Long green beans."
  },
  {
    id: "petchay",
    name: "Bok Choy (Petchay)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/birch_sapling.png",
    recipeImage: "/recipes/petchay.png",
    inputs: [],
    description: "Green leafy vegetable."
  },
  {
    id: "green_beans",
    name: "Green Beans",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/torchflower_seeds.png",
    recipeImage: "/recipes/green_beans.png",
    inputs: [],
    description: "Fresh green beans."
  },
  {
    id: "milkfish",
    name: "Milkfish (Bangus)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/cod.png",
    recipeImage: "/recipes/milkfish.png",
    inputs: [],
    description: "The national fish of the Philippines."
  },
  {
    id: "sampalok",
    name: "Tamarind (Sampalok)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/Cocoa Beans_1.14.4.png",
    recipeImage: "/recipes/sampalok.png",
    inputs: [],
    description: "Sour fruit used in soups."
  },
  {
    id: "laurel",
    name: "Bay Leaves (Laurel)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/Leaf Litter_1.21.5.png",
    recipeImage: "/recipes/laurel.png",
    inputs: [],
    description: "Aromatic bay leaves used in stews."
  },
  {
    id: "mantika",
    name: "Cooking Oil (Mantika)",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/Potion_of_Strength_JE3.png",
    recipeImage: "/recipes/mantika.png",
    inputs: [],
    description: "Cooking oil used for frying and sautéing."
  },
  {
    id: "adobo_final",
    name: "Adobo (Finished)",
    category: "custom_food",
    tier: 3,
    outputImage: "/recipes/output_recipe/rabbit_stew.png",
    recipeImage: "/recipes/AdoboFinal.png",
    inputs: ["adobo3"],
    description: "The classic Filipino simmered dish, rich and savory."
  },
  {
    id: "adobo3",
    name: "Adobo Prep 3",
    category: "custom_food",
    tier: 2,
    outputImage: "/recipes/output_recipe/rabbit_stew.png",
    recipeImage: "/recipes/adobo3.png",
    inputs: ["asin", "luya", "adobo2", "laurel", "sampalok"],
    description: "Seasoning with salt, ginger, bay leaves, and tamarind."
  },
  {
    id: "adobo2",
    name: "Adobo Prep 2",
    category: "custom_food",
    tier: 2,
    outputImage: "/recipes/output_recipe/rabbit_stew.png",
    recipeImage: "/recipes/adobo2.png",
    inputs: ["adobo1"],
    description: "Heating Prep 1 to move on to Prep 2"
  },
  {
    id: "adobo1",
    name: "Adobo Prep 1",
    category: "custom_food",
    tier: 2,
    outputImage: "/recipes/output_recipe/rabbit_stew.png",
    recipeImage: "/recipes/adobo1.png",
    inputs: ["laurel", "suka", "soy_sauce", "mantika"],
    description: "Mixing bay leaves, vinegar, soy sauce, and oil for the marinade."
  },
  {
    id: "bicol_express",
    name: "Bicol Express Prep",
    category: "custom_food",
    tier: 3,
    outputImage: "/recipes/output_recipe/rabbit_stew.png",
    recipeImage: "/recipes/bicol_express.png",
    inputs: ["sili"],
    description: "Spicy pork stew with coconut milk and chilies."
  },
  {
    id: "bangushroom",
    name: "Bangushroom",
    category: "custom_food",
    tier: 3,
    outputImage: "/recipes/output_recipe/suspicious_stew.png",
    recipeImage: "/recipes/bangushroom.png",
    inputs: ["milkfish"],
    description: "Unique combination of Nether fungi and Milkfish."
  },
  {
    id: "specific_reroll",
    name: "Specific Ethnicity Reroll",
    category: "combat_utility",
    tier: 3,
    outputImage: "/recipes/output_recipe/ominous_trial_key.png",
    recipeImage: "/recipes/specific-reroll.png",
    inputs: [],
    description: "Used for specific ethnicity reroll"
  },
  {
    id: "reroll",
    name: "Ethnicity Reroll",
    category: "combat_utility",
    tier: 3,
    outputImage: "/recipes/output_recipe/trial_key.png",
    recipeImage: "/recipes/reroll.png",
    inputs: [],
    description: "Used for ethnicity reroll"
  },
  {
    id: "cooked_bicol_express",
    name: "Bicol Express (Finished)",
    category: "custom_food",
    tier: 3,
    outputImage: "/recipes/output_recipe/rabbit_stew.png",
    recipeImage: "/recipes/cooked_bicol_express.png",
    inputs: ["bicol_express"],
    description: "Cooked Bicol Express."
  },
  {
    id: "lechon_1",
    name: "Lechon Prep 1",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/Piglin Head_1.21.4.png",
    recipeImage: "/recipes/lechon1.png",
    inputs: ["tanglad"],
    description: "Lechon prep 1."
  },
  {
    id: "lechon_2",
    name: "Lechon Prep 2",
    category: "custom_food",
    tier: 2,
    outputImage: "/recipes/output_recipe/Piglin Head_1.21.4.png",
    recipeImage: "/recipes/lechon2.png",
    inputs: ["lechon_1", "bawang", "asin"],
    description: "Lechon prep 2."
  },
  {
    id: "cooked_lechon",
    name: "Lechon (Finished)",
    category: "custom_food",
    tier: 3,
    outputImage: "/recipes/output_recipe/Piglin Head_1.21.4.png",
    recipeImage: "/recipes/campfire_lechon.png",
    inputs: ["lechon_2"],
    description: "Fully cooked Lechon."
  },
  {
    id: "lechon_kawali_1",
    name: "Lechon Kawali Prep",
    category: "custom_food",
    tier: 2,
    outputImage: "/recipes/output_recipe/rabbit_stew.png",
    recipeImage: "/recipes/lechon_kawali1.png",
    inputs: ["mantika", "paminta", "laurel", "asin", "bawang"],
    description: "Lechon Kawali prep 1."
  },
  {
    id: "cooked_lechon_kawali",
    name: "Lechon Kawali (Finished)",
    category: "custom_food",
    tier: 3,
    outputImage: "/recipes/output_recipe/rabbit_stew.png",
    recipeImage: "/recipes/cooked_lechon_kawali.png",
    inputs: ["lechon_kawali_1"],
    description: "Cooked Lechon Kawali."
  },
  {
    id: "uncooked_pinangat",
    name: "Uncooked Pinangat",
    category: "custom_food",
    tier: 2,
    outputImage: "/recipes/output_recipe/rabbit_stew.png",
    recipeImage: "/recipes/uncooked_pinangat.png",
    inputs: ["luya", "siling_green", "sili"],
    description: "Uncooked Pinangat."
  },
  {
    id: "cooked_pinangat",
    name: "Cooked Pinangat",
    category: "custom_food",
    tier: 3,
    outputImage: "/recipes/output_recipe/rabbit_stew.png",
    recipeImage: "/recipes/cooked_pinangat.png",
    inputs: ["uncooked_pinangat"],
    description: "Cooked Pinangat."
  },
  {
    id: "tocino_1",
    name: "Marinated Pork",
    category: "custom_food",
    tier: 2,
    outputImage: "/recipes/output_recipe/Cooked Porkchop_1.14.4.png",
    recipeImage: "/recipes/tocino1.png",
    inputs: ["bawang", "soy_sauce", "asin"],
    description: "Tocino prep 1."
  },
  {
    id: "cooked_tocino",
    name: "Tocino (Finished)",
    category: "custom_food",
    tier: 3,
    outputImage: "/recipes/output_recipe/Steak_1.14.4.png",
    recipeImage: "/recipes/cooked_tocino.png",
    inputs: ["tocino_1"],
    description: "Cooked Tocino."
  },
  {
    id: "cringkle",
    name: "Cringkle",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/Cow Spawn Egg_1.21.5.png",
    recipeImage: "/recipes/cringkle.png",
    inputs: [],
    description: "Cringkle ingredient."
  },
  {
    id: "pandesal",
    name: "Pandesal",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/Bread_1.14.4.png",
    recipeImage: "/recipes/pandesal.png",
    inputs: [],
    description: "Pandesal."
  },
  {
    id: "siling_green",
    name: "Siling Green",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/Mangrove Propagule_1.19.4.png",
    recipeImage: "/recipes/siling_green.png",
    inputs: [],
    description: "Siling Green."
  },
  {
    id: "tanglad",
    name: "Tanglad",
    category: "custom_food",
    tier: 1,
    outputImage: "/recipes/output_recipe/Kelp_1.13.2.png",
    recipeImage: "/recipes/tanglad.png",
    inputs: [],
    description: "Tanglad (Lemongrass)."
  }
];
