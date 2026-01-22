# Prompt to Auto-Generate Explore Page Routing + Module

Use this prompt when you want to automatically generate the routing and module setup for your Explore Page:

---

## Context

I'm building a bakery shop app using Ionic + Angular. I want to add an Explore Page to my existing tab-based navigation.

## Current Structure

My app uses tab-based navigation with this structure:
```
src/app/pages/tabs/
├── home/
├── account/
├── product-detail/
├── tabs.page.html  (contains ion-tab-bar with tab buttons)
├── tabs.routes.ts  (contains routing configuration)
└── tabs.page.ts
```

The tabs.page.html already has an "Explore" tab button:
```html
<ion-tab-button tab="explore">
  <ion-icon name="location"></ion-icon>
  <ion-label>Explore</ion-label>
</ion-tab-button>
```

## Request

Please generate the complete routing and module setup for the Explore Page:

### 1. Folder Structure
Create the Explore Page folder:
```
src/app/pages/tabs/explore/
├── explore.page.html
├── explore.page.scss
└── explore.page.ts
```

### 2. Explore Page Component
Create a minimal Explore Page component with:
- Basic header with title "Explore"
- Simple content placeholder
- Standalone component configuration
- Specific Ionic component imports (not IonicModule)

### 3. Routing Configuration
Update `src/app/pages/tabs/tabs.routes.ts` to include the Explore Page route:
- Path should be 'explore'
- Should use loadComponent pattern like other pages
- Should be placed with other tab routes

### 4. Module Setup
Since we're using standalone components, no separate module file is needed, but ensure the routing correctly loads the standalone component.

### Technical Requirements
- Use standalone components with specific Ionic imports
- Follow existing routing patterns in the app
- Use proper TypeScript typing
- Maintain consistency with existing tab structure

Please generate all the necessary code for these requirements.