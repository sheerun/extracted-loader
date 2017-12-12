import React from 'react'
import Head from 'next/head'

export default class Page extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='stylesheet' type='text/css' href='/static/index.css' />
        </Head>
        {this.props.children}
      </div>
    )
  }
}
