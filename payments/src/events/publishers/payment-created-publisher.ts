import { Subjects, Publisher, PaymentCreatedEvent } from "@sbmytickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
   subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}