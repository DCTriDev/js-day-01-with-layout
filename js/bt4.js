/*
    Bước 1: Khai Báo Biến chieuDai, chieuRong, chuVi, dienTich
    Bước 2: Nhận giá trị cho biến chieuDai, chieuRong
    Bước 3: Tính chuVi = (chieuDai + chieuRong) *2
            Tính dienTich = chieuDai *chieuRong
    Bước 4: Xuất kết quả chuVi và dienTich ra màn hình
 */
function XuLyHinhChuNhat(){
    var chieuDai = parseFloat(document.getElementById("chieuDai").value)
    var chieuRong = parseFloat(document.getElementById("chieuRong").value)
    var chuVi = (chieuDai + chieuRong) *2
    var dienTich = chieuDai *chieuRong
    document.querySelector("#chuVi").value = chuVi
    document.querySelector("#dienTich").value = dienTich
}