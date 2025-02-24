const headerEl = document.querySelector('.header');
const originalContent = headerEl.textContent;
headerEl.textContent = 'Hahaja, byl sem tu fantomas';

headerEl.style.color = 'orange';
headerEl.style.fontSize = '2rem';
headerEl.style.textAlign = 'center';

const cardElement = document.querySelector('.card');
cardElement.classList.add('active');

const imgEl = document.querySelector('.card img');
imgEl.src = 'images/pes.jpg';
imgEl.alt = 'nejhezci pejsanek na svete';
