const { Selector } = require("testcafe");

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}

exports.HomePage = {
    registerLink: function () {
        return select('a').withText('Register');
    }
}