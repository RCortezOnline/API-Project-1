fetch("https://api.covid19api.com/summary")
  .then((response) => response.json())
  .then((result) => {
    let confirmedCases = result.Global.NewConfirmed;
    let cases = document.querySelector(".globalNew");
    let totalConfirm = result.Global.TotalConfirmed;
    let totalCases = document.querySelector(".globalConfirm");
    let totalDeaths = result.Global.TotalDeaths;
    let deathRow = document.querySelector(".globalDeath");
    cases.append(confirmedCases);
    totalCases.append(totalConfirm);
    deathRow.append(totalDeaths);
    console.log(result);
  });

  fetch("https://api.covid19api.com/summary")
  .then((response) => response.json())
  .then((result) => {
      let confirmedCases = result.Countries[182].NewConfirmed;
      console.log(confirmedCases);
      let cases = document.querySelector(".usNew");
      let totalConfirm = result.Countries[182].TotalConfirmed;
      let totalCases = document.querySelector(".usConfirm");
      let totalDeaths = result.Countries[182].TotalDeaths;
      let deathRow = document.querySelector(".usDeath");
      cases.append(confirmedCases);
      totalCases.append(totalConfirm);
      deathRow.append(totalDeaths);
      console.log(result);
  });

  fetch("https://api.covid19api.com/summary")
  .then ((response) => response.json())
  .then((result) => {
      let confirmedCases = result.Countries[34].NewConfirmed;
      console.log(confirmedCases);
      let cases = document.querySelector(".chinaNew");
      let totalConfirm = result.Countries[34].TotalConfirmed;
      let totalCases = document.querySelector(".chinaConfirm");
      let totalDeaths = result.Countries[34].TotalDeaths;
      let deathRow = document.querySelector(".chinaDeath");
      cases.append(confirmedCases);
      totalCases.append(totalConfirm);
      deathRow.append(totalDeaths);
      console.log(result);
  })
  
  fetch("https://api.covid19api.com/summary")
  .then ((response) => response.json())
  .then((result) => {
      let confirmedCases = result.Countries[141].NewConfirmed;
      console.log(confirmedCases);
      let cases = document.querySelector(".russiaNew");
      let totalConfirm = result.Countries[141].TotalConfirmed;
      let totalCases = document.querySelector(".russiaConfirm");
      let totalDeaths = result.Countries[141].TotalDeaths;
      let deathRow = document.querySelector(".russiaDeath");
      cases.append(confirmedCases);
      totalCases.append(totalConfirm);
      deathRow.append(totalDeaths);
      console.log(result);
  })