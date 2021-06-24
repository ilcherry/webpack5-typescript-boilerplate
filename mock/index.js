const config = {
  '/roles': {
    data: { roles: ['admin', 'customer'], code: 0, message: 'ok' },
  },

  '/count': {
    data: { count: 99, code: 0, message: 'ok' },
  },
};
// for example to use
// 可以结合 mockjs 和 fake.js 使用
// '/api/json/path': {
//   // 如果使用路径的话，需要使用绝对路径，避免在传参过程中造成路径不匹配
//   path: path.join(__dirname, './json/result.json'),
// },
// '/api/mockjs/data': {
//   data: {
//     'result|3': '*',
//   },
// },
// '/api/mockjs/path': {
//   path: path.join(__dirname, './json/mockjs.json'),
// },

module.exports = config;
