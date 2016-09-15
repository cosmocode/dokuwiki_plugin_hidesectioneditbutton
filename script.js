var editButtonsAreVisible, visibilityToggleButton;

// initialize (when DOM elements loaded)
document.addEventListener('DOMContentLoaded', function() {
    init()
}, false);



// initialize hide- and editbuttons (depending on cookie "hideEditButton")
function init() {
    visibilityToggleButton = document.getElementsByClassName("visibilityButton")[0];

    var hideButtonValue = getCookie("hideEditButton");

    if (hideButtonValue == 'true') {
        editButtonsAreVisible = true;
        showEditButtons();
    } else {
        editButtonsAreVisible = false;
        hideEditButtons();
    }
}

// toggle visibility of Editbuttons and set its cookie value
function toggleEditButtonsVisibility() {
    if(editButtonsAreVisible) {
        // set cookie
        document.cookie='hideEditButton=false';
        // hide edit buttons
        hideEditButtons();

        editButtonsAreVisible = false;
    } else {
        // set cookie
        document.cookie='hideEditButton=true';
        // hide edit buttons
        showEditButtons();

        editButtonsAreVisible = true;
    }
}


// helper functions

// display edit buttons
function showEditButtons() {
    // show all edit buttons
    var editButtons = document.getElementsByClassName("btn_secedit");
    for (var count = 0; count < editButtons.length; count++) {
        editButtons[count].style.display="inline";
    }

    // set text of visibilityToggleButton
    visibilityToggleButton.innerHTML = "Hide button";
}

// hide edit buttons
function hideEditButtons() {
    // hide all edit buttons
    var editButtons = document.getElementsByClassName("btn_secedit");
    for (var count = 0; count < editButtons.length; count++) {
        editButtons[count].style.display="none";
    }

    // set text of visibilityToggleButton
    visibilityToggleButton.innerHTML = "Show button";
}

// get value of cookie key
function getCookie(cookieKey) {
    var name = cookieKey + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

