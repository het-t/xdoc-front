import swal from 'sweetalert'

export default function useDeleteSwal({text, mutationFn, promise, context}) {
    swal({
        icon: 'warning',
        text: `Do you want to delete ${text}`,
        buttons: true
    })
    .then((value) => {
        if (value == null) throw null
        else return promise()
    })
    .then(() => {
        context.$toast.success('Deleted')
        context.$store.dispatch(mutationFn, {from:0, to:100})
    })
    .catch(err => {
        if (err != null) return swal("Oops!", `We can't perform this action right now please try again\n\n details: ${err}`)
    })
}