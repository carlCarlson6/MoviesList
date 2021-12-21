import { v4 as generateUuid, validate as validateUuid } from "uuid";

export class UserId {
    constructor(
        readonly value: string,
    ) {
        this.Validate(value);
    }

    static NewUserId(): UserId {
        return new UserId(generateUuid());
    }

    private Validate(inputId: string): void {
        if (validateUuid(inputId)) {
            return;
        }
        throw new Error("TODO - implement domain exception");
    }

    ToString(): string {
        return this.value;
    }
}