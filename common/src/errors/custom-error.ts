// Below is the abstract class which means this cannot used to create the direct instance of class. 
// The abstract is the typescript keyword. 
// And when creating the class the subclass must contain the property which are defined in abstract.

export abstract class CustomError extends Error {
   abstract statusCode: number;

   constructor(message: string){
      super(message)
      Object.setPrototypeOf(this, CustomError.prototype);
   }
   abstract serializeErrors(): {message: string; field?: string}[]
}