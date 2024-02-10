import data from "./database.js";

let products = data.products;
let company = data.company;



const companyName = company.name; // company name


// HEADER :

// COMPANY NAME :

const CompanyName = document.querySelectorAll('.company-name');
CompanyName.forEach(element =>{
    element.textContent = companyName;
})

// ------------------- STORE PAGE ------------------- //

// DISPLAY PRODUCTS :

// Access to products info from prices.js
for (const productTypeKey in products) {
    const productType = products[productTypeKey];

    for (const productMarkKey in productType) {
        const productMark = productType[productMarkKey];

        for (const productIDKey in productMark) {
            const productID = productMark[productIDKey];

            // Product info:
            const productImgSrc = productID.img; // Product img src
            const productName = productID.name; // Product name
            const productPrice = productID.price; // Product price
            const productCurrency = productID.currency;
            
            // Create elements
            const storeListContainer = document.querySelector('.products-list');

            const storeItemSell = document.createElement('div');
            storeItemSell.classList.add('store-item-sell');

            const productFullData = document.createElement('div');
            productFullData.classList.add('product-full-data');

            const productImageDiv = document.createElement('div');
            productImageDiv.classList.add('product-image-div');

            // product image
            const productImg = document.createElement('img');
            productImg.classList.add('product-image');
            productImg.src = productImgSrc;

            // store name
            const storeName = document.createElement('p');
            storeName.classList.add('store-name');
            storeName.textContent = 'NIKE';

            // product name
            const productNameElement = document.createElement('h4');
            productNameElement.classList.add('product-name');
            productNameElement.textContent = productName;

            // product price
            const productPriceElement = document.createElement('p');
            productPriceElement.classList.add('product-price');
            productPriceElement.textContent = productCurrency+productPrice;

            // ICONS DIV
            const cartIconDiv = document.createElement('div');
            cartIconDiv.classList.add('cart-icon-div');

            // ICON BACKGROUND
            const cartIconbgColor = document.createElement('div');
            cartIconbgColor.classList.add('icon-background');

            const heartIconbgColor = document.createElement('div');
            heartIconbgColor.classList.add('icon-background');

            
            // CART ICON
            const cartIconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            cartIconSVG.classList.add('bi', 'icon', 'bi-bag-dash');
            cartIconSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            cartIconSVG.setAttribute('viewBox', '0 0 16 16');

            // Create the first path element for the heart shape
            const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathElement.setAttribute('fill-rule', 'evenodd');
            
            // Create the second path element for the line in the heart
            pathElement.setAttribute('d', 'M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5');
            const pathElement2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathElement2.setAttribute('d', 'M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z');
            
            // HEART ICON
            const heartIconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            heartIconSVG.classList.add('bi', 'icon','bi-heart');
            heartIconSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            heartIconSVG.setAttribute('viewBox', '0 0 16 16');
            
            // Create the first path element for the heart shape
            const heartPathElement1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            heartPathElement1.setAttribute('fill-rule', 'evenodd');
            heartPathElement1.setAttribute('d', 'M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2');
            
            // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            //     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
            // </svg>

            // Append elements to structure

            // IMG
            productImageDiv.appendChild(productImg);

            // CART ICON
            cartIconSVG.appendChild(pathElement);
            cartIconSVG.appendChild(pathElement2);

            // HEART ICON
            heartIconSVG.appendChild(heartPathElement1);

            // ICON BACKGROUND:
            cartIconbgColor.appendChild(cartIconSVG);
            heartIconbgColor.appendChild(heartIconSVG); 

            // ADD ICONS IN A  DIV
            cartIconDiv.appendChild(cartIconbgColor); 
            cartIconDiv.appendChild(heartIconbgColor); 

            // add everything in the global div 
            productFullData.appendChild(cartIconDiv);
            productFullData.appendChild(productImageDiv);
            productFullData.appendChild(storeName);
            productFullData.appendChild(productNameElement);
            productFullData.appendChild(productPriceElement);
            
            // add in the global store :
            storeItemSell.appendChild(productFullData);

            // Append elements to the main container
            storeListContainer.appendChild(storeItemSell);

            // set dataset properties for the productImg
            storeItemSell.dataset.productName = productName;
            storeItemSell.dataset.productImg = productImgSrc;
            storeItemSell.dataset.productPrice = productPrice;
            storeItemSell.addEventListener('click', function(event) {

                // Retrieve product information from the data attributes
                const productName = event.currentTarget.dataset.productName;
                const productImgSrc = event.currentTarget.dataset.productImg;
                const productPrice = event.currentTarget.dataset.productPrice;

                // Redirect to buy.html with query parameters
                window.location.href = `buy.html?name=${productName}&img=${productImgSrc}&price=${productPrice}`;

            });

        }
    }
}



// ------------------- CART PAGE -------------------

// UPDATE CURRENCY :
function updateCurrency() {
    const currency_input = document.getElementById('currency').value;
    console.log(currency_input);

    if (currency_input == 'USD') {
        console.log('price is on ', product_Price_inUSD);

    }else if (currency_input == 'EUR') {
        console.log('price is on ', product_Price_inEUR);

    }else if (currency_input == 'CHF') {
        console.log('price is on ', product_Price_inCHF);
    }else{
        console.log('please select a currency!')
    }
}


function updatePrice(){

    // call variables
    const price = document.getElementById('product-price');
    const quantity = Number(document.getElementById('product-qunatity').value);
    const totalPrice = document.querySelectorAll('#product-subtotal-price');

    // convert price from text to number
    let priceText = price.textContent;
    let priceInt = parseInt(priceText)
    // calculate the total :
    let subtotal = priceInt*quantity;
    console.log('totale :$',subtotal)

    // display total onchange in all paragraphs with same id:
    
    totalPrice.forEach(function(paragraph){
        paragraph.textContent = 'loading...';
        setTimeout(function(){
            paragraph.textContent = subtotal;
        },2000)
        
    })

}


// APPLY COUPON
function applyCoupon() {

    const Coupons = [1111,2222,3333];
    const coupon = document.getElementById('coupon-input');
    const message = document.getElementById('message');

    const totalPrice = document.querySelectorAll('#product-subtotal-price');

    if(coupon.value==3){

        // discount
        const price = document.getElementById('product-price');
        const discountRate = 10/100;

        // convert price to number :
        let priceValue = price.textContent;
        let priceInt = parseInt(priceValue);

        // New price with discount :
        const priceDiscounted = priceInt - (priceInt * discountRate);

        totalPrice.forEach(function(newprice){
            newprice.textContent = priceDiscounted;
        })

        // show valid message
        message.textContent = "You got a 10% discount !";
        message.style.color = 'green';
        message.style.display ='block';

    }else{
        message.textContent='Invalid Coupon Code!';
        message.style.color='red';
        message.style.display='block';
    }

}


