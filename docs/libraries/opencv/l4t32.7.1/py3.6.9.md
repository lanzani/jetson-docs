# OpenCV for Python 3.6.9

## OpenCV docker images

::: tip HEY! 👋
I've made a docker container with opencv 4.8.0 ready to use! [Check it out](/libraries/opencv/overview#docker-images).
<br>
If you don't want to use docker, keep reading.
:::

## OpenCV 4.8.0 installation



### Pre-requisites

**Python 3.6.9**

It's the default version for Jetpack 4.6, you are good to go!

### Install OpenCV from package

1. Download the .sh installer from here: [`OpenCV-4.8.0-aarch64.sh`](https://github.com/lanzani/jetson-libraries/raw/main/libraries/opencv/l4t32.7.1/py3.6.9/ocv4.8.0/OpenCV-4.8.0-aarch64.sh), or download it using wget:
    ```bash
    wget https://github.com/lanzani/jetson-libraries/blob/main/libraries/opencv/l4t32.7.1/py3.6.9/ocv4.8.0/OpenCV-4.8.0-aarch64.sh
    ```

2. To install OpenCV run:

    ```bash
    ./OpenCV-*-aarch64.sh --prefix=/usr/local --skip-license --exclude-subdir
    ```
    This will install opencv in your system.

3. Now you need to install runtime dependencies:
    ```bash
    sudo apt-get update && apt-get -y install \
        python3-pip \
        libtesseract4 \
        libatlas3-base \
        python3-numpy \
        && apt-get clean
    ```

4. Last step: specify the right pythonpath:
    ```bash
    
    ```

5. To check if the installation went good you can type:
    ```bash
    opencv_version
    ```
   The output should be the opencv version you desired.

   ::: warning
   If you got some error, you may miss some runtime dependencies, to solve that, go to the [section below](#check-for-missing-runtime-dependencies).
   :::

6. To check if python has the right opencv version in the scope and to see the build details you can run:

    ```bash
    python3 -c "import cv2; print('OpenCV version:', str(cv2.__version__)); print(cv2.getBuildInformation())"
    ```

If you got some error, you may miss some runtime dependencies, to solve that, keep reading 🙂

### Check for missing runtime dependencies

### Build from source

