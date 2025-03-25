import { Subjects, Publisher, ExpirationCompleteEvent } from "@sbmytickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
   subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
   
}