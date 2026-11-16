const PRODUCTS = [
  { id: 1, name: "Tarot des Mystères", emoji: "🔮", desc: "Jeu de tarot divinatoire 78 cartes.", price: 19.9 },
  { id: 2, name: "Bataille Fantasy", emoji: "🐉", desc: "Jeu de bataille stratégique pour 2 à 6 joueurs.", price: 14.5 },
  { id: 3, name: "Poker Deluxe", emoji: "♠️", desc: "Jeu de poker 54 cartes, finition premium.", price: 12.0 },
  { id: 4, name: "Party Cartes", emoji: "🎉", desc: "Jeu d'ambiance pour soirées entre amis.", price: 16.9 },
  { id: 5, name: "Uno Classique", emoji: "🔴", desc: "Le grand classique du jeu de cartes familial.", price: 9.9 },
  { id: 6, name: "Cartes de Collection", emoji: "⭐", desc: "Pack de cartes à collectionner, édition limitée.", price: 24.9 },
];

let cart = [];

function renderProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="card">
      <div class="emoji">${p.emoji}</div>
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="price">${p.price.toFixed(2)}€</div>
      <button data-id="${p.id}">Ajouter au panier</button>
    </div>
  `).join("");

  grid.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.id)));
  });
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (product) {
    cart.push(product);
    updateCartDisplay();
  }
}

function updateCartDisplay() {
  const total = cart.reduce((sum, p) => sum + p.price, 0);
  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("cart-total").textContent = total.toFixed(2);
}

renderProducts();
