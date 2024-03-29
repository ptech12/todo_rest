# TODO List

## A TODO list using Postgres SQL, NodeJs, Express


## setup Database

####  Initialize Postgres Database
- Run the code from **database.sql** in psql server
- Make sure the database name and table matches

#### Update .env file
```bash
PSQL_USER=
PSQL_PASS=
```
- Update username and password in **.demo.env** file

- Rename **.demo.env file** to **.env**

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


