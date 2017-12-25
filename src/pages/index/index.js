import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app/index'
import mirror, { Router, Route, render ,hashHistory} from 'mirrorx';
import './index.css';
const content = document.querySelector("#app");
mirror.defaults({
    historyMode: 'hash'
});
render(<Router><App /></Router>, content);
