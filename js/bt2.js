/*
    Bước 1: Khai báo biến gtri_1 gtri_2 gtri_3 gtri_4 gtri_5 trungBinhCong
    Bước 2: Nhận vào giá trị của 5 biến gtri_1 đến gtri_5
    Bước 3: Tính trungBinhCong = (gtri_1 + gtri_2 + gtri_3 + gtri_4 + gtri_5) / 5
    Bước 4: Rút gọn giá trungBinhCong chỉ còn 2 số ở phần thập phân cho trungBinhCong bằng trungBinhCong.toFixed(2)
    Bước 5: Xuất giá trị trungBinhCong ra màn hình

 */
function TrungBinhCong() {
    var gtri_1 = parseFloat(document.getElementById("gtri_1").value)
    var gtri_2 = parseFloat(document.getElementById("gtri_2").value)
    var gtri_3 = parseFloat(document.getElementById("gtri_3").value)
    var gtri_4 = parseFloat(document.getElementById("gtri_4").value)
    var gtri_5 = parseFloat(document.getElementById("gtri_5").value)
    var trungBinhCong = (gtri_1 + gtri_2 + gtri_3 + gtri_4 + gtri_5) / 5
    document.querySelector("#trungBinhCong").value = trungBinhCong.toFixed(2)
}