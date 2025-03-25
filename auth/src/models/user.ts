import mongoose from "mongoose";
import { Password } from "../services/password";

//defines the shape of the data required to create a new user
interface UserAttrs{
   email: string;
   password: string;
}

interface UserModel extends mongoose.Model<UserDoc>{
   build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document{
   email: string;
   password: string;
   // createdAt: string;
   // updatedAt: string;

}

const userSchema = new mongoose.Schema({
      email:{
         type: String,
         required: true
      },
      password:{
         type: String,
         required:true
      },
   },
   {
      toJSON: {
         transform(doc, ret){          // this will transform the data that will be send as a response during the api Calls
            ret.id = ret._id;          // passing the < id  >  in place of < _id > to maintain overall standard of the api
            delete ret._id;            // deleting all other properties which we don't want in the api response.
            delete ret.password;
            delete ret.__v;
         }
      }
   }
);

userSchema.pre('save', async function(done){
   if(this.isDirectModified('password')){
      const hashed = await Password.toHash(this.get('password'));
      this.set('password',hashed)
   }
   done();
});

userSchema.statics.build = (attrs: UserAttrs) =>{
   return new User(attrs);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
