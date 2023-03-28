import { ObjectType, Field, InputType } from "@nestjs/graphql";

@ObjectType('OwnerType')
export class OwnerType {
    @Field()
    _id: string

    @Field()
    name: string;

    @Field(type=>[String])
    cats:string[]
}

@InputType('OwnerInputType')
export class OwnerInputType {
    @Field()
    name: string;
}