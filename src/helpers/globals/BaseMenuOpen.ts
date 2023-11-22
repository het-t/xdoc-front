export default function(e: any, context: any, meta: any) {
    context.menu.visibility = true
    context.menu.posX = e.pageX
    context.menu.posY = e.clientY
    context.menu.meta = meta
}