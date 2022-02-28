const stateDefault = {
  resultGame: "I'm iron man, i love you 3000!!",

  // mảng oẳn tù xì
  // có thuộc tính đặt cược mặc định là false
  // Nó sẽ lấy ra thằng nào có giá trị là true thì nó sẽ load lên
  mangDatCuoc: [
    { ma: 'keo', hinhAnh: './img_OanTuXi/keo.png', datCuoc: true },
    { ma: 'bua', hinhAnh: './img_OanTuXi/bua.png', datCuoc: false },
    { ma: 'bao', hinhAnh: './img_OanTuXi/bao.png', datCuoc: false },
  ],

  // Số bàn thắng
  soBanThang: 0,

  // Số bàn thua
  soBanThua: 0,

  // Đến lưu trữ dữ liệu của thằng máy
  // Do máy không cần đặt cược nên chúng ta ko cần phải để thuộc tính ddatCuoc vào
  computer: { ma: 'bao', hinhAnh: './img_OanTuXi/bao.png' },
};

// Thì thằng nào theo dõi nguồn dữ liệu trên store thì sẽ tự động render lại giao diện.
const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    // Mặc định thì nó sẽ return lại state
    default:
      return { ...state };
  }
};

export default BaiTapOanTuXiReducer;
