jQuery(document).ready(function () {
    init();
});


// initialize hide- and editbuttons
function init() {
    // set onclick listener on toggleVisibilityButton
    jQuery('.toggleVisibilityButton').click(function() {
        toggleEditButtonsVisibility();
    });

    // hide or show (depending on session entry "hideEditButton") editButtons
    if (sessionStorage.getItem('hideEditButton') === "false") {
        hideEditButtons();
    } else {
        showEditButtons();
        sessionStorage.setItem('hideEditButton', true);
    }
}

// toggle visibility of Editbuttons and set its cookie value
function toggleEditButtonsVisibility() {
    if(sessionStorage.getItem('hideEditButton') == 'true') {
        // hide edit buttons
        hideEditButtons();
        sessionStorage.setItem('hideEditButton', false);
    } else {
        // show edit buttons
        showEditButtons();
        sessionStorage.setItem('hideEditButton',true);
    }
}

// display edit buttons
function showEditButtons() {
    // show all edit buttons
    jQuery(".secedit").each(function() {
        jQuery(this).show();
    });
}

// hide edit buttons
function hideEditButtons() {
    // hide all edit buttons
    jQuery(".secedit").each(function() {
        jQuery(this).hide();
    });
}

