document.getElementById("bt").addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  var button = document.getElementById("bt");
  if (sidebar.style.left === "-30%") {
    sidebar.style.left = "0";
    button.innerHTML = "&#9664;";
    button.style.transform = "translateX(30%)";
  } else {
    sidebar.style.left = "-30%";
    button.innerHTML = "&#9654;"; 
    button.style.transform = "translateX(0)"; 
  }
});

function calculateCompoundInterest() {
  const money = parseFloat(document.getElementById("money").value);
  const rate = parseFloat(document.getElementById("rate").value)/100;
  const time = parseInt(document.getElementById("time").value);

  if (isNaN(money) || isNaN(rate) || isNaN(time)) {
      alert("모든 필드를 올바르게 입력해주세요.");
      return;
  }

  // 복리 계산 공식: A = P(1 + r)^(n)
  const amount = money * Math.pow((1 + rate), time);
  const interest = amount - money

  document.getElementById('result').innerHTML = 
  '<p>원금: ' + money.toLocaleString() + '원</p>' +
  '<p>이자율: ' + (rate*100).toFixed() + '%</p>' +
  '<p>기간: ' + time + '년</p>' +
  '<p>최종 금액: ' + amount.toLocaleString() + '원</p>' +
  '<p>이자: ' + interest.toLocaleString() + '원</p>';
  
  
}

