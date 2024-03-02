export const darkBackgroundColorStringToRgba = function(colorStr: string): string {
    switch(colorStr) {
        case "ligh gray": {
            return "rgb(145, 145, 142)";
        }
        case "gray": {
            return "rgb(145, 145, 142)";
        }
        case "brown": {
            return "rgb(187, 132, 108)";
        }
        case "orange": {
            return "rgb(215, 129, 58)";
        }
        case "yellow": {
            return "rgb(203, 148, 51)";
        }
        case "green": {
            return "rgb(108, 155, 125)";
        }
        case "blue": {
            return "rgb(91, 151, 189)";
        }
        case "purple": {
            return "rgb(167, 130, 195)";
        }
        case "pink": {
            return "rgb(205, 116, 159)";
        }
        case "red": {
            return "rgb(225, 111, 100)";
        }
    }
    return "rgb(145, 145, 142)";
}