// Tính toán khi nào cái state thay đổi để mình thực hiện việc gì đó

// DidUpdate để mỗi khi render lần thứ 2 trở đi -> Cứ chạy lần thứ 2 thì nó sẽ gọi DidUpdate 
// Thong thường - Khi muốn thực hiện một hành động gì đó sau khi state hoặc props thay đổi ta sẽ thực hiện trong hàm này'
// Một số hành động:
/**
 * - Dựa vào state hoặc props mới để call API
 * - Dựa vào state hoặc props mới để setState
 * - Chú ý quan trọng : khi setState trong componentDidUpdate phải có điều kiện dừng.
 * - componentDidUpdate cung cấp 2 param là giá trị trước khi thay đổi của props và state -:> thường thay đặt tên là prevProps, prevState
 */

// Chạy 1 lần trước khi component bị hủy bỏ
// componentWillUnmount
// Reset data, clearTimeout, removeEventListener

