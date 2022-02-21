 // Đây là cách mà trúng ta setup một state

// import BaiTapGioHangRedux from "../BaiTapGioHangRedux/BaiTapGioHangRedux"

const stateGioHang = {

    gioHang: [{
        maSP: 1,
        tenSP: 'VinSmart Live',
        manHinh: 'AMOLED, 6.2, Full HD+',
        heDieuHanh: 'Android 9.0 (Pie)',
        cameraTruoc: '20 MP',
        cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
        ram: '4 GB',
        rom: '64 GB',
        giaBan: 5700000,
        soLuong: 1,
        hinhAnh: './img/vsphone.jpg',
      }]
}

// Hướng dẫn xây dựng cái reducer thì cú pháp của nó sẽ như thế nào

// Gắn cho nó một cái hàm nhận tham số là state mặc định, nếu mà chúng ta không truyền thì lần đầu tiên nó sẽ lấy biến "stateGioHang" làm giá trị mặc định
// Action là gì thì video sau sẽ giải thích rõ ràng hơn.
const BaiTapGioHangReducer = (state = stateGioHang, action) => {
    // Và return lại state
    return {...state}
}

// Và cái state này muốn liên kết với store của Redux thì chúng ta phải export nó ra
export default BaiTapGioHangReducer;