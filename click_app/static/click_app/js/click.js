let body = document.createElement('div');
let content = document.createElement('div');
let food = ["hotdog","hotdog","hotdog", "egg", "egg","egg","banana" ,"banana","banana"];
let icons = {
    'hotdog': '/static/click_app/icons/hotdog.png',
    'egg': '/static/click_app/icons/egg.png',
    'banana': '/static/click_app/icons/banana.png'
}
body.classList.add('body');
content.classList.add('content');
let clik = document.createElement('button');
clik.className = "reset"
clik.innerText = 'Start'
clik.classList.add('Reset')


let check = 0


clik.onclick = function() {
    let cards = document.querySelectorAll('.img')
    if (clik.classList.contains('Start')) {
        clik.innerText = 'Reset';
        clik.classList.remove('Start');
        clik.classList.add('Reset');


        food.sort(function() {
            let cubd20 = Math.random();
            if (cubd20 > 0.5) {
                return 1;
            } else {
                return -1;
            }
        });
        

        for (let bruh = 0; bruh < cards.length; bruh++) {
            cards[bruh].classList.remove('open');
            cards[bruh].classList.add('closed');
            cards[bruh].innerHTML = ''; 
    }

    }else {

        clik.innerText = 'Start';
        clik.classList.remove('Reset');
        clik.classList.add('Start');

        for (let bruh = 0; bruh < cards.length; bruh++) {
            cards[bruh].classList.remove('closed');
            cards[bruh].classList.add('open');
            cards[bruh].innerHTML = '';

            let image = document.createElement('img');
            image.src = icons[food[bruh]];
            cards[bruh].appendChild(image);
        }
    }
};

    
food.sort(function() {
    let cubd20 = Math.random();
    if (cubd20 > 0.5) {
        return 1;
    } else {
        return -1;
    }
});


for (let kushat = 0; kushat < food.length; kushat++) {

    let img = document.createElement('div');
    img.classList.add('img');
    img.classList.add('closed');
    img.onclick = function() {
        if (img.classList.contains('closed')) {
            img.classList.remove('closed');
            img.classList.add('open');
            let image = document.createElement('img');
            let icons_i = food[kushat];
            image.src = icons[icons_i];
            img.appendChild(image);
            let cards = document.querySelectorAll('.img')
            for (let bruh = 0; bruh < cards.length; bruh++) {
                if (cards[bruh].classList.contains('open')) {
                    check++;
                    console.log(check);
                }
            }
            
            if (check > 44) {
                clik.innerText = 'Start';
                clik.classList.remove('Reset');
                clik.classList.add('Start');
                check = 0;
               
            }
        }
        
    }
    content.appendChild(img);

 

}


content.appendChild(clik);
body.appendChild(content);
document.body.appendChild(body);

if (clik.classList.contains('Reset')) {
    let cards = document.querySelectorAll('.img')
    clik.innerText = 'Start';
    clik.classList.remove('Reset');
    clik.classList.add('Start')
    for (let bruh = 0; bruh < cards.length; bruh++) {
        cards[bruh].classList.remove('closed');
        cards[bruh].classList.add('open');
        cards[bruh].innerHTML = ''
        let image = document.createElement('img');
        image.src = icons[food[bruh]];
        cards[bruh].appendChild(image);
    }    

}
