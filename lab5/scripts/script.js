// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    // var filter = /^(\([-+]?[0-9]+)\)$/;
    //Code inspired by https://regexr.com/3c53v
    var filter = /^[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

// ^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$

function validateCard(txtCard) {
    var a = document.getElementById(txtCard).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    // var filter = /^(\([-+]?[0-9]+)\)$/;
    //Code inspired by https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
    var filter = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/g
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDatesRob = ["06/29/2020","06/20/2020","07/01/2020", "07/10/2020"]
var unavailableDatesJerry = ["06/27/2020","07/01/2020","07/17/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    
    if (document.getElementById("selecter").value == "rob"){
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDatesRob.indexOf(string) == -1 ]
    }  else{
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDatesJerry.indexOf(string) == -1 ]
    }  
    
    
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phoneNumber").on("change", function(){
        if (!validatePhone("phoneNumber")){
            alert("Wrong format for phone");
            $("#phoneNumber");
            $("#phoneNumber").addClass("error");
        }
        else {
            $("#phoneNumber").removeClass("error");
        }
    });

    $("#cardNumber").on("change", function(){
        if (!validatePhone("cardNumber")){
            alert("Wrong format for Credit Card");
            $("#cardNumber");
            $("#cardNumber").addClass("error");
        }
        else {
            $("#cardNumber").removeClass("error");
        }
    });

    //inspired by https://www.tutorialrepublic.com/codelab.php?topic=faq&file=bootstrap-show-popover-on-hover
    $('[data-toggle="popover"]').popover({
        placement : 'right',
        trigger : 'hover mouseover'
    });
 
    $("#booked").on("click", function(){
        let name = document.getElementById("name").value;
        let dateBook = document.getElementById("dateBook").value;
        let timeBook = document.getElementById("timeBook").value;
        let phoneNumber = document.getElementById("phoneNumber").value;
        let cardNumber = document.getElementById("cardNumber").value;
        if((name != "")&&(dateBook != "")&&(timeBook != "")&&(phoneNumber != "")&&(cardNumber != "")){
            alert("Your Appointment has been booked!");
            $("#mySurvey").model("hide");
        }else{
            alert("Please Ensure all Fields are filled before booking.");
        }
           
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    
    $("#dateBook" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+2M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});