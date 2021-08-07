import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guard/roles.guard';

@Controller('user')
@UseGuards(RolesGuard)
export class UserController {
    @Get()
    async createUser() {
        return 'hello!';
    }
}
