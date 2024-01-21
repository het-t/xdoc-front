export const TagBackgroundColorStringToRgba = function(colorStr: string): string {
    switch(colorStr) {  
        case "light gray":
            return "rgb(232, 222, 238)"; //50 48 44
        case "gray": 
            return "rgb(227, 226, 224)"; //50 48 44
        case "brown":
            return "rgb(238, 224, 218)"; //68 42 30
        case "orange":
            return "rgb(250, 22, 201)"; //73 41 14
        case "yellow":
            return "rgb(253, 236, 200)"; //66 44 27
        case "green": 
            return "rgb(219, 237, 219)"; //28 56 41
        case "blue":
            return "rgb(211, 229, 239)"; //24 51 71
        case "purple":
            return "rgb(232, 222, 238)"; //65 36 84
        case "pink":
            return "rgb(245, 224, 233)"; //76 35 55
        case "red":
            return "rgb(255, 226, 221)"; //93 23 21
        default:
            return "inherit";
    }
} 