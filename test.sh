#!/bin/bash
npm install
pm2 describe server > /dev/null
RUNNING=$?
if [ "${RUNNING}" -ne 0 ];then
echo "start server"
pm2 start server.js
else
echo "restarting server"
pm2 restart server.js
fi