var global_TurnDebugOn = false;

if (global_TurnDebugOn) {
    alert('Debug is on.');
}

/* Login form */
function ValidateLogin() {
    var booContinue = true;
    var email = $("#MainContent_txtEmail").val();
    var password = $("#MainContent_txtPassword").val();
    var divError = $("#contactError");
    var formContact = $(".formContact");
    var errorMsg = $("#errorMsg");
    var message = "";

    divError.addClass("hidden");
    errorMsg.html("");

    //validate
    if (email == "") {
        booContinue = false;
        message = message + "Email is required.  ";
    }
    if (password == "") {
        booContinue = false;
        message = message + "Password is required.";
    }

    if (!booContinue) {
        divError.removeClass("hidden");
        errorMsg.html(message);
        return false;
    }
    else {
        return true;
    }
}


/* CONTACT FORM */
function SubmitContactForm() {
    var booContinue = true;
    var contactName = $("#txtContactName").val();
    var contactEmail = $("#txtContactEmail").val();
    var contactPhone = $("#txtContactPhone").val();
    var contactMessage = $("#txtContactMessage").val();
    var divSending = $("#contactSending");
    var divError = $("#contactError");
    var divSuccess = $("#contactSuccess");
    var formContact = $(".formContact");
    var errorMsg = $("#errorMsg");
    var message = "";
    var lastName = $("#lastname").val();

    divSending.removeClass("hidden");
    divError.addClass("hidden");
    divSuccess.addClass("hidden");
    formContact.addClass("hidden");
    errorMsg.html("There was an error sending your message.");

    //validate
    if (lastName != "") {
        message = "Please leave the Last Name field blank.  ";
        booContinue = false;
    }
    if (contactName == "") {
        booContinue = false;
        message =  message + "Name is required.  ";
    }
    if (contactMessage == "") {
        booContinue = false;
        message = message + "Message is required.";
    }

    if (!booContinue) {
        divSending.addClass("hidden");
        divError.removeClass("hidden");
        formContact.removeClass("hidden");
        errorMsg.html(message);
    }
    else {
        var dataToSend = { ContactName: contactName, ContactEmail: contactEmail, ContactPhone: contactPhone, ContactMessage: contactMessage };
        var options =
            {
                url: 'services/VolleyballPlayasService.asmx/SubmitContactForm'
                , data: JSON.stringify(dataToSend)
                , dataType: 'json'  //return data type
                , type: 'POST'
                , contentType: "application/json; charset=utf-8"
                , success: SubmitContactForm_Success
                , error: function (jqXHR, textStatus, errorThrown) {
                    if (global_TurnDebugOn) {
                        alert('error: ' + jqXHR.status + ' : ' + textStatus + ' : ' + errorThrown);
                    }
                    divSending.addClass("hidden");
                    divError.removeClass("hidden");
                    formContact.removeClass("hidden");
                }
            }
        $.ajax(options);
    }
}

function SubmitContactForm_Success(jsondata) {
    var divSending = $("#contactSending");
    var divSuccess = $("#contactSuccess");
    var divError = $("#contactError");
    var formContact = $(".formContact");

    if (jsondata) {
        var result = JSON.parse(jsondata.d);
        if (result.Pass == true) {
            divSending.addClass("hidden");
            divSuccess.removeClass("hidden");
        }
        else {
            if (global_TurnDebugOn) {
                alert('Failed: ' + result.Message);
            }
            divSending.addClass("hidden");
            divError.removeClass("hidden");
            divSuccess.addClass("hidden");
            formContact.removeClass("hidden");
        }
    }
}


function ShowTeamGames(pos)
{
    $(".team-highlight").removeClass("team-highlight");
    $(".team-highlight-click").removeClass("team-highlight-click");

    var game = $("." + pos + "game");
    game.addClass("team-highlight");
    $("#" + pos).addClass("team-highlight-click");

}

function FilterPlayerList() {
    var optMale = $("#optMale");
    var optFemale = $("#optFemale");
    var optAll = $("#optAll");

    var optMaleChecked = optMale.is(':checked');
    var optFemaleChecked = optFemale.is(':checked');
    var optAllChecked = optAll.is(':checked');

    var male = $(".male");
    var maleParent1 = male.parent();
    var maleParent2 = maleParent1.parent();
    var maleParent3 = maleParent2.parent();

    var female = $(".female");
    var femaleParent1 = female.parent();
    var femaleParent2 = femaleParent1.parent();
    var femaleParent3 = femaleParent2.parent();

    ///////

    var optRecreational = $("#optRecreational");
    var optIntermediateLow = $("#optIntermediateLow");
    var optIntermediateHigh = $("#optIntermediateHigh");
    var optAdvanced = $("#optAdvanced");

    var recreationalChecked = optRecreational.is(':checked');
    var intermediateLowChecked = optIntermediateLow.is(':checked');
    var intermediateHighChecked = optIntermediateHigh.is(':checked');
    var advancedChecked = optAdvanced.is(':checked');

    var recreational = $(".recreational");
    var recreationalParent1 = recreational.parent();
    var recreationalParent2 = recreationalParent1.parent();
    var recreationalParent3 = recreationalParent2.parent();

    var intermediateLow = $(".intermediateLow");
    var intermediateLowParent1 = intermediateLow.parent();
    var intermediateLowParent2 = intermediateLowParent1.parent();
    var intermediateLowParent3 = intermediateLowParent2.parent();

    var intermediateHigh = $(".intermediateHigh");
    var intermediateHighParent1 = intermediateHigh.parent();
    var intermediateHighParent2 = intermediateHighParent1.parent();
    var intermediateHighParent3 = intermediateHighParent2.parent();

    var advanced = $(".advanced");
    var advancedParent1 = advanced.parent();
    var advancedParent2 = advancedParent1.parent();
    var advancedParent3 = advancedParent2.parent();

    ///
    var showBothGenders = false
        , showAllLevels = false
        , showMale = optMaleChecked
        , showFemale = optFemaleChecked;

    if (optAllChecked || (!optMaleChecked && !optFemaleChecked && !optAllChecked)) {
        showBothGenders = true;
    }

    if ((!recreationalChecked && !intermediateLowChecked && !intermediateHighChecked && !advancedChecked)) {
        showAllLevels = true;
    }

    maleParent3.show();
    femaleParent3.show();
    recreationalParent3.show();
    intermediateLowParent3.show();
    intermediateHighParent3.show();
    advancedParent3.show();

    if (showBothGenders && showAllLevels) {
        return;
    }

    if (showAllLevels) {
        if (showMale) {
            maleParent3.show();
            femaleParent3.hide();
        }
        else {
            maleParent3.hide();
            femaleParent3.show();
        }
        return;
    }

    if (showBothGenders) {
        if (!recreationalChecked) {
            recreationalParent3.hide();
        }

        if (!intermediateLowChecked) {
            intermediateLowParent3.hide();
        }

        if (!intermediateHighChecked) {
            intermediateHighParent3.hide();
        }

        if (!advancedChecked) {
            advancedParent3.hide();
        }
        return;
    }

    if (showMale) {
        femaleParent3.hide();

        if (!recreationalChecked) {
            recreationalParent3.hide();
        }

        if (!intermediateLowChecked) {
            intermediateLowParent3.hide();
        }

        if (!intermediateHighChecked) {
            intermediateHighParent3.hide();
        }

        if (!advancedChecked) {
            advancedParent3.hide();
        }
        return;
    }

    if (showFemale) {
        maleParent3.hide();

        if (!recreationalChecked) {
            recreationalParent3.hide();
        }

        if (!intermediateLowChecked) {
            intermediateLowParent3.hide();
        }

        if (!intermediateHighChecked) {
            intermediateHighParent3.hide();
        }

        if (!advancedChecked) {
            advancedParent3.hide();
        }
        return;
    }
}

/* INIT */
(function () {

    $(".btn-team").hover(function () {
        var pos = this.id;
        $("#" + pos).addClass("team-highlight");
    });

    $(".btn-team").mouseout(function () {
        var pos = this.id;
        $("#" + pos).removeClass("team-highlight");
    });

    $(".btn-team").click(function () {
        var pos = this.id;
        ShowTeamGames(pos);
    });

    //$(".minus").click(function () {
    //    var pos = this.id;
    //    ItemPlusMinus("minus", pos);
    //});

    //$(".plus").click(function () {
    //    var pos = this.id;
    //    ItemPlusMinus("plus", pos);
    //});

    //$(".plus-item").click(function () {
    //    var pos = this.id;
    //    var id = pos.substring(0, 12);
    //    ItemPlusMinus("plus", id);
    //});

})();