# Prompt to Auto-Generate Product Grid + Filter Design

Use this prompt when you want to automatically generate the product grid and filter design for your Explore Page:

---

## Context

I'm building a bakery shop app using Ionic + Angular. I have an Explore Page that needs a product grid and filter components.

## Request

Please generate the product grid and filter components for my Explore Page with the following requirements:

### Product Grid Component
Create a reusable product grid component:
- Path: `src/app/components/product-grid/product-grid.component.ts`
- Path: `src/app/components/product-grid/product-grid.component.html`
- Path: `src/app/components/product-grid/product-grid.component.scss`

Features:
- 2-column grid layout using ion-grid
- Product cards with:
  * Product image (ion-img)
  * Product name (truncated)
  * Price with currency
  * Rating with star icon
- Click handler to navigate to product detail page
- Input property to receive product array
- Responsive design that works on all screen sizes

### Filter Component
Create a reusable filter component:
- Path: `src/app/components/explore-filter/explore-filter.component.ts`
- Path: `src/app/components/explore-filter/explore-filter.component.html`
- Path: `src/app/components/explore-filter/explore-filter.component.scss`

Features:
- Category segment buttons (All + dynamic categories)
- Sort by dropdown with options:
  * Newest
  * Price: Low to High
  * Price: High to Low
  * Top Rated
- Search input with debounce
- Event emitters for filter changes
- Clear filters button
- Active filters display as chips

### Integration Requirements
Both components should:
- Be standalone components
- Use specific Ionic component imports
- Follow existing design patterns in the app
- Use warm brown (#864912) and cream (#f6f1ec) color scheme
- Have proper TypeScript typing
- Handle edge cases (empty lists, loading states)

### Usage Example
Show how to integrate these components in the Explore Page:
- How to pass data to the product grid
- How to listen to filter events
- How to update the product list based on filters

Please generate all the necessary code for these components and integration example.