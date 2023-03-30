export default function(e, context, meta) {
    context.menu.visibility = true
    context.menu.posX = e.pageX
    context.menu.posY = e.clientY
    context.menu.meta = meta
}