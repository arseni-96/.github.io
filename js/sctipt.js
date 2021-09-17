$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    /* Modal */
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn("slow")
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');

    });
    
    $('.catalog-item__btn').on('click', function(){
        $('.overlay, #order').fadeIn("slow")
    });

    $('.catalog-item__btn').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        })
        
    });
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };
    

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+375 (99) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });


    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    
    new WOW().init();
});

    
   
    

    























/* 

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type:"POST",
            url:"../mailer/smart.php",
            data: $(this).serialize()

        }).done(function() {
            $(this).fund('input').val('');
            $('#consultation, #order').fadeOut();
            $('.overLay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;

    }) */
    
/* 
    $('#consultation-form ').validate();
    $('#consultation form').validate({
        rules: {
            name: 'required'
            phone: 'required'
            email: {
                required: true
                email: true
        },
        
    });
    $('#order form').validate(); */
   
    

  /* $('.catalog-item__link') .each(function(i)){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').togglClass('.catalog-item__content_active');
            $('/catalog-item__list').togglClass('catalog-item__list_active');
        }) */
  
  

/* var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true;
    controlsText: [
        '<img src="icons/left.png" alt="left">',
        '<img src="icons/right.png" alt="right">'
    ]
  }) */




/* var name = "ars";
let number = 7;
const pi = 3.14;

let leftBorderWidth = 200; */

/* 
number
string = "" '' - строка в ковычках
booling = true/false
null = этого элемента нет
undefind - что то существует, но самого значения такого нет
{

} */
/* let obj{
    name: "apple"
    color: "green"
    weight: 200
} */
/* symbol */

/* console.log(number) */
/* let answer = confirm ('Вам есть 18 лет&');
console.log(answer);
 */
/* let answer = prompt('Cколько Вам лет?', '');
console.log(answer); */

/* let isChecked = false,
    isClose = false;

console.log(isChecked && isClose)

console.log(isChecked || isClose) */


/* if (2*4 == 8*1) {
    console.log("Верно")

}
else {
    console.log('oшибка')
}
 */
/* let answer = confirm ('Вам есть 18 лет?')
if (answer) {
    console.log('Проходите')
}
else{
    console.log('Уходи')
} */
/* const num = 50;
if (num<49){
    console.log('Неправильно')
}
else if (num>100){
    console.log('Много')
}
else {
    console.log('Верно')
} */


/* for (let i = 1; i < 8; i++){
    console.log(i);
} */
/* function logging(a, b){
    console.log(a+b)
}
logging(3,8);

logging(8,8);
 */