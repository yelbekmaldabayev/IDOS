// Safe browser/window utilities for SSR compatibility

export const isBrowser = typeof window !== 'undefined'

export const safeWindow = {
  get location() {
    return isBrowser ? window.location : null
  },
  get localStorage() {
    return isBrowser ? window.localStorage : null
  },
  get sessionStorage() {
    return isBrowser ? window.sessionStorage : null
  },
  get document() {
    return isBrowser ? window.document : null
  }
}

export function whenBrowser<T>(callback: () => T, fallback?: T): T | undefined {
  return isBrowser ? callback() : fallback
}
