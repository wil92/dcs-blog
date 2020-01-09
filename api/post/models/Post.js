'use strict';

/**
 * Lifecycle callbacks for the `Post` model.
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  // beforeSave: async (model) => {},

  // After saving a value.
  // Fired after an `insert` or `update` query.
  // afterSave: async (model, result) => {},

  // Before fetching all values.
  // Fired before a `fetchAll` operation.
  // beforeFetchAll: async (model) => {},

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  // afterFetchAll: async (model, results) => {},

  // Fired before a `fetch` operation.
  // beforeFetch: async (model) => {},

  // After fetching a value.
  // Fired after a `fetch` operation.
  // afterFetch: async (model, result) => {},

  // Before creating a value.
  // Fired before an `insert` query.
  beforeCreate: async (model) => {
    model.name = getNameFromTitle(model.title);
  },

  // After creating a value.
  // Fired after an `insert` query.
  // afterCreate: async (model, result) => {},

  // Before updating a value.
  // Fired before an `update` query.
  beforeUpdate: async (model) => {
    if (model._update.title) {
      model._update.name = getNameFromTitle(model._update.title);
    }
  },

  // After updating a value.
  // Fired after an `update` query.
  // afterUpdate: async (model, result) => {},

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  // afterDestroy: async (model, result) => {}
};

function getNameFromTitle(title) {
  let result =  '', subVal = '';
  for (let i = 0; i < title.length; i++) {
    if (title[i] === ' ') {
      result += (result !== '' && subVal ? '-' : '') + subVal;
      subVal = '';
    } else {
      subVal += title[i];
    }
  }
  result = result + (result && subVal !== '' ? '-' : '') + subVal;
  return result.toLowerCase();
}
