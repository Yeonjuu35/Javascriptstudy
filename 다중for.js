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

let mygnb = "";
for(let liea = 0; liea < nav_data.length; liea++){
    mygnb += nav_data[liea].gnb_li_href;
}
console.log(mygnb);


let mygnb2 = "";
for(let v in nav_data){
    mygnb2 += nav_data[v]["gnb_li_a"] + nav_data[v].gnb_li_href;
}
console.log(mygnb2);