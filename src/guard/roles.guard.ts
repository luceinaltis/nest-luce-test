import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext) {
        const roles = this.reflector.get<string[]>(
            'roles',
            context.getHandler(),
        );
        if (!roles) {
            return false;
        }
        console.log(roles);

        return true;
    }
}
