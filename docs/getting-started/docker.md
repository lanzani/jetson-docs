# Docker

## Setup docker
1. Open: `sudo nano /etc/docker/daemon.json`
2. Edit from:
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
        },
    
        "default-runtime": "nvidia" // [!code ++]
    }
    ```
3. Restart docker: `sudo systemctl restart docker`

Now you need to add docker to the user group:
```bash
sudo usermod -aG docker $USER
```

## Setup docker compose
Install docker compose with:
```bash
sudo apt-get -y install docker-compose
```

## Official NVIDIA base images
https://developer.nvidia.com/embedded/learn/tutorials/jetson-container

https://catalog.ngc.nvidia.com/orgs/nvidia/containers/l4t-base


## Run docker containers with display support
```bash
export DISPLAY=:0
```
```bash
xhost +
```
