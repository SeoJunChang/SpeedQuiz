// ============================================================
// 1. 퀴즈 데이터베이스 (각 분야별 30문제 Pool)
// ============================================================
const quizData = [
	// ============================================================
	// [역사] 100문제 (쉬움 30 / 보통 40 / 어려움 30)
	// ============================================================
	
	// [난이도: 쉬움] (초등 수준, 전국민 상식)
	{ category: 'history', level: 'easy', question: '조선 시대 세종대왕이 창제한 우리 글자의 이름은?', answer: ['훈민정음', '한글'] },
	{ category: 'history', level: 'easy', question: '임진왜란 때 거북선을 만들어 왜군을 물리친 장군은?', answer: ['이순신', '이순신장군'] },
	{ category: 'history', level: 'easy', question: '우리 민족 최초의 국가인 고조선을 세운 사람은?', answer: ['단군', '단군왕검'] },
	{ category: 'history', level: 'easy', question: '1919년 3월 1일 일어난 독립 만세 운동은?', answer: ['31운동', '삼일운동'] },
	{ category: 'history', level: 'easy', question: '1950년 6월 25일에 일어난 민족의 비극적인 전쟁은?', answer: ['625전쟁', '한국전쟁', '6.25'] },
	{ category: 'history', level: 'easy', question: '대한민국의 국기 이름은?', answer: ['태극기'] },
	{ category: 'history', level: 'easy', question: '대한민국의 국화(나라꽃)는?', answer: ['무궁화'] },
	{ category: 'history', level: 'easy', question: '고려를 건국한 왕의 이름은?', answer: ['왕건', '태조왕건'] },
	{ category: 'history', level: 'easy', question: '조선을 건국한 제1대 왕은?', answer: ['이성계', '태조'] },
	{ category: 'history', level: 'easy', question: '안중근 의사가 이토 히로부미를 저격한 장소는?', answer: ['하얼빈', '하얼빈역'] },
	{ category: 'history', level: 'easy', question: '유관순 열사가 독립 만세를 외쳤던 곳은?', answer: ['아우내장터', '천안'] },
	{ category: 'history', level: 'easy', question: '백범 김구 선생이 주석으로 있었던 독립운동 기구는?', answer: ['대한민국임시정부', '임시정부'] },
	{ category: 'history', level: 'easy', question: '신라 선덕여왕 때 만들어진 동양에서 가장 오래된 천문대는?', answer: ['첨성대'] },
	{ category: 'history', level: 'easy', question: '미국의 초대 대통령은?', answer: ['워싱턴', '조지워싱턴'] },
	{ category: 'history', level: 'easy', question: '알을 깨고 나온 혁거세가 세운 나라는?', answer: ['신라'] },
	{ category: 'history', level: 'easy', question: '주몽이 세운 나라는?', answer: ['고구려'] },
	{ category: 'history', level: 'easy', question: '온조가 세운 나라는?', answer: ['백제'] },
	{ category: 'history', level: 'easy', question: '독도는 우리땅 노래 가사. "경상북도 울릉군 ( )"', answer: ['독도리'] },
	{ category: 'history', level: 'easy', question: '이집트의 왕(파라오)의 무덤으로 거대한 사각뿔 모양의 건축물은?', answer: ['피라미드'] },
	{ category: 'history', level: 'easy', question: '원효대사가 마시고 깨달음을 얻었다는 물은 어디에 담겨 있었나?', answer: ['해골', '해골물'] },
	{ category: 'history', level: 'easy', question: '측우기를 발명하여 강우량을 측정하게 한 조선의 왕은?', answer: ['세종', '세종대왕'] },
	{ category: 'history', level: 'easy', question: '신사임당의 아들로, 조선 최고의 유학자 중 한 명인 인물은?', answer: ['이율곡', '이이', '율곡이이'] },
	{ category: 'history', level: 'easy', question: '오천 원권 지폐에 그려진 인물은?', answer: ['이이', '율곡이이'] },
	{ category: 'history', level: 'easy', question: '만 원권 지폐에 그려진 인물은?', answer: ['세종대왕'] },
	{ category: 'history', level: 'easy', question: '신라의 삼국통일을 이룩한 장군은?', answer: ['김유신'] },
	{ category: 'history', level: 'easy', question: '행주대첩을 이끈 장군은?', answer: ['권율'] },
	{ category: 'history', level: 'easy', question: '전구를 발명한 사람은?', answer: ['에디슨'] },
	{ category: 'history', level: 'easy', question: '비행기를 최초로 만든 형제는?', answer: ['라이트형제'] },
	{ category: 'history', level: 'easy', question: '조선시대 백성들의 억울함을 풀어주기 위해 설치한 북은?', answer: ['신문고'] },
	{ category: 'history', level: 'easy', question: '암행어사가 출두할 때 보여주는 패는?', answer: ['마패'] },
	
	// [난이도: 보통] (중고등 수준, 일반 상식)
	{ category: 'history', level: 'normal', question: '고구려의 전성기를 이끌며 만주까지 영토를 넓힌 왕은?', answer: ['광개토대왕'] },
	{ category: 'history', level: 'normal', question: '장보고가 완도에 설치한 해상 무역 기지는?', answer: ['청해진'] },
	{ category: 'history', level: 'normal', question: '팔만대장경이 보관되어 있는 합천의 사찰은?', answer: ['해인사'] },
	{ category: 'history', level: 'normal', question: '수원 화성을 건설하고 정약용을 등용한 조선의 왕은?', answer: ['정조'] },
	{ category: 'history', level: 'normal', question: '을지문덕 장군이 수나라 군대를 물리친 전투는?', answer: ['살수대첩'] },
	{ category: 'history', level: 'normal', question: '강감찬 장군이 거란군을 물리친 전투는?', answer: ['귀주대첩'] },
	{ category: 'history', level: 'normal', question: '발해를 건국한 사람은?', answer: ['대조영'] },
	{ category: 'history', level: 'normal', question: '매헌 윤봉길 의사가 폭탄을 던진 상하이의 공원은?', answer: ['훙커우공원', '홍커우공원'] },
	{ category: 'history', level: 'normal', question: '조선의 마지막 왕(황제)은?', answer: ['순종'] },
	{ category: 'history', level: 'normal', question: '프랑스의 영웅이자 백년전쟁을 승리로 이끈 성녀는?', answer: ['잔다르크'] },
	{ category: 'history', level: 'normal', question: '제2차 세계대전을 일으킨 독일의 독재자는?', answer: ['히틀러'] },
	{ category: 'history', level: 'normal', question: '콜럼버스가 발견한 신대륙은 현재의 어디인가?', answer: ['아메리카', '미국'] },
	{ category: 'history', level: 'normal', question: '거란의 침입을 외교 담판으로 물리친 고려의 문신은?', answer: ['서희'] },
	{ category: 'history', level: 'normal', question: '백제의 마지막 왕으로, 3천 궁녀와 낙화암 전설의 주인공은?', answer: ['의자왕'] },
	{ category: 'history', level: 'normal', question: '흥선대원군이 서양 세력을 배척하기 위해 세운 비석은?', answer: ['척화비'] },
	{ category: 'history', level: 'normal', question: '동학 농민 운동의 지도자로 "녹두 장군"이라 불린 인물은?', answer: ['전봉준'] },
	{ category: 'history', level: 'normal', question: '세계에서 가장 오래된 금속 활자본은?', answer: ['직지심체요절', '직지'] },
	{ category: 'history', level: 'normal', question: '고려 말, 목화씨를 들여온 인물은?', answer: ['문익점'] },
	{ category: 'history', level: 'normal', question: '다이너마이트를 발명한 사람은?', answer: ['노벨'] },
	{ category: 'history', level: 'normal', question: '임진왜란 당시 의병장으로, 붉은 옷을 입어 홍의장군이라 불린 사람은?', answer: ['곽재우'] },
	{ category: 'history', level: 'normal', question: '우리나라 최초의 여성 대통령은?', answer: ['박근혜'] },
	{ category: 'history', level: 'normal', question: '조선시대 왕의 비서 기관으로 왕명의 출납을 맡았던 관청은?', answer: ['승정원'] },
	{ category: 'history', level: 'normal', question: '흑인 노예 해방을 선언한 미국의 제16대 대통령은?', answer: ['링컨'] },
	{ category: 'history', level: 'normal', question: '인도의 비폭력 불복종 운동을 이끈 지도자는?', answer: ['간디', '마하트마간디'] },
	{ category: 'history', level: 'normal', question: '중국 최초로 천하를 통일하고 만리장성을 쌓은 황제는?', answer: ['진시황', '진시황제'] },
	{ category: 'history', level: 'normal', question: '몽골 제국을 건설하여 세계 최대의 영토를 넓힌 인물은?', answer: ['칭기즈칸', '징기스칸'] },
	{ category: 'history', level: 'normal', question: '르네상스 시대를 대표하는 화가로 모나리자를 그린 사람은?', answer: ['다빈치', '레오나르도다빈치'] },
	{ category: 'history', level: 'normal', question: '나폴레옹이 유배되어 생을 마감한 섬은?', answer: ['세인트헬레나섬'] },
	{ category: 'history', level: 'normal', question: '고려시대 몽골의 침입에 맞서 강화도 등에서 항쟁한 특수 부대는?', answer: ['삼별초'] },
	{ category: 'history', level: 'normal', question: '조선시대 최고 교육 기관의 이름은?', answer: ['성균관'] },
	{ category: 'history', level: 'normal', question: '독도가 한국 땅임을 기록한 조선 성종 때의 지리서는?', answer: ['동국여지승람'] },
	{ category: 'history', level: 'normal', question: '화랑 출신으로 신라의 삼국 통일에 기여한 왕은?', answer: ['태종무열왕', '김춘추'] },
	{ category: 'history', level: 'normal', question: '조선 후기 실학자로 목민심서, 경세유표 등을 저술한 인물은?', answer: ['정약용'] },
	{ category: 'history', level: 'normal', question: '김구 선생이 만든 한인 애국단 소속으로, 일왕에게 폭탄을 던진 의사는?', answer: ['이봉창'] },
	{ category: 'history', level: 'normal', question: '헤이그 특사 3인은 이준, 이위종, 그리고 누구인가?', answer: ['이상설'] },
	{ category: 'history', level: 'normal', question: '1차 세계대전의 원인이 된 오스트리아 황태자 암살 사건은?', answer: ['사라예보사건'] },
	{ category: 'history', level: 'normal', question: '조선시대 역대 왕과 왕비의 신주를 모신 유교 사당은?', answer: ['종묘'] },
	{ category: 'history', level: 'normal', question: '석굴암과 불국사를 창건한 신라의 재상은?', answer: ['김대성'] },
	{ category: 'history', level: 'normal', question: '고려시대 일연 스님이 쓴 역사책은?', answer: ['삼국유사'] },
	{ category: 'history', level: 'normal', question: '김부식인 쓴 우리나라에서 가장 오래된 역사책은?', answer: ['삼국사기'] },
	
	// [난이도: 어려움] (심화 지식, 연도, 구체적 명칭)
	{ category: 'history', level: 'hard', question: '조선 최고의 법전으로 성종 때 완성된 것은?', answer: ['경국대전'] },
	{ category: 'history', level: 'hard', question: '김정호가 만든 조선 전체를 그린 대형 지도는?', answer: ['대동여지도'] },
	{ category: 'history', level: 'hard', question: '신라의 신분 제도로, 뼈의 품계에 따라 관직 진출을 제한한 제도는?', answer: ['골품제', '골품제도'] },
	{ category: 'history', level: 'hard', question: '고구려 소수림왕이 설립한 국립 교육 기관은?', answer: ['태학'] },
	{ category: 'history', level: 'hard', question: '조선 전기 안견이 안평대군의 꿈을 듣고 그린 산수화는?', answer: ['몽유도원도'] },
	{ category: 'history', level: 'hard', question: '대한제국의 외교권을 일본에 빼앗긴 1905년의 조약은?', answer: ['을사조약', '을사늑약'] },
	{ category: 'history', level: 'hard', question: '조선시대 사헌부, 사간원, 홍문관을 합쳐서 무엇이라 부르는가?', answer: ['삼사'] },
	{ category: 'history', level: 'hard', question: '통일신라 시대 장보고의 건의로 청해진이 설치된 해는? (힌트: 828년)', answer: ['828년', '828'] }, // 너무 어려우면 힌트 포함
	{ category: 'history', level: 'hard', question: '임진왜란은 몇 년도에 일어났는가?', answer: ['1592', '1592년'] },
	{ category: 'history', level: 'hard', question: '고려 광종 때 실시된 관리 선발 제도는?', answer: ['과거제', '과거제도'] },
	{ category: 'history', level: 'hard', question: '조선 후기 대동법은 특산물 대신 무엇으로 세금을 내게 했는가?', answer: ['쌀'] },
	{ category: 'history', level: 'hard', question: '일제강점기 1920년대 무장 독립 전쟁 중 김좌진 장군이 이끈 전투는?', answer: ['청산리대첩'] },
	{ category: 'history', level: 'hard', question: '홍경래의 난이 일어난 조선의 왕은?', answer: ['순조'] },
	{ category: 'history', level: 'hard', question: '백제 무령왕릉은 벽돌 무덤이다. 어느 나라의 영향을 받았는가?', answer: ['중국', '양나라'] },
	{ category: 'history', level: 'hard', question: '세종대왕 때 만들어진 최초의 강우량 측정 기구는?', answer: ['측우기'] },
	{ category: 'history', level: 'hard', question: '고려시대 묘청이 수도를 옮기자고 주장한 곳은?', answer: ['서경', '평양'] },
	{ category: 'history', level: 'hard', question: '신라 진흥왕이 영토 확장을 기념하여 세운 비석 4개를 통칭하는 말은?', answer: ['진흥왕순수비', '순수비'] },
	{ category: 'history', level: 'hard', question: '강화도 조약(1876)은 조선이 외국과 맺은 최초의 ( ) 조약이다.', answer: ['근대적'] },
	{ category: 'history', level: 'hard', question: '세계사에서 "짐이 곧 국가다"라고 말한 프랑스의 왕은?', answer: ['루이14세'] },
	{ category: 'history', level: 'hard', question: '철혈 정책을 통해 독일을 통일한 수상은?', answer: ['비스마르크'] },
	{ category: 'history', level: 'hard', question: '중국 당나라 때의 시인으로 "시선(詩仙)"이라 불린 인물은?', answer: ['이백'] },
	{ category: 'history', level: 'hard', question: '로마 제국의 카이사르가 암살당할 때 남긴 말은? "브루투스, ( )"', answer: ['너마저'] },
	{ category: 'history', level: 'hard', question: '미국의 뉴딜 정책을 실시한 대통령은?', answer: ['루즈벨트'] },
	{ category: 'history', level: 'hard', question: '프랑스 혁명의 계기가 된 감옥 습격 사건은?', answer: ['바스티유', '바스티유감옥'] },
	{ category: 'history', level: 'hard', question: '영국에서 일어난 명예혁명으로 승인된 문서는?', answer: ['권리장전'] },
	{ category: 'history', level: 'hard', question: '조선시대 지방 양반들이 유교 교육과 제사를 위해 설립한 사설 교육 기관은?', answer: ['서원'] },
	{ category: 'history', level: 'hard', question: '훈민정음 해례본이 유네스코 세계기록유산으로 등재된 연도는? (힌트: 1997년)', answer: ['1997년', '1997'] },
	{ category: 'history', level: 'hard', question: '임시정부 산하 정규 군대로 1940년 창설된 군대는?', answer: ['한국광복군', '광복군'] },
	{ category: 'history', level: 'hard', question: '고려 후기 원나라의 간섭을 자주적으로 개혁하려 했던 왕은?', answer: ['공민왕'] },
	{ category: 'history', level: 'hard', question: '조선시대 붕당 정치의 폐단을 막기 위해 영조와 정조가 실시한 정책은?', answer: ['탕평책'] },

	// ============================================================
	// [과학] 100문제 (쉬움 30 / 보통 40 / 어려움 30)
	// ============================================================
	
	// [난이도: 쉬움] (초등 수준, 기초 상식)
	{ category: 'science', level: 'easy', question: '물의 화학식은?', answer: ['h2o'] },
	{ category: 'science', level: 'easy', question: '사과가 땅으로 떨어지는 것을 보고 만유인력을 발견한 사람은?', answer: ['뉴턴'] },
	{ category: 'science', level: 'easy', question: '지구의 유일한 자연 위성은?', answer: ['달'] },
	{ category: 'science', level: 'easy', question: '태양계 행성 중 가장 큰 행성은?', answer: ['목성'] },
	{ category: 'science', level: 'easy', question: '물이 끓기 시작하는 온도는 섭씨 몇 도인가?', answer: ['100도', '100'] },
	{ category: 'science', level: 'easy', question: '물이 얼기 시작하는 온도는 섭씨 몇 도인가?', answer: ['0도', '0'] },
	{ category: 'science', level: 'easy', question: '개구리의 어린 시절(유생) 이름은?', answer: ['올챙이'] },
	{ category: 'science', level: 'easy', question: '자석의 N극과 S극처럼 다른 극끼리는 서로 ( )다.', answer: ['당긴다', '붙는다', '인력'] },
	{ category: 'science', level: 'easy', question: '자석의 N극과 N극처럼 같은 극끼리는 서로 ( )다.', answer: ['민다', '밀어낸다', '척력'] },
	{ category: 'science', level: 'easy', question: '나비가 되기 전의 애벌레가 만드는 집을 무엇이라 하는가?', answer: ['고치', '번데기'] },
	{ category: 'science', level: 'easy', question: '우리 몸에서 피를 순환시키는 펌프 역할을 하는 장기는?', answer: ['심장'] },
	{ category: 'science', level: 'easy', question: '숨을 쉴 때 산소를 들이마시고 ( )를 내뱉는다.', answer: ['이산화탄소'] },
	{ category: 'science', level: 'easy', question: '지구는 태양 주위를 1년에 한 바퀴 돈다. 이것을 무엇이라 하는가?', answer: ['공전'] },
	{ category: 'science', level: 'easy', question: '지구가 하루에 한 바퀴씩 스스로 도는 것을 무엇이라 하는가?', answer: ['자전'] },
	{ category: 'science', level: 'easy', question: '북극성을 포함하고 있는 국자 모양의 별자리는?', answer: ['북두칠성'] },
	{ category: 'science', level: 'easy', question: '식물이 자라는 데 필요한 3요소는 물, 햇빛, 그리고 ( )이다.', answer: ['흙', '공기', '양분'] }, // 흙 or 공기 등 초등 수준
	{ category: 'science', level: 'easy', question: '전화기를 발명한 사람은?', answer: ['벨'] },
	{ category: 'science', level: 'easy', question: '호랑이, 사자처럼 다른 동물을 잡아먹는 동물을 ( ) 동물이라 한다.', answer: ['육식', '육식동물'] },
	{ category: 'science', level: 'easy', question: '토끼, 소처럼 풀을 먹는 동물을 ( ) 동물이라 한다.', answer: ['초식', '초식동물'] },
	{ category: 'science', level: 'easy', question: '가장 목이 긴 동물은?', answer: ['기린'] },
	{ category: 'science', level: 'easy', question: '땅속에 살며 지렁이를 먹고 사는 눈이 퇴화된 동물은?', answer: ['두더지'] },
	{ category: 'science', level: 'easy', question: '공룡이 멸종된 시대를 고생대, 중생대, 신생대 중 고르시오.', answer: ['중생대'] },
	{ category: 'science', level: 'easy', question: '겨울잠을 자는 대표적인 동물로, 꿀을 좋아하는 동물은?', answer: ['곰'] },
	{ category: 'science', level: 'easy', question: '사람의 몸에 있는 뼈의 개수는 약 206개이다. O, X?', answer: ['o', '오'] },
	{ category: 'science', level: 'easy', question: '무지개의 색깔은 빨주노초파남( )이다.', answer: ['보', '보라'] },
	{ category: 'science', level: 'easy', question: '물질의 상태 3가지는 고체, 액체, ( )이다.', answer: ['기체'] },
	{ category: 'science', level: 'easy', question: '곤충의 다리는 모두 몇 개인가?', answer: ['6개', '6'] },
	{ category: 'science', level: 'easy', question: '오징어의 다리는 모두 몇 개인가?', answer: ['10개', '10'] },
	{ category: 'science', level: 'easy', question: '거미는 곤충일까요 아닐까요?', answer: ['아니오', '아니다', 'x'] },
	{ category: 'science', level: 'easy', question: '지구에서 가장 가까운 별(항성)은?', answer: ['태양', '해'] },
	
	// [난이도: 보통] (중고등 교과 과정, 일반 상식)
	{ category: 'science', level: 'normal', question: '원소 기호 Au가 나타내는 금속은?', answer: ['금'] },
	{ category: 'science', level: 'normal', question: '원소 기호 Ag가 나타내는 금속은?', answer: ['은'] },
	{ category: 'science', level: 'normal', question: '원소 기호 O가 나타내는 기체는?', answer: ['산소'] },
	{ category: 'science', level: 'normal', question: '식물이 빛을 이용해 양분을 만드는 작용은?', answer: ['광합성'] },
	{ category: 'science', level: 'normal', question: '태양계 행성 중 고리가 가장 아름답고 뚜렷한 행성은?', answer: ['토성'] },
	{ category: 'science', level: 'normal', question: '태양계에서 태양과 가장 가까운 행성은?', answer: ['수성'] },
	{ category: 'science', level: 'normal', question: '우리 몸에서 해독 작용을 하는 가장 큰 장기는?', answer: ['간'] },
	{ category: 'science', level: 'normal', question: '혈액 속에서 산소를 운반하는 세포는?', answer: ['적혈구'] },
	{ category: 'science', level: 'normal', question: '혈액 속에서 세균과 싸우는 세포는?', answer: ['백혈구'] },
	{ category: 'science', level: 'normal', question: '소리를 전달하는 매질이 없는 우주 공간에서 소리가 들릴까?', answer: ['아니오', '안들린다', 'x'] },
	{ category: 'science', level: 'normal', question: '가장 가벼운 기체 원소는?', answer: ['수소'] },
	{ category: 'science', level: 'normal', question: '드라이아이스는 무엇이 고체로 변한 것인가?', answer: ['이산화탄소'] },
	{ category: 'science', level: 'normal', question: '지진의 세기를 나타내는 단위는?', answer: ['규모', '리히터'] },
	{ category: 'science', level: 'normal', question: '전류의 세기를 나타내는 단위는?', answer: ['암페어', 'a'] },
	{ category: 'science', level: 'normal', question: '전압의 단위를 나타내는 단위는?', answer: ['볼트', 'v'] },
	{ category: 'science', level: 'normal', question: '멘델이 유전 법칙을 연구할 때 사용한 식물은?', answer: ['완두콩', '완두'] },
	{ category: 'science', level: 'normal', question: '구름, 비, 눈 등의 기상 현상이 일어나는 대기층은?', answer: ['대류권'] },
	{ category: 'science', level: 'normal', question: '세상에서 가장 단단한 천연 광물은?', answer: ['다이아몬드', '금강석'] },
	{ category: 'science', level: 'normal', question: '액체 상태의 물이 얼음이 되면 부피는 어떻게 되는가?', answer: ['늘어난다', '커진다', '증가한다'] },
	{ category: 'science', level: 'normal', question: '사람의 염색체 수는 몇 쌍인가?', answer: ['23쌍'] },
	{ category: 'science', level: 'normal', question: '펜이실린을 발견하여 많은 생명을 구한 사람은?', answer: ['플레밍'] },
	{ category: 'science', level: 'normal', question: '상대성 이론을 발표한 물리학자는?', answer: ['아인슈타인'] },
	{ category: 'science', level: 'normal', question: '진화론을 주장하며 <종의 기원>을 쓴 학자는?', answer: ['다윈', '찰스다윈'] },
	{ category: 'science', level: 'normal', question: '달의 모양이 완전히 보이지 않는 상태를 무엇이라 하는가?', answer: ['삭'] },
	{ category: 'science', level: 'normal', question: '보름달을 다른 말로 무엇이라 하는가?', answer: ['망'] },
	{ category: 'science', level: 'normal', question: '태양 - 달 - 지구 순서로 일직선이 되어 해가 가려지는 현상은?', answer: ['일식'] },
	{ category: 'science', level: 'normal', question: '산성, 중성, 염기성을 구분하는 수소 이온 농도 지수는?', answer: ['ph'] },
	{ category: 'science', level: 'normal', question: '빛의 3원색은 빨강, 초록, 그리고 무엇인가?', answer: ['파랑', '블루'] },
	{ category: 'science', level: 'normal', question: '물질을 이루는 기본 입자는?', answer: ['원자'] },
	{ category: 'science', level: 'normal', question: '원자의 중심에 있는 것은?', answer: ['원자핵'] },
	{ category: 'science', level: 'normal', question: '북극에는 펭귄이 산다. O, X?', answer: ['x', '아니오'] },
	{ category: 'science', level: 'normal', question: '태양계의 행성 순서: 수금지화( )토천해.', answer: ['목', '목성'] },
	{ category: 'science', level: 'normal', question: '지구의 나이는 약 몇 억 살인가? (40~50억 사이)', answer: ['45억', '46억', '45억살'] },
	{ category: 'science', level: 'normal', question: '우리 은하의 이름은?', answer: ['은하수', '밀키웨이'] },
	{ category: 'science', level: 'normal', question: '소화 기관 중 음식물의 영양소를 가장 많이 흡수하는 곳은?', answer: ['소장', '작은창자'] },
	{ category: 'science', level: 'normal', question: '사람의 치아 개수는 사랑니를 제외하고 보통 몇 개인가?', answer: ['28개', '28'] },
	{ category: 'science', level: 'normal', question: '대기 중에 가장 많은 비율을 차지하는 기체는?', answer: ['질소'] },
	{ category: 'science', level: 'normal', question: '금속이 녹이 스는 것은 산소와 결합하는 ( ) 반응이다.', answer: ['산화', '산화반응'] },
	{ category: 'science', level: 'normal', question: '배가 물에 뜨는 원리인 "부력"을 발견한 사람은?', answer: ['아르키메데스'] },
	{ category: 'science', level: 'normal', question: '우주가 대폭발로 시작되었다는 이론은?', answer: ['빅뱅', '빅뱅이론'] },
	
	// [난이도: 어려움] (전문 지식, 법칙, 용어)
	{ category: 'science', level: 'hard', question: 'DNA의 이중 나선 구조를 밝혀 노벨상을 받은 두 사람은 왓슨과 누구인가?', answer: ['크릭'] },
	{ category: 'science', level: 'hard', question: '에너지는 생성되거나 소멸되지 않고 형태만 바뀐다는 법칙은?', answer: ['에너지보존법칙'] },
	{ category: 'science', level: 'hard', question: '외부에서 힘이 가해지지 않는 한 정지한 물체는 계속 정지해 있으려는 성질은?', answer: ['관성'] },
	{ category: 'science', level: 'hard', question: '작용 반작용의 법칙은 뉴턴의 운동 법칙 중 제 몇 법칙인가?', answer: ['3법칙', '제3법칙'] },
	{ category: 'science', level: 'hard', question: '기체의 부피는 압력에 반비례한다는 법칙은?', answer: ['보일의법칙', '보일'] },
	{ category: 'science', level: 'hard', question: '기체의 부피는 온도에 비례한다는 법칙은?', answer: ['샤를의법칙', '샤를'] },
	{ category: 'science', level: 'hard', question: '세포 내에서 에너지를 생산하는 기관으로 "세포의 발전소"라 불리는 것은?', answer: ['미토콘드리아'] },
	{ category: 'science', level: 'hard', question: '주기율표의 1번 원소는 수소, 2번 원소는 무엇인가?', answer: ['헬륨'] },
	{ category: 'science', level: 'hard', question: '산화와 환원은 항상 동시에 일어난다. O, X?', answer: ['o', '오'] },
	{ category: 'science', level: 'hard', question: '태양계 행성 중 자전 방향이 반대(동->서)인 행성은 금성과 ( )이다.', answer: ['천왕성'] },
	{ category: 'science', level: 'hard', question: '빛의 속도는 초속 약 몇 km인가?', answer: ['30만', '300000'] },
	{ category: 'science', level: 'hard', question: '별의 밝기 등급 중 숫자가 작을수록 밝다, 클수록 밝다?', answer: ['작을수록'] },
	{ category: 'science', level: 'hard', question: '지구의 자전축은 약 23.5도 기울어져 있다. 이 때문에 나타나는 현상은?', answer: ['계절', '계절변화'] },
	{ category: 'science', level: 'hard', question: '중력이 아주 강력하여 빛조차 빠져나올 수 없는 천체는?', answer: ['블랙홀'] },
	{ category: 'science', level: 'hard', question: '지구 대기권 중 오존층이 존재하여 자외선을 막아주는 층은?', answer: ['성층권'] },
	{ category: 'science', level: 'hard', question: '멘델레예프가 만든 것은 무엇의 초기 형태인가?', answer: ['주기율표'] },
	{ category: 'science', level: 'hard', question: '알파벳 DNA의 약자 중 N은 무엇을 의미하는가?', answer: ['핵산', 'nucleic'] },
	{ category: 'science', level: 'hard', question: '화성에는 과거에 ( )이 흐른 흔적이 발견되었다.', answer: ['물'] },
	{ category: 'science', level: 'hard', question: '화학 반응 속도를 빠르게 하거나 느리게 해주는 물질을 무엇이라 하는가?', answer: ['촉매'] },
	{ category: 'science', level: 'hard', question: '우리 몸의 신경계 중 뇌와 척수를 합쳐 무엇이라 하는가?', answer: ['중추신경계', '중추신경'] },
	{ category: 'science', level: 'hard', question: '혈액형 O형은 A형에게 수혈해 줄 수 있다. O, X?', answer: ['o', '오'] },
	{ category: 'science', level: 'hard', question: '도르래를 사용하면 힘의 방향을 바꾸거나 힘을 줄일 수 있다. 일의 양은 변하는가?', answer: ['아니오', '변하지않는다', '일정하다'] },
	{ category: 'science', level: 'hard', question: '헬륨 가스를 마시면 목소리가 변하는 이유는 공기보다 밀도가 ( )기 때문이다.', answer: ['작', '낮', '작기', '낮기'] },
	{ category: 'science', level: 'hard', question: '지구 내부 구조 중 가장 많은 부피를 차지하는 부분은?', answer: ['맨틀'] },
	{ category: 'science', level: 'hard', question: '지구의 중심핵은 외핵과 내핵으로 나뉜다. 액체 상태인 곳은?', answer: ['외핵'] },
	{ category: 'science', level: 'hard', question: '원자번호가 같지만 중성자 수가 달라 질량이 다른 원소를 무엇이라 하는가?', answer: ['동위원소'] },
	{ category: 'science', level: 'hard', question: '우주의 팽창을 발견한 미국의 천문학자는?', answer: ['허블'] },
	{ category: 'science', level: 'hard', question: '빛이 1년 동안 가는 거리를 나타내는 거리 단위는?', answer: ['광년'] },
	{ category: 'science', level: 'hard', question: '최초의 복제 양 이름은?', answer: ['돌리'] },
	{ category: 'science', level: 'hard', question: '무질서도를 나타내는 물리학 용어로, 시간이 지날수록 증가하는 이것은?', answer: ['엔트로피'] },
	
	// ============================================================
	// [과학] 추가 150문제 (쉬움 50 / 보통 50 / 어려움 50)
	// ============================================================
	
	// [쉬움 - 추가 50문제]
	{ category: 'science', level: 'easy', question: '사람이 숨을 쉴 때 들이마시는 기체는?', answer: ['산소'] },
	{ category: 'science', level: 'easy', question: '하늘에서 내리는 하얀 결정체는?', answer: ['눈'] },
	{ category: 'science', level: 'easy', question: '비가 온 뒤 하늘에 생기는 일곱 빛깔 다리는?', answer: ['무지개'] },
	{ category: 'science', level: 'easy', question: '밤하늘에서 스스로 빛을 내는 천체를 무엇이라 하는가?', answer: ['별', '항성'] },
	{ category: 'science', level: 'easy', question: '지구는 둥글다. O, X?', answer: ['o', '오'] },
	{ category: 'science', level: 'easy', question: '나침반의 N극이 가리키는 방향은?', answer: ['북쪽', '북'] },
	{ category: 'science', level: 'easy', question: '사람의 몸에서 생각하고 명령을 내리는 부위는?', answer: ['뇌'] },
	{ category: 'science', level: 'easy', question: '음식을 씹고 부수는 입안의 하얀 뼈는?', answer: ['이', '이빨', '치아'] },
	{ category: 'science', level: 'easy', question: '냄새를 맡는 감각 기관은?', answer: ['코'] },
	{ category: 'science', level: 'easy', question: '소리를 듣는 감각 기관은?', answer: ['귀'] },
	{ category: 'science', level: 'easy', question: '맛을 느끼는 감각 기관은?', answer: ['혀'] },
	{ category: 'science', level: 'easy', question: '물고기가 물속에서 숨을 쉴 수 있게 해주는 기관은?', answer: ['아가미'] },
	{ category: 'science', level: 'easy', question: '물고기가 헤엄칠 때 방향을 잡는 데 쓰는 것은?', answer: ['지느러미'] },
	{ category: 'science', level: 'easy', question: '새가 하늘을 날 수 있게 해주는 신체 부위는?', answer: ['날개'] },
	{ category: 'science', level: 'easy', question: '개, 고양이처럼 새끼를 낳아 젖을 먹여 키우는 동물을 무엇이라 하는가?', answer: ['포유류', '포유동물'] },
	{ category: 'science', level: 'easy', question: '뱀, 도마뱀, 악어 같은 동물은 양서류인가 파충류인가?', answer: ['파충류'] },
	{ category: 'science', level: 'easy', question: '개구리, 두꺼비 같은 동물은 파충류인가 양서류인가?', answer: ['양서류'] },
	{ category: 'science', level: 'easy', question: '식물의 뿌리, 줄기, 잎 중 꽃이 피는 곳은?', answer: ['줄기'] }, // 혹은 가지 끝 등. 초등 수준에선 보통 줄기 끝
	{ category: 'science', level: 'easy', question: '식물이 땅속에서 물을 빨아들이는 부분은?', answer: ['뿌리'] },
	{ category: 'science', level: 'easy', question: '꽃이 지고 난 뒤에 생기는 것은?', answer: ['열매'] },
	{ category: 'science', level: 'easy', question: '씨앗이 싹트기 위해 필요한 것은 물, 공기, 그리고 ( )이다.', answer: ['온도', '따뜻한온도'] },
	{ category: 'science', level: 'easy', question: '하루 중 해가 가장 높이 뜨는 때는?', answer: ['점심', '낮', '정오'] }, // 정오
	{ category: 'science', level: 'easy', question: '해가 지고 어두워진 때를 무엇이라 하는가?', answer: ['밤'] },
	{ category: 'science', level: 'easy', question: '봄, 여름, 가을, 겨울을 통틀어 무엇이라 하는가?', answer: ['사계절', '계절'] },
	{ category: 'science', level: 'easy', question: '가장 더운 계절은?', answer: ['여름'] },
	{ category: 'science', level: 'easy', question: '가장 추운 계절은?', answer: ['겨울'] },
	{ category: 'science', level: 'easy', question: '나뭇잎이 떨어지는 계절은?', answer: ['가을'] },
	{ category: 'science', level: 'easy', question: '꽃이 피기 시작하는 계절은?', answer: ['봄'] },
	{ category: 'science', level: 'easy', question: '바닷물은 짜다. O, X?', answer: ['o', '오'] },
	{ category: 'science', level: 'easy', question: '강물은 바다로 흘러간다. O, X?', answer: ['o', '오'] },
	{ category: 'science', level: 'easy', question: '사막에서 볼 수 있는 대표적인 식물은?', answer: ['선인장'] },
	{ category: 'science', level: 'easy', question: '북극곰은 추운 곳에 산다. O, X?', answer: ['o', '오'] },
	{ category: 'science', level: 'easy', question: '펭귄은 날 수 있다. O, X?', answer: ['x', '아니오'] },
	{ category: 'science', level: 'easy', question: '타조는 날 수 있다. O, X?', answer: ['x', '아니오'] },
	{ category: 'science', level: 'easy', question: '전기를 꽂는 구멍을 무엇이라 하는가?', answer: ['콘센트'] },
	{ category: 'science', level: 'easy', question: '어두운 곳을 밝히기 위해 켜는 것은?', answer: ['전등', '불', '전구'] },
	{ category: 'science', level: 'easy', question: '건전지의 볼록 튀어나온 부분은 플러스(+)극인가 마이너스(-)극인가?', answer: ['플러스', '플러스극'] },
	{ category: 'science', level: 'easy', question: '그림자는 빛이 있는 곳 반대편에 생긴다. O, X?', answer: ['o', '오'] },
	{ category: 'science', level: 'easy', question: '거울은 내 모습을 ( ) 준다.', answer: ['비춰', '반사해'] },
	{ category: 'science', level: 'easy', question: '산에서 소리를 지르면 되돌아오는 현상은?', answer: ['메아리'] },
	{ category: 'science', level: 'easy', question: '자동차가 달릴 때 필요한 연료는?', answer: ['기름', '휘발유', '경유', '전기'] },
	{ category: 'science', level: 'easy', question: '사람의 체온은 약 36.5도이다. O, X?', answer: ['o', '오'] },
	{ category: 'science', level: 'easy', question: '배가 고프면 꼬르륵 소리가 나는 곳은?', answer: ['배', '위'] },
	{ category: 'science', level: 'easy', question: '우리가 마시는 물은 액체다. 얼음은?', answer: ['고체'] },
	{ category: 'science', level: 'easy', question: '수증기는 고체, 액체, 기체 중 무엇인가?', answer: ['기체'] },
	{ category: 'science', level: 'easy', question: '풍선을 불 때 들어가는 것은?', answer: ['공기', '바람', '입김'] },
	{ category: 'science', level: 'easy', question: '지구는 둥근 공 모양이다. O, X?', answer: ['o', '오'] },
	{ category: 'science', level: 'easy', question: '달은 스스로 빛을 낸다. O, X?', answer: ['x', '아니오'] },
	{ category: 'science', level: 'easy', question: '해는 동쪽에서 떠서 ( )쪽으로 진다.', answer: ['서', '서쪽'] },
	{ category: 'science', level: 'easy', question: '잠자리, 매미, 개미를 통틀어 무엇이라 하는가?', answer: ['곤충'] },
	
	// [보통 - 추가 50문제]
	{ category: 'science', level: 'normal', question: '원소 기호 Fe는 무엇을 나타내는가?', answer: ['철'] },
	{ category: 'science', level: 'normal', question: '원소 기호 C는 무엇을 나타내는가?', answer: ['탄소'] },
	{ category: 'science', level: 'normal', question: '원소 기호 He는 무엇을 나타내는가?', answer: ['헬륨'] },
	{ category: 'science', level: 'normal', question: '원소 기호 Na는 무엇을 나타내는가?', answer: ['나트륨'] },
	{ category: 'science', level: 'normal', question: '소금의 주성분인 화학식 NaCl은 무엇인가?', answer: ['염화나트륨'] },
	{ category: 'science', level: 'normal', question: '연탄 가스 중독의 원인이 되는 기체는?', answer: ['일산화탄소'] },
	{ category: 'science', level: 'normal', question: '태양의 자외선을 막아주는 대기층은?', answer: ['오존층'] },
	{ category: 'science', level: 'normal', question: '지구 온난화의 주범인 온실가스는?', answer: ['이산화탄소', '메탄'] },
	{ category: 'science', level: 'normal', question: '석탄, 석유, 천연가스 등 땅속에서 캐내는 연료를 통틀어?', answer: ['화석연료'] },
	{ category: 'science', level: 'normal', question: '태양광, 풍력 등 고갈되지 않는 에너지를 무엇이라 하는가?', answer: ['신재생에너지', '재생에너지'] },
	{ category: 'science', level: 'normal', question: '운동하고 있는 물체가 가진 에너지는?', answer: ['운동에너지'] },
	{ category: 'science', level: 'normal', question: '높은 곳에 있는 물체가 가진 에너지는?', answer: ['위치에너지', '퍼텐셜에너지'] },
	{ category: 'science', level: 'normal', question: '물체가 맞닿아 움직일 때 방해하는 힘은?', answer: ['마찰력'] },
	{ category: 'science', level: 'normal', question: '무거운 물체를 들어 올릴 때 사용하는, 받침점을 이용한 도구는?', answer: ['지레', '지렛대'] },
	{ category: 'science', level: 'normal', question: '힘의 방향을 바꿔주는 도르래는 고정도르래인가 움직임도르래인가?', answer: ['고정도르래'] },
	{ category: 'science', level: 'normal', question: '빛이 거울에 부딪혀 되돌아오는 현상은?', answer: ['반사'] },
	{ category: 'science', level: 'normal', question: '빛이 물이나 유리를 통과할 때 꺾이는 현상은?', answer: ['굴절'] },
	{ category: 'science', level: 'normal', question: '빛을 분산시켜 무지개를 만드는 삼각형 모양의 유리는?', answer: ['프리즘'] },
	{ category: 'science', level: 'normal', question: '소리의 크기를 나타내는 단위는?', answer: ['데시벨', 'db'] },
	{ category: 'science', level: 'normal', question: '소리의 높낮이는 진동수(주파수)에 따라 달라진다. 단위는?', answer: ['헤르츠', 'hz'] },
	{ category: 'science', level: 'normal', question: '빛의 속도는 초속 약 30만 km이다. 소리의 속도는 빛보다 빠른가?', answer: ['아니오', '느리다'] },
	{ category: 'science', level: 'normal', question: '질량과 무게는 같다. O, X?', answer: ['x', '아니오'] }, // 질량은 고유, 무게는 중력따라 다름
	{ category: 'science', level: 'normal', question: '물에 뜨려는 힘을 무엇이라 하는가?', answer: ['부력'] },
	{ category: 'science', level: 'normal', question: '열이 물질을 따라 이동하는 현상은?', answer: ['전도'] },
	{ category: 'science', level: 'normal', question: '액체나 기체가 직접 이동하며 열을 전달하는 현상은?', answer: ['대류'] },
	{ category: 'science', level: 'normal', question: '태양열이 지구로 전달되는 것처럼 매질 없이 열이 전달되는 것은?', answer: ['복사'] },
	{ category: 'science', level: 'normal', question: '액체가 기체로 변하는 현상은?', answer: ['기화', '증발'] },
	{ category: 'science', level: 'normal', question: '기체가 액체로 변하는 현상은?', answer: ['액화'] },
	{ category: 'science', level: 'normal', question: '고체가 바로 기체로 변하거나, 기체가 바로 고체로 변하는 현상은?', answer: ['승화'] },
	{ category: 'science', level: 'normal', question: '고체가 액체로 변하는 온도를 무엇이라 하는가?', answer: ['녹는점'] },
	{ category: 'science', level: 'normal', question: '액체가 기체로 끓기 시작하는 온도는?', answer: ['끓는점'] },
	{ category: 'science', level: 'normal', question: '소금물에서 소금처럼 녹는 물질을 용질, 물처럼 녹이는 물질을 무엇이라 하는가?', answer: ['용매'] },
	{ category: 'science', level: 'normal', question: '두 가지 이상의 물질이 성질을 잃지 않고 섞여 있는 것은?', answer: ['혼합물'] },
	{ category: 'science', level: 'normal', question: '두 가지 이상의 원소가 결합하여 새로운 성질을 가진 물질은?', answer: ['화합물'] },
	{ category: 'science', level: 'normal', question: '더 이상 분해되지 않는 물질의 기본 성분은?', answer: ['원소'] },
	{ category: 'science', level: 'normal', question: '북극성(Polaris)은 어느 별자리에 속해 있는가?', answer: ['작은곰자리'] },
	{ category: 'science', level: 'normal', question: '태양계 행성 중 붉게 보여서 "붉은 행성"이라 불리는 것은?', answer: ['화성'] },
	{ category: 'science', level: 'normal', question: '태양계 행성 중 자전축이 누워 있어서 옆으로 도는 행성은?', answer: ['천왕성'] },
	{ category: 'science', level: 'normal', question: '우리 은하와 가장 가까운 거대한 나선 은하는?', answer: ['안드로메다'] },
	{ category: 'science', level: 'normal', question: '지구의 지각 변동을 설명하는 이론은?', answer: ['판구조론'] },
	{ category: 'science', level: 'normal', question: '지진이 발생한 땅속의 지점을 진원, 그 바로 위 지표면을 무엇이라 하는가?', answer: ['진앙'] },
	{ category: 'science', level: 'normal', question: '화산이 폭발할 때 나오는 액체 상태의 암석은?', answer: ['용암', '마그마'] },
	{ category: 'science', level: 'normal', question: '암석이 풍화되어 흙이 되는 과정이다. O, X?', answer: ['o', '오'] },
	{ category: 'science', level: 'normal', question: '바닷물의 높이가 주기적으로 변하는 현상은?', answer: ['조석', '밀물썰물'] },
	{ category: 'science', level: 'normal', question: '구름이 지표면 가까이에 생긴 것을 무엇이라 하는가?', answer: ['안개'] },
	{ category: 'science', level: 'normal', question: '세포가 분열하여 생장한다. O, X?', answer: ['o', '오'] },
	{ category: 'science', level: 'normal', question: '식물의 잎에 있는 숨구멍을 무엇이라 하는가?', answer: ['기공'] },
	{ category: 'science', level: 'normal', question: '꽃가루가 암술머리에 붙는 현상은?', answer: ['수분'] },
	{ category: 'science', level: 'normal', question: '버섯이나 곰팡이는 식물이다. O, X?', answer: ['x', '아니오'] }, // 균류임
	{ category: 'science', level: 'normal', question: '물체에 힘을 주어 이동시켰을 때 "과학적으로 ( )을 했다"고 한다.', answer: ['일'] },
	
	// [어려움 - 추가 50문제]
	{ category: 'science', level: 'hard', question: '물질을 구성하는 가장 작은 단위인 쿼크를 연구하는 학문 분야는?', answer: ['양자역학'] },
	{ category: 'science', level: 'hard', question: '불확정성 원리를 발표한 물리학자는?', answer: ['하이젠베르크'] },
	{ category: 'science', level: 'hard', question: '슈뢰딩거의 ( ) 사고 실험은 양자 역학의 중첩 상태를 설명한다.', answer: ['고양이'] },
	{ category: 'science', level: 'hard', question: '우주를 구성하는 입자에 질량을 부여하여 "신의 입자"라 불리는 것은?', answer: ['힉스', '힉스입자'] },
	{ category: 'science', level: 'hard', question: '자연계의 4가지 힘은 중력, 전자기력, 약한 상호작용, 그리고?', answer: ['강한상호작용', '강력'] },
	{ category: 'science', level: 'hard', question: '아인슈타인의 일반 상대성 이론은 ( )이 시공간을 휘게 한다고 설명한다.', answer: ['중력', '질량'] },
	{ category: 'science', level: 'hard', question: '빛의 속도에 가깝게 움직이면 시간은 어떻게 되는가?', answer: ['느려진다'] },
	{ category: 'science', level: 'hard', question: '블랙홀의 경계면으로, 이 선을 넘으면 빛조차 빠져나올 수 없는 곳은?', answer: ['사건의지평선'] },
	{ category: 'science', level: 'hard', question: '매우 무거운 별이 죽을 때 폭발하는 현상은?', answer: ['초신성', '수퍼노바'] },
	{ category: 'science', level: 'hard', question: '우주 전체 에너지의 대부분을 차지하며, 우주를 가속 팽창시키는 것은?', answer: ['암흑에너지'] },
	{ category: 'science', level: 'hard', question: '지구 생명체의 기원이 외계에서 왔다는 가설은?', answer: ['판스페르미아', '범종설'] },
	{ category: 'science', level: 'hard', question: '고생대 캄브리아기에 생물 종이 폭발적으로 늘어난 사건은?', answer: ['캄브리아기대폭발'] },
	{ category: 'science', level: 'hard', question: '공룡 멸종의 원인이 된 K-T 대멸종은 주로 무엇 때문이라고 추측하는가?', answer: ['운석충돌', '소행성충돌'] },
	{ category: 'science', level: 'hard', question: '과거에 모든 대륙이 하나로 합쳐져 있었던 거대 대륙의 이름은?', answer: ['판게아'] },
	{ category: 'science', level: 'hard', question: '대륙 이동설을 처음 주장한 독일의 기상학자는?', answer: ['베게너'] },
	{ category: 'science', level: 'hard', question: '태평양 주변의 지진과 화산 활동이 활발한 지역을 무엇이라 하는가?', answer: ['불의고리', '환태평양조산대'] },
	{ category: 'science', level: 'hard', question: '해저 지진이나 화산 폭발로 인해 발생하는 거대한 파도는?', answer: ['쓰나미', '지진해일'] },
	{ category: 'science', level: 'hard', question: '지구 자전으로 인해 북반구에서는 오른쪽으로 휘어지는 힘(전향력)을 무엇이라 하는가?', answer: ['코리올리효과', '코리올리'] },
	{ category: 'science', level: 'hard', question: '동태평양 해수면 온도가 평년보다 높아지는 기상이변 현상은?', answer: ['엘니뇨'] },
	{ category: 'science', level: 'hard', question: '동태평양 해수면 온도가 평년보다 낮아지는 기상이변 현상은?', answer: ['라니냐'] },
	{ category: 'science', level: 'hard', question: '태양에서 날아오는 대전 입자들이 지구 자기장과 부딪혀 빛을 내는 현상은?', answer: ['오로라'] },
	{ category: 'science', level: 'hard', question: '지구를 둘러싸고 있는 강한 방사능대(자기장)의 이름은?', answer: ['밴앨런대'] },
	{ category: 'science', level: 'hard', question: '외계 문명의 존재 확률을 계산하는 방정식은?', answer: ['드레이크방정식'] },
	{ category: 'science', level: 'hard', question: '모든 행성은 태양을 하나의 초점으로 하는 타원 궤도를 돈다는 법칙은?', answer: ['케플러법칙'] },
	{ category: 'science', level: 'hard', question: '절대 온도 0도(-273.15도)에는 도달할 수 없다는 열역학 법칙은?', answer: ['제3법칙', '열역학3법칙'] },
	{ category: 'science', level: 'hard', question: '원소 주기율표에서 세로줄을 족(Group), 가로줄을 무엇이라 하는가?', answer: ['주기'] },
	{ category: 'science', level: 'hard', question: '금속 결합을 하고 있어 전기가 잘 통하는 물질을 도체, 안 통하는 것을 부도체라 한다. 그 중간은?', answer: ['반도체'] },
	{ category: 'science', level: 'hard', question: '저항 없이 전류가 영구히 흐르는 현상을 무엇이라 하는가?', answer: ['초전도', '초전도현상'] },
	{ category: 'science', level: 'hard', question: '빛의 파동성과 입자성을 동시에 가지는 성질을 무엇이라 하는가?', answer: ['이중성'] },
	{ category: 'science', level: 'hard', question: '우리 몸의 면역 체계가 자신의 조직을 공격하는 질환을 통틀어?', answer: ['자가면역질환'] },
	{ category: 'science', level: 'hard', question: '바이러스를 예방하기 위해 약화된 바이러스를 주입하는 것은?', answer: ['백신'] },
	{ category: 'science', level: 'hard', question: '최초의 항생제 페니실린은 무엇에서 발견되었는가?', answer: ['푸른곰팡이'] },
	{ category: 'science', level: 'hard', question: '신경 세포 사이에서 신호를 전달하는 화학 물질을 통틀어?', answer: ['신경전달물질'] },
	{ category: 'science', level: 'hard', question: '행복 호르몬이라 불리며 기분을 조절하는 신경전달물질은?', answer: ['세로토닌', '도파민'] }, // 도파민은 쾌락, 세로토닌은 행복/안정. 둘 다 정답 처리 가능하나 세로토닌이 더 적합
	{ category: 'science', level: 'hard', question: '스트레스를 받을 때 분비되는 호르몬은?', answer: ['코르티솔', '아드레날린'] },
	{ category: 'science', level: 'hard', question: '식물의 잎이 녹색인 이유는 엽록소가 ( )색 빛을 반사하기 때문이다.', answer: ['초록', '녹'] },
	{ category: 'science', level: 'hard', question: '별의 거리를 측정하는 방법으로, 지구 공전에 따른 시차를 이용하는 것은?', answer: ['연주시차'] },
	{ category: 'science', level: 'hard', question: '우주 배경 복사를 발견하여 빅뱅 이론을 뒷받침한 사람은 펜지어스와 누구인가?', answer: ['윌슨'] },
	{ category: 'science', level: 'hard', question: '지구의 나이를 측정할 때 사용하는 방사성 원소 연대 측정법의 기준 원소는?', answer: ['탄소', '우라늄'] }, // 탄소는 짧은 기간, 우라늄은 긴 기간. 보통 탄소 연대 측정이 유명함.
	{ category: 'science', level: 'hard', question: '가장 강력한 산성 물질 중 하나로, 금도 녹일 수 있는 혼합액은?', answer: ['왕수'] },
	{ category: 'science', level: 'hard', question: '다이너마이트의 원료가 되는 폭발성 액체는?', answer: ['니트로글리세린'] },
	{ category: 'science', level: 'hard', question: '유리도 액체처럼 흐르는 성질이 있다. 이를 과냉각된 ( )라고도 불렀다.', answer: ['액체'] }, // 유리는 비정질 고체
	{ category: 'science', level: 'hard', question: '지구 자기장은 외핵의 ( ) 운동 때문에 생긴다.', answer: ['대류'] },
	{ category: 'science', level: 'hard', question: '태양의 표면 온도는 약 6000도이다. 흑점의 온도는 주변보다 높은가 낮은가?', answer: ['낮다'] },
	{ category: 'science', level: 'hard', question: '달이 지구와 태양 사이에 위치하여 달의 그림자가 지구에 생기는 현상은?', answer: ['일식'] },
	{ category: 'science', level: 'hard', question: '지구가 달과 태양 사이에 위치하여 지구 그림자가 달을 가리는 현상은?', answer: ['월식'] },
	{ category: 'science', level: 'hard', question: '단백질의 기본 구성 단위는?', answer: ['아미노산'] },
	{ category: 'science', level: 'hard', question: '생물의 분류 단계: 종-속-과-목-강-문-( ).', answer: ['계'] },
	{ category: 'science', level: 'hard', question: '지구 대기 중 가장 농도가 높은 온실가스는? (인간 활동 제외)', answer: ['수증기'] },
	{ category: 'science', level: 'hard', question: '빛을 100% 흡수하는 이상적인 물체를 물리학에서 무엇이라 하는가?', answer: ['흑체'] },

	// ============================================================
	// [영화] 100문제 (쉬움 30 / 보통 40 / 어려움 30)
	// ============================================================
	
	// [난이도: 쉬움] (국민 영화, 애니메이션, 히어로물)
	{ category: 'movie', level: 'easy', question: '마블 영화 <아이언맨>의 주인공 이름은?', answer: ['토니스타크', '토니'] },
	{ category: 'movie', level: 'easy', question: '애니메이션 <겨울왕국>에서 눈과 얼음을 만드는 능력을 가진 언니는?', answer: ['엘사'] },
	{ category: 'movie', level: 'easy', question: '영화 <해리포터> 시리즈의 주인공이 다니는 마법 학교는?', answer: ['호그와트'] },
	{ category: 'movie', level: 'easy', question: '영화 <스파이더맨>의 주인공이 물린 동물은?', answer: ['거미'] },
	{ category: 'movie', level: 'easy', question: '디즈니 애니메이션 <라이온 킹>의 주인공 사자 이름은?', answer: ['심바'] },
	{ category: 'movie', level: 'easy', question: '영화 <어벤져스>에 나오는 녹색 괴물 히어로의 이름은?', answer: ['헐크'] },
	{ category: 'movie', level: 'easy', question: '영화 <부산행>에 나오는 괴물들의 정체는?', answer: ['좀비'] },
	{ category: 'movie', level: 'easy', question: '애니메이션 <뽀로로>의 주인공 뽀로로는 무슨 동물인가?', answer: ['펭귄'] },
	{ category: 'movie', level: 'easy', question: '영화 <쿵푸팬더>의 주인공 포는 무슨 동물인가?', answer: ['팬더', '판다'] },
	{ category: 'movie', level: 'easy', question: '영화 <배트맨>이 지키는 도시의 이름은?', answer: ['고담', '고담시'] },
	{ category: 'movie', level: 'easy', question: '영화 <슈퍼맨>의 약점인 초록색 광물은?', answer: ['크립토나이트'] },
	{ category: 'movie', level: 'easy', question: '영화 <나 홀로 집에>의 주인공 꼬마 이름은?', answer: ['케빈'] },
	{ category: 'movie', level: 'easy', question: '캡틴 아메리카가 들고 다니는 무기는?', answer: ['방패'] },
	{ category: 'movie', level: 'easy', question: '토르가 들고 다니는 망치의 이름은?', answer: ['묠니르'] },
	{ category: 'movie', level: 'easy', question: '애니메이션 <미니언즈>가 좋아하는 노란색 과일은?', answer: ['바나나'] },
	{ category: 'movie', level: 'easy', question: '영화 <알라딘>에서 램프의 요정 이름은?', answer: ['지니'] },
	{ category: 'movie', level: 'easy', question: '영화 <인어공주>의 주인공 이름은?', answer: ['에리얼'] },
	{ category: 'movie', level: 'easy', question: '영화 <슈렉>의 주인공 슈렉의 피부색은?', answer: ['초록색', '녹색'] },
	{ category: 'movie', level: 'easy', question: '영화 <트랜스포머>에 나오는 노란색 자동차 로봇은?', answer: ['범블비'] },
	{ category: 'movie', level: 'easy', question: '영화 <니모를 찾아서>의 주인공 니모는 무슨 물고기인가?', answer: ['흰동가리', '클라운피쉬'] },
	{ category: 'movie', level: 'easy', question: '영화 <101마리 달마시안>에 나오는 강아지들의 무늬 색깔은?', answer: ['검은색', '검정'] },
	{ category: 'movie', level: 'easy', question: '지브리 애니메이션 <이웃집 토토로>의 주인공 동물은?', answer: ['토토로'] },
	{ category: 'movie', level: 'easy', question: '영화 <괴물>에서 괴물이 나타난 강은?', answer: ['한강'] },
	{ category: 'movie', level: 'easy', question: '영화 <어벤져스>의 악당으로 손가락을 튕겨 인구 절반을 없앤 캐릭터는?', answer: ['타노스'] },
	{ category: 'movie', level: 'easy', question: '영화 <극한직업>에서 형사들이 위장 창업한 가게 메뉴는?', answer: ['치킨', '통닭', '갈비통닭'] },
	{ category: 'movie', level: 'easy', question: '영화 <기생충>에 나오는 "짜파구리"는 짜파게티와 무엇을 섞은 것인가?', answer: ['너구리'] },
	{ category: 'movie', level: 'easy', question: '영화 <겨울왕국>의 눈사람 캐릭터 이름은?', answer: ['올라프'] },
	{ category: 'movie', level: 'easy', question: '영화 <피노키오>에서 거짓말을 하면 길어지는 것은?', answer: ['코'] },
	{ category: 'movie', level: 'easy', question: '영화 <토이 스토리>의 주인공 카우보이 인형 이름은?', answer: ['우디'] },
	{ category: 'movie', level: 'easy', question: '마블 영화에서 검은색 수트를 입은 표범 히어로는?', answer: ['블랙팬서'] },
	
	// [난이도: 보통] (유명 명대사, 감독, 배우, 흥행작)
	{ category: 'movie', level: 'normal', question: '봉준호 감독의 영화로 칸 영화제 황금종려상과 아카데미 작품상을 받은 영화는?', answer: ['기생충'] },
	{ category: 'movie', level: 'normal', question: '영화 <타이타닉>의 주제곡을 부른 가수는?', answer: ['셀린디온'] },
	{ category: 'movie', level: 'normal', question: '영화 <반지의 제왕>에 나오는 "절대 반지"를 파괴하러 떠나는 호빗은?', answer: ['프로도'] },
	{ category: 'movie', level: 'normal', question: '영화 <매트릭스>에서 주인공 네오가 선택한 알약의 색깔은?', answer: ['빨간색', '레드'] },
	{ category: 'movie', level: 'normal', question: '영화 <킹스맨>의 명대사 "Manners ( ) man."', answer: ['maketh', '메이크스'] },
	{ category: 'movie', level: 'normal', question: '영화 <캐리비안의 해적>의 주인공 선장 이름은?', answer: ['잭스패로우'] },
	{ category: 'movie', level: 'normal', question: '영화 <아바타>에 나오는 파란 피부를 가진 종족의 이름은?', answer: ['나비족'] },
	{ category: 'movie', level: 'normal', question: '영화 <미션 임파서블> 시리즈의 주연 배우는?', answer: ['탐크루즈', '톰크루즈'] },
	{ category: 'movie', level: 'normal', question: '영화 <스타워즈>에서 다스베이더가 루크에게 한 명대사 "I am your ( )."', answer: ['father', '파더', '아버지'] },
	{ category: 'movie', level: 'normal', question: '영화 <올드보이>에서 주인공 오대수가 15년 동안 먹은 음식은?', answer: ['군만두'] },
	{ category: 'movie', level: 'normal', question: '영화 <라라랜드>의 배경이 된 도시는?', answer: ['LA', '로스앤젤레스'] },
	{ category: 'movie', level: 'normal', question: '007 시리즈의 주인공 제임스 본드의 코드명 숫자는?', answer: ['007'] },
	{ category: 'movie', level: 'normal', question: '영화 <ET>에서 외계인과 주인공이 교감을 나누기 위해 맞대는 신체 부위는?', answer: ['손가락', '검지'] },
	{ category: 'movie', level: 'normal', question: '영화 <쥬라기 공원>에서 공룡을 복원하기 위해 사용한 것은 무엇의 피인가?', answer: ['모기'] },
	{ category: 'movie', level: 'normal', question: '영화 <터미네이터>의 명대사 "I\'ll be ( )."', answer: ['back', '백'] },
	{ category: 'movie', level: 'normal', question: '영화 <인터스텔라>는 웜홀을 통해 어디를 여행하는 내용인가?', answer: ['우주'] },
	{ category: 'movie', level: 'normal', question: '영화 <범죄도시> 시리즈에서 마동석이 연기한 형사의 이름은?', answer: ['마석도'] },
	{ category: 'movie', level: 'normal', question: '지브리 영화 <센과 치히로의 행방불명>에서 치히로가 일하게 된 곳은?', answer: ['온천', '목욕탕'] },
	{ category: 'movie', level: 'normal', question: '영화 <타짜>에서 아귀가 고니에게 "동작 그만, ( )냐?"라고 묻는다.', answer: ['밑장빼기'] },
	{ category: 'movie', level: 'normal', question: '영화 <레옹>에서 화분을 들고 다니는 소녀의 이름은?', answer: ['마틸다'] },
	{ category: 'movie', level: 'normal', question: '한국 영화 역대 관객수 1위(2023 기준)인 이순신 장군 관련 영화는?', answer: ['명량'] },
	{ category: 'movie', level: 'normal', question: '영화 <보헤미안 랩소디>는 어느 록 밴드의 이야기를 다루고 있는가?', answer: ['퀸'] },
	{ category: 'movie', level: 'normal', question: '영화 <관상>의 명대사. "내가 왕이 될 ( )인가?"', answer: ['상'] },
	{ category: 'movie', level: 'normal', question: '영화 <조커>에서 조커가 춤을 추며 내려오는 장소는?', answer: ['계단'] },
	{ category: 'movie', level: 'normal', question: '픽사 애니메이션 <인사이드 아웃>에는 기쁨, 슬픔, 버럭, 까칠, 그리고 ( )가 나온다.', answer: ['소심'] }, // 2편 말고 1편 기준
	{ category: 'movie', level: 'normal', question: '영화 <신과 함께>에서 주인공을 변호하는 저승 삼차사는 강림, 해원맥, ( )이다.', answer: ['덕춘'] },
	{ category: 'movie', level: 'normal', question: '영화 <친구>의 명대사. "니가 가라 ( )."', answer: ['하와이'] },
	{ category: 'movie', level: 'normal', question: '찰리 채플린이 주로 연기한 영화 장르는?', answer: ['코미디', '무성영화', '슬랩스틱'] },
	{ category: 'movie', level: 'normal', question: '영화 <해리포터>에서 이마에 있는 흉터 모양은?', answer: ['번개'] },
	{ category: 'movie', level: 'normal', question: '영화 <곡성>의 명대사 "뭣이 ( )!"', answer: ['중헌디'] },
	{ category: 'movie', level: 'normal', question: '영화 <암살>에서 전지현이 연기한 독립군 저격수의 이름은?', answer: ['안옥윤'] },
	{ category: 'movie', level: 'normal', question: '영화 <건축학개론>에 나온 그룹 전람회의 노래 제목은?', answer: ['기억의습작'] },
	{ category: 'movie', level: 'normal', question: '류승룡 주연의 영화 <7번방의 선물>에서 주인공이 좋아하는 캐릭터 가방은?', answer: ['세일러문'] },
	{ category: 'movie', level: 'normal', question: '영화 <캐스트 어웨이>에서 주인공이 친구처럼 지내는 배구공의 이름은?', answer: ['윌슨'] },
	{ category: 'movie', level: 'normal', question: '영화 <오징어 게임>에서 첫 번째 게임으로 등장하는 놀이는?', answer: ['무궁화꽃이피었습니다'] },
	{ category: 'movie', level: 'normal', question: '영화 <써니>에서 주인공들이 춤을 춘 노래 "Sunny"를 부른 그룹은?', answer: ['보니엠'] },
	{ category: 'movie', level: 'normal', question: '영화 <탑건: 매버릭>의 주인공 톰 크루즈의 직업은?', answer: ['파일럿', '조종사'] },
	{ category: 'movie', level: 'normal', question: '영화 <크루엘라>는 디즈니 애니메이션 101마리 ( )의 악당 이야기다.', answer: ['달마시안'] },
	{ category: 'movie', level: 'normal', question: '한국 최초의 아카데미 여우조연상 수상자는?', answer: ['윤여정'] },
	{ category: 'movie', level: 'normal', question: '영화 <악마는 프라다를 입는다>에서 악마 같은 편집장이 입는 명품 브랜드는?', answer: ['프라다'] },
	
	// [난이도: 어려움] (고전 명작, 영화제 상식, 디테일)
	{ category: 'movie', level: 'hard', question: '알프레드 히치콕 감독의 공포 영화로, 샤워실 살인 장면이 유명한 영화는?', answer: ['싸이코', '사이코'] },
	{ category: 'movie', level: 'hard', question: '오슨 웰스 감독의 영화로, "로즈버드"라는 대사가 유명한 고전 명작은?', answer: ['시민케인'] },
	{ category: 'movie', level: 'hard', question: '영화계의 노벨상이라 불리는 프랑스 칸 영화제의 최고 상 이름은?', answer: ['황금종려상'] },
	{ category: 'movie', level: 'hard', question: '세계 최초의 장편 애니메이션 영화는 디즈니의 ( )이다.', answer: ['백설공주'] },
	{ category: 'movie', level: 'hard', question: '영화 <대부>에서 말론 브란도가 연기한 돈 꼴레오네의 직업(조직)은?', answer: ['마피아'] },
	{ category: 'movie', level: 'hard', question: '영화 촬영 중 배우가 대사를 잊거나 웃음이 터져 못 쓰게 된 필름을 무엇이라 하는가?', answer: ['NG', '엔지'] },
	{ category: 'movie', level: 'hard', question: '영화 줄거리를 미리 알려주어 김새게 하는 행위를 무엇이라 하는가?', answer: ['스포일러', '스포'] },
	{ category: 'movie', level: 'hard', question: '영화 <쇼생크 탈출>에서 주인공 앤디가 탈출을 위해 파던 포스터 뒤의 구멍을 가린 여배우는?', answer: ['마릴린먼로', '라웰웰치', '리타헤이워드'] }, // 포스터가 바뀜. 리타 헤이워드가 첫번째.
	{ category: 'movie', level: 'hard', question: '영화 <기생충>에서 기우(최우식)가 과외를 하러 갈 때 위조한 문서는 무엇인가?', answer: ['재학증명서'] },
	{ category: 'movie', level: 'hard', question: '영화 <양들의 침묵>에 나오는 식인 살인마 박사의 이름은?', answer: ['한니발', '한니발렉터'] },
	{ category: 'movie', level: 'hard', question: '박찬욱 감독의 복수 3부작은 복수는 나의 것, 올드보이, 그리고 ( )이다.', answer: ['친절한금자씨'] },
	{ category: 'movie', level: 'hard', question: '영화 <카사블랑카>의 명대사. "당신의 ( )에 건배."', answer: ['눈동자'] },
	{ category: 'movie', level: 'hard', question: '유명 감독들이 잠깐 자신의 영화에 출연하는 것을 무엇이라 하는가?', answer: ['카메오'] },
	{ category: 'movie', level: 'hard', question: '세계 3대 영화제는 칸, 베니스, 그리고 ( ) 영화제이다.', answer: ['베를린'] },
	{ category: 'movie', level: 'hard', question: '영화 <바람과 함께 사라지다>의 마지막 명대사 "내일은 내일의 ( )가 뜰 테니까."', answer: ['태양', '해'] },
	{ category: 'movie', level: 'hard', question: '영화 <식스 센스>의 반전은 주인공이 ( )이라는 것이다.', answer: ['유령', '귀신', '죽은사람'] },
	{ category: 'movie', level: 'hard', question: '크리스토퍼 놀란 감독의 영화로, 꿈 속의 꿈을 다룬 영화는?', answer: ['인셉션'] },
	{ category: 'movie', level: 'hard', question: '영화 <트루먼 쇼>에서 주인공 트루먼이 사는 거대한 세트장의 이름은?', answer: ['씨헤이븐'] },
	{ category: 'movie', level: 'hard', question: '공포 영화 <링>에서 TV 밖으로 기어 나오는 귀신의 이름은?', answer: ['사다코'] },
	{ category: 'movie', level: 'hard', question: '영화 <매드맥스: 분노의 도로>에서 악당 임모탄이 독점하고 있는 자원은?', answer: ['물'] },
	{ category: 'movie', level: 'hard', question: '히스 레저가 조커 역을 맡아 아카데미 남우조연상을 수상한 배트맨 영화 제목은?', answer: ['다크나이트'] },
	{ category: 'movie', level: 'hard', question: '봉준호 감독의 데뷔작으로, "배두나"가 주연인 영화는?', answer: ['플란다스의개'] },
	{ category: 'movie', level: 'hard', question: '영화에서 중요한 것처럼 보이지만 실제로는 줄거리에 영향을 주지 않는 소품을 히치콕은 무엇이라 불렀나?', answer: ['맥거핀'] },
	{ category: 'movie', level: 'hard', question: '스티븐 스필버그 감독의 영화로, 흑백으로 촬영되었으며 홀로코스트를 다룬 영화는?', answer: ['쉰들러리스트'] },
	{ category: 'movie', level: 'hard', question: '영화 <펄프 픽션>, <킬 빌>을 만든 감독은?', answer: ['타란티노', '쿠엔틴타란티노'] },
	{ category: 'movie', level: 'hard', question: '영화 <라라랜드>의 감독인 데이미언 셔젤의 음악 영화 데뷔작은?', answer: ['위플래쉬'] },
	{ category: 'movie', level: 'hard', question: '영화 <타짜>의 감독이자 <도둑들>, <암살>을 연출한 감독은?', answer: ['최동훈'] },
	{ category: 'movie', level: 'hard', question: '마블 시네마틱 유니버스(MCU)의 첫 번째 영화는?', answer: ['아이언맨'] },
	{ category: 'movie', level: 'hard', question: '영화 <미나리>에서 할머니가 손주들을 위해 한국에서 가져온 씨앗은?', answer: ['미나리'] },
	{ category: 'movie', level: 'hard', question: '2003년 개봉한 한국 공포 영화로, 염정아와 임수정이 자매로 나오는 영화는?', answer: ['장화홍련'] },
	
	// ============================================================
	// [영화] 추가 150문제 (쉬움 50 / 보통 50 / 어려움 50)
	// ============================================================
	
	// [쉬움 - 추가 50문제]
	{ category: 'movie', level: 'easy', question: '마블 히어로 "토르"의 동생이자 장난의 신인 캐릭터는?', answer: ['로키'] },
	{ category: 'movie', level: 'easy', question: '영화 <쿵푸팬더>의 주인공 포가 좋아하는 음식은?', answer: ['만두'] },
	{ category: 'movie', level: 'easy', question: '영화 <슈렉>의 아내(공주) 이름은?', answer: ['피오나'] },
	{ category: 'movie', level: 'easy', question: '영화 <인사이드 아웃>에서 기쁨이의 머리색은?', answer: ['파란색', '파랑'] },
	{ category: 'movie', level: 'easy', question: '영화 <토이 스토리>에 나오는 우주전사 인형 이름은?', answer: ['버즈', '버즈라이트이어'] },
	{ category: 'movie', level: 'easy', question: '영화 <니모를 찾아서>에서 니모를 찾아 떠나는 아빠 물고기의 이름은?', answer: ['말린'] },
	{ category: 'movie', level: 'easy', question: '영화 <알라딘>에서 알라딘이 타고 다니는 마법의 물건은?', answer: ['양탄자'] },
	{ category: 'movie', level: 'easy', question: '디즈니 영화 <라푼젤>의 주인공 라푼젤의 특징은 긴 ( )이다.', answer: ['머리카락', '머리'] },
	{ category: 'movie', level: 'easy', question: '영화 <미녀와 야수>에서 야수가 사랑에 빠지는 여주인공 이름은?', answer: ['벨'] },
	{ category: 'movie', level: 'easy', question: '영화 <101마리 달마시안>에 나오는 점박이 개들의 품종은?', answer: ['달마시안'] },
	{ category: 'movie', level: 'easy', question: '영화 <주토피아>의 주인공 주디 홉스는 무슨 동물인가?', answer: ['토끼'] },
	{ category: 'movie', level: 'easy', question: '영화 <주토피아>의 남자 주인공 닉 와일드는 무슨 동물인가?', answer: ['여우'] },
	{ category: 'movie', level: 'easy', question: '영화 <라이온 킹>의 악당이자 심바의 삼촌 이름은?', answer: ['스카'] },
	{ category: 'movie', level: 'easy', question: '영화 <모아나>에 나오는 반인반신 영웅의 이름은?', answer: ['마우이'] },
	{ category: 'movie', level: 'easy', question: '영화 <코코>의 배경이 되는 나라는?', answer: ['멕시코'] },
	{ category: 'movie', level: 'easy', question: '영화 <업(UP)>에서 할아버지가 집에 매단 것은?', answer: ['풍선'] },
	{ category: 'movie', level: 'easy', question: '영화 <월-E>는 우주에서 무엇을 치우는 로봇인가?', answer: ['쓰레기'] },
	{ category: 'movie', level: 'easy', question: '영화 <몬스터 주식회사>에 나오는 외눈박이 초록 괴물 이름은?', answer: ['마이크', '마이크와조스키'] },
	{ category: 'movie', level: 'easy', question: '영화 <슈퍼배드>에 나오는 노란색 미니 생명체들은?', answer: ['미니언즈', '미니언'] },
	{ category: 'movie', level: 'easy', question: '영화 <드래곤 길들이기>에 나오는 검은 용의 이름은?', answer: ['투슬리스'] },
	{ category: 'movie', level: 'easy', question: '영화 <해리포터>에서 해리가 키우는 흰 올빼미의 이름은?', answer: ['헤드위그'] },
	{ category: 'movie', level: 'easy', question: '영화 <해리포터>에서 마법사들이 타고 다니는 빗자루 중 가장 빠른 모델은?', answer: ['님부스2000', '파이어볼트'] }, // 둘 다 인정
	{ category: 'movie', level: 'easy', question: '영화 <트랜스포머>의 대장 로봇 이름은?', answer: ['옵티머스프라임', '옵티머스'] },
	{ category: 'movie', level: 'easy', question: '영화 <쥬라기 공원>에 나오는 가장 무서운 육식 공룡은?', answer: ['티라노사우루스', '티라노'] },
	{ category: 'movie', level: 'easy', question: '영화 <킹콩>에 나오는 킹콩은 거대한 ( )이다.', answer: ['고릴라', '원숭이'] },
	{ category: 'movie', level: 'easy', question: '영화 <죠스>에 나오는 식인 물고기는?', answer: ['상어', '백상아리'] },
	{ category: 'movie', level: 'easy', question: '영화 <맨 인 블랙>의 요원들은 무엇을 잡으러 다니는가?', answer: ['외계인'] },
	{ category: 'movie', level: 'easy', question: '영화 <고스트버스터즈>는 무엇을 잡는 사람들인가?', answer: ['유령', '귀신'] },
	{ category: 'movie', level: 'easy', question: '영화 <나 홀로 집에>는 무슨 날에 일어나는 일인가?', answer: ['크리스마스', '성탄절'] },
	{ category: 'movie', level: 'easy', question: '영화 <찰리와 초콜릿 공장>에 나오는 공장장 이름은?', answer: ['윌리웡카'] },
	{ category: 'movie', level: 'easy', question: '영화 <이상한 나라의 앨리스>의 주인공 이름은?', answer: ['앨리스'] },
	{ category: 'movie', level: 'easy', question: '영화 <피터팬>에 나오는 요정의 이름은?', answer: ['팅커벨'] },
	{ category: 'movie', level: 'easy', question: '영화 <신데렐라>가 12시가 되면 잃어버리는 물건은?', answer: ['유리구두', '구두'] },
	{ category: 'movie', level: 'easy', question: '영화 <백설공주>는 독이 든 무엇을 먹고 쓰러지는가?', answer: ['사과'] },
	{ category: 'movie', level: 'easy', question: '영화 <잠자는 숲속의 공주>는 무엇에 찔려 잠이 드는가?', answer: ['물레', '바늘'] },
	{ category: 'movie', level: 'easy', question: '영화 <타잔>의 여자친구 이름은?', answer: ['제인'] },
	{ category: 'movie', level: 'easy', question: '영화 <스파이더맨>이 손목에서 쏘는 것은?', answer: ['거미줄'] },
	{ category: 'movie', level: 'easy', question: '영화 <배트맨>의 파트너 이름은?', answer: ['로빈'] },
	{ category: 'movie', level: 'easy', question: '영화 <원더우먼>이 들고 다니는 진실을 말하게 하는 끈은?', answer: ['진실의올가미', '올가미'] },
	{ category: 'movie', level: 'easy', question: '영화 <아쿠아맨>은 어디의 왕인가?', answer: ['바다', '아틀란티스'] },
	{ category: 'movie', level: 'easy', question: '영화 <앤트맨>은 몸 크기가 개미처럼 ( )진다.', answer: ['작아'] },
	{ category: 'movie', level: 'easy', question: '영화 <닥터 스트레인지>는 원래 직업이 무엇이었나?', answer: ['의사'] },
	{ category: 'movie', level: 'easy', question: '영화 <가디언즈 오브 갤럭시>에 나오는 말하는 나무의 이름은?', answer: ['그루트'] },
	{ category: 'movie', level: 'easy', question: '영화 <가디언즈 오브 갤럭시>에 나오는 말하는 너구리의 이름은?', answer: ['로켓'] },
	{ category: 'movie', level: 'easy', question: '영화 <어벤져스>에서 활을 잘 쏘는 히어로는?', answer: ['호크아이'] },
	{ category: 'movie', level: 'easy', question: '영화 <어벤져스>에서 방패를 쓰는 대장 히어로는?', answer: ['캡틴아메리카'] },
	{ category: 'movie', level: 'easy', question: '영화 <어벤져스>에서 러시아 스파이 출신인 여성 히어로는?', answer: ['블랙위도우'] },
	{ category: 'movie', level: 'easy', question: '영화 <부산행>의 주연 배우로 딸을 지키는 아빠 역할은?', answer: ['공유'] },
	{ category: 'movie', level: 'easy', question: '영화 <엑시트>에서 주인공들이 도시를 탈출할 때 입은 봉투는 무슨 색인가?', answer: ['쓰레기봉투', '종량제봉투'] }, // 정답유도: 쓰레기봉투
	{ category: 'movie', level: 'easy', question: '영화 <국제시장>의 주인공 덕수의 직업은 ( ) 광부였다.', answer: ['파독', '독일'] },
	
	// [보통 - 추가 50문제]
	{ category: 'movie', level: 'normal', question: '영화 <아이언맨>에서 토니 스타크를 돕는 인공지능 비서의 이름은?', answer: ['자비스'] },
	{ category: 'movie', level: 'normal', question: '영화 <어벤져스: 엔드게임>의 명대사. "I love you ( )."', answer: ['3000', '3000만큼'] },
	{ category: 'movie', level: 'normal', question: '영화 <캡틴 마블>의 주인공 캐럴 댄버스의 이전 직업은?', answer: ['파일럿', '공군'] },
	{ category: 'movie', level: 'normal', question: '영화 <블랙 팬서>의 배경이 되는 가상의 아프리카 국가는?', answer: ['와칸다'] },
	{ category: 'movie', level: 'normal', question: '영화 <조커>의 주인공 아서 플렉의 직업은 무엇이었나?', answer: ['광대', '코미디언'] },
	{ category: 'movie', level: 'normal', question: '영화 <다크 나이트>에서 조커 역할을 맡은 배우는?', answer: ['히스레저'] },
	{ category: 'movie', level: 'normal', question: '영화 <수어사이드 스쿼드>에서 조커의 연인으로 나오는 캐릭터는?', answer: ['할리퀸'] },
	{ category: 'movie', level: 'normal', question: '영화 <해리포터>에서 볼드모트를 부르는 다른 말은? "이름을 말할 수 없는 ( )"', answer: ['자', '사람'] },
	{ category: 'movie', level: 'normal', question: '영화 <해리포터>에서 해리가 속한 기숙사 이름은?', answer: ['그리핀도르'] },
	{ category: 'movie', level: 'normal', question: '영화 <반지의 제왕>에 나오는 마법사의 이름은?', answer: ['간달프'] },
	{ category: 'movie', level: 'normal', question: '영화 <반지의 제왕>에 나오는 활을 잘 쏘는 요정은?', answer: ['레골라스'] },
	{ category: 'movie', level: 'normal', question: '영화 <캐리비안의 해적>에서 잭 스패로우가 타는 배의 이름은?', answer: ['블랙펄'] },
	{ category: 'movie', level: 'normal', question: '영화 <타이타닉>의 여주인공 이름은?', answer: ['로즈'] },
	{ category: 'movie', level: 'normal', question: '영화 <라라랜드>의 주연 배우 라이언 고슬링과 호흡을 맞춘 여배우는?', answer: ['엠마스톤'] },
	{ category: 'movie', level: 'normal', question: '영화 <맘마미아>는 어느 그룹의 노래로 만들어졌는가?', answer: ['아바', 'ABBA'] },
	{ category: 'movie', level: 'normal', question: '영화 <보헤미안 랩소디>의 주인공 프레디 머큐리를 연기한 배우는?', answer: ['라미말렉'] },
	{ category: 'movie', level: 'normal', question: '영화 <위대한 쇼맨>의 주연 배우로 울버린 역할로도 유명한 사람은?', answer: ['휴잭맨'] },
	{ category: 'movie', level: 'normal', question: '영화 <미션 임파서블>의 주인공 이름은?', answer: ['이단헌트'] },
	{ category: 'movie', level: 'normal', question: '영화 <탑건>에서 톰 크루즈의 콜사인(호출명)은?', answer: ['매버릭'] },
	{ category: 'movie', level: 'normal', question: '영화 <분노의 질주> 시리즈의 대머리 주인공 이름은?', answer: ['돔', '도미닉토레토', '빈디젤'] }, // 빈디젤(배우)도 정답 인정
	{ category: 'movie', level: 'normal', question: '영화 <007> 시리즈에서 본드에게 무기를 만들어주는 박사의 이름은?', answer: ['Q', '큐'] },
	{ category: 'movie', level: 'normal', question: '영화 <매트릭스>에서 주인공 네오를 이끄는 리더의 이름은?', answer: ['모피어스'] },
	{ category: 'movie', level: 'normal', question: '영화 <백 투 더 퓨처>에서 시간 여행을 위해 타는 자동차 이름은?', answer: ['드로리안'] },
	{ category: 'movie', level: 'normal', question: '영화 <고질라>와 싸우는 거대한 유인원의 이름은?', answer: ['킹콩'] },
	{ category: 'movie', level: 'normal', question: '영화 <혹성탈출>에서 진화한 유인원들의 리더 이름은?', answer: ['시저'] },
	{ category: 'movie', level: 'normal', question: '영화 <트와일라잇> 시리즈에 나오는 남자 주인공 에드워드의 정체는?', answer: ['뱀파이어', '흡혈귀'] },
	{ category: 'movie', level: 'normal', question: '영화 <헝거게임>의 여주인공 캣니스 에버딘을 연기한 배우는?', answer: ['제니퍼로렌스'] },
	{ category: 'movie', level: 'normal', question: '영화 <메이즈 러너>는 갇혀 있는 ( )로 된 미로를 탈출하는 내용이다.', answer: ['미로'] }, // 질문 수정: 무엇을 탈출하는가? -> 미로
	{ category: 'movie', level: 'normal', question: '지브리 영화 <하울의 움직이는 성>에 나오는 불의 악마 이름은?', answer: ['캘시퍼'] },
	{ category: 'movie', level: 'normal', question: '지브리 영화 <벼랑 위의 포뇨>에서 포뇨는 원래 무엇이었나?', answer: ['물고기'] },
	{ category: 'movie', level: 'normal', question: '신카이 마코토 감독의 영화 <너의 이름은.>에서 남주인공과 여주인공은 서로 ( )이 바뀐다.', answer: ['몸'] },
	{ category: 'movie', level: 'normal', question: '영화 <서울의 봄>에서 황정민이 연기한 전두광의 실제 모델은?', answer: ['전두환'] },
	{ category: 'movie', level: 'normal', question: '영화 <범죄도시> 1편의 악당 이름은?', answer: ['장첸'] },
	{ category: 'movie', level: 'normal', question: '영화 <범죄도시> 2편의 악당 이름은?', answer: ['강해상'] },
	{ category: 'movie', level: 'normal', question: '영화 <신세계>의 명대사. "거 죽기 딱 좋은 ( )네."', answer: ['날씨'] },
	{ category: 'movie', level: 'normal', question: '영화 <베테랑>의 명대사. "어이가 ( )."', answer: ['없네'] },
	{ category: 'movie', level: 'normal', question: '영화 <도둑들>에서 전지현이 연기한 캐릭터의 예명은?', answer: ['예니콜'] },
	{ category: 'movie', level: 'normal', question: '영화 <암살>은 일제강점기 1933년 ( )와 경성을 배경으로 한다.', answer: ['상하이', '상해'] },
	{ category: 'movie', level: 'normal', question: '영화 <택시운전사>는 광주 ( ) 민주화운동을 배경으로 한다.', answer: ['518', '5.18'] },
	{ category: 'movie', level: 'normal', question: '영화 <변호인>은 노무현 전 대통령의 ( ) 사건 변론을 모티브로 했다.', answer: ['부림'] },
	{ category: 'movie', level: 'normal', question: '영화 <1987>은 박종철 고문치사 사건과 6월 ( )을 다룬다.', answer: ['항쟁', '민주항쟁'] },
	{ category: 'movie', level: 'normal', question: '영화 <광해, 왕이 된 남자>에서 왕과 똑같이 생긴 광대의 이름은?', answer: ['하선'] },
	{ category: 'movie', level: 'normal', question: '영화 <왕의 남자>에서 이준기가 연기한 광대의 이름은?', answer: ['공길'] },
	{ category: 'movie', level: 'normal', question: '영화 <웰컴 투 동막골>의 배경이 되는 전쟁은?', answer: ['625', '한국전쟁'] },
	{ category: 'movie', level: 'normal', question: '영화 <실미도>의 명대사. "비겁한 ( )입니다!"', answer: ['변명'] },
	{ category: 'movie', level: 'normal', question: '영화 <말아톤>의 명대사. "초원이 다리는 ( ) 다리."', answer: ['백만불'] },
	{ category: 'movie', level: 'normal', question: '영화 <써니>는 여고생 시절 칠공주파 친구들의 ( )을 다룬 영화다.', answer: ['우정'] },
	{ category: 'movie', level: 'normal', question: '영화 <과속스캔들>에서 차태현의 딸로 나온 배우는?', answer: ['박보영'] },
	{ category: 'movie', level: 'normal', question: '영화 <늑대소년>에서 늑대소년을 연기한 배우는?', answer: ['송중기'] },
	
	// [어려움 - 추가 50문제]
	{ category: 'movie', level: 'hard', question: '영화 <기생충>에서 기우(최우식)가 친구에게 선물 받은 돌의 이름은?', answer: ['수석', '산수경석'] },
	{ category: 'movie', level: 'hard', question: '영화 <기생충>은 아카데미 시상식에서 작품상, 감독상, 각본상, 그리고 ( )상을 받았다.', answer: ['국제장편영화상'] },
	{ category: 'movie', level: 'hard', question: '영화 <오징어 게임>에서 참가자들은 총 몇 명인가?', answer: ['456명', '456'] },
	{ category: 'movie', level: 'hard', question: '영화 <헤어질 결심>의 박찬욱 감독이 받은 칸 영화제 상은?', answer: ['감독상'] },
	{ category: 'movie', level: 'hard', question: '영화 <브로커>로 한국 배우 최초 칸 영화제 남우주연상을 받은 사람은?', answer: ['송강호'] },
	{ category: 'movie', level: 'hard', question: '영화 <미나리>로 한국 배우 최초 아카데미 여우조연상을 받은 사람은?', answer: ['윤여정'] },
	{ category: 'movie', level: 'hard', question: '영화 <올드보이>가 칸 영화제에서 수상한 상은?', answer: ['심사위원대상'] },
	{ category: 'movie', level: 'hard', question: '영화 <괴물>에서 괴물을 죽이기 위해 마지막에 사용한 용액은?', answer: ['에이전트옐로우'] }, // 혹은 독극물
	{ category: 'movie', level: 'hard', question: '영화 <살인의 추억>은 화성 연쇄 살인 사건을 다룬다. 범인을 잡았는가?', answer: ['못잡았다', '실패했다'] }, // 영화 내용상
	{ category: 'movie', level: 'hard', question: '영화 <공동경비구역 JSA>에서 남북한 병사들이 나눠 먹던 과자는?', answer: ['초코파이'] },
	{ category: 'movie', level: 'hard', question: '영화 <쉬리>에 나오는 물고기 이름은?', answer: ['키싱구라미'] },
	{ category: 'movie', level: 'hard', question: '영화 <엽기적인 그녀>의 원작은 무엇인가?', answer: ['인터넷소설', '소설'] },
	{ category: 'movie', level: 'hard', question: '영화 <장화, 홍련>의 감독은?', answer: ['김지운'] },
	{ category: 'movie', level: 'hard', question: '영화 <달콤한 인생>의 명대사. "넌 나에게 ( )을 줬어."', answer: ['모욕감'] },
	{ category: 'movie', level: 'hard', question: '영화 <곡성>의 감독은?', answer: ['나홍진'] },
	{ category: 'movie', level: 'hard', question: '영화 <아가씨>의 원작 소설 제목은?', answer: ['핑거스미스'] },
	{ category: 'movie', level: 'hard', question: '영화 <설국열차>에서 꼬리칸 사람들이 먹는 단백질 블록의 재료는?', answer: ['바퀴벌레'] },
	{ category: 'movie', level: 'hard', question: '마블 영화에서 인피니티 스톤은 총 몇 개인가?', answer: ['6개', '6'] },
	{ category: 'movie', level: 'hard', question: '영화 <어벤져스> 1편에서 뉴욕을 침공한 외계 종족 이름은?', answer: ['치타우리'] },
	{ category: 'movie', level: 'hard', question: '영화 <아이언맨 1>에서 토니 스타크가 납치된 후 탈출하기 위해 만든 수트 이름은?', answer: ['마크1'] },
	{ category: 'movie', level: 'hard', question: '영화 <해리포터>에서 덤블도어가 가지고 있던 세상에서 가장 강력한 지팡이는?', answer: ['딱총나무지팡이'] },
	{ category: 'movie', level: 'hard', question: '영화 <스타워즈>에 나오는 에너지 검의 이름은?', answer: ['광선검', '라이트세이버'] },
	{ category: 'movie', level: 'hard', question: '영화 <블레이드 러너>에 나오는 인조인간을 부르는 말은?', answer: ['레플리컨트'] },
	{ category: 'movie', level: 'hard', question: '영화 <에이리언> 시리즈의 감독은?', answer: ['리들리스콧'] },
	{ category: 'movie', level: 'hard', question: '영화 <터미네이터 2>에 나오는 액체 금속 로봇의 모델명은?', answer: ['t1000'] },
	{ category: 'movie', level: 'hard', question: '영화 <타이타닉>의 감독이자 <아바타>의 감독은?', answer: ['제임스카메론'] },
	{ category: 'movie', level: 'hard', question: '크리스토퍼 놀란 감독의 <다크 나이트> 3부작의 첫 번째 영화는?', answer: ['배트맨비긴즈'] },
	{ category: 'movie', level: 'hard', question: '영화 <인셉션>에서 꿈인지 현실인지 확인하기 위해 돌리는 물건은?', answer: ['팽이', '토템'] },
	{ category: 'movie', level: 'hard', question: '영화 <메멘토>의 주인공은 단기 기억 상실증 때문에 몸에 무엇을 남기는가?', answer: ['문신'] },
	{ category: 'movie', level: 'hard', question: '영화 <유주얼 서스펙트>의 반전 인물인 전설적인 범죄자 이름은?', answer: ['카이저소제'] },
	{ category: 'movie', level: 'hard', question: '영화 <파이트 클럽>의 명대사. "파이트 클럽의 첫 번째 규칙은?"', answer: ['말하지않는것'] }, // 파이트 클럽에 대해 말하지 않는다
	{ category: 'movie', level: 'hard', question: '영화 <세븐>에서 연쇄 살인마가 모티브로 삼은 것은 7가지 ( )이다.', answer: ['죄악'] },
	{ category: 'movie', level: 'hard', question: '영화 <양들의 침묵>에서 클라리스 스털링의 직업(소속)은?', answer: ['fbi'] },
	{ category: 'movie', level: 'hard', question: '영화 <로마의 휴일>에서 오드리 헵번이 머리를 자르는 장소는?', answer: ['미용실', '이발소'] }, // 스페인 광장 근처
	{ category: 'movie', level: 'hard', question: '영화 <사운드 오브 뮤직>의 배경이 되는 나라는?', answer: ['오스트리아'] },
	{ category: 'movie', level: 'hard', question: '영화 <오즈의 마법사>에서 도로시가 신은 구두의 색깔은?', answer: ['빨간색', '빨강'] },
	{ category: 'movie', level: 'hard', question: '영화 <바람과 함께 사라지다>의 배경이 되는 전쟁은?', answer: ['남북전쟁'] },
	{ category: 'movie', level: 'hard', question: '영화 <시민 케인>에서 주인공이 죽기 전에 남긴 말 "로즈버드"의 정체는?', answer: ['썰매'] },
	{ category: 'movie', level: 'hard', question: '알프레드 히치콕 감독의 영화 <현기증>에서 사용된, 카메라 줌과 트랙을 동시에 쓰는 기법은?', answer: ['졸리줌', '줌인트랙아웃'] }, // 혹은 현기증 효과
	{ category: 'movie', level: 'hard', question: '영화 <2001 스페이스 오디세이>에 나오는 인공지능 컴퓨터의 이름은?', answer: ['할', 'hal9000'] },
	{ category: 'movie', level: 'hard', question: '영화 <대부>에서 돈 꼴레오네가 거절할 수 없는 ( )을 하겠다고 말한다.', answer: ['제안'] },
	{ category: 'movie', level: 'hard', question: '쿠엔틴 타란티노 감독의 영화 <킬 빌>에서 우마 서먼이 입은 노란 트레이닝복은 누구를 오마주한 것인가?', answer: ['이소룡'] },
	{ category: 'movie', level: 'hard', question: '영화 <그랜드 부다페스트 호텔>의 감독은?', answer: ['웨스앤더슨'] },
	{ category: 'movie', level: 'hard', question: '영화 <트루먼 쇼>의 마지막 장면에서 트루먼이 나가는 문은 어디에 있는가?', answer: ['하늘', '벽'] },
	{ category: 'movie', level: 'hard', question: '영화 <캐스트 어웨이>에서 톰 행크스가 무인도에서 탈출할 때 만든 뗏목의 이름은?', answer: ['없다'] }, // 윌슨은 배구공
	{ category: 'movie', level: 'hard', question: '영화 <이터널 선샤인>은 헤어진 연인의 ( )을 지워주는 병원이 배경이다.', answer: ['기억'] },
	{ category: 'movie', level: 'hard', question: '영화 <Her>에서 남자 주인공이 사랑에 빠지는 대상은?', answer: ['운영체제', 'os', '인공지능'] },
	{ category: 'movie', level: 'hard', question: '영화 <노인을 위한 나라는 없다>에 나오는 단발머리 살인마의 무기는?', answer: ['공기총', '캐틀건'] },
	{ category: 'movie', level: 'hard', question: '영화 <위플래쉬>에서 플레처 교수가 밴드에게 요구하는 것은 완벽한 ( )이다.', answer: ['템포', '박자'] },
	{ category: 'movie', level: 'hard', question: '영화 <라라랜드>의 엔딩에서 두 주인공이 다시 만나는 장소는?', answer: ['재즈바', '클럽'] },

	// ============================================================
	// [지리] 100문제 (쉬움 30 / 보통 40 / 어려움 30)
	// ============================================================
	
	// [난이도: 쉬움] (수도, 유명 랜드마크, 대륙)
	{ category: 'geo', level: 'easy', question: '대한민국의 수도는?', answer: ['서울', '서울특별시'] },
	{ category: 'geo', level: 'easy', question: '일본의 수도는?', answer: ['도쿄', '동경'] },
	{ category: 'geo', level: 'easy', question: '중국의 수도는?', answer: ['베이징', '북경'] },
	{ category: 'geo', level: 'easy', question: '프랑스의 수도는?', answer: ['파리'] },
	{ category: 'geo', level: 'easy', question: '영국의 수도는?', answer: ['런던'] },
	{ category: 'geo', level: 'easy', question: '미국의 수도는?', answer: ['워싱턴', '워싱턴DC'] },
	{ category: 'geo', level: 'easy', question: '세계에서 가장 넓은 면적을 가진 나라는?', answer: ['러시아'] },
	{ category: 'geo', level: 'easy', question: '세계에서 인구가 가장 많은 나라는? (2023년 기준 중국을 추월함)', answer: ['인도'] },
	{ category: 'geo', level: 'easy', question: '에펠탑이 있는 도시는?', answer: ['파리'] },
	{ category: 'geo', level: 'easy', question: '자유의 여신상이 있는 도시는?', answer: ['뉴욕'] },
	{ category: 'geo', level: 'easy', question: '피라미드와 스핑크스가 있는 나라는?', answer: ['이집트'] },
	{ category: 'geo', level: 'easy', question: '만리장성이 있는 나라는?', answer: ['중국'] },
	{ category: 'geo', level: 'easy', question: '대한민국에서 가장 큰 섬은?', answer: ['제주도'] },
	{ category: 'geo', level: 'easy', question: '대한민국에서 가장 높은 산은? (북한 포함)', answer: ['백두산'] },
	{ category: 'geo', level: 'easy', question: '대한민국(남한)에서 가장 높은 산은?', answer: ['한라산'] },
	{ category: 'geo', level: 'easy', question: '독도는 우리땅 노래 가사 중 "경상북도 울릉군 ( )"', answer: ['독도리'] },
	{ category: 'geo', level: 'easy', question: '지구에서 가장 큰 대륙은?', answer: ['아시아'] },
	{ category: 'geo', level: 'easy', question: '지구에서 가장 넓은 바다는?', answer: ['태평양'] },
	{ category: 'geo', level: 'easy', question: '캥거루와 코알라가 사는 나라는?', answer: ['호주', '오스트레일리아'] },
	{ category: 'geo', level: 'easy', question: '신사, 스시, 벚꽃으로 유명한 나라는?', answer: ['일본'] },
	{ category: 'geo', level: 'easy', question: '축구와 삼바 춤으로 유명한 남미의 나라는?', answer: ['브라질'] },
	{ category: 'geo', level: 'easy', question: '장화(부츠) 모양처럼 길게 생긴 유럽의 나라는?', answer: ['이탈리아', '이태리'] },
	{ category: 'geo', level: 'easy', question: '세계에서 가장 높은 산은?', answer: ['에베레스트', '에베레스트산'] },
	{ category: 'geo', level: 'easy', question: '1년 내내 얼음으로 덮여 있는 지구의 남쪽 끝 대륙은?', answer: ['남극'] },
	{ category: 'geo', level: 'easy', question: '사막 위에 세워진 도시로 세계 최고층 빌딩 부르즈 할리파가 있는 곳은?', answer: ['두바이'] },
	{ category: 'geo', level: 'easy', question: '콜로세움과 피자가 유명한 나라는?', answer: ['이탈리아'] },
	{ category: 'geo', level: 'easy', question: '단풍잎(메이플)이 국기에 그려진 나라는?', answer: ['캐나다'] },
	{ category: 'geo', level: 'easy', question: '베트남 쌀국수의 본고장인 나라는?', answer: ['베트남'] },
	{ category: 'geo', level: 'easy', question: '풍차와 튤립의 나라는?', answer: ['네덜란드'] },
	{ category: 'geo', level: 'easy', question: '서울의 중심을 가로지르는 강의 이름은?', answer: ['한강'] },
	
	// [난이도: 보통] (주요 국가 특징, 자연지리, 국기/문화)
	{ category: 'geo', level: 'normal', question: '베트남의 수도는?', answer: ['하노이'] },
	{ category: 'geo', level: 'normal', question: '태국의 수도는?', answer: ['방콕'] },
	{ category: 'geo', level: 'normal', question: '독일의 수도는?', answer: ['베를린'] },
	{ category: 'geo', level: 'normal', question: '이탈리아의 수도는?', answer: ['로마'] },
	{ category: 'geo', level: 'normal', question: '인도의 수도는?', answer: ['뉴델리'] },
	{ category: 'geo', level: 'normal', question: '러시아의 수도는?', answer: ['모스크바'] },
	{ category: 'geo', level: 'normal', question: '대만의 수도는?', answer: ['타이베이', '타이페이'] },
	{ category: 'geo', level: 'normal', question: '필리핀의 수도는?', answer: ['마닐라'] },
	{ category: 'geo', level: 'normal', question: '스페인의 수도는?', answer: ['마드리드'] },
	{ category: 'geo', level: 'normal', question: '그리스의 수도는?', answer: ['아테네'] },
	{ category: 'geo', level: 'normal', question: '지구의 허파라고 불리는 세계 최대의 열대 우림 지역은?', answer: ['아마존'] },
	{ category: 'geo', level: 'normal', question: '아프리카 대륙 북부에 있는 세계 최대의 사막은?', answer: ['사하라', '사하라사막'] },
	{ category: 'geo', level: 'normal', question: '세계에서 가장 긴 강은? (이집트 문명의 발상지)', answer: ['나일강', '나일'] },
	{ category: 'geo', level: 'normal', question: '미국의 50번째 주이자, 태평양 한가운데 있는 섬은?', answer: ['하와이'] },
	{ category: 'geo', level: 'normal', question: '투우와 플라멩코, 가우디 건축물로 유명한 나라는?', answer: ['스페인'] },
	{ category: 'geo', level: 'normal', question: '아프리카 대륙 최남단에 위치한 나라는?', answer: ['남아프리카공화국', '남아공'] },
	{ category: 'geo', level: 'normal', question: '유럽 연합(EU)에서 탈퇴한 섬나라는?', answer: ['영국'] },
	{ category: 'geo', level: 'normal', question: '타지마할이라는 아름다운 건축물이 있는 나라는?', answer: ['인도'] },
	{ category: 'geo', level: 'normal', question: '마추픽추라는 잉카 문명의 유적지가 있는 남미의 나라는?', answer: ['페루'] },
	{ category: 'geo', level: 'normal', question: '세계적인 휴양지 발리(Bali)는 어느 나라의 섬인가?', answer: ['인도네시아'] },
	{ category: 'geo', level: 'normal', question: '싱가포르의 상징으로 사자 머리에 물고기 몸을 한 동상은?', answer: ['머라이언'] },
	{ category: 'geo', level: 'normal', question: '한반도의 허리를 가로지르는 군사 분계선(휴전선)은 위도 몇 도인가?', answer: ['38도', '38선'] },
	{ category: 'geo', level: 'normal', question: '대한민국의 동쪽 끝에 있는 섬은 독도다. 서쪽 끝에 있는 섬은?', answer: ['마안도', '격렬비열도'] }, // 일반 상식선에선 마안도(북한포함) 격렬비열도(남한) -> 격렬비열도 or 백령도 등.. 논란방지 위해 남한 최서단 유인도
	{ category: 'geo', level: 'normal', question: '대한민국 남한의 서쪽 끝에 있는 섬은? (힌트: 인천 옹진군)', answer: ['백령도'] }, // 수정
	{ category: 'geo', level: 'normal', question: '미국과 캐나다 국경에 있는 거대한 폭포는?', answer: ['나이아가라', '나이아가라폭포'] },
	{ category: 'geo', level: 'normal', question: '남미 대륙 서쪽에 길게 뻗어 있는 칠레가 위치한 산맥은?', answer: ['안데스', '안데스산맥'] },
	{ category: 'geo', level: 'normal', question: '유럽의 지붕이라 불리는 스위스, 프랑스, 이탈리아에 걸친 산맥은?', answer: ['알프스', '알프스산맥'] },
	{ category: 'geo', level: 'normal', question: '홍콩과 마카오가 속해 있는 나라는?', answer: ['중국'] },
	{ category: 'geo', level: 'normal', question: '바이킹의 후예로 유명하며, 가구 브랜드 이케아(IKEA)의 나라는?', answer: ['스웨덴'] },
	{ category: 'geo', level: 'normal', question: '북유럽 국가 중 산타클로스의 마을(로바니에미)이 있는 나라는?', answer: ['핀란드'] },
	{ category: 'geo', level: 'normal', question: '맥주와 소시지가 유명하고 옥토버페스트 축제가 열리는 나라는?', answer: ['독일'] },
	{ category: 'geo', level: 'normal', question: '철학자 소크라테스의 고향이자 신화의 나라는?', answer: ['그리스'] },
	{ category: 'geo', level: 'normal', question: '남북한을 합쳐 한반도라고 한다. 3면이 바다인 땅의 형태를 무엇이라 하는가?', answer: ['반도'] },
	{ category: 'geo', level: 'normal', question: '울릉도와 독도 사이에 있는 바다의 이름은?', answer: ['동해'] },
	{ category: 'geo', level: 'normal', question: '제주도에 있는 기생 화산들을 부르는 제주 방언은?', answer: ['오름'] },
	{ category: 'geo', level: 'normal', question: '세계에서 가장 작은 나라는?', answer: ['바티칸', '바티칸시국'] },
	{ category: 'geo', level: 'normal', question: '중국, 인도 다음으로 인구가 많은 천조국이라 불리는 나라는?', answer: ['미국'] },
	{ category: 'geo', level: 'normal', question: '세계 3대 폭포 중 하나로 브라질과 아르헨티나 국경에 있는 폭포는?', answer: ['이과수', '이구아수'] },
	{ category: 'geo', level: 'normal', question: '터키(튀르키예)의 대표적인 열기구 투어 관광지는?', answer: ['카파도키아'] },
	
	// [난이도: 어려움] (헷갈리는 수도, 지리 용어, 특수 지형)
	{ category: 'geo', level: 'hard', question: '호주(오스트레일리아)의 수도는? (시드니 아님)', answer: ['캔버라'] },
	{ category: 'geo', level: 'hard', question: '캐나다의 수도는? (토론토, 밴쿠버 아님)', answer: ['오타와'] },
	{ category: 'geo', level: 'hard', question: '브라질의 수도는? (리우, 상파울루 아님)', answer: ['브라질리아'] },
	{ category: 'geo', level: 'hard', question: '터키(튀르키예)의 수도는? (이스탄불 아님)', answer: ['앙카라'] },
	{ category: 'geo', level: 'hard', question: '스위스의 수도는?', answer: ['베른'] },
	{ category: 'geo', level: 'hard', question: '미국 뉴욕의 랜드마크인 자유의 여신상은 어느 나라가 선물했는가?', answer: ['프랑스'] },
	{ category: 'geo', level: 'hard', question: '지중해와 홍해를 연결하는 이집트의 운하는?', answer: ['수에즈운하', '수에즈'] },
	{ category: 'geo', level: 'hard', question: '태평양과 대서양을 연결하는 파나마의 운하는?', answer: ['파나마운하'] },
	{ category: 'geo', level: 'hard', question: '유럽 대륙과 아프리카 대륙 사이의 좁은 해협은?', answer: ['지브롤터', '지브롤터해협'] },
	{ category: 'geo', level: 'hard', question: '아시아와 북아메리카(알래스카) 사이의 좁은 해협은?', answer: ['베링해협'] },
	{ category: 'geo', level: 'hard', question: '영국 런던의 그리니치 천문대를 지나는 경도 0도 선을 무엇이라 하는가?', answer: ['본초자오선'] },
	{ category: 'geo', level: 'hard', question: '날짜 변경선은 대략 경도 몇 도를 기준으로 하는가?', answer: ['180도'] },
	{ category: 'geo', level: 'hard', question: '세계에서 가장 깊은 바다인 마리아나 해구는 어느 대양에 있는가?', answer: ['태평양'] },
	{ category: 'geo', level: 'hard', question: '세계에서 두 번째로 작은 나라로, 카지노와 F1 그랑프리로 유명한 곳은?', answer: ['모나코'] },
	{ category: 'geo', level: 'hard', question: '남극과 북극 중 펭귄이 사는 곳은?', answer: ['남극'] },
	{ category: 'geo', level: 'hard', question: '남극과 북극 중 북극곰이 사는 곳은?', answer: ['북극'] },
	{ category: 'geo', level: 'hard', question: '사방이 육지로 둘러싸여 바다가 없는 나라를 무엇이라 하는가?', answer: ['내륙국'] },
	{ category: 'geo', level: 'hard', question: '인도네시아, 필리핀처럼 수많은 섬으로 이루어진 나라를 무엇이라 하는가?', answer: ['군도', '도서국'] },
	{ category: 'geo', level: 'hard', question: '대한민국 영토의 4극 중 동쪽 끝은 독도, 남쪽 끝은 어디인가?', answer: ['마라도'] },
	{ category: 'geo', level: 'hard', question: '백두산에서 시작하여 지리산까지 이어지는 한반도의 거대한 산줄기는?', answer: ['백두대간'] },
	{ category: 'geo', level: 'hard', question: '캄보디아 국기에 그려져 있는 거대한 사원 유적지는?', answer: ['앙코르와트'] },
	{ category: 'geo', level: 'hard', question: '사우디아라비아의 종교적 성지로 이슬람교의 창시자 무함마드가 태어난 곳은?', answer: ['메카'] },
	{ category: 'geo', level: 'hard', question: '중국과 네팔 국경에 있는 세계 최고봉 에베레스트의 현지(티베트) 이름은?', answer: ['초모랑마'] },
	{ category: 'geo', level: 'hard', question: '우유니 소금 사막이 있는 남미의 나라는?', answer: ['볼리비아'] },
	{ category: 'geo', level: 'hard', question: '유럽의 화약고라 불리며 제1차 세계대전의 발단이 된 반도는?', answer: ['발칸반도'] },
	{ category: 'geo', level: 'hard', question: '지구 온난화로 인해 국토가 물에 잠기고 있는 남태평양의 섬나라는?', answer: ['투발루'] },
	{ category: 'geo', level: 'hard', question: '몽골의 전통 가옥 이름은?', answer: ['게르'] },
	{ category: 'geo', level: 'hard', question: '뉴질랜드의 원주민 이름은?', answer: ['마오리족'] },
	{ category: 'geo', level: 'hard', question: '호주의 원주민 이름은?', answer: ['애보리진'] },
	{ category: 'geo', level: 'hard', question: '대서양에서 발생한 열대성 저기압은 허리케인, 그럼 태평양에서 발생한 것은?', answer: ['태풍'] },
	
	// ============================================================
	// [지리] 추가 150문제 (쉬움 50 / 보통 50 / 어려움 50)
	// ============================================================
	
	// [난이도: 쉬움] (수도, 유명 랜드마크, 대륙)
	{ category: 'geo', level: 'easy', question: '대한민국의 수도는?', answer: ['서울', '서울특별시'] },
	{ category: 'geo', level: 'easy', question: '일본의 수도는?', answer: ['도쿄', '동경'] },
	{ category: 'geo', level: 'easy', question: '중국의 수도는?', answer: ['베이징', '북경'] },
	{ category: 'geo', level: 'easy', question: '프랑스의 수도는?', answer: ['파리'] },
	{ category: 'geo', level: 'easy', question: '영국의 수도는?', answer: ['런던'] },
	{ category: 'geo', level: 'easy', question: '미국의 수도는?', answer: ['워싱턴', '워싱턴DC'] },
	{ category: 'geo', level: 'easy', question: '세계에서 가장 넓은 면적을 가진 나라는?', answer: ['러시아'] },
	{ category: 'geo', level: 'easy', question: '세계에서 인구가 가장 많은 나라는? (2023년 기준 중국을 추월함)', answer: ['인도'] },
	{ category: 'geo', level: 'easy', question: '에펠탑이 있는 도시는?', answer: ['파리'] },
	{ category: 'geo', level: 'easy', question: '자유의 여신상이 있는 도시는?', answer: ['뉴욕'] },
	{ category: 'geo', level: 'easy', question: '피라미드와 스핑크스가 있는 나라는?', answer: ['이집트'] },
	{ category: 'geo', level: 'easy', question: '만리장성이 있는 나라는?', answer: ['중국'] },
	{ category: 'geo', level: 'easy', question: '대한민국에서 가장 큰 섬은?', answer: ['제주도'] },
	{ category: 'geo', level: 'easy', question: '대한민국에서 가장 높은 산은? (북한 포함)', answer: ['백두산'] },
	{ category: 'geo', level: 'easy', question: '대한민국(남한)에서 가장 높은 산은?', answer: ['한라산'] },
	{ category: 'geo', level: 'easy', question: '독도는 우리땅 노래 가사 중 "경상북도 울릉군 ( )"', answer: ['독도리'] },
	{ category: 'geo', level: 'easy', question: '지구에서 가장 큰 대륙은?', answer: ['아시아'] },
	{ category: 'geo', level: 'easy', question: '지구에서 가장 넓은 바다는?', answer: ['태평양'] },
	{ category: 'geo', level: 'easy', question: '캥거루와 코알라가 사는 나라는?', answer: ['호주', '오스트레일리아'] },
	{ category: 'geo', level: 'easy', question: '신사, 스시, 벚꽃으로 유명한 나라는?', answer: ['일본'] },
	{ category: 'geo', level: 'easy', question: '축구와 삼바 춤으로 유명한 남미의 나라는?', answer: ['브라질'] },
	{ category: 'geo', level: 'easy', question: '장화(부츠) 모양처럼 길게 생긴 유럽의 나라는?', answer: ['이탈리아', '이태리'] },
	{ category: 'geo', level: 'easy', question: '세계에서 가장 높은 산은?', answer: ['에베레스트', '에베레스트산'] },
	{ category: 'geo', level: 'easy', question: '1년 내내 얼음으로 덮여 있는 지구의 남쪽 끝 대륙은?', answer: ['남극'] },
	{ category: 'geo', level: 'easy', question: '사막 위에 세워진 도시로 세계 최고층 빌딩 부르즈 할리파가 있는 곳은?', answer: ['두바이'] },
	{ category: 'geo', level: 'easy', question: '콜로세움과 피자가 유명한 나라는?', answer: ['이탈리아'] },
	{ category: 'geo', level: 'easy', question: '단풍잎(메이플)이 국기에 그려진 나라는?', answer: ['캐나다'] },
	{ category: 'geo', level: 'easy', question: '베트남 쌀국수의 본고장인 나라는?', answer: ['베트남'] },
	{ category: 'geo', level: 'easy', question: '풍차와 튤립의 나라는?', answer: ['네덜란드'] },
	{ category: 'geo', level: 'easy', question: '서울의 중심을 가로지르는 강의 이름은?', answer: ['한강'] },
	{ category: 'geo', level: 'easy', question: '일본에서 가장 높은 산은?', answer: ['후지산'] },
	{ category: 'geo', level: 'easy', question: '미국의 국기 이름은?', answer: ['성조기'] },
	{ category: 'geo', level: 'easy', question: '영국의 국기 이름은?', answer: ['유니온잭'] },
	{ category: 'geo', level: 'easy', question: '대한민국의 동쪽 바다는?', answer: ['동해'] },
	{ category: 'geo', level: 'easy', question: '대한민국의 남쪽 바다는?', answer: ['남해'] },
	{ category: 'geo', level: 'easy', question: '대한민국의 서쪽 바다는?', answer: ['서해', '황해'] },
	{ category: 'geo', level: 'easy', question: '제주도의 옛 이름은?', answer: ['탐라', '탐라국'] },
	{ category: 'geo', level: 'easy', question: '아프리카 초원에 사는 목이 아주 긴 동물은?', answer: ['기린'] },
	{ category: 'geo', level: 'easy', question: '중국의 상징적인 동물로 대나무를 먹는 곰은?', answer: ['판다', '팬더'] },
	{ category: 'geo', level: 'easy', question: '인도의 대표적인 건축물로 하얀 대리석 무덤은?', answer: ['타지마할'] },
	{ category: 'geo', level: 'easy', question: '프랑스 파리에 있는 개선문은 누구의 승리를 기념하기 위한 것인가?', answer: ['나폴레옹'] },
	{ category: 'geo', level: 'easy', question: '세계지도에서 우리나라는 어느 대륙에 속하는가?', answer: ['아시아'] },
	{ category: 'geo', level: 'easy', question: '지구의 북쪽 끝을 무엇이라 하는가?', answer: ['북극'] },
	{ category: 'geo', level: 'easy', question: '우리나라 애국가 1절: 동해물과 ( )이 마르고 닳도록.', answer: ['백두산'] },
	{ category: 'geo', level: 'easy', question: '세계에서 가장 큰 섬은? (호주 제외, 덴마크령)', answer: ['그린란드'] },
	{ category: 'geo', level: 'easy', question: '시계탑 빅벤이 있는 도시는?', answer: ['런던'] },
	{ category: 'geo', level: 'easy', question: '오페라 하우스가 있는 호주의 도시는?', answer: ['시드니'] },
	{ category: 'geo', level: 'easy', question: '할리우드가 있는 미국의 도시는?', answer: ['로스앤젤레스', 'la'] },
	{ category: 'geo', level: 'easy', question: '비빔밥으로 유명한 우리나라는 도시는?', answer: ['전주'] },
	{ category: 'geo', level: 'easy', question: '항구 도시 부산에 있는 유명한 해수욕장은?', answer: ['해운대'] },
	
	// [난이도: 보통] (주요 국가 특징, 자연지리, 국기/문화)
	{ category: 'geo', level: 'normal', question: '베트남의 수도는?', answer: ['하노이'] },
	{ category: 'geo', level: 'normal', question: '태국의 수도는?', answer: ['방콕'] },
	{ category: 'geo', level: 'normal', question: '독일의 수도는?', answer: ['베를린'] },
	{ category: 'geo', level: 'normal', question: '이탈리아의 수도는?', answer: ['로마'] },
	{ category: 'geo', level: 'normal', question: '인도의 수도는?', answer: ['뉴델리'] },
	{ category: 'geo', level: 'normal', question: '러시아의 수도는?', answer: ['모스크바'] },
	{ category: 'geo', level: 'normal', question: '대만의 수도는?', answer: ['타이베이', '타이페이'] },
	{ category: 'geo', level: 'normal', question: '필리핀의 수도는?', answer: ['마닐라'] },
	{ category: 'geo', level: 'normal', question: '스페인의 수도는?', answer: ['마드리드'] },
	{ category: 'geo', level: 'normal', question: '그리스의 수도는?', answer: ['아테네'] },
	{ category: 'geo', level: 'normal', question: '지구의 허파라고 불리는 세계 최대의 열대 우림 지역은?', answer: ['아마존'] },
	{ category: 'geo', level: 'normal', question: '아프리카 대륙 북부에 있는 세계 최대의 사막은?', answer: ['사하라', '사하라사막'] },
	{ category: 'geo', level: 'normal', question: '세계에서 가장 긴 강은? (이집트 문명의 발상지)', answer: ['나일강', '나일'] },
	{ category: 'geo', level: 'normal', question: '미국의 50번째 주이자, 태평양 한가운데 있는 섬은?', answer: ['하와이'] },
	{ category: 'geo', level: 'normal', question: '투우와 플라멩코, 가우디 건축물로 유명한 나라는?', answer: ['스페인'] },
	{ category: 'geo', level: 'normal', question: '아프리카 대륙 최남단에 위치한 나라는?', answer: ['남아프리카공화국', '남아공'] },
	{ category: 'geo', level: 'normal', question: '유럽 연합(EU)에서 탈퇴한 섬나라는?', answer: ['영국'] },
	{ category: 'geo', level: 'normal', question: '타지마할이라는 아름다운 건축물이 있는 나라는?', answer: ['인도'] },
	{ category: 'geo', level: 'normal', question: '마추픽추라는 잉카 문명의 유적지가 있는 남미의 나라는?', answer: ['페루'] },
	{ category: 'geo', level: 'normal', question: '세계적인 휴양지 발리(Bali)는 어느 나라의 섬인가?', answer: ['인도네시아'] },
	{ category: 'geo', level: 'normal', question: '싱가포르의 상징으로 사자 머리에 물고기 몸을 한 동상은?', answer: ['머라이언'] },
	{ category: 'geo', level: 'normal', question: '한반도의 허리를 가로지르는 군사 분계선(휴전선)은 위도 몇 도인가?', answer: ['38도', '38선'] },
	{ category: 'geo', level: 'normal', question: '대한민국의 동쪽 끝에 있는 섬은 독도다. 서쪽 끝에 있는 섬은?', answer: ['마안도', '격렬비열도'] }, 
	{ category: 'geo', level: 'normal', question: '대한민국 남한의 서쪽 끝에 있는 섬은? (힌트: 인천 옹진군)', answer: ['백령도'] }, 
	{ category: 'geo', level: 'normal', question: '미국과 캐나다 국경에 있는 거대한 폭포는?', answer: ['나이아가라', '나이아가라폭포'] },
	{ category: 'geo', level: 'normal', question: '남미 대륙 서쪽에 길게 뻗어 있는 칠레가 위치한 산맥은?', answer: ['안데스', '안데스산맥'] },
	{ category: 'geo', level: 'normal', question: '유럽의 지붕이라 불리는 스위스, 프랑스, 이탈리아에 걸친 산맥은?', answer: ['알프스', '알프스산맥'] },
	{ category: 'geo', level: 'normal', question: '홍콩과 마카오가 속해 있는 나라는?', answer: ['중국'] },
	{ category: 'geo', level: 'normal', question: '바이킹의 후예로 유명하며, 가구 브랜드 이케아(IKEA)의 나라는?', answer: ['스웨덴'] },
	{ category: 'geo', level: 'normal', question: '북유럽 국가 중 산타클로스의 마을(로바니에미)이 있는 나라는?', answer: ['핀란드'] },
	{ category: 'geo', level: 'normal', question: '맥주와 소시지가 유명하고 옥토버페스트 축제가 열리는 나라는?', answer: ['독일'] },
	{ category: 'geo', level: 'normal', question: '철학자 소크라테스의 고향이자 신화의 나라는?', answer: ['그리스'] },
	{ category: 'geo', level: 'normal', question: '남북한을 합쳐 한반도라고 한다. 3면이 바다인 땅의 형태를 무엇이라 하는가?', answer: ['반도'] },
	{ category: 'geo', level: 'normal', question: '울릉도와 독도 사이에 있는 바다의 이름은?', answer: ['동해'] },
	{ category: 'geo', level: 'normal', question: '제주도에 있는 기생 화산들을 부르는 제주 방언은?', answer: ['오름'] },
	{ category: 'geo', level: 'normal', question: '세계에서 가장 작은 나라는?', answer: ['바티칸', '바티칸시국'] },
	{ category: 'geo', level: 'normal', question: '중국, 인도 다음으로 인구가 많은 천조국이라 불리는 나라는?', answer: ['미국'] },
	{ category: 'geo', level: 'normal', question: '세계 3대 폭포 중 하나로 브라질과 아르헨티나 국경에 있는 폭포는?', answer: ['이과수', '이구아수'] },
	{ category: 'geo', level: 'normal', question: '터키(튀르키예)의 대표적인 열기구 투어 관광지는?', answer: ['카파도키아'] },
	{ category: 'geo', level: 'normal', question: '대한민국의 행정 구역 중 유일한 "특별자치시"는?', answer: ['세종', '세종시', '세종특별자치시'] },
	{ category: 'geo', level: 'normal', question: '프랑스 루브르 박물관에 있는 레오나르도 다빈치의 그림은?', answer: ['모나리자'] },
	{ category: 'geo', level: 'normal', question: '이집트의 젖줄이라 불리는 강은?', answer: ['나일강'] },
	{ category: 'geo', level: 'normal', question: '미국의 그랜드 캐니언은 어느 주에 있는가?', answer: ['애리조나'] },
	{ category: 'geo', level: 'normal', question: '호주 대륙의 중앙에 있는 세상의 중심이라 불리는 거대한 바위는?', answer: ['울룰루', '에어즈락'] },
	{ category: 'geo', level: 'normal', question: '세계에서 가장 깊은 호수로, 시베리아의 진주라 불리는 곳은?', answer: ['바이칼', '바이칼호수'] },
	{ category: 'geo', level: 'normal', question: '동남아시아의 젖줄이라 불리는 국제 하천은?', answer: ['메콩강', '메콩'] },
	{ category: 'geo', level: 'normal', question: '독일, 오스트리아, 스위스에서 주로 사용하는 언어는?', answer: ['독일어'] },
	{ category: 'geo', level: 'normal', question: '브라질은 포르투갈어를 쓴다. 나머지 남미 국가들은 대부분 무슨 언어를 쓰는가?', answer: ['스페인어', '에스파냐어'] },
	{ category: 'geo', level: 'normal', question: '영국, 프랑스, 독일 등은 유로화를 쓴다. 영국이 쓰던 화폐 단위는?', answer: ['파운드'] },
	{ category: 'geo', level: 'normal', question: '세계 지도의 기준이 되는 본초 자오선이 지나는 영국의 천문대는?', answer: ['그리니치', '그리니치천문대'] },
	
	// [난이도: 어려움] (헷갈리는 수도, 지리 용어, 특수 지형)
	{ category: 'geo', level: 'hard', question: '호주(오스트레일리아)의 수도는? (시드니 아님)', answer: ['캔버라'] },
	{ category: 'geo', level: 'hard', question: '캐나다의 수도는? (토론토, 밴쿠버 아님)', answer: ['오타와'] },
	{ category: 'geo', level: 'hard', question: '브라질의 수도는? (리우, 상파울루 아님)', answer: ['브라질리아'] },
	{ category: 'geo', level: 'hard', question: '터키(튀르키예)의 수도는? (이스탄불 아님)', answer: ['앙카라'] },
	{ category: 'geo', level: 'hard', question: '스위스의 수도는?', answer: ['베른'] },
	{ category: 'geo', level: 'hard', question: '미국 뉴욕의 랜드마크인 자유의 여신상은 어느 나라가 선물했는가?', answer: ['프랑스'] },
	{ category: 'geo', level: 'hard', question: '지중해와 홍해를 연결하는 이집트의 운하는?', answer: ['수에즈운하', '수에즈'] },
	{ category: 'geo', level: 'hard', question: '태평양과 대서양을 연결하는 파나마의 운하는?', answer: ['파나마운하'] },
	{ category: 'geo', level: 'hard', question: '유럽 대륙과 아프리카 대륙 사이의 좁은 해협은?', answer: ['지브롤터', '지브롤터해협'] },
	{ category: 'geo', level: 'hard', question: '아시아와 북아메리카(알래스카) 사이의 좁은 해협은?', answer: ['베링해협'] },
	{ category: 'geo', level: 'hard', question: '영국 런던의 그리니치 천문대를 지나는 경도 0도 선을 무엇이라 하는가?', answer: ['본초자오선'] },
	{ category: 'geo', level: 'hard', question: '날짜 변경선은 대략 경도 몇 도를 기준으로 하는가?', answer: ['180도'] },
	{ category: 'geo', level: 'hard', question: '세계에서 가장 깊은 바다인 마리아나 해구는 어느 대양에 있는가?', answer: ['태평양'] },
	{ category: 'geo', level: 'hard', question: '세계에서 두 번째로 작은 나라로, 카지노와 F1 그랑프리로 유명한 곳은?', answer: ['모나코'] },
	{ category: 'geo', level: 'hard', question: '남극과 북극 중 펭귄이 사는 곳은?', answer: ['남극'] },
	{ category: 'geo', level: 'hard', question: '남극과 북극 중 북극곰이 사는 곳은?', answer: ['북극'] },
	{ category: 'geo', level: 'hard', question: '사방이 육지로 둘러싸여 바다가 없는 나라를 무엇이라 하는가?', answer: ['내륙국'] },
	{ category: 'geo', level: 'hard', question: '인도네시아, 필리핀처럼 수많은 섬으로 이루어진 나라를 무엇이라 하는가?', answer: ['군도', '도서국'] },
	{ category: 'geo', level: 'hard', question: '대한민국 영토의 4극 중 동쪽 끝은 독도, 남쪽 끝은 어디인가?', answer: ['마라도'] },
	{ category: 'geo', level: 'hard', question: '백두산에서 시작하여 지리산까지 이어지는 한반도의 거대한 산줄기는?', answer: ['백두대간'] },
	{ category: 'geo', level: 'hard', question: '캄보디아 국기에 그려져 있는 거대한 사원 유적지는?', answer: ['앙코르와트'] },
	{ category: 'geo', level: 'hard', question: '사우디아라비아의 종교적 성지로 이슬람교의 창시자 무함마드가 태어난 곳은?', answer: ['메카'] },
	{ category: 'geo', level: 'hard', question: '중국과 네팔 국경에 있는 세계 최고봉 에베레스트의 현지(티베트) 이름은?', answer: ['초모랑마'] },
	{ category: 'geo', level: 'hard', question: '우유니 소금 사막이 있는 남미의 나라는?', answer: ['볼리비아'] },
	{ category: 'geo', level: 'hard', question: '유럽의 화약고라 불리며 제1차 세계대전의 발단이 된 반도는?', answer: ['발칸반도'] },
	{ category: 'geo', level: 'hard', question: '지구 온난화로 인해 국토가 물에 잠기고 있는 남태평양의 섬나라는?', answer: ['투발루'] },
	{ category: 'geo', level: 'hard', question: '몽골의 전통 가옥 이름은?', answer: ['게르'] },
	{ category: 'geo', level: 'hard', question: '뉴질랜드의 원주민 이름은?', answer: ['마오리족'] },
	{ category: 'geo', level: 'hard', question: '호주의 원주민 이름은?', answer: ['애보리진'] },
	{ category: 'geo', level: 'hard', question: '대서양에서 발생한 열대성 저기압은 허리케인, 그럼 태평양에서 발생한 것은?', answer: ['태풍'] },
	{ category: 'geo', level: 'hard', question: '말레이시아의 수도는?', answer: ['쿠알라룸푸르'] },
	{ category: 'geo', level: 'hard', question: '아랍에미리트(UAE)의 수도는? (두바이 아님)', answer: ['아부다비'] },
	{ category: 'geo', level: 'hard', question: '뉴질랜드의 수도는? (오클랜드 아님)', answer: ['웰링턴'] },
	{ category: 'geo', level: 'hard', question: '남아프리카 공화국의 행정 수도는?', answer: ['프리토리아'] },
	{ category: 'geo', level: 'hard', question: '아프리카 대륙에서 가장 높은 산은?', answer: ['킬리만자로'] },
	{ category: 'geo', level: 'hard', question: '사하라 사막 이남의 건조한 초원 지대를 일컫는 말은?', answer: ['사헬', '사헬지대'] },
	{ category: 'geo', level: 'hard', question: '유럽에서 가장 긴 강으로, 러시아를 흐르는 강은?', answer: ['볼가강'] },
	{ category: 'geo', level: 'hard', question: '지중해성 기후의 특징은 여름이 덥고 ( )하다.', answer: ['건조'] },
	{ category: 'geo', level: 'hard', question: '영국, 노르웨이 등에서 볼 수 있는 빙하 침식으로 만들어진 좁고 깊은 만은?', answer: ['피요르드', '피오르'] },
	{ category: 'geo', level: 'hard', question: '미국 서부의 실리콘 밸리는 어느 도시 인근에 있는가?', answer: ['샌프란시스코', '산호세'] },
	{ category: 'geo', level: 'hard', question: '세계에서 가장 인구 밀도가 높은 나라 중 하나인 도시 국가는?', answer: ['싱가포르', '모나코'] },
	{ category: 'geo', level: 'hard', question: '멕시코와 과테말라 지역에서 번성했던 고대 문명은?', answer: ['마야', '마야문명'] },
	{ category: 'geo', level: 'hard', question: '페루의 안데스 산맥에서 번성했던 고대 문명은?', answer: ['잉카', '잉카문명'] },
	{ category: 'geo', level: 'hard', question: '북유럽 5개국(노르웨이, 스웨덴, 핀란드, 덴마크, 아이슬란드)을 통틀어 부르는 말은?', answer: ['스칸디나비아'] }, // 핀란드 제외하기도 하지만 보통 통칭
	{ category: 'geo', level: 'hard', question: '이스라엘과 팔레스타인의 분쟁 지역인 지중해 연안의 좁은 구역은?', answer: ['가자지구'] },
	{ category: 'geo', level: 'hard', question: '아프리카 대륙의 동쪽에 있는 세계에서 4번째로 큰 섬나라는?', answer: ['마다가스카르'] },
	{ category: 'geo', level: 'hard', question: '인도양의 눈물방울이라 불리는 인도 남쪽의 섬나라는?', answer: ['스리랑카'] },
	{ category: 'geo', level: 'hard', question: '세계에서 가장 긴 산맥인 안데스 산맥은 어느 대륙에 있는가?', answer: ['남아메리카', '남미'] },
	{ category: 'geo', level: 'hard', question: '백야 현상은 위도가 ( ) 곳에서 나타난다.', answer: ['높은', '고위도'] },
	{ category: 'geo', level: 'hard', question: '적도 부근의 바다에서 발생하는, 바람이 거의 없는 지대를 무엇이라 하는가?', answer: ['무풍지대'] },
	
	// ============================================================
	// [속담] 100문제 (쉬움 30 / 보통 40 / 어려움 30)
	// ============================================================
	
	// [난이도: 쉬움] (누구나 아는 국민 속담, 뒷부분 채우기)
	{ category: 'proverb', level: 'easy', question: '가는 말이 고와야 ( )이 곱다.', answer: ['오는말'] },
	{ category: 'proverb', level: 'easy', question: '낮말은 새가 듣고 ( )은 쥐가 듣는다.', answer: ['밤말'] },
	{ category: 'proverb', level: 'easy', question: '등잔 밑이 ( ).', answer: ['어둡다'] },
	{ category: 'proverb', level: 'easy', question: '소 잃고 ( ) 고친다.', answer: ['외양간'] },
	{ category: 'proverb', level: 'easy', question: '티끌 모아 ( ).', answer: ['태산'] },
	{ category: 'proverb', level: 'easy', question: '발 없는 ( )이 천 리 간다.', answer: ['말'] },
	{ category: 'proverb', level: 'easy', question: '배보다 ( )이 더 크다.', answer: ['배꼽'] },
	{ category: 'proverb', level: 'easy', question: '병 주고 ( ) 준다.', answer: ['약'] },
	{ category: 'proverb', level: 'easy', question: '세 살 ( ) 여든까지 간다.', answer: ['버릇'] },
	{ category: 'proverb', level: 'easy', question: '식은 ( ) 먹기.', answer: ['죽'] },
	{ category: 'proverb', level: 'easy', question: '아니 땐 굴뚝에 ( ) 나랴.', answer: ['연기'] },
	{ category: 'proverb', level: 'easy', question: '약방에 ( ).', answer: ['감초'] },
	{ category: 'proverb', level: 'easy', question: '우물 안 ( ).', answer: ['개구리'] },
	{ category: 'proverb', level: 'easy', question: '원숭이도 나무에서 ( ).', answer: ['떨어진다', '떨어질때가있다'] },
	{ category: 'proverb', level: 'easy', question: '작은 고추가 ( ).', answer: ['맵다'] },
	{ category: 'proverb', level: 'easy', question: '종로에서 뺨 맞고 ( )에서 화풀이한다.', answer: ['한강'] },
	{ category: 'proverb', level: 'easy', question: '천 리 길도 ( )부터.', answer: ['한걸음'] },
	{ category: 'proverb', level: 'easy', question: '하나를 보면 ( )을 안다.', answer: ['열'] },
	{ category: 'proverb', level: 'easy', question: '호랑이도 제 말 하면 ( ).', answer: ['온다'] },
	{ category: 'proverb', level: 'easy', question: '쥐구멍에도 ( ) 날 있다.', answer: ['볕들'] },
	{ category: 'proverb', level: 'easy', question: '지렁이도 밟으면 ( )한다.', answer: ['꿈틀'] },
	{ category: 'proverb', level: 'easy', question: '꿩 먹고 ( ) 먹고.', answer: ['알'] },
	{ category: 'proverb', level: 'easy', question: '누워서 ( ) 먹기.', answer: ['떡'] },
	{ category: 'proverb', level: 'easy', question: '떡 줄 사람은 생각도 않는데 ( )부터 마신다.', answer: ['김칫국'] },
	{ category: 'proverb', level: 'easy', question: '말 한마디로 ( ) 빚 갚는다.', answer: ['천냥', '천녕'] },
	{ category: 'proverb', level: 'easy', question: '바늘 도둑이 ( ) 도둑 된다.', answer: ['소'] },
	{ category: 'proverb', level: 'easy', question: '뱁새가 ( ) 따라가면 가랑이가 찢어진다.', answer: ['황새'] },
	{ category: 'proverb', level: 'easy', question: '사공이 많으면 배가 ( )으로 간다.', answer: ['산'] },
	{ category: 'proverb', level: 'easy', question: '쇠뿔도 단김에 ( ).', answer: ['빼라'] },
	{ category: 'proverb', level: 'easy', question: '아는 길도 ( ) 가라.', answer: ['물어', '물어서'] },
	
	// [난이도: 보통] (핵심 키워드 채우기, 약간 긴 속담)
	{ category: 'proverb', level: 'normal', question: '가재는 ( ) 편.', answer: ['게'] },
	{ category: 'proverb', level: 'normal', question: '같은 값이면 ( ).', answer: ['다홍치마'] },
	{ category: 'proverb', level: 'normal', question: '개천에서 ( ) 난다.', answer: ['용'] },
	{ category: 'proverb', level: 'normal', question: '고래 싸움에 ( ) 등 터진다.', answer: ['새우'] },
	{ category: 'proverb', level: 'normal', question: '고양이 목에 ( ) 달기.', answer: ['방울'] },
	{ category: 'proverb', level: 'normal', question: '공든 ( )이 무너지랴.', answer: ['탑'] },
	{ category: 'proverb', level: 'normal', question: '구슬이 서 말이라도 꿰어야 ( ).', answer: ['보배'] },
	{ category: 'proverb', level: 'normal', question: '급할수록 ( ) 가라.', answer: ['돌아', '돌아서'] },
	{ category: 'proverb', level: 'normal', question: '금강산도 ( )경.', answer: ['식후'] },
	{ category: 'proverb', level: 'normal', question: '기는 놈 위에 ( ) 놈 있다.', answer: ['나는'] },
	{ category: 'proverb', level: 'normal', question: '까마귀 날자 ( ) 떨어진다.', answer: ['배'] },
	{ category: 'proverb', level: 'normal', question: '남의 잔치에 ( ) 놔라 배 놔라 한다.', answer: ['감'] },
	{ category: 'proverb', level: 'normal', question: '낫 놓고 ( ) 자도 모른다.', answer: ['기역', 'ㄱ'] },
	{ category: 'proverb', level: 'normal', question: '닭 쫓던 ( ) 지붕 쳐다보듯.', answer: ['개'] },
	{ category: 'proverb', level: 'normal', question: '돌다리도 ( ) 보고 건너라.', answer: ['두들겨'] },
	{ category: 'proverb', level: 'normal', question: '똥 묻은 개가 ( ) 묻은 개 나무란다.', answer: ['겨'] },
	{ category: 'proverb', level: 'normal', question: '밑 빠진 ( )에 물 붓기.', answer: ['독'] },
	{ category: 'proverb', level: 'normal', question: '벼는 익을수록 ( )를 숙인다.', answer: ['고개'] },
	{ category: 'proverb', level: 'normal', question: '백지장도 맞들면 ( ).', answer: ['낫다'] },
	{ category: 'proverb', level: 'normal', question: '사촌이 땅을 사면 ( )가 아프다.', answer: ['배'] },
	{ category: 'proverb', level: 'normal', question: '서당 개 삼 년이면 ( )을 읊는다.', answer: ['풍월'] },
	{ category: 'proverb', level: 'normal', question: '수박 ( ) 핥기.', answer: ['겉'] },
	{ category: 'proverb', level: 'normal', question: '숭어가 뛰니 ( )도 뛴다.', answer: ['망둥이'] },
	{ category: 'proverb', level: 'normal', question: '십 년이면 ( )도 변한다.', answer: ['강산'] },
	{ category: 'proverb', level: 'normal', question: '싼 게 ( ).', answer: ['비지떡'] },
	{ category: 'proverb', level: 'normal', question: '아는 게 ( ).', answer: ['병', '힘'] }, // 아는 게 힘도 있지만 보통 병/힘 둘 다 허용하거나 문제 의도에 따라. (여기선 오답 처리를 유연하게) -> '병'이 더 속담다운 반전이 있음.
	{ category: 'proverb', level: 'normal', question: '얌전한 고양이가 ( )에 올라간다.', answer: ['부뚜막'] },
	{ category: 'proverb', level: 'normal', question: '열 길 물속은 알아도 한 길 ( ) 속은 모른다.', answer: ['사람'] },
	{ category: 'proverb', level: 'normal', question: '오르지 못할 ( )는 쳐다보지도 마라.', answer: ['나무'] },
	{ category: 'proverb', level: 'normal', question: '옥에 ( ).', answer: ['티'] },
	{ category: 'proverb', level: 'normal', question: '옷이 ( )다.', answer: ['날개'] },
	{ category: 'proverb', level: 'normal', question: '울며 ( ) 먹기.', answer: ['겨자'] },
	{ category: 'proverb', level: 'normal', question: '웃는 낯에 ( ) 못 뱉는다.', answer: ['침'] },
	{ category: 'proverb', level: 'normal', question: '입이 열 개라도 할 ( )이 없다.', answer: ['말'] },
	{ category: 'proverb', level: 'normal', question: '자라 보고 놀란 가슴 ( ) 보고 놀란다.', answer: ['솥뚜껑'] },
	{ category: 'proverb', level: 'normal', question: '장고 끝에 ( ) 둔다.', answer: ['악수'] },
	{ category: 'proverb', level: 'normal', question: '재주는 곰이 부리고 돈은 ( )이 챙긴다.', answer: ['되놈', '왕서방', '주인'] },
	{ category: 'proverb', level: 'normal', question: '절이 싫으면 ( )이 떠나야 한다.', answer: ['중'] },
	{ category: 'proverb', level: 'normal', question: '찬물도 위아래 ( )가 있다.', answer: ['순서', '차례'] }, // 둘 다 정답 인정 필요
	{ category: 'proverb', level: 'normal', question: '칼로 ( ) 베기.', answer: ['물'] },
	
	// [난이도: 어려움] (비유적 표현, 특정 단어, 헷갈리는 속담)
	{ category: 'proverb', level: 'hard', question: '가랑비에 ( ) 젖는 줄 모른다.', answer: ['옷'] },
	{ category: 'proverb', level: 'hard', question: '간에 붙었다 ( )에 붙었다 한다.', answer: ['쓸개'] },
	{ category: 'proverb', level: 'hard', question: '감 나무 밑에 누워 ( ) 떨어지기를 기다린다.', answer: ['감', '홍시'] },
	{ category: 'proverb', level: 'hard', question: '개 팔자가 ( )다.', answer: ['상팔자'] },
	{ category: 'proverb', level: 'hard', question: '고생 끝에 ( )이 온다.', answer: ['낙'] },
	{ category: 'proverb', level: 'hard', question: '구더기 무서워 ( ) 못 담글까.', answer: ['장'] },
	{ category: 'proverb', level: 'hard', question: '굿이나 보고 ( )이나 먹자.', answer: ['떡'] },
	{ category: 'proverb', level: 'hard', question: '귀에 걸면 귀걸이, ( )에 걸면 코걸이.', answer: ['코'] },
	{ category: 'proverb', level: 'hard', question: '그림의 ( ).', answer: ['떡'] },
	{ category: 'proverb', level: 'hard', question: '꿩 대신 ( ).', answer: ['닭'] },
	{ category: 'proverb', level: 'hard', question: '남의 떡이 더 ( ) 보인다.', answer: ['커'] },
	{ category: 'proverb', level: 'hard', question: '내 코가 ( ) 자.', answer: ['석'] },
	{ category: 'proverb', level: 'hard', question: '누워서 ( ) 뱉기.', answer: ['침'] },
	{ category: 'proverb', level: 'hard', question: '다 된 ( )에 재 뿌리기.', answer: ['밥', '죽'] }, // 보통 밥
	{ category: 'proverb', level: 'hard', question: '달면 삼키고 쓰면 ( ).', answer: ['뱉는다'] },
	{ category: 'proverb', level: 'hard', question: '도둑이 ( ) 저린다.', answer: ['제발', '제발이'] },
	{ category: 'proverb', level: 'hard', question: '목구멍이 ( )이다.', answer: ['포도청'] },
	{ category: 'proverb', level: 'hard', question: '믿는 ( )에 발등 찍힌다.', answer: ['도끼'] },
	{ category: 'proverb', level: 'hard', question: '밑져야 ( ).', answer: ['본전'] },
	{ category: 'proverb', level: 'hard', question: '벼룩도 ( )이 있다.', answer: ['낯짝'] },
	{ category: 'proverb', level: 'hard', question: '부부 싸움은 ( ) 베기.', answer: ['칼로물'] },
	{ category: 'proverb', level: 'hard', question: '비 온 뒤에 ( ) 굳는다.', answer: ['땅', '땅이'] },
	{ category: 'proverb', level: 'hard', question: '사후 ( ). (죽은 뒤에 약을 짓는다는 뜻)', answer: ['약방문'] },
	{ category: 'proverb', level: 'hard', question: '산 입에 ( ) 치랴.', answer: ['거미줄'] },
	{ category: 'proverb', level: 'hard', question: '새 발의 ( ). (아주 적은 양)', answer: ['피'] },
	{ category: 'proverb', level: 'hard', question: '소 귀에 ( ) 읽기.', answer: ['경'] },
	{ category: 'proverb', level: 'hard', question: '언 발에 ( ) 누기.', answer: ['오줌'] },
	{ category: 'proverb', level: 'hard', question: '우물을 파도 ( ) 우물을 파라.', answer: ['한'] },
	{ category: 'proverb', level: 'hard', question: '핑계 없는 ( ) 없다.', answer: ['무덤'] },
	{ category: 'proverb', level: 'hard', question: '하늘이 무너져도 ( ) 구멍은 있다.', answer: ['솟아날'] },

	// ============================================================
	// [인물] 100문제 (쉬움 30 / 보통 40 / 어려움 30)
	// ============================================================
	
	// [난이도: 쉬움] (사진만 봐도 아는 유명인, 국민 영웅)
	{ category: 'people', level: 'easy', question: '스마트폰 아이폰을 만든 애플의 창업자는?', answer: ['스티브잡스', '잡스'] },
	{ category: 'people', level: 'easy', question: '피겨 여왕이라고 불리는 대한민국의 전 피겨 스케이팅 선수는?', answer: ['김연아'] },
	{ category: 'people', level: 'easy', question: '한글을 창제한 조선의 제4대 왕은?', answer: ['세종대왕', '세종'] },
	{ category: 'people', level: 'easy', question: '거북선을 만든 조선의 장군은?', answer: ['이순신', '이순신장군'] },
	{ category: 'people', level: 'easy', question: '전구를 발명한 발명왕은?', answer: ['에디슨'] },
	{ category: 'people', level: 'easy', question: '축구선수 손흥민의 소속팀(2024 기준)은?', answer: ['토트넘'] },
	{ category: 'people', level: 'easy', question: '강남스타일로 세계적인 인기를 얻은 가수는?', answer: ['싸이'] },
	{ category: 'people', level: 'easy', question: '미국의 16대 대통령으로 흑인 노예 해방을 이끈 인물은?', answer: ['링컨'] },
	{ category: 'people', level: 'easy', question: '세계적인 K-POP 그룹으로 "Dynamite", "Butter"를 부른 그룹은?', answer: ['BTS', '방탄소년단'] },
	{ category: 'people', level: 'easy', question: 'e스포츠의 살아있는 전설, T1 소속의 프로게이머는?', answer: ['페이커', '이상혁'] },
	{ category: 'people', level: 'easy', question: '무한도전, 런닝맨의 MC이자 국민 MC로 불리는 코미디언은?', answer: ['유재석'] },
	{ category: 'people', level: 'easy', question: '3.1 운동을 주도한 대표적인 여성 독립운동가는?', answer: ['유관순', '유관순열사'] },
	{ category: 'people', level: 'easy', question: '산타클로스의 모델이 된 성인은?', answer: ['성니콜라스', '세인트니콜라스'] }, // 그냥 산타클로스라고 답하는 경우 방지 질문 의도: 인물
	{ category: 'people', level: 'easy', question: '크리스마스에 선물을 주는 할아버지는?', answer: ['산타클로스', '산타'] },
	{ category: 'people', level: 'easy', question: '대한민국의 초대 대통령은?', answer: ['이승만'] },
	{ category: 'people', level: 'easy', question: '백범 일지를 쓴 독립운동가는?', answer: ['김구', '백범김구'] },
	{ category: 'people', level: 'easy', question: '동화 <인어공주>, <미운 오리 새끼>를 쓴 작가는?', answer: ['안데르센'] },
	{ category: 'people', level: 'easy', question: '만유인력을 발견한 과학자는?', answer: ['뉴턴'] },
	{ category: 'people', level: 'easy', question: '삼국지에서 유비, 관우와 도원결의를 맺은 장비의 형제는?', answer: ['장비'] }, // 질문 오류 수정: 유비 관우와 형제인 사람은? -> 장비
	{ category: 'people', level: 'easy', question: '고려를 건국한 왕은?', answer: ['왕건'] },
	{ category: 'people', level: 'easy', question: '조선을 건국한 왕은?', answer: ['이성계'] },
	{ category: 'people', level: 'easy', question: '오천 원권 지폐에 있는 인물은?', answer: ['이이', '율곡이이'] },
	{ category: 'people', level: 'easy', question: '오만 원권 지폐에 있는 인물은?', answer: ['신사임당'] },
	{ category: 'people', level: 'easy', question: '배구 여제로 불리는 식빵언니라는 별명을 가진 선수는?', answer: ['김연경'] },
	{ category: 'people', level: 'easy', question: '영화 <기생충>을 만든 영화감독은?', answer: ['봉준호'] },
	{ category: 'people', level: 'easy', question: '미국 최초의 흑인 대통령은?', answer: ['오바마'] },
	{ category: 'people', level: 'easy', question: '마이크로소프트(MS)의 창업자는?', answer: ['빌게이츠'] },
	{ category: 'people', level: 'easy', question: '페이스북(메타)의 창업자는?', answer: ['마크주커버그', '주커버그'] },
	{ category: 'people', level: 'easy', question: '테슬라와 스페이스X의 CEO는?', answer: ['일론머스크', '머스크'] },
	{ category: 'people', level: 'easy', question: '만화 캐릭터 미키마우스를 만든 사람은?', answer: ['월트디즈니', '디즈니'] },
	
	// [난이도: 보통] (업적을 통해 유추해야 하는 인물)
	{ category: 'people', level: 'normal', question: '상대성 이론을 발표한 천재 물리학자는?', answer: ['아인슈타인'] },
	{ category: 'people', level: 'normal', question: '비행기를 최초로 발명한 형제는?', answer: ['라이트형제'] },
	{ category: 'people', level: 'normal', question: '귀가 들리지 않음에도 운명 교향곡을 작곡한 음악가는?', answer: ['베토벤'] },
	{ category: 'people', level: 'normal', question: '백의의 천사라고 불리는 간호사의 대명사는?', answer: ['나이팅게일'] },
	{ category: 'people', level: 'normal', question: '미국의 흑인 해방 운동가로 "I have a dream" 연설을 한 목사는?', answer: ['마틴루터킹', '킹목사'] },
	{ category: 'people', level: 'normal', question: '인도의 비폭력 불복종 운동가는?', answer: ['간디'] },
	{ category: 'people', level: 'normal', question: '음악의 신동이라고 불리는 오스트리아의 작곡가는?', answer: ['모차르트'] },
	{ category: 'people', level: 'normal', question: '동의보감을 지은 조선의 의관은?', answer: ['허준'] },
	{ category: 'people', level: 'normal', question: '최초의 여성 노벨상 수상자이자 라듐을 발견한 과학자는?', answer: ['퀴리부인', '마리퀴리'] },
	{ category: 'people', level: 'normal', question: '한국인 최초의 메이저리거 야구선수는?', answer: ['박찬호'] },
	{ category: 'people', level: 'normal', question: '골프 황제로 불리는 미국의 골프 선수는?', answer: ['타이거우즈'] },
	{ category: 'people', level: 'normal', question: '농구 황제로 불리며 시카고 불스에서 활약한 선수는?', answer: ['마이클조던', '조던'] },
	{ category: 'people', level: 'normal', question: '진화론을 주장한 생물학자는?', answer: ['다윈', '찰스다윈'] },
	{ category: 'people', level: 'normal', question: '소설 <해리포터> 시리즈를 쓴 작가는?', answer: ['롤링', '조앤롤링'] },
	{ category: 'people', level: 'normal', question: '소설 <반지의 제왕>을 쓴 작가는?', answer: ['톨킨'] },
	{ category: 'people', level: 'normal', question: '한국 라면의 원조 삼양라면을 만든 창업주는 전중윤, 신라면을 만든 농심 창업주는?', answer: ['신춘호'] },
	{ category: 'people', level: 'normal', question: '조선 후기 실학자로 목민심서를 저술한 인물은?', answer: ['정약용'] },
	{ category: 'people', level: 'normal', question: '한국인 최초로 노벨 평화상을 수상한 대통령은?', answer: ['김대중'] },
	{ category: 'people', level: 'normal', question: '조선시대 거상으로, 제주도 기근 때 쌀을 풀어 백성을 구한 여성 상인은?', answer: ['김만덕'] },
	{ category: 'people', level: 'normal', question: '안중근 의사가 저격한 일본의 정치가 이름은?', answer: ['이토히로부미'] },
	{ category: 'people', level: 'normal', question: '프랑스의 영웅이자 성녀로 백년전쟁을 승리로 이끈 인물은?', answer: ['잔다르크'] },
	{ category: 'people', level: 'normal', question: '이탈리아의 탐험가로 아메리카 대륙을 발견한 사람은?', answer: ['콜럼버스'] },
	{ category: 'people', level: 'normal', question: '세계 최초로 달에 착륙한 우주인은?', answer: ['닐암스트롱', '암스트롱'] },
	{ category: 'people', level: 'normal', question: '희극인 찰리 채플린과 동시대에 활동한 독일의 독재자는?', answer: ['히틀러'] },
	{ category: 'people', level: 'normal', question: '르네상스 시대를 대표하는 화가로 모나리자를 그린 사람은?', answer: ['다빈치'] },
	{ category: 'people', level: 'normal', question: '해바라기를 그린 네덜란드의 화가는?', answer: ['고흐', '반고흐'] },
	{ category: 'people', level: 'normal', question: '생각하는 사람을 조각한 프랑스의 조각가는?', answer: ['로댕'] },
	{ category: 'people', level: 'normal', question: '피아노의 시인이라 불리는 폴란드의 음악가는?', answer: ['쇼팽'] },
	{ category: 'people', level: 'normal', question: '컴퓨터의 아버지라 불리는 영국의 수학자는?', answer: ['앨런튜링', '튜링'] },
	{ category: 'people', level: 'normal', question: '소설 <셜록 홈즈>를 쓴 작가는?', answer: ['코난도일'] },
	{ category: 'people', level: 'normal', question: '현대 경영학의 아버지라 불리는 사람은?', answer: ['피터드러커'] }, // 난이도 상향 가능하지만 보통 경영학 상식
	{ category: 'people', level: 'normal', question: '소설 <어린 왕자>를 쓴 작가는?', answer: ['생텍쥐페리'] },
	{ category: 'people', level: 'normal', question: '투자 귀재, 오마하의 현인이라 불리는 주식 투자가는?', answer: ['워렌버핏', '버핏'] },
	{ category: 'people', level: 'normal', question: '임진왜란 때 행주대첩을 이끈 장군은?', answer: ['권율'] },
	{ category: 'people', level: 'normal', question: '삼국통일의 위업을 달성한 신라의 장군은?', answer: ['김유신'] },
	{ category: 'people', level: 'normal', question: '고려 말 화약과 화포를 만들어 왜구를 물리친 인물은?', answer: ['최무선'] },
	{ category: 'people', level: 'normal', question: '대동여지도를 만든 조선의 지리학자는?', answer: ['김정호'] },
	{ category: 'people', level: 'normal', question: '일제강점기 "서시", "별 헤는 밤"을 쓴 시인은?', answer: ['윤동주'] },
	{ category: 'people', level: 'normal', question: '소설 <토지>를 쓴 한국의 대하소설 작가는?', answer: ['박경리'] },
	{ category: 'people', level: 'normal', question: '삼성 그룹의 창업주는?', answer: ['이병철'] },
	
	// [난이도: 어려움] (구체적 업적, 철학자, 예술가, 헷갈리는 인물)
	{ category: 'people', level: 'hard', question: '정신분석학의 창시자로 꿈의 해석을 쓴 인물은?', answer: ['프로이트'] },
	{ category: 'people', level: 'hard', question: '진화론을 주장한 찰스 다윈의 저서 이름은?', answer: ['종의기원'] }, // 책 이름이지만 다윈 관련 심화
	{ category: 'people', level: 'hard', question: '알프레드 노벨은 다이너마이트를 발명했다. 그는 어느 나라 사람인가?', answer: ['스웨덴'] },
	{ category: 'people', level: 'hard', question: '서양 최초의 금속 활자를 발명한 사람은?', answer: ['구텐베르크'] },
	{ category: 'people', level: 'hard', question: '아프리카의 성자라 불리며 의료 봉사를 했던 의사는?', answer: ['슈바이처'] },
	{ category: 'people', level: 'hard', question: '남아공 최초의 흑인 대통령으로 노벨 평화상을 수상한 인물은?', answer: ['만델라', '넬슨만델라'] },
	{ category: 'people', level: 'hard', question: '쿠바 혁명을 이끈 아르헨티나 출신의 혁명가는?', answer: ['체게바라'] },
	{ category: 'people', level: 'hard', question: '제2차 세계대전 당시 영국의 총리로 "V(승리)" 사인을 유행시킨 인물은?', answer: ['처칠', '윈스턴처칠'] },
	{ category: 'people', level: 'hard', question: '미국의 35대 대통령으로, 암살당한 비운의 대통령은?', answer: ['케네디', '존에프케네디'] },
	{ category: 'people', level: 'hard', question: '세계 최초로 우주 비행에 성공한 소련의 우주인은?', answer: ['가가린', '유리가가린'] },
	{ category: 'people', level: 'hard', question: '세계 일주를 최초로 성공한 탐험가는? (본인은 도중에 사망함)', answer: ['마젤란'] },
	{ category: 'people', level: 'hard', question: '몽골 제국을 건설한 정복자는?', answer: ['징기스칸', '칭기즈칸'] },
	{ category: 'people', level: 'hard', question: '그리스의 철학자로 "너 자신을 알라"라는 말을 남긴 사람은?', answer: ['소크라테스'] },
	{ category: 'people', level: 'hard', question: '공산주의의 창시자로 <자본론>을 쓴 인물은?', answer: ['마르크스'] },
	{ category: 'people', level: 'hard', question: '이탈리아의 천문학자로 "그래도 지구는 돈다"라고 말한 사람은?', answer: ['갈릴레이', '갈릴레오'] },
	{ category: 'people', level: 'hard', question: '음악의 아버지라 불리는 바로크 시대 작곡가는?', answer: ['바흐'] },
	{ category: 'people', level: 'hard', question: '교향곡의 아버지라 불리는 고전파 작곡가는?', answer: ['하이든'] },
	{ category: 'people', level: 'hard', question: '점묘법을 사용하여 <그랑드 자트 섬의 일요일 오후>를 그린 화가는?', answer: ['쇠라'] },
	{ category: 'people', level: 'hard', question: '변기를 미술관에 전시하여 현대 미술에 충격을 준 작가는?', answer: ['뒤샹', '마르셀뒤샹'] },
	{ category: 'people', level: 'hard', question: '비디오 아트의 창시자인 한국 출신의 예술가는?', answer: ['백남준'] },
	{ category: 'people', level: 'hard', question: '조선 후기 화가로 <몽유도원도>를 그린 사람은?', answer: ['안견'] }, // 역사 퀴즈와 겹칠 수 있으나 인물 중심
	{ category: 'people', level: 'hard', question: '조선 후기 <대동여지도>를 만든 김정호의 호는?', answer: ['고산자'] },
	{ category: 'people', level: 'hard', question: '소설 <레미제라블>과 <노트르담 드 파리>를 쓴 프랑스 작가는?', answer: ['빅토르위고', '위고'] },
	{ category: 'people', level: 'hard', question: '소설 <죄와 벌>을 쓴 러시아의 작가는?', answer: ['도스토예프스키'] },
	{ category: 'people', level: 'hard', question: '영화 <새>, <싸이코>를 만든 서스펜스의 거장 감독은?', answer: ['히치콕', '알프레도 히치콕'] },
	{ category: 'people', level: 'hard', question: '세계적인 물리학자로 블랙홀 연구에 공헌했으며 루게릭병을 앓았던 인물은?', answer: ['호킹', '스티븐호킹'] },
	{ category: 'people', level: 'hard', question: '애플의 공동 창업자로 스티브 잡스와 함께 애플 I을 개발한 엔지니어는?', answer: ['워즈니악', '스티브워즈니악'] },
	{ category: 'people', level: 'hard', question: '미국의 자동차 왕으로 불리며 포드 자동차를 설립한 인물은?', answer: ['헨리포드', '포드'] },
	{ category: 'people', level: 'hard', question: '나폴레옹에게 패배를 안겨준 워털루 전투의 영국 장군은?', answer: ['웰링턴'] },
	{ category: 'people', level: 'hard', question: '삼국지에서 조조의 책사로 유명하며 "죽은 공명이 산 중달을 쫓았다"의 중달은 누구인가?', answer: ['사마의'] },
	// ============================================================
	// [인물] 추가 150문제 (쉬움 50 / 보통 50 / 어려움 50)
	// ============================================================
	
	// [난이도: 쉬움] (국민 가수, 배우, 스포츠 스타, 위인)
	{ category: 'people', level: 'easy', question: '국민 MC로 불리며 <무한도전>, <런닝맨>, <유퀴즈>를 진행한 방송인은?', answer: ['유재석'] },
	{ category: 'people', level: 'easy', question: '대한민국의 축구 영웅으로, 2002년 월드컵 4강 신화의 주역이자 "해버지"로 불리는 선수는?', answer: ['박지성'] },
	{ category: 'people', level: 'easy', question: '"좋은 날", "너랑 나"를 부른 대한민국의 대표 여성 솔로 가수는?', answer: ['아이유', 'iu'] },
	{ category: 'people', level: 'easy', question: '영화 <범죄도시> 시리즈의 기획자이자 주연 배우인 "마블리"는?', answer: ['마동석'] },
	{ category: 'people', level: 'easy', question: '트로트 가수로 "임히어로"라는 별명을 가진 가수는?', answer: ['임영웅'] },
	{ category: 'people', level: 'easy', question: '걸그룹 블랙핑크의 멤버로 "Solo"라는 곡을 발표한 가수는?', answer: ['제니'] },
	{ category: 'people', level: 'easy', question: '대한민국의 메이저리거로 "코리안 몬스터"라 불리는 야구 선수는?', answer: ['류현진'] },
	{ category: 'people', level: 'easy', question: '조선의 제4대 왕으로 한글을 만든 왕은?', answer: ['세종대왕', '세종'] },
	{ category: 'people', level: 'easy', question: '임진왜란 때 거북선으로 왜군을 물리친 장군은?', answer: ['이순신'] },
	{ category: 'people', level: 'easy', question: '독립운동가로 하얼빈 역에서 이토 히로부미를 저격한 사람은?', answer: ['안중근'] },
	{ category: 'people', level: 'easy', question: '3.1 만세 운동을 주도한 대표적인 여성 독립운동가는?', answer: ['유관순'] },
	{ category: 'people', level: 'easy', question: '우리나라 애국가를 작곡한 사람은?', answer: ['안익태'] },
	{ category: 'people', level: 'easy', question: '어린이날을 만든 분은?', answer: ['방정환', '소파방정환'] },
	{ category: 'people', level: 'easy', question: '미국의 초대 대통령은?', answer: ['워싱턴', '조지워싱턴'] },
	{ category: 'people', level: 'easy', question: '아이폰과 아이패드를 만든 애플의 창업자는?', answer: ['스티브잡스', '잡스'] },
	{ category: 'people', level: 'easy', question: '윈도우(Windows)를 만든 마이크로소프트의 창업자는?', answer: ['빌게이츠'] },
	{ category: 'people', level: 'easy', question: '전구를 발명한 발명왕은?', answer: ['에디슨'] },
	{ category: 'people', level: 'easy', question: '만유인력을 발견한 과학자는?', answer: ['뉴턴'] },
	{ category: 'people', level: 'easy', question: '피겨 스케이팅 금메달리스트로 "피겨 여왕"이라 불리는 선수는?', answer: ['김연아'] },
	{ category: 'people', level: 'easy', question: '축구 선수 손흥민의 소속팀(2024년 기준)은?', answer: ['토트넘', '토트넘홋스퍼'] },
	{ category: 'people', level: 'easy', question: '강남스타일로 세계적인 인기를 끈 가수는?', answer: ['싸이'] },
	{ category: 'people', level: 'easy', question: '오징어 게임의 주연 배우로 "깐부" 할아버지와 호흡을 맞춘 배우는?', answer: ['이정재'] },
	{ category: 'people', level: 'easy', question: '영화 <아이언맨>의 주인공 토니 스타크를 연기한 배우는?', answer: ['로버트다우니주니어', '로다주'] },
	{ category: 'people', level: 'easy', question: '만화 캐릭터 미키마우스를 만든 사람은?', answer: ['월트디즈니', '디즈니'] },
	{ category: 'people', level: 'easy', question: '산타클로스의 유래가 된 성인은?', answer: ['성니콜라스', '세인트니콜라스'] },
	{ category: 'people', level: 'easy', question: '대한민국의 초대 대통령은?', answer: ['이승만'] },
	{ category: 'people', level: 'easy', question: '백범 일지를 쓴 독립운동가는?', answer: ['김구', '백범김구'] },
	{ category: 'people', level: 'easy', question: '5만원권 지폐에 그려진 인물은?', answer: ['신사임당'] },
	{ category: 'people', level: 'easy', question: '1만원권 지폐에 그려진 인물은?', answer: ['세종대왕'] },
	{ category: 'people', level: 'easy', question: '5천원권 지폐에 그려진 인물은?', answer: ['율곡이이', '이이'] },
	{ category: 'people', level: 'easy', question: '1천원권 지폐에 그려진 인물은?', answer: ['퇴계이황', '이황'] },
	{ category: 'people', level: 'easy', question: '세계에서 가장 부자인 인물 중 한 명으로 테슬라 CEO는?', answer: ['일론머스크', '머스크'] },
	{ category: 'people', level: 'easy', question: '축구의 신이라 불리는 아르헨티나의 선수는?', answer: ['메시', '리오넬메시'] },
	{ category: 'people', level: 'easy', question: '메시의 라이벌로 불리는 포르투갈의 축구 선수는?', answer: ['호날두'] },
	{ category: 'people', level: 'easy', question: '농구 황제라고 불리는 전설적인 선수는?', answer: ['마이클조던', '조던'] },
	{ category: 'people', level: 'easy', question: '골프 황제라고 불리는 미국의 선수는?', answer: ['타이거우즈'] },
	{ category: 'people', level: 'easy', question: '베트남의 축구 영웅으로 불린 한국인 감독은?', answer: ['박항서'] },
	{ category: 'people', level: 'easy', question: '봉준호 감독의 영화 <기생충>은 칸 영화제에서 무슨 상을 받았나?', answer: ['황금종려상'] },
	{ category: 'people', level: 'easy', question: '소설 <해리포터> 시리즈를 쓴 작가는?', answer: ['조앤롤링', '롤링'] },
	{ category: 'people', level: 'easy', question: '노벨 평화상을 수상한 한국의 전 대통령은?', answer: ['김대중'] },
	{ category: 'people', level: 'easy', question: '미국 최초의 흑인 대통령은?', answer: ['오바마', '버락오바마'] },
	{ category: 'people', level: 'easy', question: '러시아의 현재(2024년 기준) 대통령은?', answer: ['푸틴'] },
	{ category: 'people', level: 'easy', question: '북한의 현재 최고 지도자는?', answer: ['김정은'] },
	{ category: 'people', level: 'easy', question: '페이스북(메타)을 창업한 사람은?', answer: ['마크주커버그', '주커버그'] },
	{ category: 'people', level: 'easy', question: '삼성 그룹의 창업주는?', answer: ['이병철'] },
	{ category: 'people', level: 'easy', question: '현대 그룹의 창업주는?', answer: ['정주영'] },
	{ category: 'people', level: 'easy', question: '우리나라 최초의 우주인은?', answer: ['이소연'] },
	{ category: 'people', level: 'easy', question: '동화 <인어공주>, <미운 오리 새끼>를 쓴 작가는?', answer: ['안데르센'] },
	{ category: 'people', level: 'easy', question: '피카소는 어느 나라 화가인가?', answer: ['스페인'] }, // 인물 관련 쉬운 상식
	
	// [난이도: 보통] (역사적 업적, 예술가, 기업가)
	{ category: 'people', level: 'normal', question: '상대성 이론을 발표한 물리학자는?', answer: ['아인슈타인'] },
	{ category: 'people', level: 'normal', question: '진화론을 주장한 영국의 생물학자는?', answer: ['다윈', '찰스다윈'] },
	{ category: 'people', level: 'normal', question: '비행기를 최초로 발명한 형제는?', answer: ['라이트형제'] },
	{ category: 'people', level: 'normal', question: '전화기를 발명한 사람은?', answer: ['벨', '알렉산더벨'] },
	{ category: 'people', level: 'normal', question: '라듐을 발견하여 노벨상을 두 번 받은 과학자는?', answer: ['퀴리부인', '마리퀴리'] },
	{ category: 'people', level: 'normal', question: '모나리자를 그린 화가는?', answer: ['다빈치', '레오나르도다빈치'] },
	{ category: 'people', level: 'normal', question: '귀를 자른 자화상으로 유명한 네덜란드의 화가는?', answer: ['고흐', '반고흐'] },
	{ category: 'people', level: 'normal', question: '생각하는 사람을 조각한 조각가는?', answer: ['로댕'] },
	{ category: 'people', level: 'normal', question: '음악의 신동이라 불리는 오스트리아의 작곡가는?', answer: ['모차르트'] },
	{ category: 'people', level: 'normal', question: '운명 교향곡을 작곡한 음악가는?', answer: ['베토벤'] },
	{ category: 'people', level: 'normal', question: '인도의 비폭력 무저항 운동을 이끈 지도자는?', answer: ['간디', '마하트마간디'] },
	{ category: 'people', level: 'normal', question: '흑인 노예 해방을 이끈 미국의 16대 대통령은?', answer: ['링컨'] },
	{ category: 'people', level: 'normal', question: '나폴레옹은 어느 나라의 황제였는가?', answer: ['프랑스'] },
	{ category: 'people', level: 'normal', question: '제2차 세계대전을 일으킨 독일의 독재자는?', answer: ['히틀러'] },
	{ category: 'people', level: 'normal', question: '백의의 천사라 불리는 간호학의 선구자는?', answer: ['나이팅게일'] },
	{ category: 'people', level: 'normal', question: '아메리카 대륙을 발견한 탐험가는?', answer: ['콜럼버스'] },
	{ category: 'people', level: 'normal', question: '세계 일주에 최초로 성공한 탐험가는? (도중에 사망함)', answer: ['마젤란'] },
	{ category: 'people', level: 'normal', question: '동의보감을 쓴 조선의 명의는?', answer: ['허준'] },
	{ category: 'people', level: 'normal', question: '목민심서를 쓴 조선 후기의 실학자는?', answer: ['정약용'] },
	{ category: 'people', level: 'normal', question: '대동여지도를 만든 조선의 지리학자는?', answer: ['김정호'] },
	{ category: 'people', level: 'normal', question: '행주대첩을 이끈 장군은?', answer: ['권율'] },
	{ category: 'people', level: 'normal', question: '고려를 건국한 왕은?', answer: ['왕건', '태조왕건'] },
	{ category: 'people', level: 'normal', question: '조선을 건국한 왕은?', answer: ['이성계', '태조이성계'] },
	{ category: 'people', level: 'normal', question: '신라의 삼국통일을 이룩한 장군은?', answer: ['김유신'] },
	{ category: 'people', level: 'normal', question: '발해를 건국한 사람은?', answer: ['대조영'] },
	{ category: 'people', level: 'normal', question: '일제강점기 "서시", "별 헤는 밤"을 쓴 시인은?', answer: ['윤동주'] },
	{ category: 'people', level: 'normal', question: '소설 <토지>를 쓴 대한민국의 대하소설 작가는?', answer: ['박경리'] },
	{ category: 'people', level: 'normal', question: '비디오 아트의 창시자인 한국 출신의 예술가는?', answer: ['백남준'] },
	{ category: 'people', level: 'normal', question: '영화 <쥬라기 공원>, <E.T.>를 만든 거장 감독은?', answer: ['스필버그', '스티븐스필버그'] },
	{ category: 'people', level: 'normal', question: '홍콩 영화의 전성기를 이끈 배우로 <영웅본색>의 주연은?', answer: ['주윤발'] },
	{ category: 'people', level: 'normal', question: '중국 무술 영화의 전설이자 <정무문>의 주연 배우는?', answer: ['이소룡'] },
	{ category: 'people', level: 'normal', question: '무성 영화 시대의 최고 희극 배우이자 감독은?', answer: ['찰리채플린', '채플린'] },
	{ category: 'people', level: 'normal', question: '팝의 황제라 불리며 <Thriller>를 부른 가수는?', answer: ['마이클잭슨'] },
	{ category: 'people', level: 'normal', question: '영국의 록 밴드 퀸(Queen)의 보컬은?', answer: ['프레디머큐리'] },
	{ category: 'people', level: 'normal', question: '투자의 귀재, 오마하의 현인이라 불리는 주식 부자는?', answer: ['워렌버핏', '버핏'] },
	{ category: 'people', level: 'normal', question: '아마존닷컴의 창업자는?', answer: ['제프베이조스', '베이조스'] },
	{ category: 'people', level: 'normal', question: '인류 최초로 달에 발을 디딘 우주인은?', answer: ['닐암스트롱', '암스트롱'] },
	{ category: 'people', level: 'normal', question: '소설 <셜록 홈즈>를 쓴 작가는?', answer: ['코난도일'] },
	{ category: 'people', level: 'normal', question: '소설 <반지의 제왕>을 쓴 작가는?', answer: ['톨킨'] },
	{ category: 'people', level: 'normal', question: '프랑스의 영웅이자 성녀로 백년전쟁을 승리로 이끈 인물은?', answer: ['잔다르크'] },
	{ category: 'people', level: 'normal', question: '남아공 최초의 흑인 대통령이자 노벨 평화상 수상자는?', answer: ['만델라', '넬슨만델라'] },
	{ category: 'people', level: 'normal', question: '쿠바 혁명을 이끈 아르헨티나 출신의 혁명가는?', answer: ['체게바라'] },
	{ category: 'people', level: 'normal', question: '제2차 세계대전 당시 영국의 총리로 "V" 사인을 유행시킨 인물은?', answer: ['처칠', '윈스턴처칠'] },
	{ category: 'people', level: 'normal', question: '미국의 35대 대통령으로 암살당한 비운의 대통령은?', answer: ['케네디', '존에프케네디'] },
	{ category: 'people', level: 'normal', question: '몽골 제국을 건설하여 세계 최대 영토를 정복한 인물은?', answer: ['징기스칸', '칭기즈칸'] },
	{ category: 'people', level: 'normal', question: '안중근 의사가 저격한 일본의 정치가 이름은?', answer: ['이토히로부미'] },
	{ category: 'people', level: 'normal', question: '고려 말 목화씨를 들여온 인물은?', answer: ['문익점'] },
	{ category: 'people', level: 'normal', question: '고려 말 화약을 발명하여 왜구를 물리친 인물은?', answer: ['최무선'] },
	{ category: 'people', level: 'normal', question: '한국인 최초의 메이저리거 투수는?', answer: ['박찬호'] },
	{ category: 'people', level: 'normal', question: '한국인 최초의 프리미어리거(축구)는?', answer: ['박지성'] },
	
	// [난이도: 어려움] (철학자, 심화 역사 인물, 노벨상)
	{ category: 'people', level: 'hard', question: '"너 자신을 알라"라는 말을 남긴 고대 그리스 철학자는?', answer: ['소크라테스'] },
	{ category: 'people', level: 'hard', question: '소크라테스의 제자이자 <국가론>을 쓴 철학자는?', answer: ['플라톤'] },
	{ category: 'people', level: 'hard', question: '"나는 생각한다, 고로 존재한다"라고 말한 프랑스 철학자는?', answer: ['데카르트'] },
	{ category: 'people', level: 'hard', question: '공산주의의 창시자로 <자본론>을 쓴 인물은?', answer: ['마르크스', '칼마르크스'] },
	{ category: 'people', level: 'hard', question: '정신분석학의 창시자로 <꿈의 해석>을 쓴 인물은?', answer: ['프로이트'] },
	{ category: 'people', level: 'hard', question: '망원경을 개량하여 지동설을 주장하다 재판을 받은 과학자는?', answer: ['갈릴레이', '갈릴레오'] },
	{ category: 'people', level: 'hard', question: '지동설을 최초로 주장한 폴란드의 천문학자는?', answer: ['코페르니쿠스'] },
	{ category: 'people', level: 'hard', question: '서양 최초로 금속 활자를 발명한 사람은?', answer: ['구텐베르크'] },
	{ category: 'people', level: 'hard', question: '종교 개혁을 일으켜 개신교의 탄생을 이끈 인물은?', answer: ['루터', '마틴루터'] },
	{ category: 'people', level: 'hard', question: '로마의 장군으로 "주사위는 던져졌다"라는 말을 남긴 사람은?', answer: ['카이사르', '시저'] },
	{ category: 'people', level: 'hard', question: '헬레니즘 제국을 건설한 마케도니아의 왕은?', answer: ['알렉산더', '알렉산드로스'] },
	{ category: 'people', level: 'hard', question: '카르타고의 장군으로 코끼리를 이끌고 알프스 산맥을 넘은 사람은?', answer: ['한니발'] },
	{ category: 'people', level: 'hard', question: '이집트의 마지막 여왕으로 로마의 장군들과 염문을 뿌린 인물은?', answer: ['클레오파트라'] },
	{ category: 'people', level: 'hard', question: '영국의 여왕으로 "짐은 국가와 결혼했다"라고 말한 인물은?', answer: ['엘리자베스1세'] },
	{ category: 'people', level: 'hard', question: '"철의 여인"이라 불린 영국의 최초 여성 총리는?', answer: ['마가렛대처', '대처'] },
	{ category: 'people', level: 'hard', question: '소련의 공산주의 혁명가로 볼셰비키 혁명을 이끈 인물은?', answer: ['레닌'] },
	{ category: 'people', level: 'hard', question: '중국의 공산당 지도자로 중화인민공화국을 수립한 인물은?', answer: ['마오쩌둥', '모택동'] },
	{ category: 'people', level: 'hard', question: '인도의 초대 총리이자 간디와 함께 독립 운동을 한 인물은?', answer: ['네루'] },
	{ category: 'people', level: 'hard', question: '초현실주의 화가로 녹아내리는 시계(<기억의 지속>)를 그린 사람은?', answer: ['달리', '살바도르달리'] },
	{ category: 'people', level: 'hard', question: '절규하는 사람을 그린 노르웨이의 표현주의 화가는?', answer: ['뭉크'] },
	{ category: 'people', level: 'hard', question: '황금빛 색채의 마술사라 불리며 <키스>를 그린 화가는?', answer: ['클림트', '구스타프클림트'] },
	{ category: 'people', level: 'hard', question: '점묘법을 창시하여 <그랑드 자트 섬의 일요일 오후>를 그린 화가는?', answer: ['쇠라'] },
	{ category: 'people', level: 'hard', question: '팝아트의 거장으로 캠벨 수프 깡통을 그린 사람은?', answer: ['앤디워홀', '워홀'] },
	{ category: 'people', level: 'hard', question: '멕시코의 여성 화가로 짙은 눈썹의 자화상으로 유명한 사람은?', answer: ['프리다칼로', '칼로'] },
	{ category: 'people', level: 'hard', question: '음악의 아버지라 불리는 바로크 시대의 작곡가는?', answer: ['바흐'] },
	{ category: 'people', level: 'hard', question: '교향곡의 아버지라 불리는 고전파 작곡가는?', answer: ['하이든'] },
	{ category: 'people', level: 'hard', question: '피아노의 시인이라 불리는 폴란드의 작곡가는?', answer: ['쇼팽'] },
	{ category: 'people', level: 'hard', question: '가곡의 왕이라 불리며 <마왕>, <송어>를 작곡한 사람은?', answer: ['슈베르트'] },
	{ category: 'people', level: 'hard', question: '소설 <죄와 벌>, <카라마조프 가의 형제들>을 쓴 러시아 작가는?', answer: ['도스토예프스키'] },
	{ category: 'people', level: 'hard', question: '소설 <레미제라블>, <노트르담 드 파리>를 쓴 프랑스 작가는?', answer: ['빅토르위고', '위고'] },
	{ category: 'people', level: 'hard', question: '소설 <노인과 바다>를 쓴 미국의 작가는?', answer: ['헤밍웨이'] },
	{ category: 'people', level: 'hard', question: '컴퓨터 과학의 아버지라 불리며 2차 대전 암호를 해독한 영국의 수학자는?', answer: ['앨런튜링', '튜링'] },
	{ category: 'people', level: 'hard', question: '블랙홀 연구로 유명하며 루게릭병을 앓았던 물리학자는?', answer: ['스티븐호킹', '호킹'] },
	{ category: 'people', level: 'hard', question: '교류 전기 시스템을 발명하여 에디슨과 경쟁한 과학자는?', answer: ['테슬라', '니콜라테슬라'] },
	{ category: 'people', level: 'hard', question: '다이너마이트를 발명한 스웨덴의 과학자는?', answer: ['노벨'] },
	{ category: 'people', level: 'hard', question: '자동차 왕이라 불리며 컨베이어 벨트 시스템을 도입한 사람은?', answer: ['포드', '헨리포드'] },
	{ category: 'people', level: 'hard', question: '애플의 공동 창업자로 컴퓨터 엔지니어였던 인물은?', answer: ['워즈니악', '스티브워즈니악'] },
	{ category: 'people', level: 'hard', question: '조선 후기 진경산수화를 개척한 화가는?', answer: ['정선', '겸재정선'] },
	{ category: 'people', level: 'hard', question: '추사체를 창안한 조선 후기의 서예가는?', answer: ['김정희', '추사김정희'] },
	{ category: 'people', level: 'hard', question: '조선 말기의 화가로 영화 <취화선>의 주인공인 인물은?', answer: ['장승업'] },
	{ category: 'people', level: 'hard', question: '우리나라 최초의 신부(가톨릭 사제)는?', answer: ['김대건'] },
	{ category: 'people', level: 'hard', question: '을사늑약의 부당함을 알리기 위해 헤이그에 파견된 특사 3인 중 한 명은?', answer: ['이준', '이상설', '이위종'] }, // 3명 중 아무나
	{ category: 'people', level: 'hard', question: '일제강점기 <님의 침묵>을 쓴 시인이자 승려, 독립운동가는?', answer: ['한용운', '만해한용운'] },
	{ category: 'people', level: 'hard', question: '나폴레옹에게 워털루 전투에서 패배를 안긴 영국의 장군은?', answer: ['웰링턴'] },
	{ category: 'people', level: 'hard', question: '삼국지에서 조조의 책사로 훗날 진나라 건국의 기틀을 닦은 인물은?', answer: ['사마의'] },
	{ category: 'people', level: 'hard', question: '아프리카의 성자라 불리며 평생 의료 봉사를 한 의사는?', answer: ['슈바이처'] },
	{ category: 'people', level: 'hard', question: '보이지 않는 손을 주장한 경제학의 아버지는?', answer: ['애덤스미스'] },
	{ category: 'people', level: 'hard', question: '수정 자본주의를 주장한 영국의 경제학자는?', answer: ['케인스'] },
	{ category: 'people', level: 'hard', question: '실존주의 철학자로 <이방인>을 쓴 작가는?', answer: ['카뮈', '알베르카뮈'] },
	{ category: 'people', level: 'hard', question: '<군주론>을 저술하여 목적을 위해서는 수단과 방법을 가리지 않아도 된다고 주장한 사람은?', answer: ['마키아벨리'] },

	// ============================================================
	// [예술] 100문제 (쉬움 30 / 보통 40 / 어려움 30)
	// ============================================================
	
	// [난이도: 쉬움] (가장 유명한 작품, 악기, 기본 상식)
	{ category: 'art', level: 'easy', question: '눈썹이 없는 여인을 그린 레오나르도 다빈치의 명작은?', answer: ['모나리자'] },
	{ category: 'art', level: 'easy', question: '자신의 귀를 자른 것으로 유명한 네덜란드의 화가는?', answer: ['고흐', '반고흐'] },
	{ category: 'art', level: 'easy', question: '사람의 얼굴 등을 입체적이고 기괴하게 그린 "큐비즘(입체파)" 화가는?', answer: ['피카소'] },
	{ category: 'art', level: 'easy', question: '턱을 괴고 고뇌하는 남자를 표현한 로댕의 조각상은?', answer: ['생각하는사람'] },
	{ category: 'art', level: 'easy', question: '해골 같은 얼굴로 귀를 막고 비명을 지르는 뭉크의 그림은?', answer: ['절규'] },
	{ category: 'art', level: 'easy', question: '밤하늘의 소용돌이를 그린 고흐의 대표작 "별이 ( ) 밤".', answer: ['빛나는'] },
	{ category: 'art', level: 'easy', question: '미국 뉴욕에 있는, 횃불을 든 거대한 여신상은?', answer: ['자유의여신상'] },
	{ category: 'art', level: 'easy', question: '귀가 들리지 않게 되었지만 "운명 교향곡"을 작곡한 음악가는?', answer: ['베토벤'] },
	{ category: 'art', level: 'easy', question: '5살 때부터 작곡을 시작한 오스트리아의 천재 음악가는?', answer: ['모차르트'] },
	{ category: 'art', level: 'easy', question: '건반이 88개이며 검은 건반과 흰 건반이 있는 악기는?', answer: ['피아노'] },
	{ category: 'art', level: 'easy', question: '어깨에 올리고 켜는 현악기로 오케스트라의 중심이 되는 악기는?', answer: ['바이올린'] },
	{ category: 'art', level: 'easy', question: '빛의 3원색은 빨강, 초록, 그리고 무엇인가?', answer: ['파랑', '블루'] },
	{ category: 'art', level: 'easy', question: '색의 3원색은 빨강, 노랑, 그리고 무엇인가?', answer: ['파랑', '블루'] }, // 미술 시간 기준 마젠타, 시안, 옐로우지만 보통 상식선에서 빨노파
	{ category: 'art', level: 'easy', question: '빨간색과 노란색을 섞으면 무슨 색이 되는가?', answer: ['주황', '주황색'] },
	{ category: 'art', level: 'easy', question: '파란색과 노란색을 섞으면 무슨 색이 되는가?', answer: ['초록', '초록색'] },
	{ category: 'art', level: 'easy', question: '백조의 호수, 호두까기 인형을 작곡한 러시아의 음악가는?', answer: ['차이코프스키'] },
	{ category: 'art', level: 'easy', question: '오케스트라를 지휘하는 사람을 무엇이라 하는가?', answer: ['지휘자', '마에스트로'] },
	{ category: 'art', level: 'easy', question: '노래와 춤, 연기가 어우러진 공연 양식으로 <캣츠>, <오페라의 유령> 등이 있는 것은?', answer: ['뮤지컬'] },
	{ category: 'art', level: 'easy', question: '조선시대 서당에서 공부하는 아이들을 그린 풍속화가는?', answer: ['김홍도'] },
	{ category: 'art', level: 'easy', question: '우리나라 애국가를 작곡한 사람은?', answer: ['안익태'] },
	{ category: 'art', level: 'easy', question: '6개의 줄을 튕겨서 소리 내는 악기는?', answer: ['기타', '통기타'] },
	{ category: 'art', level: 'easy', question: '두 개의 채로 두드려 소리 내는 악기는?', answer: ['북', '드럼'] },
	{ category: 'art', level: 'easy', question: '최후의 만찬을 그린 화가는?', answer: ['다빈치', '레오나르도다빈치'] },
	{ category: 'art', level: 'easy', question: '밀레가 그린 그림으로, 밭에서 이삭을 줍는 여인들을 그린 작품은?', answer: ['이삭줍는여인들', '이삭줍기'] },
	{ category: 'art', level: 'easy', question: '캠벨 수프 깡통을 그린 팝아트의 거장은?', answer: ['앤디워홀', '워홀'] },
	{ category: 'art', level: 'easy', question: '르네상스 시대 미켈란젤로가 시스티나 성당 천장에 그린 그림은?', answer: ['천지창조'] },
	{ category: 'art', level: 'easy', question: '발레를 할 때 신는 신발의 이름은?', answer: ['토슈즈'] },
	{ category: 'art', level: 'easy', question: '도화지가 아닌 벽에 그리는 그림을 무엇이라 하는가?', answer: ['벽화'] },
	{ category: 'art', level: 'easy', question: '점토 등을 빚어 불에 구워 만든 그릇이나 예술품을 무엇이라 하는가?', answer: ['도자기'] },
	{ category: 'art', level: 'easy', question: '여러 사람이 목소리를 맞춰 노래하는 것을 무엇이라 하는가?', answer: ['합창'] },
	
	// [난이도: 보통] (유명 작품 제목, 작곡가 별명, 한국 미술)
	{ category: 'art', level: 'normal', question: '황금빛 색채를 사용하여 <키스>를 그린 화가는?', answer: ['클림트', '구스타프클림트'] },
	{ category: 'art', level: 'normal', question: '점을 찍어 그림을 그리는 점묘법을 창시한 화가는?', answer: ['쇠라'] },
	{ category: 'art', level: 'normal', question: '진주 귀걸이를 한 소녀를 그린 네덜란드의 화가는?', answer: ['페르메이르', '베르메르'] },
	{ category: 'art', level: 'normal', question: '녹아내리는 시계를 그린 초현실주의 화가는?', answer: ['달리', '살바도르달리'] },
	{ category: 'art', level: 'normal', question: '소변기를 <샘>이라는 작품으로 출품하여 예술의 개념을 바꾼 사람은?', answer: ['뒤샹'] },
	{ category: 'art', level: 'normal', question: '멕시코의 여성 화가로, 짙은 눈썹과 자화상으로 유명한 사람은?', answer: ['프리다칼로', '칼로'] },
	{ category: 'art', level: 'normal', question: '행복한 눈물이라는 만화 같은 그림을 그린 팝아트 작가는?', answer: ['리히텐슈타인'] },
	{ category: 'art', level: 'normal', question: '얼굴 없는 거리의 화가로, 벽에 낙서를 남기는 영국의 예술가는?', answer: ['뱅크시'] },
	{ category: 'art', level: 'normal', question: '피에타 상, 다비드 상을 조각한 르네상스의 거장은?', answer: ['미켈란젤로'] },
	{ category: 'art', level: 'normal', question: '한국의 화가로 소를 역동적으로 그린 화가는?', answer: ['이중섭'] },
	{ category: 'art', level: 'normal', question: '조선시대 미인도를 그렸으며 김홍도와 함께 풍속화의 쌍벽을 이룬 화가는?', answer: ['신윤복'] },
	{ category: 'art', level: 'normal', question: '한국 추상미술의 선구자로 <우주>라는 작품이 유명한 화가는?', answer: ['김환기'] },
	{ category: 'art', level: 'normal', question: '비디오 아트를 창시한 한국 출신의 세계적인 예술가는?', answer: ['백남준'] },
	{ category: 'art', level: 'normal', question: '"음악의 아버지"라 불리는 바로크 시대의 작곡가는?', answer: ['바흐'] },
	{ category: 'art', level: 'normal', question: '"음악의 어머니"라 불리는 작곡가는?', answer: ['헨델'] },
	{ category: 'art', level: 'normal', question: '"피아노의 시인"이라 불리는 폴란드의 작곡가는?', answer: ['쇼팽'] },
	{ category: 'art', level: 'normal', question: '"가곡의 왕"이라 불리며 <마왕>, <송어>를 작곡한 사람은?', answer: ['슈베르트'] },
	{ category: 'art', level: 'normal', question: '사계(봄, 여름, 가을, 겨울)를 작곡한 음악가는?', answer: ['비발디'] },
	{ category: 'art', level: 'normal', question: '교향곡의 아버지라 불리며 <놀람 교향곡>을 작곡한 사람은?', answer: ['하이든'] },
	{ category: 'art', level: 'normal', question: '오페라 <마술피리>, <피가로의 결혼>을 작곡한 사람은?', answer: ['모차르트'] },
	{ category: 'art', level: 'normal', question: '뮤지컬 <오페라의 유령>, <캣츠>를 만든 작곡가는?', answer: ['앤드루로이드웨버', '웨버'] },
	{ category: 'art', level: 'normal', question: '비제거 작곡한 오페라로, 집시 여인이 주인공인 작품은?', answer: ['카르멘'] },
	{ category: 'art', level: 'normal', question: '지브리 스튜디오의 영화 음악을 담당한 일본의 거장은?', answer: ['히사이시조'] },
	{ category: 'art', level: 'normal', question: '가장 낮은 음역을 내는 남성의 목소리는?', answer: ['베이스'] },
	{ category: 'art', level: 'normal', question: '가장 높은 음역을 내는 여성의 목소리는?', answer: ['소프라노'] },
	{ category: 'art', level: 'normal', question: '오케스트라가 튜닝(조율)할 때 기준이 되는 악기는?', answer: ['오보에'] },
	{ category: 'art', level: 'normal', question: '로시니가 작곡한 오페라로, 아들의 머리 위에 놓인 사과를 쏘는 이야기는?', answer: ['윌리엄텔'] },
	{ category: 'art', level: 'normal', question: '검은 피카소라 불리며 낙서 같은 그림을 그린 화가는?', answer: ['바스키아'] },
	{ category: 'art', level: 'normal', question: '빛의 화가라 불리며 <수련> 연작을 그린 인상파 화가는?', answer: ['모네'] },
	{ category: 'art', level: 'normal', question: '발레리나를 주로 그린 인상파 화가는?', answer: ['드가'] },
	{ category: 'art', level: 'normal', question: '사과 하나로 파리를 놀라게 하겠다고 말한 정물화의 거장은?', answer: ['세잔'] },
	{ category: 'art', level: 'normal', question: '물방울 무늬(땡땡이) 호박 작품으로 유명한 일본의 예술가는?', answer: ['쿠사마야요이'] },
	{ category: 'art', level: 'normal', question: '지휘자가 손에 들고 박자를 맞추는 막대의 이름은?', answer: ['지휘봉'] },
	{ category: 'art', level: 'normal', question: '피아노 연주곡 <엘리제를 위하여>를 작곡한 사람은?', answer: ['베토벤'] },
	{ category: 'art', level: 'normal', question: '결혼 행진곡이 포함된 <한여름 밤의 꿈>을 작곡한 사람은?', answer: ['멘델스존'] },
	{ category: 'art', level: 'normal', question: '졸업식 때 많이 나오는 <위풍당당 행진곡>을 작곡한 사람은?', answer: ['엘가'] },
	{ category: 'art', level: 'normal', question: '한국인이 가장 좋아하는 클래식 중 하나인 <캐논 변주곡>의 원곡자는?', answer: ['파헬벨'] },
	{ category: 'art', level: 'normal', question: '단순하고 검은 선과 원색(빨강, 파랑, 노랑)의 면으로 구성된 추상화를 그린 화가는?', answer: ['몬드리안'] },
	{ category: 'art', level: 'normal', question: '현대 음악에서 연주하지 않고 침묵하는 <4분 33초>를 작곡한 사람은?', answer: ['존케이지'] },
	{ category: 'art', level: 'normal', question: '서양 미술사에서 "재생", "부활"을 뜻하며 14~16세기에 일어난 문예 부흥 운동은?', answer: ['르네상스'] },
	
	// [난이도: 어려움] (사조, 구체적 작품명, 음악 용어)
	{ category: 'art', level: 'hard', question: '인상주의라는 이름의 유래가 된 모네의 작품 이름은? "인상, ( )"', answer: ['해돋이', '일출'] },
	{ category: 'art', level: 'hard', question: '기괴하고 환상적인 그림 <쾌락의 정원>을 그린 네덜란드 화가는?', answer: ['보스', '히에로니무스보스'] },
	{ category: 'art', level: 'hard', question: '바티칸의 <아테네 학당>을 그린 르네상스 화가는?', answer: ['라파엘로'] },
	{ category: 'art', level: 'hard', question: '프랑스 혁명을 상징하는 그림 <민중을 이끄는 자유의 여신>을 그린 화가는?', answer: ['들라크루아'] },
	{ category: 'art', level: 'hard', question: '조개 껍데기 위에서 태어나는 여신을 그린 보티첼리의 작품은?', answer: ['비너스의탄생'] },
	{ category: 'art', level: 'hard', question: '스페인 궁정 화가 벨라스케스의 대표작으로, 공주와 시녀들을 그린 그림은?', answer: ['시녀들'] },
	{ category: 'art', level: 'hard', question: '나폴레옹의 대관식을 웅장하게 그린 화가는?', answer: ['다비드'] },
	{ category: 'art', level: 'hard', question: '미국의 농부 부부를 그린 <아메리칸 고딕>의 작가는?', answer: ['우드', '그랜트우드'] },
	{ category: 'art', level: 'hard', question: '도시의 고독을 표현한 <밤을 지새우는 사람들(Nighthawks)>을 그린 화가는?', answer: ['호퍼', '에드워드호퍼'] },
	{ category: 'art', level: 'hard', question: '러시아의 화가로, 하얀 배경에 검은 사각형 하나만 그린 절대주의 화가는?', answer: ['말레비치'] },
	{ category: 'art', level: 'hard', question: '스페인 내전의 비극을 다룬 피카소의 거대한 벽화는?', answer: ['게르니카'] },
	{ category: 'art', level: 'hard', question: '살바도르 달리의 <기억의 지속>에 등장하는 흐물거리는 물체는?', answer: ['시계'] },
	{ category: 'art', level: 'hard', question: '숲속에서 나체 여인이 식사하는 <풀밭 위의 점심>을 그려 논란이 된 화가는?', answer: ['마네'] },
	{ category: 'art', level: 'hard', question: '그네를 타는 여인의 신발이 날아가는 로코코 시대의 그림 <그네>를 그린 화가는?', answer: ['프라고나르'] },
	{ category: 'art', level: 'hard', question: '유화 물감을 발명했다고 알려진 <아르놀피니 부부의 초상>을 그린 화가는?', answer: ['반에이크'] },
	{ category: 'art', level: 'hard', question: '우리나라의 산천을 직접 보고 그리는 "진경산수화"를 개척한 화가는?', answer: ['정선', '겸재정선'] },
	{ category: 'art', level: 'hard', question: '추사 김정희가 유배 시절 제자에게 그려준, 소나무와 잣나무가 있는 그림은?', answer: ['세한도'] },
	{ category: 'art', level: 'hard', question: '악기 반주 없이 목소리로만 노래하는 연주 방식을 무엇이라 하는가?', answer: ['아카펠라'] },
	{ category: 'art', level: 'hard', question: '음악 용어에서 "아다지오(Adagio)"는 무슨 뜻인가?', answer: ['느리게', '천천히'] },
	{ category: 'art', level: 'hard', question: '음악 용어에서 점점 세게를 뜻하는 말은?', answer: ['크레센도'] },
	{ category: 'art', level: 'hard', question: '세계 3대 테너 중 한 명으로, 하이 C의 제왕이라 불린 이탈리아 성악가는?', answer: ['파바로티'] },
	{ category: 'art', level: 'hard', question: '바그너가 작곡한 4부작 오페라로, 반지의 제왕에 영향을 준 작품은?', answer: ['니벨룽의반지'] },
	{ category: 'art', level: 'hard', question: '초연 당시 관객들의 난동이 일어난 스트라빈스키의 발레 음악은?', answer: ['봄의제전'] },
	{ category: 'art', level: 'hard', question: '재즈와 클래식을 접목한 거슈윈의 대표곡은? "랩소디 인 ( )"', answer: ['블루'] },
	{ category: 'art', level: 'hard', question: '자신의 실연 경험을 바탕으로 <환상 교향곡>을 작곡한 음악가는?', answer: ['베를리오즈'] },
	{ category: 'art', level: 'hard', question: '베토벤의 피아노 소나타 14번의 부제는?', answer: ['월광', '월광소나타'] },
	{ category: 'art', level: 'hard', question: '프랑스 인상주의 음악의 창시자로 <달빛>을 작곡한 사람은?', answer: ['드뷔시'] },
	{ category: 'art', level: 'hard', question: '피아노의 거장으로 <헝가리 무곡>과 초절기교 연습곡을 쓴 사람은?', answer: ['리스트'] },
	{ category: 'art', level: 'hard', question: '한국의 대표적인 서양화가로 <나무와 두 여인>, <빨래터> 등을 그렸으며 가장 비싼 화가 중 한 명인 사람은?', answer: ['박수근'] },
	{ category: 'art', level: 'hard', question: '조선 말기의 화가로, 취한 신선이 그림을 그리는 <취화선>의 주인공인 화가는?', answer: ['장승업'] },
	// ============================================================
	// [예술] 추가 150문제 (쉬움 50 / 보통 50 / 어려움 50)
	// ============================================================
	
	// [난이도: 쉬움] (악기, 기본 용어, 누구나 아는 명작)
	{ category: 'art', level: 'easy', question: '그림을 그릴 때 색을 섞는 판을 무엇이라 하는가?', answer: ['팔레트'] },
	{ category: 'art', level: 'easy', question: '연필이나 목탄으로 단색으로 그린 그림은?', answer: ['소묘', '데생'] },
	{ category: 'art', level: 'easy', question: '사람의 얼굴이나 모습을 그린 그림은?', answer: ['초상화', '인물화'] },
	{ category: 'art', level: 'easy', question: '꽃, 과일, 그릇 등 움직이지 않는 물건을 그린 그림은?', answer: ['정물화'] },
	{ category: 'art', level: 'easy', question: '산이나 바다 등 자연 경치를 그린 그림은?', answer: ['풍경화'] },
	{ category: 'art', level: 'easy', question: '스스로 자신의 모습을 그린 그림은?', answer: ['자화상'] },
	{ category: 'art', level: 'easy', question: '검은색과 흰색을 섞으면 무슨 색이 되는가?', answer: ['회색'] },
	{ category: 'art', level: 'easy', question: '빨간색과 파란색을 섞으면 무슨 색이 되는가?', answer: ['보라', '보라색'] },
	{ category: 'art', level: 'easy', question: '노란색과 파란색을 섞으면 무슨 색이 되는가?', answer: ['초록', '초록색'] }, // 기존 중복 피해 다른 표현
	{ category: 'art', level: 'easy', question: '빨간색, 주황색, 노란색처럼 따뜻한 느낌을 주는 색을 ( )색이라 한다.', answer: ['난', '따뜻한'] },
	{ category: 'art', level: 'easy', question: '파란색, 남색처럼 시원하고 차가운 느낌을 주는 색을 ( )색이라 한다.', answer: ['한', '차가운'] },
	{ category: 'art', level: 'easy', question: '도레미파솔라시( )? 다음 계이름은?', answer: ['도'] },
	{ category: 'art', level: 'easy', question: '높은음자리표와 낮은음자리표 중 높은 음을 나타내는 것은?', answer: ['높은음자리표'] },
	{ category: 'art', level: 'easy', question: '피아노는 건반 악기다. 바이올린은 무슨 악기인가?', answer: ['현악기'] },
	{ category: 'art', level: 'easy', question: '입으로 불어서 소리 내는 악기를 통틀어 무엇이라 하는가?', answer: ['관악기'] },
	{ category: 'art', level: 'easy', question: '두드리거나 쳐서 소리 내는 악기를 통틀어 무엇이라 하는가?', answer: ['타악기'] },
	{ category: 'art', level: 'easy', question: '가장 큰 현악기로, 앉아서 연주하는 악기는?', answer: ['콘트라베이스', '더블베이스'] }, // 첼로보다 큼
	{ category: 'art', level: 'easy', question: '바이올린보다 조금 크고 낮은 소리가 나는 현악기는?', answer: ['비올라'] },
	{ category: 'art', level: 'easy', question: '다리 사이에 끼우고 연주하는 현악기는?', answer: ['첼로'] },
	{ category: 'art', level: 'easy', question: '금관 악기 중 가장 길이를 늘였다 줄였다 하며 연주하는 악기는?', answer: ['트롬본'] },
	{ category: 'art', level: 'easy', question: '나팔처럼 생긴 금관 악기로, 기상 나팔소리로 유명한 것은?', answer: ['트럼펫'] },
	{ category: 'art', level: 'easy', question: '우리나라 전통 타악기 중 장구, 북, 징, 그리고 ( )가 사물놀이에 쓰인다.', answer: ['꽹과리'] },
	{ category: 'art', level: 'easy', question: '우리나라의 대표적인 민요로 "나를 버리고 가시는 님은~"으로 시작하는 노래는?', answer: ['아리랑'] },
	{ category: 'art', level: 'easy', question: '판소리를 하는 소리꾼 옆에서 북을 치며 장단을 맞추는 사람은?', answer: ['고수'] },
	{ category: 'art', level: 'easy', question: '발레 "백조의 호수"에서 백조가 입는 옷 색깔은?', answer: ['흰색', '하얀색'] },
	{ category: 'art', level: 'easy', question: '미술관에 가면 그림 아래에 붙어 있는 설명표를 무엇이라 하는가?', answer: ['캡션', '이름표'] }, // 캡션이 전문용어지만 쉬운 상식
	{ category: 'art', level: 'easy', question: '조각상은 평면인가 입체인가?', answer: ['입체'] },
	{ category: 'art', level: 'easy', question: '프랑스 파리에 있는 세계에서 가장 유명한 박물관은?', answer: ['루브르', '루브르박물관'] },
	{ category: 'art', level: 'easy', question: '영화관에서 영화가 상영되는 흰 천(화면)을 무엇이라 하는가?', answer: ['스크린'] },
	{ category: 'art', level: 'easy', question: '연극이나 뮤지컬을 하는 장소를 무엇이라 하는가?', answer: ['극장', '무대'] },
	{ category: 'art', level: 'easy', question: '오케스트라 단원들이 입는 검은색 예복의 이름은?', answer: ['턱시도', '연미복'] },
	{ category: 'art', level: 'easy', question: '노래방에서 노래가 끝났을 때 점수가 나오는 기계를 무엇이라 하는가?', answer: ['반주기', '노래방기계'] },
	{ category: 'art', level: 'easy', question: '그림을 그리는 도구 중 털로 만들어 물감을 묻히는 것은?', answer: ['붓'] },
	{ category: 'art', level: 'easy', question: '미술 시간에 사용하는, 물에 개어 쓰는 안료는?', answer: ['물감', '수채화물감'] },
	{ category: 'art', level: 'easy', question: '종이를 접어서 여러 가지 모양을 만드는 놀이는?', answer: ['종이접기'] },
	{ category: 'art', level: 'easy', question: '흙을 빚어 가마에 구워 만드는 예술은?', answer: ['도예', '도자기'] },
	{ category: 'art', level: 'easy', question: '서예를 할 때 사용하는 검은 액체는?', answer: ['먹'] },
	{ category: 'art', level: 'easy', question: '서예를 할 때 종이를 눌러두는 도구는?', answer: ['문진', '서진'] },
	{ category: 'art', level: 'easy', question: '벼루에 먹을 갈 때 필요한 것은?', answer: ['물'] },
	{ category: 'art', level: 'easy', question: '노래를 부르는 사람을 무엇이라 하는가?', answer: ['가수', '성악가'] },
	{ category: 'art', level: 'easy', question: '악기를 연주하는 사람을 무엇이라 하는가?', answer: ['연주자', '연주가'] },
	{ category: 'art', level: 'easy', question: '춤을 추는 사람을 무엇이라 하는가?', answer: ['무용수', '댄서'] },
	{ category: 'art', level: 'easy', question: '연기를 하는 사람을 무엇이라 하는가?', answer: ['배우', '연기자'] },
	{ category: 'art', level: 'easy', question: '비너스 조각상은 팔이 있다, 없다?', answer: ['없다'] },
	{ category: 'art', level: 'easy', question: '피카소의 그림은 사실적인가, 추상적인가?', answer: ['추상적'] }, // 혹은 입체파
	{ category: 'art', level: 'easy', question: '고흐는 자신의 신체 부위 중 어디를 잘랐는가?', answer: ['귀'] },
	{ category: 'art', level: 'easy', question: '베토벤은 신체 중 어디가 불편했는가?', answer: ['귀', '청각'] },
	{ category: 'art', level: 'easy', question: '장구는 채를 몇 개 사용하는가?', answer: ['2개', '두개'] },
	{ category: 'art', level: 'easy', question: '피아노 건반 중 흰 건반 사이사이에 있는 건반 색은?', answer: ['검은색', '검정'] },
	{ category: 'art', level: 'easy', question: '크리스마스에 부르는 노래를 통틀어 무엇이라 하는가?', answer: ['캐롤', '캐럴'] },
	
	// [난이도: 보통] (유명 작품, 예술가, 장르)
	{ category: 'art', level: 'normal', question: '레오나르도 다빈치의 작품으로, 예수와 12제자를 그린 그림은?', answer: ['최후의만찬'] },
	{ category: 'art', level: 'normal', question: '미켈란젤로가 시스티나 성당 천장에 그린 그림 중 손가락을 맞대는 장면은?', answer: ['천지창조', '아담의창조'] },
	{ category: 'art', level: 'normal', question: '밀레가 그린 그림으로, 저녁종 소리를 듣고 기도하는 부부를 그린 것은?', answer: ['만종'] },
	{ category: 'art', level: 'normal', question: '로댕의 조각상 중 턱을 괴고 고민하는 남자는?', answer: ['생각하는사람'] },
	{ category: 'art', level: 'normal', question: '자유의 여신상을 선물한 나라는?', answer: ['프랑스'] },
	{ category: 'art', level: 'normal', question: '스페인의 건축가 가우디가 설계한, 아직도 짓고 있는 성당은?', answer: ['사그라다파밀리아', '성가족성당'] },
	{ category: 'art', level: 'normal', question: '시드니에 있는 조개 껍데기 모양의 오페라 극장은?', answer: ['오페라하우스'] },
	{ category: 'art', level: 'normal', question: '파리의 에펠탑을 만든 사람은 에펠이다. O, X?', answer: ['o', '오'] },
	{ category: 'art', level: 'normal', question: '인상파 화가 모네가 평생 즐겨 그린 꽃은?', answer: ['수련'] },
	{ category: 'art', level: 'normal', question: '발레리나를 주로 그린 프랑스의 인상파 화가는?', answer: ['드가'] },
	{ category: 'art', level: 'normal', question: '타히티 섬에서 원주민들을 그린 화가는?', answer: ['고갱'] },
	{ category: 'art', level: 'normal', question: '추상화의 아버지라 불리며, 뜨거운 추상(즉흥)을 대표하는 화가는?', answer: ['칸딘스키'] },
	{ category: 'art', level: 'normal', question: '차가운 추상(기하학)을 대표하며 빨강, 파랑, 노랑의 구성을 그린 화가는?', answer: ['몬드리안'] },
	{ category: 'art', level: 'normal', question: '멕시코의 화가로 디에고 리베라의 아내이자 자화상으로 유명한 사람은?', answer: ['프리다칼로'] },
	{ category: 'art', level: 'normal', question: '앤디 워홀로 대표되는, 대중문화를 예술로 승화시킨 장르는?', answer: ['팝아트'] },
	{ category: 'art', level: 'normal', question: '벽에 몰래 그림을 그리고 사라지는 영국의 얼굴 없는 화가는?', answer: ['뱅크시'] },
	{ category: 'art', level: 'normal', question: '비디오 아트를 창시한 한국의 예술가는?', answer: ['백남준'] },
	{ category: 'art', level: 'normal', question: '은색 종이(담배 속지)에 그림을 그린 한국의 화가는?', answer: ['이중섭'] },
	{ category: 'art', level: 'normal', question: '조선시대 풍속화가로 <씨름>, <서당>을 그린 사람은?', answer: ['김홍도'] },
	{ category: 'art', level: 'normal', question: '조선시대 풍속화가로 <미인도>, <단오풍정>을 그린 사람은?', answer: ['신윤복'] },
	{ category: 'art', level: 'normal', question: '고려시대를 대표하는 푸른빛의 도자기는?', answer: ['고려청자', '청자'] },
	{ category: 'art', level: 'normal', question: '조선시대를 대표하는 하얀색 도자기는?', answer: ['백자', '조선백자'] },
	{ category: 'art', level: 'normal', question: '음악의 3요소는 리듬, 멜로디(가락), 그리고 무엇인가?', answer: ['하모니', '화성'] },
	{ category: 'art', level: 'normal', question: '빠르기말 중 "안단테(Andante)"는 무슨 뜻인가?', answer: ['느리게'] }, // 걷는 속도로
	{ category: 'art', level: 'normal', question: '빠르기말 중 "알레그로(Allegro)"는 무슨 뜻인가?', answer: ['빠르게'] },
	{ category: 'art', level: 'normal', question: '점점 세게를 나타내는 음악 기호는?', answer: ['크레센도'] },
	{ category: 'art', level: 'normal', question: '점점 여리게를 나타내는 음악 기호는?', answer: ['데크레센도'] },
	{ category: 'art', level: 'normal', question: '피아노의 전신으로, 현을 뜯어서 소리 내는 악기는?', answer: ['하프시코드'] },
	{ category: 'art', level: 'normal', question: '오케스트라 튜닝의 기준이 되는 A(라) 음을 내는 악기는?', answer: ['오보에'] },
	{ category: 'art', level: 'normal', question: '가장 높은 음역을 내는 여성 성악 파트는?', answer: ['소프라노'] },
	{ category: 'art', level: 'normal', question: '가장 낮은 음역을 내는 남성 성악 파트는?', answer: ['베이스'] },
	{ category: 'art', level: 'normal', question: '악기 반주 없이 목소리로만 노래하는 것은?', answer: ['아카펠라'] },
	{ category: 'art', level: 'normal', question: '사물놀이 악기 4가지는 꽹과리, 징, 장구, 그리고?', answer: ['북'] },
	{ category: 'art', level: 'normal', question: '우리나라 전통 음악 판소리에서 "얼쑤!", "좋다!" 하고 넣는 추임새는 누가 하는가?', answer: ['고수'] },
	{ category: 'art', level: 'normal', question: '가면을 쓰고 하는 우리나라 전통 연극은?', answer: ['탈춤'] },
	{ category: 'art', level: 'normal', question: '프랑스 혁명가를 작곡한 뮤지컬 영화 <레미제라블>의 원작자는?', answer: ['빅토르위고'] },
	{ category: 'art', level: 'normal', question: '오페라의 유령, 캣츠, 레미제라블, 미스 사이공을 세계 4대 ( )이라 한다.', answer: ['뮤지컬'] },
	{ category: 'art', level: 'normal', question: '재즈(Jazz)의 고향이라 불리는 미국의 도시는?', answer: ['뉴올리언스'] },
	{ category: 'art', level: 'normal', question: '흑인 음악과 백인 컨트리 음악이 결합하여 탄생한, 엘비스 프레슬리로 대표되는 장르는?', answer: ['로큰롤', '락앤롤'] },
	{ category: 'art', level: 'normal', question: '비틀즈(The Beatles)는 어느 나라 밴드인가?', answer: ['영국'] },
	{ category: 'art', level: 'normal', question: '미국의 팝 아티스트로 "캠벨 수프" 판화를 남긴 사람은?', answer: ['앤디워홀'] },
	{ category: 'art', level: 'normal', question: '물방울 무늬(땡땡이)와 호박 조형물로 유명한 일본 작가는?', answer: ['쿠사마야요이'] },
	{ category: 'art', level: 'normal', question: '고흐가 그린 <별이 빛나는 밤>에 나오는 나무는?', answer: ['사이프러스'] },
	{ category: 'art', level: 'normal', question: '다빈치의 <모나리자>에는 ( )이/가 없다.', answer: ['눈썹'] },
	{ category: 'art', level: 'normal', question: '베토벤의 교향곡 9번의 부제는?', answer: ['합창'] },
	{ category: 'art', level: 'normal', question: '슈베르트의 가곡 <마왕>에 등장하는 세 사람은 아버지, 아들, 그리고?', answer: ['마왕'] },
	{ category: 'art', level: 'normal', question: '차이코프스키의 3대 발레 음악은 백조의 호수, 호두까기 인형, 그리고?', answer: ['잠자는숲속의미녀'] },
	{ category: 'art', level: 'normal', question: '헨델의 오라토리오 <메시아> 중 가장 유명한 합창곡은?', answer: ['할렐루야'] },
	{ category: 'art', level: 'normal', question: '비발디의 협주곡 <사계> 중 가장 먼저 연주되는 계절은?', answer: ['봄'] },
	{ category: 'art', level: 'normal', question: '영화 <기생충>의 포스터 등을 디자인하고 연출한 감독은?', answer: ['봉준호'] }, // 예술적 측면
	
	// [난이도: 어려움] (사조, 구체적 용어, 예술사)
	{ category: 'art', level: 'hard', question: '빛에 따라 변하는 색채를 중시한, 모네와 르누아르가 속한 미술 사조는?', answer: ['인상주의', '인상파'] },
	{ category: 'art', level: 'hard', question: '꿈과 무의식의 세계를 표현한, 달리와 마그리트가 속한 미술 사조는?', answer: ['초현실주의'] },
	{ category: 'art', level: 'hard', question: '대상을 도형으로 해체하여 다시 구성한, 피카소가 속한 미술 사조는?', answer: ['입체파', '큐비즘'] },
	{ category: 'art', level: 'hard', question: '14~16세기 유럽에서 일어난 "문예 부흥" 운동은?', answer: ['르네상스'] },
	{ category: 'art', level: 'hard', question: '화려하고 장식적이며, 귀족적인 취향의 18세기 예술 양식은?', answer: ['로코코'] },
	{ category: 'art', level: 'hard', question: '일그러진 진주라는 뜻을 가진, 17세기 예술 양식은?', answer: ['바로크'] },
	{ category: 'art', level: 'hard', question: '건축에서, 기둥만 있고 벽이 없는 회랑이나 현관을 뜻하는 용어는?', answer: ['로비', '필로티'] }, // 필로티가 더 건축적
	{ category: 'art', level: 'hard', question: '고대 그리스 신전 건축 양식 중 가장 단순하고 굵은 기둥 양식은?', answer: ['도리아식'] },
	{ category: 'art', level: 'hard', question: '벽이나 천장에 회반죽을 바르고 마르기 전에 그림을 그리는 기법은?', answer: ['프레스코'] },
	{ category: 'art', level: 'hard', question: '색점들을 찍어서 그림을 그리는 점묘법을 창시한 화가는?', answer: ['쇠라'] },
	{ category: 'art', level: 'hard', question: '레오나르도 다빈치가 사용한, 경계선을 흐릿하게 처리하는 명암법은?', answer: ['스푸마토'] },
	{ category: 'art', level: 'hard', question: '명암의 대비를 극적으로 사용하여 입체감을 주는 기법은?', answer: ['키아로스쿠로', '명암법'] },
	{ category: 'art', level: 'hard', question: '뒤샹이 변기를 <샘>이라는 작품으로 출품했을 때 사용한 개념은?', answer: ['레디메이드'] },
	{ category: 'art', level: 'hard', question: '피카소의 대표적인 반전(反戰) 작품으로, 스페인 내전을 다룬 그림은?', answer: ['게르니카'] },
	{ category: 'art', level: 'hard', question: '렘브란트의 대표작으로, 실제로는 낮 풍경이지만 밤처럼 보여 붙여진 제목은?', answer: ['야경', '야간순찰'] },
	{ category: 'art', level: 'hard', question: '진주 귀걸이를 한 소녀를 그린 네덜란드의 화가는?', answer: ['페르메이르', '베르메르'] },
	{ category: 'art', level: 'hard', question: '스페인 궁정 화가 벨라스케스의 대표작으로, 거울에 비친 왕 부부가 그려진 그림은?', answer: ['시녀들'] },
	{ category: 'art', level: 'hard', question: '노르웨이의 화가 뭉크의 <절규>는 어느 다리 위에서 그려졌는가?', answer: ['에케베르그'] }, // 너무 어려우면 '다리'지만 구체적 지명
	{ category: 'art', level: 'hard', question: '뭉크의 <절규> 뒤 배경은 실제로 ( ) 현상 때문에 붉게 보였다고 한다.', answer: ['화산폭발', '화산'] },
	{ category: 'art', level: 'hard', question: '존 케이지의 작품으로, 4분 33초 동안 아무 연주도 하지 않는 곡의 제목은?', answer: ['4분33초'] },
	{ category: 'art', level: 'hard', question: '스트라빈스키의 발레 음악으로, 초연 당시 폭동에 가까운 소동이 일어난 곡은?', answer: ['봄의제전'] },
	{ category: 'art', level: 'hard', question: '거슈윈이 작곡한 곡으로, 재즈와 클래식을 접목시킨 대표작은?', answer: ['랩소디인블루'] },
	{ category: 'art', level: 'hard', question: '바그너가 작곡한 4부작 오페라로, 반지의 제왕에 영향을 준 작품은?', answer: ['니벨룽의반지'] },
	{ category: 'art', level: 'hard', question: '푸치니의 오페라로, "공주는 잠 못 이루고(Nessun Dorma)"가 나오는 작품은?', answer: ['투란도트'] },
	{ category: 'art', level: 'hard', question: '모차르트의 유작으로, 미완성으로 남겨진 장례 미사곡은?', answer: ['레퀴엠'] },
	{ category: 'art', level: 'hard', question: '피아노의 시인 쇼팽의 조국은 어디인가?', answer: ['폴란드'] },
	{ category: 'art', level: 'hard', question: '음악의 어머니 헨델은 독일에서 태어났지만 주로 어느 나라에서 활동했나?', answer: ['영국'] },
	{ category: 'art', level: 'hard', question: '교향곡의 아버지 하이든이 작곡한 교향곡 중 갑자기 큰 소리가 나는 곡은?', answer: ['놀람교향곡', '놀람'] },
	{ category: 'art', level: 'hard', question: '우리나라 최초의 서양화가로 불리는, 소설가이기도 했던 인물은?', answer: ['나혜석'] },
	{ category: 'art', level: 'hard', question: '겸재 정선이 개척한, 우리나라의 산천을 직접 보고 그리는 화법은?', answer: ['진경산수화'] },
	{ category: 'art', level: 'hard', question: '추사 김정희가 유배 시절 제자에게 그려준, 소나무와 잣나무가 있는 그림은?', answer: ['세한도'] },
	{ category: 'art', level: 'hard', question: '조선 말기의 화가 장승업의 일대기를 다룬 임권택 감독의 영화는?', answer: ['취화선'] },
	{ category: 'art', level: 'hard', question: '한국의 화가 박수근은 주로 무엇을 소재로 그림을 그렸는가?', answer: ['서민', '시장사람들'] }, // 화강암 질감
	{ category: 'art', level: 'hard', question: '한국 추상미술의 선구자 김환기의 대표작 <우주>는 무슨 색 점으로 이루어져 있나?', answer: ['파란색', '푸른색'] },
	{ category: 'art', level: 'hard', question: '가야금을 만든 사람은 우륵이다. 거문고를 만든 사람은?', answer: ['왕산악'] },
	{ category: 'art', level: 'hard', question: '우리나라 3대 아리랑은 정선 아리랑, 밀양 아리랑, 그리고?', answer: ['진도아리랑'] },
	{ category: 'art', level: 'hard', question: '판소리 다섯 마당은 춘향가, 심청가, 흥보가, 수궁가, 그리고?', answer: ['적벽가'] },
	{ category: 'art', level: 'hard', question: '유네스코 인류무형문화유산으로 등재된, 조선 왕실의 제사 음악은?', answer: ['종묘제례악'] },
	{ category: 'art', level: 'hard', question: '베르디의 오페라 <아이다>는 어느 나라를 배경으로 하는가?', answer: ['이집트'] },
	{ category: 'art', level: 'hard', question: '뮤지컬 <캣츠>의 원작 시를 쓴 시인은?', answer: ['엘리엇', 'ts엘리엇'] },
	{ category: 'art', level: 'hard', question: '발레에서 여성 무용수가 남성 무용수의 지지 없이 한 발로 도는 동작은?', answer: ['피루엣'] },
	{ category: 'art', level: 'hard', question: '미술에서, 이상적인 인체 비례를 나타낸 다빈치의 그림은?', answer: ['비트루비우스적인간', '인체비례도'] },
	{ category: 'art', level: 'hard', question: '가우디의 건축물 중 곡선이 아름다운 공동 주택의 이름은?', answer: ['카사밀라', '카사바트요'] },
	{ category: 'art', level: 'hard', question: '뉴욕 현대 미술관(MoMA)에 있는, 살바도르 달리의 대표작은?', answer: ['기억의지속'] },
	{ category: 'art', level: 'hard', question: '보티첼리의 <비너스의 탄생>에서 비너스는 무엇을 타고 있는가?', answer: ['조개', '조개껍데기'] },
	{ category: 'art', level: 'hard', question: '고야가 그린, 자식을 잡아먹는 신의 모습을 그린 충격적인 그림은?', answer: ['사투르누스'] },
	{ category: 'art', level: 'hard', question: '마네의 <풀밭 위의 점심>은 당시 왜 비난을 받았는가?', answer: ['나체', '누드'] }, // 현실적인 여성의 나체
	{ category: 'art', level: 'hard', question: '로코코 시대 화가 프라고나르의 그림 <그네>에서 여자의 무엇이 날아가는가?', answer: ['신발', '구두'] },
	{ category: 'art', level: 'hard', question: '미술품 복원 전문가를 뜻하는 용어는?', answer: ['보존가', '컨서베이터'] },
	{ category: 'art', level: 'hard', question: '세계에서 가장 비싸게 팔린 그림 중 하나인 다빈치의 예수 초상화는?', answer: ['살바토르문디'] },

	// ============================================================
	// [넌센스] 100문제 (인터넷 베스트 모음)
	// ============================================================
	
	// [난이도: 쉬움] (누구나 아는 국민 넌센스)
	{ category: 'nonsense', level: 'easy', question: '왕이 넘어지면?', answer: ['킹콩'] },
	{ category: 'nonsense', level: 'easy', question: '오리를 생으로 먹으면?', answer: ['회오리'] },
	{ category: 'nonsense', level: 'easy', question: '세상에서 가장 뜨거운 과일은?', answer: ['천도복숭아'] },
	{ category: 'nonsense', level: 'easy', question: '비가 한 시간 동안 내리면?', answer: ['추적60분'] },
	{ category: 'nonsense', level: 'easy', question: '할아버지가 좋아하는 돈은?', answer: ['할머니'] },
	{ category: 'nonsense', level: 'easy', question: '병아리가 먹는 약은?', answer: ['삐약'] },
	{ category: 'nonsense', level: 'easy', question: '물고기가 뀌는 방귀는?', answer: ['생선가스'] },
	{ category: 'nonsense', level: 'easy', question: '자동차가 울면?', answer: ['잉카'] },
	{ category: 'nonsense', level: 'easy', question: '소가 웃으면?', answer: ['우하하'] },
	{ category: 'nonsense', level: 'easy', question: '우유가 넘어지면?', answer: ['아야'] },
	{ category: 'nonsense', level: 'easy', question: '가장 억울한 도형은?', answer: ['원통'] },
	{ category: 'nonsense', level: 'easy', question: '도둑이 훔친 돈을 뭐라고 할까?', answer: ['슬그머니'] },
	{ category: 'nonsense', level: 'easy', question: '바나나가 웃으면?', answer: ['바나나킥'] },
	{ category: 'nonsense', level: 'easy', question: '사과가 웃으면?', answer: ['풋사과'] },
	{ category: 'nonsense', level: 'easy', question: '불이 4곳에 나면?', answer: ['사파이어'] },
	{ category: 'nonsense', level: 'easy', question: '신사가 자기소개를 하면?', answer: ['신사임당'] },
	{ category: 'nonsense', level: 'easy', question: '아몬드가 죽으면?', answer: ['다이아몬드'] },
	{ category: 'nonsense', level: 'easy', question: '얼음이 죽으면?', answer: ['다이빙'] },
	{ category: 'nonsense', level: 'easy', question: '세상에서 가장 추운 바다는?', answer: ['썰렁해'] },
	{ category: 'nonsense', level: 'easy', question: '고기 먹을 때마다 쫓아다니는 개는?', answer: ['이쑤시개'] },
	{ category: 'nonsense', level: 'easy', question: '세상에서 가장 빠른 닭은?', answer: ['후다닥'] },
	{ category: 'nonsense', level: 'easy', question: '세상에서 가장 야한 닭은?', answer: ['홀딱'] },
	{ category: 'nonsense', level: 'easy', question: '소가 가는 곳은?', answer: ['우간다'] },
	{ category: 'nonsense', level: 'easy', question: '개가 사람을 가르친다를 4글자로 줄이면?', answer: ['개인지도'] },
	{ category: 'nonsense', level: 'easy', question: '세상에서 가장 큰 코는?', answer: ['멕시코'] },
	{ category: 'nonsense', level: 'easy', question: '숫자 5가 싫어하는 집은?', answer: ['오페라하우스'] },
	{ category: 'nonsense', level: 'easy', question: '다 자랐는데도 계속 자라라고 하는 것은?', answer: ['자라'] },
	{ category: 'nonsense', level: 'easy', question: '먹으면 죽는데 안 먹을 수 없는 것은?', answer: ['나이'] },
	{ category: 'nonsense', level: 'easy', question: '화장실에서 방금 나온 사람은?', answer: ['일본사람'] },
	{ category: 'nonsense', level: 'easy', question: '꽃가게 주인이 가장 싫어하는 도시는?', answer: ['시드니'] },
	
	// [난이도: 보통] (센스 있는 아재 개그)
	{ category: 'nonsense', level: 'normal', question: '세상에서 가장 가난한 왕은?', answer: ['최저임금'] },
	{ category: 'nonsense', level: 'normal', question: '딸기가 직장을 잃으면?', answer: ['딸기시럽'] },
	{ category: 'nonsense', level: 'normal', question: '우유가 아프면?', answer: ['앙팡'] },
	{ category: 'nonsense', level: 'normal', question: '세상에서 가장 지루한 중학교는?', answer: ['로딩중'] },
	{ category: 'nonsense', level: 'normal', question: '식인종이 밥투정 할 때 하는 말은?', answer: ['살맛안나'] },
	{ category: 'nonsense', level: 'normal', question: '별 중에 가장 슬픈 별은?', answer: ['이별'] },
	{ category: 'nonsense', level: 'normal', question: '진짜 새의 이름은?', answer: ['참새'] },
	{ category: 'nonsense', level: 'normal', question: '가장 싸게 지은 성은?', answer: ['유성'] },
	{ category: 'nonsense', level: 'normal', question: '보내기 싫으면?', answer: ['가위', '바위'] }, 
	{ category: 'nonsense', level: 'normal', question: '추장보다 높은 사람은?', answer: ['고추장'] },
	{ category: 'nonsense', level: 'normal', question: '고추장보다 높은 사람은?', answer: ['초고추장'] },
	{ category: 'nonsense', level: 'normal', question: '초고추장보다 높은 사람은?', answer: ['태양초고추장'] },
	{ category: 'nonsense', level: 'normal', question: '자가용의 반대말은?', answer: ['커용'] },
	{ category: 'nonsense', level: 'normal', question: '가장 뜨거운 전화는?', answer: ['화상전화'] },
	{ category: 'nonsense', level: 'normal', question: '어부들이 가장 싫어하는 가수는?', answer: ['배철수'] },
	{ category: 'nonsense', level: 'normal', question: '세상에서 가장 폭력적인 동물은?', answer: ['팬다'] },
	{ category: 'nonsense', level: 'normal', question: '펭귄이 다니는 고등학교는?', answer: ['냉장고'] },
	{ category: 'nonsense', level: 'normal', question: '펭귄이 다니는 대학교는?', answer: ['빙하시대'] },
	{ category: 'nonsense', level: 'normal', question: '싸움을 가장 좋아하는 나라는?', answer: ['칠레'] },
	{ category: 'nonsense', level: 'normal', question: '아마존에 살고 있는 사람의 이름은?', answer: ['아마존'] }, 
	{ category: 'nonsense', level: 'normal', question: '비가 뚝 그치면?', answer: ['해변'] }, 
	{ category: 'nonsense', level: 'normal', question: '중학생과 고등학생이 타는 차는?', answer: ['중고차'] },
	{ category: 'nonsense', level: 'normal', question: '왕이 궁에 들어가기 싫을 때 하는 말은?', answer: ['궁시렁'] },
	{ category: 'nonsense', level: 'normal', question: '차가 다니는 도로는 차도다. 사람이 다니는 도로는?', answer: ['인도'] },
	{ category: 'nonsense', level: 'normal', question: '미국에 비가 내리면?', answer: ['유스비', 'usb'] },
	{ category: 'nonsense', level: 'normal', question: '세상에서 가장 야한 채소는?', answer: ['버섯'] },
	{ category: 'nonsense', level: 'normal', question: '세상에서 가장 착한 사자는?', answer: ['자원봉사자'] },
	{ category: 'nonsense', level: 'normal', question: '반성문을 영어로 하면?', answer: ['글로벌'] },
	{ category: 'nonsense', level: 'normal', question: '논리적인 사람이 총을 쏘면?', answer: ['타당타당'] },
	{ category: 'nonsense', level: 'normal', question: '돌고래는 영어로 돌핀이다. 그럼 고래는?', answer: ['핀'] },
	{ category: 'nonsense', level: 'normal', question: '가수 설운도가 옷을 벗는 순서는?', answer: ['상하의'] },
	{ category: 'nonsense', level: 'normal', question: '세상에서 가장 팔 힘이 센 사람은?', answer: ['아이언맨'] }, 
	{ category: 'nonsense', level: 'normal', question: '소금의 유통기한은?', answer: ['천일'] },
	{ category: 'nonsense', level: 'normal', question: '지금 몇 시 몇 분이야?', answer: ['짜장면시키신분'] },
	{ category: 'nonsense', level: 'normal', question: '가장 믿을 수 없는 오리는?', answer: ['미운오리'] },
	{ category: 'nonsense', level: 'normal', question: '세상에서 가장 쉬운 숫자는?', answer: ['십구만'] },
	{ category: 'nonsense', level: 'normal', question: '세상에서 가장 긍정적인 동물은?', answer: ['돼지'] }, 
	{ category: 'nonsense', level: 'normal', question: '세상에서 가장 비싼 새는?', answer: ['백조'] },
	{ category: 'nonsense', level: 'normal', question: '누룽지를 영어로 하면?', answer: ['바비브라운'] },
	{ category: 'nonsense', level: 'normal', question: '형과 동생이 싸웠는데 동생 편만 드는 세상은?', answer: ['형편없는세상'] },
	
	// [난이도: 어려움] (영어, 한자, 창의력 필요)
	{ category: 'nonsense', level: 'hard', question: '반성문을 영어로 하면?', answer: ['글로벌'] }, 
	{ category: 'nonsense', level: 'hard', question: '세상에서 가장 긴 음식은?', answer: ['참기름'] },
	{ category: 'nonsense', level: 'hard', question: '새우가 주인공인 드라마는?', answer: ['대하드라마'] },
	{ category: 'nonsense', level: 'hard', question: '가수 비의 매니저가 하는 일은?', answer: ['비만관리'] },
	{ category: 'nonsense', level: 'hard', question: '세상에서 가장 야한 가수는?', answer: ['다비치'] },
	{ category: 'nonsense', level: 'hard', question: '사람들이 가장 좋아하는 물은?', answer: ['선물'] },
	{ category: 'nonsense', level: 'hard', question: '인천 앞바다의 반대말은?', answer: ['인천엄마다'] },
	{ category: 'nonsense', level: 'hard', question: '빵이 터지면?', answer: ['0', '영'] }, 
	{ category: 'nonsense', level: 'hard', question: '9가 차를 들이받으면?', answer: ['구박'] },
	{ category: 'nonsense', level: 'hard', question: '바람이 귀엽게 부는 지역은?', answer: ['분당'] },
	{ category: 'nonsense', level: 'hard', question: '침대를 밀고 돌리면?', answer: ['배드민턴'] },
	{ category: 'nonsense', level: 'hard', question: '창문 100개 중 2개가 깨지면?', answer: ['윈도우98'] },
	{ category: 'nonsense', level: 'hard', question: '푸가 넘어지면?', answer: ['쿵푸'] },
	{ category: 'nonsense', level: 'hard', question: '아홉 명의 자식을 둔 여자는?', answer: ['아이구'] },
	{ category: 'nonsense', level: 'hard', question: '곰이 목욕하는 곳은?', answer: ['곰탕'] },
	{ category: 'nonsense', level: 'hard', question: '비가 빅뱅에 들어가지 않은 이유는?', answer: ['태양을피하고싶어서'] },
	{ category: 'nonsense', level: 'hard', question: '사오정이 다니는 학교는?', answer: ['뭐라고'] },
	{ category: 'nonsense', level: 'hard', question: '세균 중에서 대장은?', answer: ['대장균'] },
	{ category: 'nonsense', level: 'hard', question: '하늘에 콩이 2개 있으면?', answer: ['스카이콩콩'] },
	{ category: 'nonsense', level: 'hard', question: '도둑이 가장 싫어하는 아이스크림은?', answer: ['누가바'] },
	{ category: 'nonsense', level: 'hard', question: '아이들이 가장 좋아하는 기름은?', answer: ['오월오일'] },
	{ category: 'nonsense', level: 'hard', question: '아빠가 둘, 엄마가 한 명인 사람은?', answer: ['두부한모'] },
	{ category: 'nonsense', level: 'hard', question: '한 입 베어 먹은 사과는?', answer: ['파인애플'] },
	{ category: 'nonsense', level: 'hard', question: '텔레토비에서 뽀가 떠나면?', answer: ['뽀빠이'] },
	{ category: 'nonsense', level: 'hard', question: '세상에서 가장 장사를 잘하는 동물은?', answer: ['판다'] },
	{ category: 'nonsense', level: 'hard', question: '나무가 4개 있으면?', answer: ['포트'] }, 
	{ category: 'nonsense', level: 'hard', question: '차를 발로 차면?', answer: ['카놀라유'] },
	{ category: 'nonsense', level: 'hard', question: '소가 번개에 맞아 죽으면?', answer: ['우사인볼트'] },
	{ category: 'nonsense', level: 'hard', question: '가장 더러운 강은?', answer: ['요강'] },
	{ category: 'nonsense', level: 'hard', question: '아주 오래전에 건설된 다리는?', answer: ['구닥다리'] },
	{ category: 'nonsense', level: 'hard', question: '사람의 옷을 벗기게 할 수 있는 식물은?', answer: ['버섯'] },
];

// ... (퀴즈 데이터 끝나는 부분 아래) ...

// ============================================================
// 2. 게임 변수 & 로직
// ============================================================

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
const timeLimitPerQuestion = 60; 
let timeLeft = timeLimitPerQuestion;
let totalQuestions = 10; 
let currentDifficulty = 'easy'; 

// ★★★ [추가] 힌트 제한 변수 ★★★
let hintCount = 0;      // 현재 사용한 힌트 개수
const maxHints = 3;     // 최대 사용할 수 있는 힌트 개수

// ============================================================
// 3. 주요 함수
// ============================================================

// 난이도 설정 함수
function setDifficulty(level) {
	currentDifficulty = level;
	
	// 모든 버튼의 active 클래스 제거
	const buttons = document.querySelectorAll('.btn-level');
	buttons.forEach(btn => btn.classList.remove('active'));

	// 선택한 버튼에 active 클래스 추가
	const selectedBtn = document.getElementById(`btn-${level}`);
	if (selectedBtn) {
		selectedBtn.classList.add('active');
	}
}

function startGame(category) {
	let filteredQuestions;
	
	// 데이터 문법 오류 방지 체크
	if (typeof quizData === 'undefined' || !quizData || quizData.length === 0) {
		alert("데이터가 로드되지 않았습니다. script.js의 콤마(,)나 괄호 상태를 확인해주세요.");
		return;
	}

	// ★★★ [수정된 부분] 랜덤 모드면 25문제, 아니면 10문제 설정 ★★★
	if (category === 'random') {
		totalQuestions = 25; // 랜덤 도전은 25문제!
	} else {
		totalQuestions = 10; // 나머지는 가볍게 10문제
	}
	
	// ★★★ [여기 수정함] 필터링 로직 ★★★
	if (category === 'random') {
		// [수정] 넌센스는 제외하고 가져오기 (&& q.category !== 'nonsense' 추가)
		filteredQuestions = quizData.filter(q => 
			(q.level || 'normal') === currentDifficulty && q.category !== 'nonsense'
		);
		
		// (참고) 만약 난이도 상관없이 '전체 문제'에서 넌센스만 빼고 싶다면 아래 코드를 쓰세요.
		// filteredQuestions = quizData.filter(q => q.category !== 'nonsense');
	
	} else {
		// 일반 모드 (기존 동일)
		filteredQuestions = quizData.filter(q => 
			q.category === category && (q.level || 'normal') === currentDifficulty
		);
	}

	// 문제가 없을 경우
	if(filteredQuestions.length === 0) {
		alert(`선택하신 '${category}' 분야의 '${currentDifficulty}' 난이도 문제가 부족합니다.\n데이터를 더 추가하거나 난이도를 변경해주세요.`);
		return;
	}

	// 셔플 및 자르기
	filteredQuestions.sort(() => Math.random() - 0.5);
	
	// 설정된 문제 수(totalQuestions)만큼 자르기
	const limit = Math.min(filteredQuestions.length, totalQuestions);
	currentQuestions = filteredQuestions.slice(0, limit);

	currentQuestionIndex = 0;
	score = 0;
	
	// ★★★ [추가] 게임 시작할 때 힌트 사용 횟수 리셋 ★★★
	hintCount = 0;

	document.getElementById('start-screen').classList.remove('active');
	document.getElementById('quiz-screen').classList.add('active');
	
	setCategoryBadge(category);
	// ★★★ [여기 추가!] 홈 버튼 숨기기/보이기 로직 ★★★
	const homeBtn = document.getElementById('btn-home');
	
	if (category === 'random') {
	// 티어 챌린지(랜덤)면 -> 홈 버튼 숨김! (도망 못 감 😎)
		homeBtn.style.display = 'none';
	} else {
	// 일반 게임이면 -> 홈 버튼 보임!
		homeBtn.style.display = 'inline-block';
	}
	// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
	
	loadQuestion();
	}

// 카테고리 배지(타이틀) 설정 함수
	function setCategoryBadge(category) {
		// 1. 랜덤(티어 챌린지)일 때: 고정 멘트 출력하고 함수 종료
		if (category === 'random') {
			document.getElementById('category-badge').innerText = "🏆 내 상식 티어 측정하기";
			return; 
		}
	
		// 2. 일반 퀴즈일 때: 카테고리 이름 + 난이도 표시
		const badges = {
			'history': '📜 역사', 'science': '🧬 과학', 'movie': '🎬 영화',
			'geo': '🌍 지리', 'proverb': '🦉 속담', 'people': '👤 인물',
			'art': '🎨 예술', 'nonsense': '🤣 넌센스', 
			'sports': '⚽ 스포츠', 'food': '🍔 음식'
		};
		
		// 현재 난이도를 한글로 변환
		const levelText = currentDifficulty === 'easy' ? '쉬움' : currentDifficulty === 'normal' ? '보통' : '어려움';
		
		// 카테고리 영문명을 한글로 변환 (없으면 영문 그대로)
		const catText = badges[category] || category;
		
		// 화면에 적용 (예: "📜 역사 (쉬움)")
		document.getElementById('category-badge').innerText = `${catText} (${levelText})`;
	}

function loadQuestion() {
	clearInterval(timer);
	timeLeft = timeLimitPerQuestion;
	updateTimerUI();

	const q = currentQuestions[currentQuestionIndex];
	document.getElementById('question-count').innerText = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
	document.getElementById('question-text').innerText = q.question;
	
	// 입력창 초기화
	const input = document.getElementById('answer-input');
	input.value = '';
	input.focus();
	
	document.getElementById('feedback-msg').innerText = '';
	document.getElementById('hint-text').innerText = '';

	// 버튼 활성화 리셋
	document.querySelectorAll('button').forEach(btn => btn.disabled = false);
	
	// ★★★ [수정] 힌트 버튼 상태 업데이트 (남은 개수 표시) ★★★
	const hintBtn = document.querySelector('.btn-hint');
	const hintsLeft = maxHints - hintCount; // 남은 개수 계산
	
	if (hintsLeft <= 0) {
		// 힌트 다 썼으면 버튼 비활성화 (회색)
		hintBtn.innerText = `💡 힌트 (0/${maxHints})`;
		hintBtn.disabled = true;
		hintBtn.style.opacity = "0.6"; // 흐릿하게
	} else {
		// 아직 남았으면 정상 표시
		hintBtn.innerText = `💡 힌트 (${hintsLeft}/${maxHints})`;
		hintBtn.disabled = false;
		hintBtn.style.opacity = "1";
	}
	
	timer = setInterval(() => {
		timeLeft--;
		updateTimerUI();
		if (timeLeft <= 0) {
			clearInterval(timer);
			showFeedback(false, true);
		}
	}, 1000);
}

function updateTimerUI() {
	const bar = document.getElementById('time-left');
	const percentage = (timeLeft / timeLimitPerQuestion) * 100;
	bar.style.width = percentage + '%';
	
	if (timeLeft <= 10) bar.style.background = '#ff6b6b';
	else bar.style.background = '#764ba2';
}

function useHint() {
	// ★★★ [추가] 힌트 개수 초과 확인 ★★★
	if (hintCount >= maxHints) {
		alert("힌트를 모두 사용했습니다! (최대 3회)");
		return;
	}

	// 힌트 사용 카운트 증가
	hintCount++;

	const currentQ = currentQuestions[currentQuestionIndex];
	const firstAnswer = currentQ.answer[0];
	const hintChar = firstAnswer.charAt(0);
	
	if (firstAnswer.length === 1) {
		document.getElementById('hint-text').innerText = `💡 힌트: 정답은 1글자 입니다.`;
	} else {
		document.getElementById('hint-text').innerText = `💡 힌트: "${hintChar}"로 시작합니다.`;
	}

	// ★★★ [추가] 버튼 텍스트 즉시 갱신 ★★★
	const hintBtn = document.querySelector('.btn-hint');
	const hintsLeft = maxHints - hintCount;
	hintBtn.innerText = `💡 힌트 (${hintsLeft}/${maxHints})`;

	// 만약 방금 쓴 게 마지막 힌트였다면 바로 비활성화
	if (hintsLeft <= 0) {
		hintBtn.disabled = true;
		hintBtn.style.opacity = "0.6";
	}
}

function passQuestion() {
	// 묻지 않고 바로 패스 처리 (오답 처리됨)
	showFeedback(false, false, true);
}

function checkAnswer() {
	const inputRaw = document.getElementById('answer-input').value;
	if (!inputRaw.trim()) return;

	const clean = (str) => str.replace(/[^a-zA-Z0-9가-힣]/g, "").toLowerCase();
	const inputClean = clean(inputRaw);
	const currentQ = currentQuestions[currentQuestionIndex];
	
	const isCorrect = currentQ.answer.some(ans => {
		const ansClean = clean(ans);
		return inputClean.includes(ansClean);
	});

	if (isCorrect) {
		score++;
		showFeedback(true);
	} else {
		showFeedback(false);
	}
}

function showFeedback(isCorrect, isTimeout = false, isPass = false) {
	clearInterval(timer);
	const feedback = document.getElementById('feedback-msg');
	const mainAnswer = currentQuestions[currentQuestionIndex].answer[0];
	const gameContainer = document.getElementById('quiz-screen'); // 흔들 대상(게임화면)

	// 중복 제출 방지
	document.querySelector('.btn-submit').disabled = true;

	if (isPass) {
		feedback.innerText = `🏳️ 패스! 정답: ${mainAnswer}`;
		feedback.style.color = '#636e72';
	} else if (isTimeout) {
		feedback.innerText = `⏰ 시간 초과! 정답: ${mainAnswer}`;
		feedback.style.color = '#ff6b6b';
		triggerShake(gameContainer); // ★ 시간 초과도 흔들기!
	} else if (isCorrect) {
		feedback.innerText = "🎉 정답입니다!";
		feedback.style.color = '#1dd1a1';
	} else {
		// 오답인 경우
		feedback.innerText = `❌ 땡! 정답: ${mainAnswer}`;
		feedback.style.color = '#ff6b6b';
		triggerShake(gameContainer); // ★ 오답일 때 흔들기!
	}

	setTimeout(() => {
		currentQuestionIndex++;
		if (currentQuestionIndex < currentQuestions.length) {
			loadQuestion();
		} else {
			endGame();
		}
	}, 2000);
}

// ★ 흔들기 효과 실행 함수 (따로 추가해주세요)
function triggerShake(element) {
	// 1. 진동 (안드로이드용)
	if (navigator.vibrate) navigator.vibrate(300);
	
	// 2. 화면 흔들기 (아이폰 + 안드로이드 공통 시각 효과)
	element.classList.add('shake');
	
	// 0.4초 뒤에 흔들기 클래스 제거 (다음에도 또 흔들려야 하니까)
	setTimeout(() => {
		element.classList.remove('shake');
	}, 400);
}

function endGame() {
	document.getElementById('quiz-screen').classList.remove('active');
	document.getElementById('end-screen').classList.add('active');
	
	// 점수 표시
	document.getElementById('final-score').innerText = score;
	document.querySelector('.total-label').innerText = `/ ${currentQuestions.length}`;
	
	let msg = "";
	// 점수 비율 계산
	const ratio = score / currentQuestions.length;
	
	// 현재 타이틀 텍스트 가져오기
	const badgeText = document.getElementById('category-badge').innerText;

	// ★★★ [수정 핵심] 타이틀에 '티어' 또는 '랜덤'이라는 글자가 있으면 티어 모드로 인식! ★★★
	if (badgeText.includes('티어') || badgeText.includes('랜덤')) {
		
		if (ratio >= 0.84) { 
			// 25문제 기준: 21점 ~ 25점
			msg = "👑 [티어: 챌린저] 와... 걸어 다니는 백과사전이세요?";
		} else if (ratio >= 0.64) { 
			// 25문제 기준: 16점 ~ 20점
			msg = "💎 [티어: 다이아] 인정합니다! 상식 상위 1%급!";
		} else if (ratio >= 0.44) { 
			// 25문제 기준: 11점 ~ 15점
			msg = "🥇 [티어: 골드] 딱 대한민국 평균! 조금만 더 분발하세요.";
		} else if (ratio >= 0.24) { 
			// 25문제 기준: 6점 ~ 10점
			msg = "🥈 [티어: 실버] 뉴스 좀 보고 사셔야겠어요...😅";
		} else { 
			// 25문제 기준: 0점 ~ 5점
			msg = "🗿 [티어: 돌멩이] 뇌가 아주 순수하시네요! 공부 시급🚨";
		}
		
	} else {
		// 일반 모드 (10문제) 메시지
		if (ratio === 1) msg = "🏆 완벽해요! 혹시 천재?";
		else if (ratio >= 0.8) msg = "👍 대단해요! 상식 왕!";
		else if (ratio >= 0.5) msg = "👏 잘했어요! 통과!";
		else msg = "💪 힘내세요! 다시 도전!";
	}
	
	document.getElementById('score-text').innerText = msg;
	
	// 타이틀 멘트 설정
	if (ratio >= 0.5) {
		document.getElementById('result-title').innerText = "축하합니다! 🎉";
		document.getElementById('result-title').style.color = '#764ba2'; // 보라색
	} else {
		document.getElementById('result-title').innerText = "재시험 요망 😱";
		document.getElementById('result-title').style.color = '#ff6b6b'; // 빨간색
	}
}

// ★ 결과 공유 기능 (텍스트+URL 합치기 버전)
function shareResult() {
	const categoryName = document.getElementById('category-badge').innerText;
	
	// 1. 티어 텍스트 계산 (지난번에 드린 코드가 없다면 여기서 다시 계산)
	// (만약 shareResult 함수 안에 티어 계산 로직이 없다면 아래 코드를 그대로 쓰세요)
	const total = currentQuestions.length;
	const ratio = score / total;
	let tierResult = "";

	if (categoryName.includes('티어') || categoryName.includes('랜덤')) {
		if (ratio >= 0.84) tierResult = "👑 챌린저 (상위 0.1%)";
		else if (ratio >= 0.64) tierResult = "💎 다이아 (상위 1%)";
		else if (ratio >= 0.44) tierResult = "🥇 골드 (평균 이상)";
		else if (ratio >= 0.24) tierResult = "🥈 실버 (평균)";
		else tierResult = "🗿 돌멩이 (공부 시급)";
	} else {
		if (ratio === 1) tierResult = "💯 만점 (천재인증)";
		else if (ratio >= 0.8) tierResult = "👍 고수 인정!";
		else tierResult = "💪 다시 도전해보세요!";
	}

	// 2. ★ 핵심 변경사항 ★
	// URL을 따로 두지 말고, text 변수 안에 문자열로 합쳐버립니다.
	const myUrl = 'https://tier-quiz-git-main-johanchangs-projects.vercel.app';
	
	const fullMessage = `[🧠 퀴즈 마스터 결과]
📌 분야: ${categoryName}
🏆 점수: ${score}점
🎖️ 등급: ${tierResult}

니 티어는 어디니? 도전해봐! 👇
${myUrl}`;

	// 3. 공유 데이터 설정
	const shareData = {
		title: '🧠 퀴즈 마스터 결과',
		text: fullMessage, // 여기에 URL까지 포함된 전체 텍스트를 넣습니다.
		// url: myUrl  <-- ❌ 이 줄을 지우거나 주석 처리하세요! (이게 있으면 텍스트가 씹힙니다)
	};

	// 4. 공유하기 실행
	if (navigator.share) {
		navigator.share(shareData)
			.then(() => console.log('공유 성공'))
			.catch((error) => {
				// 사용자가 취소했거나 에러가 나면 그냥 복사 기능으로 넘김
				console.log('공유 실패/취소', error);
			});
	} else {
		// PC 등 지원 안 하는 경우 클립보드 복사
		navigator.clipboard.writeText(fullMessage).then(() => {
			alert("결과가 복사되었습니다! 카톡 채팅방에 붙여넣으세요.");
		}).catch(() => {
			alert("복사 실패");
		});
	}
}
// 엔터키 입력 시 정답 확인 (한글 입력 오류 방지 적용)
document.getElementById('answer-input').addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		if (event.isComposing) return; // 한글 조합 중 중복 입력 방지
		checkAnswer();
	}
});
// =========================================
// 🏠 홈으로 가기 (커스텀 모달 기능)
// =========================================

// 1. 홈 버튼 눌렀을 때 -> 모달 띄우기
function goHome() {
	// 게임 중이 아니면 그냥 패스 (안전장치)
	const quizScreen = document.getElementById('quiz-screen');
	if (!quizScreen.classList.contains('active')) return;

	// ★ 중요: 팝업 떠있는 동안 시간 가는 것을 막기 위해 타이머 일시정지
	clearInterval(timer);

	// 모달창 보여주기
	document.getElementById('confirm-modal').classList.add('active');
}

// 2. '계속 풀기' 눌렀을 때 -> 모달 닫고 타이머 재개
function closeModal() {
	document.getElementById('confirm-modal').classList.remove('active');

	// ★ 중요: 멈췄던 타이머 다시 시작!
	if (timeLeft > 0) {
		timer = setInterval(() => {
			timeLeft--;
			updateTimerUI();
			if (timeLeft <= 0) {
				clearInterval(timer);
				showFeedback(false, true);
			}
		}, 1000);
	}
}

// 3. '나가기' 눌렀을 때 -> 진짜 홈으로 이동
function confirmExit() {
	// 모달 닫기
	document.getElementById('confirm-modal').classList.remove('active');
	
	// 퀴즈 화면 숨기고 시작 화면 보여주기
	document.getElementById('quiz-screen').classList.remove('active');
	document.getElementById('end-screen').classList.remove('active'); // 혹시 결과창일 수도 있으니
	document.getElementById('start-screen').classList.add('active');
	
	// 점수 등 초기화는 어차피 startGame 할 때 되므로 여기선 화면 전환만
}
