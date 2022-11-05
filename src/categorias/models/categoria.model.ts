import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Categoria {
  @Field((type) => Int)
  id: number;
  @Field((type) => String)
  nome: string;
  @Field((type) => String)
  slug: string;
}
