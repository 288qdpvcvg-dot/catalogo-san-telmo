  1	# Catálogo San Telmo - Muebles de Autor 🛋️
     2	
     3	Catálogo digital minimalista para venta de muebles de diseño, antigüedades y piezas de autor. Desarrollado con HTML5, CSS3 y JavaScript vanilla.
     4	
     5	**🔴 ÚLTIMOS DÍAS - Precios especiales en todos los productos**
     6	
     7	---
     8	
     9	## 🚀 Deploy en GitHub Pages
    10	
    11	### **Paso 1: Crear repositorio en GitHub**
    12	
    13	```bash
    14	# En tu terminal local:
    15	git init
    16	git add .
    17	git commit -m "Initial commit - Catálogo San Telmo"
    18	git branch -M main
    19	git remote add origin https://github.com/TU-USUARIO/catalogo-san-telmo.git
    20	git push -u origin main
    21	```
    22	
    23	### **Paso 2: Activar GitHub Pages**
    24	
    25	1. Ve a tu repositorio en GitHub
    26	2. Click en **Settings** (⚙️)
    27	3. En el menú lateral, click en **Pages**
    28	4. En "Source", selecciona: **Branch: main** → **/ (root)**
    29	5. Click en **Save**
    30	6. Espera 1-2 minutos
    31	7. Tu sitio estará en: `https://TU-USUARIO.github.io/catalogo-san-telmo/`
    32	
    33	---
    34	
    35	## 📁 Estructura del Proyecto
    36	
    37	```
    38	catalogo-san-telmo/
    39	├── index.html              # Página principal
    40	├── css/
    41	│   └── styles.css          # Estilos completos
    42	├── js/
    43	│   └── catalog.js          # Lógica aplicación
    44	├── data/
    45	│   └── products.json       # Base de datos 12 productos
    46	├── .gitignore              # Archivos ignorados por Git
    47	└── README.md               # Documentación
    48	```
    49	
    50	---
    51	
    52	## 🎯 Características
    53	
    54	### ✅ Funcionalidades Implementadas
    55	
    56	- **Catálogo Completo:** 12 productos con imágenes reales (URLs externas Genspark)
    57	- **Sistema de Ofertas:** Precio original tachado + precio rebajado
    58	- **Búsqueda en Tiempo Real:** Busca por nombre, descripción o palabras clave
    59	- **Ordenamiento:** Por precio (asc/desc) o nombre alfabético
    60	- **Carrusel "ÚLTIMOS DÍAS":** 3 productos destacados en scroll horizontal
    61	- **Modal de Detalle:** Galería de imágenes + especificaciones completas
    62	- **Integración WhatsApp:** Botón verde directo con mensaje pre-cargado
    63	- **Diseño Responsive:** Optimizado para desktop, tablet y mobile
    64	- **Sin dependencias:** HTML5 + CSS3 + JavaScript vanilla
    65	
    66	---
    67	
    68	## 🗂️ Base de Datos - Productos
    69	
    70	### **12 productos con ofertas activas:**
    71	
    72	| ID | Producto | Precio Original | **OFERTA** |
    73	|----|----------|-----------------|------------|
    74	| 09 | Chesterfield 3 cuerpos cuero | ~~$1.800.000~~ | **$1.600.000** |
    75	| 11 | Sillón lounge Eames + otomana | ~~$980.000~~ | **$880.000** |
    76	| 12 | Sillas bajas indias (par) | ~~$950.000~~ | **$890.000** |
    77	| 08 | Escultura Atlas yeso 130cm | ~~$1.400.000~~ | **$990.000** |
    78	| 07 | Kamado K18 cerámica | ~~$1.100.000~~ | **$990.000** |
    79	| 03 | Baúl indio Sheesham 124cm | ~~$980.000~~ | **$890.000** |
    80	| 06 | DJI Mavic Pro | ~~$850.000~~ | **$750.000** |
    81	| 05 | Mesa lateral mid-century | ~~$750.000~~ | **$690.000** |
    82	| 10 | Mesa regulable Eileen Gray | ~~$650.000~~ | **$590.000** |
    83	| 02 | Biblioteca hierro 2,10m | ~~$390.000~~ | **$290.000** |
    84	| 04 | Sillón Minima cuero negro | ~~$380.000~~ | **$320.000** |
    85	| 01 | Taburetes Thonet (par) | ~~$240.000~~ | **$190.000** |
    86	
    87	**📊 Metadata:**
    88	- Total Productos: 12
    89	- Categorías: Muebles (10) | Electrónica (1) | Arte (1)
    90	- Rango Precios: $190,000 - $1,600,000
    91	- Total Imágenes: 42 URLs públicas
    92	
    93	---
    94	
    95	## 🎨 Design System
    96	
    97	### **Colores**
    98	- **Fondo Principal:** `#FFFFFF` (blanco puro)
    99	- **Texto Principal:** `#1C1C1C` (casi negro)
   100	- **Acento Marca:** `#B91C1C` (rojo MisiónNativa)
   101	- **WhatsApp:** `#25D366` (verde oficial)
   102	- **Texto Secundario:** `#6B6B6B` (gris medio)
   103	
   104	### **Tipografía**
   105	- **Font Family:** System fonts (Apple, Segoe UI, Roboto)
   106	- **Precios Oferta:** 1.75rem bold rojo
   107	- **Precios Tachados:** 1.125rem gris + line-through
   108	
   109	---
   110	
   111	## 📱 Funcionalidades Técnicas
   112	
   113	### **1. Sistema de Ofertas**
   114	```javascript
   115	// Productos con precio original + precio oferta
   116	{
   117	  "price": 1600000,           // Precio actual (oferta)
   118	  "original_price": 1800000   // Precio tachado
   119	}
   120	```
   121	
   122	### **2. Búsqueda Dinámica**
   123	- Filtra por texto en tiempo real
   124	- Busca en: nombre, descripción, keywords
   125	- Sin recarga de página
   126	
   127	### **3. Modal Avanzado**
   128	- Galería de imágenes con thumbnails
   129	- Precio tachado + precio oferta destacado
   130	- Botón WhatsApp verde con mensaje personalizado
   131	- Cierre con ESC o click fuera
   132	
   133	---
   134	
   135	## 🌐 Deploy y URLs
   136	
   137	### **GitHub Pages (Recomendado)**
   138	- **URL típica:** `https://tu-usuario.github.io/catalogo-san-telmo/`
   139	- **Deploy:** Automático en cada push a `main`
   140	- **Costo:** Gratis
   141	- **SSL:** Incluido (HTTPS)
   142	
   143	### **Alternativas de Deploy**
   144	
   145	#### **Netlify**
   146	```bash
   147	# Drag & drop de carpeta en netlify.com
   148	# O conectar repo GitHub
   149	```
   150	
   151	#### **Vercel**
   152	```bash
   153	vercel --prod
   154	```
   155	
   156	---
   157	
   158	## 📞 Configuración WhatsApp
   159	
   160	**Cambiar número en 2 lugares:**
   161	
   162	1. **index.html** (línea 160):
   163	```html
   164	<a href="https://wa.me/5491112345678" target="_blank">
   165	```
   166	
   167	2. **js/catalog.js** (línea 215):
   168	```javascript
   169	whatsappBtn.href = `https://wa.me/5491112345678?text=${message}`;
   170	```
   171	
   172	**Formato internacional:** `5491112345678`
   173	- `54` = Código Argentina
   174	- `9` = Celular
   175	- `11` = Código área Buenos Aires
   176	- `12345678` = Número
   177	
   178	---
   179	
   180	## 🔧 Personalización
   181	
   182	### **Agregar más productos**
   183	
   184	Edita `data/products.json`:
   185	```json
   186	{
   187	  "id": "13",
   188	  "code": "PRO-13",
   189	  "name": "Nuevo Producto",
   190	  "price": 500000,
   191	  "original_price": 600000,  // Opcional: para mostrar oferta
   192	  "category": "muebles",
   193	  "condition": "Nuevo",
   194	  "featured": false,         // true = aparece en "ÚLTIMOS DÍAS"
   195	  "images": [
   196	    "https://url-imagen-1.jpg",
   197	    "https://url-imagen-2.jpg"
   198	  ],
   199	  "description_short": "Descripción corta",
   200	  "description_full": "Descripción completa...",
   201	  "specs": {
   202	    "dimensions": "100 x 50 cm",
   203	    "material": "Madera"
   204	  },
   205	  "keywords": ["palabra1", "palabra2"]
   206	}
   207	```
   208	
   209	### **Cambiar colores**
   210	
   211	Edita `css/styles.css` (líneas 8-15):
   212	```css
   213	:root {
   214	    --color-fondo: #FFFFFF;
   215	    --color-texto: #1C1C1C;
   216	    --color-acento: #B91C1C;  /* Rojo marca */
   217	}
   218	```
   219	
   220	---
   221	
   222	## 📊 Estadísticas del Proyecto
   223	
   224	| Métrica | Valor |
   225	|---------|-------|
   226	| Líneas HTML | ~200 |
   227	| Líneas CSS | ~850 |
   228	| Líneas JavaScript | ~400 |
   229	| Tamaño Total | ~43KB (sin imágenes) |
   230	| Imágenes Externas | 42 URLs Genspark |
   231	| Tiempo Carga | <1s (primera carga) |
   232	
   233	---
   234	
   235	## 🐛 Troubleshooting
   236	
   237	### **Las imágenes no cargan**
   238	- ✅ Verifica que las URLs de Genspark estén activas
   239	- ✅ Revisa consola del navegador (F12)
   240	- ✅ Confirma que `products.json` tiene URLs correctas
   241	
   242	### **WhatsApp no abre**
   243	- ✅ Verifica formato número: `5491112345678`
   244	- ✅ Prueba en dispositivo móvil con WhatsApp instalado
   245	
   246	### **GitHub Pages no actualiza**
   247	- ✅ Espera 2-3 minutos después del push
   248	- ✅ Limpia caché del navegador (Ctrl+Shift+R)
   249	- ✅ Verifica que la rama sea `main` en Settings → Pages
   250	
   251	---
   252	
   253	## 📝 Licencia y Créditos
   254	
   255	**Proyecto:** Catálogo San Telmo - Muebles de Autor  
   256	**Cliente:** MisiónNativa  
   257	**Desarrollo:** Facu (Coordinación) + Gen (IA Developer)  
   258	**Versión:** 1.0  
   259	**Fecha:** Febrero 2026  
   260	
   261	---
   262	
   263	## 🚀 Próximos Pasos Recomendados
   264	
   265	1. ✅ **Deploy en GitHub Pages** (5 minutos)
   266	2. ⏳ **Configurar dominio personalizado** (opcional): `www.santelmo-muebles.com`
   267	3. ⏳ **Google Analytics** para trackear visitas
   268	4. ⏳ **Meta tags SEO** para buscadores
   269	5. ⏳ **Botón compartir** en redes sociales
   270	
   271	---
   272	
   273	**¿Dudas o necesitas soporte?** Contactá a través del repositorio.
