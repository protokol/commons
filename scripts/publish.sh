#!/usr/bin/env bash

cd packages
cd utils && npm publish --tag beta --access public --tolerate-republish && cd ..
cd client && npm publish --tag beta --access public --tolerate-republish && cd ..
cd cli && npm publish --tag beta --access public --tolerate-republish && cd ..
