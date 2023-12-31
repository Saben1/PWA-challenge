
# Text Editor - Progressive Web Application (PWA)

[Screenshots](https://github.com/Saben1/PWA-challenge/issues/1#issue-1834514336)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contact](#contact)

## Description

This project is a progressive web application (PWA) text editor that allows users to create notes or code snippets and save them in the browser, even without an internet connection. The application uses IndexedDB for data persistence and caching, and it can be installed as a standalone application on desktop or mobile devices.

## Features

- Create and edit notes or code snippets with or without an internet connection.
- Automatic data saving to IndexedDB when the DOM window is unfocused.
- Service worker for caching static assets and enabling offline functionality.
- Webpack for bundling JavaScript files and generating necessary files.
- Babel for using modern JavaScript features like async/await.

## Technologies

- HTML5
- CSS3
- JavaScript
- IndexedDB
- Webpack
- Babel
- Workbox (for service worker)
- WebpackPwaManifest (for manifest.json)

## Installation

1. Clone the repository from GitHub.
2. Navigate to the root directory of the project in your terminal.
3. Run `npm install` to install the required dependencies.

## Usage

1. Run `npm run start` from the root directory to start the backend and serve the client.
2. The application will be accessible at `http://localhost:3000` by default.
3. Open the application in your browser to access the text editor.
4. You can create, edit, and delete notes or code snippets.
5. The application will automatically save your changes to IndexedDB when you click off the DOM window.

## Deployment

The application is deployed on Heroku and can be accessed at [Live URL](https://pwa-saben-42a46b3754fc.herokuapp.com/).


## Contact

For any inquiries or questions, feel free to reach out to:

1. GitHub Username:Saben1
2. Email:budhathokisabin303@gmail.com