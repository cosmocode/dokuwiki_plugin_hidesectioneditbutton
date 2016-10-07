<?php

// must be run within Dokuwiki
if(!defined('DOKU_INC')) die();

class helper_plugin_hidesectioneditbutton extends DokuWiki_Plugin{

    function displayVisibilityToggleButton()
    {
        global $ID;
        global $ACT;

        if (auth_quickaclcheck($ID) >= AUTH_EDIT && $ACT === "show") {
            echo '<button class="toggleVisibilityButton">Toggle visibility</button>';
        }
    }

}
