sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict"

    return Controller.extend("sap.ui.demo.walkthrough.Controller.InvoiceList", {
        formatter: formatter,
        onInit : function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        },

        onFilterInvoices: function (oEvent) {
            // build filter array    ^^ searchfield data
            var aFilter = [];
            // var sQuery = oEvent.getParameter("query");
            var sQuery = oEvent.getParameter("newValue");       // live change
            if(sQuery) {
                aFilter.push(new Filter ("ProductName", FilterOperator.Contains, sQuery));
            }

            //filter binding
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");       // the attribute that bound the model to the view
            oBinding.filter(aFilter);                       // manual updation of UI isn't required. SAPUI5’s data binding + filter system is designed to keep view in sync with the model
        }


    })
})