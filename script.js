const products = [
    { id: 1, name: "Laptop", price: 899, image: "images/laptop.jpg" },
    { id: 2, name: "Headphones", price: 199, image: "images/headphones.jpg" },
    { id: 3, name: "Smartphone", price: 699, image: "images/smartphone.jpg" },
    { id: 4, name: "Camera", price: 499, image: "images/camera.jpg" },
];

const productList = document.getElementById("productList");

function displayProducts(products) {
    productList.innerHTML = "";
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(id) {
    alert(`Product ${id} added to cart!`);
}

displayProducts(products);

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});
