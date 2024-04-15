# OpenCV for Python 3.8.10

## OpenCV docker images

::: tip HEY! 👋
I've made a docker container with opencv 4.8.0 ready to use! [Check it out](/libraries/opencv/overview#docker-images).
<br>
If you don't want to use docker, keep reading.
:::

## OpenCV 4.8.0 installation

Required time: <Badge type="info" text="25 min" />

### Pre-requisites

::: info
I'm going start from a new fresh Jetpack.
:::

**Python 3.8.10**

It's the default version for l4t35.4.1, you are good to go!

### Install OpenCV from package

1. You need to install runtime dependencies:
    ```bash
    sudo apt-get update && sudo apt-get upgrade -y --autoremove
    ```
   ```bash
    sudo apt-get remove -y python3-numpy python3-matplotlib
    ```
    ```bash
    sudo apt-get install -y  \
    libtesseract4 \
    libatlas3-base \
    python3-pip \
    python3.8 \
    python3.8-dev
    ```
    ```bash
     sudo apt-get clean
     ```
2. We need to pin some python dependencies:
    ```bash
    python3 -m pip install pybind11
    ```
   ```bash
    python3 -m pip install Cython==0.29.36
    ```
   ```bash
    python3 -m pip install setuptools==49.6.0
    ```
   ```bash
    python3 -m pip install numpy==1.19.4
    ```

3. Download the pre-built .sh installer from
   here: [`OpenCV-4.8.0-aarch64.sh`](https://github.com/lanzani/jetson-libraries/raw/main/libraries/opencv/l4t35.4.1/py3.8.10/OpenCV-4.8.0-aarch64.sh),
   or download it using wget:
    ```bash
    wget https://github.com/lanzani/jetson-libraries/raw/main/libraries/opencv/l4t35.4.1/py3.8.10/OpenCV-4.8.0-aarch64.sh
    ```

4. Give execution privileges:
   ```bash
    chmod +x OpenCV-4.8.0-aarch64.sh
    ```

5. To install OpenCV run:

    ```bash
    sudo ./OpenCV-4.8.0-aarch64.sh --prefix=/usr/local --skip-license --exclude-subdir
    ```
   This will install opencv in your system.

6. Last step: specify the right pythonpath. To do that permanently you need to open `.bashrc`:
    ```bash
    nano .bashrc
    ```
   and then add the following line at the bottom of the file:
   ```bash:line-numbers=118
   # enable programmable completion features (you don't need to enable
   # this, if it's already enabled in /etc/bash.bashrc and /etc/profile
   # sources /etc/bash.bashrc).
   if ! shopt -oq posix; then
     if [ -f /usr/share/bash-completion/bash_completion ]; then
       . /usr/share/bash-completion/bash_completion
     elif [ -f /etc/bash_completion ]; then
       . /etc/bash_completion
     fi
   fi
   
   export PYTHONPATH=/usr/local/lib/python3.8/site-packages:$PYTHONPATH # [!code focus] # [!code ++]
   ```
7. Close the terminal and open another one

8. To check if the installation went good you can type:
    ```bash
    opencv_version
    ```
   The output should be the opencv version you desired.

   ::: warning
   If you got some error, you may miss some runtime dependencies, to solve that, go to
   the [section below](#check-for-missing-runtime-dependencies).
   :::

9. To check if python has the right opencv version in the scope and to see the build details you can run:

    ```bash
    python3 -c "import cv2; print('OpenCV version:', str(cv2.__version__)); print(cv2.getBuildInformation())"
    ```

10. To be sure that opencv is properly using cuda (and the gpu) try to
    run [one of these python scripts](/libraries/opencv/overview#test-gpu-support).

Congratulations! You now have OpenCV 4.8.0 🎉

If you are encountering some problems feel free to open an [issue](https://github.com/lanzani/jetson-docs/issues).

### Build from source

Great [video](https://www.youtube.com/watch?v=BCNnqTFi-Gs) by JetsonHacks.
