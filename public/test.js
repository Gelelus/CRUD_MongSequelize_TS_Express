const AddAvatar = async (avatar) => {
    
    let response = await fetch('/users/upload/avatar', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: avatar
    });

    let user = await response.json();
    console.log(user)
}

document.querySelectorAll("form")[2].onsubmit = function (e) {
    e.preventDefault();
    const formData = new FormData(document.querySelectorAll("form")[2])
    
    AddAvatar(formData); 
};