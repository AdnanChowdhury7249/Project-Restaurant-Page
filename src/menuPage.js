import './style.css';

function menuPage() {
    const container = document.querySelector('#content');
    container.innerHTML = "";

    const menuBoard = document.createElement('div');
    menuBoard.classList = 'menuBoard';

    const food1 = createFoodItem("Tandoori Chicken", " The most popular barbecue chicken, a favourite all over the sub-continent. (Serve  four pieces as a whole or two pieces as a half)", "Price: £10.99");
    const food2 = createFoodItem("Tandoori King Prawns", " Jumbo sized prawns are left to marinated in a delicate blend of the finest and freshest herbs. Spices and natural yoghurt", "Price: £12.99");

    menuBoard.appendChild(food1);
    menuBoard.appendChild(food2);

    container.appendChild(menuBoard);
}

function createFoodItem(title, description, price) {
    const foodItem = document.createElement('div');
    foodItem.classList.add('foodItem');

    const foodTitle = document.createElement('h2');
    foodTitle.textContent = title;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    const breakPoint = document.createElement('br');

    const foodPrice = document.createElement('p');
    foodPrice.textContent = price;

    foodItem.appendChild(foodTitle);
    foodItem.appendChild(foodDescription);
    foodItem.appendChild(breakPoint);
    foodItem.appendChild(foodPrice);

    return foodItem;
}

export { menuPage };