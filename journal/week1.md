# Week 1 — App Containerization


## Class Notes

- Helps with working with different versions

  - Operating Systems
  - Node, Python, ... version
  - Compiler versions

- Containerization takes a little getting used to but after some time things become simple and natural

- Dockerhub - "largest library and community for container images"

- jFrog - library for artifacts (like libraries)

- Docker stores images (github stores code)

- Docker uses a layered approach
  - Host OS -> Container -> another OS

- Host & guest (docker) operating system

- ```docker build -t  backend-flask ./backend-flask```
  - ```-t``` flag is used to tag the resulting image with a given name and optionally a tag
  - without any verison tag, latest will be applied

- docker run
  - ```docker run --help```
  - ```docker run --rm -p 4567:4567 -it -e FRONTEND_URL='*' -e BACKEND_URL='*' backend-flask```
    - From chatGPT:

    - ```--rm```: This flag tells Docker to automatically remove the container when it exits. This is useful to avoid leaving behind stopped containers that take up disk space.

    - ```-p 4567:4567```: This flag maps the port 4567 of the container to the port 4567 on the host. This is necessary to allow traffic to reach the container's application.

    - ```-it```: This flag creates an interactive terminal inside the container and attaches it to the current terminal, so you can interact with the container's command line. It's often used with -d (detach) to start the container in the background.

    - ```-e FRONTEND_URL='*'```: This flag sets an environment variable named FRONTEND_URL with a value of *. This can be used by the containerized application to access the URL of the frontend service, which can be running in a separate container or on a different host.

    - ```-e BACKEND_URL='*'```: This flag sets an environment variable named BACKEND_URL with a value of *. This can be used by the containerized application to access the URL of the backend service, which can be running in a separate container or on a different host.

    - ```backend-flask```: This is the name of the Docker image to use when starting the container. It is required and should correspond to the image that was built with the docker build command.




- Container information: ```docker ps``` & ```docker images```

- Docker compose allows you to run multiple containers at the same time. And let them interact with eachother.