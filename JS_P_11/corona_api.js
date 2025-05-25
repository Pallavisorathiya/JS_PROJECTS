const apiURL = "https://api.rootnet.in/covid19-in/stats/history";

function fetchCovidData() {
    return fetch(apiURL)
        .then(response => response.json())
        .then(data => data.data)
        .catch(error => {
            console.error("Error fetching data:", error);
            return [];
        });
}

function searchData() {
    let searchDate = document.getElementById("searchDate").value;
    if (!searchDate) {
        alert("Please select a date!");
        return;
    }

    fetchCovidData().then(historyData => {
        let result = historyData.find(day => day.day === searchDate);
        let stateDataContainer = document.getElementById("stateData");
        let dateCard = document.getElementById("dateCard");
        let selectedDateText = document.getElementById("selectedDateText");
        let stateHeader = document.getElementById("stateHeader");

        stateDataContainer.innerHTML = "";
        if (result) {
            selectedDateText.textContent = searchDate;
            dateCard.style.display = "block";
            stateDataContainer.style.display = "flex";
            stateHeader.style.display = "block";

            let colorClasses = ["card-color-1", "card-color-2", "card-color-3", "card-color-4", "card-color-5"];

            result.regional.forEach((state, index) => {
                let colorClass = colorClasses[index % colorClasses.length];
                let cardHTML = `
                    <div class="card ${colorClass} shadow">
                        <div class="card-body">
                            <h5 class="card-title">${state.loc}</h5>
                            <p class="card-text"><strong>Cases:</strong> ${state.totalConfirmed}</p>
                            <p class="card-text"><strong>Deaths:</strong> ${state.deaths}</p>
                            <p class="card-text"><strong>Recovered:</strong> ${state.discharged}</p>
                        </div>
                    </div>
                `;
                stateDataContainer.innerHTML += cardHTML;
            });
        } else {
            dateCard.style.display = "none";
            stateDataContainer.style.display = "none";
            stateHeader.style.display = "none";
            alert("No data found for this date!");
        }
    });
}
