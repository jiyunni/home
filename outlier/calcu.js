        function calculate() {
            var maemaePrice = document.getElementById("maemaePrice").value;
            var jeonseDeposit = document.getElementById("jeonseDeposit").value;

            if (maemaePrice === "" || jeonseDeposit === "") {
                alert("매매가와 전세 보증금을 모두 입력하세요.");
                return;
            }

            var jeonsePercentage = (jeonseDeposit / maemaePrice) * 100;

            var resultMessage = "전세가율: " + jeonsePercentage.toFixed(2) + "%";

            if (jeonsePercentage >= 70) {
                resultMessage += " - 전세가율이 70% 이상입니다! 위험합니다.";
                document.getElementById("result").style.color = "red";
            } else {
                resultMessage += " - 전세가율에 대한 위험은 없지만, 다른 사항들도 꼼꼼히 확인하세요!";
                document.getElementById("result").style.color = "blue";
            }

            document.getElementById("result").textContent = resultMessage;
        }