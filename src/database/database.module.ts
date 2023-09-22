import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "cockroachdb",
            host: "localhost",
            port: 26257,
            
        })
    ],
})
export class DatabaseModule {}
