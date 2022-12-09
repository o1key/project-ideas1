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
