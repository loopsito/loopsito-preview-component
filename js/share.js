 let share = document.getElementById('share');

function activateBar () {
    console.log(share.classList.contains('active'))
    let validacion = share.classList.contains('active');
    
    (validacion)
    ? share.classList.remove('active')
    : share.classList.add('active')
}