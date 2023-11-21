# Mediapipe

Tested on: Jetson Nano 2GB, Jetson Nano 4GB

To use the acceleration that the jetson nano provides you need to build mediapipe from source on jetson.

Source [here](https://github.com/feitgemel/Jetson-Nano-Python/blob/master/Install-MediaPipe/How%20to%20Install%20MediaPipe%20on%20jetson-nano%202022.txt).

1. Increase swap for more swap ram
    ```bash
    cd ~
    git clone https://github.com/JetsonHacksNano/installSwapfile.git  
    cd installSwapfile
    ./installSwapfile.sh
    ```

2. setup - pre install include Python and pip
    ```bash
    sudo apt update
    sudo apt-get update
    sudo apt-get install python3-pip
    sudo pip3 install -U pip testresources setuptools==49.6.0
    ```

3. python libraries for Tensorflow
    ```bash
    sudo apt-get install libhdf5-serial-dev hdf5-tools libhdf5-dev zlib1g-dev zip libjpeg8-dev liblapack-dev libblas-dev gfortran
    ```

4. Install more Python libraries
    ```bash
    sudo pip3 install -U --no-deps numpy==1.19.4 future==0.18.2 mock==3.0.5 keras_preprocessing==1.1.2 keras_applications==1.0.8 gast==0.4.0 protobuf pybind11 cython pkgconfig
    ```

5. part of Numpy -> store large amount of data in binary format
    ```bash
        sudo env H5PY_SETUP_REQUIRES=0 pip3 install -U h5py==3.1.0
        
        sudo apt-get install python3-opencv
    ```

6. install media pipe from the source code
    ```bash
    git clone https://github.com/google/mediapipe.git
    cd mediapipe
    ```

7. install more libraries for the media pipe setup
    ```bash
    sudo apt-get install -y libopencv-core-dev  libopencv-highgui-dev libopencv-calib3d-dev libopencv-features2d-dev libopencv-imgproc-dev libopencv-video-dev
    ```

8. set permissions for the setup script file
    ```bash
    sudo chmod 744 setup_opencv.sh
    ```

9. run installation from source code : about 30 minutes
    ```bash
    ./setup_opencv.sh
    ```

10. last step
    ```bash
    sudo pip3 install opencv_contrib_python
    git clone https://github.com/PINTO0309/mediapipe-bin
    cd mediapipe-bin
    ```

    ```bash
    sudo apt install curl
    ```

    ```bash
    ./v0.8.5/download.sh
    ```
    
    ```bash
    sudo apt-get install unzip
    unzip v0.8.5.zip  -d v0.8.5
    ```

    ```bash
    sudo pip3 install v0.8.5/v0.8.5/numpy119x/py36/mediapipe-0.8.5_cuda102-cp36-cp36m-linux_aarch64.whl
    pip3 install dataclasses 
    ```
    
# Mediapipe headless WORKAROUND

Edit the lightdm configuration to skip login (not ideal).

Edit /etc/lightdm/lightdm.conf.d/50-nvidia.conf (filename may be different) and edit the following lines (or add them if missing)
```bash
[Seat:*]
autologin-user=<jetson_username>
autologin-user-timeout=0
```
then add user to nopasswdlogin login
```bash
sudo usermod -a -G nopasswdlogin <jetson_username>
```
