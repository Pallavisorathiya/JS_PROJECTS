let quotesData= [
    {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde",
        "bg": "https://avatars.mds.yandex.net/i?id=c02f7b908360de38b5176fc88b9315bbe832c91e-7545000-images-thumbs&n=13",
    },
    {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde",
         "bg":"https://avatars.mds.yandex.net/i?id=a483a3ad12ad78c8c819f5cd769d4cd2c355ad71-5590892-images-thumbs&n=13",
    },
    {
        "quote": "True friends stab you in the front.",
        "author": "Oscar Wilde",
        "bg" : "https://avatars.mds.yandex.net/i?id=34cf00e413f2c05dcd9ac7bebc08dcd86b85186a-10843661-images-thumbs&n=13",
    },
    {
        "quote": "Women are made to be Loved, not understood.",
        "author": "Oscar Wilde",
        "bg" :"https://i.pinimg.com/736x/f1/fa/06/f1fa06f21dc5b016fe00881b89804db1.jpg" ,
    },
    {
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "bg" : "https://i.pinimg.com/originals/c0/1c/20/c01c208c9805f55cc15cb979fc11f7aa.jpg",
   },
    {
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi",
        "bg" : "https://news-img.gismeteo.st/ru/2023/04/shutterstock_2057323799.jpg" ,
    },
    {
        "quote": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt",
        "bg" : "https://i.pinimg.com/736x/0a/49/ed/0a49ed86f7e1ae0b2c50dfbbffab3dfe.jpg",
    },
    {
        "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "author": "Eleanor Roosevelt",
        "bg" :" https://i.pinimg.com/736x/41/b1/27/41b127470af4748a5e9d77a58384c3cf.jpg",
    },
    {
        "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        "author": "Eleanor Roosevelt",
        "bg":"https://i01.fotocdn.net/s214/b1883259ebb58647/public_pin_l/2866435015.jpg",
    },
    {
        "quote": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt",
        "bg":"https://news-img.gismeteo.st/ru/2018/10/4bf94f14.jpg",
    },
    {
        "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        "author": "Martin Luther King",
        "bg":"https://35photo.pro/photos_main/1890/9452395.jpg",
    },
    {
        "quote": "Our lives begin to end the day we become silent about things that matter.",
        "author": "Martin Luther King",
        "bg":"https://media.istockphoto.com/id/1183428693/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D1%81%D0%B5%D0%BD%D0%BD%D0%B8%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6.jpg?s=612x612&w=0&k=20&c=1PbqPY7nUDmB3v_kolaMBr-atGFPMSkPkiwYOSbMrvU=",
    },
    {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King",
        "bg":"https://cdn.tripster.ru/thumbs2/a12a8424-3bfb-11ee-b1e5-2a9c88d8140f.1200x1000.jpeg",
    },
    {
        "quote": "Injustice anywhere is a threat to justice everywhere.",
        "author": "Martin Luther King",
        "bg":"https://c4.wallpaperflare.com/wallpaper/323/983/653/mountains-lake-summer-siberia-hd-wallpaper-preview.jpg",
    },
    {
        "quote": "The time is always right to do what is right.",
        "author": "Martin Luther King",
        "bg":"https://i.pinimg.com/originals/aa/58/d4/aa58d409dee468e2a044b302c7eaa0a5.jpg",
    },
    {
        "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
        "author": "Martin Luther King",
        "bg":"https://sun1-91.userapi.com/s/v1/ig2/3t8Rl9I18X6nVyrf_Fj3AdWKLT_1e7TCu71Np4QbstLQ0S2n3EcFHiha7P8grHqyffbLSC9FiW7ikV61K8C45df7.jpg?quality=96&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x426,720x480,1080x719,1280x853,1440x959,1920x1279&from=bu&u=R15s70NLEPGRtOZyz3lk-JTc80SL_scDjsLRbER_9cg&cs=807x538",
    },
]

let index = 0 ;
function GQuotes(index) {
document.getElementById("Quote").innerHTML=`"${quotesData[index].quote}"`;
document.getElementById("authorName").innerHTML=`-${quotesData[index].author}`;
document.body.style.backgroundImage = `url(${quotesData[index].bg})`;
}
function prevSlide(){
    if(index == 0 ){
        index= quotesData.length-1;
        }
        else{
            index--;
            }
           GQuotes(index);
            }
            function nextSlide(){
                if(index >= quotesData.length-1){
                    index=0;
                    }
                    else{
                        index++;
                        }
                       GQuotes(index);
                        }
                        GQuotes(index);