export class EmptyResult<TError> {
    private readonly error: TError | null

    protected constructor(error: TError | null) {
        this.error = error
    }

    hasError(): boolean {
        return this.error !== null
    }

    getError(): TError {
        if (!this.error) {
            throw new Error("Ошибка не может быть пуста")
        }

        return this.error
    }

    static withOk<TError>(): EmptyResult<TError> {
        return new EmptyResult<TError>(null)
    }

    static withError<TError>(error: TError): EmptyResult<TError> {
        return new EmptyResult<TError>(error)
    }
}