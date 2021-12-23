/*
    Bước 1: Khai báo biến soTuNhien, hangDonVi, hangChuc. kySo
    Bước 2: Nhận giá trị vào biến soTuNhien
    Bước 3: Tính hangDonVi = soTuNhien%10
            Tính hangChuc = soTuNhien/10
    Bước 4: Do soTuNhien mang giá trị là kiểu string nên khi thực hiện phép chia lấy dư
            máy sẽ hiểu là đang thực hiện phép chia lấy cả phần nguyên lẫn phần sau dấu thập phân
            vì vậy cần phải có hàm parseInt() để đưa về kiểu số nguyên, loại bỏ phần thập phân.
    Bước 5: Xuất giá trị kySo ra màn hình.
 */
function TinhKySo(){
    var soTuNhien = document.getElementById("soTuNhien").value
    var hangDonVi = soTuNhien%10
    var hangChuc = parseInt(soTuNhien/10)   // Khúc này để nguyên thì máy hiểu là lấy số thực nên dùng parseInt để chuyển về số nguyên
    var kySo = hangChuc + hangDonVi
    document.querySelector("#kySo").value = kySo
}