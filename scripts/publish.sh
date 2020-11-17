#!/usr/bin/env bash

cd packages
cd utils && yarn publish:beta && cd ..
cd client && yarn publish:beta && cd ..
cd cli && yarn publish:beta && cd ..
