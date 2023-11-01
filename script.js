// creating html elements for first section
const firstSection = document.createElement("section");
const nav = document.createElement("nav");
const divLogoWrapper = document.createElement("div");
const imgCwc_logo = document.createElement("img");
const divNavLinksWrapper = document.createElement("div");
const navUl = document.createElement("ul");
const navLinkLivescore = document.createElement("li");
const navLinkMatches = document.createElement("li");
const liveScoreATag = document.createElement("a");
const matchesATag = document.createElement("a");


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
liveScoreATag.setAttribute("href", "#liveScore");
matchesATag.setAttribute("href", "#matches");

// adding text in html page
liveScoreATag.textContent = "LiveScores";
matchesATag.textContent = "Matches";


// appending html elements in the body tag of first section
document.body.appendChild(firstSection);
firstSection.appendChild(nav);
nav.appendChild(divLogoWrapper);
divLogoWrapper.appendChild(imgCwc_logo);
nav.appendChild(divNavLinksWrapper);
divNavLinksWrapper.appendChild(navUl);
navUl.appendChild(navLinkLivescore);
navUl.appendChild(navLinkMatches);
navLinkLivescore.appendChild(liveScoreATag);
navLinkMatches.appendChild(matchesATag);

// creating html elements for second section
const secondSection = document.createElement("section");
const divUpperHeading = document.createElement("div");
const liveScoreText = document.createElement("h1");
const recentMatchesText = document.createElement("h1");
const upcomingMatchesText = document.createElement("h1");
const divSeriesName = document.createElement("div");
const seriesNameText = document.createElement("h2");

//adding attributes
secondSection.setAttribute("id", "liveScoresSection");
divUpperHeading.setAttribute("id", "upperHeading");
liveScoreText.setAttribute("id", "liveScore");
liveScoreText.setAttribute("class", "liveScore");
recentMatchesText.setAttribute("class", "liveScore");
upcomingMatchesText.setAttribute("class", "liveScore");
divSeriesName.setAttribute("id", "seriesName");
seriesNameText.setAttribute("class", "seriesNameText");

// adding text in html page
liveScoreText.textContent = "Live Scores";
recentMatchesText.textContent = "Recent Matches";
upcomingMatchesText.textContent = "Upcoming Matches";
seriesNameText.textContent = "ICC CRICKET WORLD CUP INDIA 2023";

const url = "https://api.cricapi.com/v1/cricScore?apikey=398e42ac-b41d-4dc6-80e0-07b64160da58";
const firstMatchDateTimeStr = "05:00:00";
const secondMatchDateTimeStr = "08:30:00";
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
    Netherlands: "NL",
};
const countryShortNameArray = [];
const teamsNameArray = [];
const teamNameStrArray = [];

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        
        
        if (data.status === "success") {
            const apiData = data.data;
            const dataLength = apiData.length;
            for (let index = 0; index < dataLength; index++) {
                const dateTimeString = new Date(`${apiData[index].dateTimeGMT}`);

                if (
                    firstMatchDateTimeStr === dateTimeString.toLocaleTimeString() ||
                    secondMatchDateTimeStr === dateTimeString.toLocaleTimeString()
                ) {

                    console.log(apiData[index]);
                    teamsNameArray.splice(0, teamsNameArray.length);
                    teamsNameArray.push(apiData[index].t1);
                    teamsNameArray.push(apiData[index].t2);
                    countryShortNameArray.splice(0, countryShortNameArray.length);

                    for (const iterator of teamsNameArray) {
                        let newtext = iterator.replace(" ", "_");
                        for (const key in countryFlag) {
                            if (newtext.includes(key)) {
                                countryShortNameArray.push(countryFlag[key])
                            };


                        }
                    }
                    

                    const setTime = new Date();
                    setTime.setTime(dateTimeString.getTime() + 19800000);
                    const timeFormat = new Intl.DateTimeFormat("en-us", {
                        timeStyle: "short",
                    });

                    // creating html elements
                    const matchWrapperDiv = document.createElement("div");
                    const divMatchInfo = document.createElement("div");
                    const matchName = document.createElement("h3");
                    const dateTime = document.createElement("h4");
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
                    const firstTeamRunsWickets = document.createElement("p");
                    const secondTeamRunsWickets = document.createElement("p");
                    const matchStatusText = document.createElement("p");

                    // attributs
                    matchWrapperDiv.setAttribute("class", "matchWrapperDiv");
                    divMatchInfo.setAttribute("class", "matchInfo");
                    matchName.setAttribute("class", "matchName");
                    dateTime.setAttribute("class", "dateTime");
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
                    firstTeamRunsWickets.setAttribute("class", "runsWickets");
                    secondTeamRunsWickets.setAttribute("class", "runsWickets");
                    matchStatusText.setAttribute("class", "matchStatus");

                    imgFirstTeamFlag.setAttribute("src", `https://cdorg.b-cdn.net/flags/generic/${countryShortNameArray[0]}.svg`);

                    imgSecondTeamFlag.setAttribute("src", `https://cdorg.b-cdn.net/flags/generic/${countryShortNameArray[1]}.svg`);

                    
                    teamNameStrArray.splice(0, teamNameStrArray.length);
                    for (const iterator of teamsNameArray) {
                        const teamNameStr = iterator.slice(0, iterator.length - 5).trim();
                        const teamShortNameStr = iterator.slice(-5).trim(); 
                        const tShorthandName = teamShortNameStr.slice(1, teamShortNameStr.length - 1);
                        teamNameStrArray.push(teamNameStr);
                        teamNameStrArray.push(tShorthandName);
                        
                    }
                   
                   
                    matchName.textContent =
                        `${teamNameStrArray[0]}  v/s  ${teamNameStrArray[2]}, ${apiData[index].matchType}`.toUpperCase();
                    dateTime.textContent = `${dateTimeString.toDateString()}, ${timeFormat.format(
                        setTime
                    )}`;
                    firstTeamNameText.textContent = `${teamNameStrArray[1]}`;
                    vsText.textContent = "v/s";
                    secondTeamNameText.textContent = `${teamNameStrArray[3]}`;

                    firstTeamRunsWickets.textContent = `${apiData[index].t1s}`;

                    secondTeamRunsWickets.textContent = `${apiData[index].t2s}`;

                    matchStatusText.textContent = `${apiData[index].status}`;

                    // appending html elements in the body tag of second section
                    secondSection.appendChild(matchWrapperDiv);
                    matchWrapperDiv.appendChild(divMatchInfo);
                    divMatchInfo.appendChild(matchName);
                    divMatchInfo.appendChild(dateTime);
                    matchWrapperDiv.appendChild(divTeamsNameFlag);
                    divTeamsNameFlag.appendChild(divTeamFirst);
                    divTeamFirst.appendChild(imgFirstTeamFlag);
                    divTeamFirst.appendChild(firstTeamNameText);
                    divTeamFirst.appendChild(firstTeamRunsWickets);
                    divTeamsNameFlag.appendChild(divVs);
                    divVs.appendChild(vsText);
                    divTeamsNameFlag.appendChild(divTeamSecond);
                    divTeamSecond.appendChild(imgSecondTeamFlag);
                    divTeamSecond.appendChild(secondTeamNameText);
                    divTeamSecond.appendChild(secondTeamRunsWickets);
                    matchWrapperDiv.appendChild(divScoreInfo);
                    divScoreInfo.appendChild(matchStatusText);

                }

            }
        } else {
            error("Today's api hits limit exceeded.");
        }
        // console.log(teamsNameArray);
        // console.log(countryShortNameArray);
    })
.catch((err) => {
    error(err);
    
});

// appending html elements in the body tag of second section
document.body.appendChild(secondSection);
secondSection.appendChild(divUpperHeading);
divUpperHeading.appendChild(liveScoreText);
divUpperHeading.appendChild(recentMatchesText);
divUpperHeading.appendChild(upcomingMatchesText);
secondSection.appendChild(divSeriesName);
divSeriesName.appendChild(seriesNameText);

function error(errorMessage) {
    const errorMessageDiv = document.createElement("div");
    const errorText = document.createElement("p");
    errorMessageDiv.setAttribute("id", "errorMessageDiv");
    errorText.setAttribute("id", "errorText");
    errorText.textContent = errorMessage;
    secondSection.appendChild(errorMessageDiv);
    errorMessageDiv.appendChild(errorText);
}