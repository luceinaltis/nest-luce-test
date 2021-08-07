import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesModule } from './movies/movies.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [MoviesModule, UserModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
