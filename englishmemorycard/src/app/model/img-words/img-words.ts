import { ImgWordsInterface } from "src/app/interfaces/img-words-interface";

export class ImgWords implements ImgWordsInterface{
    id: number;
    token: string;
    path: string;
    url: string;
    size: number;

    constructor
    (
        id      : number,
        token   : string,
        path    : string,
        url     : string,
        size    : number
    )
    {
        this.id      = id,
        this.token   = token,
        this.path    = path,
        this.url     = url,
        this.size    = size
    }

}
