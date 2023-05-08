// 원 생성
var circle = document.createElement("div");
circle.style.position = "fixed";
circle.style.width = "50px";
circle.style.height = "50px";
circle.style.borderRadius = "50%";
circle.style.backgroundColor = "#FFF4D5";
circle.style.zIndex = "9999";
circle.style.display = "none"; // 처음에는 숨기기

// 초기 위치 설정
var circleX = window.innerWidth / 2 - 25;
var circleY = window.innerHeight / 2 - 25;
circle.style.left = circleX + "px";
circle.style.top = circleY + "px";

// 원을 body에 추가
document.body.appendChild(circle);

// 이미지 생성
var img = document.createElement("img");
img.src = "./img/s1.png";
img.style.position = "fixed";
img.style.width = "100px";
img.style.height = "100px";
img.style.zIndex = "9999";
img.style.display = "none"; // 처음에는 숨기기
img.style.transition = "opacity 0.2s ease"; // 페이드 인 효과 추가

// 초기 위치 설정
var imgX = window.innerWidth / 2 - 50;
var imgY = window.innerHeight / 2 - 50;
img.style.left = imgX + "px";
img.style.top = imgY + "px";

// 이미지를 body에 추가
document.body.appendChild(img);

// 스크롤 이벤트 처리
window.addEventListener("scroll", function () {
  // 현재 스크롤 위치
    var scrollTop = window.scrollY;

    // 원의 최대 크기
    var maxCircleSize = 3000;

    // 스크롤 위치에 따라 원 크기 조정
    var circleSize = Math.min(scrollTop * 3, maxCircleSize);
    circle.style.width = circleSize + "px";
    circle.style.height = circleSize + "px";

    // 원의 위치 조정
    circleX = window.innerWidth / 2 - circleSize / 2;
    circleY = window.innerHeight / 2 - circleSize / 2;
    circle.style.left = circleX + "px";
    circle.style.top = circleY + "px";

    // 이미지 생성 위치
    var imgPosition = window.innerHeight / 4;

    // 스크롤 위치에 따라 이미지 생성/삭제 및 페이드 인 처리
    if (scrollTop >= imgPosition) {
        img.style.display = "block";
        img.style.opacity = "1"; // 투명도 0에서 1로 변경하여 페이드 인 효과
    } else {
        img.style.opacity = "0"; // 투명도 1에서 0으로 변경하여 페이드 아웃 효과
    }

    // 원, 이미지 보이기
    circle.style.display = "block";
});
