// reports.page.js
'use strict';

var ReportPage = Object.create({
    inflow_vs_outflow_tab: { get: function () { return browser.element('[href="/reports/inflow-outflow"]');}},
    spending_by_category_tab: { get: function () { return browser.element('[href="/reports/spending"]');}}
});