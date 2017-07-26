//common js模块标准
//debugger;
//module.exports="Super Star"


//es2015
//let name = " Your are Super Star"
////标准导出模块
//export default name;



//react
'use strict';

import React from "react";

class Name extends React.Component {
	render(){
		return(
			<div>
			  hello, react world<input/>
			  </div>
		);
	}
}

export { Name as default};


