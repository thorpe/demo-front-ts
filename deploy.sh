#!/bin/bash

TIMESPAN=$(date '+%s')
DEPLOYNAME=ts-react-webpack.qa.${TIMESPAN}
DEPLOYFILES=${DEPLOYNAME}.tar.gz
SERVER=27.102.206.203

# make compression
cd dist/qa
tar -zcvf ${DEPLOYFILES} ./*

# upload
scp -P 22 -o StrictHostKeyChecking=no ${DEPLOYFILES} root@${SERVER}:/users/projects/koangbok/app.market.co.kr

# make decompression
ssh -p 22 -o StrictHostKeyChecking=no root@${SERVER} tar xzf /users/projects/koangbok/app.market.co.kr/${DEPLOYFILES} -C /users/projects/koangbok/app.market.co.kr

if [ $? -ne 0 ]; then
    echo "success"
else

    echo "fail"
fi