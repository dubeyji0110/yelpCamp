[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)

# YelpCamp

> A simple CRUD based node project, displaying some demo data. Basically this is camping website, where you can create your own campground, review others campground etc.

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Create a `.env` file in the root of the folder which contains your credentials as:

```sh
CLOUDINARY_CLOUD_NAME=<your cloudinary name>
CLOUDINARY_KEY=<your cloudinary key>
CLOUDINARY_SECRET=<your cloudinary secret>

MAPBOX_TOKEN=<your mapbox token>
DB_URL=<your mongodb atlas url>
SECRET=ilovemycrushverymuch
```

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/dubeyji0110/yelpCamp.git
$ cd yelpCamp
```

To install and set up the library, run:

```sh
$ npm install
```

## Usage

### Serving the app

<b>For development purpose</b>

```sh
$ npm development
```

<b>For testing purpose</b>

```sh
$ npm start
```

<b> Make sure you have `mongod` process running in background before `npm start` or `npm development` </b>

## Contributing

You can add your new features and pull a request, I will sure look into that.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Authors

-   **Devansh Dubey** - _Initial work_ - [dubeyji0110](https://github.com/dubeyji0110)
