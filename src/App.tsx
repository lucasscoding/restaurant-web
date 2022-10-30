import { useState } from 'react'
import reactLogo from './presentation/assets/react.svg'
import './App.css'
import React from 'react'
import { AbstractRestaurantTemplateAdapter } from './main/adapters/restaurant-template-adapter'

export default class App extends AbstractRestaurantTemplateAdapter {

  handleLoadStatusError(error: Error) {
    console.log(error.message)
  }

  handleLoadRestaurantError(error: Error) {
    console.log(error.message)
  }

  componentDidMount(): void {
    console.log(import.meta.env.VITE_URL_HOST_DEV, import.meta.env.PROD)
  }

  render(): any {
    return (
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => this.handleLoadStatus()}>
            count is {JSON.stringify(this.state.status)}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    )
  }
}
