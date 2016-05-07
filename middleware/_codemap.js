module.exports = {
  // meta
  _ns: 'motley',

  // named middleware
  'middleware.vars': require('./vars'),

  // register handlers with weights
  'middleware[]': [
    '#middleware.vars'
  ]
}