#!/bin/bash

TIMESPAN=$(date '+%s')
DEPLOYNAME=ts-react-webpack.qa.${TIMESPAN}
DEPLOYFILES=${DEPLOYNAME}.tar.gz
SERVER=101.101.165.167

# make compression
cd dist/qa
tar -zcvf ${DEPLOYFILES} ./*

# upload
scp -P 22 -o StrictHostKeyChecking=no ${DEPLOYFILES} root@${SERVER}:/home/projects/tamars.co.kr/app.market.co.kr/public_html

# make decompression
ssh -p 22 -o StrictHostKeyChecking=no root@${SERVER} tar xzf /users/projects/koangbok/app.market.co.kr/${DEPLOYFILES} -C /home/projects/tamars.co.kr/app.market.co.kr/public_html

if [ $? -ne 0 ]; then
    echo "success"
else

    echo "fail"
fi