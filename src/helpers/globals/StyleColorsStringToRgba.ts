export const styleColorsStringToRgba = function(colorStr: string): string {
    switch(colorStr) {  
        case "purple": 
            return "rgba(144, 101, 176, 1)";
        case "brown":
            return "rgba(159, 107, 83, 1)";
        default:
            return "inherit";
    }
} 