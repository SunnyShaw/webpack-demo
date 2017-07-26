### webpack
#### install
```
npm install webpack --global
```

```
webpack --help
```

```
npm init -y
```

```
npm install webpack --save-dev
```

```
npm install css-loader style-loader --save-dev
```

#### webpack.config.js
```
module.exports = {
	entry:'./entry.js',
	output:{
		path:__dirname,
		filename:'bundle.js'
	},
	module: {
		  loaders: [
		    {
		      test: /\.css$/,
		      loader: "style-loader!css-loader" 
		    }
		  ]
		}
}
```

####  source-map
```
webpack --devtool source-map
```

添加至webpack.config.js
```
module.exports = {
	entry:'./entry.js',
	output:{
		path:__dirname,
		filename:'bundle.js'
	},
	devtool:'source-map',
	module: {
		  loaders: [
		    {
		      test: /\.css$/,
		      loader: 'style-loader!css-loader' 
		    }
		  ]
		}
}
```

### babel
```
npm install babel-loader babel-core babel-preset-es2015 --save-dev
```

### webpack-dev-server
```
npm install webpack-dev-server --global
```

```
npm install webpack-dev-server --save-dev
```


```
webpack-dev-server --inline --hot
```

### react
```
npm install babel-core babel-preset-es2015 babel-preset-react webpack webpack-dev-server babel-loader react-hot-loader --save-dev
```

```
npm install react react-dom --save
```