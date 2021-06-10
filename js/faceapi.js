const video = document.getElementById("webgazerVideoFeed");
const canvasRef = document.getElementById("canvasRef");

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
]).then(startVideo);

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    (stream) => (video.srcObject = stream),
    (err) => console.error(err)
  );
}

video.addEventListener("play", () => {
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    /**const neutral = detections[0].expressions.neutral;
    const angry = detections[0].expressions.angry;
    const disgusted = detections[0].expressions.disgusted;
    const fearful = detections[0].expressions.fearful;
    const happy = detections[0].expressions.happy;
    const sad = detections[0].expressions.sad;
    const surprised = detections[0].expressions.surprised;**/

    /**const objects = {
      neutral: neutral,
      angry: angry,
      disgusted: disgusted,
      fearful: fearful,
      happy: happy,
      sad: sad,
      surprised: surprised,
    };
    console.log(objects);**/

    console.log(detections);
  }, 100);
});

/**const maxConfidence = confidence.indexOf(
  Math.max.apply(null, confidence)
)**/
