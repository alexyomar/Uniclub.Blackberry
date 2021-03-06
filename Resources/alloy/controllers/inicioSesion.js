function Controller() {
    function inicie() {
        var win = Alloy.createController("inicioScreen").getView();
        $.container2.add(win);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "inicioSesion";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container2 = Ti.UI.createView({
        backgroundColor: "#9C213F",
        id: "container2"
    });
    $.__views.container2 && $.addTopLevelView($.__views.container2);
    $.__views.uniclubImg = Ti.UI.createImageView({
        top: "25%",
        width: "70%",
        height: "20%",
        image: "/uniclubIcon.png",
        id: "uniclubImg"
    });
    $.__views.container2.add($.__views.uniclubImg);
    inicie ? $.__views.uniclubImg.addEventListener("click", inicie) : __defers["$.__views.uniclubImg!click!inicie"] = true;
    $.__views.__alloyId2 = Ti.UI.createTextArea({
        backgroundColor: "white",
        width: "70%",
        height: "8%",
        borderRadius: "7",
        top: "50%",
        hintText: "Cédula",
        id: "__alloyId2"
    });
    $.__views.container2.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createTextArea({
        backgroundColor: "white",
        width: "70%",
        height: "8%",
        borderRadius: "7",
        top: "58.1%",
        hintText: "Contraseña",
        id: "__alloyId3"
    });
    $.__views.container2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        font: "Helvetica",
        top: "70%",
        text: "Olvidó Su Contraseña?",
        id: "__alloyId4"
    });
    $.__views.container2.add($.__views.__alloyId4);
    $.__views.inicioSesionImg = Ti.UI.createImageView({
        top: "80%",
        width: "120",
        height: "30",
        image: "/inicioSesionIcon.png",
        id: "inicioSesionImg"
    });
    $.__views.container2.add($.__views.inicioSesionImg);
    inicie ? $.__views.inicioSesionImg.addEventListener("click", inicie) : __defers["$.__views.inicioSesionImg!click!inicie"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.uniclubImg!click!inicie"] && $.__views.uniclubImg.addEventListener("click", inicie);
    __defers["$.__views.inicioSesionImg!click!inicie"] && $.__views.inicioSesionImg.addEventListener("click", inicie);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;