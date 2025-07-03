const container = document.getElementById("even-numbers");

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        const numberElement = document.createElement("p");
        numberElement.textContent = i;
        container.appendChild(numberElement);
    }
}
