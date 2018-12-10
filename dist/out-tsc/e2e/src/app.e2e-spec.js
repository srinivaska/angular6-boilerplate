'use strict'; // necessary for es6 output in node
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('cli-quickstart App', function () {
    beforeEach(function () {
        return protractor_1.browser.get('/');
    });
    it('should display message saying app works', function () {
        var pageTitle = protractor_1.element(protractor_1.by.css('app-root h1')).getText();
        expect(pageTitle).toEqual('Welcome to My First Angular App!!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map