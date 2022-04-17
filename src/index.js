import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import items from './items';
import {choices, remove} from './helpers';
import App from './App';
import * as serviceWorker from './serviceWorker';

let fruit = choices(items);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let remaining = remove(fruit, items);

console.log(`I'm sorry, we're all out. We have ${remaining.length}.`);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
