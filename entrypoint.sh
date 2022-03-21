#!/bin/sh
mkdir -p /data/conf
if [ ! -f /data/conf/application.conf ]; then
    jar xf /usr/local/lib/simple-srs.jar BOOT-INF/classes/application.conf
    cp BOOT-INF/classes/application.conf /data/conf/
    rm -rf BOOT-INF
fi

if [ ! -f /data/conf/config.json ]; then
    jar xf /usr/local/lib/simple-srs.jar BOOT-INF/static/assets/data/config.json
    cp BOOT-INF/static/assets/data/config.json /data/conf/
    rm -rf BOOT-INF
fi

exec "$@"