// script.js

// Hàm để gửi yêu cầu đến server và nhận kết quả cheat
function generateCheats() {
    // Lấy giá trị người dùng nhập vào từ input
    const quizId = document.getElementById("quizId").value;

    // Kiểm tra xem người dùng đã nhập ID hay chưa
    if (!quizId) {
        document.getElementById('result').innerHTML = 'Vui lòng nhập ID Quizizz!';
        return;
    }

    // Gửi yêu cầu tới server với Fetch API
    fetch('/api/generate-cheat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quizId: quizId }) // Gửi ID Quizizz dưới dạng JSON
    })
    .then(response => response.json()) // Chuyển đổi phản hồi từ JSON
    .then(data => {
        // Kiểm tra nếu server trả về lỗi
        if (data.error) {
            document.getElementById('result').innerHTML = data.error;
        } else {
            // Hiển thị kết quả cheat từ API
            const resultText = `Cheat cho Quiz ID ${data.quizId}: ${data.answers.join(', ')}`;
            document.getElementById('result').innerHTML = resultText;
        }
    })
    .catch(error => {
        console.error('Đã xảy ra lỗi:', error);
        document.getElementById('result').innerHTML = 'Đã xảy ra lỗi trong quá trình tạo cheat.';
    });
}
