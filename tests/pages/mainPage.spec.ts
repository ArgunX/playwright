import { test, expect, Page, Locator } from "@playwright/test";
import { MainPage } from "../models/MainPage.ts";

let mainPage: MainPage;
test.describe("Тесты главной страницы", () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage();
  });
  test("Проверка отображения элементов навигации хедера", async () => {
    await mainPage.checkElementsVisbility();
  });

  test("Проверка названия элементов навигации хедера", async () => {
    await mainPage.checkElementsText();
  });

  test("Проверка атрибута href элементов навигации хедера", async ({
    page,
  }) => {
    await mainPage.checkElementsHrefAttribute();
  });

  test("Проверка переключения лайт мода", async () => {
    await mainPage.checkDataThemeAttributeValue("light", "system");
   await test.step("Нажатие на иконку переключения lightMode", async () => {
      await mainPage.clickSwithLigthModeIcon();
    });
    await test.step("Проверка смены значения атрибута", async () => {
      await mainPage.checkDataThemeAttributeValue("light", "system");
    });
    await test.step("Нажатие на иконку переключения lightMode", async () => {
      await mainPage.clickSwithLigthModeIcon();
    });
    await test.step("Проверка смены значения атрибута", async () => {
      await mainPage.checkDataThemeAttributeValue("light", "light");
    });
    await test.step("Нажатие на иконку переключения lightMode", async () => {
      await mainPage.clickSwithLigthModeIcon();
    });
    await test.step("Проверка смены  значения атрибута", async () => {
      await mainPage.checkDataThemeAttributeValue("dark", "dark");
    });
  });

  test("Проверка стилей активного со светлой темой ", async () => {
    await test.step("Установка светлой темы", async () => {
      await mainPage.setLightMode();
    });
    await test.step("Скриншотная проверка с активно светлой темой", async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });

  test("Проверка стилей активного с тёмной темой ", async () => {
    await test.step("Установка темной темы", async () => {
      await mainPage.setDarkMode();
    });
    await test.step("Скриншотная проверка с активной темной темой", async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});
