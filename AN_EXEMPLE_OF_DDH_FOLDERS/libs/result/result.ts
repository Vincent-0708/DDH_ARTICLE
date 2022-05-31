class Result<T,U> {
    protected isSuccess:boolean
    protected value?: T | null 
    protected error?: U | null

    private constructor(isSuccess:boolean, value?: T | null, error?: U | null){
        if(isSuccess && error){
            throw new Error("Invalid behavior : An error can't be considered as a success ");
        }
        if(!isSuccess && value){
            throw new Error("Invalid behavior : A result can't be considered as an error");
        }
        this.isSuccess = isSuccess;
        this.value = value;
        this.error = error;
    }
    
    public isErr():boolean {
        return Boolean(!this.isSuccess);
    }

    public static ok<T,U>(value?: T): Result<T,U> {
        return new Result<T,U>(true, value, null);
    }

    public static err<T,U>(error: U): Result<T,U> {
        return new Result<T,U>(false, null, error);
    }

    public getValue():T {
        if(!this.isSuccess){
            throw new Error("Invalid behavior : Impossible to get value from error ")
        } else {
            return this.value as T;
        }
    }

    public getError():U {
        if(this.isSuccess){
            throw new Error("Invalid behavior : Impossible to get error from value ")
        } else {
            return this.error as U;
        }
    }
}

export default Result;
