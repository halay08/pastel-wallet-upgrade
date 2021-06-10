// allow import of .css files
declare module '*.css' {
  const content: Record<string, string>
  export = content
}

declare module '*.png' {
  const url: string
  export = url
}

declare module '*.jpeg' {
  const url: string
  export = url
}

declare module '*.svg' {
  const content: string
  export default content
}

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string
