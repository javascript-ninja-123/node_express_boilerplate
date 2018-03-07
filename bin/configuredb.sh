#!/bin/bash

database='justmusicdb'

echo "Configuring database: $database"

dropdb -U node_user justmusicdb
createdb -U node_user justmusicdb


psql -U node_user justmusicdb < ./bin/sql/justmusic.sql


echo "$database configured"
