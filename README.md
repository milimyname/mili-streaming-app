# Mili Video Streaming Platform

It is a video streaming platform where users can watch videos and also upload their own videos. It is built using SvelteKit and TailwindCSS for now. More features will be added in the future. For now, it is just a prototype.

## Live Demo

(Mili Video Upload Platform)[https://mili-streaming-app-kyibomcx5a-ew.a.run.app/]

## Tech Stack

1. SvelteKit
2. TailwindCSS
3. Docker + Docker Compose
4. CI/CD on GCP
5. (Auth.js)[https://authjs.dev/]

## Run Docker Compose for Development

```bash
docker-compose -f docker-compose.dev.yml up --build
```

## Run Docker Compose for Production

```bash
docker-compose -f docker-compose.yml up --build
```
