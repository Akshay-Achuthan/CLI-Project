# CLI Application

A simple CLI application that allows users to perform the following tasks:

1. Fetch weather information for a specific city.
2. Get a random quote.

## Features

- **Weather Information:** Get temperature, weather description, and humidity for any city.
- **Random Quote Generator:** Fetch a random quote to brighten your day.
- **User-friendly Interface:** Uses Inquirer.js for interactive prompts.
- **Styled Output:** Outputs are styled with Chalk and Boxen for better readability.

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your OpenWeather API key:
   - Create a `config.js` file in the `src` folder.
   - Add the following content:
     ```javascript
     export const weatherApiKey = 'YOUR_API_KEY';
     ```
   Replace `YOUR_API_KEY` with your actual OpenWeather API key.

## Usage

To run the project, simply type:
```bash
npm run start
```

Follow the on-screen prompts to interact with the CLI application.

## Project Structure

```
├── src
│   ├── index.js               # Main entry point of the application
│   ├── services
│   │   ├── weatherService.js  # Fetches weather data
│   │   ├── quoteService.js    # Fetches random quotes
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

## Dependencies

- [axios](https://www.npmjs.com/package/axios): For making HTTP requests.
- [inquirer](https://www.npmjs.com/package/inquirer): For interactive CLI prompts.
- [chalk](https://www.npmjs.com/package/chalk): For styling terminal output.
- [boxen](https://www.npmjs.com/package/boxen): For creating boxed output in the terminal.

## Example Outputs

### Weather Information
```
┌──────────────────────────────────────────────┐
│ Weather in: New York                        │
│ Temperature: 22°C                           │
│ Weather: Clear sky                          │
│ Humidity: 50%                               │
└──────────────────────────────────────────────┘
```

### Random Quote
```
┌──────────────────────────────────────────────┐
│ "Life is what happens when you're busy      │
│ making other plans."                        │
│ — John Lennon                               │
└──────────────────────────────────────────────┘
```

## License

This project is open-source and available under the [MIT License](LICENSE).

