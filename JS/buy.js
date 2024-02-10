// Get product information from query parameters
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productImgSrc = urlParams.get('img');
const productPrice = urlParams.get('price');

// Update DOM elements with product information
const productImage = document.querySelector('.product-image');
const productNameElement = document.querySelector('.product-name');
const productPriceElement = document.querySelector('.product-price');

//Check if the elements exist before updating them
if (productImage && productNameElement && productPriceElement) {
    productImage.src = productImgSrc;
    productNameElement.textContent = productName;
    productPriceElement.innerHTML = productPrice;
} else {
    console.error('Some of the elements do not exist in the DOM.');
}
