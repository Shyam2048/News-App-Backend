import Knex from "knex";

export const knex = Knex({
  client: "pg",
  connection: {
    port: "5432",
    user: "postgres",
    password: "sahil",
    host: "localhost",
    database: "news"
  }
});
