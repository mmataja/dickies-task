exports.up = function(knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('genre').notNullable();
    table.integer('rating').notNullable();
    table.boolean('explicit').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies');
};
