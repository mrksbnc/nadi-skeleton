import { expect, test } from '@playwright/test'

test('introduces the starter and fits the viewport', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { level: 1, name: 'Make Room for the Good Idea.' }),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: /read the supabase setup guide/i })).toBeVisible()

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  )

  expect(hasHorizontalOverflow).toBe(false)
})
