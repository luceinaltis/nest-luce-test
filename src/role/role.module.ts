import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { roleProviders } from './role.providers';
import { RoleService } from './role.service';

@Module({
  imports: [DatabaseModule],
  providers: [...roleProviders, RoleService],
})
export class RoleModule {}
