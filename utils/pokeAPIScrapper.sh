#!/bin/bash
# Pokeapi does not have 8th gen data yet !
count=$(curl -s https://pokeapi.co/api/v2/pokemon | jq '.count')
echo $count
read
for i in `seq 1 $count`
do
   curl -s "https://pokeapi.co/api/v2/pokemon/$i" | jq '[.[] | {id:.id, name:.name, type: (if .types[0].slot == 1 then .types[0].type.name else .types[1].type.name end)} ]' >> pokemons.json
done
