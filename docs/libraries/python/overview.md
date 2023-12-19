# Python

Python versions expires, [here](https://devguide.python.org/versions/) you can find their lifecycle.
Ubuntu versions also expires, [here](https://ubuntu.com/about/release-cycle) you can find when.

_I thought you may find useful to have these links here :)_

::: tip
After installing a new python version, it is suggested to create a virtual environment with only the python version you
want to use to avoid conflicts.
:::

## Docker images

::: info
To properly run docker images on jetson, make sure you have it correctly configured. Check
out [docker setup](/getting-started/docker).
:::

| Jetpack (l4t)      | Python  | Image                                                                                                                      | Image source                                                                                                        |
|--------------------|---------|----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| 4.6.1 (l4t-32.7.1) | 3.8.0   | [l4t32.7.1-py3.8.0](https://github.com/lanzani/jetson-libraries/pkgs/container/python/159297763?tag=l4t32.7.1-py3.8.0)     | [Dockerfile](https://github.com/lanzani/jetson-libraries/tree/main/libraries/python/l4t32.7.1/py3.8.0/Dockerfile)   |
| 4.6.1 (l4t-32.7.1) | 3.10.11 | [l4t32.7.1-py3.10.11](https://github.com/lanzani/jetson-libraries/pkgs/container/python/159352367?tag=l4t32.7.1-py3.10.11) | [Dockerfile](https://github.com/lanzani/jetson-libraries/tree/main/libraries/python/l4t32.7.1/py3.10.11/Dockerfile) |
| 4.6.1 (l4t-32.7.1) | 3.11.3  | WIP                                                                                                                        | WIP                                                                                                                 |
