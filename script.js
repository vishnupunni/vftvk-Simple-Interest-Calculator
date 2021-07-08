let slider = document.getElementById("myrange");
let outputRange = document.getElementById("demo");
outputRange.innerHTML = slider.value;

slider.oninput = function() {
    outputRange.innerHTML = this.value;
}

let amt = 0;
let interestRateShow = 0;
let termOfLoan = 0;

document.getElementById("submit").addEventListener("click", simpleInterset);

function simpleInterset() {
    event.preventDefault();

    /*  interest calculation */
    let amt = parseFloat(document.getElementById("amount").value);
    let interestRateShow = parseFloat(document.getElementById("myrange").value);
    interestRate = interestRateShow / 100;
    let termOfLoan = parseFloat(document.getElementById("yearterm").value);

    let simleInt = amt * interestRate * termOfLoan;
    /*  end interest calculation */

    /* year calculation */

    let inYear = new Date().getFullYear();
    inYear += termOfLoan

    /* end year calculation */


    /* massage */
    document.getElementById("siOutput-1").innerHTML = "If you deposit " + amt;

    document.getElementById("siOutput-2").innerHTML = "at an interst rate of " + interestRateShow;
    document.getElementById("siOutput-3").innerHTML = "you will recive an amount of " + simleInt;
    document.getElementById("siOutput-4").innerHTML = "in the year " + inYear;

    /* end massage */
}