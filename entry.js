//common js 写法
//var name = require('./name');


//require('style-loader!css-loader!./style.css')
//require('./style.css')


//标准导入模块
//import name from './name';
//import './style.css';


//let input = document.createElement('input');
//
//document.getElementById('app').textContent="hello world "+name;
//document.getElementById('app').appendChild(input);
//
  

//react
import React from "react";
import ReactDOM from "react-dom";
import Name from "./name";

ReactDOM.render(
	<Name />,
	document.getElementById('app')
);
