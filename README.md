# She Code Queens Blog

Welcome to the She Code Queens Blog codebase!

This is a simple blog template from Bootstrap. Please refer to the documentation for further information.

This repository contains the source code for the She Code Queens Blog. The server itself is implemented in node using express. Follow the instructions below to set up the codebase on your local machine.

## Prerequisites

Before setting up the codebase, make sure you have the following prerequisites installed:

- Node.js (version 12 or above)
- Git

## Installation

1. Clone the repository using Git:
   ```bash
   git clone https://github.com/Perpy-del/sca_six_express_blog
   ```
2. Change into the project directory:

```bash
   cd sca_six_express_blog
```

3. Bundle, compile and transpile the scss, bootstrap and pug files using Laravel mix (a wrapper around Webpack):

```bash
   npm install
```

3. Install the required dependencies:

```bash
   npx mix
```

## Directory Structure

**[Back to Table of Contents](https://github.com/NoDebt-App-Backend/Loan_Prediction_App/tree/main#table-of-contents)**

The codebase follows the following directory structure:

```bash
sca_six_express_blog/
└───app.js
└───bin
└───database
└───resources
    ├───js
    ├───sass
└───routes
└───views
    ├───layouts
    ├───categories-layout
    ├───posts
    ├───sidebar
```

- `database/`:Contains the file for the data in the database
- `bin/`:Contains the file that effects the browser view.
- `resources/`:Contains the folders for the javascript and scss files.
- `routes/`:Contains the files for the routes.
- `views/`:Contains the folders and files with the structure and styles of the content of the browser.

## Usage

To start the sca_six_express_blog application on your local environment, run the following command:

npm start

Visit `http://localhost:3000` in your web browser to access the application.

## Troubleshooting

- If you encounter any issues during the setup process, please ensure that you have the latest version of Node.js

## Project Status

This app is currently developed and maintained by my humble self. At this time, we do not accept external contributions or pull requests. The project is primarily for personal use or demonstration purposes.

## Credits

The She Code Queens Blog codebase is being developed by:

- [Perpetual Meninwa](https://github.com/Perpy-del)
