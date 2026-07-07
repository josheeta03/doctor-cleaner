// ================= COUNTER =================

const counters = document.querySelectorAll(".counter");

const speed = 80;

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = Math.ceil(target / speed);

if(count < target){

counter.innerText = count + increment;

setTimeout(update,25);

}else{

counter.innerText = target;

}

}

update();

});

/* ================= FILTER PRODUCTS ================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".filter-btn.active").classList.remove("active");

button.classList.add("active");

const filter=button.dataset.filter;

productCards.forEach(card=>{

if(filter==="all" || card.dataset.category===filter){

card.classList.remove("hide");

card.classList.add("show");

}else{

card.classList.remove("show");

card.classList.add("hide");

}

});

});

});

/* ================= SEARCH ================= */

const searchInput=document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

productCards.forEach(card=>{

const name=card.dataset.name.toLowerCase();

if(name.includes(value)){

card.classList.remove("hide");

card.classList.add("show");

}else{

card.classList.remove("show");

card.classList.add("hide");

}

});

});

}

/* ================= SORT ================= */

const sort=document.getElementById("sortProducts");

const grid=document.querySelector(".products-grid");

if(sort){

sort.addEventListener("change",()=>{

const cards=[...document.querySelectorAll(".product-card")];

if(sort.value==="az"){

cards.sort((a,b)=>

a.dataset.name.localeCompare(b.dataset.name));

}

if(sort.value==="za"){

cards.sort((a,b)=>

b.dataset.name.localeCompare(a.dataset.name));

}

if(sort.value==="rating"){

cards.sort((a,b)=>

b.dataset.rating-a.dataset.rating);

}

cards.forEach(card=>grid.appendChild(card));

});

}

document.addEventListener("DOMContentLoaded", function () {

    const productData = {

        toilet:{
            title:"Doctor Toilet Cleaner",
            image:"images/products/toiletcleaner.jpeg",
            description:"Powerful toilet cleaner that removes stubborn stains.",
            category:"Toilet Cleaner",
            sizes:"500 ml, 1 L, 5 L",
            fragrance:"Ocean Fresh",
            color:"Blue",
            suitable:"Homes, Hotels, Hospitals",
            shelf:"24 Months",
            packaging:"HDPE Bottle"
        },

        floor:{
            title:"Doctor Floor Cleaner",
            image:"images/products/floorcleaner.jpeg",
            description:"Premium floor cleaner for all types of flooring.",
            category:"Floor Cleaner",
            sizes:"500 ml, 1 L, 5 L",
            fragrance:"Lavender",
            color:"Green",
            suitable:"Tiles, Marble, Granite",
            shelf:"24 Months",
            packaging:"HDPE Bottle"
        }

        // We'll add the remaining products later
    };

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    if (!id || !productData[id]) return;

    const product = productData[id];

    const setText = (elementId, value) => {
        const el = document.getElementById(elementId);
        if (el) el.textContent = value;
    };

    const image = document.getElementById("productImage");
    if (image) image.src = product.image;

    setText("productTitle", product.title);
    setText("breadcrumbName", product.title);
    setText("productDescription", product.description);
    setText("specCategory", product.category);
    setText("specSizes", product.sizes);
    setText("specFragrance", product.fragrance);
    setText("specColor", product.color);
    setText("specSuitable", product.suitable);
    setText("specShelf", product.shelf);
    setText("specPackaging", product.packaging);

    document.title = product.title + " | Brand Doctor Cleaner";

});