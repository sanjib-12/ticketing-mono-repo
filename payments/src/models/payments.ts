import mongoose from 'mongoose';

// Define the interface for a Payment document
interface PaymentAttrs {
   orderId: string;
   stripeId: string;
}

// Define the interface for a Payment model
interface PaymentModel extends mongoose.Model<PaymentDoc> {
   build(attrs: PaymentAttrs): PaymentDoc;
}

// Define the interface for a Payment document
interface PaymentDoc extends mongoose.Document {
   orderId: string;
   stripeId: string;
}

// Define the schema for a Payment
const paymentSchema = new mongoose.Schema(
   {
      orderId: {
         type: String,
         required: true,
      },
      stripeId: {
         type: String,
         required: true,
      },
   },
   {
      toJSON: {
         transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
         },
      },
   }
);

// Add a static method to the schema to build a Payment
paymentSchema.statics.build = (attrs: PaymentAttrs) => {
   return new Payment(attrs);
};

// Create the Payment model
const Payment = mongoose.model<PaymentDoc, PaymentModel>('Payment', paymentSchema);

export { Payment };