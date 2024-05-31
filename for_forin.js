// for(let i = 0; i < 10; i++){
//     console.log("10번등장")
// }

// let meg = "";
// for(let i = 0; i < 10; i++){
//     meg += "ㅇㅅㅇ\t\"10번\"등장 \n";
// }

// console.log(meg);

// for안에 메서드/if else 넣지 않기
// for안에 초기 설정 하지 않기
// 개발 속도 올리는 방법 > 변수를 설정해서 적용
// \n : 띄어쓰기(스페이스)
// \t : 탭 문자 삽입
// "\"10번\"등장 \n"에서 \"10번\" > "10번"으로 출력됨


const nav_data = [
    {
        gnb_li_a : "회사소개",
        gnb_li_href : "./conpany.html"
    },
    {
        gnb_li_a : "제품소개",
        gnb_li_href : "./product.html"
    },
    {
        gnb_li_a : "커뮤니티",
        gnb_li_href : "./board.html"
    },
    {
        gnb_li_a : "인트라넷",
        gnb_li_href : "./intro.html"
    }
]

// console.log(`<li><a href="${nav_data[2].gnb_li_href}">${nav_data[2].gnb_li_a}</a></li>`)

// console.log(nav_data[1].gnb_li_href)
// console.log(nav_data[1]["gnb_li_href"])
// object를 array화 시켜보는 실습
// 위아래는 동일 표현. 아래 표현은 오브젝트를 어레이화 시킨 표현, 리액트에서 많이 사용
// 개발할 때 편한건 array > 오타내면 적용이 안됨


let mygnb = "";
for(let liea = 0; liea < nav_data.length; liea++){
    mygnb += nav_data[liea].gnb_li_href;
}

console.log(mygnb);

// 정통-기본 for 문
// document.getElementsByClassName("gnb").length;
// document.querySelectorAll(".gnb").length;

// document = html 이라는 뜻

let mygnb2 = "";
for(let v in nav_data){
    // console.log("forin문처리 : ",v);
    mygnb2 += `${nav_data[v].gnb_li_href}\n`;
}

console.log(mygnb2);
// for - in
// in 뒤쪽에 오브젝트나 어레이가 와야한다
// 순회한다?
// 공지사항, nav 등 많이 사용 