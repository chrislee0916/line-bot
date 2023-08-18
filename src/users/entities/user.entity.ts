import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document{
    @Prop()
    userId: string;

    @Prop()
    name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
