document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const searchInput = document.getElementById("search-input");
  const items = document.querySelectorAll(".item");

  function filterElements(searchQuery) {
    const nothingFound = document.getElementById("alert");
    let number = 0;
    items.forEach(function (item) {
      const name = item.querySelector("h2").textContent.toLocaleLowerCase();

      if (name.includes(searchQuery.toLocaleLowerCase())) {
        nothingFound.style.display = "none";
        item.style.display = "flex";
        number++;
      } else {
        item.style.display = "none";
      }
    });
    if (number == 0) {
      nothingFound.style.display = "block";
    }
  }

  searchInput.addEventListener("input", function () {
    const searchQuery = searchInput.value.trim();
    filterElements(searchQuery);
  });
});
