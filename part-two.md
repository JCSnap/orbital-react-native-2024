# Introduction to React Native (Part 2)

## What we will be doing

-   Coding in a maintainable, scalable way
-   Configure multiple screens with router
-   Integrate 3rd party libraries
-   Using RESTful APIs

## Coding in a maintainable, scalable way

### Break components down into smaller components

Look at the difference between this [bad example](./workshop/blank/app/bad-example.tsx) and this [refactoed version](./workshop/blank/app/screens/home/index.tsx).  
Both of them are basically the same code, yet one is more readable than the other.

### Folder structure

```
.
└── app/
    ├── assets
    ├── screens/
    │   ├── home/
    │   │   ├── components/
    │   │   └── index.tsx
    │   ├── profile/
    │   │   ├── components/
    │   │   └── index.tsx
    │   └── another-screen/
    │       ├── components/
    │       └── index.tsx
    ├── components
    ├── utils
    └── types
```

-   `assets` - contain images, fonts, audio etc.
-   `screens` - this is where the bulk of you code is, segmented further by subfolders for each screen. Eg. For a TikTok app some potential screens would be "Home", "Shop", "Inbox" and "Profile". For the NextBUS app, it could be "Bus Stops", "Bus Services", "Directions", "Favourites" and "Messages". Within each screen folder, the components folder store the components broken down. Eg. for our [NextBUS app](./workshop/blank/app/screens/home/components/), the `components` folder for the first screen stores "Header", "Filter", "BusStops" and "MapIcon".
-   `components` - unlike the previous `components` under a screen folder, this one generally contain components that are **reusable** across the whole app. Eg. custom made `Buttons` and `NavigationTab` belongs here since they are not restricted to one specific screen.
-   `utils` - utility/helper functions that can be reused across the code base. Eg. functions to manage database related operations, functions to parse items etc.
-   `types` - for those that uses Typescript, this will contain app wide types

## Useful resources

-   Refactoring guru
-   Dribbble, Behance, Pinterest
