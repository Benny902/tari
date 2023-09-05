document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const orderItemsContainer = document.getElementById("orderItemsContainer");
    const addItemButton = document.getElementById("addItemButton");

    let itemCounter = 1;

    addItemButton.addEventListener("click", function () {
        // Create a new order item group
        const itemGroup = document.createElement("div");
        itemGroup.className = "form-group item-group";

        // Item selection dropdown
        const itemSelect = document.createElement("select");
        itemSelect.name = `item${itemCounter}`;
        itemSelect.className = "item-select";
        const items = ["apple", "orange", "cucumber", "banana", "pineapple"];
        items.forEach(function (item) {
            const option = document.createElement("option");
            option.value = item;
            option.text = item;
            itemSelect.appendChild(option);
        });

        // Quantity input
        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.name = `quantity${itemCounter}`;
        quantityInput.className = "quantity-input";
        quantityInput.min = "1";
        quantityInput.value = "1";

        // Remove button
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "remove-button";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function () {
            itemGroup.remove();
        });

        // Append elements to the item group
        itemGroup.appendChild(itemSelect);
        itemGroup.appendChild(quantityInput);
        itemGroup.appendChild(removeButton);

        // Append the item group to the container
        orderItemsContainer.appendChild(itemGroup);

        itemCounter++;
    });

    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // You can process the form data here
        console.log("Form submitted!");
    });
});
