    console.log ("Hello world!")
    
    let sectionColor = document.querySelector(".section--color");
    let button = document.querySelector(".button");
    let buttonText = document.querySelector(".buttonText");
    let headline = document.querySelector(".headline");

    /* changing background color of the first scetion */ 
    button.addEventListener("click", () => {
        sectionColor.classList.toggle("sectionColorNew")
        if (sectionColor.classList.contains("sectionColorNew")){
            buttonText.innerText = "Wróć do jasnego koloru";
            headline.classList.add("headlineNewColor");
        } else {
            buttonText.innerText = "Zmień kolor sekcji";
            headline.classList.remove("headlineNewColor");
        };
    });

    /*bmi calculator*/

    let formElement = document.querySelector(".js-form");
    let heightElement = document.querySelector(".js-height");
    let weightElement = document.querySelector(".js-weight");
    let bmiElement = document.querySelector(".js-bmi");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        let height = heightElement.value;
        let weight = weightElement.value;

        let bmi = weight / ((height/100) ** 2);

        bmiElement.innerText = bmi.toFixed(2);
    
    });