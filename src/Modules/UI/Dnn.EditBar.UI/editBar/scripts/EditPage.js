﻿define(['jquery'], function ($) {
    'use strict';
    var menuItem, util;

    var init = function (menu, utility, params, callback) {
        menuItem = menu;
        util = utility;

        if (typeof callback === 'function') {
            callback();
        }
    };

    var onClick = function () {
        var mode = menuItem.settings.userMode === "View" ? "Edit" : "View";

        util.sf.moduleRoot = 'internalservices';
        util.sf.controller = "controlBar";
        util.sf.post('ToggleUserMode', { UserMode: mode }, function handleToggleUserMode() {
            window.parent.location.reload();
        });
    }

    return {
        init: init,
        onClick: onClick
    };
});
