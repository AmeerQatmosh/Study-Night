// Gulp automation file
// Runs Parcel for development and Mocha for unit testing.
// Cypress has its own command via npm scripts.

import shell from "gulp-shell";

// Serve the project with Parcel (development mode)
export const serve = shell.task("npx parcel serve index.html");

// Build optimized production files (Parcel automatically minifies)
export const build = shell.task("npx parcel build index.html");

// Run unit tests (Mocha)
export const test = shell.task("npx mocha");

// Default task — starts local dev server
export default serve;
