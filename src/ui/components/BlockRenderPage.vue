<template>
    <div :data-block-id="props.blockId"
        class="xdoc-selectable xdoc-page-block"
        style="width: 100%; margin-top: 2px; margin-bottom: 0px;"
    >
        <div contenteditable="false"
            class="pseudoSelection"
            data-content-editable-void="true"
            style="user-select: none; --pseudoSelection--background: transparent;"
        >
            <a @click.stop="handleClickOnPageLink"
                rel="noopener noreferrer"
                style="display: block; color: inherit; text-decoration: none; user-select: none; background: 20ms ease-in 0s; cursor: pointer; border-radius: 4px; fill: inherit;"
            >
                <div style="display: flex; align-items: center; width: 100%;">
                    <div style="flex: 1 1 0px; min-width: 1px; padding-top: 3px; padding-bottom: 3px; padding-left: 2px;">
                        <div style="display: flex; align-items: center;">
                            <div style="position: relative; width: 24px; height: 24px; margin-right: 4px;"><div role="button" tabindex="0" class="xdoc-record-icon notranslate" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; justify-content: center; height: 100%; width: 100%; border-radius: 0.25em; flex-shrink: 0;"><span role="img"><svg role="graphics-symbol" viewBox="0 0 16 16" class="pageEmpty" style="width: 19.8px; height: 19.8px; display: block; fill: rgb(145, 145, 142); flex-shrink: 0;"><path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703Z"></path></svg></span></div></div>
                            <div class="notranslate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 500; line-height: 1.3; border-bottom: 1px solid rgba(55, 53, 47, 0.16);">
                                {{ props.blockId }}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';
import router from '../router';

const props = defineProps({
    blockId: {
        type: String,
        required: true
    }
})

const route = useRoute();

function handleClickOnPageLink(e) {
    const blockId = e.target.closest("[data-block-id]").getAttribute("data-block-id");
    const parsedBlockId = blockId.replaceAll("-", "");

    const { pm, p } = route.query;
   
    if (p) router.push({query: {p: parsedBlockId, pm }});
    else router.push(`/${parsedBlockId}`)
}
</script>