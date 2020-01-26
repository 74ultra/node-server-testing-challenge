const supertest = require('supertest')
const server = require('../index')
const db = require('../data/db.js')

beforeEach(async () => {
    await db.seed.run()
})

test('find', async () => {
    const res = await supertest(server).get("/users")
    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.length).toBeGreaterThan(0)
    expect(res.body[0].username).toBe("A")

})

test("create user", async () => {
    const res = await supertest(server)
      .post("/users/create")
      .send({ username: 'M', password: 'Muncle', department: 'communications'})
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
  })

test("create user", async () => {
    const res = await supertest(server)
        .delete("/users/destroy")
        .send({ username: 'A'})
    expect(res.status).toBe(204)
})

