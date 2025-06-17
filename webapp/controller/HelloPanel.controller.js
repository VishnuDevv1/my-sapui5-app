sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {     //defines the name/path of the controller globally
        onSayHello: function () {

            MessageToast.show("Helloooooooo!")
        },

        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }
    })
})