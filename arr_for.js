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
    }
]

console.log(nav_data[2].gnb_li_a)

// const mynavidb = "";
// for(i in nav_data){
//     mynavidb += `
//     <li>
//     <a href="${nav_data[0].gnb_li_href}">${nav_data[0].gnb_li_a}</a>
//     </li>
//     `
// }

document.querySelector("#gnb").innerHTML


console.log("한번만 실행");

for(var i = 0; i < 5; i++ ){
    console.log("다섯번 실행");
}

let count = 10; 
    count += 100;
    count += 1;
    count++; // 111

    ++count; // 113
   
console.log(count)

// count++; 10
// count; 11
// ++count; 12 
// count += 1 = ++count

let multy = 10;
    multy = multy * 3; // multy *= 3    


console.log(multy)


//  문자 연산식
let mystudy = "리액트";
    mystudy = "리액트" + "뷰"; // mystudy += "뷰";

let startjs = 10;
    startjs += 10;
    startjs += "원";
    startjs += 100;
    startjs += 100;
    // 20원 100100 이 답
    // 처음에 숫자로 시작해도 중간에 문자열이 들어오면 그 식은 문자가 된다. 
    // 이후에는 숫자가 나와도 문자처럼 순서대로 뒤에 나열


for(let i = 0; i < 10; i++){
     console.log("10번등장")
}

let meg = "";
for(let i = 0; i < 10; i++){
    let meg = "10번등장";
}