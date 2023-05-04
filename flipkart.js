function show_block(x) {
    x.style.display = 'block';

}
function hide_block(x) {
    x.style.display = 'none';
    x.style.color = 'red';
}
function show(y){
y.style.display="block";
}
function slide_left(x){
    x.style.transform = 'translateX(-614px)';
}
function slide_right(x){
    x.style.transform = 'translateX(0px)';
}
function hide(x){
    x.style.display="none";
}

function changeMode(){
        let mybody = document.body;
        mybody.classList.toggle('mydark');
        let b1=document.getElementsByClassName('x2');
        b1.classList.toggle('mydark1')
}



 
function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main').style.opacity = '0.3'

    document.querySelector("body").style.overflow='hidden';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('main').style.opacity = '1'
    document.querySelector("body").style.overflow='visible';
}

