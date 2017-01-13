// ==UserScript==
// @name         GitHub Halloween
// @namespace    https://github.com/KeyWeeUsr/Userscripts
// @version      0.4
// @description  Experience Halloween every day
// @author       Peter Badida
// @copyright    2016+, Peter Badida
// @license      GNU GPLv3
// @homepage     https://github.com/KeyWeeUsr/Userscripts/tree/master/Halloween
// @supportURL   https://github.com/KeyWeeUsr/Userscripts/issues
// @icon         https://github.com/favicon.ico
// @include      https://*github.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ACVM74AYCXVWQ
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';
(function () {
    var items = document.getElementsByClassName("day");
    var dayFill;
    for (var i=0; i < items.length; i++) {
        dayFill = $(items[i]).attr('fill');
        if (dayFill == "#1e6823") {
            $(items[i]).attr('fill', '#03001C');
        } else if (dayFill == "#44a340") {
            $(items[i]).attr('fill', '#FE9600');
        } else if (dayFill == "#8cc665") {
            $(items[i]).attr('fill', '#FFC501');
        } else if (dayFill == "#d6e685") {
            $(items[i]).attr('fill', '#FFEE4A');
        } else {
            $(items[i]).attr('fill', '#EEEEEE');
        }
    }

    var css = '\
ul.legend > li {\
    background-color: #EEEEEE !important;\
}\
ul.legend > li + li {\
    background-color: #FFEE4A !important;\
}\
ul.legend > li + li + li {\
    background-color: #FFC501 !important;\
}\
ul.legend > li + li + li + li {\
    background-color: #FE9600 !important;\
}\
ul.legend > li + li + li + li + li {\
    background-color: #03001C !important;\
}';
    GM_addStyle(css);
})();
/*
Notify me if there's something missing/undesirable.
*/
