# TODO List

## A TODO list using Postgres SQL, NodeJs, Express


## setup Database

####  Initialize Postgres Database
- Run the code from **server/database.sql** in psql server
- Make sure the database name and table matches

## Rename **.demo.env file** to **.env**

#### Update .env file
```bash
PSQL_USER=
PSQL_PASS=
```
- Update username and password in **.demo.env** file



<hr />


```bash
PSQL_HOST="localhost"
PSQL_PORT=5433
PSQL_DB="perntodo"
```
- Make changes in these if necessary 

## Now lets setup backend server

In the root directory, run the following

```bash
$ cd server
```
```bash
$ npm i && npm start
```


## Let's setup client

Follow the steps below to setup and fireup front-end

```bash
$ cd client
```

```bash
$ npm i && npm start
```


## Testing
In order test the API routes, we use mocha and chai

Install testing library as follows
```bash
$ npm install mocha chai@4.2.0 chai-http
```

After installation make sure UPDATE todo_id and description that is matches from the DATABASE

Run the following to test the **RESTful API** routes

```bash
$ npm test
```