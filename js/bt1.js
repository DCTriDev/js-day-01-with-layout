/*
    Bước 1: Khai báo hằng số lương LUONG_NGAY
            Khai báo biến ngày công var ngayCong
            Khai báo biến tiền lương var tienLuong
    Bước 2: Nhận giá trị ngày công
    Bước 3: Tính lương tienLuong = ngayCong * LUONG_NGAY
    Bước 4: Thêm dấu phẩy hàng nghìn cho tienLuong khi xuất ra màn hình bằng tienLuong.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    Bước 5: Xuất giá trị tienLuong ra màn hình
 */
function TinhTienLuong(){
    var ngayCong = document.getElementById("ngayCong").value
    const LUONG_NGAY = 100000
    var tienLuong = ngayCong * LUONG_NGAY
    document.querySelector("#tienLuong").value = tienLuong.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

