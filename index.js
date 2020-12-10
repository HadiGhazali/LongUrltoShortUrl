// function getURL(url){
//     $.ajax({
//         type:'POST',
//         url:'https://cleanuri.com/api/v1/shorten',
//         data: {url : url},
//         success:function (response){
//             console.log(response)
//             let res = response
//             $('#result').html(res['result_url'])
//         },
//     })
// }


function getURL(url) {
    let promise = new Promise(function (resolve, reject) {
        $.ajax({
            type: 'POST',
            url: 'https://cleanuri.com/api/v1/shorten',
            data: {url: url},
            success: function (response) {
                console.log(response)
                resolve(response)
            },
            fail: function () {
                reject('error')
            }
        })
    })
    return promise
}


function main() {
    $('#mybtn').click(function (e) {
        let longLink = $('#myInput').val()
        e.preventDefault()

        getURL(longLink).then((data)=>{
            $('#result').html(data['result_url'])
        }).catch(()=>{
            $('#result').html('error')
        })
        console.log(longLink)
    })
}

main()
// $('#result').html(response['result_url'])