import React from "react";
import GameBoard from "./GameBoard.js";
import Grid from "./Grid.js";
import Snake from '../containers/Snake.js';
import Header from './Header';
import { BrowserRouter} from 'react-router-dom';

const App=()=>{
	return (
		<div className="ui container">
		<BrowserRouter>
			<Header />
			</BrowserRouter>
		<div className="app">
		
			<div><GameBoard /></div>
			<div><Snake /></div>
		</div>
		</div>
	)
	
}

export default App;
