const PHONE_NUMBER = "998917899868";

let currentLang = 'tr';
let currentCategory = 'all';

const translations = {
    tr: {
        shopTitle: "Online Mağaza",
        shopSubtitle: "En taze ürünler kapınızda!",
        cartTitle: "Sepet",
        totalTitle: "Toplam: ",
        addBtn: "Ekle",
        orderBtn: "WhatsApp ile Sipariş Ver",
        emptyAlert: "Sepetiniz boş! Lütfen ürün seçin.",
        waMsgHeader: "Merhaba! Aşağıdaki ürünleri sipariş etmek istiyorum:\n\n",
        currency: "PLN",
        catAll: "Tümü",
        catFruits: "Meyve & Sebze",
        catDrinks: "İçecekler",
        catBakery: "Fırın & Unlu",
        catDairy: "Süt Ürünleri"
    },
    pl: {
        shopTitle: "Sklep Online",
        shopSubtitle: "Najświeższe produkty z dostawą!",
        cartTitle: "Koszyk",
        totalTitle: "Razem: ",
        addBtn: "Dodaj",
        orderBtn: "Złóż zamówienie przez WhatsApp",
        emptyAlert: "Twój koszyk jest pusty! Wybierz produkty.",
        waMsgHeader: "Cześć! Chcę zamówić następujące produkty:\n\n",
        currency: "PLN",
        catAll: "Wszystkie",
        catFruits: "Owoce i Warzywa",
        catDrinks: "Napoje",
        catBakery: "Pieczywo",
        catDairy: "Nabiał"
    }
};

const products = [
    // Meyve & Sebze (Fruits & Vegetables)
    {
        id: 1,
        category: 'fruits',
        image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300',
        name: { tr: "Kırmızı Elma", pl: "Czerwone Jabłka" },
        size: { tr: "1 kg", pl: "1 kg" },
        price: 4.99
    },
    {
        id: 2,
        category: 'fruits',
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300',
        name: { tr: "Muz", pl: "Banany" },
        size: { tr: "1 kg", pl: "1 kg" },
        price: 6.49
    },
    {
        id: 5,
        category: 'fruits',
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300',
        name: { tr: "Taze Havuç", pl: "Świeża Marchew" },
        size: { tr: "1 kg", pl: "1 kg" },
        price: 3.99
    },
    {
        id: 6,
        category: 'fruits',
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300',
        name: { tr: "Patates", pl: "Ziemniaki" },
        size: { tr: "2 kg", pl: "2 kg" },
        price: 5.99
    },
    {
        id: 9,
        category: 'fruits',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300',
        name: { tr: "Taze Domates", pl: "Świeże Pomidory" },
        size: { tr: "1 kg", pl: "1 kg" },
        price: 8.99
    },

    // İçecekler (Drinks)
    {
        id: 3,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300',
        name: { tr: "Coca-Cola", pl: "Coca-Cola" },
        size: { tr: "1.5 L", pl: "1.5 L" },
        price: 7.99
    },
    {
        id: 10,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1608181114410-db2bb2131920?w=300',
        name: { tr: "Portakal Suyu", pl: "Sok Pomarańczowy" },
        size: { tr: "1 L", pl: "1 L" },
        price: 6.20
    },

    // Fırın & Unlu (Bakery)
    {
        id: 4,
        category: 'bakery',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300',
        name: { tr: "Taze Ekmek", pl: "Świeży Chleb" },
        size: { tr: "500 g", pl: "500 g" },
        price: 3.50
    },

    // Süt Ürünleri (Dairy)
    {
        id: 7,
        category: 'dairy',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300',
        name: { tr: "Taze Süt", pl: "Świeże Mleko" },
        size: { tr: "1 L", pl: "1 L" },
        price: 3.80
    },
    {
        id: 8,
        category: 'dairy',
        image: 'https://images.unsplash.com/photo-1552767059-ce182ead8c1b?w=300',
        name: { tr: "Beyaz Peynir", pl: "Ser Biały" },
        size: { tr: "250 g", pl: "250 g" },
        price: 8.50
    },
    {
        id: 11,
        category: 'dairy',
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300',
        name: { tr: "Tereyağı", pl: "Masło" },
        size: { tr: "200 g", pl: "200 g" },
        price: 7.49
    },
    {
        id: 12,
        category: 'dairy',
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300',
        name: { tr: "Yumurta", pl: "Jajka" },
        size: { tr: "10 adet", pl: "10 szt." },
        price: 9.99
    }
];

let cart = [];

function setLanguage(lang) {
    currentLang = lang;
    
    document.getElementById('btn-tr').classList.toggle('active', lang === 'tr');
    document.getElementById('btn-pl').classList.toggle('active', lang === 'pl');

    const t = translations[lang];
    document.getElementById('shop-title').innerText = t.shopTitle;
    document.getElementById('shop-subtitle').innerText = t.shopSubtitle;
    document.getElementById('cart-title').innerText = t.cartTitle;
    document.getElementById('total-title').innerText = t.totalTitle;
    document.getElementById('whatsapp-btn').innerText = t.orderBtn;

    document.getElementById('cat-all').innerText = t.catAll;
    document.getElementById('cat-fruits').innerText = t.catFruits;
    document.getElementById('cat-drinks').innerText = t.catDrinks;
    document.getElementById('cat-bakery').innerText = t.catBakery;
    document.getElementById('cat-dairy').innerText = t.catDairy;

    renderProducts();
    updateCartUI();
}

function filterCategory(category) {
    currentCategory = category;
    
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }

    renderProducts();
}

function renderProducts() {
    const container = document.getElementById('products');
    if (!container) return;
    
    container.innerHTML = '';
    const t = translations[currentLang];

    const filtered = currentCategory === 'all' 
        ? products 
        : products.filter(p => p.category === currentCategory);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name[currentLang]}" class="product-img">
            <h3>${product.name[currentLang]}</h3>
            <div class="product-size">${product.size[currentLang]}</div>
            <p class="price">${product.price.toFixed(2)} ${t.currency}</p>
            <button class="add-btn" onclick="addToCart(${product.id})">${t.addBtn}</button>
        `;
        container.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;
    const t = translations[currentLang];

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        count += item.quantity;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.name[currentLang]} (${item.size[currentLang]}) x ${item.quantity}</span>
            <span>${itemTotal.toFixed(2)} ${t.currency}</span>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    cartCount.innerText = count;
    totalPrice.innerText = total.toFixed(2);
}

function sendToWhatsApp() {
    const t = translations[currentLang];
    if (cart.length === 0) {
        alert(t.emptyAlert);
        return;
    }

    let message = t.waMsgHeader;
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.name[currentLang]} (${item.size[currentLang]}) - ${item.quantity} шт. (${itemTotal.toFixed(2)} ${t.currency})\n`;
    });

    message += `\n*${t.totalTitle}* ${total.toFixed(2)} ${t.currency}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setLanguage('tr'));
} else {
    setLanguage('tr');
}