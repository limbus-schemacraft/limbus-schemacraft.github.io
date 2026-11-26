// Source: https://yeon-sim.github.io/personality/ (2026-11-26)
const catalog = [
  {
    "sinner": "이상",
    "identities": [
      {"name": "LCB 수감자", "cost": 0, "keywords": ["침잠"], "affiliations": ["림버스 컴퍼니", "LCB"]},
      {"name": "남부 세븐 협회 6과", "cost": 1, "keywords": ["파열"], "affiliations": ["해결사", "세븐 협회"]},
      {"name": "어금니 사무소 해결사", "cost": 2, "keywords": ["진동"], "affiliations": ["해결사", "어금니 사무소"]},
      {"name": "피쿼드호 일등 항해사", "cost": 2, "keywords": ["출혈", "호흡"], "affiliations": ["피쿼드호"]},
      {"name": "남부 디에치 협회 4과", "cost": 1, "keywords": ["침잠"], "affiliations": ["해결사", "디에치 협회"]},
      {"name": "LCE E.G.O:: 초롱", "cost": 3, "keywords": ["파열"], "affiliations": ["E.G.O 장비", "림버스 컴퍼니", "LCE"]},
      {"name": "검계 살수", "cost": 2, "keywords": ["호흡"], "affiliations": ["조직", "검계"]},
      {"name": "개화 E.G.O:: 동백", "cost": 3, "keywords": ["침잠"], "affiliations": ["기술해방연합"]},
      {"name": "W사 3등급 정리 요원", "cost": 2, "keywords": ["충전", "파열"], "affiliations": ["W사"]},
      {"name": "약지 점묘파 스튜던트", "cost": 3, "keywords": ["출혈"], "affiliations": ["손가락", "스튜던트", "점묘파", "약지"]},
      {"name": "로보토미 E.G.O:: 엄숙한 애도", "cost": 4, "keywords": ["침잠"], "affiliations": ["로보토미 본사", "E.G.O 장비"]},
      {"name": "남부 리우 협회 3과", "cost": 3, "keywords": ["화상"], "affiliations": ["해결사", "리우 협회"]},
      {"name": "N사 E.G.O:: 흉탄", "cost": 4, "keywords": ["출혈", "호흡"], "affiliations": ["E.G.O 장비", "N사"]},
      {"name": "흑수 - 오 필두", "cost": 4, "keywords": ["파열", "진동"], "affiliations": ["흑수", "흑수 필두", "가씨 가문", "흑수 - 오", "H사"]},
      {"name": "거미집 검지 아비", "cost": 5, "keywords": ["침잠", "호흡"], "affiliations": ["손가락", "신탁 대행자", "검지", "거미집"]},
      {"name": "LCE E.G.O:: 차원찢개", "cost": 5, "keywords": ["충전", "파열"], "affiliations": ["E.G.O 장비", "림버스 컴퍼니", "LCE"]},
      {"name": "오트쿠튀르:: 르누아르 B3F 건조장", "cost": 6, "keywords": ["충전", "진동"], "affiliations": []}
    ]
  },
  {
    "sinner": "파우스트",
    "identities": [
      {"name": "LCB 수감자", "cost": 0, "keywords": [], "affiliations": ["림버스 컴퍼니", "LCB"]},
      {"name": "W사 2등급 정리 요원", "cost": 1, "keywords": ["충전"], "affiliations": ["W사"]},
      {"name": "살아남은 로보토미 직원", "cost": 2, "keywords": ["파열", "호흡"], "affiliations": ["해결사", "로보토미 지부"]},
      {"name": "남부 츠바이 협회 4과", "cost": 1, "keywords": [], "affiliations": ["해결사", "츠바이 협회"]},
      {"name": "워더링하이츠 버틀러", "cost": 3, "keywords": ["침잠"], "affiliations": ["해결사", "워더링하이츠"]},
      {"name": "쥐는 자", "cost": 3, "keywords": ["출혈"], "affiliations": ["N사", "N사 광신도"]},
      {"name": "남부 세븐 협회 4과", "cost": 2, "keywords": ["파열"], "affiliations": ["해결사", "세븐 협회"]},
      {"name": "로보토미 E.G.O:: 후회", "cost": 3, "keywords": ["진동"], "affiliations": ["로보토미 본사", "E.G.O 장비"]},
      {"name": "검계 살수", "cost": 3, "keywords": ["호흡", "출혈"], "affiliations": ["조직", "검계"]},
      {"name": "멀티크랙 사무소 대표", "cost": 4, "keywords": ["충전"], "affiliations": ["해결사", "기계 융화 생명체", "멀티크랙 사무소"]},
      {"name": "LCE E.G.O:: 홍염살", "cost": 4, "keywords": ["화상"], "affiliations": ["E.G.O 장비", "림버스 컴퍼니", "LCE"]},
      {"name": "흑수 - 묘 필두", "cost": 4, "keywords": ["파열"], "affiliations": ["흑수", "흑수 필두", "흑수 - 묘", "H사"]},
      {"name": "동부 시 협회 3과", "cost": 3, "keywords": ["출혈", "호흡"], "affiliations": ["해결사", "시 협회"]},
      {"name": "검지 수행자: 【쪽지】", "cost": 5, "keywords": ["호흡", "침잠"], "affiliations": ["손가락", "검지"]},
      {"name": "거미집 약지 제자", "cost": 5, "keywords": ["출혈", "충전"], "affiliations": ["기계 융화 생명체", "손가락", "신체파", "약지", "거미집"]},
      {"name": "새벽 사무소 해결사", "cost": 5, "keywords": ["화상", "진동"], "affiliations": ["해결사", "새벽 사무소"]}
    ]
  },
  {
    "sinner": "돈키호테",
    "identities": [
      {"name": "LCB 수감자", "cost": 0, "keywords": ["출혈"], "affiliations": ["림버스 컴퍼니", "LCB"]},
      {"name": "남부 시 협회 5과 부장", "cost": 1, "keywords": ["호흡"], "affiliations": ["해결사", "시 협회"]},
      {"name": "N사 중간 망치", "cost": 2, "keywords": ["진동", "출혈"], "affiliations": ["N사", "N사 광신도"]},
      {"name": "로보토미 E.G.O:: 초롱", "cost": 2, "keywords": ["파열"], "affiliations": ["로보토미 본사", "E.G.O 장비"]},
      {"name": "검계 살수", "cost": 2, "keywords": ["호흡"], "affiliations": ["조직", "검계"]},
      {"name": "W사 3등급 정리 요원", "cost": 2, "keywords": ["충전", "파열"], "affiliations": ["W사"]},
      {"name": "남부 섕크 협회 5과 부장", "cost": 2, "keywords": [], "affiliations": ["해결사", "섕크 협회"]},
      {"name": "중지 작은 아우", "cost": 3, "keywords": ["출혈"], "affiliations": ["손가락", "중지"]},
      {"name": "T사 3등급 징수직 직원", "cost": 3, "keywords": ["진동"], "affiliations": ["T사"]},
      {"name": "라만차랜드 실장", "cost": 4, "keywords": ["출혈"], "affiliations": ["혈귀", "제2권속", "라만차랜드"]},
      {"name": "동부 섕크 협회 3과", "cost": 3, "keywords": ["호흡", "화상"], "affiliations": ["해결사", "섕크 협회"]},
      {"name": "로보토미 E.G.O:: 사랑과 증오의 이름으로", "cost": 4, "keywords": ["충전", "파열", "침잠"], "affiliations": ["로보토미 본사", "E.G.O 장비"]},
      {"name": "흑수 - 미", "cost": 4, "keywords": ["파열", "침잠"], "affiliations": ["흑수", "흑수 - 미", "H사"]},
      {"name": "검지 대행자 - 개화 E.G.O:: 대행", "cost": 5, "keywords": ["호흡", "침잠"], "affiliations": ["손가락", "검지", "거미집"]},
      {"name": "오트쿠튀르:: 르누아르 브랜드 매니저", "cost": 6, "keywords": ["충전", "진동"], "affiliations": []},
      {"name": "쐐기 사무소 해결사", "cost": 6, "keywords": ["호흡", "진동"], "affiliations": ["해결사", "쐐기 사무소"]}
    ]
  },
  {
    "sinner": "료슈",
    "identities": [
      {"name": "LCB 수감자", "cost": 0, "keywords": ["호흡"], "affiliations": ["림버스 컴퍼니", "LCB", "천살성"]},
      {"name": "남부 세븐 협회 6과", "cost": 1, "keywords": ["파열"], "affiliations": ["해결사", "세븐 협회"]},
      {"name": "LCCB 대리", "cost": 2, "keywords": ["호흡", "진동", "파열"], "affiliations": ["림버스 컴퍼니", "LCC"]},
      {"name": "남부 리우 협회 4과", "cost": 1, "keywords": ["화상"], "affiliations": ["해결사", "리우 협회"]},
      {"name": "20구 유로지비", "cost": 3, "keywords": ["진동"], "affiliations": ["조직", "유로지비"]},
      {"name": "흑운회 와카슈", "cost": 2, "keywords": ["출혈"], "affiliations": ["조직", "흑운회"]},
      {"name": "료. 고. 파. 주방장", "cost": 3, "keywords": ["출혈"], "affiliations": ["조직", "뒷골목", "료.고.파"]},
      {"name": "W사 3등급 정리 요원", "cost": 2, "keywords": ["충전"], "affiliations": ["W사"]},
      {"name": "에드가 가문 치프 버틀러", "cost": 4, "keywords": ["호흡"], "affiliations": ["해결사", "에드가 가문"]},
      {"name": "로보토미 E.G.O:: 적안・참회", "cost": 4, "keywords": ["충전", "출혈"], "affiliations": ["로보토미 본사", "E.G.O 장비"]},
      {"name": "흑수 - 묘", "cost": 4, "keywords": ["파열"], "affiliations": ["흑수", "흑수 - 묘", "H사"]},
      {"name": "N사 E.G.O:: 경멸, 경외", "cost": 4, "keywords": ["출혈", "진동"], "affiliations": ["E.G.O 장비", "N사"]},
      {"name": "홍원 방랑무사", "cost": 4, "keywords": ["호흡", "파열"], "affiliations": ["H사"]},
      {"name": "로보토미 E.G.O:: 잔향・외로움", "cost": 5, "keywords": ["침잠", "진동"], "affiliations": ["E.G.O 장비", "로보토미 본사"]},
      {"name": "거미집의 검", "cost": 5, "keywords": ["화상", "출혈", "호흡"], "affiliations": ["손가락", "지혜성", "소지", "거미집"]},
      {"name": "오트쿠튀르:: 르누아르 신발관", "cost": 6, "keywords": ["충전", "진동"], "affiliations": []}
    ]
  },
  {
    "sinner": "뫼르소",
    "identities": [
      {"name": "LCB 수감자", "cost": 0, "keywords": ["진동"], "affiliations": ["림버스 컴퍼니", "LCB"]},
      {"name": "남부 리우 협회 6과", "cost": 1, "keywords": ["화상"], "affiliations": ["해결사", "리우 협회"]},
      {"name": "장미스패너 공방 해결사", "cost": 2, "keywords": ["진동", "충전"], "affiliations": ["해결사", "장미스패너 공방"]},
      {"name": "중지 작은 아우", "cost": 2, "keywords": ["출혈"], "affiliations": ["손가락", "중지"]},
      {"name": "데드레빗츠 보스", "cost": 3, "keywords": ["파열"], "affiliations": ["조직", "데드레빗츠"]},
      {"name": "W사 2등급 정리 요원", "cost": 2, "keywords": ["충전", "파열"], "affiliations": ["W사"]},
      {"name": "N사 큰 망치", "cost": 3, "keywords": ["출혈"], "affiliations": ["N사", "N사 광신도"]},
      {"name": "R사 제 4무리 코뿔소팀", "cost": 2, "keywords": ["충전", "출혈"], "affiliations": ["R사"]},
      {"name": "검계 우두머리", "cost": 3, "keywords": ["호흡"], "affiliations": ["조직", "검계"]},
      {"name": "남부 디에치 협회 4과 부장", "cost": 3, "keywords": ["침잠"], "affiliations": ["해결사", "디에치 협회"]},
      {"name": "서부 섕크 협회 3과", "cost": 4, "keywords": ["파열", "호흡"], "affiliations": ["해결사", "섕크 협회"]},
      {"name": "동부 엄지 카포IIII", "cost": 4, "keywords": ["화상", "진동"], "affiliations": ["손가락", "카포 IIII", "엄지"]},
      {"name": "라만차랜드 왕자", "cost": 4, "keywords": ["출혈", "파열"], "affiliations": ["혈귀", "제3권속", "라만차랜드"]},
      {"name": "로보토미 E.G.O:: 호넷【변조】", "cost": 5, "keywords": ["화상", "출혈"], "affiliations": ["로보토미 본사", "E.G.O 장비"]},
      {"name": "약지 야수파 스튜던트", "cost": 5, "keywords": ["출혈", "침잠"], "affiliations": ["손가락", "스튜던트", "약지", "야수파"]}
    ]
  },
  {
    "sinner": "홍루",
    "identities": [
      {"name": "LCB 수감자", "cost": 0, "keywords": ["침잠", "파열"], "affiliations": ["림버스 컴퍼니", "LCB"]},
      {"name": "흑운회 와카슈", "cost": 1, "keywords": ["출혈"], "affiliations": ["조직", "흑운회"]},
      {"name": "남부 리우 협회 5과", "cost": 1, "keywords": ["화상"], "affiliations": ["해결사", "리우 협회"]},
      {"name": "W사 2등급 정리 요원", "cost": 1, "keywords": ["파열", "충전"], "affiliations": ["W사"]},
      {"name": "갈고리 사무소 해결사", "cost": 2, "keywords": ["출혈"], "affiliations": ["해결사", "뒷골목", "갈고리 사무소"]},
      {"name": "송곳니 사냥 사무소 해결사", "cost": 3, "keywords": ["파열"], "affiliations": ["해결사", "송곳니 사냥 사무소"]},
      {"name": "콩콩이파 두목", "cost": 3, "keywords": ["출혈"], "affiliations": ["조직", "뒷골목", "콩콩이파"]},
      {"name": "K사 3등급 적출직 직원", "cost": 3, "keywords": ["파열"], "affiliations": ["K사"]},
      {"name": "남부 디에치 협회 4과", "cost": 2, "keywords": ["침잠"], "affiliations": ["해결사", "디에치 협회"]},
      {"name": "20구 유로지비", "cost": 4, "keywords": ["진동"], "affiliations": ["조직", "유로지비"]},
      {"name": "마침표 사무소 대표", "cost": 4, "keywords": ["호흡"], "affiliations": ["해결사", "마침표 사무소"]},
      {"name": "R사 제 4무리 순록팀", "cost": 3, "keywords": ["충전", "침잠"], "affiliations": ["R사"]},
      {"name": "홍원 군주", "cost": 4, "keywords": ["파열", "호흡"], "affiliations": ["H사", "<span style=\"color:#d40000\"><s>가씨 가문</s></span>"]},
      {"name": "거미집 약지 아비", "cost": 5, "keywords": ["출혈", "충전"], "affiliations": ["기계 융화 생명체", "손가락", "<span style=\"color:#d40000\"><s>마에스트로<s></span>", "신체파", "약지", "거미집"]},
      {"name": "S사 추노꾼", "cost": 5, "keywords": ["출혈", "호흡"], "affiliations": ["해결사", "S사"]},
      {"name": "동부 섕크 협회 3과", "cost": 4, "keywords": ["호흡", "화상"], "affiliations": ["해결사", "섕크 협회"]},
      {"name": "오트쿠튀르:: 르누아르 3F 방송실", "cost": 6, "keywords": ["충전", "진동"], "affiliations": []}
    ]
  },
  {
    "sinner": "히스클리프",
    "identities": [
      {"name": "LCB 수감자", "cost": 0, "keywords": ["진동"], "affiliations": ["림버스 컴퍼니", "LCB"]},
      {"name": "남부 시 협회 5과", "cost": 1, "keywords": ["호흡"], "affiliations": ["해결사", "시 협회"]},
      {"name": "N사 작은 망치", "cost": 2, "keywords": ["출혈"], "affiliations": ["N사", "N사 광신도"]},
      {"name": "남부 세븐 협회 4과", "cost": 1, "keywords": ["파열"], "affiliations": ["해결사", "세븐 협회"]},
      {"name": "멀티크랙 사무소 해결사", "cost": 3, "keywords": ["충전"], "affiliations": ["해결사", "기계 융화 생명체", "멀티크랙 사무소"]},
      {"name": "R사 제 4무리 토끼팀", "cost": 2, "keywords": ["충전", "출혈", "파열"], "affiliations": ["R사"]},
      {"name": "로보토미 E.G.O:: 여우비", "cost": 3, "keywords": ["침잠", "파열"], "affiliations": ["E.G.O 장비", "기술해방연합"]},
      {"name": "피쿼드호 작살잡이", "cost": 3, "keywords": ["호흡", "출혈"], "affiliations": ["피쿼드호"]},
      {"name": "남부 외우피 협회 3과", "cost": 2, "keywords": ["진동"], "affiliations": ["해결사", "외우피 협회"]},
      {"name": "와일드헌트", "cost": 4, "keywords": ["침잠"], "affiliations": ["와일드헌트", "워더링하이츠"]},
      {"name": "마침표 사무소 해결사", "cost": 4, "keywords": ["호흡"], "affiliations": ["해결사", "마침표 사무소"]},
      {"name": "흑운회 와카슈", "cost": 4, "keywords": ["출혈"], "affiliations": ["조직", "흑운회"]},
      {"name": "W사 4등급 정리 요원 - CCA", "cost": 4, "keywords": ["충전", "파열"], "affiliations": ["W사"]},
      {"name": "흑수 - 유 필두", "cost": 4, "keywords": ["파열", "화상"], "affiliations": ["흑수", "흑수 필두", "H사", "흑수 - 유"]},
      {"name": "중지 작은 형님", "cost": 5, "keywords": ["출혈", "화상"], "affiliations": ["손가락", "중지"]},
      {"name": "거미집 엄지 제자", "cost": 5, "keywords": ["진동", "화상"], "affiliations": ["손가락", "엄지", "거미집"]},
      {"name": "오트쿠튀르:: 르루주 바느질의 왕", "cost": 6, "keywords": ["출혈", "충전"], "affiliations": []}
    ]
  },
  {
    "sinner": "이스마엘",
    "identities": [
      {"name": "LCB 수감자", "cost": 0, "keywords": ["진동"], "affiliations": ["림버스 컴퍼니", "LCB"]},
      {"name": "남부 시 협회 5과", "cost": 1, "keywords": ["호흡"], "affiliations": ["해결사", "시 협회"]},
      {"name": "LCCB 대리", "cost": 2, "keywords": ["진동", "파열"], "affiliations": ["림버스 컴퍼니", "LCC"]},
      {"name": "로보토미 E.G.O:: 출렁임", "cost": 2, "keywords": ["진동", "파열"], "affiliations": ["E.G.O 장비", "기술해방연합"]},
      {"name": "에드가 가문 버틀러", "cost": 3, "keywords": ["호흡", "침잠"], "affiliations": ["해결사", "에드가 가문"]},
      {"name": "R사 제 4무리 순록팀", "cost": 2, "keywords": ["충전", "침잠"], "affiliations": ["R사"]},
      {"name": "남부 리우 협회 4과", "cost": 2, "keywords": ["화상"], "affiliations": ["해결사", "리우 협회"]},
      {"name": "어금니 보트 센터 해결사", "cost": 3, "keywords": ["침잠", "진동"], "affiliations": ["해결사", "어금니 사무소"]},
      {"name": "피쿼드호 선장", "cost": 3, "keywords": ["출혈", "화상", "호흡"], "affiliations": ["피쿼드호"]},
      {"name": "서부 츠바이 협회 3과", "cost": 3, "keywords": ["진동"], "affiliations": ["해결사", "츠바이 협회"]},
      {"name": "흑운회 부조장", "cost": 4, "keywords": ["출혈"], "affiliations": ["조직", "흑운회"]},
      {"name": "가주 후보", "cost": 4, "keywords": ["파열", "호흡"], "affiliations": ["가주 후보", "가씨 가문", "H사"]},
      {"name": "정사무소 대표", "cost": 4, "keywords": ["진동", "침잠"], "affiliations": ["해결사", "정사무소", "협력 사무소 - 외우피"]},
      {"name": "거미집 중지 제자", "cost": 5, "keywords": ["출혈", "화상"], "affiliations": ["손가락", "중지", "거미집"]},
      {"name": "LCD 현장추리팀", "cost": 5, "keywords": ["출혈", "호흡"], "affiliations": ["조직", "림버스 컴퍼니", "LCD", "검계"]},
      {"name": "오트쿠튀르:: 르루주 부티크", "cost": 6, "keywords": ["출혈", "충전"], "affiliations": []}
    ]
  },
  {
    "sinner": "로쟈",
    "identities": [
      {"name": "LCB 수감자", "cost": 0, "keywords": ["출혈"], "affiliations": ["림버스 컴퍼니", "LCB"]},
      {"name": "LCCB 대리", "cost": 2, "keywords": [], "affiliations": ["림버스 컴퍼니", "LCC"]},
      {"name": "N사 중간 망치", "cost": 2, "keywords": ["출혈"], "affiliations": ["N사", "N사 광신도"]},
      {"name": "남부 츠바이 협회 5과", "cost": 1, "keywords": ["호흡"], "affiliations": ["해결사", "츠바이 협회"]},
      {"name": "T사 2등급 징수직 직원", "cost": 2, "keywords": ["진동"], "affiliations": ["T사"]},
      {"name": "흑운회 와카슈", "cost": 2, "keywords": ["출혈", "호흡"], "affiliations": ["조직", "흑운회"]},
      {"name": "장미스패너 공방 대표", "cost": 3, "keywords": ["진동", "충전"], "affiliations": ["해결사", "장미스패너 공방"]},
      {"name": "남부 디에치 협회 4과", "cost": 2, "keywords": ["침잠"], "affiliations": ["해결사", "디에치 협회"]},
      {"name": "남부 리우 협회 4과 부장", "cost": 2, "keywords": ["화상"], "affiliations": ["해결사", "리우 협회"]},
      {"name": "북부 제뱌찌 협회 3과", "cost": 3, "keywords": ["파열"], "affiliations": ["해결사", "제뱌찌 협회"]},
      {"name": "라만차랜드 공주", "cost": 4, "keywords": ["출혈", "파열"], "affiliations": ["혈귀", "제2권속", "라만차랜드"]},
      {"name": "흑수 - 사", "cost": 4, "keywords": ["파열", "호흡"], "affiliations": ["흑수", "흑수 - 사", "H사"]},
      {"name": "로보토미 E.G.O:: 눈물로 벼려낸 검", "cost": 4, "keywords": ["충전", "침잠"], "affiliations": ["로보토미 본사", "E.G.O 장비"]},
      {"name": "R사 제 4무리 순록팀", "cost": 3, "keywords": ["충전", "침잠"], "affiliations": ["R사"]},
      {"name": "약지 야수파 도슨트", "cost": 5, "keywords": ["출혈", "침잠"], "affiliations": ["손가락", "도슨트", "약지", "야수파"]},
      {"name": "거미집 엄지 아비", "cost": 5, "keywords": ["화상", "진동"], "affiliations": ["<span style=\"color:#d40000\"><s>언더보스</s></span>", "손가락", "연기전쟁", "전쟁영웅", "엄지", "거미집", "<span style=\"color:#d40000\"><s>7대 패밀리<s></span>"]},
      {"name": "오트쿠튀르:: 수선실", "cost": 6, "keywords": ["충전", "진동"], "affiliations": []}
    ]
  },
  {
    "sinner": "싱클레어",
    "identities": [
      {"name": "LCB 수감자", "cost": 0, "keywords": ["파열"], "affiliations": ["림버스 컴퍼니", "LCB"]},
      {"name": "남부 츠바이 협회 6과", "cost": 1, "keywords": ["진동"], "affiliations": ["해결사", "츠바이 협회"]},
      {"name": "마리아치 보스", "cost": 2, "keywords": ["호흡", "침잠"], "affiliations": ["조직", "뒷골목", "마리아치"]},
      {"name": "로보토미 E.G.O:: 홍적", "cost": 2, "keywords": ["파열"], "affiliations": ["E.G.O 장비", "기술해방연합"]},
      {"name": "어금니 보트 센터 해결사", "cost": 2, "keywords": ["진동"], "affiliations": ["해결사", "어금니 사무소"]},
      {"name": "서부 츠바이 협회 3과", "cost": 3, "keywords": ["진동"], "affiliations": ["해결사", "츠바이 협회"]},
      {"name": "검계 살수", "cost": 2, "keywords": ["호흡", "출혈"], "affiliations": ["조직", "검계"]},
      {"name": "쥐어들 자", "cost": 3, "keywords": ["출혈", "화상"], "affiliations": ["N사", "N사 광신도"]},
      {"name": "남부 섕크 협회 4과 부장", "cost": 2, "keywords": ["호흡"], "affiliations": ["해결사", "섕크 협회"]},
      {"name": "새벽 사무소 해결사", "cost": 4, "keywords": ["화상"], "affiliations": ["해결사", "새벽 사무소"]},
      {"name": "북부 제뱌찌 협회 3과", "cost": 3, "keywords": ["파열"], "affiliations": ["해결사", "제뱌찌 협회"]},
      {"name": "중지 작은 아우", "cost": 3, "keywords": ["출혈"], "affiliations": ["손가락", "중지"]},
      {"name": "동부 엄지 솔다토II", "cost": 4, "keywords": ["화상", "진동"], "affiliations": ["손가락", "솔다토 II", "엄지"]},
      {"name": "흑수 - 유", "cost": 4, "keywords": ["파열", "화상"], "affiliations": ["흑수", "흑수 - 유", "H사"]},
      {"name": "거미집 소지 제자", "cost": 5, "keywords": ["호흡", "출혈"], "affiliations": ["거미집"]},
      {"name": "오트쿠튀르:: 르루주 붉은 신", "cost": 6, "keywords": ["충전", "출혈"], "affiliations": []},
      {"name": "쐐기 사무소 해결사", "cost": 6, "keywords": ["호흡", "진동"], "affiliations": ["해결사", "쐐기 사무소"]}
    ]
  },
  {
    "sinner": "오티스",
    "identities": [
      {"name": "LCB 수감자", "cost": 0, "keywords": ["파열"], "affiliations": ["림버스 컴퍼니", "LCB"]},
      {"name": "검계 살수", "cost": 1, "keywords": ["호흡"], "affiliations": ["조직", "검계"]},
      {"name": "G사 부장", "cost": 2, "keywords": ["침잠"], "affiliations": ["G사"]},
      {"name": "남부 섕크 협회 4과", "cost": 1, "keywords": ["호흡"], "affiliations": ["해결사", "섕크 협회"]},
      {"name": "약지 점묘파 스튜던트", "cost": 2, "keywords": ["출혈"], "affiliations": ["손가락", "스튜던트", "점묘파", "약지"]},
      {"name": "남부 세븐 협회 6과 부장", "cost": 2, "keywords": ["파열"], "affiliations": ["해결사", "세븐 협회"]},
      {"name": "어금니 사무소 해결사", "cost": 3, "keywords": ["진동"], "affiliations": ["해결사", "어금니 사무소"]},
      {"name": "로보토미 E.G.O:: 마탄", "cost": 3, "keywords": ["화상"], "affiliations": ["로보토미 본사", "E.G.O 장비"]},
      {"name": "워더링하이츠 치프 버틀러", "cost": 4, "keywords": ["침잠"], "affiliations": ["해결사", "워더링하이츠"]},
      {"name": "W사 3등급 정리 요원 팀장", "cost": 3, "keywords": ["충전", "파열"], "affiliations": ["W사"]},
      {"name": "라만차랜드 이발사", "cost": 4, "keywords": ["출혈"], "affiliations": ["혈귀", "제3권속", "라만차랜드"]},
      {"name": "흑수 - 묘", "cost": 4, "keywords": ["파열"], "affiliations": ["흑수", "흑수 - 묘", "H사"]},
      {"name": "T사 3등급 강력징수직 직원", "cost": 4, "keywords": ["진동"], "affiliations": ["T사"]},
      {"name": "LCA 우제트 선봉 3팀 팀장", "cost": 5, "keywords": ["진동", "침잠"], "affiliations": ["림버스 컴퍼니", "LCA"]},
      {"name": "거미집 중지 아비", "cost": 5, "keywords": ["화상", "출혈"], "affiliations": ["손가락", "<span style=\"color:#d40000\"><s>큰 누님</s></span>", "거미집", "중지"]},
      {"name": "쐐기 사무소 대표", "cost": 6, "keywords": ["진동", "호흡"], "affiliations": ["해결사", "쐐기 사무소"]}
    ]
  },
  {
    "sinner": "그레고르",
    "identities": [
      {"name": "LCB 수감자", "cost": 0, "keywords": ["파열"], "affiliations": ["림버스 컴퍼니", "LCB"]},
      {"name": "남부 리우 협회 6과", "cost": 1, "keywords": ["화상"], "affiliations": ["해결사", "리우 협회"]},
      {"name": "료. 고. 파. 조수", "cost": 2, "keywords": ["출혈"], "affiliations": ["조직", "뒷골목", "료.고.파"]},
      {"name": "장미스패너 공방 해결사", "cost": 2, "keywords": ["충전", "진동", "파열"], "affiliations": ["해결사", "장미스패너 공방"]},
      {"name": "흑운회 부조장", "cost": 2, "keywords": ["출혈"], "affiliations": ["조직", "흑운회"]},
      {"name": "G사 일등대리", "cost": 3, "keywords": ["파열"], "affiliations": ["G사"]},
      {"name": "남부 츠바이 협회 4과", "cost": 2, "keywords": [], "affiliations": ["해결사", "츠바이 협회"]},
      {"name": "쌍갈고리 해적단 부선장", "cost": 3, "keywords": ["호흡", "출혈"], "affiliations": ["조직", "쌍갈고리 해적단"]},
      {"name": "에드가 가문 승계자", "cost": 4, "keywords": ["침잠"], "affiliations": ["에드가 가문"]},
      {"name": "라만차랜드 신부", "cost": 4, "keywords": ["출혈", "파열"], "affiliations": ["혈귀", "제3권속", "라만차랜드"]},
      {"name": "불주먹 사무소 생존자", "cost": 4, "keywords": ["화상"], "affiliations": ["해결사", "불주먹 사무소"]},
      {"name": "흑수 - 사", "cost": 4, "keywords": ["파열", "호흡"], "affiliations": ["흑수", "흑수 - 사", "H사"]},
      {"name": "밤의 송곳 카피타노", "cost": 4, "keywords": ["진동", "출혈"], "affiliations": ["조직", "밤의 송곳"]},
      {"name": "로보토미 E.G.O:: 램프", "cost": 5, "keywords": ["침잠", "화상"], "affiliations": ["E.G.O 장비", "림버스 컴퍼니", "LCE"]},
      {"name": "LCE E.G.O:: AEDD", "cost": 5, "keywords": ["충전", "파열"], "affiliations": ["E.G.O 장비", "림버스 컴퍼니", "LCE"]},
      {"name": "새벽 사무소 대표", "cost": 5, "keywords": ["화상", "진동"], "affiliations": ["해결사", "새벽 사무소"]},
      {"name": "오트쿠튀르:: 르루주 B2F 타래둥지", "cost": 6, "keywords": ["출혈", "충전"], "affiliations": []}
    ]
  }
];
