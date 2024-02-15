import { defineStore } from "pinia";
import { Ref, ref, computed } from "vue";

const keystrokesAllowedSeq: Record<string, string> = {
    "Slash": "OPEN_SLASH_MENU",
    "Enter": "ADD_DEFAULT_BLOCK",
    "Escape": "USER_ESC"
}

export const useKeyStrokeStore = defineStore("keyStrokes", () => {
    const commandString: Ref<string> = ref("");
    let anchorOffset: number = 0;
    let focusOffset: number = 0;
    const spaceEnountered: Ref<boolean> = ref(false);
    const trackCommandString: Ref<boolean> = ref(false);
    const pos: Ref<Record<string, number>> = ref({
        x: 0,
        y: 0
    });

    function handleKeyStroke(code: string, key: string, args: any): void {
        if (trackCommandString.value === true) {
            handleSlashMenuKeyStrokes(args.text);

            if (code === "Space") {
                if (spaceEnountered.value === true) {
                    trackCommandString.value = false;
                    commandString.value = "";
                }

                spaceEnountered.value = !spaceEnountered.value;
            } else if (code === "Escape") {
                commandString.value = "";
                spaceEnountered.value = false;
                trackCommandString.value = false;
            }
        }
    }

    function handleSlashMenuKeyStrokes(text: any): void {     
        commandString.value = text.slice(anchorOffset, focusOffset+1);
    }

    function setTrackCommand(flag: boolean): void {
        trackCommandString.value = flag;
    }

    function setCommandString(value: string): void {
        commandString.value = value;
    }

    function setAnchorOffset(aOffset: number) {
        anchorOffset = aOffset;
    }

    function setFocusOffset(fOffset: number) {
        if (fOffset <= anchorOffset) {
            setTrackCommand(false);
            spaceEnountered.value = false;
            setCommandString("");
        }
        focusOffset = fOffset;
    }

    function setPositions(posX: number, posY: number) {
        pos.value.x = posX;
        pos.value.y = posY;
    }

    return {
        showSlashMenu: computed(() => trackCommandString),
        commandString: computed(() => commandString.value),
        handleKeyStroke,
        setTrackCommand,
        setCommandString,
        setAnchorOffset,
        setFocusOffset,
        setPositions,
        getPositions: computed(() => pos.value)
    }
})