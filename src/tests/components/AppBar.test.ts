import { config, mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import { VApp, VMain } from 'vuetify/components'
import AppBar from '@/components/AppBar.vue'

const vuetify = createVuetify()
config.global.plugins = [vuetify]
config.global.components = {
  'v-app': VApp,
  'v-main': VMain,
}

const AppComponent = {
  template: `
    <v-app>
      <AppBar />
      <v-main>
        <div />
      </v-main>
    </v-app>
  `,
  components: {
    AppBar,
  },
}

describe('AppBar.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should render', () => {
    const wrapper = mount(AppComponent)
    expect(wrapper.html()).toContain('Mango Boilerplate')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
