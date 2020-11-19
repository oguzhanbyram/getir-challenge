# Getir Challenge

## Requirements :

- Node `>=10`.
- npm `>=6`

## Api Test Endpoint : 
https://getir-mission.herokuapp.com/api/records/filter

**Request:**
```json
POST
Accept: application/json
Content-Type: application/json

{
    "startDate": "2016-01-01",
    "endDate": "2016-01-10",
    "minCount": 1,
    "maxCount": 100
}
```
  
**Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
    "code": 0,
    "msg": "success",
    "records": [
        {
            "key": "wNdljBIo",
            "createdAt": "2016-01-07T15:33:45.244Z",
            "totalCount": 45
        },
        {
            "key": "hAdIrpvV",
            "createdAt": "2016-01-08T16:56:01.559Z",
            "totalCount": 69
        },
    ]
}
```    

## Installation

- Create a `.env` file in the root of your project and insert
    your key/value pairs in the following format of `KEY=VALUE`:

    ```bash
    PORT=3000
    NODE_ENV='dev'
    MONGODB_URI='mongodb://username:password@host:port/database?options...'
    ```
- Run the code below to install the required packages for installation

    ```bash
    $ npm install
    ```
-   Start the server:

    ```bash
    $ npm start
    ```

-   Start the development server:

    ```bash
    $ npm run start:dev
    ```

## Tests

-  To run the test suite, first install the dependencies, then run `npm test`:

    ```bash
    $ npm install
    $ npm test
    ```

## Eslint

-  Run the code to see spelling errors:

    ```bash
    $ npm run lint
    ```
-  Yazım hatalarını çözmek için kodu çalıştırın:

    ```bash
    $ npm run lint:fix
    ```