FROM debian:bullseye

RUN apt update && apt upgrade -y

RUN apt install -y git nodejs npm

RUN useradd -m app

WORKDIR /home/app
RUN mkdir PearlThoughts-app
COPY --chown=app:app index.js PearlThoughts-app/
COPY --chown=app:app package.json PearlThoughts-app/
COPY --chown=app:app package-lock.json PearlThoughts-app/

WORKDIR /home/app/PearlThoughts-app
RUN npm install

EXPOSE 3000

CMD npm start
