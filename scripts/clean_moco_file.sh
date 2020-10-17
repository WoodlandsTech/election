#!/bin/bash

wget https://elections.mctx.org/EvHistoryFiles/$1.zip
unzip $1
tr -d '\15\32' < $1.csv | grep . > $1_clean.csv

rm $1.zip
rm $1.csv
