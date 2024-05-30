import {createStore} from "redux";
import {quotesReducer} from './reducer'

export const store=createStore(quotesReducer);