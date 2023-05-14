getData();
async function getData() {
  const response = await fetch("./src/data.json");
  const data = await response.json();
  console.log(data);
  length = data.length;

  timeframes = [];

  for (i = 0; i < length; i++) {
    timeframes.push(data[i].current);
    timeframes.push(data[i].previous);

    let currentWorkDaily = data[0].timeframes.daily.current;
    let workDaily = document.querySelector("#current-work");
    workDaily.innerHTML = currentWorkDaily;

    let currentPlayDaily = data[1].timeframes.daily.current;
    let playDaily = document.querySelector("#current-play");
    playDaily.innerHTML = currentPlayDaily;

    let currentStudyDaily = data[2].timeframes.daily.current;
    let studyDaily = document.querySelector("#current-study");
    studyDaily.innerHTML = currentStudyDaily;

    let currentExerciseDaily = data[3].timeframes.daily.current;
    let exerciseDaily = document.querySelector("#current-exercise");
    exerciseDaily.innerHTML = currentExerciseDaily;

    let currentSocialDaily = data[4].timeframes.daily.current;
    let socialDaily = document.querySelector("#current-social");
    socialDaily.innerHTML = currentSocialDaily;

    let currentSelfcareDaily = data[5].timeframes.daily.current;
    let selfcareDaily = document.querySelector("#current-self-care");
    selfcareDaily.innerHTML = currentSelfcareDaily;
  }
}

let daily = document.querySelector("#daily");
daily.addEventListener("click", getData);
