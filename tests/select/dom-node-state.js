import { Selector } from 'testcafe';

fixture `My fixture`
    .page `http://devexpress.github.io/testcafe/example/`;

test('DOM Node State', async t => {
    const sliderHandle         = Selector('#slider').child('span');
    const sliderHandleSnapshot = await sliderHandle();

    console.log(sliderHandleSnapshot.hasClass('ui-slider-handle'));    // => true
    console.log(sliderHandleSnapshot.childElementCount);               // => 0
});