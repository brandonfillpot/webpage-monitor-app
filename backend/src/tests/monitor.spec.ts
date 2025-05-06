import { test } from "@playwright/test";

test("Capture performance timing", async ({ page }) => {
  await page.goto("https://example.com");

  const performance = await page.evaluate(() =>
    JSON.stringify(window.performance.timing)
  );
  console.log("Performance timing:", performance);
});
