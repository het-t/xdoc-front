let corpus: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghidjklmnopqrstuvwxyz=[],@#$^&*";

function shuffleCorpus(): void {
    corpus = corpus.split("").sort(() => 0.5 - Math.random()).join("");
}

export const getUid = function (len: number, banned?: string[]): string {
    let uid: string = "";

    let stopLoop: boolean = false;

    while(stopLoop === false) {
        shuffleCorpus();
        
        const startIndex = Math.min(
            corpus.length - len, 
            Math.floor(( corpus.length * Math.random()) )
        ) - 1;

        uid = corpus.slice(startIndex, startIndex + len);

        if (banned?.length && !banned.includes(uid)) stopLoop = true;
    }

    return uid;
}

