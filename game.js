const gameContainer = document.querySelector('.container'),
    userResult = document.querySelector('.user-result img'),
    cpuResult = document.querySelector('.cpu-result img'),
    result = document.querySelector('.result'),
    optionImages = document.querySelectorAll('.option-image');



// Loop through each option image element //
optionImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "./CSS/Images/rock.png";
        result.textContent = "wait...";

        // Loop through each option image again //
        optionImages.forEach((imageTwo, indexTwo) => {
            // If the current index doesn't match the clicked index, remove the "active" class form the other option images //
            index !== indexTwo && imageTwo.classList.remove("active");
        });

        gameContainer.classList.add("start");

        // Set a time out to delay the result calculation //
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            // Get the source of the clicked option image //
            let imageSrc = e.target.querySelector("img").src;
            // Set the user image to the clicked option image //
            userResult.src = imageSrc;

            // Generate a random number between 0 and 2 //
            let randomNumber = Math.floor(Math.random() * 3);

            // Create an array of CPU image options //
            let cpuImages = ["./CSS/Images/rock.png", "./CSS/Images/paper.png", "./CSS/Images/scissors.png"];
            // Set the CPU image to a random option from the array //
            cpuResult.src = cpuImages[randomNumber];

            // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors) //
            let cpuValue = ["R", "P", "S"][randomNumber];
            // Assign a letter value to the clicked option (based on index) //
            let userValue = ["R", "P", "S"][index];

            // Create an object with all possible outcomes //
            let outComes = {
                RR: "Draw",
                RP: "CPU",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "CPU",
                SS: "Draw",
                SR: "CPU",
                SP: "User"
            };

            // Look up the outcome value based on user and cpu options //
            let outComeValue = outComes[userValue + cpuValue];

            // Display the result //
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} won!!`;
            // console.log(cpuValue, userValue, outComeValue); 
        }, 2500);

    });
});