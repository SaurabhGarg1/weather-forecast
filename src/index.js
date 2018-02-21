import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import WeatherReducer from './Reducer/WeatherReducer';
import {applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore)(WeatherReducer);

ReactDOM.render(<Provider store = {createStoreWithMiddleware}>
	<App/>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
