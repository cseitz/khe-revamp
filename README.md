# Kent Hack Enough - Revamp
All of KHE built from the ground up to meet modern standards and maintain simplicity with updates.

# This project has two repositories
1. [Frontend](./frontend)
  - Uses Vue.js for UI
  - Vue is only required for important UI elements
  - The website can maintain functionality without being limited to reskins
  - The important code is sectioned off to clearly show what can, and cannot be touched to maintain the project.
  - Clear documentation on what components must be used, and how.
  - Build any website you want, just include the critical components. Boom! KHE site!
  - Retains original and working sample code for a fresh start if needed.
2. [Backend](./backend)
  - Uses Express and MongoDB
  - Handles all the important back-end stuff of KHE
  - Includes the [Staff Site](./backend/staff) frontend, which is structured similar to KHE frontend.
  - Staff Frontend also uses Vue.js for UI
  - Detailed documentation in every part of the project.
  - Easy to maintain. Modular, so also easy to replace.
  - Designed simply, forward-thinking, and ready for future leaders to maintain.


<img src="https://i.kym-cdn.com/entries/icons/facebook/000/033/069/jojo.jpg" width="40%" alt="I've seen enough. I'm satisfied">


# Installation
Be sure NodeJS is installed.

  *For reference, this was built using Node v13.12.0 and NPM 6.14.4*

Install Vue's CLI service, if you haven't already.

  *For reference, this was built using Vue CLI 4.1.2*
```
npm install -g @vue/cli
```

Run install inside the project directory.
```
npm install
```

The backend requires an additional command.
```
cd staff
npm install
```

# How to run
Both frontend and backend have a `config.js` that contains project variables. You can find various things there such as what port the program will run on.

When developing the frontend, you can live-test your changes by using `npm run serve`. To build the project for production (when you are finished making changes), you can run `npm run build`. This compiles the Vue project and places it inside of a folder named `dist` in the root of the project. This directory can be served to a desired port via the included `server.js`, however it is recommended to only do this for [archiving purposes](http://2016.khe.io). Instead, the backend is capable of serving the site and it also provides performance logging and statistics viewable on the staff site. The `server.js` inside of frontend is only capable of serving the site (such as previous year's KHE sites) and lacks all unnecessary features.

All of the above also applies to the staff site which is located inside backend. By default, the backend will serve the staff site that is stored inside of `./staff/dist`.

The backend can be run in development mode by using `npm run dev` which makes any and all changes or saves volatile; and are never applied to the database. When not in development mode, the backend can be run with `npm run production` or simply `node backend.js`. It is advised to use the npm commands for simplicity.


This project is designed with simplicity in mind and should be able to withstand many years without updates to the backend code. By choosing the simple path and less advanced techniques, the maintenance of the entire project is also simplified and it should be reliable in future versions of Node, NPM, and its dependencies.

*TLDR*
  - Frontend
    - `npm run serve` Runs the Vue project with live updating for development.
    - `npm run build` Build the Vue project for production use with the backend.
  - Backend
    - `npm run dev` Runs the backend in development mode so you can't break anything.
    - `npm run production` Witness the fully power of this fully armed and operational battle station.
    - Same Vue commands when inside of `./staff` for development and building of the staff site.

# Production
Due to the simplified nature of this project, as long as all the Vue projects are built with `npm run build` and committed to a repository; that repository should be able to be pulled onto a server and run with `npm run production`. Additional configuration beyond the scope of this project, such as where it is stored on the Hacksu/KHE Digital Ocean Server will be specified and documented either in the production directories themselves, the Hacksu Google Drive in the `Hosting` Document, or `PRODUCTION.md` sometime in the future. Ultimately, the `config.js` file of backend should be configurable enough for any situation.

# Credits
This project was originally started by [Chris Seitz](https://github.com/cseitz5) due to the declining health of the current Kent Hack Enough framework and staff site. All UI work, documentation, and backend logic is currently being coded, and maintained by Chris.

# Contributing
Contributions are welcome, but it is critical that this project maintains its simplified nature that removes many of the problems associated with maintaining the current KHE framework. *To be honest, I'm pretty new to using git so just DM me if you want to help out.*

# Helpful Resources
  - https://nodejs.org/en/docs/
  - https://cli.vuejs.org/guide/installation.html
  - https://vuejs.org/v2/guide/
  - The [fancy documentation](./DOCUMENTATION.md) I spent way too much time working on for your viewing pleasure!

![Squirtle](https://i.giphy.com/media/5fQyd7jM58m5y/giphy.webp)
