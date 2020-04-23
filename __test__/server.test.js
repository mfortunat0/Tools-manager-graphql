const app = require("../src/server");
const request = require("supertest");
const { Tools } = require("../database/models");

const exampleTools = `{
  title: "titulo",
  link: "link",
  description: "description",
  tags: ["item1", "item2"]
}`;

afterAll(async () => {
  await Tools.destroy({ truncate: true });
  Tools.sequelize.close();
});

test("Test create tools", async () => {
  await request(app)
    .post("/graphql")
    .send({ query: `mutation{create(tools:${exampleTools})}` })
    .expect(200);
});

test("Test findAll tools", async () => {
  await request(app)
    .post("/graphql")
    .send({ query: "{findAll{id,link,description,tags,title}}" })
    .expect(200);
});

test("Test findById tools", async () => {
  await request(app)
    .post("/graphql")
    .send({ query: "{findById(id:1){id,link,description,tags,title}}" })
    .expect(200);
});

test("Test updateOne tools", async () => {
  await request(app)
    .post("/graphql")
    .send({ query: `mutation{updateOne(id:1,tools:${exampleTools})}` })
    .expect(200);
});

test("Test deleteOne tools", async () => {
  await request(app)
    .post("/graphql")
    .send({ query: "mutation{deleteOne(id:1)}" })
    .expect(200);
});
