/**
 * Utility functions for creating and rendering DOM elements.
 * Improves code reuse and readability across UI components.
 */

/**
 * Creates a DOM element with text.
 * @param {string} elementType - The type of HTML element to create.
 * @param {string} text - The text content of the element.
 * @returns {HTMLElement}
 */
const createElement = (elementType, text) => {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

/**
 * Creates an image element with src and alt attributes.
 * @param {string} url - The image URL.
 * @param {string} alt - The alternative text.
 * @returns {HTMLImageElement}
 */
const createImage = (url, alt) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = alt;
  return img;
};

/**
 * Creates a header element with text and data-cy attribute.
 * @param {string} headerType - Header level (e.g., h1, h2).
 * @param {string} text - The header text.
 * @param {string} dataCy - Data attribute for testing.
 * @returns {HTMLElement}
 */
const createHeader = (headerType, text, dataCy) => {
  const header = document.createElement(headerType);
  header.textContent = text;
  header.setAttribute("data-cy", dataCy);
  return header;
};

/**
 * Creates a button to toggle the visibility of an element.
 * @param {string} text - The button label.
 * @param {HTMLElement} element - The element to toggle.
 * @returns {HTMLButtonElement}
 */
const createToggleButton = (text, element) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", () => {
    element.classList.toggle("notVisible");
  });
  return button;
};

/**
 * Creates a label element.
 * @param {string} text - Label text.
 * @param {string} htmlFor - The associated input's ID.
 * @returns {HTMLLabelElement}
 */
const createLabel = (text, htmlFor) => {
  const label = document.createElement("label");
  label.textContent = text;
  label.setAttribute("for", htmlFor);
  return label;
};

/**
 * Creates an input element.
 * @param {string} name - The name and ID for the input.
 * @returns {HTMLInputElement}
 */
const createInput = (name) => {
  const input = document.createElement("input");
  input.name = name;
  input.id = name;
  return input;
};

/**
 * Creates a submit button.
 * @param {string} value - The button label.
 * @returns {HTMLInputElement}
 */
const createSubmitButton = (value) => {
  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = value;
  return submit;
};

export {
  createElement,
  createImage,
  createHeader,
  createToggleButton,
  createLabel,
  createInput,
  createSubmitButton,
};
