// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri:
          "mongodb+srv://alexanderjarl:4PLP1h38Om58GocC@cluster0.gclk0.mongodb.net/strapidb?retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
