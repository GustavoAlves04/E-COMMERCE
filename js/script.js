

jQuery(document).ready(function($){

    'user strict'

    let mainSlider = $('.main-slider')
    let hamburguer = $('.hamburger-container')
    let menu = $('.hamburger-menu')
    let menuActive = false
    let hamburgerClose = $('.hamburger-close')
    let fsOverlay = $('.fs-menu-overlay')

    initFavorite()
    
    function initFavorite(){
        if($('.favorite').length){
            let favs = $('.favorite')

            favs.each(function(){
                let fav = $(this)
                let active = false
                if(fav.hasClass('active'))
                {
                    active = true
                }
                fav.on('click', function(){
                    if(active){
                        fav.removeClass('active')
                        active = false
                    }
                    else{
                        fav.addClass('active')
                        active = true
                    }
                })
            })
        }
    }
















})