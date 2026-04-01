# DigiTools

A straightforward digital marketplace I built to help creators and developers
find premium software tools. It's a single-page React application where users
can browse a list of digital products, add them to a shopping cart, and see the
total price update in real time.

## Tech Stack

- React.js - for the core UI and state management
- Tailwind CSS v4 & DaisyUI - for styling and pre-built components
- React-Toastify - for quick pop-up alerts
- Vite - for fast local development and building

## Features

- Live cart updates: Add or remove items without refreshing the page. The cart
  automatically calculates the total price based on exactly what is currently in
  it.
- Instant feedback: You get a clean toast notification whenever you add a
  product, remove an item, or clear your cart during checkout.
- Smooth navigation: Instead of dealing with clunky page reloads, the app swaps
  between the main product grid and the cart view using conditional rendering,
  so everything feels fast and seamless.
