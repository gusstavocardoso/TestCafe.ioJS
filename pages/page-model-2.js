import {t, Selector } from 'testcafe';

class Page {
    constructor () {
        this.nameInput               = Selector('input').withAttribute('data-testid', 'name-input');
        this.importantFeaturesLabels = Selector('legend').withExactText('Which features are important to you:').parent().child('p').child('label');
        this.submitButton            = Selector('button').withAttribute('data-testid', 'submit-button');
    }

    async selectFeature(number) {
        await t.click(this.importantFeaturesLabels.nth(number));
    }

    async clickSubmit() {
        await t.click(this.submitButton);
    }

    async typeName(name) {
        await t.typeText(this.nameInput, name);
    }
}

export default new Page();