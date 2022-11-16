import { AppDataSource } from '../../../data-source'
import { DataSource } from 'typeorm'
import { user } from '../../mocks'
import { app } from '../../../app'
import request from 'supertest'


describe('Tests for user routes', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('Must be able to create a user', async () => {

        const response = await request(app).post('/users').send(user)

        expect(response.status).toBe(201)

        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('username')
        expect(response.body).toHaveProperty('password')
        expect(response.body).toHaveProperty('accountId')
    })

    test('Must be able to prevent user creation for having less than 3 characters in username', async () => {

        user.username = 'ex'
        
        const response = await request(app).post('/users').send(user)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

    test('Must be able to prevent user creation for having less than 8 characters in the password', async () => {
        
        user.password = 'ex'
        
        const response = await request(app).post('/users').send(user)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

    test('Must be able to prevent user creation from not having capital letters in password', async () => {
        
        user.password = 'example123'
        
        const response = await request(app).post('/users').send(user)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

    test('Must be able to prevent user creation from not having numbers in password', async () => {
        
        user.password = 'EXAMPLEexample'
        
        const response = await request(app).post('/users').send(user)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })
})