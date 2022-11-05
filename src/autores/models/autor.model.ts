import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Autor {
  @Field((type) => Int)
  id: number;
  @Field((type) => String)
  nome: string;
  @Field((type) => String)
  sobre: string;
}
