import { NotFoundException } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
    let service: MoviesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MoviesService],
        }).compile();

        service = module.get<MoviesService>(MoviesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getAll()', () => {
        it('should return an array', () => {
            const result = service.getAll();
            expect(result).toBeInstanceOf(Array);
        });
    });

    describe('getOne()', () => {
        it('should return a movie', () => {
            service.create({
                title: '랑종',
                genres: ['test'],
                year: 2000,
            });
            const movie = service.getOne(1);
            expect(movie).toBeDefined();
            expect(movie.id).toEqual(1);
        });

        it('should throw 404 error', () => {
            try {
                service.getOne(999);
            } catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
            }
        });
    });

    describe('deleteOne()', () => {
        it('deletes a movie', () => {
            service.create({
                title: '랑종',
                genres: ['test'],
                year: 2000,
            });

            const beforeDelete = service.getAll();
            service.deleteOne(1);
            const afterDelete = service.getAll();
            expect(afterDelete.length).toBeLessThan(beforeDelete.length);
        });

        it('should return a 404 error', () => {
            try {
                service.deleteOne(999);
            } catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
            }
        });
    });

    describe('create()', () => {
        it('should create a movie', () => {
            const beforeCreate = service.getAll().length;
            service.create({
                title: '랑종',
                genres: ['test'],
                year: 2000,
            });
            const afterCreate = service.getAll().length;

            expect(afterCreate).toBeGreaterThan(beforeCreate);
        });
    });

    describe('update()', () => {
        it('should update a movie', () => {
            service.create({
                title: '랑종',
                genres: ['test'],
                year: 2000,
            });
            service.update(1, {
                title: 'Update Test',
            });
            const afterUpdate = service.getOne(1);

            expect(afterUpdate.title).toBe('Update Test');
        });

        it('should return a 404 error', () => {
            try {
                service.update(999, { title: 'Update Test' });
            } catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
            }
        });
    });
});
