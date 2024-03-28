
document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-btn"></span>`;
    })

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel-nav">
        ${ buttonsHtml.join("") }
        </div>
    `);

    const buttons = carousel.querySelectorAll(".carousel-btn");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("carousel-item-selected"));
            buttons.forEach(button => button.classList.remove("carousel-btn-selected"));

            items[i].classList.add("carousel-item-selected");
            button.classList.add("carousel-btn-selected");
        });
    });

});