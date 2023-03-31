FROM 431831783451.dkr.ecr.eu-central-1.amazonaws.com/cruddur-python:3.10-slim-buster

# Inside Container
# Make a new folder inside the container
WORKDIR /backend-flask

# Outside Container => Inside Container
# Copy over file. Contains libraries to run the app
COPY requirements.txt requirements.txt

# Inside Container
# Install python images used for the app
RUN pip3 install -r requirements.txt

# Outside Container -> Insdie Container
# . means everything in the current directory
# first . - /backend-flask (outside container)
# second . - /backend-flask (inside container)
COPY . .

# Set env vars
# Inside Container and will remain set when the container is running
ENV FLASK_DEBUG=1

EXPOSE ${PORT}
# CMD (Command)
# 
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=4567"]