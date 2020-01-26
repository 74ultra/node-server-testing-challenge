const supertest = require('supertest')

const server = require('./index')

test('welcom route', async () => {
    const res = await supertest(server).get('/')

    expect(res.status).toBe(200)

    expect(res.type).toBe('application/json')

    expect(res.body.message).toMatch(/why are you here/i)
})

