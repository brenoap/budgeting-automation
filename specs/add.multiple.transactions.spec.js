//add.multiple.transactions.spec.js
'use strict';

var BudgetPage = require('../pages/budget.page');
var BudgetGridPage = require('../pages/budgetGrid.page');
var ReportsPage = require('../pages/reports.page');
var test_data = require('../test_data/test_data.json');

describe('create multiple transactions > ', function() {

    it('should create outflow transaction with big description', function() {

    	// creating transaction
        BudgetPage.select_category.selectByValue('10');
        BudgetPage.transaction_description.setValue(test_data.add_outflow_big_text.description);
        BudgetPage.transaction_amount.setValue(test_data.add_outflow_big_text.amount);
        BudgetPage.add_button.click();

        // the transaction expected to be created
        expect(browser.getText(BudgetGridPage.inflow_transaction_category)).toBe(test_data.add_outflow_big_text.category);
        expect(browser.getText(BudgetGridPage.inflow_transaction_description)).toBe(test_data.add_outflow_big_text.description);
        expect(browser.getText(BudgetGridPage.inflow_transaction_amount)).toBe(test_data.add_outflow_big_text.amount);

    });

    it('should create outflow transaction with big amount', function() {

    	// creating transaction
        BudgetPage.select_category.selectByValue('15');
        BudgetPage.transaction_description.setValue(test_data.add_inflow_big_amount.description);
        BudgetPage.transaction_amount.setValue(test_data.add_inflow_big_amount.amount);
        BudgetPage.add_button.click();

        // the transaction expected to be created
        expect(browser.getText(BudgetGridPage.inflow_transaction_category)).toBe(test_data.add_inflow_big_amount.category);
        expect(browser.getText(BudgetGridPage.inflow_transaction_description)).toBe(test_data.add_inflow_big_amount.description);
        expect(browser.getText(BudgetGridPage.inflow_transaction_amount)).toBe(test_data.add_inflow_big_amount.amount);

    });

	it('should create multiple inflow transactions', function() {

        for(int i = 0; i < 100; i++) {
            BudgetPage.select_category.selectByValue('15');
            BudgetPage.transaction_description.setValue(test_data.inflow_transaction.description+" plus "+ i);
            BudgetPage.transaction_amount.setValue(test_data.inflow_transaction.amount+50);
            BudgetPage.add_button.click();
        }

        // inflow total expected to be red and negative value
        expect(browser.getText(BudgetGridPage.inflow_color)).toBe('#148727');
        // balance expected to be red and negative value
        expect(browser.getText(BudgetGridPage.working_balance_color)).toBe('#148727');

	});

	it('should create multiple outflow transactions', function() {

	    for(int i = 0; i < 100; i++) {
            BudgetPage.select_category.selectByValue('8');
            BudgetPage.transaction_description.setValue(test_data.outflow_transaction.description+" minus "+ i);
            BudgetPage.transaction_amount.setValue(test_data.outflow_transaction.amount+50);
            BudgetPage.add_button.click();
        }

        // outflow total expected to be green
        expect(browser.getText(BudgetGridPage.inflow_color)).toBe('#e31515');
        // balance expected to be green
        expect(browser.getText(BudgetGridPage.working_balance_color)).toBe('#e31515');

    });

});