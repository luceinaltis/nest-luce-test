import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesModule } from './movies/movies.module';
import { AdminModule } from './admin/admin.module';

@Module({
    imports: [MoviesModule, AdminModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
