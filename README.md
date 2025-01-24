## User Registration, Login, Cart, and Checkout Automation

This project contains automated tests for user registration, login, adding items to the cart, and completing the checkout process. The tests are written using Cypress, a powerful end-to-end testing framework.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Contributing](#contributing)
- [License](#license)

---

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jmaquino2024/User-Registration-Login-Cart-and-Checkout-Automation.git
   ```

2. Navigate to the project directory:

   ```bash
   cd User-Registration-Login-Cart-and-Checkout-Automation
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

---

## Project Structure

```plaintext
|-- cypress/
|   |-- e2e/                # Test files
|   |-- fixtures/           # Test data
|   |-- support/            # Custom commands and configurations
|-- node_modules/           # Installed dependencies
|-- cypress.config.js       # Cypress configuration file
|-- package.json            # Project dependencies and scripts
|-- README.md               # Project documentation
```

---

## Running Tests

### Open Cypress Test Runner

Run the following command to open the Cypress Test Runner:

```bash
npx cypress open
```

Use the Cypress GUI to select and run specific test cases.

### Run Tests in Headless Mode

Run the tests in the terminal using the following command:

```bash
npx cypress run
```

---

## Test Scenarios

The automated tests cover the following scenarios:

1. **User Registration:**

   - Register a new user with valid credentials.

2. **User Login:**

   - Log in with valid credentials.

     Reminder: Please manually create a new account on the test website to replace the one set in the code. This will help prevent the 'email address already exists' error when rerunning the automation process. I've configured the email generation to be random during account creation to ensure continuity. Thank you!

3. **Cart Management:**

   - Add items to the cart.
  
     Reminder: After completing the manual registration, please use the manually created account to log in for this test case. Thank you!

5. **Checkout Process:**

   - Complete the checkout process.
   - Validate success messages for successful transactions.
  
   Reminder: After completing the manual registration, please use the manually created account to log in for this test case. Thank you!

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push your changes:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

