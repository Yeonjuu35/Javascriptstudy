const hd_yys ={
    // 커뮤니티가 아닌 사이트는 로고를 잘 바꾸지 않아서 추가할 일이 없음
    // 네이버처럼 그날의 컨셉에 맞춰 바꾸는게 아닌 이상 추가하지 않아도 괜찮
    // 자주 바뀌는 종목이 아니면 추가하지 않아도 됨
    logo : {
        Text : "uglyus",
        href : "/uglyus/",
        img : "/uglyus/img/img_yys/svg/ugly_us_logo.svg",
        cls : ["me-3"]
    },
    gnb : [
        {
        Text : "우리의미션",
        href : "misson.html",
        cls : ["nav-mission1 me-5 gnb_li rel","d-block gnb_a","gnb_ul abs","gnb_ul_li"],
        gnb_ul_li : [
            {
                Text : "미션",
                href : "mission.html"
            },
            {
                Text : "소싱철학",
                href : "social.html"
            }
        ]
    },
    {
        Text : "정기배송",
        href : "misson.html",
        cls : ["nav-mission2 me-5 gnb_li rel","d-block gnb_a","gnb_ul abs","gnb_ul_li"],
        gnb_ul_li : [
            {
                Text : "후기",
                href : "mission.html"
            },
            {
                Text : "혜택",
                href : "social.html"
            },
            {
                Text : "이용안내",
                href : "social.html"
            }
        ]
    },
    {
        Text : "싱싱마켓",
        href : "misson.html",
        cls : ["nav-mission3 me-5 gnb_li rel","d-block gnb_a","gnb_ul abs","gnb_ul_li"],
        gnb_ul_li : [
            {
                Text : "인기상품",
                href : "mission.html"
            },
            {
                Text : "대기중인상품",
                href : "social.html"
            }
        ]
    },
    {
        Text : "커뮤니티",
        href : "misson.html",
        cls : ["nav-mission4 me-5 gnb_li rel","d-block gnb_a","gnb_ul abs","gnb_ul_li"],
        gnb_ul_li : [
            {
                Text : "오늘의레시피",
                href : "mission.html"
            },
            {
                Text : "채소이야기",
                href : "social.html"
            },
            {
                Text : "어글리어스밥풀루언서",
                href : "social.html"
            }
        ]
    }
    ],
    util : [
        {
            Text : "로그인",
            href : "login.html",
            cls : ["d-flex px-0 my-0","me-3 font_login","nav-link font_login"]
        },
        {
            Text : "회원가입",
            href : "consumer.html",
            cls : ["d-flex px-0 my-0","font_login","nav-link me-0 font_login"]
        }
    ]
} 


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
        navitag += `
        <li class="${hd_yys.gnb[x].cls[0]}">
            <a class="${hd_yys.gnb[x].cls[1]}" href="${hd_yys.gnb[x].href}">${hd_yys.gnb[x].Text}</a>
            <ul>
            </ul>
        </li>
        `;
    }

    document.querySelector("#gnb").innerHTML = navitag;
}


// window.addEventListener('load', function(){})
// window.onload = function(){} 식과 동일한 기능
// window.addEventListener('load', function(){}) 식은 이벤트가 주인공이 아님 
// 'load'안에 다른 이벤트를 넣는게 가능
// 하지만 window.onload = function(){}은 load에 중심을 맞춘 식이기 때문에 onload식은 이걸 많이 사용한다.