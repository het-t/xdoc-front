export default class RichText {
    constructor(richTextArrRaw) {
        let richTextArr = []

        for(let i=0; i!==richTextArr?.length; i++) {
            const obj = richTextArrRaw[i];

            const richTextObj = {
                content: obj.content,
                annotations: obj.annotations
            }

            richTextArr.push(richTextObj)
        }

        return {
            richText: richTextArr
        }
    }
}