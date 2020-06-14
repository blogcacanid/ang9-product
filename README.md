# ang9-product
Front End Product Angular 9

> https://blog.cacan.id/front-end-product-angular-9

![003](https://user-images.githubusercontent.com/51890752/84584690-a8645680-ae31-11ea-83ae-4f977fa9dadf.jpg)


# Cara Penggunaan:

## Clone dari GitHub:
git clone https://github.com/blogcacanid/ang9-product.git

## Lalu masuk ke direktori project:
cd ang9-product

## Selanjutnya jalankan perintah berikut:
- npm install

## Testing
## Clone Back End Product
Untuk Back End anda bisa clone dari project sebelumnya dengan cara sebagai berikut:
- git clone https://github.com/blogcacanid/lara7-backend-product.git

## Kemudian masuk ke direktori project:
- cd lara7-backend-product

## Selanjutnya jalankan perintah berikut secara berurutan:
- composer install
- cp .env.example .env
- php artisan key:generate

Selanjutnya buka file .env dan edit bagian DB.

Petunjuknya selengkapnya bisa anda lihat disini:
https://blog.cacan.id/back-end-product-laravel-7/


Kemudian jalankan Back End Product Laravel 7 menggunakan perintah berikut:
- php artisan serve --port=8080


Terakhir kita jalankan Front End Product Angular 9 pada RootProject Angular 9 dengan menggunakan perintah berikut:
- ng serve

Lalu buka browser dan ketikkan URL http://localhost:4200

### Add Record
![004](https://user-images.githubusercontent.com/51890752/84584704-b7e39f80-ae31-11ea-96ef-7b55b833c404.jpg)

### View Record
![005](https://user-images.githubusercontent.com/51890752/84584708-c762e880-ae31-11ea-8c14-7fd0d738e240.jpg)

### Edit Record
![006](https://user-images.githubusercontent.com/51890752/84584712-d21d7d80-ae31-11ea-9e6b-7ba72f22534d.jpg)

### Delete Record
![007](https://user-images.githubusercontent.com/51890752/84584718-df3a6c80-ae31-11ea-8b84-8cd82a7ff33e.jpg)



# Angular 9

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
