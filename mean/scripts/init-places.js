const mongoose = require('mongoose');
const util = require('util');
const debug = require('debug')('express-mongoose-es6-rest-api:index');

const config = require('../server/config/config');

const Place = require('../server/models/place.model');

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { keepAlive: 1 });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// const place = [];


const places = [
  {
    id: 1,
    name: 'ขอนแก่น',
    img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2018/02/DEW_7430-800x533.jpg',
    totalPlace: '02'
  },
  {
    id: 2,
    name: 'ชัยภูมิ',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJp3DzPvMvzFSsWv0yS22ReeBZ4ykRLZ9hbQ&usqp=CAU',
    totalPlace: '01'
  },
  {
    id: 3,
    name: 'นครพนม',
    img: 'https://www.paiduaykan.com/province/Northeast/nakhonphanom/pic/payanak3.jpg',
    totalPlace: '03'
  },
  {
    id: 4,
    name: 'นครราชสีมา',
    img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2016/12/DSC_4762.jpg',
    totalPlace: '01'
  },
  {
    id: 5,
    name: 'บึงกาฬ',
    img: 'https://www.paiduaykan.com/province/Northeast/bungkan/pic/phutok23.jpg',
    totalPlace: '04'
  },
  {
    id: 6,
    name: 'มุกดาหาร',
    img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2019/12/1-SON06932-800x533.jpg',
    totalPlace: '01'
  },
  {
    id: 7,
    name: 'ยโสธร',
    img: 'https://www.paiduaykan.com/province/Northeast/yasothon/pic/bansingtha.jpg',
    totalPlace: '02'
  },
  {
    id: 8,
    name: 'ร้อยเอ็ด',
    img: 'https://paiduaykan.com/province/Northeast/roiet/pic/prajadeechaimongkol2.jpg',
    totalPlace: '04'
  },
  {
    id: 9,
    name: 'เลย',
    img: 'https://www.paiduaykan.com/province/Northeast/loie/pic/phupapoh.jpg',
    totalPlace: '05'
  },
  {
    id: 10,
    name: 'ศรีสะเกษ',
    img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2019/10/1-DEW_6335-800x533.jpg',
    totalPlace: '02'
  },
  {
    id: 11,
    name: 'สกลนคร',
    img: 'https://www.paiduaykan.com/province/Northeast/sakonnakhon/pic/lotusmuseum.jpg',
    totalPlace: '01'
  },
  {
    id: 12,
    name: 'หนองคาย',
    img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2020/01/3-SON09363-800x533.jpg',
    totalPlace: '02'
  },
  {
    id: 13,
    name: 'หนองบัวลำภู',
    img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2018/10/%E0%B8%9B%E0%B8%81%E0%B8%96%E0%B9%89%E0%B8%B3%E0%B8%9C%E0%B8%B2%E0%B9%80%E0%B8%88%E0%B8%B2%E0%B8%B0-800x534.jpg',
    totalPlace: '02'
  },
  {
    id: 14,
    name: 'อุดรธานี',
    img: 'https://travel.mthai.com/app/uploads/2013/09/I-San-Photo-Contest-2012_consolation-prize_01-B.jpg',
    totalPlace: '03'
  },
  {
    id: 15,
    name: 'อุบลราชธานี',
    img: 'https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/watsirintorn3.jpg',
    totalPlace: '07'
  },
];

Place.insertMany(places, (error, docs) => {
  if (error) {
    console.error(error);
  } else {
    console.log(docs);
  }
  mongoose.connection.close();
});

// Place.deleteMany({}, (error, docs) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(docs);
//   }
//   mongoose.connection.close();
// });
