const product = {
    p1 : {
        name:'Air Jordan 1',
        imgSrc:'../IMG/products/Air Jordans/AJ - dragon.webp',
        price:15
    },
    p2 : {
        name:'Air Jordan 2',
        imgSrc:'../IMG/products/Air Jordans/AJ-yellow.jpg',
        price:20
    },

    p3 : {
        name:'Air Jordan 3',
        imgSrc:'../IMG/products/Air Jordans/AJ-spiderman.webp',
        price:30
    },

    p4 : {
        name:'Air Jordan 4',
        imgSrc:'../IMG/products/Air Jordans/AJ - white-red.jpg',
        price:40
    },

    p5 : {
        name:'Air Jordan 5',
        imgSrc:'../IMG/products/Air Jordans/AJ - grey-white.webp',
        price:50
    }
}


const STORE = document.querySelector('.STORE');
for(const i in product){
    
    // product data
    const product_Name = product[i].name;
    const product_ImgSrc = product[i].imgSrc;
    const product_Price = product[i].price;

    // create elements

    let ITEM = document.createElement('div');
    ITEM.className = "ITEM";

    // PRODUCT IMG
    const productImage = document.createElement('img');
    productImage.setAttribute('src',product_ImgSrc);

    // PRODUCT PRICE
    const productPrice = document.createElement('h1');
    productPrice.textContent = product_Price;

    // PRODUCT NAME
    const productName = document.createElement('h3');
    productName.textContent = product_Name;

    // 
    ITEM.appendChild(productImage);
    ITEM.appendChild(productPrice);
    ITEM.appendChild(productName);
    
    STORE.appendChild(ITEM);
}