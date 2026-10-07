import { Locator, expect, type Page } from '@playwright/test';
import testDeta from '../TEST_Cases/Test_deta_naukri/Naukri_testdeta.json';


export class loginPage1 {
  readonly page: Page;
  static textvalue: any;
  readonly loginTxt: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly dashboardPage: Locator;
  readonly experienceSlider: Locator;
  readonly locationPune: Locator;
  readonly workModeHybrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginTxt = page.locator("//a[text()='Login']");
    this.usernameInput = page.locator("//input[@placeholder='Enter your active Email ID / Username']");
    this.passwordInput = page.locator("//input[@placeholder='Enter your password']");
    this.submitButton = page.locator("//button[@type='submit']");
    this.searchBox = page.locator("//input[@placeholder='Enter keyword / designation / companies']");
    this.searchButton = page.locator("//span[text()='Search']");
    this.dashboardPage = page.locator("(//a[@alt='Naukri Logo'])[1]");
    this.experienceSlider = page.locator("//div[@class='rc-slider-track']");
    this.locationPune = page.locator("//span[text()='Pune' and @title='Pune']");
    this.workModeHybrid = page.locator("//span[text()='Hybrid']");
  }

  async navigate() {
    await this.page.setViewportSize({ width: 1380, height: 800 });
    await this.page.goto('https://www.naukri.com/', { waitUntil: 'domcontentloaded' });
    await this.page.waitForTimeout(1500);

  }

  async clickLocationPune() {
    await this.locationPune.click();
  }

  async clickHybridWorkMode() {
    await this.workModeHybrid.click();
  }

  async moveExperienceSlider() {

    for (let i = 0; i < 3; i++) {
      await this.experienceSlider.click();
    }
  }

  async enterUsername() {

    await this.loginTxt.click();
    await this.usernameInput.fill(testDeta.username);

  }

  async enterPassword() {

    await this.passwordInput.fill(testDeta.password);

  }

  async clickSubmit() {

    await this.submitButton.click();

  }

  async clickDashboard() {

    await this.dashboardPage.click();
    await this.page.waitForLoadState('domcontentloaded');

  }

  async fillSearchItem() {

    await this.searchBox.fill(testDeta.title1);

  }

  async clickSearchButton() {

    await this.searchButton.click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(1500);

  }

  async searchJob() {

    const search = this.page.locator("//button[@aria-label='Search jobs here']");
    await search.hover();
    await search.click();
    


  }

  async applyJobRelated() {

    const pages = this.page.locator("//div[@class='styles_pages__v1rAK']/a");
    const pageCount = await pages.count();

    console.log(`Total Pages : ${pageCount}`);

    for (let i = 0; i < pageCount; i++) {
      const singlePage = pages.nth(i);
      await singlePage.waitFor({ state: 'visible', timeout: 15000 });

      const pageText = (await singlePage.textContent())?.trim();
      console.log(pageText ?? `Page ${i + 1}`);

      await singlePage.click();
      await this.page.waitForLoadState('domcontentloaded').catch(() => {});
      await this.page.waitForTimeout(1500);

      const jobs = this.page.locator("//a[@class='title ']");
      const jobsVisible = await jobs.first().isVisible().catch(() => false);

      if (!jobsVisible) {
        console.log('No jobs loaded on this page, skipping...');
        continue;
      }

      const totalJobs = await jobs.count();
      console.log(`Jobs Found : ${totalJobs}`);

      for (let j = 0; j < totalJobs; j++) {
        const job = jobs.nth(j);
        await job.waitFor({ state: 'visible', timeout: 15000 });

        const jobTitle = (await job.textContent())?.trim() ?? `Job ${j + 1}`;
        console.log(`Opening : ${jobTitle}`);

        const popupPromise = this.page.waitForEvent('popup', { timeout: 8000 }).catch(() => null);
        await job.click();
        const jobPage = await popupPromise;

        const detailPage = jobPage ?? this.page;
        await detailPage.waitForLoadState('domcontentloaded').catch(() => {});
        await detailPage.waitForTimeout(1500);

        const applyButton = detailPage.locator("//button[text()='Save']/following::button[1]");
        const applied = detailPage.locator("(//span[text()='Applied'])[1]");

        if (await applyButton.isVisible().catch(() => false)) {
          await applyButton.click();
          await detailPage.locator("//div[text()='Applied to ']").waitFor({ state: 'visible', timeout: 20000 }).catch(() => {});
          console.log('Applied successfully');
        } else if (await applied.isVisible().catch(() => false)) {
          console.log('Already Applied');
        }

        if (jobPage) {
          await jobPage.close();
          await this.page.bringToFront();
        } else {
          await this.page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
          await this.page.waitForTimeout(1500);
        }
      }
    }
  }



  async freshnessLast7Days() {

    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await this.page.locator("//span[text()='Select']").click();

    await this.page.locator("//span[text()='Last 7 days']").click();

  }

  async freshnessLast3Days() {

    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await this.page.locator("//span[text()='Select']").click();

    await this.page.locator("//span[text()='Last 3 days']").click();

  }

  async freshnessLast1Day() {

    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await this.page.locator("//span[text()='Select']").click();

    await this.page.locator("//span[text()='Last 1 day']").click();

  }

  async updateResumeHeadline() {

    await this.page.locator("//div[@class='nI-gNb-drawer__bars']").click();

    await this.page.locator("//a[text()='View & Update Profile']").click();

    await this.page.waitForLoadState();

    await this.page.keyboard.press('PageDown');

    await this.page.locator("(//span[text()='editOneTheme'])[2]").click();

    await this.page.locator("//button[text()='Save']").click();

  }

  async updateSkills() {

    await this.page.locator("//div[@class='nI-gNb-drawer__bars']").click();

    await this.page.locator("//a[text()='View & Update Profile']").click();

    await this.page.waitForLoadState();

    await this.page.keyboard.press('PageDown');

    await this.page.locator("(//span[text()='editOneTheme'])[3]").click();

    await this.page.locator("//button[text()='Save']").click();

  }

}


