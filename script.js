function calculateCalories() {
    var cal = document.getElementById("calories").value;
    var serve = document.getElementById("servings").value;

    if (cal === "" || serve === "") {
        alert("Please enter both values");
        return;
    }

    var total = cal * serve;
    document.getElementById("result").innerHTML = "Total Calories: " + total + " kcal";
}

function submitFeedback() {
    var rate = document.getElementById("rating").value;
    var fb = document.getElementById("feedback").value;

    if (fb === "") {
        alert("Please enter feedback before submitting");
        return;
    }

    document.getElementById("message").innerHTML =
        "Thank you! You rated us " + rate + "/5.";
    
    document.getElementById("feedback").value = "";
}