ServerEvents.recipes((event) => {

    const id = [
        'create:mixing/plant_oil',
        'indrev:shapeless/steel_dust',
        'techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt',
        'techreborn:crafting_table/solar_panel/industrial_solar_panel_alt',
        'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
        'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
        'techreborn:rolling_machine/minecart',
        'croptopia:tomato_to_tomato_seed_shapeless',
        'croptopia:onion_to_onion_seed_shapeless',
        'croptopia:rice_to_rice_seed_shapeless',
        'croptopia:cabbage_to_cabbage_seed_shapeless',
        'techreborn:compressor/iridium_plate',
        'techreborn:compressor/iridium_plate_from_block',
        'indrev:infusing/steel_dust',
        'indrev:compressing/empty_upgrade',
        'techreborn:crafting_table/machine_block/basic_machine_frame_alt',
        'techreborn:crafting_table/machine/iron_furnace',
        'techreborn:smelting/platinum_ingot_from_c_sheldonite_ores',
        'techreborn:blasting/platinum_ingot_from_c_sheldonite_ores',
        'techreborn:smelting/platinum_ingot_from_c_sheldonite_ores_exported_mi_furnace',
        'modern_industrialization:compat/indrev/quarry_nikolite',
        'modern_industrialization:compat/ae2/quarry_ae2',
        'ad_astra:hammering/iron_plate',
        'ad_astra:recipes/steel_ingot_from_smelting_iron_ingot',
        'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',
        'create:smelting/platinum_ingot_compat_modern_industrialization',
        'create:blasting/platinum_ingot_compat_modern_industrialization',
        'indrev:smelting/tungsten_ingot_from_raw_ores',
        // 'createplus:createplus/ore_processing/nickel/modern_industrialization/smelting',
        'travelersbackpack:travelers_backpack',
        'bewitchment:silver_ingot_from_smelting_deepslate_silver_ore',
        'bewitchment:silver_ingot_from_blasting_deepslate_silver_ore',
        'bewitchment:silver_ingot_from_smelting_raw_silver',
        'bewitchment:silver_ingot_from_blasting_raw_silver',
        'bewitchment:raw_silver',
        'bewitchment:raw_silver_block',
        'farmersdelight:wheat_dough_from_water',
        'farmersdelight:wheat_dough_from_eggs',
        'farmersdelight:wheat_dough',
        'create:crafting/appliances/dough',
        'vinery:dough',
        'croptopia:shaped_bacon',
        'indrev:shapeless/copper_ingot_from_block',
        // 'wands:stone_wand2',
        'techreborn:crafting_table/dust/chrome_dust_from_small',
        'techreborn:crafting_table/small_dust/chrome_small_dust_from_dust',
        'techreborn:blast_furnace/titanium_ingot_from_small_dust',
        'techreborn:blast_furnace/chrome_ingot_from_small_dust',
        'techreborn:blast_furnace/titanium_ingot',
        'techreborn:crafting_table/dust/titanium_dust_from_small',
        'techreborn:grinder/certus_quartz_dust_from_ore',
        // 'architects_palette:heavy_stone_bricks',
        'techreborn:crafting_table/small_dust/platinum_small_dust_from_dust',
        'techreborn:crafting_table/dust/platinum_dust_from_small',
        'techreborn:smelting/platinum_ingot_from_c_platinum_dusts',
        'techreborn:blasting/platinum_ingot_from_c_platinum_dusts',
        'ad_astra:hammering/steel_plate',
        'modern_industrialization:electric_age/machine/assembler/replicator',
        'techreborn:blast_furnace/steel_ingot_from_small_dust',
        'techreborn:crafting_table/dust/steel_dust_from_small',
        'techreborn:crafting_table/small_dust/steel_small_dust_from_dust',
        'modern_industrialization:quarry/bronze',
        'modern_industrialization:quarry/gold',
        'modern_industrialization:quarry/steel',
        'modern_industrialization:quarry/titanium',
        'techreborn:industrial_grinder/certus_quartz_ore'

    ];

    const output = [
        'blockus:white_oak_small_logs',
        'blockus:dark_oak_small_logs',
        'blockus:acacia_small_logs',
        'blockus:jungle_small_logs',
        'blockus:birch_small_logs',
        'blockus:spruce_small_logs',
        'blockus:oak_small_logs',
        'blockus:golden_bars',
        // 'kibe:angel_ring',
        // 'kibe:light_ring',
        'chisel:chisel',
        // 'vanilla-excavators:obsidian_excavator',
        // 'vanilla-hammers:obsidian_hammer',
        'croptopia:bacon',
        'croptopia:cooked_bacon',
        'croptopia:knife',
        'bewitchment:raw_silver_block',
        'modern_industrialization:uu_matter',
        'craftingcraft:portable_crafting',
        'kibe:pocket_crafting_table',
        'indrev:bronze_sword',
        'indrev:bronze_pickaxe',
        'indrev:bronze_axe',
        'indrev:bronze_shovel',
        'indrev:bronze_hoe',
        'kibe:big_torch',
        'dwarfcoal:dwarf_charcoal',
        'indrev:hammer',
        'campanion:mre',
        'additionaladditions:fried_egg',
        'twilightforest:uncrafting_table',
        'twilightforest:jeed/hunger',
        'techreborn:steel_helmet',
        'techreborn:steel_chestplate',
        'techreborn:steel_leggings',
        'techreborn:steel_boots',
        'indrev:bronze_helmet',
        'indrev:bronze_chestplate',
        'indrev:bronze_leggings',
        'indrev:bronze_boots',
        'indrev:silver_helmet',
        'indrev:silver_chestplate',
        'indrev:silver_leggings',
        'indrev:silver_boots',
        'bakery:strawberry_seeds',
        'techreborn:sapphire_helmet',
        'techreborn:sapphire_chestplate',
        'techreborn:sapphire_leggings',
        'techreborn:sapphire_boots',
        'techreborn:sapphire_pickaxe',
        'techreborn:sapphire_axe',
        'techreborn:sapphire_hoe',
        'techreborn:sapphire_sword',
        'techreborn:sapphire_spade',
        'techreborn:ruby_helmet',
        'techreborn:ruby_chestplate',
        'techreborn:ruby_leggings',
        'techreborn:ruby_boots',
        'techreborn:ruby_pickaxe',
        'techreborn:ruby_axe',
        'techreborn:ruby_hoe',
        'techreborn:ruby_sword',
        'techreborn:ruby_spade',
    ];

    id.forEach((id) => {
        event.remove({ id: id });
    });

    output.forEach((output) => {
        event.remove({ output: output });
    });

    /*
    const mystiagri_balance = [
        'aluminum',
        'chromium',
        'electrum',
        'invar',
        'iridium',
        'manganese',
        'platinum',
        'steel',
        'titanium',
        'tungsten'

    ];

    mystiagri_balance.forEach((item) => {
        event.remove({ output: 'mysticalagriculture:' + item + '_seeds' });
        event.remove({ output: 'mysticalagriculture:' + item + '_essence' });
        event.remove({ id: 'mysticalagriculture:essence/common/' + item + '_ingot' });
    });
    */

    const plates = [
        'tin',
        'gold',
        'iron',
        'copper',

    ];

    plates.forEach((plates) => {
        event.remove({ id: 'indrev:shapeless/' + plates + '_plate_from_hammer' });
    });
});
