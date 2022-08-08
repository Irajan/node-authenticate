import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("refresh_token", (table) => {
    table.increments();
    table.string("refresh_token").notNullable();
    table.string("user_id").notNullable();
    table.string("expires_at").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("refresh_token");
}
