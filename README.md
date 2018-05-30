# Video Catalog

Please follow the steps below  to run the project. You must have laravel , mysql, composer and node installed in your local machine. You must also file extensions enabled in your php.ini file.

1) Run composer install to install your php dependencies.
2) Run npm install to install the node packages.
3) Create a database of your own choice in mysql and configure your db in the .env file.
4) Run php artisan migrate to scaffold your db with the required tables for your application
5) You may run this seeder to fill up the  application with data, the filenames loaded will not exist in storage and will not show any videos --  artisan db:seed --class=VideoTableSeeder
5) Run npm run dev .
6) Run php artisan serve .

## Notes

* The frontend  was built with React, I took this opportunity to learn React
* I used  https://github.com/lijujohn13/react-laravel-auth as a base to handle authentication tasks
* I used Video-React from https://video-react.js.org/ for the video player
* This a work in progress, currently there are some bugs and rough edges not fully resolved
    * There is no validation for input fields
    * Update functionality is not working on the front end, I am currently exploring the issue dealing with forms that may or may not  have values in some fields
    * The video catalog does not get automatically refreshed,  you must refresh the page to see additions and deletions, this is an issue with child components that should send info to their parents
    * Investing most of my time on the front-end, left me with no time to develop tests, this is my biggest regret
