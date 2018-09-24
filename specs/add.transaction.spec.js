//add.transaction.spec.js
'use strict';

var BudgetPage = require('../pages/budget.page');
var BudgetGridPage = require('../pages/budgetGrid.page');
var ReportsPage = require('../pages/reports.page');
var test_data = require('../test_data/test_data.json');

describe('create some basic transactions > ', function() {

	it('should create add an inflow transaction', function() {
	    // creating transaction
        //BudgetPage.select_category.selectByValue('15');
        BudgetPage.transaction_description.setValue(test_data.inflow_transaction.description);
        BudgetPage.transaction_amount.setValue(test_data.inflow_transaction.value);
        BudgetPage.add_button.click();

		// the transaction expected to be created
		expect(browser.getText(BudgetGridPage.inflow_transaction_category)).toBe(test_data.inflow_transaction.category)
		expect(browser.getText(BudgetGridPage.inflow_transaction_description)).toBe(test_data.inflow_transaction.description)
		expect(browser.getText(BudgetGridPage.inflow_transaction_amount)).toBe(test_data.inflow_transaction.amount)
	});

	it('should create add an outflow transaction', function() {
		BudgetPage.select_category.selectByValue('6');
        BudgetPage.transaction_description.setValue(test_data.outflow_transaction.description);
        BudgetPage.transaction_amount.setValue(test_data.outflow_transaction.value);
        BudgetPage.add_button.click();

        // the transaction expected to be created
        expect(browser.getText(BudgetGridPage.outflow_transaction_category)).toBe(test_data.inflow_transaction.category)
        expect(browser.getText(BudgetGridPage.outflow_transaction_description)).toBe(test_data.inflow_transaction.description)
        expect(browser.getText(BudgetGridPage.outflow_transaction_amount)).toBe(test_data.inflow_transaction.amount)
	});

});