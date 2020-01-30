# dickies-task
Fullstack App with React.js &amp; RESTful API with Node.js(Express)

## Getting Started

### Prerequisites
- Install [Node.js LTS](https://nodejs.org/en/)
- Install [PostgreSQL](https://www.postgresql.org/download/)

### Installing
- Git clone the project 
```
git clone https://github.com/mmataja/dickies-task.git
```

- FRONTEND
```
cd client
npm install
npm start
```

- BACKEND
```
cd server
npm install
```
Setup PostgreSQL database and set configuration settings for connection in .env file

To migrate tables and seed some data into database run following commands
```
cd api
../node_modules/knex/bin/cli.js migrate:latest
../node_modules/knex/bin/cli.js seed:run
```
Start the server
```
cd ..
node app.js
```
