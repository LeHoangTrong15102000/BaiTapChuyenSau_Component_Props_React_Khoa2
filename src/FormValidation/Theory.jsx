// Ở bootstrap thì không thực sự đánh giá cao nó
// Thì trong bài này sẽ vẫn dụng gg Input form
// Để sử dụng thư viện được
    /**
     * B1 : copy demo mẫu vào ứng dụng và fix cho chạy được
     * B2 : Tiến hành edit lại
     */

// Lấy thông tin từ thẻ input như thế nào
// Cách thực hiện -> là gán nguồn dữ liệu đó vào trỏng nút control luôn để khi mà người dùng nhập vào thì tự động cái state đó thay đổi cho mình luôn -> thì khi đó mình sẽ lấy được thông tin người dùng nhập vào
// Thay vì dung DOM gán riêng lẻ trên từng sự kiện onClick của form -> thì bây giờ gán trực tiếp sự kiện binding trên từng thẻ luôn

/**
 * Cách thức để lấy thông tin  
 *      - Đặt tên thuộc tính trong state trùng với control là "name" trong thẻ input luôn
 *      - Người dùng thay đổi ở sự kiện onChange của thẻ input, chúng ta muốn khi mà nhập liệu thì nó sẽ binding lên trang form cho chúng ta, thì chúng ta nhập vào cái gì nó sẽ binding ra cái đó
 * 
 *      - Viết một hàm để lấy value của từng ô input
 *     
 */

// *************************** Bài học tiếp validate cho ô input