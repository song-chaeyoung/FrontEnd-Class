//  geolocation => 사용자의 위치를 파악하기 위한 목적 API

// getCurrentPosition(succeseCB, errorCB, options)

const getLocation = document.querySelector("#get_location");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `위도 : ${position.coords.latitude} , 경도 : ${position.coords.longitude}`;
};

const errPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errPosition);

    const options = {
      enableHighAccuracy: ture,
      maximumAge: 0,
      timeout: 5000,
    };

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errPosition,
      options
    );
    // watchPosition : 계속 정보값을 찾아옴
    // clearWatch : 위치 받아오는걸 중단함

    setTimeout(() => {
      navigator.geolocation.clearWatch();
    }, 30000);
  } else {
    alert("Geolocation을 지원하지않습니다.");
  }
});
