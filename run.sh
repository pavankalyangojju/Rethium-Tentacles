echo "Removing Old DOckerfile"
rm Dockerfile
echo "Downloading New DockerFIle"
wget https://raw.githubusercontent.com/Rethium/Dashboard/main/Dockerfile
echo "Building and running new container"
docker build --network=host -t tentacels .
docker run -d -p 5050:5050 tentacels