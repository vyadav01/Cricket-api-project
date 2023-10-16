// creating html elements for first section
const firstSection = document.createElement("section");
const nav = document.createElement("nav");
const divLogoWrapper = document.createElement("div");
const imgCwc_logo = document.createElement("img");
const divNavLinksWrapper = document.createElement("div");
const navUl = document.createElement("ul");
const navLinkLivescore = document.createElement("li");
const navLinkMatches = document.createElement("li");
const navLinkSeries = document.createElement("li");
const liveScoreATag = document.createElement("a");
const matchesATag = document.createElement("a");
const seriesATag = document.createElement("a");

// adding attributes
firstSection.setAttribute("id", "navBarSection");
nav.setAttribute("id", "upperNavBar");
divLogoWrapper.setAttribute("id", "logoWrapper");
imgCwc_logo.setAttribute("id", "cwc_logo");
imgCwc_logo.setAttribute("src", "/image/wc_logo.png");
imgCwc_logo.setAttribute("alt", "CWC-logo");
divNavLinksWrapper.setAttribute("id", "navLinksWrapper");
navLinkLivescore.setAttribute("class", "liLinks");
navLinkMatches.setAttribute("class", "liLinks");
navLinkSeries.setAttribute("class", "liLinks");
liveScoreATag.setAttribute("href", "#liveScore");

// adding text in html page
liveScoreATag.textContent = "LiveScores";
navLinkMatches.textContent = "Matches";
navLinkSeries.textContent = "Series";

// appending html elements in the body tag of first section
document.body.appendChild(firstSection);
firstSection.appendChild(nav);
nav.appendChild(divLogoWrapper);
divLogoWrapper.appendChild(imgCwc_logo);
nav.appendChild(divNavLinksWrapper);
divNavLinksWrapper.appendChild(navUl);
navUl.appendChild(navLinkLivescore);
navUl.appendChild(navLinkMatches);
navUl.appendChild(navLinkSeries);
navLinkLivescore.appendChild(liveScoreATag);
// creating html elements for second section
const secondSection = document.createElement("section");
const divUpperHeading = document.createElement("div");
const liveScoreText = document.createElement("h1");
const divSeriesName = document.createElement("div");
const seriesNameText = document.createElement("h2");

//adding attributes
secondSection.setAttribute("id", "liveScoresSection");
divUpperHeading.setAttribute("id", "upperHeading");
liveScoreText.setAttribute("id", "liveScore");
divSeriesName.setAttribute("id", "seriesName");
seriesNameText.setAttribute("class", "seriesNameText");

// adding text in html page
liveScoreText.textContent = "Live Cricket Scores";
seriesNameText.textContent = "ICC CRICKET WORLD CUP INDIA 2023";

const url =
  "https://api.cricapi.com/v1/currentMatches?apikey=398e42ac-b41d-4dc6-80e0-07b64160da58&offset=0";

const series_id = "bd830e89-3420-4df5-854d-82cfab3e1e04";

const countryFlag = {
  India: "IN",
  Australia: "AU",
  Pakistan: "PK",
  Sri_Lanka: "LK",
  Afghanistan: "AF",
  New_Zealand: "NZ",
  South_Africa: "ZA",
  England: "EN",
  Bangladesh: "BD",
  Neatherland: "NL",
};

// fetching the api data and show it on page
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);

    if (data.status === "success") {
      const dataLength = data.data.length;
      for (let index = 0; index < dataLength; index++) {
        if (series_id === data.data[index].series_id) {
          const liveMatchData = data.data[index];
          const matchCountryFlag = [];

          for (let index = 0; index < liveMatchData.teamInfo.length; index++) {
            const element = liveMatchData.teamInfo[index].name;

            const newElement = element.replace(" ", "_");

            for (const key in countryFlag) {
              if (newElement === key) {
                matchCountryFlag.push(`${countryFlag[key]}`);
              }
            }
          }

          const dateTime = new Date(`${data.data[index].dateTimeGMT}`);
          const setTime = new Date();
          setTime.setTime(dateTime.getTime() + 19800000);
          const timeFormat = new Intl.DateTimeFormat("en-us", {
            timeStyle: "short",
          });

          // creating html elements
          const matchWrapperDiv = document.createElement("div");
          const divMatchInfo = document.createElement("div");
          const matchName = document.createElement("h3");
          const venue = document.createElement("h4");
          const divTeamsNameFlag = document.createElement("div");
          const divTeamFirst = document.createElement("div");
          const imgFirstTeamFlag = document.createElement("img");
          const firstTeamNameText = document.createElement("h2");
          const divVs = document.createElement("div");
          const vsText = document.createElement("p");
          const divTeamSecond = document.createElement("div");
          const imgSecondTeamFlag = document.createElement("img");
          const secondTeamNameText = document.createElement("h2");
          const divScoreInfo = document.createElement("div");
          const divMatchScore = document.createElement("div");
          const divTeamScoreFirst = document.createElement("div");
          const firstTeamInningText = document.createElement("p");
          const firstTeamRunsWickets = document.createElement("p");
          const firstLineBreaker = document.createElement("br");
          const firstTeamOvers = document.createElement("span");
          const divTeamScoreSecond = document.createElement("div");
          const secondTeamInningText = document.createElement("p");
          const secondTeamRunsWickets = document.createElement("p");
          const secondLineBreaker = document.createElement("br");
          const secondTeamOvers = document.createElement("span");
          const matchStatusText = document.createElement("p");

          // attributs
          matchWrapperDiv.setAttribute("class", "matchWrapperDiv");
          divMatchInfo.setAttribute("class", "matchInfo");
          matchName.setAttribute("class", "matchName");
          venue.setAttribute("class", "venue");
          divTeamsNameFlag.setAttribute("class", "teamsNameFlag");
          divTeamFirst.setAttribute("class", "team");
          imgFirstTeamFlag.setAttribute("class", "teamflag");
          imgFirstTeamFlag.setAttribute("alt", "team1_flag");
          firstTeamNameText.setAttribute("class", "teamName");
          divVs.setAttribute("class", "vs");
          divTeamSecond.setAttribute("class", "team");
          imgSecondTeamFlag.setAttribute("class", "teamflag");
          imgSecondTeamFlag.setAttribute("alt", "team2_flag");
          secondTeamNameText.setAttribute("class", "teamName");
          divScoreInfo.setAttribute("class", "scoreInfo");
          divMatchScore.setAttribute("class", "matchScore");
          divTeamScoreFirst.setAttribute("class", "teamScore");
          firstTeamInningText.setAttribute("class", "inningText");
          firstTeamRunsWickets.setAttribute("class", "runsWickets");
          firstTeamOvers.setAttribute("class", "overs");
          divTeamScoreSecond.setAttribute("class", "teamScore");
          secondTeamInningText.setAttribute("class", "inningText");
          secondTeamRunsWickets.setAttribute("class", "runsWickets");
          secondTeamOvers.setAttribute("class", "overs");
          matchStatusText.setAttribute("class", "matchStatus");

          imgFirstTeamFlag.setAttribute(
            "src",
            `https://cdorg.b-cdn.net/flags/generic/${matchCountryFlag[0]}.svg`
          );

          imgSecondTeamFlag.setAttribute(
            "src",
            `https://cdorg.b-cdn.net/flags/generic/${matchCountryFlag[1]}.svg`
          );

          matchName.textContent =
            `${data.data[index].name}, ${data.data[index].matchType}`.toUpperCase();
          venue.textContent = `${dateTime.toDateString()}, ${timeFormat.format(
            setTime
          )}, ${data.data[index].venue}`;
          firstTeamNameText.textContent = `${data.data[index].teamInfo[0].shortname}`;
          vsText.textContent = "v/s";
          secondTeamNameText.textContent = `${data.data[index].teamInfo[1].shortname}`;

          const x = data.data[index].score[0].inning;
          if (data.data[index].score.length === 2) {

            if (x.includes(`${data.data[index].teamInfo[0].name}`)) {
              firstTeamInningText.textContent = `${data.data[index].score[0].inning}`;
              firstTeamRunsWickets.textContent = `${data.data[index].score[0].r}-${data.data[index].score[0].w} (${data.data[index].score[0].o})`;
              secondTeamInningText.textContent = `${data.data[index].score[1].inning}`;
              secondTeamRunsWickets.textContent = `${data.data[index].score[1].r}-${data.data[index].score[1].w} (${data.data[index].score[1].o})`;
            } else {
              firstTeamInningText.textContent = `${data.data[index].score[1].inning}`;
              firstTeamRunsWickets.textContent = `${data.data[index].score[1].r}-${data.data[index].score[1].w} (${data.data[index].score[1].o})`;
              secondTeamInningText.textContent = `${data.data[index].score[0].inning}`;
              secondTeamRunsWickets.textContent = `${data.data[index].score[0].r}-${data.data[index].score[0].w} (${data.data[index].score[0].o})`;
            }
          } else if (data.data[index].score.length === 1) {
            if (x.includes(`${data.data[index].teamInfo[0].name}`)) {
              firstTeamInningText.textContent = `${data.data[index].score[0].inning}`;
              firstTeamRunsWickets.textContent = `${data.data[index].score[0].r}-${data.data[index].score[0].w}  (${data.data[index].score[0].o})`;
              secondTeamInningText.textContent = "Bowling side";
              secondTeamRunsWickets.textContent = "Yet to Bat";
            } else {
              firstTeamInningText.textContent = "Bowling side";
              firstTeamRunsWickets.textContent = "Yet to Bat";
              secondTeamInningText.textContent = `${data.data[index].score[0].inning}`;
              secondTeamRunsWickets.textContent = `${data.data[index].score[0].r}-${data.data[index].score[0].w}  (${data.data[index].score[0].o})`;
            }
          } else {
            divMatchScore.style.display = "none";
          }
          matchStatusText.textContent = `${data.data[index].status}`;

          // appending html elements in the body tag of second section
          secondSection.appendChild(matchWrapperDiv);
          matchWrapperDiv.appendChild(divMatchInfo);
          divMatchInfo.appendChild(matchName);
          divMatchInfo.appendChild(venue);
          matchWrapperDiv.appendChild(divTeamsNameFlag);
          divTeamsNameFlag.appendChild(divTeamFirst);
          divTeamFirst.appendChild(imgFirstTeamFlag);
          divTeamFirst.appendChild(firstTeamNameText);
          divTeamsNameFlag.appendChild(divVs);
          divVs.appendChild(vsText);
          divTeamsNameFlag.appendChild(divTeamSecond);
          divTeamSecond.appendChild(imgSecondTeamFlag);
          divTeamSecond.appendChild(secondTeamNameText);
          matchWrapperDiv.appendChild(divScoreInfo);
          divScoreInfo.appendChild(divMatchScore);
          divMatchScore.appendChild(divTeamScoreFirst);
          divTeamScoreFirst.appendChild(firstTeamInningText);
          divTeamScoreFirst.appendChild(firstTeamRunsWickets);
          firstTeamRunsWickets.appendChild(firstLineBreaker);
          firstTeamRunsWickets.appendChild(firstTeamOvers);
          divMatchScore.appendChild(divTeamScoreSecond);
          divTeamScoreSecond.appendChild(secondTeamInningText);
          divTeamScoreSecond.appendChild(secondTeamRunsWickets);
          secondTeamRunsWickets.appendChild(secondTeamOvers);
          secondTeamRunsWickets.appendChild(secondLineBreaker);
          divScoreInfo.appendChild(matchStatusText);
        }
      }
    } else {
      const errorMessageDiv = document.createElement("div");
      const errorText = document.createElement("p");
      errorMessageDiv.setAttribute("id", "errorMessageDiv");
      errorText.setAttribute("id", "errorText");
      errorText.textContent = "Today's api hits limit exceeded.";
      secondSection.appendChild(errorMessageDiv);
      errorMessageDiv.appendChild(errorText);
    }
  })
  .catch((error) => console.log(`Error: ${error}`));

// appending html elements in the body tag of second section
document.body.appendChild(secondSection);
secondSection.appendChild(divUpperHeading);
divUpperHeading.appendChild(liveScoreText);
secondSection.appendChild(divSeriesName);
divSeriesName.appendChild(seriesNameText);
