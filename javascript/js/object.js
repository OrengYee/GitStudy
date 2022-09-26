const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

let validStatus = [false, false, false, false, false];

let inputObjects = new Array();

button.onclick = () => { 

      inputs.forEach((input, index) => {

           let inputObj = {
                value: input.value,
                placeholder: input.placeholder,
                print: () => {
                    console.log(inputObj.placeholder + "print 메소드 실행.");
                },
                "test": test
           } 

           inputObjects.push(inputObj);
           
           validStatus[index] + !inputIsEmpty(input.value)
      });

      console.log(inputObjects);

  if(validStatus.includes(false)){
        for(let i =0; i < validStatus.length; i++) {
            if(!validStatus[i]) {
               alert(inputs[i].placeholder + "이 입력되지 않았습니다.");
            break;  
            }
        }  
  }else {
    alert("검사완료.")
}


}

function inputIsEmpty(str) {
      return str == null || str == "" || str == undefined;
      /* null = 아무것도 없음 || "" = 비었음 || undefined = 정의되지 않음 */
}

/*

if(isEmpty(status)) {
  console.log("입력완료");
} else {
  console.log(input[]+"번이 입력되지 않았습니다.");
}


/* 

Array 사용해야한다
검사하기를 눌렀을 때 모든 input에 값이 입력되어 있어야만
검사완료 메세지를 보여준다.

만약 하나라도 입력되어 있지 않으면 
순서대로 "00번이입력되지 않았습니다." 메세지 출력 .

*/ 
