# Docker
Time required: 15 min

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
