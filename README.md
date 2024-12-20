# Codeant Assignment 

## Live Demo

You can view the live demo of this project hosted on Netlify at the following link: [Live Demo - Codeant Assignment](https://codeant-assignment.netlify.app/)

# Local Development Setup

Follow the given process of setting up and running the **Codeant Assignment** project locally on your machine.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.x or later)
- **npm** (Node Package Manager) or **yarn**

You can check if you have Node.js and npm installed by running the following commands:

```bash
node -v
npm -v
```

If not installed, download and install from [Node.js official website](https://nodejs.org/).

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone <repository-url>
```

Navigate into the project folder:

```bash
cd codeantassignment
```

### 2. Install Dependencies

The next step is to install all the required dependencies. Run the following command:

```bash
npm install
```

This will install both the production and development dependencies as defined in the `package.json` file.

### 3. Running the Development Server

To start the development server and begin working on the project, run:

```bash
npm run dev
```

This will use **Vite** to start a local development server. By default, the app will be available at `http://localhost:5173`. You should see the application running in your browser.

---

## Tailwind CSS

This project is configured to use **Tailwind CSS** for styling. You can start writing utility-first CSS by using Tailwind's classes directly in your components. To customize your Tailwind setup, check the `tailwind.config.js` file.

---

## React Router

This project uses **React Router** (version 7) to manage navigation. You can define routes in the `src` folder and control the page flow using the `BrowserRouter` and `Route` components.

---