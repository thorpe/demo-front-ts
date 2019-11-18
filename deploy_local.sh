#!/bin/bash

TIMESPAN=$(date '+%s')
DEPLOYNAME=ts-react-webpack.qa.${TIMESPAN}
DEPLOYFILES=${DEPLOYNAME}.tar.gz
SERVER=27.102.206.203

# make compression
cd dist/qa
tar -zcvf ${DEPLOYFILES} ./*

# upload
scp -P 22 -o StrictHostKeyChecking=no ${DEPLOYFILES} root@${SERVER}:/home/projects/tamars.co.kr/app.tamars.co.kr/public_html

# make decompression
ssh -p 22 -o StrictHostKeyChecking=no root@${SERVER} tar xzf /home/projects/tamars.co.kr/app.tamars.co.kr/public_html/${DEPLOYFILES} -C /home/projects/tamars.co.kr/app.tamars.co.kr/public_html

if [ $? -ne 0 ]; then
    echo "upload success"
else

    echo "upload fail"
fi


ssh -p 22 -o StrictHostKeyChecking=no root@${SERVER} rm -rf /home/projects/tamars.co.kr/app.tamars.co.kr/public_html/${DEPLOYFILES}
if [ $? -ne 0 ]; then
    echo "file success"
else

    echo "file fail"
fi
