Charges API Prototype
=====================

The Charges team plan to present to Lenders and Conveyancers a new way to
submit a charge to the Land Register. Some Lenders and Conveyancers will want to
use a transactional website and some will want to integrate the process in to
their existing case processing systems.

The [Charges HTML prototypes] shows our thinking on what that transactional
website may be.

This repo contains a mock API to demonstrate the kind of interactions that we
would expect an existing case processing system to perform with the Charges
service. It also shows one possible interface definition that may be presented
to the Lenders and Conveyancers.

Live Instance
-------------

The latest deploy of this repo can be found here:

[http://charges-api-prototype.herokuapp.com](http://charges-api-prototype.herokuapp.com)

Dependencies
------------

To run you need:

- Node.js v0.10.x
- NPM (comes with Node)

Usage
-----

Clone the repo:

    git clone git@github.com:LandRegistry/charges-api-prototype.git
    cd charges-api-prototype

Use Node.js v0.10:

    nvm use 0.10

Install the dependencies:

    npm install

Run the app:

    node server.js

Open it in a browser:

    open http://localhost:3000

  [Charges HTML prototypes]: https://github.com/LandRegistry/charges-html-prototype
