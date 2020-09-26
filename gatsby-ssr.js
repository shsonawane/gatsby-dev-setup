/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import { withPrefix } from 'gatsby'

export const onRenderBody = (
    { setHeadComponents, setPostBodyComponents },
    pluginOptions
) => {
    setHeadComponents([
        <link 
            key="OpenSansFont" 
            href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'/>,
        <link
            key="BootstrapCss" 
            rel="stylesheet" 
            href={withPrefix('/assets/bootstrap/dist/css/bootstrap.min.css')}/>,
        <link 
            key="FontAwesome" 
            rel="stylesheet" 
            href={withPrefix("/assets/font-awesome/4.7.0/css/font-awesome.min.css")}/>
    ]);
    setPostBodyComponents([]);
}


export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    const headComponents = getHeadComponents()
    headComponents.sort((x, y) => {
      if (["OpenSansFont", "BootstrapCss", "FontAwesome"].includes(x.key)) {
        return -1
      } else if (["OpenSansFont", "BootstrapCss", "FontAwesome"].includes(y.key)) {
        return 1
      }
      return 0
    })
    replaceHeadComponents(headComponents);
}