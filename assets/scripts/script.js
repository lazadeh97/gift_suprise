function  openPhotos(imageId){
    let img = document.getElementById(imageId);
    let giftName = img.alt;

    switch (imageId){
        case imageId:
            alert(`You have won the ${giftName} gift! Congratulations!`);
            img.style.filter = "blur(0px)";
            break;
        default:
            alert(`You haven't won any gift! Sorry!`);
            break;
    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn=>{
        if(btn.id!==`${imageId}btn`){
            btn.disabled = true;
        }
    })
}
function getGift(buttonId){
    const imageId = buttonId.replace('btn', '');
    openPhotos(imageId);
}
