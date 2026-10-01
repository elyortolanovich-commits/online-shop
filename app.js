const products = [
    { id: 1, category: 'fruits', name: { tr: 'Elma', pl: 'Jabłko' }, price: 5, img: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' },
    { id: 2, category: 'drinks', name: { tr: 'Su', pl: 'Woda' }, price: 2, img: 'https://cdn-icons-png.flaticon.com/512/3105/3105805.png' },
    { id: 3, category: 'bakery', name: { tr: 'Ekmek', pl: 'Chleb' }, price: 4, img: 'https://cdn-icons-png.flaticon.com/512/3014/3014513.png' },
    { id: 4, category: 'dairy', name: { tr: 'Süt', pl: 'Mleko' }, price: 6, img: 'https://cdn-icons-png.flaticon.com/512/2674/2674177.png' }
];

let currentLang = 'tr';
let cart = [];

function renderProducts(filter = 'all') {
    const list = document.getElementById('product-list');
    list.innerHTML = '';
    
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    
    filtered.forEach(p => {
        list.innerHTML += `
            <div class="product-card">
                <img src="${p.img}" alt="${p.name[currentLang]}">
                <h3>${p.name[currentLang]}</h3>
                <p>${p.price} zł</p>
                <button onclick="addToCart(${p.id})">${currentLang === 'tr' ? 'Ekle' : 'Dodaj'}</button>
            </div>
        `;
    });
}

function filterCategory(cat) {
    renderProducts(cat);
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const cartItem = cart.find(item => item.id === id);
    
    if (cartItem) {
        cartItem.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.qty;
        cartItemsDiv.innerHTML += `<div>${item.name[currentLang]} x ${item.qty} - ${item.price * item.qty} zł</div>`;
    });
    
    document.getElementById('total-price').textContent = total;
}

function setLanguage(lang) {
    currentLang = lang;
    renderProducts();
    document.getElementById('shop-title').textContent = lang === 'tr' ? 'Online Mağaza' : 'Sklep Online';
    document.getElementById('cart-title').textContent = lang === 'tr' ? 'Sepet' : 'Koszyk';
    document.getElementById('total-text').textContent = lang === 'tr' ? 'Toplam:' : 'Razem:';
    document.getElementById('whatsapp-btn').textContent = lang === 'tr' ? 'WhatsApp ile Sipariş Ver' : 'Zamów przez WhatsApp';
}

function sendToWhatsApp() {
    if (cart.length === 0) {
        alert(currentLang === 'tr' ? 'Sepetiniz boş!' : 'Twój koszyk jest pusty!');
        return;
    }
    
    let text = currentLang === 'tr' ? 'Yeni Sipariş:\n' : 'Nowe zamówienie:\n';
    let total = 0;
    
    cart.forEach(item => {
        text += `- ${item.name[currentLang]} x ${item.qty} (${item.price * item.qty} zł)\n`;
        total += item.price * item.qty;
    });
    
    text += currentLang === 'tr' ? `\nToplam: ${total} zł` : `\nRazem: ${total} zł`;
    
    const phone = '998917899868';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
}

renderProducts();
