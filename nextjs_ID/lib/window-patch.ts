// Global window safety patch
if (typeof window === 'undefined') {
  // @ts-ignore
  global.window = {
    location: { href: '', pathname: '/' },
    document: { getElementById: () => null },
    addEventListener: () => {},
    removeEventListener: () => {},
    pageYOffset: 0,
  }
}
