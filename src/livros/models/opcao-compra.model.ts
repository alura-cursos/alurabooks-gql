import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class OpcaoCompra {
  @Field((type) => Int)
  id: number;
  @Field((type) => String)
  titulo: string;
  @Field((type) => [String], { nullable: true })
  formatos?: string[];
  @Field((type) => Number)
  preco: number;
}
