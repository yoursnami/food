document.getElementById("manualForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const foodName = document.getElementById("foodName").value.trim();
  const category = document.getElementById("category").value;
  const expiryDate = new Date(document.getElementById("expiryDate").value);
  const storedDate = new Date(); // current date

  const foodItem = {
    name: foodName,
    category: category,
    storedDate: storedDate.toISOString(),
    expiryDate: expiryDate.toISOString()
  };

  const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
  inventory.push(foodItem);
  localStorage.setItem("inventory", JSON.stringify(inventory));

  window.location.href = "interfacetest.html"; // go back to main
});
