const converterForm = document.getElementById("converter-form");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");

window.addEventListener("load", fetchCurrencies);
converterForm.addEventListener("submit", convertCurrency);

async function fetchCurrencies() {
	try {
		const response = await fetch("https://api.exchangerate-api.com/v4/latest/GBP");
		const data = await response.json();
		const currencyOptions = Object.keys(data.rates);

		currencyOptions.forEach((currency) => {
			const option1 = document.createElement("option");
			option1.value = currency;
			option1.textContent = currency;
			fromCurrency.appendChild(option1);

			const option2 = document.createElement("option");
			option2.value = currency;
			option2.textContent = currency;
			toCurrency.appendChild(option2);
		});

		fromCurrency.value = "GBP";
		toCurrency.value = "USD";
	} catch (error) {
		resultDiv.textContent = "Unable to load currency rates right now. Please try again later.";
	}
}

async function convertCurrency(event) {
	event.preventDefault();

	const amount = Number.parseFloat(amountInput.value);
	const fromCurrencyValue = fromCurrency.value;
	const toCurrencyValue = toCurrency.value;

	if (!Number.isFinite(amount) || amount <= 0) {
		alert("Please enter a valid amount 🧐");
		return;
	}

	try {
		const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrencyValue}`);
		const data = await response.json();

		const rate = data.rates[toCurrencyValue];

		if (!rate) {
			resultDiv.textContent = "Selected currency is not available.";
			return;
		}

		const convertedAmount = amount * rate;
		resultDiv.textContent = `${amount} ${fromCurrencyValue} = ${convertedAmount.toFixed(2)} ${toCurrencyValue}`;
	} catch (error) {
		resultDiv.textContent = "Conversion failed. Please try again.";
	}
}
