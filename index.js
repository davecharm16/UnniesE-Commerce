function Products(name, image, price, type, stocks, variety, gallery, rate, qty) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.type = type;
    this.stocks = stocks;
    this.variety = variety;
    this.gallery = gallery;
    this.rate = rate;
    this.qty = qty;
}

var featured = [
    new Products("Map of the Soul", "./images/product-image/featured/featured1.jpg", 2200, "album", 200, [], ["./images/product-image/featured/featured1.jpg"], 4, 1),
    new Products("Black Pink The Album", "./images/product-image/featured/featured2.jpg", 2350, "album", 150, [], ["./images/product-image/featured/featured2.jpg"], 5, 1),
    new Products("Twice Fancy Album", "./images/product-image/featured/featured3.jpg", 2300, "album", 200, [], ["./images/product-image/featured/featured3.jpg"], 4, 1),
];
//------carousel

var sideFeature = [
    new Products("Map of of the Soul Hoodie", "./images/product-image/featured/featured4.png", 700, "merchandise", 200, [], ["./images/product-image/featured/featured4.png"], 4, 1),
    new Products("Black Pink Light Stick", "./images/product-image/featured/featured5.jpg", 1500, "fanlight", 200, [], ["./images/product-image/featured/featured5.jpg"], 5, 1),
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

$('.icon-search').click(() => {
    $('input[name="search"]').toggle("slow");
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
        var y = JSON.stringify(sideFeature[$(this).index()]);
        localStorage.setItem('view', y);
        window.location.href = "view.html";
        //yow
    }
);

$('.carousel-container .caption .act-button').click(function() {
    var y = JSON.stringify(featured[$(this).parent().parent().index()]);
    localStorage.setItem('view', y);
    window.location.href = "view.html";
});



// Product Area
var albums = [
    new Products("BTS - Dynamite Album", "./images/product-image/albums/bts/bts1.jpg", 1200, "album", 250, [], ["./images/product-image/albums/bts/bts1.jpg"], 5, 1),
    new Products("BTS - Map of the Soul", "./images/product-image/albums/bts/bts2.jpg", 1300, "album", 250, [], ["./images/product-image/albums/bts/bts2.jpg"], 4, 1),
    new Products("BTS - Wings Album", "./images/product-image/albums/bts/bts3.jpg", 1150, "album", 250, [], ["./images/product-image/albums/bts/bts3.jpg"], 4, 1),
    new Products("Twice- Eyes wide Open", "./images/product-image/albums/twice/twice1.jpg", 1100, "album", 250, [], ["./images/product-image/albums/twice/twice1.jpg"], 4, 1),
    new Products("Black Pink The Album", "./images/product-image/featured/featured2.jpg", 2350, "album", 150, [], ["./images/product-image/featured/featured2.jpg"], 5, 1),
    new Products("Black Season Greetings", "./images/product-image/albums/bp/bp1.jpg", 1950, "album", 150, [], ["./images/product-image/albums/bp/bp1.jpg"], 4, 1),
];
var merchandise = [
    new Products("Map of of the Soul Hoodie", "./images/product-image/featured/featured4.png", 700, "merchandise", 200, [], ["./images/product-image/featured/featured4.png"], 5, 1),
    new Products("Black Pink Shirt and Short", "./images/product-image/merchandise/bp1.jpg", 950, "merchandise", 200, [], ["./images/product-image/merchandise/bp1.jpg"], 5, 1),
    new Products("BTS - Hoodie", "./images/product-image/merchandise/BTS1.jpg", 750, "merchandise", 200, [], ["./images/product-image/merchandise/BTS1.jpg"], 4, 1),
    new Products("BTS - Mini Bag", "./images/product-image/merchandise/bts2.jpg", 650, "merchandise", 200, [], ["./images/product-image/merchandise/bts2.jpg"], 5, 1),
    new Products("Black Pink The Album Hoodie", "./images/product-image/merchandise/bp3.jpg", 950, "merchandise", 200, [
        ["Black", "Grey", "Pink", "Blue"],
        ["S", "M", "L", "XL", "XS"]
    ], ["./images/product-image/merchandise/bp3var/1.jpg", "./images/product-image/merchandise/bp3var/3.jpg", "./images/product-image/merchandise/bp3var/4.jpg", "./images/product-image/merchandise/bp3var/5.jpg"], 4, 1),
    new Products("Black Pink Cap", "./images/product-image/merchandise/bp2.jpg", 400, "merchandise", 200, [], ["./images/product-image/merchandise/bp2.jpg"], 5, 1),
];
var photobook = [
    new Products("Twice - Mina Photobook", "./images/product-image/photo-book/twice/twice1.png", 550, "photobook", 250, [], ["./images/product-image/photo-book/twice/twice1.png"], 4, 1),
    new Products("Twice - Nayeon Cosmopolitan", "./images/product-image/photo-book/twice/twice2.jpeg", 700, "photobook", 250, [], ["./images/product-image/photo-book/twice/twice2.jpeg"], 5, 1),
    new Products("BTS - Photobook 2020", "./images/product-image/photo-book/bts/bts1.jpg", 300, "photobook", 250, [], ["./images/product-image/photo-book/bts/bts1.jpg"], 5, 1),
    new Products("BTS - Photobook vol.2", "./images/product-image/photo-book/bts/bts2.jpg", 450, "photobook", 250, [], ["./images/product-image/photo-book/bts/bts2.jpg"], 5, 1),
    new Products("Black Pink - Photobook Limited", "./images/product-image/photo-book/bp/bp1.jpg", 550, "photobook", 250, [], ["./images/product-image/photo-book/bp/bp1.jpg"], 4, 1),
    new Products("Black Pink - Photobook Japan Edition", "./images/product-image/photo-book/bp/bp2.jpg", 460, "photobook", 250, [], ["./images/product-image/photo-book/bp/bp2.jpg"], 4, 1),
];

var fanLight = [
    new Products("Black Pink -Light Stick", "./images/product-image/featured/featured5.jpg", 1299, "fanlight", 200, [], ["./images/product-image/featured/featured5.jpg"], 5, 1),
    new Products("BTS- Fan Light - Map of the Soul", "./images/product-image/fanlight/bts/bts1.jpg", 2999, "fanlight", 200, [], ["./images/product-image/fanlight/bts/bts1.jpg"], 4, 1),
    new Products("BTS- Fan Light V3", "./images/product-image/fanlight/bts/bts2.jpg", 1599, "fanlight", 200, [], ["./images/product-image/fanlight/bts/bts2.jpg"], 5, 1),
    new Products("Twice- Fan light Candy Bong Z", "./images/product-image/fanlight/twice/twice1.jpg", 1799, "fanlight", 200, [], ["./images/product-image/fanlight/twice/twice1.jpg"], 5, 1),
    new Products("Exo- Fan light V3 ", "./images/product-image/fanlight/exo/exo1.jpg", 1299, "fanlight", 200, [], ["./images/product-image/fanlight/exo/exo1.jpg"], 5, 1),
    new Products("Astro- Fan light V2 ", "./images/product-image/fanlight/astro/astro1.jpg", 1199, "fanlight", 200, [], ["./images/product-image/fanlight/astro/astro1.jpg"], 4, 1),
];
var accessories = [
    new Products("Twice - Tumbler", "./images/product-image/accessories/twice/twice1.png", 799, "accessories", 250, [], ["./images/product-image/accessories/twice/twice1.png"], 5, 1),
    new Products("Twice - Choker", "./images/product-image/accessories/twice/twice2.jpg", 399, "accessories", 250, [], ["./images/product-image/accessories/twice/twice2.jpg"], 5, 1),
    new Products("Twice - Coin Purse", "./images/product-image/accessories/twice/twice3.jpg", 599, "accessories", 250, [], ["./images/product-image/accessories/twice/twice3.jpg"], 4, 1),
    new Products("Twice - Eyeglass Pouch", "./images/product-image/accessories/twice/twice4.jpg", 799, "accessories", 250, [], ["./images/product-image/accessories/twice/twice4.jpg"], 5, 1),
    new Products("Black Pink - Key chain", "./images/product-image/accessories/bp/bp2.jpg", 199, "accessories", 250, [], ["./images/product-image/accessories/bp/bp2.jpg"], 5, 1),
    new Products("Black Pink - Charger Docker", "./images/product-image/accessories/bp/bp3.jpg", 499, "accessories", 250, [], ["./images/product-image/accessories/bp/bp3.jpg"], 5, 1),
    new Products("BTS - Key Chain", "./images/product-image/accessories/bts/bts1.jpg", 199, "accessories", 250, [], ["./images/product-image/accessories/bts/bts1.jpg"], 5, 1),
    new Products("BTS - Coin Purse", "./images/product-image/accessories/bts/bts2.jpg", 599, "accessories", 250, [], ["./images/product-image/accessories/bts/bts2.jpg"], 5, 1),
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
    $('.product-card').click(
        function() {
            // console.log(prodArray[$(this).index()]);
            var y = JSON.stringify(prodArray[$(this).index()]);
            localStorage.setItem('view', y);
            window.location.href = "view.html";
            // updateView();
        }
    );
}

select.change(updateContent);



//CLicking products


function updateView() {
    //new Products("BTS - Coin Purse", "./images/product-image/accessories/bts/bts2.jpg", 599, "accessories", 250, [], ["./images/product-image/accessories/bts/bts2.jpg"]),
    // name, image, price, type, stocks, variety, gallery

    var view = $('.view-body');
    var item = localStorage.getItem('view');
    item = JSON.parse(item);
    const price = item.price;
    const name = item.name;
    const img = item.gallery[0];
    const gallery = item.gallery;
    const variety = item.variety;
    const stocks = item.stocks;
    const sold = Math.floor(Math.random() * (stocks - 15));
    const available = stocks - sold

    view.append(
        `
        <div class="gallery-container">
            <div class="view-photo">
            </div>
            <div class="gallery-photo">
            </div>
        </div>
        <div class="gallery-container descriptions">
            <div class="item-title">
                Black Pink The Album Hoodie
            </div>
            <div class="item-status">
                <div class="solds-rate">
                </div>
            </div>
            <div class="item-price">
                ₱799
            </div>
            <div class="variation">
                <div class="var-text">Variation</div>
                <div class="var">
                </div>
            </div>
            <div class="quantity-container">
                <div class="q-text">Quantity</div>
                <div class="q-button">
                    <button class="op minus">-</button>
                    <div class="quantity">0</div>
                    <button class="op plus">+</button>
                </div>
                <div class="stocks">
                    <div class="stock-text">200 piece/s available</div>
                </div>
            </div>
            <div class="add-cart">
                Add to Cart
            </div>
        </div>
        `
    );

    var photo = $('.view-photo');
    photo.append(`
    <img src="${gallery[0]}">
    `);

    createGallery($('.gallery-photo'), gallery);

    $('.item-title').text(`${item.name}`);

    setRating($('.solds-rate'), item.rate, sold);

    $('.item-price').text(`₱${item.price}`);

    createVariation($('.var'), variety);
    $('.quantity').text(item.qty.toString());
    $('.plus').click(function() {
        addQty(item);
    });
    $('.minus').click(function() {
        minQty(item);
    });

    $('.stock-text').text(`${available} piece/s available`)
    console.log(item);

    $('.var-photo').click(
        function() {
            var index = $(this).index();
            $('.view-photo img').attr("src", gallery[index]);
        }
    );

    $('.add-cart').click(() => {
        alert('Item Added to Cart!');
        addCart(item);
    });
}

function addCart(item) {
    let cart;
    if (localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', '[]');
        cart = JSON.parse(localStorage.getItem('cart'));
    } else {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}


function createGallery(place, gallery) {
    // console.log(gallery);
    for (let i = 0; i < gallery.length; i++) {
        place.append(
            `
            <div class="var-photo">
                    <img src="${gallery[i]}">
            </div>
            `
        );
    }
}

function setRating(place, rate, sold) {
    // 5 Sold | <span class="stars">⋆⋆⋆⋆</span>
    console.log(sold);
    var r = "";
    for (var i = 0; i < rate; i++) {
        r += "⋆";
    }
    place.append(
        `
        ${sold.toString()} Sold | <span class="stars">${r}</span>
        `
    )
}

function createVariation(place, variation) {
    // console.log(variation);
    if (variation.length == 0) {
        place.append(
            `
            <h3>None</h3>
            `);
    } else {
        for (let i = 0; i < variation.length; i++) {
            place.append(`
                    <div class="variation-select">
                    <span>▼</span>
                    <select>
                    </select>
                    </div>
            `);
            for (let j = 0; j < variation[i].length; j++) {
                var sel = $('.variation-select').eq(i).children('select');
                sel.append(`
                <option value="${variation[i][j]}">${variation[i][j]}</option>
                `);
            }
        }
    }

}

function addQty(item) {
    var qty = $('.quantity').text();
    qty = parseInt(qty, 10);
    qty += 1;
    $('.quantity').text(qty.toString());
    item.qty = qty;
    localStorage.setItem('view', JSON.stringify(item));
}

function minQty(item) {
    var qty = $('.quantity').text();
    qty = parseInt(qty, 10);
    if (qty == 1) {
        qty = 1;
    } else {
        qty -= 1;
    }
    $('.quantity').text(qty.toString());
    item.qty = qty;
    localStorage.setItem('view', JSON.stringify(item));
}