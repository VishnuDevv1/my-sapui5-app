sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        bleh : function(){
            this.getOwnerComponent().openHelloDialog(); // use getOwnerComponent to get the Component.js context & reuse code 
        }
    });
});