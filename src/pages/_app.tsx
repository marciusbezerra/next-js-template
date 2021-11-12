import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp