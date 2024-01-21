export class Result<TResult, TError> {
    private readonly value: TResult | null
    private readonly error: TError | null

    protected constructor(value: TResult | null, error: TError | null) {
        this.value = value
        this.error = error
    }

    unwrap(): TResult {
        if (!this.value) {
            throw new Error("The value cannot be empty")
        }

        return this.value
    }

    hasError(): boolean {
        return this.error !== null
    }

    getError(): TError {
        if (!this.error) {
            throw new Error("The error cannot be empty")
        }

        return this.error
    }

    static withOk<TResult, TError>(value: TResult): Result<TResult, TError> {
        return new Result<TResult, TError>(value, null)
    }

    static withError<TResult, TError>(error: TError): Result<TResult, TError> {
        return new Result<TResult, TError>(null, error)
    }
}