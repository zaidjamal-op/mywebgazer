window.saveDataAcrossSessions = true;

webgazer
  .setGazeListener((data, timestamps) => {
    console.log(data, timestamps);
  })
  .begin();
