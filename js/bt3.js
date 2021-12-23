/*
    Bước 1: Khai báo hằng số GIATRI_USD = 23500, biến usd, vnd
    Bước 2: Nhận giá trị usd
    Bước 3: Tính vnd = usd * GIATRI_USD
    Bước 4: Thêm dấu phẩy hàng nghìn cho vnd khi xuất ra màn hình bằng vnd.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    Bước 4: Xuất giá trị vnd ra màn hình
 */
function ChuyenDoiTien() {
    const GIATRI_USD = 23500
    var usd = document.getElementById("usd").value
    var vnd = usd * GIATRI_USD
    document.querySelector("#vnd").value = vnd.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}