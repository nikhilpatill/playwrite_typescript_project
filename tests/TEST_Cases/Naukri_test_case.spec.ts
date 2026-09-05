import { test, expect } from './Hooks_naukri';


test('Search Job - Last 1 Day', async ({ LoginPage }) => {
  //  const LoginPage = new loginPage1(page);
  await LoginPage.searchJob();
  await LoginPage.fillSearchItem();
  await LoginPage.clickSearchButton();
  await LoginPage.freshnessLast1Day();
  await LoginPage.clickLocationPune();
  await LoginPage.moveExperienceSlider();
  await LoginPage.applyJobRelated();

});

test('Search Job - Last 1 Day + Hybrid Work Mode', async ({ LoginPage }) => {
  //  const LoginPage = new loginPage1(page);
  await LoginPage.searchJob();
  await LoginPage.fillSearchItem();
  await LoginPage.clickSearchButton();
  await LoginPage.freshnessLast1Day();
  await LoginPage.clickHybridWorkMode();
  await LoginPage.clickLocationPune();
  await LoginPage.moveExperienceSlider();
  await LoginPage.applyJobRelated();

});

test('Search Job - Last 3 Days', async ({ LoginPage }) => {
  //  const LoginPage = new loginPage1(page);
  await LoginPage.searchJob();
  await LoginPage.fillSearchItem();
  await LoginPage.clickSearchButton();
  await LoginPage.freshnessLast3Days();
  await LoginPage.moveExperienceSlider();
  await LoginPage.applyJobRelated();

});

test('Search Job - Last 1 Day + Pune Location', async ({ LoginPage }) => {
  //const LoginPage = new loginPage1(page);
  await LoginPage.searchJob();
  await LoginPage.fillSearchItem();
  await LoginPage.clickSearchButton();
  await LoginPage.freshnessLast1Day();
  await LoginPage.clickLocationPune();
  await LoginPage.moveExperienceSlider();
  await LoginPage.applyJobRelated();

});

test('Search Job - Last 3 Days + Pune Location', async ({ LoginPage }) => {
  // const LoginPage = new loginPage1(page);
  await LoginPage.searchJob();
  await LoginPage.fillSearchItem();
  await LoginPage.clickSearchButton();
  await LoginPage.freshnessLast3Days();
  await LoginPage.clickLocationPune();
  await LoginPage.moveExperienceSlider();
  await LoginPage.applyJobRelated();

});

test('Update Profile - Skills', async ({ LoginPage }) => {
  //  const LoginPage = new loginPage1(page);
  await LoginPage.clickDashboard();
  await LoginPage.updateSkills();

});

test('Update Profile - Resume Headline', async ({ LoginPage }) => {
  // const LoginPage = new loginPage1(page);
  await LoginPage.clickDashboard();
  await LoginPage.updateResumeHeadline();

});