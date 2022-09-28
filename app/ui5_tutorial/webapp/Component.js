sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
    
 ], function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.Component", {
        metadata : {
            //interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"

         },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);

          const oData = {
            recipient: {
                name: "UI5"
            }
        };

        const oModel = new JSONModel(oData);
        this.setModel(oModel);

        //set dialog
        this._helloDialog = new HelloDialog(this.getRootControl());

       },

       exit: function() {
           this._helloDialog.destroy();
           delete this._helloDialog;
       },

       openHelloDialog: function() {
            this._helloDialog.open();
       }
    });
 });