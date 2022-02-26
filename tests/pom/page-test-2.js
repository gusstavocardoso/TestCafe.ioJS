import page from '../../pages/page-model-2.js'

fixture `Use a Page Model`
    .page `https://devexpress.github.io/testcafe/example`;


test('Use a Page Model', async () => {

    await page.selectFeature(2);
    await page.typeName('Peter');
    await page.clickSubmit();

});