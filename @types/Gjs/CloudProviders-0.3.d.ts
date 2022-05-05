/**
 * CloudProviders-0.3
 */

import * as Gjs from './Gjs';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

export enum AccountStatus {
    INVALID,
    IDLE,
    SYNCING,
    ERROR,
}
export const ACCOUNT_DBUS_IFACE: string
export const PROVIDER_DBUS_IFACE: string
export function dbus_account_interface_info(): Gio.DBusInterfaceInfo
export function dbus_account_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function dbus_provider_interface_info(): Gio.DBusInterfaceInfo
export function dbus_provider_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export class DbusAccount {
    /* Properties of CloudProviders.DbusAccount */
    icon: string
    name: string
    path: string
    status: number
    status_details: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class DbusObject {
    /* Properties of CloudProviders.DbusObject */
    account: DbusAccount
    provider: DbusProvider
    /* Methods of CloudProviders.DbusObject */
    get_account(): DbusAccount | null
    get_provider(): DbusProvider | null
    /* Methods of Gio.DBusObject */
    get_interface(interface_name: string): Gio.DBusInterface | null
    get_interfaces(): Gio.DBusInterface[]
    get_object_path(): string
    /* Virtual methods of Gio.DBusObject */
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null
    vfunc_get_interfaces(): Gio.DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: Gio.DBusInterface): void
    vfunc_interface_removed(interface_: Gio.DBusInterface): void
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: DbusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DbusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: DbusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DbusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    static name: string
}
export class DbusProvider {
    /* Properties of CloudProviders.DbusProvider */
    name: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export interface Account_ConstructProps extends GObject.Object_ConstructProps {
}
export class Account {
    /* Properties of CloudProviders.Account */
    readonly action_group: Gio.ActionGroup
    readonly icon: Gio.Icon
    readonly menu_model: Gio.MenuModel
    readonly name: string
    readonly path: string
    readonly status_details: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of CloudProviders.Account */
    get_action_group(): Gio.ActionGroup
    get_icon(): Gio.Icon
    get_menu_model(): Gio.MenuModel
    get_name(): string
    get_path(): string
    get_status(): AccountStatus
    get_status_details(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::action-group", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::menu-model", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-model", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status-details", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-details", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Account_ConstructProps)
    _init (config?: Account_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(proxy: Gio.DBusProxy): Account
    static $gtype: GObject.Type
}
export interface AccountExporter_ConstructProps extends GObject.Object_ConstructProps {
    action_group?: Gio.ActionGroup
    bus_name?: string
    icon?: Gio.Icon
    menu_model?: Gio.MenuModel
    name?: string
    path?: string
    provider?: ProviderExporter
    status_details?: string
}
export class AccountExporter {
    /* Properties of CloudProviders.AccountExporter */
    action_group: Gio.ActionGroup
    icon: Gio.Icon
    menu_model: Gio.MenuModel
    name: string
    path: string
    status_details: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of CloudProviders.AccountExporter */
    set_action_group(action_group: Gio.ActionGroup): void
    set_icon(icon: Gio.Icon): void
    set_menu_model(menu_model: Gio.MenuModel): void
    set_name(name: string): void
    set_path(path: string): void
    set_status(status: AccountStatus): void
    set_status_details(status_details: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::action-group", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::menu-model", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-model", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status-details", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-details", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AccountExporter_ConstructProps)
    _init (config?: AccountExporter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(provider: ProviderExporter, bus_name: string): AccountExporter
    static $gtype: GObject.Type
}
export interface Collector_ConstructProps extends GObject.Object_ConstructProps {
}
export class Collector {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of CloudProviders.Collector */
    get_providers(): Provider[]
    update(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of CloudProviders.Collector */
    connect(sigName: "providers-changed", callback: (($obj: Collector) => void)): number
    connect_after(sigName: "providers-changed", callback: (($obj: Collector) => void)): number
    emit(sigName: "providers-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Collector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Collector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Collector_ConstructProps)
    _init (config?: Collector_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dup_singleton(): Collector
    static $gtype: GObject.Type
}
export interface DbusAccountProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    icon?: string
    name?: string
    path?: string
    status?: number
    status_details?: string
}
export class DbusAccountProxy {
    /* Properties of Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of CloudProviders.DbusAccount */
    icon: string
    name: string
    path: string
    status: number
    status_details: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of CloudProviders.DbusAccountProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: DbusAccountProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DbusAccountProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: DbusAccountProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DbusAccountProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status-details", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-details", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbusAccountProxy_ConstructProps)
    _init (config?: DbusAccountProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): DbusAccountProxy
    static new_for_bus_finish(res: Gio.AsyncResult): DbusAccountProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): DbusAccountProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DbusAccountProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): DbusAccountProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DbusAccountProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DbusAccountSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    icon?: string
    name?: string
    path?: string
    status?: number
    status_details?: string
}
export class DbusAccountSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of CloudProviders.DbusAccount */
    icon: string
    name: string
    path: string
    status: number
    status_details: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of CloudProviders.DbusAccountSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: DbusAccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DbusAccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status-details", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-details", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbusAccountSkeleton_ConstructProps)
    _init (config?: DbusAccountSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbusAccountSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface DbusObjectManagerClient_ConstructProps extends Gio.DBusObjectManagerClient_ConstructProps {
}
export class DbusObjectManagerClient {
    /* Properties of Gio.DBusObjectManagerClient */
    readonly name_owner: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectManagerClient */
    get_connection(): Gio.DBusConnection
    get_flags(): Gio.DBusObjectManagerClientFlags
    get_name(): string
    get_name_owner(): string | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusObjectManager */
    get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null
    get_object(object_path: string): Gio.DBusObject | null
    get_object_path(): string
    get_objects(): Gio.DBusObject[]
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of CloudProviders.DbusObjectManagerClient */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null
    vfunc_get_object(object_path: string): Gio.DBusObject | null
    vfunc_get_object_path(): string
    vfunc_get_objects(): Gio.DBusObject[]
    vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void
    vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void
    vfunc_object_added(object: Gio.DBusObject): void
    vfunc_object_removed(object: Gio.DBusObject): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusObjectManagerClient */
    vfunc_interface_proxy_properties_changed(object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_interface_proxy_signal(object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: (($obj: DbusObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "interface-proxy-properties-changed", callback: (($obj: DbusObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "interface-proxy-properties-changed", object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "interface-proxy-signal", callback: (($obj: DbusObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "interface-proxy-signal", callback: (($obj: DbusObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "interface-proxy-signal", object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    connect(sigName: "object-added", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-added", object: Gio.DBusObject): void
    connect(sigName: "object-removed", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: DbusObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-removed", object: Gio.DBusObject): void
    connect(sigName: "notify::name-owner", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbusObjectManagerClient_ConstructProps)
    _init (config?: DbusObjectManagerClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): DbusObjectManagerClient
    static new_for_bus_finish(res: Gio.AsyncResult): DbusObjectManagerClient
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): DbusObjectManagerClient
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): DbusObjectManagerClient
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): DbusObjectManagerClient
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): DbusObjectManagerClient
    static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string, interface_name?: string | null, user_data?: object | null): GObject.Type
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectProxy */
    get_connection(): Gio.DBusConnection
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of CloudProviders.DbusObject */
    get_account(): DbusAccount | null
    get_provider(): DbusProvider | null
    /* Methods of Gio.DBusObject */
    get_interface(interface_name: string): Gio.DBusInterface | null
    get_interfaces(): Gio.DBusInterface[]
    get_object_path(): string
    /* Virtual methods of CloudProviders.DbusObjectProxy */
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null
    vfunc_get_interfaces(): Gio.DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: Gio.DBusInterface): void
    vfunc_interface_removed(interface_: Gio.DBusInterface): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: DbusObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DbusObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: DbusObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DbusObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    connect(sigName: "notify::account", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provider", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbusObjectProxy_ConstructProps)
    _init (config?: DbusObjectProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection, object_path: string): DbusObjectProxy
    static $gtype: GObject.Type
}
export interface DbusObjectSkeleton_ConstructProps extends Gio.DBusObjectSkeleton_ConstructProps {
    account?: DbusAccount
    provider?: DbusProvider
}
export class DbusObjectSkeleton {
    /* Properties of Gio.DBusObjectSkeleton */
    g_object_path: string
    /* Properties of CloudProviders.DbusObject */
    account: DbusAccount
    provider: DbusProvider
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of CloudProviders.DbusObjectSkeleton */
    set_account(interface_?: DbusAccount | null): void
    set_provider(interface_?: DbusProvider | null): void
    /* Methods of Gio.DBusObjectSkeleton */
    add_interface(interface_: Gio.DBusInterfaceSkeleton): void
    flush(): void
    remove_interface(interface_: Gio.DBusInterfaceSkeleton): void
    remove_interface_by_name(interface_name: string): void
    set_object_path(object_path: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of CloudProviders.DbusObject */
    get_account(): DbusAccount | null
    get_provider(): DbusProvider | null
    /* Methods of Gio.DBusObject */
    get_interface(interface_name: string): Gio.DBusInterface | null
    get_interfaces(): Gio.DBusInterface[]
    get_object_path(): string
    /* Virtual methods of CloudProviders.DbusObjectSkeleton */
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null
    vfunc_get_interfaces(): Gio.DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: Gio.DBusInterface): void
    vfunc_interface_removed(interface_: Gio.DBusInterface): void
    /* Virtual methods of Gio.DBusObjectSkeleton */
    vfunc_authorize_method(interface_: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: (($obj: DbusObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "authorize-method", callback: (($obj: DbusObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "authorize-method", interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: DbusObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DbusObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: DbusObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DbusObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    connect(sigName: "notify::g-object-path", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::account", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provider", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbusObjectSkeleton_ConstructProps)
    _init (config?: DbusObjectSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object_path: string): DbusObjectSkeleton
    static $gtype: GObject.Type
}
export interface DbusProviderProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    name?: string
}
export class DbusProviderProxy {
    /* Properties of Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of CloudProviders.DbusProvider */
    name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of CloudProviders.DbusProviderProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: DbusProviderProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DbusProviderProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: DbusProviderProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DbusProviderProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbusProviderProxy_ConstructProps)
    _init (config?: DbusProviderProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): DbusProviderProxy
    static new_for_bus_finish(res: Gio.AsyncResult): DbusProviderProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): DbusProviderProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DbusProviderProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): DbusProviderProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DbusProviderProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DbusProviderSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    name?: string
}
export class DbusProviderSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of CloudProviders.DbusProvider */
    name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of CloudProviders.DbusProviderSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: DbusProviderSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DbusProviderSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbusProviderSkeleton_ConstructProps)
    _init (config?: DbusProviderSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbusProviderSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface Provider_ConstructProps extends GObject.Object_ConstructProps {
}
export class Provider {
    /* Properties of CloudProviders.Provider */
    readonly name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of CloudProviders.Provider */
    get_accounts(): Account[]
    get_name(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of CloudProviders.Provider */
    connect(sigName: "accounts-changed", callback: (($obj: Provider) => void)): number
    connect_after(sigName: "accounts-changed", callback: (($obj: Provider) => void)): number
    emit(sigName: "accounts-changed"): void
    connect(sigName: "removed", callback: (($obj: Provider) => void)): number
    connect_after(sigName: "removed", callback: (($obj: Provider) => void)): number
    emit(sigName: "removed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Provider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Provider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Provider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Provider, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Provider_ConstructProps)
    _init (config?: Provider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bus_name: string, object_path: string): Provider
    static $gtype: GObject.Type
}
export interface ProviderExporter_ConstructProps extends GObject.Object_ConstructProps {
    bus?: Gio.DBusConnection
    bus_name?: string
    bus_path?: string
    name?: string
}
export class ProviderExporter {
    /* Properties of CloudProviders.ProviderExporter */
    name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of CloudProviders.ProviderExporter */
    get_name(): string
    remove_account(account: AccountExporter): void
    set_name(name: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProviderExporter_ConstructProps)
    _init (config?: ProviderExporter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bus: Gio.DBusConnection, bus_name: string, bus_path: string): ProviderExporter
    static $gtype: GObject.Type
}
export abstract class AccountClass {
    /* Fields of CloudProviders.AccountClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class AccountExporterClass {
    /* Fields of CloudProviders.AccountExporterClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CollectorClass {
    /* Fields of CloudProviders.CollectorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DbusAccountIface {
    /* Fields of CloudProviders.DbusAccountIface */
    parent_iface: GObject.TypeInterface
    get_icon: (object: DbusAccount) => string | null
    get_name: (object: DbusAccount) => string | null
    get_path: (object: DbusAccount) => string | null
    get_status: (object: DbusAccount) => number
    get_status_details: (object: DbusAccount) => string | null
    static name: string
}
export abstract class DbusAccountProxyClass {
    /* Fields of CloudProviders.DbusAccountProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class DbusAccountProxyPrivate {
    static name: string
}
export abstract class DbusAccountSkeletonClass {
    /* Fields of CloudProviders.DbusAccountSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class DbusAccountSkeletonPrivate {
    static name: string
}
export abstract class DbusObjectIface {
    /* Fields of CloudProviders.DbusObjectIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class DbusObjectManagerClientClass {
    /* Fields of CloudProviders.DbusObjectManagerClientClass */
    parent_class: Gio.DBusObjectManagerClientClass
    static name: string
}
export class DbusObjectManagerClientPrivate {
    static name: string
}
export abstract class DbusObjectProxyClass {
    /* Fields of CloudProviders.DbusObjectProxyClass */
    parent_class: Gio.DBusObjectProxyClass
    static name: string
}
export class DbusObjectProxyPrivate {
    static name: string
}
export abstract class DbusObjectSkeletonClass {
    /* Fields of CloudProviders.DbusObjectSkeletonClass */
    parent_class: Gio.DBusObjectSkeletonClass
    static name: string
}
export class DbusObjectSkeletonPrivate {
    static name: string
}
export abstract class DbusProviderIface {
    /* Fields of CloudProviders.DbusProviderIface */
    parent_iface: GObject.TypeInterface
    get_name: (object: DbusProvider) => string | null
    static name: string
}
export abstract class DbusProviderProxyClass {
    /* Fields of CloudProviders.DbusProviderProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class DbusProviderProxyPrivate {
    static name: string
}
export abstract class DbusProviderSkeletonClass {
    /* Fields of CloudProviders.DbusProviderSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class DbusProviderSkeletonPrivate {
    static name: string
}
export abstract class ProviderClass {
    /* Fields of CloudProviders.ProviderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ProviderExporterClass {
    /* Fields of CloudProviders.ProviderExporterClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class _AccountClass {
    /* Fields of CloudProviders._AccountClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class _AccountExporterClass {
    /* Fields of CloudProviders._AccountExporterClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class _CollectorClass {
    /* Fields of CloudProviders._CollectorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class _ProviderExporterClass {
    /* Fields of CloudProviders._ProviderExporterClass */
    parent_class: GObject.ObjectClass
    static name: string
}