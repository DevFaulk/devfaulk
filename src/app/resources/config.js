const baseURL = 'nextjs-portfolio.up.railway.app'

const routes = {
    '/':        true,
    '/about':   true,
    '/work':    true,
    '/blog':    true,
    '/gallery': true,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    // '/work/{!PUT URL HERE}': true
}

const effects = {
    gradient: true,
    dots:     false,
    lines:    true,
}

const style = {
    theme:       'light',         // dark | light
    neutral:     'sand',         // sand | gray | slate
    brand:       'violet',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'blue',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',     // color | contrast
    solidStyle:  'flat',         // flat | plastic
    border:      'conservative',      // rounded | playful | conservative
    surface:     'translucent',  // filled | translucent
    transition:  'macro'           // all | micro | macro
}

const display = {
    location: true,
    time:     true
}

const mailchimp = {
    action: 'https://url/subscribe/post?parameters',
    effects: {
        gradient: false,
        dots:     true,
        lines:    false,
    }
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };