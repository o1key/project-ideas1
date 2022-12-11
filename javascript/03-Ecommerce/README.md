# AMAZON

## I. Create Folder Structure

1. Create root folder as Amazon
2. Add frontend add backend folder
3. Create src folder in frontend
4. Create index.html with heading Amazon in src
5. Rum npm init in frontend folder
6. Npm install live-server
7. Add start command as live-server src --verbose
8. Run npm start

## II. Design Website

1. Create style.css
2. Link style.css to index.html
3. Create div.grid-container
4. Create header, main and footer
5. Style html, body
6. Style grid-container, header, main and footer

## III. Create Static Home Screen

1. create ul.products
2. create li
3. create div.product
4. add .product-image, .product-name, .product-brand, . product-price
5. style ul.products and internal divs
6. duplicate 2 times to show 3 products

## IV. Render Dynamic Home Screen

1. create data.js
2. export an array of 6 products
3. create screens/HomeScreen.js
4. export HomeScreen as an object with render() method
5. implement render()
6. import data.js
7. return products mapped to li inside an ul
8. create app.js
9. link it to index.html as module
10. set main id to main_container
11. create router() function
12. set main_container innerHTML to HomeScreen.render()
13. set load event of window to router() function

## V. Build Url Router

1. create routes as route:screen object for home screen
2. create utils.js
3. export parseRequestUrl()
4. set url as hash address split by slash
5. return resource, id and verb of url
6. update router()
7. set request as parseRequestUrl()
8. build parsedUrl and compare with routes
9. if route exists render it, else render Error404
10. create screens/Error404.js and render error message

## VI. Create Node.js Server

1. run npm init in root Amazon folder
2. npm install express
3. create server.js
4. add start command as node backend/server.js
5. require express
6. move data.js from frontend to backend
7. create route for /api/product
8. return products in data.js
9. run npm start

## VII. Load Products From Backend

1. edit HomeScreen.js
2. make render async
3. fetch products from '/api/products' in render()
4. make router() async and call await HomeScreen.render()
5. use cors on backend

## VIII. Add Webpack

1. cd frontend
2. npm install -D webpack webpack-cli webpack-dev-server
3. npm uninstall live-server
4. "start":"webpack-dev-server --mode development --watch-content-base --open"
5. move index.html, style.css and images to frontend folder
6. rename app.js to index.js
7. update index.html
8. add ``` <script src="main.js"></script>``` before ```</body> ```
9. npm start
10. npm i axios
11. change fetch to axios in HomeScreen

## IX. Install Babel For ES6 Syntax

1. npm install -D babel core, cli, node, preset-env
2. create .babelrc and set presets to @babel/preset-env
3. npm install -D nodemon
4. set start: nodemon --watch backend --exec babel-node backend/server.js
5. convert require to import in server.js
6. npm start

## X. Enable Code Linting

1. npm install -D eslint
2. install VSCode eslint extension
3. create .eslintrc and set module.exports for env to node
4. set VSCode setting for editor.codeActionsOnSave source.fixAll.eslint to true
5. check result for linting error
6. npm install eslint-config-airbnb-base and eslint-plugin-import
7. set extends to airbnb-base
8. set parserOptions to ecmaVersion 11 and sourceType to module
9. set rules for no-console to 0 to ignore linting error

## XI. Install VSCode Extension

1. JavaScript (ES6) code snippets
2. ES7 React/Redux/GraphQL/React-Native snippets
3. Prettier - Code formatter
4. HTML&LESS grammar injections
5. CSS Peek

## XII. Create Ratting Component

1. create components/Rating.js
2. create div.rating
3. link to fontawesome.css in index.html
4. define Rating object with render()
5. if !props.value return empty value
6. else use fa fa-start, fa-star-half-o and fa-star-o
7. last span for props.text || ''
8. style dev.rating, span and last span
9. edit HomeScreen
10. add div.product-rating and use Rating component