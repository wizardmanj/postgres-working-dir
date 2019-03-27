
exports.up = function(knex, Promise) {

    return knex.schema.createTable('milestones', function (t) {
        t.increments('id').primary();
        t.string('description', 512);
        t.date('date_achieved');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('milestones');
};
