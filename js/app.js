
// const select = document.querySelector('select');
const allLang = ['en', 'ru'];

// select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage(lang) {
    // let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    document.cookie = "lang=" + lang;
    location.reload();
}

function getCookie(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        if(getCookie('lang'))
            location.href = window.location.pathname + '#' + getCookie('lang');
        else
            location.href = window.location.pathname + '#en';
        location.reload();
    }
    // select.value = hash;
     document.querySelector('.trigger').innerHTML = hash.toUpperCase();
    //document.querySelector('title').innerHTML = langArr['t1'][hash];
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage();
