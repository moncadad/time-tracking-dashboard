fetch("js/data.json")
  .then((response) => {
    if (!response.ok) return console.log("Oops! Something went wrong.");
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let reportData = data;

    // button variables
    const dailyButton = document.getElementById("dailyBtn");
    const weeklyButton = document.getElementById("weeklyBtn");
    const monthlyButton = document.getElementById("monthlyBtn");
    // all report cards varibales
    const reportCards = document.querySelectorAll(".report-card");

    // button actions
    dailyButton.addEventListener("click", () => {
      //   updateReportUI("daily");
      console.log("Daily data is displaying.");
      updateDailyUI();
    });

    weeklyButton.addEventListener("click", () => {
      //   updateReportUI("weekly");
      console.log("Weekly data is displaying.");
      updateWeeklyUI();
    });
    monthlyButton.addEventListener("click", () => {
      //   updateReportUI("monthly");
      console.log("Monthly data is displaying.");
      updateMonthlyUI();
    });

    // ----------------------------------------------------
    // DOM UI update functions
    // daily ui
    function updateDailyUI() {
      //timeframe - current
      //timeframe - last "(type)"
      //timeframe - previous (data)
      reportData.forEach((el, index) => {
        let current = el.timeframes.daily.current;
        let previous = el.timeframes.daily.previous;
        reportCards[index].querySelector(".set-current").textContent = current;
        reportCards[index].querySelector(".set-timeframe").textContent =
          "Yesterday";
        previous;
        reportCards[index].querySelector(".set-previous").textContent =
          previous + "hrs";
      });
    }

    // weekly UI
    function updateWeeklyUI() {
      reportData.forEach((el, index) => {
        let current = el.timeframes.weekly.current;
        let previous = el.timeframes.weekly.previous;
        reportCards[index].querySelector(".set-current").textContent = current;
        reportCards[index].querySelector(".set-timeframe").textContent =
          "Last Week";
        previous;
        reportCards[index].querySelector(".set-previous").textContent =
          previous + "hrs";
      });
    }
    // monthly ui
    function updateMonthlyUI() {
      reportData.forEach((el, index) => {
        let current = el.timeframes.monthly.current;
        let previous = el.timeframes.monthly.previous;
        reportCards[index].querySelector(".set-current").textContent = current;
        reportCards[index].querySelector(".set-timeframe").textContent =
          "Last Month";
        previous;
        reportCards[index].querySelector(".set-previous").textContent =
          previous + "hrs";
      });
    }
  });
