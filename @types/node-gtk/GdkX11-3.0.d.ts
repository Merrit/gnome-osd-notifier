/**
 * GdkX11-3.0
 */

/// <reference types="node" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />

declare namespace GdkX11 {

export function x11AtomToXatom(atom: Gdk.Atom): xlib.Atom
export function x11AtomToXatomForDisplay(display: X11Display, atom: Gdk.Atom): xlib.Atom
export function x11DeviceGetId(device: X11DeviceCore): number
export function x11DeviceManagerLookup(deviceManager: X11DeviceManagerCore, deviceId: number): X11DeviceCore | null
export function x11FreeCompoundText(ctext: number): void
export function x11FreeTextList(list: string): void
export function x11GetDefaultRootXwindow(): xlib.Window
export function x11GetDefaultScreen(): number
export function x11GetDefaultXdisplay(): xlib.Display
export function x11GetParentRelativePattern(): cairo.Pattern
export function x11GetServerTime(window: X11Window): number
export function x11GetXatomByName(atomName: string): xlib.Atom
export function x11GetXatomByNameForDisplay(display: X11Display, atomName: string): xlib.Atom
export function x11GetXatomName(xatom: xlib.Atom): string
export function x11GetXatomNameForDisplay(display: X11Display, xatom: xlib.Atom): string
export function x11GrabServer(): void
export function x11LookupXdisplay(xdisplay: xlib.Display): X11Display
export function x11RegisterStandardEventType(display: X11Display, eventBase: number, nEvents: number): void
export function x11SetSmClientId(smClientId?: string | null): void
export function x11UngrabServer(): void
export function x11XatomToAtom(xatom: xlib.Atom): Gdk.Atom
export function x11XatomToAtomForDisplay(display: X11Display, xatom: xlib.Atom): Gdk.Atom
export interface X11AppLaunchContext_ConstructProps extends Gdk.AppLaunchContext_ConstructProps {
}
export class X11AppLaunchContext {
    /* Fields of Gio.AppLaunchContext */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk.AppLaunchContext */
    setDesktop(desktop: number): void
    setDisplay(display: Gdk.Display): void
    setIcon(icon?: Gio.Icon | null): void
    setIconName(iconName?: string | null): void
    setScreen(screen: Gdk.Screen): void
    setTimestamp(timestamp: number): void
    /* Methods of Gio.AppLaunchContext */
    getDisplay(info: Gio.AppInfo, files: Gio.File[]): string | null
    getEnvironment(): string[]
    getStartupNotifyId(info: Gio.AppInfo, files: Gio.File[]): string | null
    launchFailed(startupNotifyId: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gio.AppLaunchContext */
    vfuncGetDisplay(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfuncGetStartupNotifyId(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfuncLaunchFailed(startupNotifyId: string): void
    vfuncLaunched(info: Gio.AppInfo, platformData: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: (($obj: X11AppLaunchContext, startupNotifyId: string) => void)): number
    connect_after(sigName: "launch-failed", callback: (($obj: X11AppLaunchContext, startupNotifyId: string) => void)): number
    emit(sigName: "launch-failed", startupNotifyId: string): void
    on(sigName: "launch-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "launch-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "launch-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "launched", callback: (($obj: X11AppLaunchContext, info: Gio.AppInfo, platformData: GLib.Variant) => void)): number
    connect_after(sigName: "launched", callback: (($obj: X11AppLaunchContext, info: Gio.AppInfo, platformData: GLib.Variant) => void)): number
    emit(sigName: "launched", info: Gio.AppInfo, platformData: GLib.Variant): void
    on(sigName: "launched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "launched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "launched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11AppLaunchContext_ConstructProps)
    _init (config?: X11AppLaunchContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Cursor_ConstructProps extends Gdk.Cursor_ConstructProps {
}
export class X11Cursor {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11.X11Cursor */
    getXcursor(): xlib.Cursor
    getXdisplay(): xlib.Display
    /* Methods of Gdk.Cursor */
    getCursorType(): Gdk.CursorType
    getDisplay(): Gdk.Display
    getImage(): GdkPixbuf.Pixbuf | null
    getSurface(): [ /* returnType */ cairo.Surface | null, /* xHot */ number | null, /* yHot */ number | null ]
    ref(): Gdk.Cursor
    unref(): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Cursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11Cursor_ConstructProps)
    _init (config?: X11Cursor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11DeviceCore_ConstructProps extends Gdk.Device_ConstructProps {
}
export class X11DeviceCore {
    /* Properties of Gdk.Device */
    readonly associatedDevice: Gdk.Device
    readonly axes: Gdk.AxisFlags
    inputMode: Gdk.InputMode
    readonly nAxes: number
    seat: Gdk.Seat
    readonly tool: Gdk.DeviceTool
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk.Device */
    getAssociatedDevice(): Gdk.Device | null
    getAxes(): Gdk.AxisFlags
    getAxisUse(index: number): Gdk.AxisUse
    getDeviceType(): Gdk.DeviceType
    getDisplay(): Gdk.Display
    getHasCursor(): boolean
    getKey(index: number): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ Gdk.ModifierType ]
    getLastEventWindow(): Gdk.Window | null
    getMode(): Gdk.InputMode
    getNAxes(): number
    getNKeys(): number
    getName(): string
    getPosition(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null ]
    getPositionDouble(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null ]
    getProductId(): string | null
    getSeat(): Gdk.Seat
    getSource(): Gdk.InputSource
    getVendorId(): string | null
    getWindowAtPosition(): [ /* returnType */ Gdk.Window | null, /* winX */ number | null, /* winY */ number | null ]
    getWindowAtPositionDouble(): [ /* returnType */ Gdk.Window | null, /* winX */ number | null, /* winY */ number | null ]
    grab(window: Gdk.Window, grabOwnership: Gdk.GrabOwnership, ownerEvents: boolean, eventMask: Gdk.EventMask, cursor: Gdk.Cursor | null, time: number): Gdk.GrabStatus
    listAxes(): Gdk.Atom[]
    listSlaveDevices(): Gdk.Device[] | null
    setAxisUse(index: number, use: Gdk.AxisUse): void
    setKey(index: number, keyval: number, modifiers: Gdk.ModifierType): void
    setMode(mode: Gdk.InputMode): boolean
    ungrab(time: number): void
    warp(screen: Gdk.Screen, x: number, y: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Device */
    connect(sigName: "changed", callback: (($obj: X11DeviceCore) => void)): number
    connect_after(sigName: "changed", callback: (($obj: X11DeviceCore) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "tool-changed", callback: (($obj: X11DeviceCore, tool: Gdk.DeviceTool) => void)): number
    connect_after(sigName: "tool-changed", callback: (($obj: X11DeviceCore, tool: Gdk.DeviceTool) => void)): number
    emit(sigName: "tool-changed", tool: Gdk.DeviceTool): void
    on(sigName: "tool-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "tool-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "tool-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::associated-device", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated-device", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::axes", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::axes", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-mode", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-axes", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seat", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tool", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11DeviceCore_ConstructProps)
    _init (config?: X11DeviceCore_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11DeviceManagerCore_ConstructProps extends Gdk.DeviceManager_ConstructProps {
}
export class X11DeviceManagerCore {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk.DeviceManager */
    getClientPointer(): Gdk.Device
    getDisplay(): Gdk.Display | null
    listDevices(type: Gdk.DeviceType): Gdk.Device[]
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.DeviceManager */
    connect(sigName: "device-added", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    emit(sigName: "device-added", device: Gdk.Device): void
    on(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-changed", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-changed", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    emit(sigName: "device-changed", device: Gdk.Device): void
    on(sigName: "device-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-removed", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    emit(sigName: "device-removed", device: Gdk.Device): void
    on(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11DeviceManagerCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceManagerCore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11DeviceManagerCore_ConstructProps)
    _init (config?: X11DeviceManagerCore_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11DeviceManagerXI2_ConstructProps extends X11DeviceManagerCore_ConstructProps {
    major?: number
    minor?: number
    opcode?: number
}
export class X11DeviceManagerXI2 {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk.DeviceManager */
    getClientPointer(): Gdk.Device
    getDisplay(): Gdk.Display | null
    listDevices(type: Gdk.DeviceType): Gdk.Device[]
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.DeviceManager */
    connect(sigName: "device-added", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    emit(sigName: "device-added", device: Gdk.Device): void
    on(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-changed", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-changed", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    emit(sigName: "device-changed", device: Gdk.Device): void
    on(sigName: "device-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-removed", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    emit(sigName: "device-removed", device: Gdk.Device): void
    on(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11DeviceManagerXI2_ConstructProps)
    _init (config?: X11DeviceManagerXI2_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11DeviceXI2_ConstructProps extends Gdk.Device_ConstructProps {
    deviceId?: number
}
export class X11DeviceXI2 {
    /* Properties of Gdk.Device */
    readonly associatedDevice: Gdk.Device
    readonly axes: Gdk.AxisFlags
    inputMode: Gdk.InputMode
    readonly nAxes: number
    seat: Gdk.Seat
    readonly tool: Gdk.DeviceTool
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk.Device */
    getAssociatedDevice(): Gdk.Device | null
    getAxes(): Gdk.AxisFlags
    getAxisUse(index: number): Gdk.AxisUse
    getDeviceType(): Gdk.DeviceType
    getDisplay(): Gdk.Display
    getHasCursor(): boolean
    getKey(index: number): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ Gdk.ModifierType ]
    getLastEventWindow(): Gdk.Window | null
    getMode(): Gdk.InputMode
    getNAxes(): number
    getNKeys(): number
    getName(): string
    getPosition(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null ]
    getPositionDouble(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null ]
    getProductId(): string | null
    getSeat(): Gdk.Seat
    getSource(): Gdk.InputSource
    getVendorId(): string | null
    getWindowAtPosition(): [ /* returnType */ Gdk.Window | null, /* winX */ number | null, /* winY */ number | null ]
    getWindowAtPositionDouble(): [ /* returnType */ Gdk.Window | null, /* winX */ number | null, /* winY */ number | null ]
    grab(window: Gdk.Window, grabOwnership: Gdk.GrabOwnership, ownerEvents: boolean, eventMask: Gdk.EventMask, cursor: Gdk.Cursor | null, time: number): Gdk.GrabStatus
    listAxes(): Gdk.Atom[]
    listSlaveDevices(): Gdk.Device[] | null
    setAxisUse(index: number, use: Gdk.AxisUse): void
    setKey(index: number, keyval: number, modifiers: Gdk.ModifierType): void
    setMode(mode: Gdk.InputMode): boolean
    ungrab(time: number): void
    warp(screen: Gdk.Screen, x: number, y: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Device */
    connect(sigName: "changed", callback: (($obj: X11DeviceXI2) => void)): number
    connect_after(sigName: "changed", callback: (($obj: X11DeviceXI2) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "tool-changed", callback: (($obj: X11DeviceXI2, tool: Gdk.DeviceTool) => void)): number
    connect_after(sigName: "tool-changed", callback: (($obj: X11DeviceXI2, tool: Gdk.DeviceTool) => void)): number
    emit(sigName: "tool-changed", tool: Gdk.DeviceTool): void
    on(sigName: "tool-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "tool-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "tool-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::associated-device", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated-device", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-mode", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seat", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tool", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11DeviceXI2_ConstructProps)
    _init (config?: X11DeviceXI2_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Display_ConstructProps extends Gdk.Display_ConstructProps {
}
export class X11Display {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11.X11Display */
    errorTrapPop(): number
    errorTrapPopIgnored(): void
    errorTrapPush(): void
    getStartupNotificationId(): string
    getUserTime(): number
    getXdisplay(): xlib.Display
    grab(): void
    setCursorTheme(theme: string | null, size: number): void
    setStartupNotificationId(startupId: string): void
    setWindowScale(scale: number): void
    stringToCompoundText(str: string): [ /* returnType */ number, /* encoding */ Gdk.Atom, /* format */ number, /* ctext */ any ]
    textPropertyToTextList(encoding: Gdk.Atom, format: number, text: number, length: number, list: string): number
    ungrab(): void
    utf8ToCompoundText(str: string): [ /* returnType */ boolean, /* encoding */ Gdk.Atom, /* format */ number, /* ctext */ any ]
    /* Methods of Gdk.Display */
    beep(): void
    close(): void
    deviceIsGrabbed(device: Gdk.Device): boolean
    flush(): void
    getAppLaunchContext(): Gdk.AppLaunchContext
    getDefaultCursorSize(): number
    getDefaultGroup(): Gdk.Window
    getDefaultScreen(): Gdk.Screen
    getDefaultSeat(): Gdk.Seat
    getDeviceManager(): Gdk.DeviceManager | null
    getEvent(): Gdk.Event | null
    getMaximalCursorSize(): [ /* width */ number, /* height */ number ]
    getMonitor(monitorNum: number): Gdk.Monitor | null
    getMonitorAtPoint(x: number, y: number): Gdk.Monitor
    getMonitorAtWindow(window: Gdk.Window): Gdk.Monitor
    getNMonitors(): number
    getNScreens(): number
    getName(): string
    getPointer(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    getPrimaryMonitor(): Gdk.Monitor | null
    getScreen(screenNum: number): Gdk.Screen
    getWindowAtPointer(): [ /* returnType */ Gdk.Window | null, /* winX */ number | null, /* winY */ number | null ]
    hasPending(): boolean
    isClosed(): boolean
    keyboardUngrab(time: number): void
    listDevices(): Gdk.Device[]
    listSeats(): Gdk.Seat[]
    notifyStartupComplete(startupId: string): void
    peekEvent(): Gdk.Event | null
    pointerIsGrabbed(): boolean
    pointerUngrab(time: number): void
    putEvent(event: Gdk.Event): void
    requestSelectionNotification(selection: Gdk.Atom): boolean
    setDoubleClickDistance(distance: number): void
    setDoubleClickTime(msec: number): void
    storeClipboard(clipboardWindow: Gdk.Window, time: number, targets: Gdk.Atom[] | null): void
    supportsClipboardPersistence(): boolean
    supportsComposite(): boolean
    supportsCursorAlpha(): boolean
    supportsCursorColor(): boolean
    supportsInputShapes(): boolean
    supportsSelectionNotification(): boolean
    supportsShapes(): boolean
    sync(): void
    warpPointer(screen: Gdk.Screen, x: number, y: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Display */
    connect(sigName: "closed", callback: (($obj: X11Display, isError: boolean) => void)): number
    connect_after(sigName: "closed", callback: (($obj: X11Display, isError: boolean) => void)): number
    emit(sigName: "closed", isError: boolean): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "monitor-added", callback: (($obj: X11Display, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "monitor-added", callback: (($obj: X11Display, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "monitor-added", monitor: Gdk.Monitor): void
    on(sigName: "monitor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "monitor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "monitor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "monitor-removed", callback: (($obj: X11Display, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "monitor-removed", callback: (($obj: X11Display, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "monitor-removed", monitor: Gdk.Monitor): void
    on(sigName: "monitor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "monitor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "monitor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "opened", callback: (($obj: X11Display) => void)): number
    connect_after(sigName: "opened", callback: (($obj: X11Display) => void)): number
    emit(sigName: "opened"): void
    on(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "seat-added", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-added", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-added", seat: Gdk.Seat): void
    on(sigName: "seat-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "seat-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "seat-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "seat-removed", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-removed", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-removed", seat: Gdk.Seat): void
    on(sigName: "seat-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "seat-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "seat-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11Display_ConstructProps)
    _init (config?: X11Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getGlxVersion(display: Gdk.Display): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    static $gtype: GObject.Type
}
export interface X11DisplayManager_ConstructProps extends Gdk.DisplayManager_ConstructProps {
}
export class X11DisplayManager {
    /* Properties of Gdk.DisplayManager */
    defaultDisplay: Gdk.Display
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk.DisplayManager */
    getDefaultDisplay(): Gdk.Display | null
    listDisplays(): Gdk.Display[]
    openDisplay(name: string): Gdk.Display | null
    setDefaultDisplay(display: Gdk.Display): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.DisplayManager */
    connect(sigName: "display-opened", callback: (($obj: X11DisplayManager, display: Gdk.Display) => void)): number
    connect_after(sigName: "display-opened", callback: (($obj: X11DisplayManager, display: Gdk.Display) => void)): number
    emit(sigName: "display-opened", display: Gdk.Display): void
    on(sigName: "display-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "display-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "display-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DisplayManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-display", callback: (($obj: X11DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-display", callback: (($obj: X11DisplayManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11DisplayManager_ConstructProps)
    _init (config?: X11DisplayManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11DragContext_ConstructProps extends Gdk.DragContext_ConstructProps {
}
export class X11DragContext {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk.DragContext */
    getActions(): Gdk.DragAction
    getDestWindow(): Gdk.Window
    getDevice(): Gdk.Device
    getDragWindow(): Gdk.Window | null
    getProtocol(): Gdk.DragProtocol
    getSelectedAction(): Gdk.DragAction
    getSourceWindow(): Gdk.Window
    getSuggestedAction(): Gdk.DragAction
    listTargets(): Gdk.Atom[]
    manageDnd(ipcWindow: Gdk.Window, actions: Gdk.DragAction): boolean
    setDevice(device: Gdk.Device): void
    setHotspot(hotX: number, hotY: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.DragContext */
    connect(sigName: "action-changed", callback: (($obj: X11DragContext, action: Gdk.DragAction) => void)): number
    connect_after(sigName: "action-changed", callback: (($obj: X11DragContext, action: Gdk.DragAction) => void)): number
    emit(sigName: "action-changed", action: Gdk.DragAction): void
    on(sigName: "action-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cancel", callback: (($obj: X11DragContext, reason: Gdk.DragCancelReason) => void)): number
    connect_after(sigName: "cancel", callback: (($obj: X11DragContext, reason: Gdk.DragCancelReason) => void)): number
    emit(sigName: "cancel", reason: Gdk.DragCancelReason): void
    on(sigName: "cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dnd-finished", callback: (($obj: X11DragContext) => void)): number
    connect_after(sigName: "dnd-finished", callback: (($obj: X11DragContext) => void)): number
    emit(sigName: "dnd-finished"): void
    on(sigName: "dnd-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dnd-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dnd-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drop-performed", callback: (($obj: X11DragContext, time: number) => void)): number
    connect_after(sigName: "drop-performed", callback: (($obj: X11DragContext, time: number) => void)): number
    emit(sigName: "drop-performed", time: number): void
    on(sigName: "drop-performed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drop-performed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drop-performed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11DragContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DragContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11DragContext_ConstructProps)
    _init (config?: X11DragContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11GLContext_ConstructProps extends Gdk.GLContext_ConstructProps {
}
export class X11GLContext {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk.GLContext */
    getDebugEnabled(): boolean
    getDisplay(): Gdk.Display | null
    getForwardCompatible(): boolean
    getRequiredVersion(): [ /* major */ number | null, /* minor */ number | null ]
    getSharedContext(): Gdk.GLContext | null
    getUseEs(): boolean
    getVersion(): [ /* major */ number, /* minor */ number ]
    getWindow(): Gdk.Window | null
    isLegacy(): boolean
    makeCurrent(): void
    realize(): boolean
    setDebugEnabled(enabled: boolean): void
    setForwardCompatible(compatible: boolean): void
    setRequiredVersion(major: number, minor: number): void
    setUseEs(useEs: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11GLContext_ConstructProps)
    _init (config?: X11GLContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Keymap_ConstructProps extends Gdk.Keymap_ConstructProps {
}
export class X11Keymap {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11.X11Keymap */
    getGroupForState(state: number): number
    keyIsModifier(keycode: number): boolean
    /* Methods of Gdk.Keymap */
    addVirtualModifiers(state: Gdk.ModifierType): /* state */ Gdk.ModifierType
    getCapsLockState(): boolean
    getDirection(): Pango.Direction
    getEntriesForKeycode(hardwareKeycode: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] | null, /* keyvals */ number[] | null ]
    getEntriesForKeyval(keyval: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] ]
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierState(): number
    getNumLockState(): boolean
    getScrollLockState(): boolean
    haveBidiLayouts(): boolean
    lookupKey(key: Gdk.KeymapKey): number
    mapVirtualModifiers(state: Gdk.ModifierType): [ /* returnType */ boolean, /* state */ Gdk.ModifierType ]
    translateKeyboardState(hardwareKeycode: number, state: Gdk.ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effectiveGroup */ number | null, /* level */ number | null, /* consumedModifiers */ Gdk.ModifierType | null ]
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Keymap */
    connect(sigName: "direction-changed", callback: (($obj: X11Keymap) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: X11Keymap) => void)): number
    emit(sigName: "direction-changed"): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keys-changed", callback: (($obj: X11Keymap) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: X11Keymap) => void)): number
    emit(sigName: "keys-changed"): void
    on(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-changed", callback: (($obj: X11Keymap) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: X11Keymap) => void)): number
    emit(sigName: "state-changed"): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Keymap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Keymap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11Keymap_ConstructProps)
    _init (config?: X11Keymap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Monitor_ConstructProps extends Gdk.Monitor_ConstructProps {
}
export class X11Monitor {
    /* Properties of Gdk.Monitor */
    readonly geometry: Gdk.Rectangle
    readonly heightMm: number
    readonly manufacturer: string
    readonly model: string
    readonly refreshRate: number
    readonly scaleFactor: number
    readonly subpixelLayout: Gdk.SubpixelLayout
    readonly widthMm: number
    readonly workarea: Gdk.Rectangle
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk.Monitor */
    getDisplay(): Gdk.Display
    getGeometry(): /* geometry */ Gdk.Rectangle
    getHeightMm(): number
    getManufacturer(): string | null
    getModel(): string | null
    getRefreshRate(): number
    getScaleFactor(): number
    getSubpixelLayout(): Gdk.SubpixelLayout
    getWidthMm(): number
    getWorkarea(): /* workarea */ Gdk.Rectangle
    isPrimary(): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Monitor */
    connect(sigName: "invalidate", callback: (($obj: X11Monitor) => void)): number
    connect_after(sigName: "invalidate", callback: (($obj: X11Monitor) => void)): number
    emit(sigName: "invalidate"): void
    on(sigName: "invalidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "invalidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "invalidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::geometry", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manufacturer", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-rate", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subpixel-layout", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::workarea", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workarea", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::workarea", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::workarea", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::workarea", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11Monitor_ConstructProps)
    _init (config?: X11Monitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getOutput(monitor: Gdk.Monitor): xlib.XID
    static $gtype: GObject.Type
}
export interface X11Screen_ConstructProps extends Gdk.Screen_ConstructProps {
}
export class X11Screen {
    /* Properties of Gdk.Screen */
    fontOptions: object
    resolution: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11.X11Screen */
    getCurrentDesktop(): number
    getMonitorOutput(monitorNum: number): xlib.XID
    getNumberOfDesktops(): number
    getScreenNumber(): number
    getWindowManagerName(): string
    getXscreen(): xlib.Screen
    lookupVisual(xvisualid: xlib.VisualID): X11Visual
    supportsNetWmHint(property: Gdk.Atom): boolean
    /* Methods of Gdk.Screen */
    getActiveWindow(): Gdk.Window | null
    getDisplay(): Gdk.Display
    getFontOptions(): cairo.FontOptions | null
    getHeight(): number
    getHeightMm(): number
    getMonitorAtPoint(x: number, y: number): number
    getMonitorAtWindow(window: Gdk.Window): number
    getMonitorGeometry(monitorNum: number): /* dest */ Gdk.Rectangle | null
    getMonitorHeightMm(monitorNum: number): number
    getMonitorPlugName(monitorNum: number): string | null
    getMonitorScaleFactor(monitorNum: number): number
    getMonitorWidthMm(monitorNum: number): number
    getMonitorWorkarea(monitorNum: number): /* dest */ Gdk.Rectangle | null
    getNMonitors(): number
    getNumber(): number
    getPrimaryMonitor(): number
    getResolution(): number
    getRgbaVisual(): Gdk.Visual | null
    getRootWindow(): Gdk.Window
    getSetting(name: string, value: any): boolean
    getSystemVisual(): Gdk.Visual
    getToplevelWindows(): Gdk.Window[]
    getWidth(): number
    getWidthMm(): number
    getWindowStack(): Gdk.Window[] | null
    isComposited(): boolean
    listVisuals(): Gdk.Visual[]
    makeDisplayName(): string
    setFontOptions(options?: cairo.FontOptions | null): void
    setResolution(dpi: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GdkX11.X11Screen */
    connect(sigName: "window-manager-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "window-manager-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "window-manager-changed"): void
    on(sigName: "window-manager-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-manager-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-manager-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdk.Screen */
    connect(sigName: "composited-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "composited-changed"): void
    on(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "monitors-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "monitors-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "monitors-changed"): void
    on(sigName: "monitors-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "monitors-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "monitors-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "size-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "size-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "size-changed"): void
    on(sigName: "size-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-options", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-options", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11Screen_ConstructProps)
    _init (config?: X11Screen_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Visual_ConstructProps extends Gdk.Visual_ConstructProps {
}
export class X11Visual {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11.X11Visual */
    getXvisual(): xlib.Visual
    /* Methods of Gdk.Visual */
    getBitsPerRgb(): number
    getBluePixelDetails(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    getByteOrder(): Gdk.ByteOrder
    getColormapSize(): number
    getDepth(): number
    getGreenPixelDetails(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    getRedPixelDetails(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    getScreen(): Gdk.Screen
    getVisualType(): Gdk.VisualType
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Visual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Visual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11Visual_ConstructProps)
    _init (config?: X11Visual_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Window_ConstructProps extends Gdk.Window_ConstructProps {
}
export class X11Window {
    /* Properties of Gdk.Window */
    cursor: Gdk.Cursor
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11.X11Window */
    getDesktop(): number
    getXid(): xlib.Window
    moveToCurrentDesktop(): void
    moveToDesktop(desktop: number): void
    setFrameExtents(left: number, right: number, top: number, bottom: number): void
    setFrameSyncEnabled(frameSyncEnabled: boolean): void
    setHideTitlebarWhenMaximized(hideTitlebarWhenMaximized: boolean): void
    setThemeVariant(variant: string): void
    setUserTime(timestamp: number): void
    setUtf8Property(name: string, value?: string | null): void
    /* Methods of Gdk.Window */
    beep(): void
    beginDrawFrame(region: cairo.Region): Gdk.DrawingContext
    beginMoveDrag(button: number, rootX: number, rootY: number, timestamp: number): void
    beginMoveDragForDevice(device: Gdk.Device, button: number, rootX: number, rootY: number, timestamp: number): void
    beginPaintRect(rectangle: Gdk.Rectangle): void
    beginPaintRegion(region: cairo.Region): void
    beginResizeDrag(edge: Gdk.WindowEdge, button: number, rootX: number, rootY: number, timestamp: number): void
    beginResizeDragForDevice(edge: Gdk.WindowEdge, device: Gdk.Device, button: number, rootX: number, rootY: number, timestamp: number): void
    configureFinished(): void
    coordsFromParent(parentX: number, parentY: number): [ /* x */ number | null, /* y */ number | null ]
    coordsToParent(x: number, y: number): [ /* parentX */ number | null, /* parentY */ number | null ]
    createGlContext(): Gdk.GLContext
    createSimilarImageSurface(format: cairo.Format, width: number, height: number, scale: number): cairo.Surface
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    deiconify(): void
    destroy(): void
    destroyNotify(): void
    enableSynchronizedConfigure(): void
    endDrawFrame(context: Gdk.DrawingContext): void
    endPaint(): void
    ensureNative(): boolean
    flush(): void
    focus(timestamp: number): void
    freezeToplevelUpdatesLibgtkOnly(): void
    freezeUpdates(): void
    fullscreen(): void
    fullscreenOnMonitor(monitor: number): void
    geometryChanged(): void
    getAcceptFocus(): boolean
    getBackgroundPattern(): cairo.Pattern | null
    getChildren(): Gdk.Window[]
    getChildrenWithUserData(userData?: object | null): Gdk.Window[]
    getClipRegion(): cairo.Region
    getComposited(): boolean
    getCursor(): Gdk.Cursor | null
    getDecorations(): [ /* returnType */ boolean, /* decorations */ Gdk.WMDecoration ]
    getDeviceCursor(device: Gdk.Device): Gdk.Cursor | null
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDevicePosition(device: Gdk.Device): [ /* returnType */ Gdk.Window | null, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    getDevicePositionDouble(device: Gdk.Device): [ /* returnType */ Gdk.Window | null, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    getDisplay(): Gdk.Display
    getDragProtocol(): [ /* returnType */ Gdk.DragProtocol, /* target */ Gdk.Window | null ]
    getEffectiveParent(): Gdk.Window
    getEffectiveToplevel(): Gdk.Window
    getEventCompression(): boolean
    getEvents(): Gdk.EventMask
    getFocusOnMap(): boolean
    getFrameClock(): Gdk.FrameClock
    getFrameExtents(): /* rect */ Gdk.Rectangle
    getFullscreenMode(): Gdk.FullscreenMode
    getGeometry(): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getGroup(): Gdk.Window
    getHeight(): number
    getModalHint(): boolean
    getOrigin(): [ /* returnType */ number, /* x */ number | null, /* y */ number | null ]
    getParent(): Gdk.Window
    getPassThrough(): boolean
    getPointer(): [ /* returnType */ Gdk.Window | null, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    getRootCoords(x: number, y: number): [ /* rootX */ number, /* rootY */ number ]
    getRootOrigin(): [ /* x */ number, /* y */ number ]
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSourceEvents(source: Gdk.InputSource): Gdk.EventMask
    getState(): Gdk.WindowState
    getSupportMultidevice(): boolean
    getToplevel(): Gdk.Window
    getTypeHint(): Gdk.WindowTypeHint
    getUpdateArea(): cairo.Region
    getUserData(): /* data */ object | null
    getVisibleRegion(): cairo.Region
    getVisual(): Gdk.Visual
    getWidth(): number
    getWindowType(): Gdk.WindowType
    hasNative(): boolean
    hide(): void
    iconify(): void
    inputShapeCombineRegion(shapeRegion: cairo.Region, offsetX: number, offsetY: number): void
    invalidateMaybeRecurse(region: cairo.Region, childFunc?: Gdk.WindowChildFunc | null): void
    invalidateRect(rect: Gdk.Rectangle | null, invalidateChildren: boolean): void
    invalidateRegion(region: cairo.Region, invalidateChildren: boolean): void
    isDestroyed(): boolean
    isInputOnly(): boolean
    isShaped(): boolean
    isViewable(): boolean
    isVisible(): boolean
    lower(): void
    markPaintFromClip(cr: cairo.Context): void
    maximize(): void
    mergeChildInputShapes(): void
    mergeChildShapes(): void
    move(x: number, y: number): void
    moveRegion(region: cairo.Region, dx: number, dy: number): void
    moveResize(x: number, y: number, width: number, height: number): void
    moveToRect(rect: Gdk.Rectangle, rectAnchor: Gdk.Gravity, windowAnchor: Gdk.Gravity, anchorHints: Gdk.AnchorHints, rectAnchorDx: number, rectAnchorDy: number): void
    peekChildren(): Gdk.Window[]
    processUpdates(updateChildren: boolean): void
    raise(): void
    registerDnd(): void
    reparent(newParent: Gdk.Window, x: number, y: number): void
    resize(width: number, height: number): void
    restack(sibling: Gdk.Window | null, above: boolean): void
    scroll(dx: number, dy: number): void
    setAcceptFocus(acceptFocus: boolean): void
    setBackground(color: Gdk.Color): void
    setBackgroundPattern(pattern?: cairo.Pattern | null): void
    setBackgroundRgba(rgba: Gdk.RGBA): void
    setChildInputShapes(): void
    setChildShapes(): void
    setComposited(composited: boolean): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setDecorations(decorations: Gdk.WMDecoration): void
    setDeviceCursor(device: Gdk.Device, cursor: Gdk.Cursor): void
    setDeviceEvents(device: Gdk.Device, eventMask: Gdk.EventMask): void
    setEventCompression(eventCompression: boolean): void
    setEvents(eventMask: Gdk.EventMask): void
    setFocusOnMap(focusOnMap: boolean): void
    setFullscreenMode(mode: Gdk.FullscreenMode): void
    setFunctions(functions: Gdk.WMFunction): void
    setGeometryHints(geometry: Gdk.Geometry, geomMask: Gdk.WindowHints): void
    setGroup(leader?: Gdk.Window | null): void
    setIconList(pixbufs: GdkPixbuf.Pixbuf[]): void
    setIconName(name?: string | null): void
    setKeepAbove(setting: boolean): void
    setKeepBelow(setting: boolean): void
    setModalHint(modal: boolean): void
    setOpacity(opacity: number): void
    setOpaqueRegion(region?: cairo.Region | null): void
    setOverrideRedirect(overrideRedirect: boolean): void
    setPassThrough(passThrough: boolean): void
    setRole(role: string): void
    setShadowWidth(left: number, right: number, top: number, bottom: number): void
    setSkipPagerHint(skipsPager: boolean): void
    setSkipTaskbarHint(skipsTaskbar: boolean): void
    setSourceEvents(source: Gdk.InputSource, eventMask: Gdk.EventMask): void
    setStartupId(startupId: string): void
    setStaticGravities(useStatic: boolean): boolean
    setSupportMultidevice(supportMultidevice: boolean): void
    setTitle(title: string): void
    setTransientFor(parent: Gdk.Window): void
    setTypeHint(hint: Gdk.WindowTypeHint): void
    setUrgencyHint(urgent: boolean): void
    setUserData(userData?: GObject.Object | null): void
    shapeCombineRegion(shapeRegion: cairo.Region | null, offsetX: number, offsetY: number): void
    show(): void
    showUnraised(): void
    showWindowMenu(event: Gdk.Event): boolean
    stick(): void
    thawToplevelUpdatesLibgtkOnly(): void
    thawUpdates(): void
    unfullscreen(): void
    unmaximize(): void
    unstick(): void
    withdraw(): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gdk.Window */
    vfuncCreateSurface(width: number, height: number): cairo.Surface
    vfuncFromEmbedder(embedderX: number, embedderY: number, offscreenX: number, offscreenY: number): void
    vfuncToEmbedder(offscreenX: number, offscreenY: number, embedderX: number, embedderY: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Window */
    connect(sigName: "create-surface", callback: (($obj: X11Window, width: number, height: number) => cairo.Surface)): number
    connect_after(sigName: "create-surface", callback: (($obj: X11Window, width: number, height: number) => cairo.Surface)): number
    emit(sigName: "create-surface", width: number, height: number): void
    on(sigName: "create-surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "create-surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "create-surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "from-embedder", callback: (($obj: X11Window, embedderX: number, embedderY: number) => void)): number
    connect_after(sigName: "from-embedder", callback: (($obj: X11Window, embedderX: number, embedderY: number) => void)): number
    emit(sigName: "from-embedder", embedderX: number, embedderY: number): void
    on(sigName: "from-embedder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "from-embedder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "from-embedder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "moved-to-rect", callback: (($obj: X11Window, flippedRect: object | null, finalRect: object | null, flippedX: boolean, flippedY: boolean) => void)): number
    connect_after(sigName: "moved-to-rect", callback: (($obj: X11Window, flippedRect: object | null, finalRect: object | null, flippedX: boolean, flippedY: boolean) => void)): number
    emit(sigName: "moved-to-rect", flippedRect: object | null, finalRect: object | null, flippedX: boolean, flippedY: boolean): void
    on(sigName: "moved-to-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "moved-to-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "moved-to-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pick-embedded-child", callback: (($obj: X11Window, x: number, y: number) => Gdk.Window | null)): number
    connect_after(sigName: "pick-embedded-child", callback: (($obj: X11Window, x: number, y: number) => Gdk.Window | null)): number
    emit(sigName: "pick-embedded-child", x: number, y: number): void
    on(sigName: "pick-embedded-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pick-embedded-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pick-embedded-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "to-embedder", callback: (($obj: X11Window, offscreenX: number, offscreenY: number) => void)): number
    connect_after(sigName: "to-embedder", callback: (($obj: X11Window, offscreenX: number, offscreenY: number) => void)): number
    emit(sigName: "to-embedder", offscreenX: number, offscreenY: number): void
    on(sigName: "to-embedder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "to-embedder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "to-embedder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: X11Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: X11Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11Window_ConstructProps)
    _init (config?: X11Window_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static foreignNewForDisplay(display: X11Display, window: xlib.Window): X11Window
    static lookupForDisplay(display: X11Display, window: xlib.Window): X11Window
    static $gtype: GObject.Type
}
export abstract class X11AppLaunchContextClass {
    static name: string
}
export abstract class X11CursorClass {
    static name: string
}
export abstract class X11DeviceCoreClass {
    static name: string
}
export abstract class X11DeviceManagerCoreClass {
    static name: string
}
export abstract class X11DeviceManagerXI2Class {
    static name: string
}
export abstract class X11DeviceXI2Class {
    static name: string
}
export abstract class X11DisplayClass {
    static name: string
}
export abstract class X11DisplayManagerClass {
    static name: string
}
export abstract class X11DragContextClass {
    static name: string
}
export abstract class X11GLContextClass {
    static name: string
}
export abstract class X11KeymapClass {
    static name: string
}
export abstract class X11MonitorClass {
    static name: string
}
export abstract class X11ScreenClass {
    static name: string
}
export abstract class X11VisualClass {
    static name: string
}
export abstract class X11WindowClass {
    static name: string
}
}