#!/bin/bash
sudo /etc/init.d/nginx restart
cd /home/ubuntu/bsa-pcforge/server/
tsc
npm start