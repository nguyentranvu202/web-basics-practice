// Hàm tính điểm trung bình
function calculateAverage(scores) {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total / scores.length;
}

// Hàm xếp loại học tập
function classify(avg) {
    if (avg >= 8.0) {
        return "Giỏi";
    } else if (avg >= 6.5) {
        return "Khá";
    } else if (avg >= 5.0) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

// Hàm xử lý khi bấm nút Tính kết quả
function calculateResult() {
    const name = document.getElementById("studentName").value.trim();

    const scoreInputs = [
        document.getElementById("score1").value,
        document.getElementById("score2").value,
        document.getElementById("score3").value,
        document.getElementById("score4").value,
        document.getElementById("score5").value
    ];

    const error = document.getElementById("error");
    const result = document.getElementById("result");

    // Kiểm tra dữ liệu trống
    if (name === "" || scoreInputs.some(score => score === "")) {
        error.innerHTML = "Vui lòng nhập đầy đủ thông tin!";
        result.innerHTML = "";
        return;
    }

    const scores = scoreInputs.map(Number);

    // Kiểm tra điểm từ 0 đến 10
    if (scores.some(score => score < 0 || score > 10)) {
        error.innerHTML = "Điểm phải nằm trong khoảng từ 0 đến 10!";
        result.innerHTML = "";
        return;
    }

    error.innerHTML = "";

    const average = calculateAverage(scores);
    const classification = classify(average);

    result.innerHTML = `
        <h2>Kết quả học tập</h2>
        <p><strong>Sinh viên:</strong> ${name}</p>
        <p>Giải tích 1: ${scores[0]}</p>
        <p>Đại số tuyến tính: ${scores[1]}</p>
        <p>Xác suất thống kê: ${scores[2]}</p>
        <p>Tin học đại cương: ${scores[3]}</p>
        <p>Xây dựng ứng dụng Web: ${scores[4]}</p>
        <p><strong>Điểm trung bình:</strong> ${average.toFixed(2)}</p>
        <p><strong>Xếp loại:</strong> ${classification}</p>
    `;
}