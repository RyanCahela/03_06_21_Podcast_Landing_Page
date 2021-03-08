(function() {
    const formEl = document.querySelector(".js-request-access-form");
    const errorMessage = `<p class="error-message">Oops! Please check your email</p>`
    
    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputEl = e.target.querySelector("#email_input");
        console.dir(inputEl.value)
        
        const emailRegexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if(emailRegexPattern.test(inputEl.value)) {
            //email valid
            console.log(`Valid Email! ${inputEl.value}`)
        } else {
            //email invalid
            printErrorMessage();
        }
        
        
        function printErrorMessage() {
            //create message
            const errorMessageEl = document.createElement("P");
            errorMessageEl.textContent = "Oops! Please check your email";
            errorMessageEl.classList.add("error-message");

            formEl.appendChild(errorMessageEl);
        }
        //clear form
        formEl.reset();
    });


})()





