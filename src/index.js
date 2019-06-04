import Button from './components/Button/index.js'

const components = {
  Button
}

const install = Vue => {
  if (install.installed) {
    return
  }
  Object.values(components).map(component =>
    Vue.component(component.name, component)
  )
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
