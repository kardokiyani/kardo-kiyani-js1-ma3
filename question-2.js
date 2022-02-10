// Question 2:

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=105b0b99a41b4196956b995c128f249a";

const resultsContainer = document.querySelector(".results");

async function resultAPI() {
  const response = await fetch(url);
  const rawgResponse = await response.json();
  console.log(rawgResponse);

  const facts = rawgResponse.results;

  resultsContainer.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    console.log(facts[i].name);
    console.log(facts[i].rating);
    console.log(facts[i].tags);

    resultsContainer.innerHTML += `<div class="results">
    <h2>${facts[i].name}</h2>
    <p>${facts[i].rating}</p>
    <p>${facts[i].tags.length}</p>
    </div>`;
  }
}

resultAPI();
