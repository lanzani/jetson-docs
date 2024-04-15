# Tensorflow for Python 3.8.10
Required time: <Badge type="info" text="20 min" />

Source [here](https://docs.nvidia.com/deeplearning/frameworks/install-tf-jetson-platform/index.html).

1. Install tensorflow
    ```bash
    sudo apt-get update
    sudo apt-get install -y libhdf5-serial-dev hdf5-tools libhdf5-dev zlib1g-dev zip libjpeg8-dev liblapack-dev libblas-dev gfortran
    sudo apt-get install -y python3-pip
    sudo python3 -m pip install --upgrade pip
   sudo pip3 install -U testresources setuptools==65.5.0
   sudo pip3 install -U numpy==1.22 future==0.18.2 mock==3.0.5 keras_preprocessing==1.1.2 keras_applications==1.0.8 gast==0.4.0 protobuf pybind11 cython pkgconfig packaging h5py==3.7.0
   sudo pip3 install --extra-index-url https://developer.download.nvidia.com/compute/redist/jp/v512 tensorflow==2.12.0+nv23.06
   ```

2. Update keras
    ```bash
    sudo pip3 install keras==2.6
    ```
