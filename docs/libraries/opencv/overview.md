# OpenCV

## OpenCV pre-built installers

_Tested on: Jetson Nano 4GB_

To know more about the build flags look the installation guide, build section.

| Jetpack (l4t)      | Python  | OpenCV | Install guide |
|--------------------|---------|--------|---------------|
| 4.6.1 (l4t-32.7.1) | 3.6.9   | 4.8.0  | WIP           |
| 4.6.1 (l4t-32.7.1) | 3.8.0   | 4.8.0  | WIP           |
| 4.6.1 (l4t-32.7.1) | 3.10.11 | 4.8.0  | WIP           |


## Docker images

::: info
To properly run docker images on jetson, make sure you have it correctly configured. Check
out [docker setup](/getting-started/docker)
:::

### Runtime images

Here you can find images with opencv pre-installed.

| Jetpack (l4t)      | Python | OpenCV | Image                                                                                                                                    | Image source                                                                                                               |
|--------------------|--------|--------|------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| 4.6.1 (l4t-32.7.1) | 3.6.9  | 4.8.0  | [l4t32.7.1-py3.6.9-ocv4.8.0](https://github.com/lanzani/jetson-libraries/pkgs/container/opencv/159649283?tag=l4t32.7.1-py3.6.9-ocv4.8.0) | [Dockerfile](https://github.com/lanzani/jetson-libraries/blob/main/libraries/opencv/l4t32.7.1/py3.6.9/ocv4.8.0/Dockerfile) |

### Build images

Here you can find a table with the images used to build opencv and get the installation package.

| Jetpack (l4t) | Python | OpenCV | Mediapipe | Image | Image source |
|---------------|--------|--------|-----------|-------|--------------|
|               |        |        |           |       |              |


## Test GPU support

