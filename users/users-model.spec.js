const db = require('../data/db.js')
const usersModel = require('./users-model.js');

beforeEach(async () => {
    await db.seed.run()
})

describe('users-model', () => {
    
    test('find list of users', async () => {
        const res = await usersModel.find()
        expect(res.length).toBeGreaterThan(0)
    })
    
    
    test("findByUserName", async () => {
        const res = await usersModel.findByUserName('A')

        expect(res.department).toBe('biology')
    })

    test('insert', async () => {
        await usersModel.insert({ username: 'V', password: 'Vuncle', department: 'communications'})
        const users = await db('users').select()
        expect(users).toHaveLength(7)
    })

    test('delete user', async () => {
        await usersModel.deleteUser('A')
        const users = await db('users').select()
        expect(users).toHaveLength(5)
    })


})