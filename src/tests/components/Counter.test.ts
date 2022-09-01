import { config, mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'

import Counter from '@/components/Counter.vue'

const vuetify = createVuetify()
config.global.plugins = [vuetify]

describe('Counter.vue', () => {
  it('should render', () => {
    const wrapper = mount(Counter)
    expect(wrapper.get('[data-test="count-number"]').text()).toContain('0')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be interactive', async () => {
    const wrapper = mount(Counter)
    expect(wrapper.get('[data-test="count-number"]').text()).toContain('0')
    expect(wrapper.find('[data-test="btn-increment"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="btn-reset"]').exists()).toBe(true)

    for (let i = 1; i <= 3; i++) {
      await wrapper.get('[data-test="btn-increment"]').trigger('click')
      expect(wrapper.get('[data-test="count-number"]').text()).toContain(i)
    }
    await wrapper.get('[data-test="btn-reset"]').trigger('click')
    expect(wrapper.get('[data-test="count-number"]').text()).toContain('0')
  })
})
