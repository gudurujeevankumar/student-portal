const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');

beforeAll(async () => {
    await mongoose.connect('your-mongodb-uri-here', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('User Login', () => {
    it('should login a user', async () => {
        const user = new User({ name: 'John Doe', rollNumber: '12345', mobileNumber: '9876543210', password: 'password' });
        await user.save();

        const res = await request(app)
            .post('/api/users/login')
            .send({ rollNumber: '12345', mobileNumber: '9876543210', password: 'password' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});
