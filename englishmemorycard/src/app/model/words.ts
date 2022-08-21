 import { ImgWordsInterface } from "../interfaces/img-words-interface";
import { WordsInterface } from "../interfaces/words-interface";

export class Words implements WordsInterface{
    token       : string;
    id          : number;
    en_word     : string;
    pt_br_word  : string;
    description : string;
    img_words   : ImgWordsInterface[];

    constructor(
        token       : string,
        id          : number,
        en_word     : string,
        pt_br_word  : string,
        description : string,
        img_words   : ImgWordsInterface[])
    {
        this.token          = token;
        this.id             = id;
        this.en_word        = en_word;
        this.pt_br_word     = pt_br_word;
        this.description    = description;
        this.img_words      = img_words;
    }

    
    /* getters */ 
    public get _token(){
        return this.token;
    }
    
    public get _id(){
        return this.id;
    }     

    public get _en_word(){
        return this.en_word;
    }    

    public get _pt_br_word(){
        return this.pt_br_word;
    }   

    public get _description(){
        return this.description;
    }   

    public get _img_words(){
        return this.img_words;
    }
    
    
}// class
