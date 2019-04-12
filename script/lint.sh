# !/bin/bash

eslint \
  -c ./index.js \
  --ext .js,.vue \
  test/resources/js/ test/*.js \
  --global axios,$,_,__VERSION
