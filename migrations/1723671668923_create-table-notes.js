/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable("notes", {
    id: "id",
    title: {
      type: "varchar(1000)",
      notNull: true,
    },
    body: {
      type: "varchar(5000)",
      notNull: true,
    },
    createdAt: {
      type: "timestamptz",
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => pgm.dropTable("notes");
