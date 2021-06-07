# Nationskollen Web Application

This repository contains the source code for the front-end of the Nationskollen
web application. It contains both the admin interface, as well as the regular
user interface. Uses Next.js.

## Documentation

All documentation for Nationskollen is available [here](https://nationskollen-docs.engstrand.nu).

## Development

### Initial setup

Refer to the "Initial setup" section of the [SDK README](https://github.com/nationskollen/sdk#initial-setup)
for setting up Github Package Registry authtentication. This only has to be
done **once** and will work for **all** other repositories as well.

### Start development server

1. `npm install`
2. `npm run dev`

### Commands

1. `npm run dev` - Start the development server
2. `npm run build` - Build a static version of the website
3. `npm run start` - Start a HTTP server, serving the built static website
4. `npm run format` - Formats all code
5. `npm run docs` - Generate documentation in docs
6. `npm run docs:watch` - Generate documentation and watch for changes
