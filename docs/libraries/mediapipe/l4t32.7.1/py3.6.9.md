# Mediapipe for Python 3.6.9

## Mediapipe 0.8.5/0.8.4

::: tip HEY! 👋
I've made a docker container with mediapipe 0.8.5 and opencv 4.8.0 ready to use! Check it out.
<br>
If you don't want to use docker, keep reading.
:::

### Pre-requisites
**Python 3.6.9**

It's the default version for Jetpack 4.6, you can check this box.

**OpenCV**

From the tests I've made OpenCV is needed. I've built it for you, you can thank me later :D
Follow the steps here to install the wheel or build it yourself. Then come back.

~~**Tensorflow**~~
> Wait, no tensorflow? 

Well, I've seen guides that uses it and guides that don't. I didn't install it and my setup works great and uses the GPU. 

The official mediapipe documentation says something about it [here](https://developers.google.com/mediapipe/framework/getting_started/gpu_support#tensorflow_cuda_support_and_setup_on_linux_desktop). I suggest you to continue without installing it.


### Install mediapipe from wheel

_Credits to [PINTO0309](https://github.com/PINTO0309/mediapipe-bin)._ _Tested v0.8.5 on Jetson Nano 4GB_


Now that the pre-requisites are satisfied we can start to install mediapipe from wheel.

First, update and upgrade:
```bash
sudo apt-get update && apt-get upgrade
```

Download the dependencies:

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
Some of the following dependencies may be unnecessary, but I suggest to copy-paste all of them to reproduce my working
setup as close as possible. If you want, you can make some tests to correct what is truly needed and edit this page :)
:::

```bash
pip3 install -U --no-deps numpy==1.19.4 future==0.18.2 mock==3.0.5 keras_preprocessing==1.1.2 keras_applications==1.0.8 gast==0.4.0 protobuf pybind11 cython pkgconfig
```

Clone the repo from _PINTO0309_'s GitHub:

```bash
git clone https://github.com/PINTO0309/mediapipe-bin
```

Enter the folder:

```bash
cd mediapipe-bin
```

Download the mediapipe wheel:

- For mediapipe version 0.8.5 <Badge type="tip" text="SUGGESTED ✨" />
    ```bash
    ./v0.8.5/download.sh
    ```
- For mediapipe version 0.8.4 <Badge type="warning" text="NOT tested" />
    ```bash
    ./v0.8.4/download.sh
    ```

Unzip the package:

```bash
unzip v0.8.5.zip -d v0.8.5 
```

Install mediapipe:

```bash
pip3 install v0.8.5/v0.8.5/numpy119x/py36/mediapipe-0.8.5_cuda102-cp36-cp36m-linux_aarch64.whl
```

::: tip NOTE
It will take ~2 hours to build opencv-contrib on jetson nano, so if you see the line:

```Building wheel for opencv-contrib-python (pyproject.toml): still running...```

don't worry, it is not stuck. It just needs a couple of hours.
:::

To conclude, you may need python dataclasses:

```bash
pip3 install dataclasses
```

To test that everything properly works, try these scripts.

### Build mediapipe

I wasn't able to reproduce the build process described by PINTO0309, but the wheel for mediapipe v0.8.5 works perfectly.