import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Cat } from '../cat/cat.schema';

@Schema()
export class Owner extends Document {
    @Prop()
    name: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cat' }] })
    cats: Cat[];
}

export type OwnerDocument = Owner & Document;
export const OwnerSchema = SchemaFactory.createForClass(Owner);