import { Listener, OrderCreatedEvent, OrderStatus, Subjects } from "@sbmytickets/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publisher/ticket-updated-publisher";


export class orderCreatedListener extends Listener<OrderCreatedEvent>{
   subject: Subjects.OrderCreated = Subjects.OrderCreated;

   queueGroupName = queueGroupName;

   async onMessage(data: OrderCreatedEvent['data'], msg: Message){
      // Find the ticket that the order is reserving
      const ticket = await Ticket.findById(data.ticket.id);
      // IF no ticket, throw error
      if(!ticket){
         throw new Error('Ticket is not found');
      }
      // Mark the ticket as being reserved by setting its orderID property
      ticket.set({orderId: data.id});

      //Save the ticket
      await ticket.save();

      await new TicketUpdatedPublisher(this.client).publish({
         id: ticket.id,
         price: ticket.price,
         title: ticket.title,
         userId: ticket.userId,
         orderId: ticket.orderId,
         version: ticket.version,
      });

      // ack the message
      msg.ack();
   }


}