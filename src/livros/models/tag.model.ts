import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Tag {
  @Field((type) => Int)
  id: number;
  @Field((type) => String)
  nome: string;
}
