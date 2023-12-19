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
        },
    
        "default-runtime": "nvidia" // [!code ++]
    }
    ```
4. Restart docker:
   ```bash
   sudo systemctl restart docker`
   ```
   
5. Now you need to add docker to the user group:
   ```bash
   sudo usermod -aG docker $USER
   ```

## Setup docker compose
Install docker compose with:
```bash
sudo apt-get -y install docker-compose
```

Reboot is suggested :smile:

## General info
### Official NVIDIA base images
https://developer.nvidia.com/embedded/learn/tutorials/jetson-container

https://catalog.ngc.nvidia.com/orgs/nvidia/containers/l4t-base


### Run docker containers with display support
```bash
export DISPLAY=:0
```
```bash
xhost +
```
