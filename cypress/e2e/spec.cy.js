describe('User Registration, Login, Cart, and Checkout Automation', () => {
  
  // Test case: User Registration
  it('User Registration Automation', () => {
    cy.visit('https://practicesoftwaretesting.com/');

    // Navigate to the Sign In page
    cy.xpath('//li[@role="menuitem"]//a[@data-test="nav-sign-in"]').click();
    cy.url().should('include', 'https://practicesoftwaretesting.com/auth/login'); // Validate redirection to login page

    // Navigate to the Registration page
    cy.xpath('//a[@data-test="register-link"]').click();
    cy.url().should('eq', 'https://practicesoftwaretesting.com/auth/register'); // Validate URL

    // Fill out the registration form
    cy.xpath('//input[@data-test="first-name"]').type('Marvin');
    cy.xpath('//input[@data-test="last-name"]').type('Aquino');
    cy.xpath('//input[@data-test="dob"]').type('2000-09-04');
    cy.xpath('//input[@data-test="address"]').type('Julio Pacana Street');
    cy.xpath('//input[@data-test="postcode"]').type('9000');
    cy.xpath('//input[@data-test="city"]').type('Cagayan De Oro City');
    cy.xpath('//input[@data-test="state"]').type('NO State');

    // Select country
    cy.xpath('//select[@id="country"]')
      .select('PH')
      .should('have.value', 'PH'); // Validate selection

    cy.xpath('//input[@data-test="phone"]').type('090511122244');

    // Generate unique email and validate
    const uniqueEmail = `test.test${Date.now()}@gmail.com`;
    cy.xpath('//input[@data-test="email"]').type(uniqueEmail);

    cy.xpath('//input[@data-test="password"]').type('M1cros-2026');

    // Click the Register button
    cy.xpath("//button[@type='submit' and @data-test='register-submit']").click();
    cy.url().should('eq', 'https://practicesoftwaretesting.com/auth/login'); // Validate redirection to login page

    // Save the unique email to a fixture file for reuse
    cy.writeFile('cypress/fixtures/uniqueEmail.json', { email: uniqueEmail })
      .then(() => cy.log('Unique email saved for future use.'));
  });

  // Test case: Login Functionality
  it('Login Functionality Verification', () => {
    cy.visit('https://practicesoftwaretesting.com/auth/login');

    // Enter login credentials
    cy.xpath('//input[@data-test="email"]').type('john.marvin.a.aquino@gmail.com');
    cy.xpath('//input[@data-test="password"]').type('M1cros-2025');

    // Submit login form
    cy.xpath('//input[@data-test="login-submit"]').click();
    cy.url().should('include', 'https://practicesoftwaretesting.com/account'); // Validate successful login
  });

  // Test case: Add to Cart
  it('Add to Cart Validation', () => {
    cy.visit('https://practicesoftwaretesting.com/auth/login');

    // Log in as an existing user
    cy.xpath('//input[@data-test="email"]').type('john.marvin.a.aquino@gmail.com');
    cy.xpath('//input[@data-test="password"]').type('M1cros-2025');
    cy.xpath('//input[@data-test="login-submit"]').click();
    cy.url().should('include', 'https://practicesoftwaretesting.com/account'); // Validate login success

    // Navigate to Home
    cy.xpath('//li[@role="menuitem"]//a[@data-test="nav-home"]').click();
    cy.url().should('include', 'https://practicesoftwaretesting.com/'); // Validate redirection to Home page

    // Add a product to the cart
    cy.xpath('//a[contains(@class, "card")]/descendant::h5[contains(text(), "Combination Pliers")]').click();
    cy.url().should('include', '/product'); // Validate product page redirection
    cy.xpath('//button[@data-test="add-to-cart"]').click();

    // Verify success message for adding to cart
    cy.xpath('//div[contains(@class, "toast-message") and contains(text(), "Product added to shopping cart.")]')
      .should('be.visible');
  });

  // Test case: Checkout Process
  it('Checkout Process Automation', () => {
    cy.visit('https://practicesoftwaretesting.com/auth/login');

    // Log in as an existing user
    cy.xpath('//input[@data-test="email"]').type('john.marvin.a.aquino@gmail.com');
    cy.xpath('//input[@data-test="password"]').type('M1cros-2025');
    cy.xpath('//input[@data-test="login-submit"]').click();
    cy.url().should('include', 'https://practicesoftwaretesting.com/account'); // Validate login success

    // Navigate to Home and select a product
    cy.xpath('//li[@role="menuitem"]//a[@data-test="nav-home"]').click();
    cy.url().should('include', 'https://practicesoftwaretesting.com/'); // Validate redirection
    cy.xpath('//h5[contains(text(), "Combination Pliers")]').click();
    cy.url().should('include', 'https://practicesoftwaretesting.com/product/'); // Validate product page redirection

    // Add product to cart
    cy.xpath('//button[@data-test="add-to-cart"]').click();
    cy.xpath('//div[contains(@class, "toast-message") and contains(text(), "Product added to shopping cart.")]')
      .should('be.visible'); // Validate success message

    // Wait for the toast notification to disappear with an increased timeout
    cy.xpath('//div[contains(@class, "toast-message") and contains(text(), "Product added to shopping cart.")]', { timeout: 10000 })
      .should('not.exist'); // Ensure the toast message is no longer visible

    // Navigate to Cart
    cy.xpath('//li[@role="menuitem"]//a[@data-test="nav-cart"]').click();
    cy.url().should('eq', 'https://practicesoftwaretesting.com/checkout'); // Validate cart page redirection

    // Proceed through checkout steps
    cy.xpath('//button[@data-test="proceed-1"]').click();
    cy.xpath('//button[@data-test="proceed-2"]').click();
    cy.xpath('//button[@data-test="proceed-3"]').click();

    // Select payment method and confirm
    cy.get('select[data-test="payment-method"]').select('cash-on-delivery').should('have.value', 'cash-on-delivery');
    cy.xpath('//button[@data-test="finish"]').click();

  // Validate the success message
  cy.xpath('//div[contains(@class, "alert alert-success")]//div[contains(text(), "Payment was successful")]')
  .should('be.visible'); // Verify the element is visible

  });

});
