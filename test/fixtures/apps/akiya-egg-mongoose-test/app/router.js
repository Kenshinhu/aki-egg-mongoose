'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.post('/customer', controller.customer.create);
};
