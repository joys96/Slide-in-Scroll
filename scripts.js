const images = document.querySelectorAll('.article .image');
let isImageVisible = false;

    function debounce(func, wait = 20, immediate = true) {
        var timeout;           //불필요하게 너무 많은 event발생에 의해 콜백함수가 호출되는 경우, 적정수준으로 조절하기
                               //위한 함수이고, 대상 콜백함수를 괄호로 감싸 사용
      
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
      
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
      
          if (callNow) func.apply(context, args);
        };
      };

function slideImage(e){
}


window.addEventListener('scroll',debounce(slideImage, 30));

