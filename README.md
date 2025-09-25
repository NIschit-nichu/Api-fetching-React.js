# OpenLibrary Book Search App

This project is a React (Vite) application that allows users to search
for books using the [OpenLibrary
API](https://openlibrary.org/developers/api).\
It provides a clean, Tailwind-styled UI where users can enter a book
name, and the app will fetch and display related books.

------------------------------------------------------------------------

## 🚀 Features

-   Search for books by name using the OpenLibrary API.\
-   Displays results dynamically with book details.\
-   Styled with **Tailwind CSS** for a responsive and modern UI.\
-   Built with React functional components.\
-   Used **Axios** for API requests.\
-   Managed state and references with **useState** and **useRef** hooks.

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **Frontend**: React.js (Vite)\
-   **Styling**: Tailwind CSS\
-   **API**: [OpenLibrary Search
    API](https://openlibrary.org/search.json?author=tolkien&sort=new)\
-   **HTTP Client**: Axios\
-   **React Hooks**: useState, useRef

------------------------------------------------------------------------

## ⚡ How It Works

1.  User enters a book name in the search bar.\
2.  The app fetches related books using the OpenLibrary API.\
3.  The results are displayed in the UI with book details.

------------------------------------------------------------------------

## 📂 Project Structure

    /public
      ├── assets (images/fonts used in UI)

    /src
      ├── assets/          # Static assets (logos, icons)
      ├── Components/      # UI Components (Header, etc.)
      ├── App.jsx          # Main App logic
      ├── App.css          # Custom/global styles
      ├── index.css        # Tailwind base + config imports
      ├── main.jsx         # Entry point
      └── index.html       # Root HTML file

    package.json           # Dependencies & scripts
    tailwind.config.js     # Tailwind CSS config
    vite.config.js         # Vite config

------------------------------------------------------------------------

## ▶️ Getting Started

### 1. Clone the repository

``` bash
git clone https://github.com/your-username/openlibrary-book-search.git
cd openlibrary-book-search
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Run the app

``` bash
npm run dev
```

------------------------------------------------------------------------

## 📦 Dependencies

-   React\
-   Vite\
-   Axios\
-   Tailwind CSS

------------------------------------------------------------------------

## 🔗 API Reference

-   Example API endpoint:

        https://openlibrary.org/search.json?author=tolkien&sort=new

------------------------------------------------------------------------

## 📸 UI Design

The app features a clean and modern design powered by Tailwind CSS, with
a search bar for entering book names and a responsive results section.

------------------------------------------------------------------------

## 📜 License

This project is open-source and available under the MIT License.
