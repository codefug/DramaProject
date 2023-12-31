function loading() {
  const loadingbackground = document.querySelector("#loadingbackground");
  window.onload = setTimeout(() => {
    loadingbackground.setAttribute("style", "display:none");
  }, 2000);
}

export { loading };
