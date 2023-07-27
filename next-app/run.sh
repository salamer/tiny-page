#!/bin/bash -x

[ ! -d '/tmp/cache' ] && mkdir -p /tmp/cache
# ln -sf /tmp/cache ./.next/cache
node .next/standalone/server.js