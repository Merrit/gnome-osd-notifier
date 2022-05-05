/**
 * PangoFT2-1.0
 */

/// <reference types="node" />
/// <reference path="freetype2-2.0.d.ts" />
/// <reference path="PangoFc-1.0.d.ts" />
/// <reference path="fontconfig-2.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace PangoFT2 {

export function fontGetCoverage(font: Pango.Font, language: Pango.Language): Pango.Coverage
export function fontGetKerning(font: Pango.Font, left: Pango.Glyph, right: Pango.Glyph): number
export function getUnknownGlyph(font: Pango.Font): Pango.Glyph
export function render(bitmap: freetype2.Bitmap, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
export function renderLayout(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void
export function renderLayoutLine(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void
export function renderLayoutLineSubpixel(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void
export function renderLayoutSubpixel(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void
export function renderTransformed(bitmap: freetype2.Bitmap, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
export function shutdownDisplay(): void
export interface SubstituteFunc {
    (pattern: fontconfig.Pattern, data?: object | null): void
}
export interface FontMap_ConstructProps extends PangoFc.FontMap_ConstructProps {
}
export class FontMap {
    /* Fields of Pango.FontMap */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PangoFT2.FontMap */
    setDefaultSubstitute(func: SubstituteFunc): void
    setResolution(dpiX: number, dpiY: number): void
    substituteChanged(): void
    /* Methods of PangoFc.FontMap */
    cacheClear(): void
    configChanged(): void
    createContext(): Pango.Context
    findDecoder(pattern: fontconfig.Pattern): PangoFc.Decoder | null
    shutdown(): void
    /* Methods of Pango.FontMap */
    changed(): void
    getFamily(name: string): Pango.FontFamily
    getSerial(): number
    listFamilies(): /* families */ Pango.FontFamily[]
    loadFont(context: Pango.Context, desc: Pango.FontDescription): Pango.Font | null
    loadFontset(context: Pango.Context, desc: Pango.FontDescription, language: Pango.Language): Pango.Fontset | null
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
    /* Virtual methods of Pango.FontMap */
    vfuncChanged(): void
    vfuncGetFamily(name: string): Pango.FontFamily
    vfuncGetSerial(): number
    vfuncListFamilies(): /* families */ Pango.FontFamily[]
    vfuncLoadFont(context: Pango.Context, desc: Pango.FontDescription): Pango.Font | null
    vfuncLoadFontset(context: Pango.Context, desc: Pango.FontDescription, language: Pango.Language): Pango.Fontset | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FontMap_ConstructProps)
    _init (config?: FontMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FontMap
    static $gtype: GObject.Type
}
}