const stateDefault = {
  taiXiu: false, //Tài là true (> 12 ), false là xỉu ( 3 - 11)

  // Mỗi lần nhấn play game thì con xúc xắc này thay đổi, xúc xắc gồm hình ảnh và giá trị nhiều hơn 2 giá trị nên dùng object để lưu nó
  // Lưu lần 3 object

  // mảng xúc xắc
  mangXucXac: [
    { ma: 1, hinhAnh: './img_XucXac/1.png' },
    { ma: 1, hinhAnh: './img_XucXac/1.png' },
    { ma: 1, hinhAnh: './img_XucXac/1.png' },
  ],

  // Tổng số bàn thắng
  soBanThang: 0,

  // Số lần chơi
  tongSoLanChoi: 0,
};

// Viết cái reducer để xử lý

const BaiTapXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default BaiTapXucXacReducer;
// Sau khi đã khai báo reducer thì chúng ta import nó vào cái store của Redux;
