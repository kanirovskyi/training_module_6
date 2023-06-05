import dataProducts from "./products.js"
console.log("✅ ~ dataProducts:", dataProducts)


const productsList = document.querySelector(".js-products");
     
// refs.productItem.classList.add("product-item");

// refs.productTitle.classList.add("product-title");

// refs.productTitle.textContent = `$`;

const makeProductCard = ({ name, description, price, available, imageEl, onSale }) => {

const refs = {
    productItem: document.createElement("li"),
    productTitle: document.createElement("h2"),
    productDescr: document.createElement("p"),
    productPrice: document.createElement("span"),
    productAvail: document.createElement("p"),
    productImage: document.createElement("img"),
    productSale: document.createElement("p"),
}

    refs.productItem.classList.add("product-item");
        
    refs.productTitle.classList.add("product-title");
    refs.productTitle.textContent = name;
    
    refs.productDescr.classList.add("product-descr");
    refs.productDescr.textContent = description;
    
    refs.productPrice.classList.add("product-price");
    refs.productPrice.textContent = price;

    refs.productAvail.classList.add("product-avail");
    refs.productAvail.textContent = available;

    refs.productImage.classList.add("product-image");
    refs.productImage.scr = "https://jsconf.com/images/jsconf_cl.png";
    refs.productImage.alt = "icon";
    refs.productImage.width = "300";

    console.log(refs.productImage.scr);

    refs.productSale.classList.add("product-sale");
    refs.productSale.textContent = onSale;

    refs.productItem.append(refs.productTitle, refs.productDescr, refs.productPrice, refs.productAvail, refs.productImage, refs.productSale);
    
    return refs.productItem;
};

console.log(makeProductCard(dataProducts[1]));

const productElements = [...dataProducts].map(makeProductCard);
console.log("✅ ~ productElements:", productElements);

productsList.append(...productElements);

const magicBtn = document.querySelector(".magicBtn");
magicBtn.addEventListener("click", () => {
    
    const imageEl = "https://jsconf.com/images/jsconf_cl.png";
    img.src = imageEl;
   
})
