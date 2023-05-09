const ref = {
    product: document.querySelector('.product-js'),
}

// зробити фетч за товарами
// створити розмітку одного елементу списку
// за допомогою .map перебираємо масив товарів
// додаємо елем. списку в ДОМ


async function getProduct() {
    const res = await fetch('http://localhost:3000/products');
    const products = await res.json();
    return products
}

function makeMarkup(products) {
    return products.map(({image, name}) => {
        return ` <li>
        <img src='${image}' alt='${name}'>
        <p>${name}</p>
        <button type="button ">Додати в кошик</button>
    </li> `  
    })
}

const markup = makeMarkup(getProduct);

ref.product.insertAdjacentElement("beforeend", ...markup);