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
| 4.6.1 (l4t-32.7.1) | 3.6.9   | 0.8.5     | [go to page](/libraries/mediapipe/l4t32.7.1/py3.6.9#mediapipe-0-8-5-0-8-4) |
| 4.6.1 (l4t-32.7.1) | 3.8.0   | 0.10.7    | WIP                                                                        |
| 4.6.1 (l4t-32.7.1) | 3.10.11 | 0.10.8    | WIP                                                                        |

## Docker images

::: info
To properly run docker images on jetson, make sure you have it correctly configured. Check
out [docker setup](/getting-started/docker).
:::

### Runtime images

Here you can find images with opencv and mediapipe pre-installed.

#### Jetpack 4.6.1 (l4t-32.7.1)

| Python | OpenCV | Mediapipe | Image                                                                                                                                                       | Image source                                                                                                               |
|--------|--------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| 3.6.9  | 4.8.0  | 0.8.5     | [l4t32.7.1-py3.6.9-ocv4.8.0-mp0.8.5](https://github.com/lanzani/jetson-libraries/pkgs/container/mediapipe/159638212?tag=l4t32.7.1-py3.6.9-ocv4.8.0-mp0.8.5) | [Dockerfile](https://github.com/lanzani/jetson-libraries/blob/main/libraries/opencv/l4t32.7.1/py3.6.9/ocv4.8.0/Dockerfile) |
| 3.8.0  | 4.8.0  | 0.10.7    | WIP                                                                                                                                                         | WIP                                                                                                                        |


### Build images

These are the images used to build mediapipe.

#### Jetpack 4.6.1 (l4t-32.7.1)

| Python | OpenCV | Mediapipe | Image                                                                                                                                 | Image source |
|--------|--------|-----------|---------------------------------------------------------------------------------------------------------------------------------------|--------------|
| 3.8.0  | 4.8.0  | 0.10.7    | [image](https://github.com/lanzani/jetson-libraries/pkgs/container/mediapipe/159333313?tag=l4t32.7.1-py3.8.0-ocv4.8.0-mp0.10.7-build) | WIP          |

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


