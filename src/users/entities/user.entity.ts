import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => String, { description: 'main identifier of each user' })
  exampleField: string;

  @Field(() => Date, { description: 'date of birth of the user' })
  dateOfBirth: Date;

  @Field(() => Date, { description: 'date of creation of the user' })
  createdAt: Date;

  @Field(() => Date, { description: 'date of last update of the user' })
  updatedAt: Date;

  @Field(() => String, { description: 'first name of the user' })
  fname: string;

  @Field(() => String, { description: 'last name of the user' })
  lname: string;

  @Field(() => String, { description: 'email of the user' })
  email: string;

  @Field(() => String, { description: 'password of the user' })
  password: string;

  @Field(() => String, { description: 'phone number of the user' })
  phone: string;

  @Field(() => String, { description: 'username of the user' })
  username: string;
}
