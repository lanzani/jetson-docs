# Mediapipe GPU for Python 3.8.10

## Mediapipe docker images

::: tip HEY! 👋
I've made a docker container with mediapipe 0.10.7 and opencv 4.8.0 ready to use! [Check it out](/libraries/mediapipe/overview#docker-images).
<br>
If you don't want to use docker, keep reading.
:::

## Mediapipe 0.10.7 installation
Required time: <Badge type="info" text="15min" />

### Pre-requisites
**Python 3.8.0**

It's the default version for l4t35.4.1, you are good to go!

**OpenCV**

From the tests I've made, OpenCV is needed to make everything works correctly. Don't worry, I've already built it for you :D

Follow the steps [here](/libraries/opencv/l4t35.4.1/py3.8.10) to install opencv 4.8.0 from wheel. Then come back here.

~~**Tensorflow**~~
> Wait, no tensorflow?

Well, I've seen guides that uses it and guides that don't. I didn't install it and my setup works great and uses the GPU.

The official mediapipe documentation says something about it [here](https://developers.google.com/mediapipe/framework/getting_started/gpu_support#tensorflow_cuda_support_and_setup_on_linux_desktop). I suggest you to continue without installing it.


### Install mediapipe from wheel

First, update and upgrade:
```bash
sudo apt-get update && sudo apt-get upgrade
```

Download the dependencies:

```bash
sudo apt-get install -y \
    libopencv-core-dev \
    libopencv-highgui-dev \
    libopencv-calib3d-dev \
    libopencv-features2d-dev \
    libopencv-imgproc-dev  \
    libopencv-video-dev
```

Upgrade pip:

```bash
python3 -m pip install --upgrade pip
```

Download the wheel file from [here](https://github.com/lanzani/jetson-libraries/raw/main/libraries/mediapipe/l4t35.4.1/py3.8.10/mp0.10.7/mediapipe-0.10.7-cp38-cp38-linux_aarch64.whl).

Install mediapipe:
```bash
python3 -m pip install mediapipe-0.10.7-cp38-cp38-linux_aarch64.whl
```

To conclude, you need to install matplotlib:

```bash
python3 -m pip install matplotlib
```

To test that everything properly works, try [these scripts](/libraries/mediapipe/overview#test-gpu-support).
