// Catalogue intégré : nom|catégorie|kcal/100g|portion (g ou ml)|Nutri-Score estimé|synonymes
// Valeurs moyennes approximatives (ordres de grandeur Ciqual/ANSES et moyennes Open Food Facts)
const CATALOG_RAW=`Hamburger|L|250|200|D|burger,hamburger classique
Cheeseburger|L|265|200|D|burger,cheese burger
Double cheeseburger|L|275|260|E|burger,double cheese
Burger poulet (chicken burger)|L|245|220|D|burger,chicken
Burger végétarien|L|210|220|C|burger,veggie,vegan
Bacon burger|L|285|250|E|burger,bacon
Big Mac|L|245|215|D|burger,mcdo,mcdonald
Kebab (sandwich pain + frites)|L|230|450|D|doner,döner,shawarma,chawarma,grec,sandwich grec
Kebab assiette|L|190|500|D|doner,döner,shawarma,assiette grecque
Shawarma poulet (wrap)|L|210|300|C|chawarma,kebab,doner,wrap
Tacos français|L|240|450|E|tacos,french tacos,o'tacos
Tacos mexicain|L|210|150|C|taco
Burrito|L|190|350|C|wrap
Wrap poulet|L|200|250|C|tortilla
Nuggets de poulet|L|260|150|D|chicken nuggets,mcnuggets
Tenders de poulet|L|250|180|D|chicken tenders,strips
Ailes de poulet frites|L|280|200|D|chicken wings,wings
Frites|S|300|150|C|fries,french fries,patates
Potatoes|S|200|150|C|pommes de terre epicees
Hot-dog|L|260|150|D|hotdog
Pizza margherita|L|240|300|C|pizza
Pizza reine|L|230|300|C|pizza,jambon champignons
Pizza 4 fromages|L|280|300|D|pizza,quatre fromages
Pizza pepperoni|L|275|300|D|pizza,chorizo
Pizza calzone|L|245|350|D|pizza
Pizza végétarienne|L|210|300|C|pizza,legumes
Pizza thon|L|230|300|C|pizza
Pizza kebab|L|260|300|D|pizza
Quiche lorraine|L|270|150|D|quiche
Croque-monsieur|L|260|150|D|croque
Croque-madame|L|250|180|D|croque
Sandwich jambon-beurre|L|260|200|D|jambon beurre,baguette
Sandwich poulet crudités|L|220|250|C|sandwich
Sandwich thon crudités|L|220|250|C|sandwich,thon mayo
Panini|L|265|200|D|sandwich chaud
Club sandwich|L|240|250|D|sandwich
Bagel saumon|L|240|180|C|bagel
Tajine de poulet aux olives et citron|L|130|400|B|tagine,tajine
Tajine de viande aux pruneaux|L|170|400|C|tagine,tajine,mrouzia
Tajine kefta aux œufs|L|160|350|C|tagine,kefta,boulettes
Tajine de légumes|L|80|400|A|tagine,tajine
Couscous royal|L|170|500|C|couscous,merguez
Couscous poulet légumes|L|140|500|B|couscous
Couscous végétarien|L|120|450|A|couscous,7 legumes
Pastilla au poulet|L|260|250|D|bastilla,pastilla
Pastilla aux fruits de mer|L|220|250|C|bastilla,pastilla
Harira|L|60|350|A|soupe marocaine,soupe ramadan
Bissara|L|90|300|A|soupe feves
Msemen|P|330|80|D|msemmen,rghaif,crepe feuilletee
Msemen farci (khlii/oignon)|P|300|120|D|msemmen,rghaif
Baghrir|P|190|60|C|crepe mille trous,beghrir
Harcha|P|360|70|D|galette semoule
Batbout|P|260|80|C|pain marocain
Khobz (pain marocain)|A|260|100|B|pain,khobz
Rfissa|L|200|450|C|trid,rfisa
Seffa|D|300|250|D|seffa medfouna,vermicelle sucre
Mechoui (agneau rôti)|L|260|250|D|agneau
Brochettes de viande|L|220|200|C|brochettes,kefta grillee
Kefta grillée|L|240|150|D|kefta,kofta,boulettes
Loubia (haricots blancs sauce tomate)|L|120|350|A|haricots blancs
Lentilles marocaines|L|110|350|A|adass,lentilles
Zaalouk|L|90|150|A|aubergines
Taktouka|L|80|150|A|poivrons
Chebakia|D|480|40|E|chebbakia,gateau miel
Sellou|D|500|50|E|sfouf,slilou
Cornes de gazelle|D|450|30|E|kaab el ghazal
Ghriba|D|470|30|E|ghoriba,ghriba
Briouates aux amandes|D|420|40|E|briouat
Briouates viande|S|280|60|D|briouat,brick
Brick à l'œuf thon|S|260|120|D|brick,brik
Thé à la menthe sucré|B|40|200|E|the marocain,atay,the vert
Jus d'orange frais|B|45|250|C|orange pressee
Jus d'avocat (lait)|B|120|300|C|avocat,smoothie
Raib|D|90|150|C|yaourt lait caille
Pâtes bolognaise|L|150|350|B|spaghetti bolognaise,bolo
Pâtes carbonara|L|200|350|D|carbonara,spaghetti
Pâtes au pesto|L|200|300|C|pesto
Pâtes à la sauce tomate|L|130|300|A|spaghetti,pates tomate
Lasagnes bolognaise|L|160|350|C|lasagne
Gratin de pâtes|L|180|300|C|pates gratinees,macaroni
Mac and cheese|L|190|300|D|macaroni cheese
Risotto|L|150|300|C|riz
Paella|L|150|400|B|riz fruits de mer
Riz cantonais|L|170|300|C|riz frit
Pad thaï|L|170|350|C|nouilles,pad thai
Nouilles sautées|L|170|300|C|wok,noodles
Ramen|L|90|500|C|soupe nouilles
Pho|L|60|550|B|soupe vietnamienne
Poulet curry riz|L|150|400|B|curry
Poulet tikka masala|L|150|350|C|curry,indien
Chili con carne|L|120|350|A|chili
Poulet rôti|L|190|200|B|poulet
Steak frites|L|230|350|C|steak,bavette
Steak haché|L|230|125|C|steak hache
Bœuf bourguignon|L|130|350|B|boeuf
Blanquette de veau|L|130|350|C|blanquette
Pot-au-feu|L|90|450|A|pot au feu
Hachis parmentier|L|140|350|B|parmentier
Gratin dauphinois|L|150|250|C|gratin pommes de terre
Tartiflette|L|200|350|D|reblochon
Raclette (assiette)|L|300|400|D|raclette,fromage
Fondue savoyarde|L|260|350|D|fondue
Choucroute garnie|L|150|450|D|choucroute
Cassoulet|L|150|400|C|cassoulet
Moules frites|L|170|500|C|moules
Saumon grillé|L|200|150|A|saumon,poisson
Poisson pané|L|210|150|B|fish sticks,colin pane
Fish and chips|L|230|350|D|poisson frit
Omelette|P|160|150|C|oeufs
Œufs brouillés|P|150|130|C|oeufs
Œuf dur|S|145|60|A|oeuf
Ratatouille|L|60|250|A|legumes
Soupe de légumes|L|35|300|A|soupe,potage,veloute
Salade César|L|170|300|C|cesar,salade poulet
Salade niçoise|L|110|350|A|salade nicoise,thon
Taboulé|L|160|200|B|tabbouleh,taboule
Salade de riz|L|150|250|B|salade
Salade grecque|L|110|250|C|feta
Salade verte|L|20|100|A|laitue,salade
Salade de pâtes|L|170|250|B|salade
Poke bowl saumon|L|140|400|B|poke,bowl
Sushi saumon (6 pièces)|L|150|180|B|sushi,maki
California rolls|L|160|180|B|sushi,maki,california
Maki concombre|L|130|150|A|sushi,maki
Sashimi saumon|L|180|120|A|sashimi
Gyoza|S|200|150|C|raviolis japonais
Nems|S|230|120|D|nem,rouleaux de printemps frits
Rouleaux de printemps|S|120|150|B|rouleau de printemps
Falafels|S|290|150|C|falafel
Houmous|S|260|60|B|hummus,houmous
Crêpe au sucre|D|260|80|D|crepe
Crêpe Nutella|D|320|100|E|crepe,nutella
Galette complète|L|200|250|C|galette,crepe salee,sarrasin
Gaufre|D|340|80|E|gaufre
Pancakes|P|230|150|D|pancake
Croissant|P|420|60|E|viennoiserie
Pain au chocolat|P|430|70|E|chocolatine,viennoiserie
Pain aux raisins|P|330|100|D|viennoiserie
Brioche|P|360|50|D|brioche
Chausson aux pommes|P|320|100|D|viennoiserie
Baguette|A|270|60|A|pain
Pain complet|A|240|60|A|pain
Tartine beurre confiture|P|320|60|D|pain beurre
Céréales + lait|P|130|250|C|cereales,corn flakes
Muesli|P|370|50|A|granola,flocons avoine
Porridge|P|90|250|A|flocons d'avoine,oatmeal
Yaourt nature|D|60|125|A|yaourt,yogourt
Yaourt aux fruits|D|95|125|C|yaourt
Fromage blanc|D|75|100|A|fromage blanc
Camembert|A|290|30|D|fromage
Comté|A|410|30|D|fromage
Mousse au chocolat|D|250|100|D|mousse
Tiramisu|D|290|120|D|tiramisu
Crème brûlée|D|300|120|D|creme brulee
Flan pâtissier|D|180|120|D|flan
Éclair au chocolat|D|260|80|E|eclair
Tarte aux pommes|D|250|120|C|tarte
Tarte au citron meringuée|D|320|120|D|tarte citron
Fraisier|D|280|120|D|gateau fraises
Fondant au chocolat|D|420|100|E|moelleux,gateau chocolat
Brownie|D|440|60|E|brownie
Cookie|D|490|30|E|cookies
Cheesecake|D|330|120|D|cheesecake
Glace (2 boules)|D|210|100|D|creme glacee,glace
Sorbet|D|130|100|C|sorbet
Donut|D|420|70|E|beignet,doughnut
Macaron|D|420|15|E|macarons
Riz au lait|D|130|150|C|riz au lait
Salade de fruits|D|60|200|A|fruits
Pomme|S|53|150|A|fruit
Banane|S|90|120|A|fruit
Orange|S|46|150|A|fruit
Fraises|S|32|150|A|fruit
Raisin|S|70|150|A|fruit
Mangue|S|65|200|A|fruit
Pastèque|S|30|300|A|fruit,melon d'eau
Melon|S|35|250|A|fruit
Dattes|S|290|30|A|dattes,tmar
Amandes|S|600|30|A|fruits secs
Noix de cajou|S|590|30|B|fruits secs
Cacahuètes grillées salées|S|600|30|C|arachides
Chips|S|540|30|D|crisps
Pop-corn sucré|S|480|30|D|popcorn
Barre chocolatée|S|480|50|E|snickers,mars,twix
Chocolat au lait|S|540|20|E|chocolat
Chocolat noir 70 %|S|580|20|D|chocolat
Biscuits secs|S|450|30|D|petit beurre,gateaux secs
Barre de céréales|S|400|25|D|barre cereales
Compote|D|70|100|A|compote pomme
Nutella sur pain|P|400|50|E|pate a tartiner
Coca-Cola|B|42|330|E|coca,soda,cola
Coca zéro|B|0|330|B|coca zero,light,soda
Ice tea|B|30|330|E|the glace,lipton
Limonade|B|40|330|E|soda,sprite,7up
Jus d'orange (brique)|B|45|250|C|jus de fruits
Smoothie fruits|B|55|250|C|smoothie
Milkshake|B|110|350|E|milk shake
Café noir|B|2|100|A|cafe,expresso
Café au lait|B|35|200|B|cafe creme,latte
Cappuccino|B|40|200|B|cafe
Chocolat chaud|B|80|250|D|cacao
Lait demi-écrémé|B|46|250|B|lait
Eau|B|0|250|A|eau minerale
Bière|B|43|330|E|biere
Vin rouge|B|85|150|E|vin
Boisson énergisante|B|45|250|E|red bull,monster,energy`;
