# Presentor
Takes demo API and creates a presentation app.

## Prerequisites
This app is dockerized so you will need to install the following:

1. [Docker for linux](https://docs.docker.com/linux/step_one/)
2. [Compose](https://docs.docker.com/compose/install/)

**NOTE**: You can still run it without docker but you'll have to make sure your box has all the proper dependencies to run a node app.

### Without Docker & Compose

1. Run `npm install`
2. Run `npm run build`
3. Run `npm run gulp`
4. Go to `http://localhost:3000`

## Setup

1. Clone repo
2. Run `docker-compose build`
3. Run `docker-compose run app npm install`
4. Run `docker-compose run app npm run build` (This will create the public/ dir)
5. Run `docker-compose up`

## Docker Compose
Fully dockerized and ready to run on your dev server. See the [docker-compose.yml](/docker-compose.yml) file.

Run this command to start up the docker container
```
docker-compose up
```
