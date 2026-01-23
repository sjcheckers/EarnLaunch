function loadComponent(id,file){
  fetch(file)
    .then(r=>r.text())
    .then(d=>document.getElementById(id).innerHTML=d)
    .catch(e=>console.error(e));
}

loadComponent('header','components/header.html');
loadComponent('hero','components/hero.html');
loadComponent('trust','components/trust.html');
loadComponent('footer','components/footer.html');
