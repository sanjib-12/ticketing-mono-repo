import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () =>{
   return request(app)
      .post('/api/users/signup')
      .send({
         email: 'test@test.com',
         password: 'password'
      })
      .expect(201);
});

it('return a 400 with an invalid email', async() =>{
   return request(app)
   .post('/api/users/signup')
   .send({
      email: 'asdfaff',
      password: 'password'
   })
   .expect(400);
});

it('return a 400 with an invalid passort', async() =>{
   return request(app)
   .post('/api/users/signup')
   .send({
      email: 'sanjib@gmail.com',
      password: 'p'
   })
   .expect(400);
});

it('return a 400 with missing email and password', async() =>{
   await request(app)
   .post('/api/users/signup')
   .send({
      email: 'sanjib@gmail.com',
   })
   .expect(400);

   await request(app)
   .post('/api/users/signup')
   .send({
      password: 'password'
   })
   .expect(400);
});

it('disallows duplicate emails', async() =>{
   await request(app)
   .post('/api/users/signup')
   .send({
      email: 'test@test.com',
      password: 'password'
   })
   .expect(201);

   await request(app)
   .post('/api/users/signup')
   .send({
      email: 'test@test.com',
      password: 'password'
   })
   .expect(400)
});

it('sets a cookie after successful signup', async() =>{
   const response = await request(app)
      .post('/api/users/signup')
      .send({
         email: 'test@test.com',
         password: 'password'
      })
      .expect(201);
   expect(response.get('Set-Cookie')).toBeDefined();
})