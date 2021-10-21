/* MODAL */
(function() {
"use strict";

const select = (el, all = false) => {
    el = el.trim()
    if (all) {
    return [...document.querySelectorAll(el)]
    } else {
    return document.querySelector(el)
    }
}

let countdown = select('.countdown');
const output = countdown.innerHTML;

const countDownDate = function() {
    let timeleft = new Date(countdown.getAttribute('data-count')).getTime() - new Date().getTime();

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    countdown.innerHTML = output.replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
}
countDownDate();
setInterval(countDownDate, 1000);

})();

// <!-- SCROLL-DOWN MENU -->
/* <script type="text/javascript">
var lastScrollTop = 0;
.scroll = document.getElementById(".scroll");
window.addEventListener("scroll", function (){
var scrollTop = window.pageYOffset || document 			
.documentElement.scrollTop;
if (scrollTop > lastScrollTop){
    .scroll.style.top="-100px";
} else {
    .scroll.style.top="0";
}
})
</script> */


class product {
    constructor(productName, category, price, measures, material) {
        this.productName = productName;
        this.category = category;
        this.price = price;
        this.measures = measures;
        this.material = material;
        this.vendido = false;
    }
    sumaIva() {
        this.price = this.price * 1.21;
    }
}

const products = [];

const product1 = new product("Mesa de Luz Nikita", "Mesa de Luz", 8000, "50x30x30", "Roble");
products.push(product1);

const product2 = new product("Mesa de Luz Kuzco", "Mesa de Luz", 12000, "60x50x40", "Haya");
products.push(product2);

const product3 = new product("Comoda Nala", "Comoda", 16500, "80x120x60", "Roble");
products.push(product3);

const product4 = new product("Kit Office", "Misc", 1500, "25x45x40", "Melamina");
products.push(product4);

const product5 = new product("Escritorio Athos", "Escritorio", 8200, "75x127x55", "Alagrrobo");
products.push(product5);

const product6 = new product("Comoda Cleopatra", "Comoda", 14800, "65x100x70", "Cedro");
products.push(product6);

const product7 = new product("Organizador de Baño Noe", "Organizador", 20000, "84x70x45", "Cedro");
products.push(product7);

const product8 = new product("Macetero Colgante Minimal", "Misc", 1200, "20x30x25", "Olmo");
products.push(product8);

for(const product of products)
    product.sumaIva();

const mesaDeLuz = products.filter(x => x.category == "Mesa de Luz");
const comoda = products.filter(x => x.category == "Comoda");
const misc = products.filter(x => x.category == "Misc");
const escritorio = products.filter(x => x.category == "Escritorio");
const organizadores = products.filter(x => x.category == "Organizador");

console.log(mesaDeLuz);
console.log(comoda);
console.log(misc);
console.log(escritorio);
console.log(organizadores);

products.sort((a, b) => {
    if (a.price < b.price) {
        return -1;
    }

    if (a.price > b.price) {
        return 1;
    }

    return 0;
});

console.log(products);

