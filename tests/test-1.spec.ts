import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com/');
  await page.getByRole('link', { name: 'Colombia' }).click();
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').dblclick();
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('Iphone');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('Enter');
  await page.getByRole('link', { name: 'Apple iPhone 11 (128 GB) -' }).click();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
});

test('test locators 2', async ({page}) => {
  await page.goto('https://www.mercadolibre.com.co/')
  //await page.getByRole('link', {name: 'Mis compras' }).click()
  await page.getByRole("link", {name: "Ingresa", exact: true}).click()
  await page.pause()
});