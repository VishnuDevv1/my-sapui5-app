sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
], function (MockServer, UriParameters) {
    "use strict";

    return {
        init: function () {
            // create the mock server
            var oMockServer = new MockServer ({
                rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
            });

            var oUriParameters = new UriParameters(window.location.href);

            // config mock server w delay

            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get("serverDelay") || 500
            });

            // simulate

            var sPath = "../localService";
            oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

            //start

            oMockServer.start();
        }
    }
})