//FORM VALIDATION
var noErrors;
// Email RegExp
var emailRegExp = /^[\w-_\.]+@([\w-_]{2,}\.)+[a-z]{2,}$/i;
var tbEmail = document.querySelector("#tbEmail");
tbEmail.addEventListener("blur", checkEmail);
function checkEmail() {
  var check = emailRegExp.test(tbEmail.value);
  if (check) {
    tbEmail.classList.add("borderBlue");
    tbEmail.classList.remove("borderRed");
    tbEmail.nextElementSibling.style.display = "none";
  } else {
    noErrors = false;
    tbEmail.classList.add("borderRed");
    tbEmail.classList.remove("borderBlue");
    tbEmail.nextElementSibling.style.display = "block";
  }
}
// Number of people
var ddlNumber = document.querySelector("#ddlNumber");
ddlNumber.addEventListener("change", checkNumber);
ddlNumber.addEventListener("blur", checkNumber);

var ddlNumberOptions = [1, 2, 3, 4, 5, 6];
ddlNumber.innerHTML = '<option value="0">Choose</option>';
for (i in ddlNumberOptions) {
  ddlNumber.innerHTML += `<option value="${ddlNumberOptions[i]}">${ddlNumberOptions[i]}</option>`;
}
function checkNumber() {
  if (ddlNumber.value != 0) {
    ddlNumber.classList.add("borderBlue");
    ddlNumber.classList.remove("borderRed");
    ddlNumber.nextElementSibling.style.display = "none";
  } else {
    noErrors = false;
    ddlNumber.classList.add("borderRed");
    ddlNumber.classList.remove("borderBlue");
    ddlNumber.nextElementSibling.style.display = "block";
  }
}

//dates
// Year
var ddlYear = document.querySelector("#ddlYear");
ddlYear.addEventListener("change", checkYear);
ddlYear.addEventListener("blur", checkYear);
var ddlYearOptions = [2021, 2022, 2023];
ddlYear.innerHTML = '<option value="0">Year</option>';
for (i in ddlYearOptions) {
  ddlYear.innerHTML += `<option value="${ddlYearOptions[i]}">${ddlYearOptions[i]}</optio
n>`;
}
function checkYear() {
  if (ddlYear.value != 0) {
    ddlYear.classList.add("borderBlue");
    ddlYear.classList.remove("borderRed");
    dateError.style.display = "none";
  } else {
    noErrors = false;
    ddlYear.classList.add("borderRed");
    ddlYear.classList.remove("borderBlue");
    dateError.style.display = "block";
  }
}
// Month
var ddlMonth = document.querySelector("#ddlMonth");

ddlMonth.addEventListener("change", checkMonth);
ddlMonth.addEventListener("blur", checkMonth);
ddlMonth.addEventListener("change", printDays);
ddlMonth.addEventListener("blur", printDays);
var ddlMonthOptions = ["January","February", "March", "April","May","June", "July", "August", "September","October","November","December"];
ddlMonth.innerHTML = '<option value="0">Month</option>';
for (i in ddlMonthOptions) {
  ddlMonth.innerHTML += `<option value="${ddlMonthOptions[i]}">${ddlMonthOptions[i]}</op
tion>`;
}
function checkMonth() {
  if (ddlMonth.value != 0) {
    ddlMonth.classList.add("borderBlue");
    ddlMonth.classList.remove("borderRed");
    dateError.style.display = "none";
  } else {
    noErrors = false;
    ddlMonth.classList.add("borderRed");
    ddlMonth.classList.remove("borderBlue");
    dateError.style.display = "block";
  }
}
// Day
var ddlDay = document.querySelector("#ddlDay");
ddlDay.addEventListener("change", checkDay);
ddlDay.addEventListener("blur", checkDay);
ddlDay.innerHTML = '<option value="0">Day</option>';
function printDays() {
  if (ddlMonth.value == 0) return;
  var numberOfDays;
  switch (ddlMonth.value) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      numberOfDays = 31;
    case "February":
      numberOfDays = 28;

      break;
    default:
      numberOfDays = 30;
  }
  ddlDay.innerHTML = '<option value="0">Day</option>';
  for (let i = 0; i < numberOfDays; i++) {
    ddlDay.innerHTML += `<option value="${i + 1}">${i + 1}</option>`;
  }
}
function checkDay() {
  if (ddlDay.value != 0) {
    ddlDay.classList.add("borderBlue");
    ddlDay.classList.remove("borderRed");
    dateError.style.display = "none";
  } else {
    noErrors = false;
    ddlDay.classList.add("borderRed");
    ddlDay.classList.remove("borderBlue");
    dateError.style.display = "block";
  }
}
function checkDate() {
  checkYear();
  checkMonth();
  checkDay();
}
// Destination
var locationNames = [
  "Mars",
  "Jupiter *SOON*",
  "Moons Orbit",
  "SpaceShip",
  "Veneras Orbit *SOON*",
  "Milky Way Life Crouse *SOON*",
];
var ddlDestination = document.querySelector("#ddlDestination");
ddlDestination.addEventListener("change", checkDestination);
ddlDestination.addEventListener("blur", checkDestination);
ddlDestination.innerHTML = '<option value="0">Destination</option>';
for (i in locationNames) {
  ddlDestination.innerHTML += `<option value="${locationNames[i]}">${locationNames[i]}</option>`;
}

function checkDestination() {
  if (ddlDestination.value != 0) {
    ddlDestination.classList.add("borderBlue");
    ddlDestination.classList.remove("borderRed");
    ddlDestination.nextElementSibling.style.display = "none";
  } else {
    noErrors = false;
    ddlDestination.classList.add("borderRed");
    ddlDestination.classList.remove("borderBlue");
    ddlDestination.nextElementSibling.style.display = "block";
  }
}
// Submit booking
var btnSubmitBooking = document.querySelector("#btnSubmitForm");
btnSubmitBooking.addEventListener("click", function () {
  noErrors = true;
  checkEmail();
  checkNumber();
  checkDate();
  checkDestination();
  if (noErrors) {
    tbEmail.value = "";
    tbEmail.classList.remove("borderBlue");
    ddlNumber.selectedIndex = "0";
    ddlNumber.classList.remove("borderBlue");
    ddlYear.selectedIndex = "0";
    ddlYear.classList.remove("borderBlue");
    ddlMonth.selectedIndex = "0";
    ddlMonth.classList.remove("borderBlue");
    ddlDay.selectedIndex = "0";
    ddlDay.classList.remove("borderBlue");
    ddlDestination.selectedIndex = "0";
    ddlDestination.classList.remove("borderBlue");
    var successMessage =
      "Success! One of our agents will reach out to you in the nextcouple of days to finalize the booking.";
    openSuccessModal(successMessage);
  }
});

// jQuery
$(document).ready(function () {
  $(".locationText").hide();
  $(".btnReadMore").click(function () {
    $(this).prev().slideToggle("fast");
    if ($(this).text() == "Read more") {
      $(this).text("Read less");
    } else {
      $(this).text("Read more");
    }
  });
  $(".btnBook").click(function () {
    $("#ddlDestination").val($(this).val());
    document.location.href = "#bookingForm";
    checkDestination();
  });
});



// RegExp
var noErrors;

// Email RegExp
var emailRegExp = /^[\w-_\.]+@([\w-_]{2,}\.)+[a-z]{2,}$/i;
var tbEmail = document.querySelector("#tbEmail");
tbEmail.addEventListener("blur", checkEmail);
function checkEmail() {
  var check = emailRegExp.test(tbEmail.value);
  if (check) {
    tbEmail.classList.add("borderBlue");
    tbEmail.classList.remove("borderRed");
    tbEmail.nextElementSibling.style.display = "none";
  } else {
    noErrors = false;
    tbEmail.classList.add("borderRed");
    tbEmail.classList.remove("borderBlue");
    tbEmail.nextElementSibling.style.display = "block";
  }
}

// Submit button
var btnSubmitMessage = document.querySelector("#btnSubmitForm");
btnSubmitMessage.addEventListener("click", function () {
  noErrors = true;
  checkName();
  checkEmail();
  checkMessage();
  if (noErrors) {
    tbName.value = "";
    tbName.classList.remove("borderBlue");
    tbEmail.value = "";
    tbEmail.classList.remove("borderBlue");
    tbMessage.value = "";
    tbMessage.classList.remove("borderBlue");
    var successMessage = "Your message was sent successfully!";
    openSuccessModal(successMessage);
  }
});



//success modal 
var bodyTag = document.getElementsByTagName("body")[0];
var successModal = document.createElement("div");
successModal.setAttribute("id", "successModal");
var successCover = document.createElement("div");
successCover.setAttribute("class", "cover");
var successContainer = document.createElement("div");
successContainer.setAttribute("id", "successContainer");
var successMessageSpan = document.createElement("span");
successContainer.appendChild(successMessageSpan);
var btnClose = document.createElement("button");
btnClose.classList.add("font-medium", "btnClose");
btnClose.innerHTML = "X";
btnClose.addEventListener("click", closeSuccessModal);
successContainer.appendChild(btnClose);
successModal.appendChild(successCover);
successModal.appendChild(successContainer);
bodyTag.appendChild(successModal);
var closeModalTimeout;
function openSuccessModal(message) {
 successMessageSpan.innerHTML = message;
 successModal.style.display = "block";
 successContainer.style.display = "block";
 var timeoutValue = 0;
 for(let i = -100; i <= 0; i++) {
 setTimeout(function() {
 successCover.style.opacity = `${i+100}%`;
 }, timeoutValue+=1.5);
 }
 closeModalTimeout = setTimeout(closeSuccessModal, 3000);
}
successCover.addEventListener("click", closeSuccessModal);
function closeSuccessModal() {
 successContainer.style.display = "none";
 var timeoutValue = 0;
 for(let i = 0; i >= -100; i--) {
 setTimeout(function() {
 successCover.style.opacity = `${i+100}%`;
 if(i == -100) successModal.style.display = "none";
 }, timeoutValue+=1.5);
 }
 clearTimeout(closeModalTimeout);
}