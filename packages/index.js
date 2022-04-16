import OpenInDefaultBrowser from './yz-openindefaultbrowser.vue'

const components = [
    OpenInDefaultBrowser
]

export default {
    install: (Vue) => {
        components.forEach(component => {
            Vue.component(component.name, component)
        })
    }
}