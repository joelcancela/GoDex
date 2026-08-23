#!/bin/bash
count=$(curl -s https://pokeapi.co/api/v2/pokemon | jq '.count')
startCount=899
echo "Total Pkmn available: $count, scrap starting from $startCount press Enter to continue"
read
for i in `seq $startCount 1 $count`
do
   curl -s "https://pokeapi.co/api/v2/pokemon/$i" | jq '{id:.id, name:.name, type: (if .types[0].slot == 1 then .types[0].type.name else .types[1].type.name end)}' >> pokemons.json
done
