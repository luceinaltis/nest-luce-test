import {
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Body,
    Query,
} from '@nestjs/common';
import { Movie } from './entities/movite.entitiy';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Post()
    getOne(@Body() movieData: string) {
        return this.moviesService.create(movieData);
    }

    @Delete(':id')
    deleteMovie(@Param('id') movieId: string) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    patchMovie(@Param('id') movieId: string, @Body() updateData) {
        return {
            id: movieId,
            ...updateData,
        };
    }

    @Get('search')
    search(@Query('year') searchingYear: string) {
        return `searching ${searchingYear}...`;
    }
}
