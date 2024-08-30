const showPosition = (position) => {
  const url =
    "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=AppTest&serviceKey=vU3aPZdOioTX4mNoz7V3kPODuwuTtMu7WSMDi0nq8SrTHhSDp6EuOsaOhwd480IAglwuzeFcLv4fAfzHOe5C7A%3D%3D&_type=json";

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const data = json.response.body.items.item;
      console.log(data);

      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      const mapContainer = document.querySelector("#map");
      const mapOption = {
        center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
        level: 13, // 지도의 확대 레벨
      };

      // // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      const map = new kakao.maps.Map(mapContainer, mapOption);

      const clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 10, // 클러스터 할 최소 지도 레벨
      });

      let markers = [];

      for (var i = 0; i < data.length; i++) {
        const marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
        });

        markers.push(marker);

        const infowindow = new kakao.maps.InfoWindow({
          content: data[i].facltNm,
        });

        const makeOverListener = (map, marker, infowindow) => {
          return () => {
            infowindow.open(map, marker);
          };
        };

        const makeOutListener = (infowindow) => {
          return () => {
            infowindow.close();
          };
        };

        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );
        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(infowindow)
        );
      }

      clusterer.addMarkers(markers);
    });

  // const positions = [
  //   {
  //     title: "이젠 아카데미",
  //     latlng: new kakao.maps.LatLng(latitude, longitude),
  //   },
  //   {
  //     title: "그린아카데미",
  //     latlng: new kakao.maps.LatLng(37.5001513, 127.0290763),
  //   },
  //   {
  //     title: "강남컴퓨터학원-SBS아카데미컴퓨터아트학원",
  //     latlng: new kakao.maps.LatLng(37.4979437, 127.0265374),
  //   },
  //   {
  //     title: "코리아IT아카데미 강남지점",
  //     latlng: new kakao.maps.LatLng(37.4999467, 127.0354264),
  //   },
  //   {
  //     title: "SBS아카데미게임&웹툰학원 강남점",
  //     latlng: new kakao.maps.LatLng(37.5018484, 127.0246576),
  //   },
  // ];
};

const errorPosition = (err) => {
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
} else {
  alert("Geolocation을 지원하지 않는 기기입니다.");
}
