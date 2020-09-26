/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min.js'

export const onClientEntry = () => {
    // IntersectionObsrver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
      require('intersection-observer');
      console.log(`# IntersectionObserver is polyfilled!`)
    }
}