describe('RNestarguars', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Search input', async () => {
    await expect(element(by.id('searchBar'))).toBeVisible();
  });

  it('search for Anakin', async () => {
    await expect(element(by.id('searchBar'))).toBeVisible();
    await element(by.id('searchBar')).typeText('anakin');
    await expect(element(by.text('Anakin Skywalker'))).toBeVisible();
    await expect(element(by.text('Person'))).toBeVisible();
  });

  it('search for amidala and go to details', async () => {
    await expect(element(by.id('searchBar'))).toBeVisible();
    await element(by.id('searchBar')).typeText('amidala');
    await expect(element(by.text('Padmé Amidala'))).toBeVisible();
    await element(by.id('detailsButton')).tap();
    await expect(element(by.text('Mass: 45'))).toBeVisible();
  });
});
