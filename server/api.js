$(document).ready(function() {
    $('#getall').click(() => {
        axios({
            method: 'GET',
            url: 'server.js'
        }).then(resp => {
            console.log(resp)
        })
    })
});