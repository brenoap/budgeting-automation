// budget.page.js
'use strict';

var BudgetPage = Object.create({
    budget_tab: {get: function(){return browser.element('[href="/budget"]');}},
    reports_tab: {get: function(){return browser.element('[href="/reports"]');}},

    select_category: {get: function(){return browser.element('//*[@id="categId"]/select');}},


    transaction_description: {get: function(){return browser.element('#descriptionId');}},
    transaction_amount: {get: function(){return browser.element('#valueId');}},
    add_button: {get: function(){return browser.element('#addButtonId');}},

    total_inflow_value: {get: function(){return browser.element('#idtotalinflow');}},
    total_outflow_value: {get: function(){return browser.element('#idtotaloutflow');}},
    working_balance_value: {get: function(){return browser.element('#idworkingbalance');}},

    inflow_color: {get: function(){return browser.getCssProperty('#idtotalinflow','color');}},
    outflow_color: {get: function(){return browser.getCssProperty('#idtotaloutflow','color');}},
    working_balance_color: {get: function(){return browser.getCssProperty('#idworkingbalance','color');}}
});

module.exports = BudgetPage