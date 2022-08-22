 import { WordsInterface } from "src/app/interfaces/words-interface";
import { ImgWordsInterface } from "../../interfaces/img-words-interface";
 
export class Words implements WordsInterface{
    token       : string;
    id          : number;
    en_word     : string[];
    pt_br_word  : string[];
    img_words   : ImgWordsInterface[];
    timestamp   : number;     // data  do cadastro
    frequency   : number;   // freqência a ser aprsengtada
    
    description ?   : string;
    is_important?   : boolean;  // informa se é importante
    errors      ?   : number;      
    points      ?   : number;      

    constructor(
        token       : string,
        id          : number,
        en_word     : string[],
        pt_br_word  : string[],
        img_words   : ImgWordsInterface[],
        timestamp   : number,
        frequency   : number,
    )
    {
        this.token          = token;
        this.id             = id;
        this.en_word        = en_word;
        this.pt_br_word     = pt_br_word;
        this.img_words      = img_words;
        this.timestamp      = timestamp;
        this.frequency      = frequency;
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
