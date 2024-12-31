import inquirer from 'inquirer';
import chalk from 'chalk';
import boxen from 'boxen';
import { getWeather } from './services/weatherService.js';
import { getRandomQuote } from './services/quoteService.js';

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'Get Weather Info',
        'Get Random Quote',
        'Exit'
      ]
    }
  ]);

  switch (answers.action) {
    case 'Get Weather Info':
      const weatherAnswers = await inquirer.prompt([
        {
          type: 'input',
          name: 'city',
          message: 'Enter city name:'
        }
      ]);

      const weatherData = await getWeather(weatherAnswers.city);
      let weatherMessage;

      if (weatherData.message) {
        weatherMessage = ` ${chalk.red(weatherData.message)}`
      } else {
        weatherMessage = `  
  Weather in: ${chalk.green(weatherAnswers.city)}
  Temperature: ${chalk.yellow(weatherData.temperature)}°C
  Weather: ${chalk.cyan(weatherData.description)}
  Humidity: ${chalk.magenta(weatherData.humidity)}%  
  `;}

      const boxedWeatherMessage = boxen(weatherMessage, {
        padding: 0.2,
        margin: 1,
        borderColor: 'white',
        borderStyle: 'round',
      });

      console.log(boxedWeatherMessage);
      break;
    
    case 'Get Random Quote':
      const quoteData = await getRandomQuote();
      const quoteMessage = `${chalk.green(`"${quoteData}"`)}`;
      
      const boxedQuoteMessage = boxen(quoteMessage, {
        padding: 1,
        borderColor: 'yellow',
        borderStyle: 'round',
      });

      console.log(boxedQuoteMessage);
      break;
    
    case 'Exit':
      console.log(chalk.magenta('Goodbye!'));
      process.exit();
      break;
  }
}

main();
