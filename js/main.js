
/* ================================
   COMPONENT LOADER – EARNLAUNCH
   ================================ */

/**
 * Load an HTML file into a DOM element
 * @param {string} id - target element ID
 * @param {string} file - path to HTML file
 */
function loadComponent(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${file}`);
      return response.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => {
      console.error(err);
    });
}

/* Load all components */
loadComponent('header', 'components/header.html');
loadComponent('hero', 'components/hero.html');
loadComponent('trust', 'components/trust.html');
loadComponent('footer', 'components/footer.html');
