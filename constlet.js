// let study = "ㅇㅅㅇ";
// const myword = "그래 나도 한번 " + study + " 해보자!";
// 아래와 동일한 서식
// const myword = `그래 나도 한번 ${study} 해보자!`;
// console.log(myword);

let _month = ['2','3','7'];
let _study = ['피그마','리액트','뷰']
let _student = ['홍길동','나훈아','조명섭'];

const myword0 = `저는 ${_month[0]}개월간의 ${_study[0]}를 한 ${_student[0]}입니다.`;
const myword1 = `저는 ${_month[1]}개월간의 ${_study[1]}를 한 ${_student[1]}입니다.`;
const myword2 = `저는 ${_month[2]}개월간의 ${_study[2]}를 한 ${_student[2]}입니다.`;

// console.log(myword0,myword1,myword2);

const myarr = [
                ["네이버","http://www.naver.com"],
                ["다음","http://www.daum.net"],
                ["구글","http://www.google.com"]
              ]

console.log( "첫번째 배열",myarr[0], typeof(myarr[0]),
            "첫번째 배열의 첫번째 값",myarr[0][0], typeof(myarr[0][0]) )

// console.log( "<a href='http://www.naver.com'>네이버</a>" )

console/log( `<a hred="${myarr[0][1]}">"${myarr[0][0]}"</a>`)
console/log( `<a hred="${myarr[1][1]}">"${myarr[1][0]}"</a>`)
console/log( `<a hred="${myarr[2][1]}">"${myarr[2][0]}"</a>`)

console/log( `<a hred="${myarr[3][0]}">"${myarr[1][2]}"</a>`)

const myarrobj = {
    _month : ['2','3','7'],
    _study : ['피그마','리액트','뷰'],
    _student : ['홍길동','나훈아','조명섭']
}

console.log(myarrobj._study(0)._month(0)._student(0));

const gnb={
    d1 : {
        text : "회사소개",
        href : "./company.html"
    },
    d2 : [
            {
                text : "ceo인사말",
                href : "./ceo.html"
            },
            {
                text : "조직도",
                href : "./organ.html"
            }
    ]
}

console.log(`<a href="${gnb.d1.href}">${gnb.d1.text}</a>`)

console.log(`<a href="${gnb.d2[0].href}">${gnb.d2[0].text}</a>`)
