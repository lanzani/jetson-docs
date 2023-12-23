# Mediapipe GPU

## General info

[Mediapipe](https://github.com/google/mediapipe) is a great library by google that allows to do great stuff, however it
doesn't come with out-of-the-box support for jetson platforms. That's why is necessary to build it from source.

Sad for us developer, the build procedure changed substantially from version 0.8.x to version 0.10.x, so depending on
your needs you have to match the mediapipe version you desire with the python version you desire.

If there is no match that suits your needs, you can try to combine some of the instructions provided or open an
[issue](https://github.com/lanzani/jetson-docs/issues) on the GitHub repo of this documentation,
me or some kind member of the community will try to address your issue.
<br> BUT, since it isn't an easy process I suggest to
consider using some of the matches that are already present in this page :)

## Mediapipe wheels

| Jetpack (l4t)      | Python  | Mediapipe | Install guide                                                              |
|--------------------|---------|-----------|----------------------------------------------------------------------------|
| 4.6.1 (l4t-32.7.1) | 3.6.9   | 0.8.4     | [go to page](/libraries/mediapipe/l4t32.7.1/py3.6.9#mediapipe-0-8-5-0-8-4) |
| 4.6.1 (l4t-32.7.1) | 3.6.9   | 0.8.5     | [go to page](/libraries/mediapipe/l4t32.7.1/py3.6.9)                       |
| 4.6.1 (l4t-32.7.1) | 3.8.0   | 0.10.7    | [go to page](/libraries/mediapipe/l4t32.7.1/py3.8.0)                       |
| 4.6.1 (l4t-32.7.1) | 3.10.11 | 0.10.8    | WIP                                                                        |

## Docker images

::: info
To properly run docker images on jetson, make sure you have it correctly configured. Check
out [docker setup](/getting-started/docker).
:::

::: tip
To run containers on jetson with display and GPU, look [here](/getting-started/docker#run-docker-containers).
:::

**Root image**: [ghcr.io/lanzani/mediapipe](https://github.com/lanzani/jetson-libraries/pkgs/container/mediapipe).

### Runtime images

Here you can find images with opencv and mediapipe pre-installed.

#### Jetpack 4.6.1 (l4t-32.7.1)

| Python | OpenCV | Mediapipe | Image tag                                                                                                                                                   | Image source                                                                                                               |
|--------|--------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| 3.6.9  | 4.8.0  | 0.8.5     | [l4t32.7.1-py3.6.9-ocv4.8.0-mp0.8.5](https://github.com/lanzani/jetson-libraries/pkgs/container/mediapipe/159638212?tag=l4t32.7.1-py3.6.9-ocv4.8.0-mp0.8.5) | [Dockerfile](https://github.com/lanzani/jetson-libraries/blob/main/libraries/opencv/l4t32.7.1/py3.6.9/ocv4.8.0/Dockerfile) |
| 3.8.0  | 4.8.0  | 0.10.7    | WIP                                                                                                                                                         | WIP                                                                                                                        |

### Build images

These are the images used to build mediapipe and get the wheel file.

#### Jetpack 4.6.1 (l4t-32.7.1)

| Python | OpenCV | Mediapipe | Image                                     | Image source                                                                                                                                  |
|--------|--------|-----------|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| 3.8.0  | 4.8.0  | 0.10.7    | [l4t32.7.1-py3.8.0-ocv4.8.0-mp0.10.7-build](https://github.com/lanzani/jetson-libraries/pkgs/container/mediapipe/160920674?tag=l4t32.7.1-py3.8.0-ocv4.8.0-mp0.10.7-build) | [Dockerfile](https://github.com/lanzani/jetson-libraries/blob/main/libraries/mediapipe/l4t32.7.1/py3.8.0/mp0.10.7/build_mediapipe/Dockerfile) |

You can find all the available tags [here](https://github.com/lanzani/jetson-libraries/pkgs/container/mediapipe).

## Test GPU support

To check if mediapipe uses the gpu, run your script or use one of the following, if you see a log printed in the
terminal that says:

```
Created TensorFlow Lite XNNPACK delegate for GPU.
```

it means that mediapipe is using the gpu! Congratulations! 🎉

### Mediapipe 0.8.x

Python scripts in this section works **only** with mediapipe 0.8.x

#### Live pose estimation

With an HD webcam I was able to obtain ~20 fps.

```python
import time

import cv2
import mediapipe as mp

video_source = "/dev/video0"  # Use a webcam
# video_source = "test_video.mp4"  # Path to video file

# Initialize MediaPipe Pose and Drawing utilities
mp_pose = mp.solutions.pose
mp_drawing = mp.solutions.drawing_utils
pose = mp_pose.Pose()

# Open the video file
cap = cv2.VideoCapture(video_source)
time.sleep(2)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    # Convert the frame to RGB
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Process the frame with MediaPipe Pose
    result = pose.process(frame_rgb)

    # Draw the pose landmarks on the frame
    if result.pose_landmarks:
        mp_drawing.draw_landmarks(frame, result.pose_landmarks, mp_pose.POSE_CONNECTIONS)

    # Display the frame
    cv2.imshow('MediaPipe Pose', frame)

    # Exit if 'q' keypyt
    cv2.waitKey(1)

```

### Mediapipe 0.10.x

Python scripts in this section works **only** with mediapipe 0.10.x

With an HD webcam I was able to obtain ~20 fps.

::: warning
To run this script you need to
download [this model](https://github.com/lanzani/jetson-libraries/raw/main/libraries/mediapipe/test_scripts/pose_landmarker_full.task)
and put it in the same directory of the script.
:::

```python
import cv2
import numpy as np
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
from mediapipe.framework.formats import landmark_pb2

model_path = "pose_landmarker_full.task"

video_source = "/dev/video0"

num_poses = 4
min_pose_detection_confidence = 0.5
min_pose_presence_confidence = 0.5
min_tracking_confidence = 0.5


def draw_landmarks_on_image(rgb_image, detection_result):
    pose_landmarks_list = detection_result.pose_landmarks
    annotated_image = np.copy(rgb_image)

    # Loop through the detected poses to visualize.
    for idx in range(len(pose_landmarks_list)):
        pose_landmarks = pose_landmarks_list[idx]

        pose_landmarks_proto = landmark_pb2.NormalizedLandmarkList()
        pose_landmarks_proto.landmark.extend([
            landmark_pb2.NormalizedLandmark(
                x=landmark.x,
                y=landmark.y,
                z=landmark.z) for landmark in pose_landmarks
        ])
        mp.solutions.drawing_utils.draw_landmarks(
            annotated_image,
            pose_landmarks_proto,
            mp.solutions.pose.POSE_CONNECTIONS,
            mp.solutions.drawing_styles.get_default_pose_landmarks_style())
    return annotated_image


to_window = None
last_timestamp_ms = 0


def print_result(detection_result: vision.PoseLandmarkerResult, output_image: mp.Image,
                 timestamp_ms: int):
    global to_window
    global last_timestamp_ms
    if timestamp_ms < last_timestamp_ms:
        return
    last_timestamp_ms = timestamp_ms
    # print("pose landmarker result: {}".format(detection_result))
    to_window = cv2.cvtColor(
        draw_landmarks_on_image(output_image.numpy_view(), detection_result), cv2.COLOR_RGB2BGR)


base_options = python.BaseOptions(model_asset_path=model_path, delegate=python.BaseOptions.Delegate.GPU)
options = vision.PoseLandmarkerOptions(
    base_options=base_options,
    running_mode=vision.RunningMode.LIVE_STREAM,
    num_poses=num_poses,
    min_pose_detection_confidence=min_pose_detection_confidence,
    min_pose_presence_confidence=min_pose_presence_confidence,
    min_tracking_confidence=min_tracking_confidence,
    output_segmentation_masks=False,
    result_callback=print_result
)

with vision.PoseLandmarker.create_from_options(options) as landmarker:
    # Use OpenCV’s VideoCapture to start capturing from the webcam.
    cap = cv2.VideoCapture(video_source)

    # Create a loop to read the latest frame from the camera using VideoCapture#read()
    while cap.isOpened():
        success, image = cap.read()
        if not success:
            print("Image capture failed.")
            break

        # Convert the frame received from OpenCV to a MediaPipe’s Image object.
        mp_image = mp.Image(
            image_format=mp.ImageFormat.SRGB,
            data=cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
        timestamp_ms = int(cv2.getTickCount() / cv2.getTickFrequency() * 1000)
        landmarker.detect_async(mp_image, timestamp_ms)

        if to_window is not None:
            cv2.imshow("MediaPipe Pose Landmark", to_window)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()
```
