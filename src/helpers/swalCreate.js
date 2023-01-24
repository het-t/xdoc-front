import swal from 'sweetalert'

export default function useCreateSwal({text, url, mutationFnName, mutationArgs, promise, context}) {
    promise
    .then(() =>
        swal({
            title: "Success",
            text: `Created "${text}"`,
            icon: 'success',
            button: 'ok',
        })
    )
    .then(() => { 
        if (mutationFnName) context.$store.commit(mutationFnName, mutationArgs)
        if (url) setTimeout(() => context.$router.push(url), 1)
    })
    .catch((err) => {
        if (err != null) swal("Oops!", `We can't perform this action right now please try again\n\n details: ${err}`)
    })
    .finally(() => context.disabled = false)
}