module.exports = function () {
  let fs = require('fs');
  let path = require('path');
  let files = fs.readdirSync(path.join(__dirname, './data'));
  var data = {};
  files.forEach((value) => {
    let obj = require('./data/' + value);
    data = Object.assign(data, obj);
  });
  var status = ['待诊断', '诊断中', '已诊断', '待审核', '审核中', '已审核'];

  function getFrom() {
    let from = ['住院', '体检', '急诊', '门诊'];
    let i = getRandomNum(0, 3);
    return from[i];
  }
  var types = [{
      index: 0,
      name: 'CT',
      value: ['上腹部CT平扫', '胸部CT平扫', '肝胆胰脾CT平扫'],
      part: ['腹部', '胸部', '腹部']
    },
    {
      index: 1,
      name: 'DR',
      value: ['胸部正位片', '左膝关节正侧位', '右膝关节正侧位'],
      part: ['胸部', '四肢', '四肢']
    },
    {
      index: 2,
      name: 'MR',
      value: ['腰骶MRI平扫', '髋关节MRI平扫', '盆腔MRI平扫'],
      part: ['脊柱', '腹部', '腹部']
    },
    {
      index: 3,
      name: 'OT',
      value: ['骨密度测定(腰椎 左髋关节)', '骨密度测定(腰椎 左髋关节)', '骨密度测定(腰椎 左髋关节)'],
      part: ['腰椎 左髋关节', '腰椎 左髋关节', '腰椎 左髋关节']
    }
  ];

  function getType() {
    let i = getRandomNum(0, 3);
    return types[i];
  }

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  var no = getRandomNum(55555555555, 65555555555)
  var faker = require('faker');
  faker.locale = 'zh_CN';
  var _ = require('lodash');
  return {
    ...data,
    people: _.times(20, function (n) {
      return {
        id: n + 1,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      };
    }),
    users: _.times(20, function (n) {
      return {
        id: n,
        name: faker.name.lastName() + faker.name.firstName(),
        password: faker.internet.password()
      };
    }),
    tasks: _.times(20, function (n) {
      return {
        id: n,
        patientName: faker.name.lastName() + faker.name.firstName(),
        patientGender: getRandomNum(0, 1) === 1 ? '男' : '女',
        patientAge: getRandomNum(15, 80),
        patientFrom: getFrom(),
        deviceTypeName: getType().name,
        checkingItems: [getType().value[getRandomNum(0, getType().value.length - 1)]],
        status: status[getRandomNum(0, status.length - 1)],
        regNo: no,
        performNo: no,
        regDt: '2021-08-02 12:12',
        srcHospitalName: '丰城市中医院',
        destHospitalName: '丰城市中医院',
        createrName: '管盼盼',
        firstApproverName: '管盼盼'
      };
    })
  };
};