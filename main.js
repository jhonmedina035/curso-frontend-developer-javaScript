const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcono = document.querySelector('.menu');
const desplegable = document.querySelector('.mobile-menu');
const detalles = document.querySelector('#shoppingCartContainer');
const carroIcono = document.querySelector('.navbar-shopping-cart');
const cardsConainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const close = document.querySelector('#close')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcono.addEventListener('click' , toggleMenu);
carroIcono.addEventListener('click' , toggleDetalles);
close.addEventListener('click' , closePruduct )

function toggleDesktopMenu(){
    const isDesktopMenu = desktopMenu.classList.contains('inactive');
    if(isDesktopMenu){
        detalles.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMenu(){
    const isAsideOpen = !detalles.classList.contains('inactive');
    const isProductDetail = !productDetail.classList.contains('inactive');
    if (isAsideOpen){
        detalles.classList.add('inactive');
    }
    if(isProductDetail){
        productDetail.classList.add('inactive');
    }
    
    desplegable.classList.toggle('inactive');
}

function toggleDetalles(){
    const isMobileMenuOpen = !desplegable.classList.contains('inactive');
    const isDesktopMenu = !desktopMenu.classList.contains('inactive');
    const isProductDetail = !productDetail.classList.contains('inactive');
    if(isMobileMenuOpen){
        desplegable.classList.add('inactive');
    }
    if(isDesktopMenu){
        desktopMenu.classList.add('inactive');
    }
    if(isProductDetail){
        productDetail.classList.add('inactive');
    }
    detalles.classList.toggle('inactive');    
}

function openPrueduct(){
   const isDetallesOpen = !detalles.classList.contains('inactive')
   if(isDetallesOpen){
    detalles.classList.add('inactive')
   } 
   productDetail.classList.remove('inactive');
}
function closePruduct(){
    productDetail.classList.add('inactive')
}

const productList =[];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'monitor',
    price: 380,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'patin',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function mostrarProductos(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openPrueduct);


        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
       
        const productInfoDiv = document.createElement('div');
        const produtPrice = document.createElement('p');
        produtPrice.innerText = '$' + product.price;
        const produtName = document.createElement('p');
        produtPrice.innerText = product.name;
        productInfoDiv.appendChild(produtPrice);
        productInfoDiv.appendChild(produtName);  
      
        const productFigure = document.createElement('figure');
        const producImgCart = document.createElement('img');
        producImgCart.setAttribute('src' , './icons/bt_add_to_cart.svg');

       
        productFigure.appendChild(producImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
      
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
      
        cardsConainer.appendChild(productCard);
      }
}

mostrarProductos(productList);

