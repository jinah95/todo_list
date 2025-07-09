# TODO APP 
------------

## 목차
- [개요](#개요)
- [구현설명](#구현설명)


## 개요
- 프로젝트 이름 : javscript로 구현하는 todo app 
- 프로젝트 기간 : 2025.07.07-2025.07.09
- 개발 언어 : javascript

![todo_app_img](https://github.com/user-attachments/assets/965106a5-bcac-47b1-a011-c320f04baff0)


## 구현설명 
- 기본 데이터 형태 : localstorage에 저장하여 새로고침 시에도 상태 유지 하도록 설정. 
   ㄴ 기본 데이터 타입 :{name : todo 내용, isCompleted : 완료여부, isChecked : 체크박스 체크 여부, isEditing : 편집 상태}
- 구조 : APP.js (data 초기셋팅, 업데이트 / todo app 동작 함수)
        TodoList.js (TodoInput 에서 입력한 data 목록 구현 / ul-li / 각 수정, 삭제 등 버튼 추가)
        TodoInput.js (todo 항목을 입력 받는 컴포넌트)
        TodoAll.js (TodoList의 전체 선택 체크박스와 이에 따른 완료/삭제 일괄 처리 기능 / 완료, 전체 항목 카운트 view 추가)


- **[ App.js ]** : 초기 data값 셋팅 및 업데이트 담당, todo app의 삭제, 편집, 완료 등 함수를 actions 안에 객체로 담아 하위 TodoList, TodoAll에 props로 전달.


- **[ TodoInput.js ]** : form 안에 todo를 입력 받을 input과 submit button을 추가.
                       값을 입력하고 버튼을 누르거나 enter 시, data에 값이 추가 되고 기존에 있던 input.value = '' 처리.


- **[ TodoAll.js ]** : todo 입력 창 하단에 존재하는 todoList data의 일괄 처리 (완료 / 삭제)를 가능하도록 하며, 완료 항목과 전체 항목의 수량을 보여줌.
                      수량 변화를 data 변화에 따라 감지하기 위해, updateTodoInfo 함수를 내보내어 App.js 내 실제 완료 여부에 변화를 주는 경우에 isUpdate라는 분기값을 setState 시 props로 전달하여, 업데이트 된 데이터를 전달하여 재렌더 하도록 하였음.


- **[ TodoList.js ]** : todo 개별 항목의 기능이 있는 컴포넌트. ul > li 형태로 목록 view를 구현.
                       ul 내부 li 안에 체크박스, input, 완료여부, 수정, 삭제 등 다양한 버튼이 존재하며, 이에 따라 해당 기능을 가진 tag에 name을 주어 click 이벤트가 발생할 경우 적절한 기능이 동작하도록 분기 처리함. 
                       미완료 상태의 todo의 경우 수정이 가능하며, 완료 시 수정 불가능 함을 input에 read-only 기능을 적용하며 분기처리. (style 또한 read-only 상태의 경우 일반 text 처럼 노출될 수 있도록 변경)



