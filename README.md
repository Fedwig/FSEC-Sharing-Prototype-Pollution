# Web Basics- Prototype Pollution

## Docker Installation

If you do not have docker installed or are using an older version, you can follow the steps to install it from the link below:

https://docs.docker.com/engine/install/debian/

## Challenge Setup

### filestorage

Go  to challenge directory and run the following commands to build and run docker container:

1. Build the docker image (*make sure to be same directory as the dockerfile).*

```docker
docker build -t filestorage .
```

1. Run the created created image as a container:

```docker
docker run -d -p 8000:8000 filestorage
```

To stop the docker container, simply run the following commands:

1. List out the running containers and copy the ID of the container.

```docker
docker container ls
```

1. Kill the container using its ID.

```docker
docker kill <CONTAINER_ID>
```

### funnylogin

Because there wasn’t any issues with the YAML configuration file, we can just use docker compose for this one.

To build and run the container just use the following command:

```docker
docker compose up --build
```

To stop the docker container from running enter the following command:

```docker
docker compose down
```
