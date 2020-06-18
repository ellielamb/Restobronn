# README

## Setup (API)
In order to run the app, [Lumen](https://lumen.laravel.com/docs/7.x) needs to be installed and configured. The following steps need to be performed:

 ### Install Composer dependencies  
 Run the following commands from inside the root repository directory:

> cd api

> composer install

### Configure Lumen
If one is not available already, make a .env file using the .env example as a template ensuring to modify the following environment variables:
DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD.


### Configure a web server
Setting up a web server is out of the scope of this document. For demonstration purposes you can use the built-in PHP server using the following:

    php -S localhost:8000 -t public

**If you wish to use a different port ensure to update the value of the apiBaseUrl environment variable stored in app/environments/environment.ts**

### Install NPM dependencies
Run the following commands from inside the root repository directory:

> cd app

> npm install

### Run Ionic
In order to launch the app run the following from inside the root repository directory:
> cd app

> ionic serve





