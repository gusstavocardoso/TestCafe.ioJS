import { Selector } from 'testcafe';

fixture `Example`
    .page `https://js.devexpress.com`;

test('Resize Window test', async t => {
    await t
        .resizeWindowToFitDevice('iphonexr')
        .maximizeWindow();
});