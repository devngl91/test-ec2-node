#!/bin/bash
# SSM user didn't start in the home directory, so go there
cd

sudo apt update -y

sudo ufw allow 80

sudo ufw allow 443

sudo ufw allow 3000

sudo ufw default deny incoming

sudo ufw default allow outgoing

sudo ufw enable

sudo apt install docker.io git -y

sudo apt install nodejs -y

sudo apt install npm -y

sudo npm install -g nodemon

sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo service docker start

sudo chmod 666 /var/run/docker.sock

git clone https://github.com/devngl91/test-ec2-node.git

cd test-ec2-node

npm install

sleep 2

docker-compose up -d
