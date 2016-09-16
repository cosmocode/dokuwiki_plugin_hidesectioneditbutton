<?php

// must be run within Dokuwiki
if(!defined('DOKU_INC')) die();

class helper_plugin_hidesectioneditbutton extends DokuWiki_Plugin{

    function displayVisibilityToggleButton() {
        echo '<button class="toggleVisibilityButton">Toggle visibility</button>
            <br><br>
            <hr>
            <br>';
    }

}
