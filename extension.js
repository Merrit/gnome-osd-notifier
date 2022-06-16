const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Lang = imports.lang;
const Main = imports.ui.main;

// @ts-check

let osdInterface = null;

function init() {
    osdInterface = new OSDInterface();
}

function enable() { }

function disable() { }

const DBusListener = '<node> \
<interface name="codes.merritt.OSDInterface"> \
<method name="showOSD"> \
    <arg type="s" direction="in" /> \
    <arg type="s" direction="in" /> \
    <arg type="d" direction="in" /> \
    <arg type="d" direction="in" /> \
</method> \
</interface> \
</node>';

const OSDInterface = new Lang.Class({
    Name: 'OSDInterface',

    _init: function () {
        this._dbusImpl = Gio.DBusExportedObject.wrapJSObject(DBusListener, this);
        this._dbusImpl.export(Gio.DBus.session, '/codes/merritt/OSDInterface');
    },

    /** @param string iconName */
    /** @param string label */
    /** @param double level */
    /** @param double maxLevel */
    showOSD: function (iconName, label, level, maxLevel) {
        let gicon = Gio.icon_new_for_string(iconName);
        if ( label === '' ) label = undefined;
        // https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/osdWindow.js#L174
        Main.osdWindowManager.show(-1, gicon, label, level, maxLevel);
    }
});
