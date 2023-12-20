# OpenCV

## OpenCV pre-built installers

_Tested on: Jetson Nano 4GB_

To know more about the build flags look the installation guide, build section.

| Jetpack (l4t)      | Python  | OpenCV | Install guide                                                                 |
|--------------------|---------|--------|-------------------------------------------------------------------------------|
| 4.6.1 (l4t-32.7.1) | 3.6.9   | 4.8.0  | [go to page](/libraries/opencv/l4t32.7.1/py3.6.9#opencv-4-8-0-installation)   |
| 4.6.1 (l4t-32.7.1) | 3.8.0   | 4.8.0  | [go to page](/libraries/opencv/l4t32.7.1/py3.8.0#opencv-4-8-0-installation)   |
| 4.6.1 (l4t-32.7.1) | 3.10.11 | 4.8.0  | [go to page](/libraries/opencv/l4t32.7.1/py3.10.11#opencv-4-8-0-installation) |
| 4.6.1 (l4t-32.7.1) | 3.11.3  | 4.8.0  | WIP                                                                           |

## Docker images

::: info
To properly run docker images on jetson, make sure you have it correctly configured. Check
out [docker setup](/getting-started/docker)
:::

### Runtime images

Here you can find images with opencv pre-installed.

| Jetpack (l4t)      | Python  | OpenCV | Image                                                                                                                                        | Image source                                                                                                                 |
|--------------------|---------|--------|----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| 4.6.1 (l4t-32.7.1) | 3.6.9   | 4.8.0  | [l4t32.7.1-py3.6.9-ocv4.8.0](https://github.com/lanzani/jetson-libraries/pkgs/container/opencv/159649283?tag=l4t32.7.1-py3.6.9-ocv4.8.0)     | [Dockerfile](https://github.com/lanzani/jetson-libraries/blob/main/libraries/opencv/l4t32.7.1/py3.6.9/ocv4.8.0/Dockerfile)   |
| 4.6.1 (l4t-32.7.1) | 3.8.0   | 4.8.0  | [l4t32.7.1-py3.8.0-ocv4.8.0](https://github.com/lanzani/jetson-libraries/pkgs/container/opencv/160202671?tag=l4t32.7.1-py3.8.0-ocv4.8.0)     | [Dockerfile](https://github.com/lanzani/jetson-libraries/blob/main/libraries/opencv/l4t32.7.1/py3.8.0/ocv4.8.0/Dockerfile)   |
| 4.6.1 (l4t-32.7.1) | 3.10.11 | 4.8.0  | [l4t32.7.1-py3.10.11-ocv4.8.0](https://github.com/lanzani/jetson-libraries/pkgs/container/opencv/160219897?tag=l4t32.7.1-py3.10.11-ocv4.8.0) | [Dockerfile](https://github.com/lanzani/jetson-libraries/blob/main/libraries/opencv/l4t32.7.1/py3.10.11/ocv4.8.0/Dockerfile) |

### Build images

Here you can find a table with the images used to build opencv and get the installation package.

| Jetpack (l4t) | Python | OpenCV | Mediapipe | Image | Image source |
|---------------|--------|--------|-----------|-------|--------------|
|               |        |        |           |       |              |

## Test GPU support

```python
#!/usr/bin/env python3

# Code from https://github.com/dusty-nv/jetson-containers

print('testing OpenCV...')

import cv2
try:
    import wget
except ImportError:
    print("To run this script you need wget, install it with: pip3 install wget")
    exit(0)

print('OpenCV version:', str(cv2.__version__))
print(cv2.getBuildInformation())

try:
    print('\nGPU devices:', str(cv2.cuda.getCudaEnabledDeviceCount()))
except Exception as ex:
    print(ex)
    print('OpenCV was not built with CUDA')
    raise ex

# download test image
img_url = 'https://raw.githubusercontent.com/dusty-nv/jetson-containers/59f840abbb99f22914a7b2471da829b3dd56122e/test/data/test_0.jpg'
img_path = '/tmp/test_0.jpg'

wget.download(img_url, img_path)

# load image
img_cpu = cv2.imread(img_path)
print(f'loaded test image from {img_path}  {img_cpu.shape}  {img_cpu.dtype}')

# test GPU processing
img_gpu = cv2.cuda_GpuMat()
img_gpu.upload(img_cpu)

img_gpu = cv2.cuda.resize(img_gpu, (int(img_cpu.shape[0] / 2), int(img_cpu.shape[1] / 2)))

luv = cv2.cuda.cvtColor(img_gpu, cv2.COLOR_BGR2LUV).download()
hsv = cv2.cuda.cvtColor(img_gpu, cv2.COLOR_BGR2HSV).download()
gray = cv2.cuda.cvtColor(img_gpu, cv2.COLOR_BGR2GRAY)

img_gpu = cv2.cuda.createCLAHE(clipLimit=5.0, tileGridSize=(8, 8)).apply(gray, cv2.cuda_Stream.Null())
img_cpu = img_gpu.download()

print('OpenCV OK')
```
