# Prompt to Auto-Generate Explore Page Code

Use this prompt when you want to automatically generate the complete Explore Page code for your Bakery Shop App:

---

## Context

I'm building a bakery shop app using Ionic + Angular. I already have:

1. A Home Page with search, categories, and featured products
2. A Product Detail Page that shows product information
3. Services to fetch product and category data from JSON files
4. Existing components for displaying products

## Request

Please generate a complete Explore Page for my bakery app with the following features:

### UI Requirements
- Clean, modern design with warm brown (#864912) and cream (#f6f1ec) color scheme
- Top search bar with placeholder "Search bakery items..."
- Filter section with:
  * Category segment buttons (All + dynamic categories)
  * Sort by dropdown (Newest, Price Low-High, Price High-Low, Top Rated)
- Product grid layout (2 columns) with product cards showing:
  * Product image
  * Product name (truncated)
  * Price
  * Rating with star icon
- "Load More" button at bottom for pagination

### Functional Requirements
- Fetch all products using ProductService
- Fetch all categories using CategoryService
- Implement search functionality that filters products by name
- Implement category filtering
- Implement sorting options
- Implement pagination with "Load More" button
- Navigate to Product Detail page when a product is clicked

### Technical Requirements
- Use standalone components with specific Ionic imports (not IonicModule)
- Use Angular reactive patterns where appropriate
- Handle nullable values properly
- Follow existing code patterns in the app
- Use proper TypeScript typing

### File Structure
Create these files:
```
src/app/pages/tabs/explore/
├── explore.page.html
├── explore.page.scss
└── explore.page.ts
```

### Existing Services to Use
```typescript
// ProductService (in src/app/services/product/product.service.ts)
getProducts(): Product[]

// CategoryService (in src/app/services/category/category.service.ts)
getCategories(): Category[]
```

### Routing
The Explore Page should be accessible at `/tabs/explore` and is already configured in the routing.

Please generate the complete implementation for all three files.