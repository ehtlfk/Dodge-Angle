const allchampions = [
  {
    id: '266',
    name: '아트록스',
    image: 'Aatrox.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '103',
    name: '아리',
    image: 'Ahri.png',
    tags: ['Mage', 'Assassin'],
  },
  {
    id: '84',
    name: '아칼리',
    image: 'Akali.png',
    tags: ['Assassin'],
  },
  {
    id: '12',
    name: '알리스타',
    image: 'Alistar.png',
    tags: ['Tank', 'Support'],
  },
  {
    id: '32',
    name: '아무무',
    image: 'Amumu.png',
    tags: ['Tank', 'Mage'],
  },
  {
    id: '34',
    name: '애니비아',
    image: 'Anivia.png',
    tags: ['Mage', 'Support'],
  },
  {
    id: '1',
    name: '애니',
    image: 'Annie.png',
    tags: ['Mage'],
  },
  {
    id: '523',
    name: '아펠리오스',
    image: 'Aphelios.png',
    tags: ['Marksman'],
  },
  {
    id: '22',
    name: '애쉬',
    image: 'Ashe.png',
    tags: ['Marksman', 'Support'],
  },
  {
    id: '136',
    name: '아우렐리온 솔',
    image: 'AurelionSol.png',
    tags: ['Mage'],
  },
  {
    id: '268',
    name: '아지르',
    image: 'Azir.png',
    tags: ['Mage', 'Marksman'],
  },
  {
    id: '432',
    name: '바드',
    image: 'Bard.png',
    tags: ['Support', 'Mage'],
  },
  {
    id: '53',
    name: '블리츠크랭크',
    image: 'Blitzcrank.png',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: '63',
    name: '브랜드',
    image: 'Brand.png',
    tags: ['Mage'],
  },
  {
    id: '201',
    name: '브라움',
    image: 'Braum.png',
    tags: ['Support', 'Tank'],
  },
  {
    id: '51',
    name: '케이틀린',
    image: 'Caitlyn.png',
    tags: ['Marksman'],
  },
  {
    id: '164',
    name: '카밀',
    image: 'Camille.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '69',
    name: '카시오페아',
    image: 'Cassiopeia.png',
    tags: ['Mage'],
  },
  {
    id: '31',
    name: '초가스',
    image: 'Chogath.png',
    tags: ['Tank', 'Mage'],
  },
  {
    id: '42',
    name: '코르키',
    image: 'Corki.png',
    tags: ['Marksman'],
  },
  {
    id: '122',
    name: '다리우스',
    image: 'Darius.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '131',
    name: '다이애나',
    image: 'Diana.png',
    tags: ['Fighter', 'Mage'],
  },
  {
    id: '119',
    name: '드레이븐',
    image: 'Draven.png',
    tags: ['Marksman'],
  },
  {
    id: '36',
    name: '문도 박사',
    image: 'DrMundo.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '245',
    name: '에코',
    image: 'Ekko.png',
    tags: ['Assassin', 'Fighter'],
  },
  {
    id: '60',
    name: '엘리스',
    image: 'Elise.png',
    tags: ['Mage', 'Fighter'],
  },
  {
    id: '28',
    name: '이블린',
    image: 'Evelynn.png',
    tags: ['Assassin', 'Mage'],
  },
  {
    id: '81',
    name: '이즈리얼',
    image: 'Ezreal.png',
    tags: ['Marksman', 'Mage'],
  },
  {
    id: '9',
    name: '피들스틱',
    image: 'Fiddlesticks.png',
    tags: ['Mage', 'Support'],
  },
  {
    id: '114',
    name: '피오라',
    image: 'Fiora.png',
    tags: ['Fighter', 'Assassin'],
  },
  {
    id: '105',
    name: '피즈',
    image: 'Fizz.png',
    tags: ['Assassin', 'Fighter'],
  },
  {
    id: '3',
    name: '갈리오',
    image: 'Galio.png',
    tags: ['Tank', 'Mage'],
  },
  {
    id: '41',
    name: '갱플랭크',
    image: 'Gangplank.png',
    tags: ['Fighter'],
  },
  {
    id: '86',
    name: '가렌',
    image: 'Garen.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '150',
    name: '나르',
    image: 'Gnar.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '79',
    name: '그라가스',
    image: 'Gragas.png',
    tags: ['Fighter', 'Mage'],
  },
  {
    id: '104',
    name: '그레이브즈',
    image: 'Graves.png',
    tags: ['Marksman'],
  },
  {
    id: '120',
    name: '헤카림',
    image: 'Hecarim.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '74',
    name: '하이머딩거',
    image: 'Heimerdinger.png',
    tags: ['Mage', 'Support'],
  },
  {
    id: '420',
    name: '일라오이',
    image: 'Illaoi.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '39',
    name: '이렐리아',
    image: 'Irelia.png',
    tags: ['Fighter', 'Assassin'],
  },
  {
    id: '427',
    name: '아이번',
    image: 'Ivern.png',
    tags: ['Support', 'Mage'],
  },
  {
    id: '40',
    name: '잔나',
    image: 'Janna.png',
    tags: ['Support', 'Mage'],
  },
  {
    id: '59',
    name: '자르반 4세',
    image: 'JarvanIV.png',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: '24',
    name: '잭스',
    image: 'Jax.png',
    tags: ['Fighter', 'Assassin'],
  },
  {
    id: '126',
    name: '제이스',
    image: 'Jayce.png',
    tags: ['Fighter', 'Marksman'],
  },
  {
    id: '202',
    name: '진',
    image: 'Jhin.png',
    tags: ['Marksman', 'Mage'],
  },
  {
    id: '222',
    name: '징크스',
    image: 'Jinx.png',
    tags: ['Marksman'],
  },
  {
    id: '145',
    name: '카이사',
    image: 'Kaisa.png',
    tags: ['Marksman'],
  },
  {
    id: '429',
    name: '칼리스타',
    image: 'Kalista.png',
    tags: ['Marksman'],
  },
  {
    id: '43',
    name: '카르마',
    image: 'Karma.png',
    tags: ['Mage', 'Support'],
  },
  {
    id: '30',
    name: '카서스',
    image: 'Karthus.png',
    tags: ['Mage'],
  },
  {
    id: '38',
    name: '카사딘',
    image: 'Kassadin.png',
    tags: ['Assassin', 'Mage'],
  },
  {
    id: '55',
    name: '카타리나',
    image: 'Katarina.png',
    tags: ['Assassin', 'Mage'],
  },
  {
    id: '10',
    name: '케일',
    image: 'Kayle.png',
    tags: ['Fighter', 'Support'],
  },
  {
    id: '141',
    name: '케인',
    image: 'Kayn.png',
    tags: ['Fighter', 'Assassin'],
  },
  {
    id: '85',
    name: '케넨',
    image: 'Kennen.png',
    tags: ['Mage', 'Marksman'],
  },
  {
    id: '121',
    name: '카직스',
    image: 'Khazix.png',
    tags: ['Assassin'],
  },
  {
    id: '203',
    name: '킨드레드',
    image: 'Kindred.png',
    tags: ['Marksman'],
  },
  {
    id: '240',
    name: '클레드',
    image: 'Kled.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '96',
    name: '코그모',
    image: 'KogMaw.png',
    tags: ['Marksman', 'Mage'],
  },
  {
    id: '7',
    name: '르블랑',
    image: 'Leblanc.png',
    tags: ['Assassin', 'Mage'],
  },
  {
    id: '64',
    name: '리 신',
    image: 'LeeSin.png',
    tags: ['Fighter', 'Assassin'],
  },
  {
    id: '89',
    name: '레오나',
    image: 'Leona.png',
    tags: ['Tank', 'Support'],
  },
  {
    id: '127',
    name: '리산드라',
    image: 'Lissandra.png',
    tags: ['Mage'],
  },
  {
    id: '236',
    name: '루시안',
    image: 'Lucian.png',
    tags: ['Marksman'],
  },
  {
    id: '117',
    name: '룰루',
    image: 'Lulu.png',
    tags: ['Support', 'Mage'],
  },
  {
    id: '99',
    name: '럭스',
    image: 'Lux.png',
    tags: ['Mage', 'Support'],
  },
  {
    id: '54',
    name: '말파이트',
    image: 'Malphite.png',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: '90',
    name: '말자하',
    image: 'Malzahar.png',
    tags: ['Mage', 'Assassin'],
  },
  {
    id: '57',
    name: '마오카이',
    image: 'Maokai.png',
    tags: ['Tank', 'Mage'],
  },
  {
    id: '11',
    name: '마스터 이',
    image: 'MasterYi.png',
    tags: ['Assassin', 'Fighter'],
  },
  {
    id: '21',
    name: '미스 포츈',
    image: 'MissFortune.png',
    tags: ['Marksman'],
  },
  {
    id: '62',
    name: '오공',
    image: 'MonkeyKing.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '82',
    name: '모데카이저',
    image: 'Mordekaiser.png',
    tags: ['Fighter'],
  },
  {
    id: '25',
    name: '모르가나',
    image: 'Morgana.png',
    tags: ['Mage', 'Support'],
  },
  {
    id: '267',
    name: '나미',
    image: 'Nami.png',
    tags: ['Support', 'Mage'],
  },
  {
    id: '75',
    name: '나서스',
    image: 'Nasus.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '111',
    name: '노틸러스',
    image: 'Nautilus.png',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: '518',
    name: '니코',
    image: 'Neeko.png',
    tags: ['Mage', 'Support'],
  },
  {
    id: '76',
    name: '니달리',
    image: 'Nidalee.png',
    tags: ['Assassin', 'Mage'],
  },
  {
    id: '56',
    name: '녹턴',
    image: 'Nocturne.png',
    tags: ['Assassin', 'Fighter'],
  },
  {
    id: '20',
    name: '누누와 윌럼프',
    image: 'Nunu.png',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: '2',
    name: '올라프',
    image: 'Olaf.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '61',
    name: '오리아나',
    image: 'Orianna.png',
    tags: ['Mage', 'Support'],
  },
  {
    id: '516',
    name: '오른',
    image: 'Ornn.png',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: '80',
    name: '판테온',
    image: 'Pantheon.png',
    tags: ['Fighter', 'Assassin'],
  },
  {
    id: '78',
    name: '뽀삐',
    image: 'Poppy.png',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: '555',
    name: '파이크',
    image: 'Pyke.png',
    tags: ['Support', 'Assassin'],
  },
  {
    id: '246',
    name: '키아나',
    image: 'Qiyana.png',
    tags: ['Assassin', 'Fighter'],
  },
  {
    id: '133',
    name: '퀸',
    image: 'Quinn.png',
    tags: ['Marksman', 'Assassin'],
  },
  {
    id: '497',
    name: '라칸',
    image: 'Rakan.png',
    tags: ['Support'],
  },
  {
    id: '33',
    name: '람머스',
    image: 'Rammus.png',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: '421',
    name: '렉사이',
    image: 'RekSai.png',
    tags: ['Fighter'],
  },
  {
    id: '58',
    name: '레넥톤',
    image: 'Renekton.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '107',
    name: '렝가',
    image: 'Rengar.png',
    tags: ['Assassin', 'Fighter'],
  },
  {
    id: '92',
    name: '리븐',
    image: 'Riven.png',
    tags: ['Fighter', 'Assassin'],
  },
  {
    id: '68',
    name: '럼블',
    image: 'Rumble.png',
    tags: ['Fighter', 'Mage'],
  },
  {
    id: '13',
    name: '라이즈',
    image: 'Ryze.png',
    tags: ['Mage', 'Fighter'],
  },
  {
    id: '113',
    name: '세주아니',
    image: 'Sejuani.png',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: '235',
    name: '세나',
    image: 'Senna.png',
    tags: ['Marksman', 'Support'],
  },
  {
    id: '875',
    name: '세트',
    image: 'Sett.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '35',
    name: '샤코',
    image: 'Shaco.png',
    tags: ['Assassin'],
  },
  {
    id: '98',
    name: '쉔',
    image: 'Shen.png',
    tags: ['Tank'],
  },
  {
    id: '102',
    name: '쉬바나',
    image: 'Shyvana.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '27',
    name: '신지드',
    image: 'Singed.png',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: '14',
    name: '사이온',
    image: 'Sion.png',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: '15',
    name: '시비르',
    image: 'Sivir.png',
    tags: ['Marksman'],
  },
  {
    id: '72',
    name: '스카너',
    image: 'Skarner.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '37',
    name: '소나',
    image: 'Sona.png',
    tags: ['Support', 'Mage'],
  },
  {
    id: '16',
    name: '소라카',
    image: 'Soraka.png',
    tags: ['Support', 'Mage'],
  },
  {
    id: '50',
    name: '스웨인',
    image: 'Swain.png',
    tags: ['Mage', 'Fighter'],
  },
  {
    id: '517',
    name: '사일러스',
    image: 'Sylas.png',
    tags: ['Mage', 'Assassin'],
  },
  {
    id: '134',
    name: '신드라',
    image: 'Syndra.png',
    tags: ['Mage', 'Support'],
  },
  {
    id: '223',
    name: '탐 켄치',
    image: 'TahmKench.png',
    tags: ['Support', 'Tank'],
  },
  {
    id: '163',
    name: '탈리야',
    image: 'Taliyah.png',
    tags: ['Mage', 'Support'],
  },
  {
    id: '91',
    name: '탈론',
    image: 'Talon.png',
    tags: ['Assassin'],
  },
  {
    id: '44',
    name: '타릭',
    image: 'Taric.png',
    tags: ['Support', 'Fighter'],
  },
  {
    id: '17',
    name: '티모',
    image: 'Teemo.png',
    tags: ['Marksman', 'Assassin'],
  },
  {
    id: '412',
    name: '쓰레쉬',
    image: 'Thresh.png',
    tags: ['Support', 'Fighter'],
  },
  {
    id: '18',
    name: '트리스타나',
    image: 'Tristana.png',
    tags: ['Marksman', 'Assassin'],
  },
  {
    id: '48',
    name: '트런들',
    image: 'Trundle.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '23',
    name: '트린다미어',
    image: 'Tryndamere.png',
    tags: ['Fighter', 'Assassin'],
  },
  {
    id: '4',
    name: '트위스티드 페이트',
    image: 'TwistedFate.png',
    tags: ['Mage'],
  },
  {
    id: '29',
    name: '트위치',
    image: 'Twitch.png',
    tags: ['Marksman', 'Assassin'],
  },
  {
    id: '77',
    name: '우디르',
    image: 'Udyr.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '6',
    name: '우르곳',
    image: 'Urgot.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '110',
    name: '바루스',
    image: 'Varus.png',
    tags: ['Marksman', 'Mage'],
  },
  {
    id: '67',
    name: '베인',
    image: 'Vayne.png',
    tags: ['Marksman', 'Assassin'],
  },
  {
    id: '45',
    name: '베이가',
    image: 'Veigar.png',
    tags: ['Mage'],
  },
  {
    id: '161',
    name: '벨코즈',
    image: 'Velkoz.png',
    tags: ['Mage'],
  },
  {
    id: '254',
    name: '바이',
    image: 'Vi.png',
    tags: ['Fighter', 'Assassin'],
  },
  {
    id: '112',
    name: '빅토르',
    image: 'Viktor.png',
    tags: ['Mage'],
  },
  {
    id: '8',
    name: '블라디미르',
    image: 'Vladimir.png',
    tags: ['Mage'],
  },
  {
    id: '106',
    name: '볼리베어',
    image: 'Volibear.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '19',
    name: '워윅',
    image: 'Warwick.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '498',
    name: '자야',
    image: 'Xayah.png',
    tags: ['Marksman'],
  },
  {
    id: '101',
    name: '제라스',
    image: 'Xerath.png',
    tags: ['Mage'],
  },
  {
    id: '5',
    name: '신 짜오',
    image: 'XinZhao.png',
    tags: ['Fighter', 'Assassin'],
  },
  {
    id: '157',
    name: '야스오',
    image: 'Yasuo.png',
    tags: ['Fighter', 'Assassin'],
  },
  {
    id: '83',
    name: '요릭',
    image: 'Yorick.png',
    tags: ['Fighter', 'Tank'],
  },
  {
    id: '350',
    name: '유미',
    image: 'Yuumi.png',
    tags: ['Support', 'Mage'],
  },
  {
    id: '154',
    name: '자크',
    image: 'Zac.png',
    tags: ['Tank', 'Fighter'],
  },
  {
    id: '238',
    name: '제드',
    image: 'Zed.png',
    tags: ['Assassin'],
  },
  {
    id: '115',
    name: '직스',
    image: 'Ziggs.png',
    tags: ['Mage'],
  },
  {
    id: '26',
    name: '질리언',
    image: 'Zilean.png',
    tags: ['Support', 'Mage'],
  },
  {
    id: '142',
    name: '조이',
    image: 'Zoe.png',
    tags: ['Mage', 'Support'],
  },
  {
    id: '143',
    name: '자이라',
    image: 'Zyra.png',
    tags: ['Mage', 'Support'],
  },
];

export default allchampions;
