#!/bin/bash

# NODE
node=$(which node)

# FILE
FILES=($(find . -iname "*.js"))

# Execute Node
echo -e "Executing Node.JS ...\n"
for FILE in ${FILES[@]}
do
  echo -e "- ${FILE}"
  ${node} ${FILE}
  echo
done