// budgetGrid.page.js
'use strict';

var BudgetGridPage = Object.create({
        // should create add an inflow transaction
        inflow_transaction_category: {get: function(){return browser.element('#categoryGridId7').getText();}},
        inflow_transaction_description: {get: function(){return browser.element('#descriptionGridId7').getText();}},
        inflow_transaction_amount: {get: function(){return browser.element('#amountGridId7').getText();}},

        // should create add an inflow transaction
        outflow_transaction_category: {get: function(){return browser.element('#categoryGridId8').getText();}},
        outflow_transaction_description: {get: function(){return browser.element('#descriptionGridId8').getText();}},
        outflow_transaction_amount: {get: function(){return browser.element('#amountGridId8').getText();}},

        // MULTIPLE TRANSACTIONS INFLOW
        multiple1_transaction_category: {get: function(){return browser.element('#categoryGridId9').getText();}},
        multiple1_transaction_description: {get: function(){return browser.element('#descriptionGridId9').getText();}},
        multiple1_transaction_amount: {get: function(){return browser.element('#amountGridId9').getText();}},

        multiple2_transaction_category: {get: function(){return browser.element('#categoryGridId10').getText();}},
        multiple2_transaction_description: {get: function(){return browser.element('#descriptionGridId10').getText();}},
        multiple2_transaction_amount: {get: function(){return browser.element('#amountGridId10').getText();}},

        multiple3_transaction_category: {get: function(){return browser.element('#categoryGridId11').getText();}},
        multiple3_transaction_description: {get: function(){return browser.element('#descriptionGridId11').getText();}},
        multiple3_transaction_amount: {get: function(){return browser.element('#amountGridId11').getText();}},

        multiple4_transaction_category: {get: function(){return browser.element('#categoryGridId12').getText();}},
        multiple4_transaction_description: {get: function(){return browser.element('#descriptionGridId12').getText();}},
        multiple4_transaction_amount: {get: function(){return browser.element('#amountGridId12').getText();}},

        // MULTIPLE TRANSACTIONS OUTFLOW
        multiple1_transaction_category: {get: function(){return browser.element('#categoryGridId13').getText();}},
        multiple1_transaction_description: {get: function(){return browser.element('#descriptionGridId13').getText();}},
        multiple1_transaction_amount: {get: function(){return browser.element('#amountGridId13').getText();}},

        multiple2_transaction_category: {get: function(){return browser.element('#categoryGridId14').getText();}},
        multiple2_transaction_description: {get: function(){return browser.element('#descriptionGridId14').getText();}},
        multiple2_transaction_amount: {get: function(){return browser.element('#amountGridId14').getText();}},

        multiple3_transaction_category: {get: function(){return browser.element('#categoryGridId15').getText();}},
        multiple3_transaction_description: {get: function(){return browser.element('#descriptionGridId15').getText();}},
        multiple3_transaction_amount: {get: function(){return browser.element('#amountGridId15').getText();}},

        multiple4_transaction_category: {get: function(){return browser.element('#categoryGridId16').getText();}},
        multiple4_transaction_description: {get: function(){return browser.element('#descriptionGridId16').getText();}},
        multiple4_transaction_amount: {get: function(){return browser.element('#amountGridId16').getText();}}

});

module.exports = BudgetGridPage