User Registration, Login, Cart, and Checkout Automation

This project contains automated tests for user registration, login, adding items to the cart, and completing the checkout process. The tests are written using Cypress, a powerful end-to-end testing framework.

Table of Contents

Prerequisites

Installation

Project Structure

Running Tests

Test Scenarios

Contributing

License

Prerequisites

Before running the tests, ensure you have the following installed:

Node.js (version 14.x or higher)

npm (comes with Node.js)

Git

Installation

Clone the repository:

git clone https://github.com/jmaquino2024/User-Registration-Login-Cart-and-Checkout-Automation.git

Navigate to the project directory:

cd User-Registration-Login-Cart-and-Checkout-Automation

Install dependencies:

npm install

Project Structure

|-- cypress/
|   |-- e2e/                # Test files
|   |-- fixtures/           # Test data
|   |-- support/            # Custom commands and configurations
|-- node_modules/           # Installed dependencies
|-- cypress.config.js       # Cypress configuration file
|-- package.json            # Project dependencies and scripts
|-- README.md               # Project documentation

Running Tests

Open Cypress Test Runner

Run the following command to open the Cypress Test Runner:

npx cypress open

Use the Cypress GUI to select and run specific test cases.

Run Tests in Headless Mode

Run the tests in the terminal using the following command:

npx cypress run

Test Scenarios

The automated tests cover the following scenarios:

User Registration:

Register a new user with valid credentials.

Validate error messages for invalid inputs.

User Login:

Log in with valid credentials.

Validate error messages for incorrect credentials.

Cart Management:

Add items to the cart.

Remove items from the cart.

Validate cart updates.

Checkout Process:

Complete the checkout process.

Validate success messages for successful transactions.

Contributing

Contributions are welcome! Follow these steps to contribute:

Fork the repository.

Create a new branch for your feature or bug fix:

git checkout -b feature-name

Make your changes and commit them:

git commit -m "Add feature description"

Push your changes:

git push origin feature-name

Submit a pull request.

License

This project is licensed under the MIT License.

