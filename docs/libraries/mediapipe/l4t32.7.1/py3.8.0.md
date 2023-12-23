# Mediapipe GPU for Python 3.8.0

## Mediapipe docker images

::: tip HEY! 👋
I've made a docker container with mediapipe 0.10.7 and opencv 4.8.0 ready to use! [Check it out](/libraries/mediapipe/overview#docker-images).
<br>
If you don't want to use docker, keep reading.
:::

## Mediapipe 0.10.7 installation
Required time: <Badge type="info" text="" />

### Pre-requisites
**Python 3.8.0**

To install python 3.8.0 for l4t32.7.1 follow [these steps](/libraries/python/l4t32.7.1/py3.8.0), once done, come back here.

**OpenCV**

From the tests I've made, OpenCV is needed to make everything works correctly. Don't worry, I've already built it for you :D

Follow the steps [here](/libraries/opencv/l4t32.7.1/py3.8.0) to install opencv 4.8.0 from wheel. Then come back here.

~~**Tensorflow**~~
> Wait, no tensorflow?

Well, I've seen guides that uses it and guides that don't. I didn't install it and my setup works great and uses the GPU.

The official mediapipe documentation says something about it [here](https://developers.google.com/mediapipe/framework/getting_started/gpu_support#tensorflow_cuda_support_and_setup_on_linux_desktop). I suggest you to continue without installing it.


### Install mediapipe from wheel





