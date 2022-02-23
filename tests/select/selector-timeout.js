import { Selector } from 'testcafe';

fixture `My fixture`
    .page `http://www.example.com/`;

const timedOutSelector  = Selector('#element-id', {timeout: 10000});
const immediateSelector = Selector('#element-id');

test('Test timeouts', async t => {
    await t.expect(timedOutSelector.exists).ok();
    await t.expect(immediateSelector.exists).ok();
    await t.expect(timedOutSelector.count).eql(1);
    await t.expect(immediateSelector.count).eql(1);
    //these assertions execute immediately regardless of the selector timeout

    await t.expect(immediateSelector.exists).ok({timeout: 10000});
    await t.expect(timedOutSelector.exists).ok({timeout: 10000});
    await t.expect(immediateSelector.count).eql(1, 'count elements', {timeout: 10000});
    await t.expect(timedOutSelector.count).eql(1, 'count elements', {timeout: 10000});
    //these assertions retry within the assertion timeout specified
});