import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AutoresModule } from './autores/autores.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { CategoriasModule } from './categorias/categorias.module';
import { LivrosModule } from './livros/livros.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cors: {
        origin: 'http://localhost:3000',
        credentials: false,
      },
    }),
    AutoresModule,
    CategoriasModule,
    LivrosModule,
    CarrinhoModule,
  ],
})
export class AppModule {}
