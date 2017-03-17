'use strict';

// Simply 'inherites' helpers from AccountsTemplates
Template.atForm.helpers(AccountsTemplates.atFormHelpers);

Template.atForm.onCreated(function () {
    this.autorun(() => {
        const state = AccountsTemplates.state.form.get('state');
        const texts = AccountsTemplates.texts;
        DocHead.setTitle(texts.headTitle[state]);
        DocHead.addMeta({name: "description", content: texts.metaDescription[state]});
    });
});