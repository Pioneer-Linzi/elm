sudo docker kill edit 
sudo docker rm edit
sudo docker run --privileged -i -t --name edit -v /home/linzi/github:/home dockerlinzi/ubuntu /bin/bash
