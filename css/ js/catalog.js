  // ==========================================
// CATÁLOGO SAN TELMO - MUEBLES DE AUTOR
// Sistema de filtros, búsqueda y modal
// ==========================================

let allProducts = [];
let filteredProducts = [];

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', async () => {
    await loadProducts();
    initializeEventListeners();
    renderFeaturedCarousel();
    renderProducts(allProducts);
});

// ==========================================
// CARGAR PRODUCTOS
// ==========================================

async function loadProducts() {
    try {
        const response = await fetch('data/products.json');
        const data = await response.json();
        allProducts = data.products;
        filteredProducts = [...allProducts];
    } catch (error) {
        console.error('Error cargando productos:', error);
    }
}

// ==========================================
// LISTENERS
// ==========================================

function initializeEventListeners() {
    // Búsqueda
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Ordenar
    document.getElementById('sortSelect').addEventListener('change', handleSort);
    
    // Modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target.id === 'productModal') closeModal();
    });
}

// ==========================================
// BÚSQUEDA
// ==========================================

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredProducts = [...allProducts];
    } else {
        filteredProducts = allProducts.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) ||
                   product.description_short.toLowerCase().includes(searchTerm) ||
                   product.keywords.some(keyword => keyword.includes(searchTerm));
        });
    }
    
    applyFilters();
}

// ==========================================
// FILTROS
// ==========================================

function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    // Filtrar solo por búsqueda
    filteredProducts = allProducts.filter(product => {
        const matchesSearch = searchTerm === '' || 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description_short.toLowerCase().includes(searchTerm) ||
            product.keywords.some(keyword => keyword.includes(searchTerm));
        
        return matchesSearch;
    });
    
    renderProducts(filteredProducts);
}

// ==========================================
// ORDENAR
// ==========================================

function handleSort(e) {
    const sortValue = e.target.value;
    
    switch(sortValue) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            filteredProducts = [...allProducts];
            applyFilters();
            return;
    }
    
    renderProducts(filteredProducts);
}

// ==========================================
// LIMPIAR FILTROS (BÚSQUEDA)
// ==========================================

function clearAllFilters() {
    // Limpiar búsqueda
    document.getElementById('searchInput').value = '';
    
    // Resetear orden
    document.getElementById('sortSelect').value = 'default';
    
    // Mostrar todos
    filteredProducts = [...allProducts];
    renderProducts(filteredProducts);
}

// ==========================================
// RENDERIZAR CARRUSEL DESTACADOS
// ==========================================

function renderFeaturedCarousel() {
    const carousel = document.getElementById('featuredCarousel');
    const featured = allProducts.filter(p => p.featured);
    
    carousel.innerHTML = featured.map(product => `
        <div class="featured-card" onclick="openModal('${product.id}')">
            <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
            <div class="featured-card-info">
                <h3>${product.name}</h3>
                <div class="price-container">
                    ${product.original_price ? `<p class="price-original">${formatPrice(product.original_price)}</p>` : ''}
                    <p class="price">${formatPrice(product.price)}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// RENDERIZAR PRODUCTOS
// ==========================================

function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const productCount = document.getElementById('productCount');
    
    // Actualizar contador
    productCount.textContent = `${products.length} producto${products.length !== 1 ? 's' : ''}`;
    
    if (products.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    grid.innerHTML = products.map(product => `
        <article class="product-card" onclick="openModal('${product.id}')">
            <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
            <div class="product-card-info">
                <p class="product-category">${getCategoryName(product.category)}</p>
                <h3>${product.name}</h3>
                <div class="price-container">
                    ${product.original_price ? `<p class="product-price-original">${formatPrice(product.original_price)}</p>` : ''}
                    <p class="product-price">${formatPrice(product.price)}</p>
                </div>
            </div>
        </article>
    `).join('');
}

// ==========================================
// MODAL
// ==========================================

function openModal(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    
    // Llenar información
    document.getElementById('modalCode').textContent = product.code;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalCondition').textContent = `Estado: ${product.condition}`;
    
    // Precio con original tachado si existe
    const modalPrice = document.getElementById('modalPrice');
    if (product.original_price) {
        modalPrice.innerHTML = `
            <span class="modal-price-original">${formatPrice(product.original_price)}</span>
            <span class="modal-price-new">${formatPrice(product.price)}</span>
        `;
    } else {
        modalPrice.innerHTML = `<span class="modal-price-new">${formatPrice(product.price)}</span>`;
    }
    
    document.getElementById('modalDescription').textContent = product.description_full;
    
    // Imagen principal
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = product.images[0];
    mainImage.alt = product.name;
    
    // Thumbnails
    const thumbnails = document.getElementById('modalThumbnails');
    thumbnails.innerHTML = product.images.map((img, index) => `
        <img src="${img}" 
             alt="${product.name} - ${index + 1}" 
             class="modal-thumbnail ${index === 0 ? 'active' : ''}"
             onclick="changeMainImage('${img}', this)"
             loading="lazy">
    `).join('');
    
    // Especificaciones
    const specs = document.getElementById('modalSpecs');
    specs.innerHTML = Object.entries(product.specs).map(([key, value]) => `
        <div class="modal-spec-item">
            <strong>${formatSpecLabel(key)}:</strong>
            <span>${value}</span>
        </div>
    `).join('');
    
    // WhatsApp link
    const whatsappBtn = document.getElementById('whatsappBtn');
    const message = encodeURIComponent(`Hola! Consulto por: ${product.name} (${product.code}) - ${formatPrice(product.price)}`);
    whatsappBtn.href = `https://wa.me/5491122690116?text=${message}`;
    
    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function changeMainImage(src, thumbnail) {
    document.getElementById('modalMainImage').src = src;
    
    // Actualizar active
    document.querySelectorAll('.modal-thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

// ==========================================
// UTILIDADES
// ==========================================

function formatPrice(price) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

function getCategoryName(category) {
    const categories = {
        'muebles': 'Muebles',
        'electronica': 'Electrónica',
        'arte': 'Arte'
    };
    return categories[category] || category;
}

function formatSpecLabel(key) {
    const labels = {
        'dimensions': 'Dimensiones',
        'material': 'Material',
        'finish': 'Acabado',
        'quantity': 'Cantidad',
        'shelves': 'Estantes',
        'load_capacity': 'Capacidad de carga',
        'origin': 'Origen',
        'hardware': 'Herrajes',
        'condition_score': 'Calificación',
        'style': 'Estilo',
        'brand': 'Marca',
        'model': 'Modelo',
        'note': 'Nota importante',
        'diameter': 'Diámetro',
        'capacity': 'Capacidad',
        'weight': 'Peso',
        'details': 'Detalles',
        'mechanism': 'Mecanismo',
        'seat_height': 'Altura asiento'
    };
    return labels[key] || key;
}

// ==========================================
// TECLADO ESC PARA CERRAR MODAL
// ==========================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
