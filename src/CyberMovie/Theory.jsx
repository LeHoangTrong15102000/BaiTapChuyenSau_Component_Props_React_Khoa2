// Ôn lại cấu trúc đầy đủ của Redux - khai báo action creator
/**
 * Redux bao gồm 3 thành phần chính
 *    + Action : là nơi mang các thông tin dùng để gửi từ ứng dụng đến store. Các thông tin này là 1 object mô tả những gì đã xảy ra.
 * Nói dễ hiểu, từ 1 component, ta muốn thay đổi state trên store, ta phải gửi action, là một object để miêu tả muốn làm gì.
 *    + Reducer: nơi tiếp nhận action và thay đổi state. Gồm 2 loại:
 *          + Root Reducer: là boss quản lí tất cả Reducer con
 *          + Child Reducer: như đã biết state, state là một object có nhiều thuộc tính, mỗi child Reducer chiu trách nhiệm thay đổi 1 thuộc tính trong state
 *    + Store: nơi lưu trữ và quản lí State (chính là big boss)
 */

// Ở bài học ngày hôm nay sẽ học cách viết Redux một cách chuẩn hóa hơn -> Đây là cách mà các công ty bên ngoài người ta thường hay viết
// Ở bài này sẽ khai báo các action bằng cách sử dụng action creator.
// Có 2 component con chinh là danh sách các hàng ghế, thông tin về các hàng ghế đã chọn.
// Những thông tin về đặt ghế sẽ tách nó ra thành một component riêng
// Ở bài sau sẽ binding ra các cái ghế ở các cái hàng -> chỗ này bắt đầu phức tạp rồi

// Danh sách ghế sao này sẽ ứng với API mà Backend trả về cho mình
