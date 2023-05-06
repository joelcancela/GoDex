#!/bin/bash
count=$(curl -s https://pokeapi.co/api/v2/pokemon | jq '.count')
startCount=906
echo "Total Pkmn available: $count, listing starting from $startCount press Enter to continue"
read
for i in `seq $startCount 1 $count`
do
   echo -e "$i,"  >> listing.json
done
