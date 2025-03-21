
# Marvel Comics App

The **Marvel Comics App** project is a modern web application built with **React 19** using **React Router** and **Redux**. This application allows users to view a list of Marvel comics, explore a list of heroes, and see the comics in which these heroes participate.

## Project Description

The app provides the following features:

- **Comics List:** View an updated list of comics with the ability to navigate to detailed information about a selected comic.
- **Heroes List:** Explore a list of Marvel heroes with a search functionality. When a hero is selected, detailed information is displayed along with a list of comics in which they appear.
- **Comic Details Page:** Display detailed information about a comic, including its image, description, page count, language, and price.
- **User-friendly Navigation:** Implemented routing with React Router for fast and smooth navigation between sections.
- **Global State Management:** Utilizes Redux to manage the application's state (e.g., storing active hero information or loaded comics).

## Technologies

- **React 19**
- **React Router**
- **Redux**
- CSS modules for component styling

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Project Structure

marvel-comics-app/
├── public/
│ └── index.html
├── src/
│ ├── api/ # API requests for fetching data (comics, heroes)
│ ├── components/ # Reusable components (comic cards, hero cards, sliders, etc.)
│ ├── layouts/ # Page layouts and navigation components
│ ├── redux/ # Redux store, slices, and hooks for global state management
│ ├── routes/ # Route files (comics, heroes, comic details)
│ ├── styles/ # Global styles and CSS modules
│ └── App.tsx # Root component of the application
├── package.json
└── README.md

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

You can use CSS modules and also [Tailwind CSS](https://tailwindcss.com/) already configured. You can use whatever CSS framework you prefer.
=======
# marvel
