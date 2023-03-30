export default function(context, meta) {
    context.menu.visibility = false
    context.menu.posX = ''
    context.menu.posY = ''
    if (meta) context.menu.meta = meta
}