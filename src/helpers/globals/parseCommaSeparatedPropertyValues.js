import { commaSeparatedString } from '@/helpers/globals/CommaSeparatedString';

export const parseCommaSeparatedPropertyValues = function(
    type,
    propertyValueParsedRef,
    property,
    propertyValue
) {
    const commaSeparatedStrings = commaSeparatedString(propertyValue);

    if(type === "select" || type === "status" || type === "multiselect") {
        if(type === "status") {
            if(!commaSeparatedStrings.length) commaSeparatedStrings.push(property.defaultOption);
        }
    
        setParsedValue((_value)=>property?.options?.find(({value}) => value === _value), propertyValueParsedRef, commaSeparatedStrings);
    
        if(type === "status") {
            propertyValueParsedRef.value = propertyValueParsedRef.value.map((status) => {
                if(!status.color) {
                    property.groups.map(({color, optionIds}) => {
                        if(optionIds.includes(status.id)) {
                            status.color = color;
                        }
                    })
                }
                return status;
            })
        }
    }   
}

function setParsedValue(predicate, propertyValueParsedRef, commaSeparatedStrings) {
    propertyValueParsedRef.value = commaSeparatedStrings.map((value) => predicate(value))
}
