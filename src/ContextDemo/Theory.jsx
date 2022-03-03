/**
 * Vẫn là câu chuyện quản lí state. Khi component phân cấp quá nhiều việc xác định nơi lưu trữ state và nơi làm thay đổi state khi component thay đổi dẫn đến công việc truyền props trở nên rườm rà và phức tạp. Dữ liệu được truyền qua props theo hình thức cha -> con , anh -> em , ông nội -> cha -> con ,..
 * Tương tự Redux React - Context ra đời cũng nhằm để giải quyết vấn đề đó.
 * Context chia sẻ dữ liệu cho nhiều các component khác nhau tương tự Redux (theo 1 góc nhìn nào đó redux khá giống nhau chúng đều quản lý state tập trung rồi phân phối cho các component)
 * Context có 2 thành phần là: Provider và  Consumer. Trong đó Provider đóng vai trò là component quản lý các state sử dụng chung cho các component được nó bao phủ, consumer đóng vai trò truy suất dữ liệu từ state chứa trong Provider
 */