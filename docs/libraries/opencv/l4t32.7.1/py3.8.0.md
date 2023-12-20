# OpenCV for Python 3.8.0

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

**Python 3.8.0**

To install python 3.8.0 for l4t32.7.1 follow [these steps](/libraries/python/l4t32.7.1/py3.8.0), once done, come back
here.

### Install OpenCV from package

1. You need to install runtime dependencies:
    ```bash
    sudo apt-get update && sudo apt-get upgrade
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
    python3.8 -m pip install pybind11 Cython==0.29.36 setuptools==49.6.0
    ```

   ::: warning
   I'm doing `python3.8 -m pip install ...` because I've not made a virtual environment (this time) which would have
   only one python version.

   Instead, I run `pip install` specifying the python version in order to be sure that the packages I'm installing
   are
   installed for the correct python version.
   :::
3. Now install numpy:
    ```bash
    python3.8 -m pip install numpy==1.19.4
    ```
4. Download the pre-built .sh installer from
   here: [`OpenCV-4.8.0-aarch64.sh`](https://github.com/lanzani/jetson-libraries/raw/main/libraries/opencv/l4t32.7.1/py3.8.0/ocv4.8.0/OpenCV-4.8.0-aarch64.sh),
   or download it using wget:
    ```bash
    wget https://github.com/lanzani/jetson-libraries/raw/main/libraries/opencv/l4t32.7.1/py3.8.0/ocv4.8.0/OpenCV-4.8.0-aarch64.sh
    ```

5. Give execution privileges:
   ```bash
    chmod +x OpenCV-4.8.0-aarch64.sh
    ```

6. To install OpenCV run:

    ```bash
    sudo ./OpenCV-4.8.0-aarch64.sh --prefix=/usr/local --skip-license --exclude-subdir
    ```
   This will install opencv in your system.

7. Last step: specify the right pythonpath. To do that permanently you need to open `.bashrc`:
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
   
   export PYTHONPATH=/usr/local/lib/python3.8/site-packages # [!code focus] # [!code ++]
   ```

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

### Check for missing runtime dependencies

If you got some error when importing cv2 in python or executing opencv_version, you may miss some dependencies.
To find those follow the steps:

Go to the opencv installation folder:

```bash
cd /usr/local/lib/python3.8/site-packages/cv2/python-3.8/
```

Find missing dynamic dependencies:

```bash
ldd cv2.cpython-38m-aarch64-linux-gnu.so | grep found
```

Proceed to install the missing dependencies with `sudo apt-get install ...`

### Build from source

Great [video](https://www.youtube.com/watch?v=BCNnqTFi-Gs) by JetsonHacks.
