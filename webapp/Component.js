sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/demo/walkthrough/controller/HelloDialog" //check this one -----------
], function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata : {
            manifest: "json"
        },
        init: function () {
            // call init function of parent - UIComponent
            UIComponent.prototype.init.apply(this, arguments);
            // set data models
            var OData = {
                recipient : {
                    name: "UI5"
                }
            };
            var oModel = new JSONModel(OData);
            // oModel.setDefaultBindingMode("");
            this.setModel(oModel);        //this assigns the json model to the view, making it available to be used in the XML

            // set i18n model
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.setModel(i18nModel, "i18n");

            //-----------------

            this._helloDialog = new HelloDialog(this.getRootControl());     //_ before method - private method. getRootControl() - root view passed to HelloDialog constructor
                                                // getRootControl only exists in UIComponent class, not in controllers
        },

        // lifecycle hook just like init - called when component is destoryed. ex: app is closed
        exit: function(){
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog: function(){
            this._helloDialog.open();       //this._helloDialog exists across the component
        }
    });
});