// Đặt state ở ProductItem thì nó ko chứa giao diện của chúng ta
// Nên đặt ở thằng component cha để sau đó truyền dữ liệu xuống thông qua props của component

// Đã có giao diện sản phẩm rồi thì chúng ta sẽ làm tiếp tới nút xử lý
// Đã có giao diện rồi bây giờ chúng ta sẽ viết vòng lặp binding dữ liệu lên giao diện
// Dùng phương thức map để render ra giao diện sản phẩm
// Thì những thằng binding từ setState trong modal của giỏ hàng nó sẽ tự động render lại giao diện(thì ta chạy vòng lặp truyền cho từng thằng item cái sự kiện thay đổi giao diện khi nhấn nút click thêm giỏ hàng)
// Khi người dùng click vào sản phẩm đã có trong giỏ hàng rồi thì chúng ta ko đưa sản phẩm đó vào nữa mà chúng ta sẽ tăng số lượng sp đó lên. => bắt buộc duyệt cái giỏ hàng đó xem sản phẩm đã có trong giỏ hàng hay chưa


// *************************** Video tiếp theo sẽ học xử lý các tính năng tiếp theo
// Đồng thời ôn lại props truyền props và xử lý như thế nào
// Thì giao diện chứa nút xóa giỏ hàng sẽ nằm trong component giỏ hàng