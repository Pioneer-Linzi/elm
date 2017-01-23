sudo docker kill webblog
sudo docker rm webblog
sudo docker run --privileged -i -t --name webblog -p 8081:8081/tcp -v /home/linzi/github:/home dockerlinzi/ubuntu:node /bin/bash
