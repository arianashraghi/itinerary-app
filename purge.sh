# WARNING IT WILL REMOVE ALL IMAGES, CONTAINERS AND VOLUMES

#Delete all containers using the following command:
docker rm -f $(docker ps -a -q) 
#Delete all volumes using the following command:
docker volume rm $(docker volume ls -q)
#Delete all images
docker rmi -f $(docker images -q)
#Restart the containers using the following command:
