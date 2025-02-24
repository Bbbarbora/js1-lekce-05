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

const product1 = {
    name: 'Lední brusle',
    price: 1259,
    description:
      'Lední brusle dámské vhodné pro rekreační bruslaře, nůž: klasická svařovaná brusle, nerezová ocel',
    color: 'white',
  };

const card3El = document.querySelector('card:nth-child(3)');

card3El.innerHTML = `
<h2>${product1.name} </h2>
<p>

`
