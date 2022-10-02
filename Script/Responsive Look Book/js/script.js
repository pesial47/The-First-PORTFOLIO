let grid=new Isotope("section",{//배치할 요소를 감싸고 있는 부모요소
    itemSelector:"article",//배치할 요소명(자손)
    columnWidth:"article", //세로넓이:넓이값을 수할 요소명 - article 에 width 25%했으니 4개가 보여져야함
    transitionDuration:"0.5s"//변경되는과정:화면 재배치시 요소가 움직이는 속도
});

let btn=document.querySelectorAll("ul.menu li");

for(let el of btn){
    el.addEventListener("click", e=>{
        e.preventDefault();
        let sort = e.currentTarget.querySelector("a").getAttribute("href");

        console.log(sort);

        //grid
        //grid안에 저장된 결과를 불러와 재정렬 기능을 연결
        grid.arrange({
            filter:sort
        });

        for(let el of btn){
            el.classList.remove("on");
        }
        e.currentTarget.classList.add("on");
        //마우스를 클릭한 li태그에 클래스 on을 추가한다.
    })
}
// $grid.isotope({filter:'*'})