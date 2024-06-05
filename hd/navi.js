import hd_yys from "./navi.json"


// let hdmenu = "";

// for(let menu in hd_yys){
//     hdmenu += `${hd_yys[menu]}\n`
//     for(let gnb in hd_yys){
//         gnbmenu += `${hd_yys.gnb[gnb]}`;
//     }
// }

// console.log(hdmenu);

// document.querySelector("h1").innerHTML = 


// onload는 각 페이지마다 한번만 사용
window.onload = function(){
    // document.body.innerHTML = hd_yys["gnb"][0].Text;
    // document.querySelector("#gnb li").innerHTML = hd_yys["gnb"][0].Text;

    // document.querySelector("#gnb li").innerHTML = `
    //     <a href="${hd_yys.gnb[0].href}">
    //     ${hd_yys.gnb[0].Text}
    //     </a>
    //     `;

    let navitag = "";

    for(x in hd_yys.gnb){
        navitag += `<li class="${hd_yys.gnb[x].cls[0]}"> 
            <a class="${hd_yys.gnb[x].cls[1]}" href="${hd_yys.gnb[x].href}">${hd_yys.gnb[x].Text}
            </a>`;

        if(hd_yys.gnb[x].gnb_ul_li.length > 0) navitag += `<ul>`;
                for(j in hd_yys.gnb[x].gnb_ul_li){
                    navitag += `<li>
                    <a href="${hd_yys.gnb[x].gnb_ul_li[j].href}">${hd_yys.gnb[x].gnb_ul_li[j].Text}
                    </a>
                    </li>`
                }
        if(hd_yys.gnb[x].gnb_ul_li.length > 0) navitag += `</ul>`;
        navitag += `</li>`;
    }

    document.querySelector("#gnb").innerHTML = navitag;
}

// console.log()

// window.onload = function(){}


// window.addEventListener('load', function(){})
// window.onload = function(){} 식과 동일한 기능
// window.addEventListener('load', function(){}) 식은 이벤트가 주인공이 아님 
// 'load'안에 다른 이벤트를 넣는게 가능
// 하지만 window.onload = function(){}은 load에 중심을 맞춘 식이기 때문에 onload식은 이걸 많이 사용한다.

