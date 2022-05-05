import * as Gjs from "./Gjs";
import * as Atk10 from "./Atk-1.0";
import * as Atspi20 from "./Atspi-2.0";
import * as Cally10 from "./Cally-1.0";
import * as CloudProviders03 from "./CloudProviders-0.3";
import * as Clutter10 from "./Clutter-1.0";
import * as ClutterGdk10 from "./ClutterGdk-1.0";
import * as ClutterX1110 from "./ClutterX11-1.0";
import * as Cogl10 from "./Cogl-1.0";
import * as CoglPango10 from "./CoglPango-1.0";
import * as DBus10 from "./DBus-1.0";
import * as DBusGLib10 from "./DBusGLib-1.0";
import * as GIRepository20 from "./GIRepository-2.0";
import * as GL10 from "./GL-1.0";
import * as GLib20 from "./GLib-2.0";
import * as GModule20 from "./GModule-2.0";
import * as GObject20 from "./GObject-2.0";
import * as Gda50 from "./Gda-5.0";
import * as Gdk30 from "./Gdk-3.0";
import * as GdkPixbuf20 from "./GdkPixbuf-2.0";
import * as GdkPixdata20 from "./GdkPixdata-2.0";
import * as GdkX1130 from "./GdkX11-3.0";
import * as Gio20 from "./Gio-2.0";
import * as Gst10 from "./Gst-1.0";
import * as GstBase10 from "./GstBase-1.0";
import * as GstCheck10 from "./GstCheck-1.0";
import * as GstController10 from "./GstController-1.0";
import * as GstNet10 from "./GstNet-1.0";
import * as Gtk30 from "./Gtk-3.0";
import * as HarfBuzz00 from "./HarfBuzz-0.0";
import * as ICal30 from "./ICal-3.0";
import * as ICalGLib30 from "./ICalGLib-3.0";
import * as JavaScriptCore40 from "./JavaScriptCore-4.0";
import * as Json10 from "./Json-1.0";
import * as Pango10 from "./Pango-1.0";
import * as PangoCairo10 from "./PangoCairo-1.0";
import * as PangoFT210 from "./PangoFT2-1.0";
import * as PangoFc10 from "./PangoFc-1.0";
import * as PangoOT10 from "./PangoOT-1.0";
import * as PangoXft10 from "./PangoXft-1.0";
import * as Soup24 from "./Soup-2.4";
import * as SoupGNOME24 from "./SoupGNOME-2.4";
import * as Vulkan10 from "./Vulkan-1.0";
import * as WebKit240 from "./WebKit2-4.0";
import * as WebKit2WebExtension40 from "./WebKit2WebExtension-4.0";
import * as Cairo10 from "./cairo-1.0";
import * as Fontconfig20 from "./fontconfig-2.0";
import * as Freetype220 from "./freetype2-2.0";
import * as Libxml220 from "./libxml2-2.0";
import * as Win3210 from "./win32-1.0";
import * as Xfixes40 from "./xfixes-4.0";
import * as Xft20 from "./xft-2.0";
import * as Xlib20 from "./xlib-2.0";
import * as Xrandr13 from "./xrandr-1.3";


declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]
    const imports: typeof Gjs & {
        [key: string]: any
        gi: {
          Atk: typeof Atk10
          Atspi: typeof Atspi20
          Cally: typeof Cally10
          CloudProviders: typeof CloudProviders03
          Clutter: typeof Clutter10
          ClutterGdk: typeof ClutterGdk10
          ClutterX11: typeof ClutterX1110
          Cogl: typeof Cogl10
          CoglPango: typeof CoglPango10
          DBus: typeof DBus10
          DBusGLib: typeof DBusGLib10
          GIRepository: typeof GIRepository20
          GL: typeof GL10
          GLib: typeof GLib20
          GModule: typeof GModule20
          GObject: typeof GObject20
          Gda: typeof Gda50
          Gdk: typeof Gdk30
          GdkPixbuf: typeof GdkPixbuf20
          GdkPixdata: typeof GdkPixdata20
          GdkX11: typeof GdkX1130
          Gio: typeof Gio20
          Gst: typeof Gst10
          GstBase: typeof GstBase10
          GstCheck: typeof GstCheck10
          GstController: typeof GstController10
          GstNet: typeof GstNet10
          Gtk: typeof Gtk30
          HarfBuzz: typeof HarfBuzz00
          ICal: typeof ICal30
          ICalGLib: typeof ICalGLib30
          JavaScriptCore: typeof JavaScriptCore40
          Json: typeof Json10
          Pango: typeof Pango10
          PangoCairo: typeof PangoCairo10
          PangoFT2: typeof PangoFT210
          PangoFc: typeof PangoFc10
          PangoOT: typeof PangoOT10
          PangoXft: typeof PangoXft10
          Soup: typeof Soup24
          SoupGNOME: typeof SoupGNOME24
          Vulkan: typeof Vulkan10
          WebKit2: typeof WebKit240
          WebKit2WebExtension: typeof WebKit2WebExtension40
          cairo: typeof Cairo10
          fontconfig: typeof Fontconfig20
          freetype2: typeof Freetype220
          libxml2: typeof Libxml220
          win32: typeof Win3210
          xfixes: typeof Xfixes40
          xft: typeof Xft20
          xlib: typeof Xlib20
          xrandr: typeof Xrandr13
        }
        versions: {
            Atk: string
            Atspi: string
            Cally: string
            CloudProviders: string
            Clutter: string
            ClutterGdk: string
            ClutterX11: string
            Cogl: string
            CoglPango: string
            DBus: string
            DBusGLib: string
            GIRepository: string
            GL: string
            GLib: string
            GModule: string
            GObject: string
            Gda: string
            Gdk: string
            GdkPixbuf: string
            GdkPixdata: string
            GdkX11: string
            Gio: string
            Gst: string
            GstBase: string
            GstCheck: string
            GstController: string
            GstNet: string
            Gtk: string
            HarfBuzz: string
            ICal: string
            ICalGLib: string
            JavaScriptCore: string
            Json: string
            Pango: string
            PangoCairo: string
            PangoFT2: string
            PangoFc: string
            PangoOT: string
            PangoXft: string
            Soup: string
            SoupGNOME: string
            Vulkan: string
            WebKit2: string
            WebKit2WebExtension: string
            cairo: string
            fontconfig: string
            freetype2: string
            libxml2: string
            win32: string
            xfixes: string
            xft: string
            xlib: string
            xrandr: string
        }
        searchPath: string[];
    }
}

export { imports }
