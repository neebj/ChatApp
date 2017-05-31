let postgrator = require('postgrator');

postgrator.setConfig({
  migrationDirectory: __dirname + '/migrations',
  driver: 'pg',
  connectionString: process.env.DATABASE_URL||"postgres://postgres:password-1@localhost:5432/TestDB",
});

// migrate to version specified, or supply 'max' to go all the way up
postgrator.migrate('max', function(err, migrations) {
  if (err) {
    console.log(err);
  } else {
    console.log(
      ['*******************']
        .concat(migrations.map(migration => `checking ${migration.filename}`))
        .join('\n')
    );
  }
  postgrator.endConnection(() => {});
});