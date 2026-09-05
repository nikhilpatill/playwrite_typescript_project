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
    await this.page.goto('https://www.naukri.com/')
    await this.page.waitForLoadState('networkidle');

  }

  async clickLocationPune() {
    await this.locationPune.click();
  }

  async clickHybridWorkMode() {
    await this.workModeHybrid.click();
  }

  async moveExperienceSlider() {

    for (let i = 0; i < 4; i++) {
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
    await this.page.waitForTimeout(2000);

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

      const pageText = await singlePage.textContent();

      console.log(pageText);

      await singlePage.click();

      await this.page.waitForTimeout(2000);

      const jobs = this.page.locator("//a[@class='title ']");

      const totalJobs = await jobs.count();

      console.log(`Jobs Found : ${totalJobs}`);

      for (let j = 0; j < totalJobs; j++) {

        const job = jobs.nth(j);

        const jobTitle = await job.textContent();

        console.log(`Opening : ${jobTitle}`);

        const [jobPage] = await Promise.all([
          this.page.waitForEvent('popup'),
          job.click()
        ]);

        await jobPage.waitForLoadState();
        await this.page.waitForTimeout(2000);
        const applyButton = jobPage.locator("//button[text()='Save']/following::button[1]");

        const applied = jobPage.locator("(//span[text()='Applied'])[1]");

        if (await applyButton.isVisible()) {

          await applyButton.click();
          await jobPage.waitForTimeout(10000);

          const success = jobPage.locator("//div[text()='Applied to ']");
          if (await success.isVisible()) {
            console.log(await success.textContent());
          }
          await jobPage.waitForTimeout(10000);

        } else {

          if (await applied.isVisible()) {
            console.log("Already Applied");
          }

        }
        await jobPage.close();
        await this.page.bringToFront();

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


