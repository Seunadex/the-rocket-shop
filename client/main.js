Template.registerHelper("money", (amount) => {
    return accounting.formatMoney(amount);
});