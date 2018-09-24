// add.transaction.missing.parameter.spec.js
'use strict';

var BudgetPage = require('../pages/budget.page');
var BudgetGridPage = require('../pages/budgetGrid.page');
var ReportsPage = require('../pages/reports.page');
var test_data = require('../test_data/test_data.json');

describe('create some negative scenarios > ', function() {

	it('should create an outflow transaction without description', function() {
	    // creating transaction
        BudgetPage.select_category.selectByValue('6');
        BudgetPage.transaction_amount.setValue(test_data.outflow_transaction.value);
        BudgetPage.add_button.click();

		// the transaction expected to be created
		expect(browser.getText(BudgetGridPage.inflow_transaction_category)).toBe(test_data.inflow_transaction.category)
		expect(browser.getText(BudgetGridPage.inflow_transaction_description)).toBe("")
		expect(browser.getText(BudgetGridPage.inflow_transaction_amount)).toBe(test_data.inflow_transaction.amount)
	});

	it('should create an outflow transaction without value', function() {

		BudgetPage.select_category.selectByValue('6');
        BudgetPage.transaction_description.setValue(test_data.outflow_transaction.description);
        BudgetPage.add_button.click();

        // the transaction expected to be created
        expect(BudgetPage.add_button.isVisible()).toBe(false);

	});

});