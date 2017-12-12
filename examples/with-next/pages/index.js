import React from 'react'
import Page from '../components/page'
import Navbar from '../components/navbar'

import '../styles/index.scss'

export default class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'server'
    }
  }

  componentDidMount() {
    this.setState({ name: 'browser' })
  }

  render() {
    return <Page>
      <section className="hero is-primary is-large">
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">
              Hello
            </p>
            <p className="subtitle">
              {this.state.name}
            </p>
          </div>
        </div>
      </section>
    </Page>
  }
}
