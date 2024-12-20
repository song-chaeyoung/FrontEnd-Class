// 자바, 파이썬, C와 같은 전통적인 프로그래밍 언어에서는 반복문을 사용할 수 있는 배열을 선언할 때, 선언단계부터 몇개의 데이터를 처리할지 사전 정의

// int arr[5] = [1,2,3,4,5,6,7] //에러
int arr[20] = [1,2,3,4,5]
// 1) 컴퓨터가 조금 느려지는 것을 감안하고 미리 공간을 할당
// 2) 시간이 경과 => 20개
// 3) 40개에서 20개?

// 해결방법 : 참조타입의 자료형 = 배열
// heap : 메모리공간
// 배열 안에 있는 첫번재 인덱스값만 알고 있어도 두번째, 세번째 인덱스값은 알아서 해당 주소를 통해서 찾아오는 특징
// 장점 : 읽어오는데 굉장히 효율적인 자료구조
// 장점 : 이미 자료구조의 형식, 사이즈를 가지고 태어나기 때문에 해당배열의 첫번째 혹은 마지막번째에 순차적으로 값을 추가하는데 효율적이다

// 배열 단점 : 최초에 배열 데이터를 생성하는 시점에서 배열안에 입력되어야 하는 데이터를 총개수가 미정인경우,
// 값이 추가되었을 때, 해당 값이 개발자가 원하는 정확한 위치에 추가하거나 혹은 삭제해야하는 경우 

// 자료구조를 이야기할 때에는 배열 & 연결리스트

// 연결리스트 자료구조 : 산발적으로 흩어져있는 데이터를 필요에 따라서 하나의 연결된 리스트의 자료구조로 만들어주는 장점 
// 연결리스트의 경우 : 값을 찾아서 불러오는데 배열 대비 상대적으로 시간이 많이 걸림 

// 만약 어떤 프로젝트 & 제품을 만드는데 있어서 데이터의 입출력 및 편집이 빈번하게 일어나야하는 상황이라면?
// => 배열보다 연결리스트가 훨씬 효율적인 자료구조

// 만약 컴포넌트가 만우트가 되는 시점에 서버로부터 전달받은 자료에 수정, 편집이 거의 일어나지 않는 정적인 형태의 프로젝트 및 제품이라면?
// => 배열

// 배열이라는 자료구조가 사용할 수 잇는 메서드 함수 & 속성

// 연결리스트 역시 사용할 수 있는 다양한 함수 혹은 속성 구현

// 추상자료형 : 연결리스트의 자료구조가 사용할 수 있는 기능을 담고 있는 함수 및 속성
// 연결리스트 & 추상자료형의 혙태로 구현