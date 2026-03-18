import { test, expect } from "@playwright/test";

test("email verification flow", async ({ page, request }) => {

  const email = `test${Date.now()}@mail.com`;
  const password = "123456";


  // ---------- REGISTER ----------

  await page.goto("http://localhost:4200/register");

  await page.fill('input[placeholder="Enter email"]', email);
  await page.fill('input[placeholder="Enter password"]', password);

  await page.locator("button").last().click();

  await page.waitForTimeout(3000);


  // ---------- READ MAILHOG ----------

  const res = await request.get(
    "http://localhost:8025/api/v2/messages"
  );

  const data = await res.json();

  const body = data.items[0].Content.Body;


  // ---------- VERIFY LINK ----------

  const match = body.match(
    /http:\/\/localhost:4200\/verify\?token=[^\s"]+/
  );

  if (!match) throw new Error("Verify link not found");

  const verifyLink = match[0];

  await page.goto(verifyLink);

  await page.waitForTimeout(3000);


  // ---------- IF CONTINUE EXISTS CLICK ----------

  const continueBtn = page.locator("text=Continue");

  if (await continueBtn.count() > 0) {
    await continueBtn.click();
    await page.waitForTimeout(2000);
  }


  // ---------- GO TO LOGIN ----------

  await page.goto("http://localhost:4200/login");

  await page.waitForTimeout(2000);


  // ---------- LOGIN ----------

  await page.locator("input").first().fill(email);

  await page.locator('input[type="password"]').fill(password);

  await page.locator("button").last().click();

  await page.waitForTimeout(3000);


  // ---------- CHECK SUCCESS ----------

  await expect(page).not.toHaveURL(/login/);

});
// =====================================================
// ❌ NEGATIVE — WRONG PASSWORD
// =====================================================

test("negative - wrong password", async ({ page }) => {

  await page.goto("http://localhost:4200/login");

  await page.locator('input[name="loginEmail"]').fill("test@mail.com");

  await page.locator('input[name="loginPassword"]').fill("wrong123");

  await page.getByText("Continue to Candidate").click();

  await expect(page.locator(".toast")).toBeVisible();

});


// =====================================================
// ❌ NEGATIVE — EMPTY LOGIN
// =====================================================

test("negative - empty login", async ({ page }) => {

  await page.goto("http://localhost:4200/login");

  await page.getByText("Continue to Candidate").click();

  await expect(page.locator(".toast")).toBeVisible();

});


// =====================================================
// ❌ NEGATIVE — LOGIN WITHOUT VERIFY
// =====================================================

test("negative - login without verify", async ({ page }) => {

  const email = `test${Date.now()}@mail.com`;
  const password = "123456";

  await page.goto("http://localhost:4200/register");

  await page.fill('input[placeholder="Enter email"]', email);
  await page.fill('input[placeholder="Enter password"]', password);

  await page.locator("button").last().click();

  await page.waitForTimeout(2000);


  await page.goto("http://localhost:4200/login");

  await page.locator('input[name="loginEmail"]').fill(email);

  await page.locator('input[name="loginPassword"]').fill(password);

  await page.getByText("Continue to Candidate").click();

  await expect(page.locator(".toast")).toBeVisible();

});


// =====================================================
// ❌ NEGATIVE — INVALID EMAIL FORMAT
// =====================================================

test("negative - invalid email format", async ({ page }) => {

  await page.goto("http://localhost:4200/login");

  await page.locator('input[name="loginEmail"]').fill("abc");

  await page.locator('input[name="loginPassword"]').fill("123456");

  await page.getByText("Continue to Candidate").click();

  await expect(page.locator(".toast")).toBeVisible();

});