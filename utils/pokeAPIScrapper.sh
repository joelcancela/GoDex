#!/bin/bash
#count=$(curl -s https://pokeapi.co/api/v2/pokemon | jq '.count')
count=1025
startCount=1011
echo "Total Pkmn available: $count, scrap starting from $startCount press Enter to continue"
read
for i in `seq $startCount 1 $count`
do
   echo "Scrapping pokemon $i"
   curl -s "https://pokeapi.co/api/v2/pokemon/$i" | jq '{id:.id, name:.name, type: (if .types[0].slot == 1 then .types[0].type.name else .types[1].type.name end)}' >> all_pokemons.json
done
