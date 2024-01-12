const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-jsx": hot(preferDefault(require("/home/psrivast/Personal Documents/portfolio/src/pages/404.jsx"))),
  "component---src-pages-blog-jsx": hot(preferDefault(require("/home/psrivast/Personal Documents/portfolio/src/pages/blog.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/psrivast/Personal Documents/portfolio/src/pages/index.jsx")))
}

