# Geo Guessr for Desktop

GeoGuessr for Desktop is a simple Windows application built with Electron JS that allows you to play GeoGuessr in fullscreen mode. This app uses the web version of GeoGuessr but integrates it into a desktop application for improved fluidity and faster response times. By eliminating browser-related delays, GeoGuessr for Desktop provides a smoother and more responsive gaming experience, offering better performance and quicker load times compared to the web version.



## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory:

   ```
   cd geo-guessr-desktop
   ```

3. Install the dependencies:

   ```
   npm install
   ```

## Running the Application

To start the application, run the following command:

```
npm start
```

This will launch the Electron application and open GeoGuessr in a fullscreen window.

## Project Structure

- `src/main.js`: Main process of the Electron application.
- `src/renderer.js`: Renderer process for handling UI interactions.
- `package.json`: Configuration file for npm and project dependencies.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `README.md`: Documentation for the project.
