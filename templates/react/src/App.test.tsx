import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('React starter', () => {
  it('gives a first-time visitor a clear setup path', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Make Room for the Good Idea.' }),
    ).toBeTruthy()
    expect(screen.getByRole('link', { name: /read the supabase setup guide/i })).toBeTruthy()
    expect(screen.getByRole('status').textContent).toContain('Waiting for project keys')
  })
})
