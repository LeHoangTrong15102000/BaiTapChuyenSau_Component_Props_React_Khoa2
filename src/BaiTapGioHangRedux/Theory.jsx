// Lý thuyết về Redux
// Tổ chức component rồi thì việc cần làm bây giờ là tổ chức store cho Redux để kết nối dữ liệu giữa component và redux

// Và hướng dẫn cách khởi tạo store cho Redux

// Trước tiên chúng ta sẽ xử lý binding giỏ hàng mặc định và cái nơi mà lưu trữ state thì nó nằm ở đâu
// Bây giờ thì chúng ta sẽ đặt state giỏ hàng trong redux store của project
// Bên trong redux thì chúng ta sẽ tạo ra cho nó một cái store của giờ hàng. Thì ở trong cái thuật ngữ Redux được gọi là Reducer

// *********************************************
// bây giờ là chúng ta sẽ từ cái component kết nối tới cái store chứa cái state đó
// Đầu tiên chúng ta chỉ mới học phương thức lấy về, chưa học phương thức đẩy lên làm giá trị thay đổi.

// *********************************************
// Video này sẽ nói về các render lại giao diện với dữ liệu động, thay đổi mỗi khi người dùng click vào thêm giỏ hàng render lại giao diện
// Trong bài giảng ngày hôm nay sẽ hướng dẫn làm thay đổi cái state đó.
// Hướng dẫn việc setState của Redux store thông qua việc thay đổi giao diện giỏ hàng
// Lấy sản phẩm push vào cái mảng là giỏ hàng được render ra giao diện giỏ hàng , hoặc là nhấn nút tăng số lượng để tăng số lượng sản phẩm lên
// Hồi nảy mình lấy từ ReduxStore về thì thông qua mapStateToProps, còn bây giờ mình gửi dữ liệu lên ReduxStore thì dừng phương thức là mapDispatchToProps để đưa dữ liệu đó đi

// Đáng có 2 nguồn dữ liệu là BaiTapGioHang và GioHang theo dõi sự thay đổi dữ liệu trên store
