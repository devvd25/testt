// script.js

function generateCheats() {
    // Lấy giá trị người dùng nhập vào từ input
    const quizId = document.getElementById("quizId").value;

    // Kiểm tra xem người dùng đã nhập ID hay chưa
    if (!quizId) {
        document.getElementById('result').innerHTML = 'Vui lòng nhập ID Quizizz!';
        return;
    }

    // Mô phỏng quá trình tạo cheats (có thể thay bằng thực hiện yêu cầu HTTP đến server sau này)
    const fakeCheatResult = `Cheats cho Quizizz ID: ${quizId} đã được tạo thành công!`;

    // Hiển thị kết quả
    document.getElementById('result').innerHTML = fakeCheatResult;
}
