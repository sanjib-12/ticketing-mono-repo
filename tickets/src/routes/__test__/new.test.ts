import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import { natsWrapper } from '../../nats-wrapper';


it('has a route handler listening to /api/tickets for post request', async() =>{
   const response = await request(app)
   .post('/api/tickets')
   .send({});

   expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in  ', async() =>{
   const response = await request(app)
      .post('/api/tickets')
      .send({})

   expect(response.status).toEqual(401);
});

it('returns a status other than 401 if the user is signed in', async() =>{
   
   const response = await request(app)
   .post('/api/tickets')
   .set('Cookie', global.signin())
   .send({})
  
   expect(response.status).not.toEqual(401);

});

it('returns an error if and invalid title is provided', async () =>{
   await request(app)
      .post('/api/tickets')
      .set('Cookie', global.signin())
      .send({
         title: '',
         price: 10
      })
      .expect(400);
      
   await request(app)
      .post('/api/tickets')
      .set('Cookie', global.signin())
      .send({
         price: 10
      })
      .expect(400);

});

it('returns an error if and invalid price is provided', async () =>{
   await request(app)
   .post('/api/tickets')
   .set('Cookie', global.signin())
   .send({
      title:'dfdf',
      price: -10
   })
   .expect(400);

   await request(app)
   .post('/api/tickets')
   .set('Cookie', global.signin())
   .send({
      title: 'fjdksfd'
   })
   .expect(400);

});

it('creates a ticket with valid inputs', async () =>{
   // add in a check to make sure a ticket was saved
   let tickets = await Ticket.find({});
   expect(tickets.length).toEqual(0);
   await request(app)
      .post('/api/tickets')
      .set('Cookie', global.signin())
      .send({
         title: 'asdfij',
         price: 20
      })
      .expect(201);
   
   tickets = await Ticket.find({});
   expect(tickets.length).toEqual(1);
});

it('publishes an event', async () =>{
   const title = 'aslddfj'

   await request(app)
   .post('/api/tickets')
   .set('Cookie', global.signin())
   .send({
      title,
      price: 20
   })
   .expect(201);

   expect(natsWrapper.client.publish).toHaveBeenCalled();
});
