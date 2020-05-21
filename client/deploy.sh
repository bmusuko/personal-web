#!/bin/sh

sudo systemctl start docker
docker build -t bmusuko/personal-web:latest .
docker push bmusuko/personal-web