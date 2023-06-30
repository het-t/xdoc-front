<template>
    <div
        :style="annotations"
    >
        {{ text }}
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue"

    const props = defineProps({
        richText: Object,
        blockId: String
    })

    let text = ref('')
    let annotations = ref({})
    
    onMounted(() => {
        text.value = props.richText.content

        const {bold, underline, strikethrough, italic, color} = props.richText.annotations
        
        let style = ''
        if(bold === true) style += 'font-weight: bold; '
        else style += 'font-weight: inherit; '

        if(underline === true) style += 'text-decoration: underline; '
        if(strikethrough === true) style += 'text-decoration: line-through; '
        if(italic === true) style += ' font-style: italic;'
        if(color !== '') style += ` color: ${color};`

        annotations.value = style
    })

</script>