//start page js
$(document).ready(function () {
  $(".logo").fadeOut(1000);
});
$(document).ready(function () {
  $(".mainlogo").fadeOut(1000);
});
$(document).ready(function () {
  $(".mainslogosmall").fadeIn(1000);
});
$(".startpage-button")
  .delay(2000)
  .queue(function () {
    $(this)
      .removeClass("uk-hidden")
      .addClass("uk-animation-slide-top")
      .dequeue();
  });
//firstpage js
function hideAndClearValues(elem) {
  elem.addClass("uk-hidden");
  elem.find(":input").each(function () {
    switch (this.type) {
      case "button":
      case "text":
      case "submit":
      case "password":
      case "file":
      case "email":
      case "date":
      case "number":
        $(this).val("");
        break;
      case "checkbox":
      case "radio":
        this.checked = false;
        break;
    }
  });
}

// input name
function validName(e) {
  e.preventDefault();
  let x = document.forms["Form"]["fname"].value;
  let regex = /^[a-zA-Zა-ჰ]+$/;
  if (x.length < 4) {
    $(".firstpage-alert-name").html(
      "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან"
    );
    return false;
  } else if (x.length > 255) {
    $(".firstpage-alert-name").html(
      "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"
    );
    return false;
  } else if (!x.match(regex)) {
    $(".firstpage-alert-name").html(
      "სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს"
    );
    $(".firstpage-alert-name").removeClass("uk-hidden");
    return false;
  } else {
    $(".firstpage-alert-name").addClass("uk-hidden");
  }
  return true;
}

//input lname
function validLname(e) {
  e.preventDefault();
  let x = document.forms["Form"]["lname"].value;
  let regex = /^[a-zA-Zა-ჰ]+$/;
  if (x.length < 4) {
    $(".firstpage-alert-lname").html(
      "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან"
    );
    return false;
  } else if (x.length > 255) {
    $(".firstpage-alert-lname").html(
      "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"
    );
    return false;
  } else if (!x.match(regex)) {
    $(".firstpage-alert-lname").html(
      "სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს"
    );
    $(".firstpage-alert-lname").removeClass("uk-hidden");
    return false;
  } else {
    $(".firstpage-alert-lname").addClass("uk-hidden");
  }

  return true;
}

//input email
function validEmail(e) {
  e.preventDefault();
  let x = document.forms["Form"]["email"].value;
  let regex = /\S+@\S+\.\S+/;
  let y = /[a-z0-9._%+-]+@redberry.ge/;
  if (!x.match(regex)) {
    $(".firstpage-alert-email").html("თქვენ მიერ შეყვანილი მეილი არასწორია");
    return false;
  } else if (!x.match(y)) {
    $(".firstpage-alert-email").html(
      "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)"
    );
    return false;
  } else {
    $(".firstpage-alert-email").addClass("uk-hidden");
  }
  return true;
}
$("#email").blur(validEmail);

//input firstpage check button disabled
$("#fname,#lname,#email").change(function (e) {
  e.preventDefault();
  let disabled = !validName(e) || !validLname(e) || !validEmail(e);
  $(".firstpage-nav-right").prop("disabled", disabled);
});

//secondpage radio button

function removeValueforCheckbox(elem) {
  elem.addClass("uk-hidden");
  elem.prop("checked", false);
  add;
}

//კი
$("#ritema").click(function () {
  if ($(this).prop("checked")) {
    $(".secondpage-second").removeClass("uk-hidden");
    $(".secondpage-nav-right").prop("disabled", true);
  }
});

//არა ახლა მაქვს
$("#ritemb,#ritemc").click(function () {
  if ($(this).prop("checked")) {
    hideAndClearValues($(".secondpage-second"));
    hideAndClearValues($(".secondpage-third"));
    hideAndClearValues($(".secondpage-fourth"));
    $(".secondpage-nav-right").prop("disabled", false);
  }
});

//კი კი
$("#ritemd").click(function () {
  if ($(this).prop("checked")) {
    $(".secondpage-third").removeClass("uk-hidden");
    hideAndClearValues($(".secondpage-fourth"));
    $(".secondpage-nav-right").prop("disabled", true);
  }
});

//კი არა
$("#riteme").click(function () {
  if ($(this).prop("checked")) {
    $(".secondpage-fourth").removeClass("uk-hidden");
    hideAndClearValues($(".secondpage-third"));
    $(".secondpage-nav-right").prop("disabled", true);
  }
});

// check date and number
function checkDate() {
  if (!$(".secondpage-third").hasClass("uk-hidden")) {
    if (!Date.parse($(".secondpage-first-input").val())) {
      return false;
    }
    if ($(".secondpage-first-number").val().length === 0) {
      return false;
    }
  }
  if (!$(".secondpage-fourth").hasClass("uk-hidden")) {
    if (!Date.parse($("#secondpage-second-input").val())) {
      return false;
    }
  }
  return true;
}
//enabled button
$(".secondpage-third,.secondpage-fourth").on("input", function () {
  $(".secondpage-nav-right").prop("disabled", !checkDate());
});

//thirdpage radio button

//კი
$("#ritemf").click(function () {
  if ($(this).prop("checked")) {
    $(".thirdpage-second-yes").removeClass("uk-hidden");
    hideAndClearValues($(".thirdpage-second-no"));
    hideAndClearValues($(".thirdpage-third-no"));
    hideAndClearValues($(".thirdpage-fourth-no"));
    $(".thirdpage-nav-right").prop("disabled", true);
  }
});
// კი მეორე დოზა
$("#ritemn").click(function () {
  if ($(this).prop("checked")) {
    $(".thirdpage-third-yes").removeClass("uk-hidden");
    $(".thirdpage-nav-right").prop("disabled", false);
  }
});
$("#ritemm ,#ritemh").click(function () {
  if ($(this).prop("checked")) {
    hideAndClearValues($(".thirdpage-third-yes"));
    $(".thirdpage-nav-right").prop("disabled", false);
  }
});
// არა
$("#ritemg").click(function () {
  if ($(this).prop("checked")) {
    $(".thirdpage-second-no").removeClass("uk-hidden");
    hideAndClearValues($(".thirdpage-second-yes"));
    hideAndClearValues($(".thirdpage-third-yes"));
    $(".thirdpage-nav-right").prop("disabled", true);
  }
});
$("#ritemx").click(function () {
  if ($(this).prop("checked")) {
    hideAndClearValues($(".thirdpage-fourth-no"));
    $(".thirdpage-nav-right").prop("disabled", false);
  }
});

//არა არვგეგმავ
$("#ritemy").click(function () {
  if ($(this).prop("checked")) {
    $(".thirdpage-third-no").removeClass("uk-hidden");
    hideAndClearValues($(".thirdpage-fourth-no"));
    $(".thirdpage-nav-right").prop("disabled", false);
  }
});
//ვგეგმავ აცრას
$("#ritemz").click(function () {
  if ($(this).prop("checked")) {
    $(".thirdpage-fourth-no").removeClass("uk-hidden");
    hideAndClearValues($(".thirdpage-third-no"));
    $(".thirdpage-nav-right").prop("disabled", false);
  }
});


//fourth page
function validationForm() {
  if (!$("input[name=workday]").is(":checked")) {
    return false;
  }
  if (!$("input[name=quantity]").is(":checked")) {
    return false;
  }
  if ($("#lastpage-textarea").val().length === 0) {
    return false;
  }
  if ($("#lastpage-textarea-second").val().length === 0) {
    return false;
  }
  return true;
}

$("#main-container").on("input", function () {
  $(".fourthpage-btn-finish").prop("disabled", !validationForm());
});


//last page
$(".lastpage-first")
.delay(1000)
.queue(function () {
  $(this)
    .removeClass("uk-hidden")
    .addClass("uk-animation-slide-left")
    .dequeue();
});
$(".lastpage-second")
.delay(1000)
.queue(function () {
  $(this)
    .removeClass("uk-hidden")
    .addClass("uk-animation-slide-right")
    .dequeue();
});