"use strict";
var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["user"] = 1] = "user";
    role[role["guest"] = 2] = "guest";
})(role || (role = {}));
let userRole = role.user;
