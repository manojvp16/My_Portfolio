function showPage(pageId) {
  var pages = ["home", "about", "projects"];

  pages.forEach(function (page) {
    var element = document.getElementById(page);
    if (page === pageId) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
