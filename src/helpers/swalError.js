import swal from 'sweetalert'

export default function swalError (err) {
    swal({
        icon: 'error',
        title: 'Oops',
        text: `We can't perform this action right now please try again\n\n details: ${err}`
    })
}