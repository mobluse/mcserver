#!/bin/sh
BINDIR=$(dirname "$(readlink -fn "$0")")
cd "$BINDIR"
java -Xmx896M -Xms512M -jar CanaryMod-1.7.10-1.1.2.jar -o true
