#!/bin/sh
set -e
sh scripts/migrate.sh
node server.js
