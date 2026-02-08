import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common"
import { plainToInstance } from "class-transformer"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"

interface ClassConstructor {
    new(...argm: any[]): {}
}
export function Serialize(dto: any) {
    return UseInterceptors(new SerializeInterceptor(dto))
}
export class SerializeInterceptor implements NestInterceptor {
    constructor(private dto: ClassConstructor) { }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data: ClassConstructor) => {
                return plainToInstance(this.dto, data, {
                    excludeExtraneousValues: true
                })
            })
        )
    }
}
