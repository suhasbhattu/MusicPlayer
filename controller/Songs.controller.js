sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/table/library"], function(Controller, library) {
    
    "use strict";
    
    var SortOrder = library.SortOrder;

    return Controller.extend("MusicPlayer.controller.Songs", {

        onBeforeRendering : function () {
            var oView = this.getView();
            // do sorting on song name
            var oSongNameColumn = oView.byId("oSongNameColumn");
            oView.byId("oSongsList").sort(oSongNameColumn, SortOrder.Ascending);
        }

    });

});