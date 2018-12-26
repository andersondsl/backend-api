module.exports = app => {
  app
    .route('/users')
    .post(app.api.user.save)
    .get(app.api.user.get)

  app
    .route('/users/:id')
    .put(app.api.user.save)
    .get(app.api.user.getById)

  app
    .route('/categories')
    .get(app.api.category.get)
    .post(app.api.category.save)

  app
    .route('/categories/tree')
    .get(app.api.category.getTree)

  app
    .route('/category/:id')
    .get(app.api.category.getById)
    .remove(app.api.category.remove)

  app
    .route('/products')
    .get(app.api.product.get)
    .post(app.api.product.save)

  app
    .route('/products/:id')
    .get(app.api.product.getById)
    .put(app.api.product.save)
    .delete(app.api.product.remove)

  app.route('/categories/:id/products')
    .get(app.api.product.getByCategory)
}
