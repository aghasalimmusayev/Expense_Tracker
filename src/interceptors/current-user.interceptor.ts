import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from "@nestjs/common"
import { UserService } from "src/users/user.service"

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
    constructor(private userService: UserService) { }

    async intercept(context: ExecutionContext, next: CallHandler<any>) {
        const request = context.switchToHttp().getRequest()
        const { userId } = request.session || {}
        if (userId) {
            const user = await this.userService.findById(Number(userId))
            request.currentUser = user
        }
        return next.handle()
    }
}

