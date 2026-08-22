---
name: react
description: React 19 functional components, hooks, and patterns. Use when writing JSX components, custom hooks, context providers, or testing React UI.
metadata:
  author: React Team
  version: '2026.1.31'
  source: Based on https://react.dev
---

# React

> Based on React 19. Always use functional components and hooks.

## Preferences

- Prefer TypeScript over JavaScript
- Prefer functional components over class components
- Use hooks for state, effects, and shared logic
- Keep components small and focused; compose rather than inherit
- Co-locate styles and tests next to the component when possible

## Core

| Topic               | Description                                                     |
| ------------------- | --------------------------------------------------------------- |
| Components          | Functional components, props, JSX, children, rendering behavior |
| Hooks               | useState, useEffect, useRef, useMemo, useCallback, custom hooks |
| State & Data Flow   | Lifting state, controlled components, context for shared data   |
| Effects & Lifecycle | useEffect, cleanup, dependency arrays, avoiding stale closures  |

## Quick Reference

### Component Template

```tsx
import { useState, useCallback } from 'react'

import styles from './Counter.module.css'

type CounterProps = {
  initialCount?: number
  onChange?: (count: number) => void
}

export function Counter({ initialCount = 0, onChange }: CounterProps): JSX.Element {
  const [count, setCount] = useState(initialCount)

  const increment = useCallback(() => {
    setCount((prev) => {
      const next = prev + 1
      onChange?.(next)
      return next
    })
  }, [onChange])

  return (
    <button className={styles.button} onClick={increment} type="button">
      Count: {count}
    </button>
  )
}
```

### Key Imports

```tsx
// Hooks
import { useState, useEffect, useRef, useMemo, useCallback } from 'react'

// Context
import { createContext, useContext } from 'react'

// Testing
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
```

## Rules of Hooks

- Only call hooks at the top level of a component or custom hook
- Only call hooks from React functions (components or custom hooks)
- Name custom hooks with the `use` prefix

## Common Patterns

### Custom Hook

```tsx
import { useState, useEffect } from 'react'

export function useWindowWidth(): number {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}
```

### Context Provider

```tsx
import { createContext, useContext, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<Theme>('light')

export function ThemeProvider({ children }: { children: ReactNode }): JSX.Element {
  const [theme] = useState<Theme>('light')
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export function useTheme(): Theme {
  return useContext(ThemeContext)
}
```
