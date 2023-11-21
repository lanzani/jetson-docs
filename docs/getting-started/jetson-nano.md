# Jetson Nano

---

# First Boot

After booted Jetpack on a fresh sd start the jetson.

```bash
sudo apt update && sudo apt upgrade -y
```

## Remove unwanted software

```bash
sudo apt purge libreoffice* && sudo apt-get clean -y
```

## Remove automatic suspension

```bash
sudo systemctl mask sleep.target suspend.target hibernate.target hybrid-sleep.target
```

## Change the display manager

Change the display manager to lightdm using the below command. Using lightdm as a default display manager, you will
save RAM.

1. `sudo dpkg-reconfigure gdm3`
2. select _lightdm_ and select ok

---

# Jetson Stats

1. Install pip3 with `sudo apt install python3-pip -y`
2. Install jetson_stats with `sudo -H pip3 install -U jetson-stats`
3. `sudo reboot`
4. To use jetson_stats use `jtop`

---

# Configure Docker

## Install dependencies

```bash
sudo apt-get update && sudo apt-get install git python3-pip
git clone https://github.com/dusty-nv/jetson-containers
cd jetson-containers
pip3 install -r requirements.txt
```

## Docker settings

Open: `sudo nano /etc/docker/daemon.json`

Edit from:
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

    "default-runtime": "nvidia"
}
```
Restart docker: `sudo systemctl restart docker`

## Docker group

1. `sudo usermod -aG docker $USER`
2. `sudo reboot`

## Install docker-compose

```bash
sudo apt-get -y install docker-compose
```