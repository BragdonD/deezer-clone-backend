import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
    constructor() {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID || "your-client-id",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "your-client-secret",
            callbackURL: "http://localhost:3000/auth/google/callback",
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: any) {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        }
        done(null, user);
    }
}