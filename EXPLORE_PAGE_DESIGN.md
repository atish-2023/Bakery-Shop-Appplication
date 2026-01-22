# Explore Page – UI & Component Design
## Bakery Shop App (Ionic + Angular)

---

## What is Explore Page?

- A screen where users discover all bakery items
- Helps users search, filter, and browse products
- Shows all items in a clean grid layout
- Allows sorting, category selection, and load more

---

## Layout Wireframe

```
+-----------------------------------------------------+
| Header                                              |
| [Logo] [Search Bar ----------------------------]    |
+-----------------------------------------------------+
| Filter Section                                      |
| [All] [Category ▼] [Price ▼] [Sort: Newest ▼]      |
+-----------------------------------------------------+
| Product Grid                                        |
| [Product] [Product] [Product]                      |
| [Card 1]  [Card 2]  [Card 3]                       |
|                                                    |
| [Product] [Product] [Product]                      |
| [Card 4]  [Card 5]  [Card 6]                       |
+-----------------------------------------------------+
| [Load More ▼]                                      |
+-----------------------------------------------------+
```

---

## Page Routing Structure

- Explore Page has its own path → /explore
- Navigation comes from bottom tabs
- Routing auto-connects Explore Page with its module
- Each sub-component loaded inside Explore Page

---

## Folder Structure

```
explore/
  ├─ explore.page.html
  ├─ explore.page.scss
  ├─ explore.page.ts
  ├─ components/
      ├─ explore-filter/
      ├─ product-grid/
      └─ load-more/
```

**Component Functions:**
- explore-filter: handles filters
- product-grid: shows products
- load-more: pagination button

---

## Header Design

- Search bar at the top
- Search placeholder: "Search bakery items…"
- Light background
- Smooth rounded corners
- Warm brown border for brand feel

---

## Filter Section Design

- Includes: All | Category | Price | Sort
- Buttons are small and clean
- Dropdown opens for category & price
- Background color: soft cream
- Spacing: 8px padding
- "Active filters" show as chips

---

## Product Grid Design

- Uses 2 or 3 column grid
- Product cards with rounded corners
- High-quality images
- Price + name + rating
- Veg/Non-veg icon (if needed)
- Shadows for depth

---

## Load More / Infinite Scroll

- Button at bottom: "Load More ▼"
- Shows more products without leaving the page
- Smooth animation
- Option to use infinite scroll

---

## Data Flow

```
Products JSON / Firebase
         ↓
    ProductService
         ↓
     ExplorePage
         ↓
 ProductGridComponent
```

**Explanation:**
- Data comes from JSON/Firebase
- Service sends products to Explore Page
- Filters modify the final product list
- Product Grid displays them

---

## Search & Filter Interaction

- User types in search bar → grid updates
- Selecting a category updates the grid
- Price range filters products
- Sort (Newest, Price Low-High, Rating) reorganizes items

---

## Color Palette

**Primary Brown:** #864912
**Light Cream:** #f6f1ec
**Accent Orange:** #c06014
**Text Dark Brown:** #3e2723

*Warm bakery theme, friendly and soft UI.*

---

## User Journey

1. User opens Explore tab
2. Sees search + filters
3. Browses product grid
4. Filters items
5. Loads more items
6. Clicks product
7. Goes to product details
8. Comes back — filters stay same

---

## Final Summary

- Clean UI
- Easy browsing
- Simple filters
- Reusable components
- Future-ready (Firebase, lazy loading)

---
<p style="color:#864912; text-align:center;">Thank You</p>