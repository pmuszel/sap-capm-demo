sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.controller.HelloPanel", {
        onShowHello: function() {

            const oBundle = this.getView().getModel("i18n").getResourceBundle();

            const sRecipient = this.getView().getModel().getProperty("/recipient/name");

            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg);
        },
        onOpenDialog: function() {

            this.getOwnerComponent().openHelloDialog();

            // const oView = this.getView();

            // if(!this.byId("helloDialog")) {
            //     Fragment.load({
            //         id: oView.getId(),
            //         name: "sap.ui.demo.view.HelloDialog",
            //         controller: this
            //     }).then(function(oDialog) {
            //         oView.addDependent(oDialog);
            //         oDialog.open();
            //     });
            // } else {
            //     this.byId("helloDialog").open();
            // }
        }

        // onCloseDialog: function() {
        //     this.byId("helloDialog").close();
        // }

    });
});