import { ImgWordsInterface } from "./img-words-interface";

export interface WordsInterface {
    token       :string;
    id          :number;
    en_word     :string;
    pt_br_word  :string;
    description :string;
    img_words:ImgWordsInterface[];
}
