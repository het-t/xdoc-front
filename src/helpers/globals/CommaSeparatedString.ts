export const commaSeparatedString = function(commaSeparatedString: string, char:string = ","): Array<string> {
    if(!commaSeparatedString) return [];
    return commaSeparatedString.split(char);
}