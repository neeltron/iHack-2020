function getVal() {
    var inputVal = document.getElementById("ans").value;
    if(inputVal.localeCompare("Kolkata") == 0) {
        alert("Correct Answer!");
    }
    else {
        alert("Wrong Answer!");
    }
}