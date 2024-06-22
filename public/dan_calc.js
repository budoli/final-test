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

function calculateSimpleInterest(event) {
  event.preventDefault(); 

  var money = parseFloat(document.getElementById('money').value);
  var rate = parseFloat(document.getElementById('rate').value) / 100;
  var time = parseFloat(document.getElementById('time').value);

  if (isNaN(money) || isNaN(rate) || isNaN(time)) {
    alert('모든 입력을 올바르게 입력해주세요.');
    return; 
  }

  var amount = money *(1+ rate * time);
  var interest = amount - money;

  document.getElementById('result').innerHTML = 
    '<p>원금: ' + money.toLocaleString() + '원</p>' +
    '<p>이자율: ' + (rate * 100).toFixed(2) + '%</p>' +
    '<p>기간: ' + time + '년</p>' +
    '<p>최종 금액: ' + amount.toLocaleString() + '원</p>' +
    '<p>이자: ' + interest.toLocaleString() + '원</p>';
}
