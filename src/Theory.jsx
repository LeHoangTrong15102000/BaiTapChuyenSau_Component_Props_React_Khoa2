// Lý thuyết tổng kết lại khóa thứ 2.

// lý thuyết về Redux

/**
 * - Redux là 1 thư viện dùng để quản lý state tập trung store(rootReducer). Các state của ứng dụng thay vì được lưu tại component thì sẽ được đưa lên store của Redux để lưu trữ
 * - Redux là thư viện được sử dụng rộng rãi do dễ cấu hình, dễ sử dụng. Với mô hình quản lý state tập trung dễ dàng maintenance(bảo trì, nâng cấp) khi có sự thay đổi xảy ra. Cộng đồng sử dụng Redux lớn nên cũng dễ support khi gặp các vấn đề trong xử lý.
 *
 * + Tại sao phải sử dụng Redux?
 *     - Redux giải quyết vấn đề truyền props là state qua nhiều component phân cấp -> dẫn đến khó quản lý mã nguồn do phải xác định state nằm ở component cha nào -> Khi có sự thay đổi bảo trì trong ứng dụng xảy ra truyền props thông qua nhiều cấp để lại không ít hậu quả
 */

// Lý thuyết về Context API
/**
 * + Context là gì ? Context có bao nhiêu thành phần?
 *    - Cũng tương tự như Redux, Context được sử dụng trong trường hợp khi bạn muốn truyền một giá trị là state sang component con qua thuộc tính props với cấu trúc nhiều component phân cấp. Dẫn đến việc khó kiểm soát mã nguồn. Thể những Context không quản lý state tập trung như Redux. Mà context quản lý riêng lẻ các state ở nhiều file Provider khác nhau.
 *    - Context có 2 thành phần là Provider và Consumer . Trong đó Provider đóng vai trò là component quản lý state, và các phương thức thay đổi state. Consumer giữ vai trò là kết nối với Provider để binding state và các phương thức. Phạm vi sử dụng của Consumer phụ thuộc vào phần tử bao ngoài là Provider
 */

// So sánh giữa Redux và Context
/**
 * + Giữa Redux và Context mỗi cái có mỗi ưu nhược điểm riêng.
 * + Redux quản lý state tập trung giúp người dùng để Maintenance, tuy nhiên mỗi lần dispatch thì tất cả các reducer đều thực hiện.
 * + Ngược lại context có vẻ như về vấn đề quản lý lưu trữ và truy xuất state cũng không có vấn đề nếu ta rành cách tổ chức. Tuy nhiên về mặt quản lý code khi ta có nhiều state lồng nhau từ nhiều Provider khác nhau ta phải lần lượt wrap các component bên trong sử dụng các consumer, dễ bị rối và dễ bị render lại tất cả component được wrap không cần thiết -> nhìn code như kim tự tháp.
 */
