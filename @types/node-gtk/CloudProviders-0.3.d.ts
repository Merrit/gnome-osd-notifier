/**
 * CloudProviders-0.3
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace CloudProviders {

export enum AccountStatus {
    INVALID,
    IDLE,
    SYNCING,
    ERROR,
}
export const ACCOUNT_DBUS_IFACE: string
export const PROVIDER_DBUS_IFACE: string
export function dbusAccountInterfaceInfo(): Gio.DBusInterfaceInfo
export function dbusAccountOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function dbusProviderInterfaceInfo(): Gio.DBusInterfaceInfo
export function dbusProviderOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export class DbusAccount {
    /* Properties of CloudProviders.DbusAccount */
    icon: string
    name: string
    path: string
    status: number
    statusDetails: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class DbusObject {
    /* Properties of CloudProviders.DbusObject */
    account: DbusAccount
    provider: DbusProvider
    /* Methods of CloudProviders.DbusObject */
    getAccount(): DbusAccount | null
    getProvider(): DbusProvider | null
    /* Methods of Gio.DBusObject */
    getInterface(interfaceName: string): Gio.DBusInterface | null
    getInterfaces(): Gio.DBusInterface[]
    getObjectPath(): string
    /* Virtual methods of Gio.DBusObject */
    vfuncGetInterface(interfaceName: string): Gio.DBusInterface | null
    vfuncGetInterfaces(): Gio.DBusInterface[]
    vfuncGetObjectPath(): string
    vfuncInterfaceAdded(interface: Gio.DBusInterface): void
    vfuncInterfaceRemoved(interface: Gio.DBusInterface): void
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: DbusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DbusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: DbusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DbusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class DbusProvider {
    /* Properties of CloudProviders.DbusProvider */
    name: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export interface Account_ConstructProps extends GObject.Object_ConstructProps {
}
export class Account {
    /* Properties of CloudProviders.Account */
    readonly actionGroup: Gio.ActionGroup
    readonly icon: Gio.Icon
    readonly menuModel: Gio.MenuModel
    readonly name: string
    readonly path: string
    readonly statusDetails: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of CloudProviders.Account */
    getActionGroup(): Gio.ActionGroup
    getIcon(): Gio.Icon
    getMenuModel(): Gio.MenuModel
    getName(): string
    getPath(): string
    getStatus(): AccountStatus
    getStatusDetails(): string
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
    connect(sigName: "notify", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-group", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::menu-model", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-model", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::menu-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::menu-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::menu-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status-details", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-details", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Account_ConstructProps)
    _init (config?: Account_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(proxy: Gio.DBusProxy): Account
    static $gtype: GObject.Type
}
export interface AccountExporter_ConstructProps extends GObject.Object_ConstructProps {
    actionGroup?: Gio.ActionGroup
    busName?: string
    icon?: Gio.Icon
    menuModel?: Gio.MenuModel
    name?: string
    path?: string
    provider?: ProviderExporter
    statusDetails?: string
}
export class AccountExporter {
    /* Properties of CloudProviders.AccountExporter */
    actionGroup: Gio.ActionGroup
    icon: Gio.Icon
    menuModel: Gio.MenuModel
    name: string
    path: string
    statusDetails: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of CloudProviders.AccountExporter */
    setActionGroup(actionGroup: Gio.ActionGroup): void
    setIcon(icon: Gio.Icon): void
    setMenuModel(menuModel: Gio.MenuModel): void
    setName(name: string): void
    setPath(path: string): void
    setStatus(status: AccountStatus): void
    setStatusDetails(statusDetails: string): void
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
    connect(sigName: "notify", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-group", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::menu-model", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-model", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::menu-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::menu-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::menu-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status-details", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-details", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AccountExporter_ConstructProps)
    _init (config?: AccountExporter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(provider: ProviderExporter, busName: string): AccountExporter
    static $gtype: GObject.Type
}
export interface Collector_ConstructProps extends GObject.Object_ConstructProps {
}
export class Collector {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of CloudProviders.Collector */
    getProviders(): Provider[]
    update(): void
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
    /* Signals of CloudProviders.Collector */
    connect(sigName: "providers-changed", callback: (($obj: Collector) => void)): number
    connect_after(sigName: "providers-changed", callback: (($obj: Collector) => void)): number
    emit(sigName: "providers-changed"): void
    on(sigName: "providers-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "providers-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "providers-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Collector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Collector, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Collector_ConstructProps)
    _init (config?: Collector_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dupSingleton(): Collector
    static $gtype: GObject.Type
}
export interface DbusAccountProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    icon?: string
    name?: string
    path?: string
    status?: number
    statusDetails?: string
}
export class DbusAccountProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of CloudProviders.DbusAccount */
    icon: string
    name: string
    path: string
    status: number
    statusDetails: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of CloudProviders.DbusAccountProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: DbusAccountProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DbusAccountProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: DbusAccountProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DbusAccountProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status-details", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-details", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DbusAccountProxy_ConstructProps)
    _init (config?: DbusAccountProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): DbusAccountProxy
    static newForBusFinish(res: Gio.AsyncResult): DbusAccountProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): DbusAccountProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DbusAccountProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): DbusAccountProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DbusAccountProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DbusAccountSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    icon?: string
    name?: string
    path?: string
    status?: number
    statusDetails?: string
}
export class DbusAccountSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of CloudProviders.DbusAccount */
    icon: string
    name: string
    path: string
    status: number
    statusDetails: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of CloudProviders.DbusAccountSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: DbusAccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DbusAccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status-details", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-details", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DbusAccountSkeleton_ConstructProps)
    _init (config?: DbusAccountSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbusAccountSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface DbusObjectManagerClient_ConstructProps extends Gio.DBusObjectManagerClient_ConstructProps {
}
export class DbusObjectManagerClient {
    /* Properties of Gio.DBusObjectManagerClient */
    readonly nameOwner: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectManagerClient */
    getConnection(): Gio.DBusConnection
    getFlags(): Gio.DBusObjectManagerClientFlags
    getName(): string
    getNameOwner(): string | null
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusObjectManager */
    getInterface(objectPath: string, interfaceName: string): Gio.DBusInterface | null
    getObject(objectPath: string): Gio.DBusObject | null
    getObjectPath(): string
    getObjects(): Gio.DBusObject[]
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of CloudProviders.DbusObjectManagerClient */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncGetInterface(objectPath: string, interfaceName: string): Gio.DBusInterface | null
    vfuncGetObject(objectPath: string): Gio.DBusObject | null
    vfuncGetObjectPath(): string
    vfuncGetObjects(): Gio.DBusObject[]
    vfuncInterfaceAdded(object: Gio.DBusObject, interface: Gio.DBusInterface): void
    vfuncInterfaceRemoved(object: Gio.DBusObject, interface: Gio.DBusInterface): void
    vfuncObjectAdded(object: Gio.DBusObject): void
    vfuncObjectRemoved(object: Gio.DBusObject): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusObjectManagerClient */
    vfuncInterfaceProxyPropertiesChanged(objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncInterfaceProxySignal(objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: (($obj: DbusObjectManagerClient, objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "interface-proxy-properties-changed", callback: (($obj: DbusObjectManagerClient, objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "interface-proxy-properties-changed", objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "interface-proxy-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-proxy-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-proxy-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-proxy-signal", callback: (($obj: DbusObjectManagerClient, objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "interface-proxy-signal", callback: (($obj: DbusObjectManagerClient, objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "interface-proxy-signal", objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant): void
    on(sigName: "interface-proxy-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-proxy-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-proxy-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "object-added", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-added", object: Gio.DBusObject): void
    on(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "object-removed", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-removed", object: Gio.DBusObject): void
    on(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name-owner", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DbusObjectManagerClient_ConstructProps)
    _init (config?: DbusObjectManagerClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): DbusObjectManagerClient
    static newForBusFinish(res: Gio.AsyncResult): DbusObjectManagerClient
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): DbusObjectManagerClient
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): DbusObjectManagerClient
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): DbusObjectManagerClient
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string, getProxyTypeFunc?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): DbusObjectManagerClient
    static getProxyType(manager: Gio.DBusObjectManagerClient, objectPath: string, interfaceName?: string | null, userData?: object | null): GObject.Type
    static newForBus(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DbusObjectProxy_ConstructProps extends Gio.DBusObjectProxy_ConstructProps {
    account?: DbusAccount
    provider?: DbusProvider
}
export class DbusObjectProxy {
    /* Properties of CloudProviders.DbusObject */
    account: DbusAccount
    provider: DbusProvider
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectProxy */
    getConnection(): Gio.DBusConnection
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
    /* Methods of CloudProviders.DbusObject */
    getAccount(): DbusAccount | null
    getProvider(): DbusProvider | null
    /* Methods of Gio.DBusObject */
    getInterface(interfaceName: string): Gio.DBusInterface | null
    getInterfaces(): Gio.DBusInterface[]
    getObjectPath(): string
    /* Virtual methods of CloudProviders.DbusObjectProxy */
    vfuncGetInterface(interfaceName: string): Gio.DBusInterface | null
    vfuncGetInterfaces(): Gio.DBusInterface[]
    vfuncGetObjectPath(): string
    vfuncInterfaceAdded(interface: Gio.DBusInterface): void
    vfuncInterfaceRemoved(interface: Gio.DBusInterface): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: DbusObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DbusObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: DbusObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DbusObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::account", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DbusObjectProxy_ConstructProps)
    _init (config?: DbusObjectProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection, objectPath: string): DbusObjectProxy
    static $gtype: GObject.Type
}
export interface DbusObjectSkeleton_ConstructProps extends Gio.DBusObjectSkeleton_ConstructProps {
    account?: DbusAccount
    provider?: DbusProvider
}
export class DbusObjectSkeleton {
    /* Properties of Gio.DBusObjectSkeleton */
    gObjectPath: string
    /* Properties of CloudProviders.DbusObject */
    account: DbusAccount
    provider: DbusProvider
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of CloudProviders.DbusObjectSkeleton */
    setAccount(interface?: DbusAccount | null): void
    setProvider(interface?: DbusProvider | null): void
    /* Methods of Gio.DBusObjectSkeleton */
    addInterface(interface: Gio.DBusInterfaceSkeleton): void
    flush(): void
    removeInterface(interface: Gio.DBusInterfaceSkeleton): void
    removeInterfaceByName(interfaceName: string): void
    setObjectPath(objectPath: string): void
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
    /* Methods of CloudProviders.DbusObject */
    getAccount(): DbusAccount | null
    getProvider(): DbusProvider | null
    /* Methods of Gio.DBusObject */
    getInterface(interfaceName: string): Gio.DBusInterface | null
    getInterfaces(): Gio.DBusInterface[]
    getObjectPath(): string
    /* Virtual methods of CloudProviders.DbusObjectSkeleton */
    vfuncGetInterface(interfaceName: string): Gio.DBusInterface | null
    vfuncGetInterfaces(): Gio.DBusInterface[]
    vfuncGetObjectPath(): string
    vfuncInterfaceAdded(interface: Gio.DBusInterface): void
    vfuncInterfaceRemoved(interface: Gio.DBusInterface): void
    /* Virtual methods of Gio.DBusObjectSkeleton */
    vfuncAuthorizeMethod(interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: (($obj: DbusObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "authorize-method", callback: (($obj: DbusObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "authorize-method", interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): void
    on(sigName: "authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: DbusObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DbusObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: DbusObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DbusObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-object-path", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::account", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DbusObjectSkeleton_ConstructProps)
    _init (config?: DbusObjectSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(objectPath: string): DbusObjectSkeleton
    static $gtype: GObject.Type
}
export interface DbusProviderProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    name?: string
}
export class DbusProviderProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of CloudProviders.DbusProvider */
    name: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of CloudProviders.DbusProviderProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: DbusProviderProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DbusProviderProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: DbusProviderProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DbusProviderProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DbusProviderProxy_ConstructProps)
    _init (config?: DbusProviderProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): DbusProviderProxy
    static newForBusFinish(res: Gio.AsyncResult): DbusProviderProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): DbusProviderProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DbusProviderProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): DbusProviderProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DbusProviderProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DbusProviderSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    name?: string
}
export class DbusProviderSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of CloudProviders.DbusProvider */
    name: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of CloudProviders.DbusProviderSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: DbusProviderSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DbusProviderSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DbusProviderSkeleton_ConstructProps)
    _init (config?: DbusProviderSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbusProviderSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface Provider_ConstructProps extends GObject.Object_ConstructProps {
}
export class Provider {
    /* Properties of CloudProviders.Provider */
    readonly name: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of CloudProviders.Provider */
    getAccounts(): Account[]
    getName(): string
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
    /* Signals of CloudProviders.Provider */
    connect(sigName: "accounts-changed", callback: (($obj: Provider) => void)): number
    connect_after(sigName: "accounts-changed", callback: (($obj: Provider) => void)): number
    emit(sigName: "accounts-changed"): void
    on(sigName: "accounts-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "accounts-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "accounts-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "removed", callback: (($obj: Provider) => void)): number
    connect_after(sigName: "removed", callback: (($obj: Provider) => void)): number
    emit(sigName: "removed"): void
    on(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Provider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Provider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Provider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Provider, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Provider_ConstructProps)
    _init (config?: Provider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(busName: string, objectPath: string): Provider
    static $gtype: GObject.Type
}
export interface ProviderExporter_ConstructProps extends GObject.Object_ConstructProps {
    bus?: Gio.DBusConnection
    busName?: string
    busPath?: string
    name?: string
}
export class ProviderExporter {
    /* Properties of CloudProviders.ProviderExporter */
    name: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of CloudProviders.ProviderExporter */
    getName(): string
    removeAccount(account: AccountExporter): void
    setName(name: string): void
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
    connect(sigName: "notify", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProviderExporter_ConstructProps)
    _init (config?: ProviderExporter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bus: Gio.DBusConnection, busName: string, busPath: string): ProviderExporter
    static $gtype: GObject.Type
}
export abstract class AccountClass {
    /* Fields of CloudProviders.AccountClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class AccountExporterClass {
    /* Fields of CloudProviders.AccountExporterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class CollectorClass {
    /* Fields of CloudProviders.CollectorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class DbusAccountIface {
    /* Fields of CloudProviders.DbusAccountIface */
    parentIface: GObject.TypeInterface
    getIcon: (object: DbusAccount) => string | null
    getName: (object: DbusAccount) => string | null
    getPath: (object: DbusAccount) => string | null
    getStatus: (object: DbusAccount) => number
    getStatusDetails: (object: DbusAccount) => string | null
    static name: string
}
export abstract class DbusAccountProxyClass {
    /* Fields of CloudProviders.DbusAccountProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class DbusAccountProxyPrivate {
    static name: string
}
export abstract class DbusAccountSkeletonClass {
    /* Fields of CloudProviders.DbusAccountSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class DbusAccountSkeletonPrivate {
    static name: string
}
export abstract class DbusObjectIface {
    /* Fields of CloudProviders.DbusObjectIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class DbusObjectManagerClientClass {
    /* Fields of CloudProviders.DbusObjectManagerClientClass */
    parentClass: Gio.DBusObjectManagerClientClass
    static name: string
}
export class DbusObjectManagerClientPrivate {
    static name: string
}
export abstract class DbusObjectProxyClass {
    /* Fields of CloudProviders.DbusObjectProxyClass */
    parentClass: Gio.DBusObjectProxyClass
    static name: string
}
export class DbusObjectProxyPrivate {
    static name: string
}
export abstract class DbusObjectSkeletonClass {
    /* Fields of CloudProviders.DbusObjectSkeletonClass */
    parentClass: Gio.DBusObjectSkeletonClass
    static name: string
}
export class DbusObjectSkeletonPrivate {
    static name: string
}
export abstract class DbusProviderIface {
    /* Fields of CloudProviders.DbusProviderIface */
    parentIface: GObject.TypeInterface
    getName: (object: DbusProvider) => string | null
    static name: string
}
export abstract class DbusProviderProxyClass {
    /* Fields of CloudProviders.DbusProviderProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class DbusProviderProxyPrivate {
    static name: string
}
export abstract class DbusProviderSkeletonClass {
    /* Fields of CloudProviders.DbusProviderSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class DbusProviderSkeletonPrivate {
    static name: string
}
export abstract class ProviderClass {
    /* Fields of CloudProviders.ProviderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ProviderExporterClass {
    /* Fields of CloudProviders.ProviderExporterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class _AccountClass {
    /* Fields of CloudProviders._AccountClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class _AccountExporterClass {
    /* Fields of CloudProviders._AccountExporterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class _CollectorClass {
    /* Fields of CloudProviders._CollectorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class _ProviderExporterClass {
    /* Fields of CloudProviders._ProviderExporterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}