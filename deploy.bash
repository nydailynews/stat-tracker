#!/bin/bash
source .source.bash
TO='PROD'
while [ "$1" != "" ]; do
    case $1 in
        --qa ) shift
            TO='QA'
            ;;
    esac
    shift
done
python2.7 stat.py --name $SHEET_NAME $DEPLOY_TABS
if [ $TO == 'QA' ]; then deployqa; fi
if [ $TO == 'PROD' ]; then deployprod; fi
