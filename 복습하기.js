// for , for - in , for ~ for, foreach

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

let mynav = ""

// for (초기화식; 조건식; 증감식) {
//         반복 실행될 코드
//     }

for(liea = 0; liea < 3; liea++){
    mynav += nav_data[liea].gnb_li_a + nav_data[liea].gnb_li_href;
}

console.log(mynav);

// for (변수 in 객체) {
//     객체의 속성에 대해 반복 실행될 코드
// }

for(let liea in nav_data){
    mynav += nav_data[liea]["gnb_li_a"] + nav_data[liea]["gnb_li_href"];
}

console.log(mynav);

// for (초기화식1; 조건식1; 증감식1) {
//     for (초기화식2; 조건식2; 증감식2) {
//             반복 실행될 코드
//     }
// }

for(){

    for(){
        
    }
}

// 배열.forEach(function(요소, 인덱스, 배열) {
//         배열의 각 요소에 대해 실행될 코드
//     });