// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Here is the function that will calculate the rate
$(document).ready(function() {
    $("#calculate").click(function() {
        let hours = parseFloat($("#hours").val());
        let rate = parseFloat($("#rate").val());

        // error handeling
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number for hours.");
            return;
        }

        let total = hours * rate;
        $("#total").text(total.toFixed(2));
        $("#total-input").val("$" + total.toFixed(2));  // Update the <input> field
    });
});