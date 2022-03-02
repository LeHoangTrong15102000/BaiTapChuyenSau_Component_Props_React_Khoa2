import { DAT_GHE } from '../types/BaiTapDatGheType';

const stateDefault = {
  danhSachGheDangDat: [],
};

function BaiTapDatVeReducer(state = stateDefault, action) {
  switch (action.type) {
    // Những cái case để xử lý trường hợp
    case DAT_GHE: {
      // Luôn luôn tạo ra cái mảng clone để dữ liệu không bị ảnh hưởng
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );

      if (index !== -1) {
        // Nếu mà có rồi thì remove nó khỏi đó đi
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      // Cập nhật lại danh sách ghế => giao diện render lại
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;

      return { ...state };
    }

    default:
      return { ...state };
  }
}

export default BaiTapDatVeReducer;
