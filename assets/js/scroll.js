const mouse = document.querySelector('.mouse');
const aboutUs = document.querySelector('.aboutUs');
const service = document.querySelector('.service');
const partners = document.querySelector('.partners');
const products = document.querySelector('.products');
const contactUs = document.querySelector('.contactUs');

aboutUs.addEventListener('click',() => window.scrollTo({
    top: 600,
    behavior: 'smooth',
}));

service.addEventListener('click',() => window.scrollTo({
    top: 1200,
    behavior: 'smooth',
}));

partners.addEventListener('click',() => window.scrollTo({
  top: 1800,
  behavior: 'smooth',
}));

  products.addEventListener('click',() => window.scrollTo({
    top: 2800,
    behavior: 'smooth',
  }));
  
  contactUs.addEventListener('click',() => window.scrollTo({
    top: 3600 ,
    behavior: 'smooth',
  }));