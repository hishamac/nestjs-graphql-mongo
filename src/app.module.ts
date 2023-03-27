import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    }),
    MongooseModule.forRoot('mongodb+srv://mhpc3414:mhpc3414@blog.b8bpu7m.mongodb.net/?retryWrites=true&w=majority'),
    CatModule,
    OwnerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
