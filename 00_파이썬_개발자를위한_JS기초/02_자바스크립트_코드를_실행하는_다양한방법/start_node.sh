#!/bin/bash

# NODE
node=$(which node)

# FILE
FILE=$(find . -iname "index.js")

# Execute Node
echo -e "Executing Node.JS ...\n"
${node} ${FILE}