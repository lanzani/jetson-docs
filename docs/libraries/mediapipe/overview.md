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

| Jetpack (l4t)      | Python  | Mediapipe | Install guide                                                                                   |
|--------------------|---------|-----------|-------------------------------------------------------------------------------------------------|
| 4.6.1 (l4t-32.7.1) | 3.6.9   | 0.8.4     | [go to page](http://localhost:5173/libraries/mediapipe/l4t32.7.1/py3.6.9#mediapipe-0-8-5-0-8-4) |
| 4.6.1 (l4t-32.7.1) | 3.6.9   | 0.8.5     | [go to page](http://localhost:5173/libraries/mediapipe/l4t32.7.1/py3.6.9#mediapipe-0-8-5-0-8-4) |
| 4.6.1 (l4t-32.7.1) | 3.8.0   | 0.10.7    | [go to page](http://localhost:5173/libraries/mediapipe/l4t32.7.1/py3.6.9#mediapipe-0-8-5-0-8-4) |
| 4.6.1 (l4t-32.7.1) | 3.10.11 | 0.10.8    | WIP                                                                                             |

## Docker images

::: info
To properly run docker images on jetson, make sure you have it correctly configured. Check
out [docker setup](/getting-started/docker).
:::

### Runtime images

Here you can find images with opencv and mediapipe pre-installed.

| Jetpack (l4t)      | Python | OpenCV | Mediapipe | Image | Image source |
|--------------------|--------|--------|-----------|-------|--------------|
| 4.6.1 (l4t-32.7.1) | 3.6.8  | 4.8.0  | 0.8.5     | WIP   | WIP          |
| 4.6.1 (l4t-32.7.1) | 3.8.0  | 4.8.0  | 0.10.7    | WIP   | WIP          |

### Build images

Here is the images used to build mediapipe.

| Jetpack (l4t)      | Python | OpenCV | Mediapipe | Image                                                                                                                                 | Image source |
|--------------------|--------|--------|-----------|---------------------------------------------------------------------------------------------------------------------------------------|--------------|
| 4.6.1 (l4t-32.7.1) | 3.8.0  | 4.8.0  | 0.10.7    | [image](https://github.com/lanzani/jetson-libraries/pkgs/container/mediapipe/159333313?tag=l4t32.7.1-py3.8.0-ocv4.8.0-mp0.10.7-build) | WIP          |

## Test GPU support

To check if mediapipe uses the gpu, run your script, you will see a log printed in the terminal that says:

```
Created TensorFlow Lite XNNPACK delegate for GPU.
```

Here is some scripts to test if everything works :)

### Mediapipe 0.8.x

#### Live pose estimation

With an HD webcam I was able to obtain ~20 fps.

```python


```

### Mediapipe 0.10.x



