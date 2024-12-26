import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.body,
  props: {
    name: 'world'
  }
})

export default app
