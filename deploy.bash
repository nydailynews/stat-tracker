#!/bin/bash
source .source.bash
python2.7 stat.py  broncos-sacks-2016 broncos-sacks-by-player-2016 broncos-sacks-per-season
./ftp.bash --dir $REMOTE_DIR/output --host $REMOTE_HOST
