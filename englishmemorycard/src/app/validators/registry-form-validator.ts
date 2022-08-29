import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/**
 * Validation type custom validators
 * 
 * Para validar um campo do formulário 
 * ValidationErrors : do tyipo type, a forma dele é um Objeto chave valor 
 * que poderá ser recuperrado no formulário
 * 
 */ 
// export function validRegistryForm(controlval:any):ValidatorFn {
//     return (control:AbstractControl):ValidationErrors|null=>{
//         return controlval === "" ? {empty:true} : null;
//     }
// }

/**
 * Validation type custom validation at once with all fields  
 */
class validForm{
    private constructor()
    {

    }
}

export const validRegistryForm:ValidatorFn = (control:AbstractControl):
ValidationErrors | null =>{
    let dd =  control.get('groupForm');

    // valida url imagem
    const url =  new RegExp('(https:\/\/|http:\/\/)(www)?\.?[-_*&#@!.0-9a-zA-Z]{1,}\.[a-zA-Z]{1,9}\/?.*', 'g');
    let url_imgError =  !url.test(dd?.value.url_img);
    console.log("url_imgError-->>>: "+url_imgError);

    // valida en_word is empty
    let en_wordError = (dd?.value.en_word != null ? dd?.value.en_word.length < 2 ? true : false : false);
    console.log("en_wordError-->>>: "+(dd?.value.en_word != null ? dd?.value.en_word.length < 2 ? true : false : false));

    // valida ptBr_wordError is empty
    let ptBr_wordError = (dd?.value.pt_br_word != null ? dd?.value.pt_br_word.length < 2 ? true : false : false);
    console.log("ptBr_wordError-->>>: "+ptBr_wordError);

    // valida decricption_wordError is empty
    let decricption_wordError = (dd?.value.comments != null ? dd?.value.comments.length < 2 ? true : false : false);

    console.log("decricption_wordError-->>>: "+decricption_wordError);

    console.log("Resultado da avaliação--->>>: "+( url_imgError || en_wordError || ptBr_wordError || decricption_wordError));

    return (url_imgError || en_wordError || ptBr_wordError || decricption_wordError) ? 
    {formErro:{
        url_imgErrors           : {info:"url informada inválida", url_imgError},
        en_wordErrors           : {info:"campo está vazio, ou quantidade de characteres inválido", en_wordError},
        ptBr_wordErrors         : {info:"campo está vazio, ou quantidade de characteres inválido", ptBr_wordError},
        decricption_wordErrors  : {info:"campo está vazio, ou quantidade de characteres inválido", decricption_wordError}
    }} : 
    null
}