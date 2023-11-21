# Tensorflow & keras

Source [here](https://forums.developer.nvidia.com/t/official-tensorflow-for-jetson-nano/71770).

1. Install tensorflow
    ```bash
    sudo apt-get update
    sudo apt-get install -y python3-pip pkg-config
    sudo apt-get install -y libhdf5-serial-dev hdf5-tools libhdf5-dev zlib1g-dev zip libjpeg8-dev liblapack-dev libblas-dev gfortran
    sudo ln -s /usr/include/locale.h /usr/include/xlocale.h
    sudo pip3 install --verbose 'protobuf<4' 'Cython<3'
    sudo wget --no-check-certificate https://developer.download.nvidia.com/compute/redist/jp/v461/tensorflow/tensorflow-2.7.0+nv22.1-cp36-cp36m-linux_aarch64.whl
    sudo pip3 install numpy==1.19.4
    sudo pip3 install --verbose tensorflow-2.7.0+nv22.1-cp36-cp36m-linux_aarch64.whl
    ```

2. Update keras
    ```bash
    sudo pip3 install keras==2.6
    ```