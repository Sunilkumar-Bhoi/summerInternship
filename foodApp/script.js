// Food Data
const foodItems = [
    {
        id: 1,
        name: "Margherita Pizza",
        category: "pizza",
        price: 14.99,
        description: "Classic pizza with fresh mozzarella, tomato sauce, and basil",
        icon: "🍕",
        rating: 4.8,
        badge: "Popular",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        category: "pizza",
        price: 16.99,
        description: "Loaded with premium pepperoni and extra cheese",
        icon: "🍕",
        rating: 4.9,
        badge: "Bestseller",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 3,
        name: "Classic Burger",
        category: "burgers",
        price: 12.99,
        description: "Juicy beef patty with lettuce, tomato, and special sauce",
        icon: "🍔",
        rating: 4.7,
        badge: null,
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        id: 4,
        name: "Cheese Burger",
        category: "burgers",
        price: 13.99,
        description: "Double cheese with caramelized onions and pickles",
        icon: "🍔",
        rating: 4.6,
        badge: "Popular",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
        id: 5,
        name: "California Roll",
        category: "sushi",
        price: 18.99,
        description: "Fresh crab, avocado, and cucumber wrapped in seaweed",
        icon: "🍣",
        rating: 4.9,
        badge: "Chef's Special",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
        id: 6,
        name: "Salmon Sushi",
        category: "sushi",
        price: 22.99,
        description: "Premium salmon nigiri with wasabi and soy sauce",
        icon: "🍣",
        rating: 5.0,
        badge: "Premium",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
        id: 7,
        name: "Veggie Pizza",
        category: "pizza",
        price: 13.99,
        description: "Fresh vegetables with mozzarella on thin crust",
        icon: "🍕",
        rating: 4.5,
        badge: "Healthy",
        gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
        id: 8,
        name: "BBQ Burger",
        category: "burgers",
        price: 15.99,
        description: "Smoked BBQ sauce with crispy bacon and onion rings",
        icon: "🍔",
        rating: 4.8,
        badge: "Popular",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
        id: 9,
        name: "Spicy Tuna Roll",
        category: "sushi",
        price: 19.99,
        description: "Spicy tuna with cucumber and avocado, topped with sesame",
        icon: "🍣",
        rating: 4.7,
        badge: "Spicy",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)"
    },
    {
        id: 10,
        name: "Hawaiian Pizza",
        category: "pizza",
        price: 15.99,
        description: "Ham and pineapple with extra cheese",
        icon: "🍕",
        rating: 4.4,
        badge: null,
        gradient: "linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)"
    },
    {
        id: 11,
        name: "Mushroom Burger",
        category: "burgers",
        price: 14.99,
        description: "Sautéed mushrooms with Swiss cheese and truffle mayo",
        icon: "🍔",
        rating: 4.6,
        badge: null,
        gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
    },
    {
        id: 12,
        name: "Dragon Roll",
        category: "sushi",
        price: 24.99,
        description: "Eel and cucumber topped with avocado and eel sauce",
        icon: "🍣",
        rating: 4.9,
        badge: "Premium",
        gradient: "linear-gradient(135deg, #f77062 0%, #fe5196 100%)"
    }
];

// State Management
let cart = [];
let currentFilter = 'all';

// DOM Elements
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const totalAmount = document.getElementById('totalAmount');
const foodGrid = document.getElementById('foodGrid');
const filterTabs = document.querySelectorAll('.filter-tab');
const categoryCards = document.querySelectorAll('.category-card');
const checkoutBtn = document.getElementById('checkoutBtn');

// Initialize App
function init() {
    renderFoodItems(foodItems);
    setupEventListeners();
    updateCartUI();
}

// Setup Event Listeners
function setupEventListeners() {
    // Cart Toggle
    cartBtn.addEventListener('click', () => toggleCart(true));
    closeCart.addEventListener('click', () => toggleCart(false));
    overlay.addEventListener('click', () => toggleCart(false));
    
    // Filter Tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            filterFoodItems();
        });
    });
    
    // Category Cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            currentFilter = category;
            
            // Update filter tabs
            filterTabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.filter === category) {
                    tab.classList.add('active');
                }
            });
            
            // Scroll to popular section
            document.querySelector('.popular').scrollIntoView({ behavior: 'smooth' });
            
            // Filter items after scroll
            setTimeout(() => filterFoodItems(), 500);
        });
    });
    
    // Checkout
    checkoutBtn.addEventListener('click', handleCheckout);
    
    // Smooth Scroll for Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            if (target !== '#home') {
                document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
    
    // Hero Buttons
    document.querySelectorAll('.hero-buttons .btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (index === 0) {
                document.querySelector('.popular').scrollIntoView({ behavior: 'smooth' });
            } else {
                document.querySelector('.categories').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Render Food Items
function renderFoodItems(items) {
    foodGrid.innerHTML = items.map(item => `
        <div class="food-card" data-category="${item.category}">
            <div class="food-image" style="background: ${item.gradient}">
                <span style="font-size: 80px;">${item.icon}</span>
                ${item.badge ? `<div class="food-badge">${item.badge}</div>` : ''}
            </div>
            <div class="food-info">
                <div class="food-header">
                    <h3 class="food-name">${item.name}</h3>
                    <span class="food-price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="food-description">${item.description}</p>
                <div class="food-footer">
                    <div class="food-rating">
                        <span>⭐</span>
                        <span>${item.rating}</span>
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${item.id})">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Food Items
function filterFoodItems() {
    const items = currentFilter === 'all' 
        ? foodItems 
        : foodItems.filter(item => item.category === currentFilter);
    
    // Add fade animation
    foodGrid.style.opacity = '0';
    foodGrid.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        renderFoodItems(items);
        foodGrid.style.opacity = '1';
        foodGrid.style.transform = 'translateY(0)';
    }, 200);
}

// Add to Cart
function addToCart(itemId) {
    const item = foodItems.find(f => f.id === itemId);
    const existingItem = cart.find(c => c.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCartUI();
    showCartNotification();
}

// Update Cart Quantity
function updateQuantity(itemId, change) {
    const item = cart.find(c => c.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartUI();
        }
    }
}

// Remove from Cart
function removeFromCart(itemId) {
    cart = cart.filter(c => c.id !== itemId);
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-icon">🛒</div>
                <p>Your cart is empty</p>
                <span>Add items to get started</span>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image" style="background: ${item.gradient}">
                    ${item.icon}
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = `$${total.toFixed(2)}`;
}

// Toggle Cart
function toggleCart(show) {
    if (show) {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Show Cart Notification
function showCartNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        background: #1A1A1A;
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-weight: 600;
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    `;
    notification.textContent = '✓ Added to cart';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Handle Checkout
function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    alert(`Order Summary:\n\n${itemCount} items\nTotal: $${total.toFixed(2)}\n\nThank you for your order!\nEstimated delivery: 30 minutes`);
    
    // Clear cart
    cart = [];
    updateCartUI();
    toggleCart(false);
}

// Animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Scroll Animation for Navbar
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Initialize on load
document.addEventListener('DOMContentLoaded', init);