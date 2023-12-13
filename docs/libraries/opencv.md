# OpenCV

## Pre-built packages

### Jetson devices

Tested on: Jetson Nano 4GB

To know more about the build flags, look at *Build from source* section below.

| Jetpack (l4t)         | Python version | OpenCV version | Package | Package source |
|-----------------------|----------------|----------------|---------|----------------|
| r32.7.1 (ubuntu18.04) | 3.6.8          | 4.8.0          |         |                |
|                       | 3.8.0          | 4.8.0          |         |                |
|                       | 3.10.11        | 4.8.0          |         |

### Install OpenCV from package

1. To install a OpenCV, you first need to download it from the table above, then run:

    ```bash
    ./OpenCV-*-aarch64.sh --prefix=/usr/local --skip-license --exclude-subdir
    ```

2. To check if the installation went good you can type:
    ```bash
    opencv_version
    ```
   The output should be the opencv_version you desired.
   ::: warning
   If you got some error, you may miss some runtime dependencies, to solve that, go to the section below.
   :::

3. To check if python has the right opencv version in the scope and to see the build details you can run:

    ```bash
    python3 -c "import cv2; print('OpenCV version:', str(cv2.__version__)); print(cv2.getBuildInformation())"
    ```

If you got some error, you may miss some runtime dependencies, to solve that, keep reading 🙂

### Check for missing runtime dependencies

## Build from source

Build

## Docker images

### Runtime
Here you can find images with opencv pre-installed.

| Jetpack (l4t)         | Python Version | OpenCV Version | Docker Image | Docker image source |
|-----------------------|----------------|----------------|--------------|---------------------|
| r32.7.1 (ubuntu18.04) | 3.6.8          | 4.8.0          |              |                     |
|                       | 3.8.0          | 4.8.0          |              |                     |

### Build images
Here you can find a table with the images used to build opencv and get the installation package.
