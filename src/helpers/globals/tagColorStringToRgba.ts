export const tagColorStringToRgba = function(colorStr: string): {background: string, color: string, fill: string} {
    switch(colorStr) {  
        case "light gray":
            return {
                background: "rgb(232, 222, 238)",
                color: "rgb(50, 48, 44)",
                fill: "rgb(50, 48, 44)"
            };
        case "gray": 
            return {
                background: "rgb(227, 226, 224)",
                color: "rgb(50, 48, 44)",
                fill: "rgb(50, 48, 44)"
            };  
        case "brown":
            return {
                background: "rgb(238, 224, 218)",
                color: "rgb(68, 42, 30)",
                fill: "rgb(68, 42, 30)"
            };
        case "orange":
            return {
                background: "rgb(250, 222, 201)",
                color: "rgb(73, 41, 14)",
                fill: "rgb(73, 41, 14)"
            };
        case "yellow":
            return {
                background: "rgb(253, 236, 200)",
                color: "rgb(66, 44, 27)",
                fill: "rgb(66, 44, 27)"
            };
        case "green": 
            return {
                background: "rgb(219, 237, 219)",
                color: "rgb(28, 56, 41)",
                fill: "rgb(28, 56, 41)"
            };
        case "blue":
            return {
                background: "rgb(211, 229, 239)",
                color: "rgb(24, 51, 71)",
                fill: "rgb(24, 51, 71)"
            };
        case "purple":
            return {
                background: "rgb(232, 222, 238)",
                color: "rgb(65, 36, 84)",
                fill: "rgb(65, 36, 84)"
            };
        case "pink":
            return {
                background: "rgb(245, 224, 233)",
                color: "rgb(76, 35, 55)",
                fill: "rgb(76, 35, 55)"
            };
        case "red":
            return {
                background: "rgb(255, 226, 221)",
                color: "rgb(93, 23, 21)",
                fill: "rgb(93, 23, 21)"
            };
        default:
            return {
                background: "inherit",
                color: "inherit",
                fill: "inherit"
            };
    }
} 