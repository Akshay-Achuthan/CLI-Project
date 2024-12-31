# Weather and Quote CLI Application

This is a simple Command Line Interface (CLI) application that allows users to:

1. Retrieve weather information for a specified city.
2. Get a random quote.

## Features

- **Weather Information:**
  - Fetches real-time weather data for a given city using the OpenWeatherMap API.
  - Displays temperature, weather description, and humidity in a formatted box with colored text.
  - Handles invalid city inputs gracefully with error messages.

- **Random Quote:**
  - Retrieves a random quote from an API.
  - Displays the quote in a styled and colorful box.

- **Interactive Menu:**
  - Provides a user-friendly interactive menu for easy navigation.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- An API key from [OpenWeatherMap](https://openweathermap.org/).

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your OpenWeatherMap API key:
   - Create a file named `config.js` in the `src` folder.
   - Add the following code:
     ```javascript
     export const weatherApiKey = '<Your-OpenWeatherMap-API-Key>';
     ```

4. Run the application:
   ```bash
   node src/index.js
   ```

## Usage

Upon running the application, you will be presented with an interactive menu. Use the arrow keys to select an action and press `Enter`.

### Options

1. **Get Weather Info**
   - Enter a city name to retrieve the current weather information.
   - The application will display:
     - Temperature
     - Weather description
     - Humidity
   - If the city name is invalid, an error message will be displayed in a styled box.

2. **Get Random Quote**
   - Retrieves and displays a random quote in a colorful box.

3. **Exit**
   - Exits the application with a goodbye message.

## Project Structure

```
project-folder/
|-- src/
|   |-- services/
|   |   |-- weatherService.js  # Fetches weather data from OpenWeatherMap API
|   |   |-- quoteService.js    # Fetches a random quote from an API
|   |-- config.js              # Contains the OpenWeatherMap API key
|   |-- index.js               # Main CLI logic
|-- package.json               # Project dependencies and metadata
|-- README.md                  # Project documentation
```

## Dependencies

- [axios](https://www.npmjs.com/package/axios) - For making API requests.
- [inquirer](https://www.npmjs.com/package/inquirer) - For interactive CLI menus.
- [chalk](https://www.npmjs.com/package/chalk) - For coloring CLI output.
- [boxen](https://www.npmjs.com/package/boxen) - For creating styled boxes around text.

## Error Handling

- Invalid city inputs display an error message: "City not found or invalid input."
- Network errors or API issues are logged in the console.

## Example Output

### Weather Info
```
┌──────────────────────────────────────────┐
│ Weather in: New York                │
│ Temperature: 15°C               │
│ Weather: Clear sky                │
│ Humidity: 50%                     │
└─────────────────────────────────────────┘
```

### Random Quote
```
┌────────────────────────────────────────────┐
│ "The only limit to our realization of tomorrow is our doubts of today." │
└────────────────────────────────────────────┘
```

## License

This project is licensed under the MIT License.

