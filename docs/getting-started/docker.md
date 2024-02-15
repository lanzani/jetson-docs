# Setup docker

Setup time: <Badge type="info" text="5 min" />

## Setup docker

1. Install nano (or any other text editor):
   ```bash
   sudo apt-get install nano
   ``` 
2. Open `/etc/docker/daemon.json`:
   ```bash
   sudo nano /etc/docker/daemon.json
   ```
3. Edit from:
    ```json
    {
        "runtimes": {
            "nvidia": {
                "path": "nvidia-container-runtime",
                "runtimeArgs": []
            }
        }
    }
    ```

   To:
    ```json
    {
        "runtimes": {
            "nvidia": {
                "path": "nvidia-container-runtime",
                "runtimeArgs": []
            }
        }, // [!code ++]
    
        "default-runtime": "nvidia" // [!code ++]
    }
    ```
4. Restart docker:
   ```bash
   sudo systemctl restart docker
   ```

5. Now you need to add docker to the user group:
   ```bash
   sudo usermod -aG docker $USER
   ```

## Setup docker compose
### Docker compose v1
Install docker compose with:

```bash
sudo apt-get -y install docker-compose
```

Reboot is suggested :smile:

To run docker compose v1 use:
```bash
docker-compose <...>
```

### Docker compose v2

Download binaries from docker compose repo, select the version you need.
```bash
wget -O docker-compose https://github.com/docker/compose/releases/download/v2.24.5/docker-compose-linux-aarch64
```

```bash
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
```

```bash
mkdir -p $DOCKER_CONFIG/cli-plugins
```

```bash
cp docker-compose $DOCKER_CONFIG/cli-plugins/
```

```bash
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
```

To run docker compose v2 use:
```bash
docker compose <...>
```

## Run docker containers

### Display support
Before running a container:
```bash
export DISPLAY=:0
```
```bash
xhost +
```

Then run your container.

### GPU-ready docker compose
You may find useful the docker-compose.yml below, it shows how to _mirror_ what is necessary + a webcam.
```YAML
version: "3"

services:
   app:
      image: ghcr.io/lanzani/<IMAGE NAME>:<IMAGE TAG>
      stdin_open: true
      tty: true
      network_mode: host
      volumes:
      - /tmp/argus_socket:/tmp/argus_socket
      - /etc/enctune.conf:/etc/enctune.conf
      - /etc/nv_tegra_release:/etc/nv_tegra_release
      - /tmp/nv_jetson_model:/tmp/nv_jetson_model
      - /tmp/.X11-unix/:/tmp/.X11-unix
      - /tmp/.docker.xauth:/tmp/.docker.xauth
      devices:
      - /dev/snd
      - /dev/bus/usb
      - /dev/video0
      environment:
      - DISPLAY=:0
      - XAUTHORITY=/tmp/.docker.xauth
```
To start the docker compose:
```bash
docker-compose up --build -d
```

To "jump in" the running container:
1. Get container id with: 
   ```bash
   docker ps
   ```
2. "jump in":
   ```bash
   docker exec -it <ID> bash
   ```

## General info

### Official NVIDIA base images

https://developer.nvidia.com/embedded/learn/tutorials/jetson-container

https://catalog.ngc.nvidia.com/orgs/nvidia/containers/l4t-base