import { test, expect } from "@playwright/test";



// POSITIVE — EMAIL VERIFICATION 


test("email verification flow", async ({ page, request }) => {

  const email = `test${Date.now()}@mail.com`;
  const password = "123456";

  // REGISTER

  await page.goto("http://localhost:4200/register");

  await page.fill('input[placeholder="Enter name"]', "Test");

  await page.fill('input[placeholder="Enter email"]', email);

  await page.fill('input[placeholder="Enter password"]', password);

  await page.locator("button").last().click();

  await page.waitForTimeout(2000);


  // GET TOKEN FROM DB

  const res = await request.get(
    `http://localhost:8080/test/token?email=${email}`
  );

  const token = await res.text();


  // VERIFY

  const verifyLink =
    `http://localhost:4200/verify?token=${token}`;

  await page.goto(verifyLink);

  await page.waitForTimeout(2000);


  const continueBtn = page.locator("text=Continue");

  if (await continueBtn.count() > 0) {
    await continueBtn.click();
  }


  // LOGIN

  await page.goto("http://localhost:4200/login");

  await page.locator("input[name='loginEmail']").fill(email);

  await page.locator("input[name='loginPassword']").fill(password);

  await page.locator(".btn-submit").last().click();

  await page.waitForTimeout(2000);


  await expect(page).not.toHaveURL(/login/);

});



//  NEGATIVE — LOGIN WITHOUT VERIFY


test("negative - login without verify", async ({ page }) => {

  const email = `test${Date.now()}@mail.com`;
  const password = "123456";

  await page.goto("http://localhost:4200/register");

  await page.fill('input[placeholder="Enter name"]', "Test");

  await page.fill('input[placeholder="Enter email"]', email);

  await page.fill('input[placeholder="Enter password"]', password);

  await page.locator("button").last().click();

  await page.waitForTimeout(2000);


  await page.goto("http://localhost:4200/login");

  await page.locator("input[name='loginEmail']").fill(email);

  await page.locator("input[name='loginPassword']").fill(password);

  await page.locator(".btn-submit").last().click();

  await expect(page.locator(".toast")).toBeVisible();

});



// NEGATIVE — WRONG PASSWORD


test("negative - wrong password", async ({ page }) => {

  await page.goto("http://localhost:4200/login");

  await page.locator("input[name='loginEmail']")
    .fill("test@mail.com");

  await page.locator("input[name='loginPassword']")
    .fill("wrong123");

  await page.locator(".btn-submit").last().click();

  await expect(page.locator(".toast")).toBeVisible();

});



//  NEGATIVE — EMPTY LOGIN


test("negative - empty login", async ({ page }) => {

  await page.goto("http://localhost:4200/login");

  await page.locator(".btn-submit").last().click();

  await expect(page.locator(".toast")).toBeVisible();

});



//  NEGATIVE — INVALID EMAIL FORMAT


test("negative - invalid email format", async ({ page }) => {

  await page.goto("http://localhost:4200/register");

  await page.fill('input[placeholder="Enter name"]', "Test");

  await page.fill('input[placeholder="Enter email"]', "abc");

  await page.fill('input[placeholder="Enter password"]', "123456");

  await page.locator("button").last().click();

  await expect(page.locator(".toast")).toBeVisible();

});



// NEGATIVE — INVALID TOKEN


test("negative - invalid token", async ({ page }) => {

  await page.goto(
    "http://localhost:4200/verify?token=wrong123"
  );

  await expect(page.locator("text=Invalid"))
    .toBeVisible();

});



//  NEGATIVE — VERIFY TWICE

test("negative - verify twice", async ({ page, request }) => {

  const email = `test${Date.now()}@mail.com`;
  const password = "123456";

  await page.goto("http://localhost:4200/register");

  await page.fill('input[placeholder="Enter name"]', "Test");

  await page.fill('input[placeholder="Enter email"]', email);

  await page.fill('input[placeholder="Enter password"]', password);

  await page.locator("button").last().click();

  await page.waitForTimeout(2000);


  const res = await request.get(
    `http://localhost:8080/test/token?email=${email}`
  );

  const token = await res.text();


  const link =
    `http://localhost:4200/verify?token=${token}`;


  await page.goto(link);

  await page.waitForTimeout(1000);


  // verify again

  await page.goto(link);

  await expect(page.locator("text=Invalid"))
    .toBeVisible();

});