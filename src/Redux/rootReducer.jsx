import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'

const rootReducer = combineReducers({
  // Đây là store tổng của ứng dụng của chúng ta
  // Thì cái Store tổng ứng dụng cũng sẽ chứa nhiều cái state
  stateGioHang: BaiTapGioHangReducer// state giỏ hàng, chỗ này dùng ES6 chép lại nội dung state của Reducer mà không đổi tên
});

export default rootReducer;
