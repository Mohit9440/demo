# Project Documentation

## Overview

This project is a web application designed with mobile-first and tablet-first responsive layouts. It provides a seamless user experience across various devices, with specific interactions to enhance usability.

## Table of Contents

- [Routes](#routes)
- [Responsive Design](#responsive-design)
- [Features & Interactions](#features--interactions)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)

## Routes

The application uses React Router for navigation. Below are the defined routes:

- **/ (Explore Page)**: Displays the main page for exploring products.
- **/details/:id (Product Detail Page)**: Displays detailed information about a specific product.
- **/wishlists (Wishlists Page)**: Displays the user's wishlist items.
- **/map (Google Map Page)**: Coming Soon.
- **/login (Login Page)**: Coming soon.

## Responsive Design

The application is built with responsiveness in mind, ensuring it works smoothly across mobile, tablet, and desktop devices.

### Mobile and Tablet Versions:

- **Footer**: A fixed footer with navigation buttons to explore, wishlist, map, and login.
- **Explore Page**: Scrollable page to load more items as the user scrolls.
- **Wishlist**: Users can click on the heart icon to add products to the wishlist.
- **Product Detail**: Tapping on an image or details navigates to the product details page.
- **Google Map**: The map is interactive with 2-finger swipe to pan across the map.

### Laptop/Desktop Version:

- **Footer**: The footer is redesigned to accommodate a larger screen, with buttons placed horizontally across the bottom of the screen.
- **Explore Page**: A similar scrollable layout with a larger grid to display more products without the need for horizontal scrolling.
- **Product Detail**: Larger detailed view with more information about the product and an interactive map.

## Features & Interactions

### Scrolling to Load More Options
- On the **Explore** page, users can scroll down to load more product options dynamically. This interaction is designed to provide a smooth experience when browsing through a large list of products.

### Click on Heart Icon to Add to "Wishlist"
- On both the **Explore** and **Wishlists** pages, products can be added to the wishlist by clicking the heart icon. The heart icon changes color when the product is added to the wishlist.

### Slide Pictures within a Box
- On the **Product Detail** page, users can slide through images of the product within a specified box. A carousel slider is used to allow users to navigate through multiple images of the product.

### Click on Image + Details to Go to Product Detail
- On the **Explore** page, clicking on either the product image or the "Details" link navigates to the **Product Detail** page where more information about the product is provided.

### 2-Finger Swipe to Pan Google Map
- On the **Product Detail** page, users can interact with an embedded Google Map. The map is panable using a 2-finger swipe, providing a touch-friendly experience for mobile and tablet users.

## Tech Stack

- **React**: Used for building the frontend of the application.
- **React Router**: Used for routing and navigation between different pages.
- **React Bootstrap**: Used for UI components with a mobile-first approach.
- **Google Maps API**: Used to display the map and handle user interactions like panning.
- **CSS (Media Queries)**: Used for making the layout responsive across devices.


## Setup Instructions

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. Navigate to the project directory.
   ```bash
   cd your-repository-name
   ```

3. Install the dependencies.
   ```bash
   npm install
   ```

4. Start the development server.
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Dependencies

- `react-router-dom` - For routing and navigation between pages.
- `react` - The core React library.

## Contributing

Feel free to fork the repository, submit issues, and create pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
   git clone <repository-url>
