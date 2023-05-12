# Portfolio Website

This is my portfolio website built using Svelte and PyScript, and hosted as a static website on GitHub. It showcases my skills, projects, and achievements.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This portfolio website serves as a showcase for my work and provides information about my skills, experience, and projects. It is designed to highlight my achievements and provide a platform for potential employers, clients, or collaborators to learn more about me and my work.

## Features
- **Home Page:** Provides a brief introduction and overview of my skills and expertise.
- **Projects:** Showcases my projects with descriptions, images, and links to GitHub repositories or live demos.
- **Skills:** Highlights the programming languages, frameworks, and technologies I am proficient in.
- **Contact:** Offers a convenient way for visitors to get in touch with me.

## Technologies
The portfolio website is built using the following technologies:

- **Svelte:** A modern JavaScript framework for building user interfaces.
- **PyScript:** A tool that transpiles Python code into JavaScript, allowing the use of Python in web development.
- **GitHub:** The hosting platform used to store and serve the static website.

## Getting Started
To run the portfolio website locally, follow these steps:

1. **Clone the repository:** Start by cloning this repository to your local machine using the following command:
   ```
   git clone https://github.com/I-Davey/My-Portfolio.git
   ```
2. **Install dependencies:** Navigate to the project directory and install the necessary dependencies by running the following command:
   ```
   cd My-Portfolio
   npm install
   ```
3. **Start the development server:** Launch the development server with hot-reloading using the following command:
   ```
   npm run dev
   ```
   The website should now be accessible at `http://localhost:5137` in your web browser.

## Deployment
To deploy the portfolio website as a static site on GitHub Pages, follow these steps:

1. **Create a new repository:** Create a new repository on GitHub with a name like `your-username.github.io`.
2. **Build the website:** Generate the optimized build of the website by running the following command:
   ```
   npm run build
   ```
   This will generate a `public` directory containing the optimized static assets.
3. **Commit and push:** Commit the changes to your local repository and push them to the remote repository on GitHub.
4. **Configure GitHub Pages:** In the settings of your GitHub repository, navigate to the **GitHub Pages** section and choose the `main` branch as the source for GitHub Pages. Save the settings.
5. **Access the deployed website:** After a few moments, your portfolio website should be accessible at `https://your-username.github.io`.
