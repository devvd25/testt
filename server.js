const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route để lấy dữ liệu cheat từ server (giả lập)
app.post('/api/generate-cheat', (req, res) => {
    const { quizId } = req.body;
    
    // Kiểm tra nếu không có quizId
    if (!quizId) {
        return res.status(400).json({ error: 'Vui lòng nhập Quiz ID' });
    }

    // Mô phỏng dữ liệu cheat
    const cheatData = {
        quizId,
        answers: ['A', 'B', 'C', 'D'], // Mô phỏng kết quả các câu trả lời
    };

    res.json(cheatData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
