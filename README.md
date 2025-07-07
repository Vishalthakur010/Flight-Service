npm init
npm i express dotenv http-status-codes
mkdir src
npm i sequelize
npm i mysql2
npm i sequelize-cli
cd src
npx sequelize init


- Create Database in Sql
    ```
     cd src
     npx sequelize db:create
    ```

- Create Table and their attributes in Database
    ```
    npx sequelize model:generate --name Airplane --attributes modelNumber:string,capacity:integer
    ```
- commit changes to sql database to reflect the changes or reverse it
    ```
    npx sequelize db:migrate
    npx sequelize db:migrate:undo 
    ```
- Create seed files inside seeders folder
    ```
    cd src
    npx sequelize seed:generate --name add-airplanes
    ```
- Add demo data in the seed file and undo it
    ```
    npx sequelize db:seed:all
    npx sequelize db:seed:undo:all
    ```
- Create an Empty Migration File
    ```
        npx sequelize db:migrate
        Ex : npx sequelize migration:generate --name update-city-airport-association
    ```