console.log("spinner.js has been loaded successfully!");

(function() {
    function injectStyles() {
        let style = document.createElement("style");
        style.innerHTML = `
            #spinner {
                width: 250px;
                height: 70px;
                border: 4px solid #007bff;
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                font-weight: bold;
                text-align: center;
                margin: 20px auto;
                transition: transform 3s ease-out;
                background-color: #f8f9fa;
                box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            }
            #options {
                display: none;
            }
        `;
        document.head.appendChild(style);
    }

    window.startSpin = function() {
        console.log("startSpin function called!");
        let spinner = document.getElementById("spinner");
        let optionsContainer = document.getElementById("options");
        if (!spinner || !optionsContainer) {
            console.error("Required elements not found!");
            return;
        }
        
        let options = optionsContainer.innerText.split(",").map(opt => opt.trim()).filter(opt => opt);
        if (options.length === 0) {
            console.error("No options found!");
            return;
        }

        let index = 0;
        let spinInterval = setInterval(() => {
            spinner.innerText = options[index % options.length];
            index++;
        }, 100);

        let randomIndex = Math.floor(Math.random() * options.length);
        let selectedChoice = options[randomIndex];

        setTimeout(() => {
            clearInterval(spinInterval);
            spinner.innerText = selectedChoice;
        }, 3000);
    };

    document.addEventListener("DOMContentLoaded", function() {
        let button = document.querySelector(".btn-primary");
        if (button) {
            button.addEventListener("click", startSpin);
            console.log("Button event listener attached.");
        } else {
            console.error("Spin button not found!");
        }

        injectStyles();
    });
})();
