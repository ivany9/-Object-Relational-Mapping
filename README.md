
# E-Commerce Back-End

🎫 Table of Contents

-[Description](#Description)

-[Installation](#Installation)

-[Data Base Models](#Database-models)

-[Usage](#usage)

-[Technology](#License)

-[Contribute](#Contribute)

-[Mockup](#mock-up)



##  Description
   In this Project we are interacting with dabases request, when we can get information althrought Insomnia ,we created models as you can see in the models part and the models have relations with other models,
   to work like a database.
  We define roots to get the information for each model. and the relation are in  the index.js

 ## Actual Behaviour
  Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.



## Installation

```bash
>npm init
>npm install 
>npm sequelize
>npm i mysql2
>npm doteenv.
> npm express

```
### Database Models


* `Category`

  * `id`

    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `category_name`
  
    * String.
  
    * Doesn't allow null values.

* `Product`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `product_name`
  
    * String.
  
    * Doesn't allow null values.

  * `price`
  
    * Decimal.
  
    * Doesn't allow null values.
  
    * Validates that the value is a decimal.

  * `stock`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set a default value of `10`.
  
    * Validates that the value is numeric.

  * `category_id`
  
    * Integer.
  
    * References the `Category` model's `id`.

* `Tag`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `tag_name`
  
    * String.

* `ProductTag`

  * `id`

    * Integer.

    * Doesn't allow null values.

    * Set as primary key.

    * Uses auto increment.

  * `product_id`

    * Integer.

    * References the `Product` model's `id`.

  * `tag_id`

    * Integer.

    * References the `Tag` model's `id`.

### Associations


* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.



## Usage

```bash


>SOURCE schema.sql
>node  seeds/index
>npm start


```

     



## Technologies

 Node Js

 JavaScript

 npm package, express, mysql2.

 Insomnia

 



## 🎎 License


 https://opensource.org/licenses/isc
This application works whit ISC license.

## 🎎 Contributing

-https://www.npmjs.com/

-https://www.npmjs.com/package/inquirer

-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises



## GitHub

GitHub: (https://github.com/ivany9)

## email

 ivany9@hotmail.com



## MOCK-UP


 
   
