import axios from 'axios';

export async function getRandomQuote() {
  try {
    const response = await axios.get('https://dummyjson.com/quotes/random');
    return `${response.data.quote} — ${response.data.author}`;  // Access the quote and author properly
  } catch (error) {
    console.error('Error fetching quote:', error);
    throw error;
  }
}
