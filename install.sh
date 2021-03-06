#!/bin/bash
docker-compose build app
docker-compose up -d
docker-compose exec app composer install
docker-compose exec app composer update laravel/framework
docker-compose exec app php artisan key:generate
docker-compose exec app composer require encore/laravel-admin
docker-compose exec app php artisan vendor:publish --provider="Encore\Admin\AdminServiceProvider"
docker-compose exec app php artisan admin:install
docker-compose exec app php artisan admin:make UserController --model=App\\User
docker-compose exec app php artisan make:model Pages
docker-compose exec app php artisan admin:make PagesController --model=App\\Pages
docker-compose exec app php artisan make:model Meta
docker-compose exec app php artisan admin:make PagesController --model=App\\Meta
docker-compose exec app php artisan migrate
docker-compose exec app php artisan make:factory PagesFactory
docker-compose exec app php artisan make:factory MetaFactory
docker-compose exec app php artisan make:controller PagesController
docker-compose exec app php artisan route:list


