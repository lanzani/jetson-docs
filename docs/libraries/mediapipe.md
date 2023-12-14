# Mediapipe GPU

To install mediapipe you need to have [OpenCV](/libraries/opencv) installed.

## Mediapipe wheels

| Python | Mediapipe | Wheel | Wheel source                                                      |
|--------|-----------|-------|-------------------------------------------------------------------|
| 3.6.9  | 0.8.4     |       | [PINTO/mediapipe-bin](https://github.com/PINTO0309/mediapipe-bin) |
| 3.6.9  | 0.8.5     |       | [PINTO/mediapipe-bin](https://github.com/PINTO0309/mediapipe-bin) |

To see the available **docker images**, go at the [bottom of this page](#docker-images).

## Python 3.6.9

### Mediapipe 0.8.5

_Credits to [PINTO0309](https://github.com/PINTO0309/mediapipe-bin)._ _Tested on Jetson Nano 4GB_

First, download dependencies:

```bash
sudo apt-get install -y \
    git \
    curl \
    unzip \
    libhdf5-serial-dev  \
    hdf5-tools  \
    libhdf5-dev  \
    zlib1g-dev  \
    zip \
    libjpeg8-dev  \
    liblapack-dev  \
    libblas-dev  \
    gfortran \
    libopencv-core-dev  \
    libopencv-highgui-dev  \
    libopencv-calib3d-dev  \
    libopencv-features2d-dev  \
    libopencv-imgproc-dev  \
    libopencv-video-dev
```

Install python dependencies:

```bash
pip3 install -U pip testresources setuptools==49.6.0
```

::: info
Some of those dependencies may be unnecessary, if you want, you can make some tests and edit this page :)
:::

```bash
pip3 install -U --no-deps numpy==1.19.4 future==0.18.2 mock==3.0.5 keras_preprocessing==1.1.2 keras_applications==1.0.8 gast==0.4.0 protobuf pybind11 cython pkgconfig
```

Clone the repo from PINTO0309's GitHub:

```bash
git clone https://github.com/PINTO0309/mediapipe-bin
```

Enter the folder:

```bash
cd mediapipe-bin
```

Download the wheel:

```bash
./v0.8.5/download.sh
```

Unzip the package:

```bash
unzip v0.8.5.zip -d v0.8.5 
```

Install mediapipe:

```bash
pip3 install v0.8.5/v0.8.5/numpy119x/py36/mediapipe-0.8.5_cuda102-cp36-cp36m-linux_aarch64.whl
```

Note: you may need python dataclasses:

```bash
pip3 install dataclasses
```

## Python 3.8.0

::: info
Work in progress, contributions are welcome.
:::

## Build Mediapipe

> It's a rabbit hole, if you managed to build mediapipe with GPU support for jetson nano, please contact me!

## Docker images

::: info
To properly run docker images on jetson, make sure you have it correctly configured. Check
out [docker setup](/getting-started/docker)
:::

### Runtime

Here you can find images with opencv and mediapipe pre-installed.

| Jetpack (l4t)         | Python | OpenCV | Mediapipe | Docker Image | Docker image source |
|-----------------------|--------|--------|-----------|--------------|---------------------|
| r32.7.1 (ubuntu18.04) | 3.6.8  | 4.8.0  | 0.8.5     | WIP          | WIP                 |

