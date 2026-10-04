import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from './App.vue'

describe('Vue starter', () => {
  it('gives a first-time visitor a clear setup path', () => {
    const wrapper = mount(App)

    expect(wrapper.get('h1').text()).toBe('Make Room for the Good Idea.')
    expect(wrapper.get('[role="status"]').text()).toContain('Waiting for project keys')
    expect(wrapper.find('a[href^="https://supabase.com"]').exists()).toBe(true)
  })
})
