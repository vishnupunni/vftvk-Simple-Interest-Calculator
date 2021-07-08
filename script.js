let slider = document.getElementById("rate");
let outputRange = document.getElementById("rate_val");
outputRange.innerHTML = slider.value;

slider.oninput = function() {
    outputRange.innerHTML = this.value;
}

let amt = 0;
let interestRateShow = 0;
let termOfLoan = 0;
let principal = parseFloat(document.getElementById("principal").value);


/* VALIIDATION */


document.getElementById("submit").addEventListener("click", simpleInterset);

function simpleInterset() {
    event.preventDefault();
    let principal = document.getElementById("principal").value;

    if (principal == 0 || principal < 0) {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {

        /*  interest calculation */

        let interestRateShow = parseFloat(document.getElementById("rate").value);
        interestRate = interestRateShow / 100;
        let termOfLoan = parseFloat(document.getElementById("yearterm").value);

        let simleInt = principal * interestRate * termOfLoan;
        /*  end interest calculation */

        /* year calculation */

        let inYear = new Date().getFullYear();
        inYear += termOfLoan

        /* end year calculation */

        /* massage */
        document.getElementById("siOutput-1").innerHTML = "If you deposit " + "<mark>" + principal + "</mark>,";

        document.getElementById("siOutput-2").innerHTML = "at an interst rate of  " + "<mark>" + interestRateShow + "</mark>,";

        document.getElementById("siOutput-3").innerHTML = "you will recive an amount of " + "<mark>" + simleInt + "</mark>,";

        document.getElementById("siOutput-4").innerHTML = "in the year " + "<mark>" + inYear + "</mark>,";


        /* end massage */


    }
}