(function () {
  const formEl = document.querySelector(".js-request-access-form");
  const errorMessage = `<p class="error-message">Oops! Please check your email</p>`;

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputEl = e.target.querySelector("#email_input");
    console.dir(inputEl.value);

    const emailRegexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegexPattern.test(inputEl.value)) {
      //email valid
      console.log(`Valid Email! ${inputEl.value}`);
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
})();

var ratio = 1.125;
var baseFontSize = 18;
var s0 = baseFontSize;
var s_1 = s0 / ratio;
var s_2 = s_1 / ratio;
var s_3 = s_2 / ratio;
var s_4 = s_3 / ratio;
var s_5 = s_4 / ratio;
var s1 = s0 * ratio;
var s2 = s1 * ratio;
var s3 = s2 * ratio;
var s4 = s3 * ratio;
var s5 = s4 * ratio;
var s6 = s5 * ratio;
var s7 = s6 * ratio;
var s8 = s7 * ratio;
var s9 = s8 * ratio;
var s10 = s9 * ratio;
var s11 = s10 * ratio;
var s12 = s11 * ratio;
var s13 = s12 * ratio;
var s14 = s13 * ratio;
var s15 = s14 * ratio;

console.log("s_5", s_5);
console.log("s_4", s_4);
console.log("s_3", s_3);
console.log("s_2", s_2);
console.log("s_1", s_1);
console.log("s0", s0);
console.log("s1", s1);
console.log("s2", s2);
console.log("s3", s3);
console.log("s4", s4);
console.log("s5", s5);
console.log("s6", s6);
console.log("s7", s7);
console.log("s8", s8);
console.log("s9", s9);
console.log("s10", s10);
console.log("s11", s11);
console.log("s12", s12);
console.log("s13", s13);
console.log("s14", s14);
console.log("s15", s15);

for (let i = 0; i <= 20; i++) {
  let ratio = 1.067;
  let fontBaseSize = 18;
  console.log(`s${i}`, (fontBaseSize * ratio) / i);
}

let prevVal = 18;
for (let i = 1; i <= 22; i++) {
  let ratio = 1.067;
  let fontBaseSize = 18;
  prevVal = prevVal / ratio;
  console.log(`s-${i}`, prevVal);
}
