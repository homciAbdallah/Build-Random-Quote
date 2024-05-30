import quotes from '../assets/quotes.json'
import { ADD } from './const';

export const quotesReducer = (state =quotes[0] , action) => {
  switch (action.type) {
    case ADD:
      return quotes[Math.floor(Math.random()*quotes.length)];  
    default:
      return state;
  }
};
