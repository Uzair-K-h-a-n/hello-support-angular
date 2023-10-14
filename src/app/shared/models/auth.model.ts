export class Auth {
    constructor(public message: string, private _token: string) { }

    get token() {
        return this._token;
    }
}

export interface AuthResponseData {
    "message": string,
    "token": string
}