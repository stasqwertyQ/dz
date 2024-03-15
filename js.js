/// task 1


document.addEventListener("DOMContentLoaded", function() {
  const categoriesList = document.querySelectorAll('#categories .item');
  console.log(`У списку ${categoriesList.length} категорії.`);

  categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemsCount = category.querySelectorAll('ul li').length;
    console.log(`Категорія: ${categoryName}`);
    console.log(`Кількість елементів: ${categoryItemsCount}`);
  });
});



// task 2



const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];



document.addEventListener("DOMContentLoaded", function() {
  const ingredientsList = document.getElementById('ingredients');

  ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
  });
});


// task 3

document.addEventListener("DOMContentLoaded", function() {
  const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const gallery = document.getElementById('gallery');

  images.forEach(image => {
    const li = document.createElement('li');
    li.classList.add('gallery-item');
    li.innerHTML = `<img src="${image.url}" alt="${image.alt}">`;
    gallery.appendChild(li);
  });
});


/// task 4




const counterValue = document.getElementById('value');
  const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
  

  let currentValue = 0;


  function updateCounterValue(newValue) {
    counterValue.textContent = newValue;
  }


  function increment() {
    currentValue += 1;
    updateCounterValue(currentValue);
  }


  function decrement() {
    currentValue -= 1;
    updateCounterValue(currentValue);
  }

  incrementBtn.addEventListener('click', increment);
  decrementBtn.addEventListener('click', decrement);