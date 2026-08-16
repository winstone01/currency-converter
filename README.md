# Currency Converter

A clean, responsive currency converter built with HTML, CSS and vanilla JavaScript. The app retrieves current exchange-rate data from an external API and converts a user-entered amount between a wide range of currencies.

## Features

- Converts between multiple international currencies
- Loads the available currency codes dynamically from the API
- Uses GBP and USD as the default currency pair
- Validates empty, invalid and negative amounts
- Displays the converted value to two decimal places
- Provides clear messages when rates cannot be loaded or a conversion fails
- Responsive dark interface for desktop and mobile screens
- Keyboard-friendly form controls with visible focus styles

## Built With

- Semantic HTML5
- CSS custom properties
- Vanilla JavaScript
- Fetch API
- Async/await
- [ExchangeRate-API](https://www.exchangerate-api.com/)
- [Oswald](https://fonts.google.com/specimen/Oswald) from Google Fonts

## How It Works

When the page loads, the app requests the latest GBP exchange-rate data and uses the returned currency codes to populate both selection menus.

When the form is submitted, it:

1. Checks that the amount is a valid number greater than zero.
2. Requests the latest rates for the selected starting currency.
3. Finds the rate for the selected target currency.
4. Multiplies the amount by that rate.
5. Displays the result rounded to two decimal places.

## Project Structure

```text
currency-converter/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run Locally

Clone the repository and open `index.html` in your browser:

```bash
git clone <your-repository-url>
cd currency-converter
```

You can also run the project with a local development server such as VS Code Live Server.

No build tools or package installation are required.

## What I Practised

- Working with a third-party REST API
- Handling asynchronous operations with async/await
- Creating and appending DOM elements from API data
- Reading and validating form values
- Providing useful error states
- Building a responsive interface with reusable CSS variables

## Possible Improvements

- Add a button to swap the selected currencies
- Format values using `Intl.NumberFormat`
- Show a loading state while rates are being fetched
- Disable the form until the currency list is ready
- Add country flags or full currency names
- Remember the user's most recent selections
- Display the current exchange rate and last-updated time

## API Note

Exchange rates are supplied by ExchangeRate-API and may not represent live financial-market prices. This project is intended for learning and general reference, not financial transactions.

## Author

**Winstone Anderson**

- GitHub: [winstone01](https://github.com/winstone01)
- Portfolio: [winstoneanderson.com](https://winstoneanderson.com)

## License

This project is available for personal and educational use.
