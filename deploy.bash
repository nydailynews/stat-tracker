#!/bin/bash
source source.bash
python stat.py  broncos-sacks-2015 broncos-manning-passing-yards-2015 
./ftp.bash --dir $REMOTE_DIR/output --host $REMOTE_HOST
