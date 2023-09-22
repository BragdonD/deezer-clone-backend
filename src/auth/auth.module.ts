import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [], // Will have to add UserModule here
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
