# Node.js Dockerized App  

A simple Node.js app containerized with Docker.  

## Features  
- Express.js server  
- Dockerized deployment  
- Ready for AWS/CI/CD  

## How to Run  
```bash
docker build -t my-node-app .
docker run -p 3000:3000 my-node-app
