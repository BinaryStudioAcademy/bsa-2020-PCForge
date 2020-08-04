# PCForge

### Project setup

- ##### Client

  `$ cd client`  
  `$ yarn` or `npm install`  
  `$ yarn start` or `npm start`  
  Set `.env` appropriately

- ##### Server
  `$ cd server`  
  `$ yarn` or `npm install`  
  `$ yarn dev` or `npm run dev`  
  Set `.env` appropriately (see .env.example)
  Also, install [sequelize-cli](https://github.com/sequelize/cli) globally. Some useful commands:
  - npx sequelize db:migrate -  Run pending migrations
  - npx sequelize db:migrate:undo:all - Revert all migrations ran
  - npx sequelize db:create - Initialize database for first run
  - npx sequelize db:drop - Drop database specified by configuration
  - npx sequelize db:seed:all - Run every seeder