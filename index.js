function Products(name, image, price, type, stocks, variety) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.type = type;
    this.stocks = stocks;
    this.variety = variety;
}

var featured = [
    new Products("Map of the Soul", "./images/product-image/featured/featured1.jpg", 2200, "album", 200, []),
    new Products("Black Pink The Album", "./images/product-image/featured/featured2.jpg", 2350, "album", 150, []),
    new Products("Twice Fancy Album", "./images/product-image/featured/featured3.jpg", 2300, "album", 200, []),
];
//------carousel

var sideFeature = [
    new Products("Map of of the Soul Hoodie", "./images/product-image/featured/featured4.png", 700, "merchandise", 200, []),
    new Products("Black Pink Light Stick", "./images/product-image/featured/featured5.jpg", 1500, "fanlight", 200, []),
];

var viewProduct;

var carouselBox = $('.carousel-box');
for (let i = 0; i < featured.length; i++) {
    if (i == 0) {
        carouselBox.append(
            `<div class="carousel-container">
                <img class="featured-photo" src="${featured[i].image}">
                <div class="left-click"></div>
                <div class="right-click"></div>
    
                <div class="caption">
                    <div class="title">${featured[i].name}</div>
                    <div class="sale">UP to <span>40% off</span></div>
                    <div class="act-button"><a href="#">Shop now</a></a>
                    </div>
                </div>
    
                <div class="indicator">
                    <div class="circle c-active"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </div>
        `);
    } else {
        carouselBox.append(
            `<div class="carousel-container hide">
                <img class="featured-photo" src="${featured[i].image}">
                <div class="left-click"></div>
                <div class="right-click"></div>
    
                <div class="caption">
                    <div class="title">${featured[i].name}</div>
                    <div class="sale">UP to <span>40% off</span></div>
                    <div class="act-button"><a href="#">Shop now</a></a>
                    </div>
                </div>
    
                <div class="indicator">
                    <div class="circle"></div>
                    <div class="circle c-active"></div>
                    <div class="circle"></div>
                </div>
            </div>
        `);

    }

}

var containerSide = $('.container-side')
for (let s = 0; s < sideFeature.length; s++) {
    containerSide.append(
        `
    <div class="side-feature">
        <img src="${sideFeature[s].image}">
        <div class="caption">
            <div class="title">${sideFeature[s].name}</div>
            <div class="act-button"><a href="#">View Product</a></div>
        </div>
    </div>`
    );
}


$('.left-click').click(function() {
    var current = $('.carousel-container:visible').index();
    var next = 0;
    var last = $('.carousel-container:last').index();

    $('.carousel-container:visible').children().eq(4).find('.circle').eq(current).addClass("c-active").siblings().removeClass("c-active")

    // $('.carousel-container').eq(current).animate({ "right": "100%" }, 1000);
    // $('.carousel-container').eq(current).animate({ "right": "" }, 1000);
    if (current == last) {
        var next = 0;
        $('.carousel-box').find(".carousel-container").eq(next).removeClass('hide');
        $('.carousel-box').find(".carousel-container").eq(current).addClass('hide');

    } else {
        next = current + 1;
        $('.carousel-box').find(".carousel-container").eq(next).removeClass('hide');

        $('.carousel-box').find(".carousel-container").eq(current).addClass('hide');

    }
});


$('.right-click').click(function() {
    var current = $('.carousel-container:visible').index();
    var last = $('.carousel-container:last').index();

    $('.carousel-container:visible').children().eq(4).find('.circle').eq(current).addClass("c-active").siblings().removeClass("c-active");
    // $('.carousel-container').eq(current).animate({ "left": "100%" }, 1000);
    // $('.carousel-container').eq(current).animate({ "left": "" }, 1000);

    if (current == 0) {
        next = last;
        $('.carousel-box').find(".carousel-container").eq(next).removeClass('hide');
        $('.carousel-box').find(".carousel-container").eq(current).addClass('hide');
    } else {
        next = current - 1;
        $('.carousel-box').find(".carousel-container").eq(next).removeClass('hide');

        $('.carousel-box').find(".carousel-container").eq(current).addClass('hide');
    }
});



setInterval(function() {
    var current = $('.carousel-container:visible').index();
    var next = 0;
    var last = $('.carousel-container:last').index();

    $('.carousel-container:visible').children().eq(4).find('.circle').eq(current).addClass("c-active").siblings().removeClass("c-active")

    // $('.carousel-container').eq(current).animate({ "right": "100%" }, 1000);
    // $('.carousel-container').eq(current).animate({ "right": "" }, 1000);
    if (current == last) {
        var next = 0;
        $('.carousel-box').find(".carousel-container").eq(next).removeClass('hide');
        $('.carousel-box').find(".carousel-container").eq(current).addClass('hide');

    } else {
        next = current + 1;
        $('.carousel-box').find(".carousel-container").eq(next).removeClass('hide');

        $('.carousel-box').find(".carousel-container").eq(current).addClass('hide');

    }
}, 5000);
// -- end carousel




$('.side-feature').click(
    function() {
        viewProduct = sideFeature[$(this).index()];
    }
);



// Product Area
var albums = [
    new Products("BTS - Dynamite Album", "./images/product-image/albums/bts/bts1.jpg", 1200, "album", 250, []),
    new Products("BTS - Map of the Soul", "./images/product-image/albums/bts/bts2.jpg", 1300, "album", 250, []),
    new Products("BTS - Wings Album", "./images/product-image/albums/bts/bts3.jpg", 1150, "album", 250, []),
    new Products("Twice- Eyes wide Open", "./images/product-image/albums/twice/twice1.jpg", 1100, "album", 250, []),
    new Products("Black Pink The Album", "./images/product-image/featured/featured2.jpg", 2350, "album", 150, []),
    new Products("Black Season Greetings", "./images/product-image/albums/bp/bp1.jpg", 1950, "album", 150, []),
];
var merchandise = [
    new Products("Map of of the Soul Hoodie", "./images/product-image/featured/featured4.png", 700, "merchandise", 200, []),
    new Products("Black Pink Shirt and Short", "./images/product-image/merchandise/bp1.jpg", 950, "merchandise", 200, []),
    new Products("BTS - Hoodie", "./images/product-image/merchandise/BTS1.jpg", 750, "merchandise", 200, []),
    new Products("BTS - Mini Bag", "./images/product-image/merchandise/bts2.jpg", 650, "merchandise", 200, []),
    new Products("Black Pink The Album Hoodie", "./images/product-image/merchandise/bp3.jpg", 950, "merchandise", 200, []),
    new Products("Black Pink Cap", "./images/product-image/merchandise/bp2.jpg", 400, "merchandise", 200, []),
];
var photobook = [
    new Products("Twice - Mina Photobook", "./images/product-image/photo-book/twice/twice1.png", 550, "photobook", 250, []),
    new Products("Twice - Nayeon Cosmopolitan", "./images/product-image/photo-book/twice/twice2.jpeg", 700, "photobook", 250, []),
    new Products("BTS - Photobook 2020", "./images/product-image/photo-book/bts/bts1.jpg", 300, "photobook", 250, []),
    new Products("BTS - Photobook vol.2", "./images/product-image/photo-book/bts/bts2.jpg", 450, "photobook", 250, []),
    new Products("Black Pink - Photobook Limited", "./images/product-image/photo-book/bp/bp1.jpg", 550, "photobook", 250, []),
    new Products("Black Pink - Photobook Japan Edition", "./images/product-image/photo-book/bp/bp2.jpg", 460, "photobook", 250, []),

];

var fanLight = [
    new Products("Black Pink -Light Stick", "./images/product-image/featured/featured5.jpg", 1299, "fanlight", 200, []),
    new Products("BTS- Fan Light - Map of the Soul", "./images/product-image/fanlight/bts/bts1.jpg", 2999, "fanlight", 200, []),
    new Products("BTS- Fan Light V3", "./images/product-image/fanlight/bts/bts2.jpg", 1599, "fanlight", 200, []),
    new Products("Twice- Fan light Can Bong Z", "./images/product-image/fanlight/twice/twice1.jpg", 1799, "fanlight", 200, []),
    new Products("Exo- Fan light V3 ", "./images/product-image/fanlight/exo/exo1.jpg", 1299, "fanlight", 200, []),
    new Products("Astro- Fan light V2 ", "./images/product-image/fanlight/astro/astro1.jpg", 1199, "fanlight", 200, []),
];
var accessories = [
    new Products("Twice - Tumbler", "./images/product-image/accessories/twice/twice1.png", 799, "accessories", 250, []),
    new Products("Twice - Choker", "./images/product-image/accessories/twice/twice2.jpg", 399, "accessories", 250, []),
    new Products("Twice - Coin Purse", "./images/product-image/accessories/twice/twice3.jpg", 599, "accessories", 250, []),
    new Products("Twice - Eyeglass Pouch", "./images/product-image/accessories/twice/twice4.jpg", 799, "accessories", 250, []),
    new Products("Black Pink - Key chain", "./images/product-image/accessories/bp/bp2.jpg", 199, "accessories", 250, []),
    new Products("Black Pink - Charger Docker", "./images/product-image/accessories/bp/bp3.jpg", 499, "accessories", 250, []),
    new Products("BTS - Key Chain", "./images/product-image/accessories/bts/bts1.jpg", 199, "accessories", 250, []),
    new Products("BTS - Coin Purse", "./images/product-image/accessories/bts/bts2.jpg", 599, "accessories", 250, []),
];


var productHolder = $('.product-holder');
var productType = $('.product-type h2');

var select = $('.select select');
var selectedValue = select.val();

function selectedProduct() {
    switch (selectedValue) {
        case "album":
            return albums;
            break;
        case "merchandise":
            return merchandise;
            break;
        case "photobook":
            return photobook;
            break;
        case "fanlight":
            return fanLight;
            break;
        case "accessories":
            return accessories;
            break;
        default:
            "album";
    }
}

updateContent();

function updateContent() {
    selectedValue = select.val();
    var selectedTitle = $('select option:selected').text();

    productType.text(selectedTitle);

    console.log(selectedValue);
    var prodArray = selectedProduct();
    //remove first the display products
    $('.product-card').remove();

    for (let x = 0; x < prodArray.length; x++) {
        productHolder.append(
            `
            <div class="product-card">
                    <img class="product-image" src="${prodArray[x].image}">
                    <div class="product-name">${prodArray[x].name}</div>
                    <div class="product-price">₱${prodArray[x].price}</div>
            </div>
            `
        );
    }
}

select.change(updateContent);