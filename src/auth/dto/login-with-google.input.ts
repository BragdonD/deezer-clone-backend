import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LoginWithGoogleInput {
    @Field(() => String, { description: "Google access token" })
    accessToken: string;
} 