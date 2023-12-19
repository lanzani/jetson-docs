# First boot

Required time: <Badge type="info" text="15 min" />


## General
Remove unwanted software:

```bash
sudo apt purge libreoffice* -y && sudo apt-get clean -y
```

Update and upgrade:
```bash
sudo apt update && sudo apt upgrade -y
```
- When prompted about updating tegra and config press enter to select the default "N"
- When prompted to restart docker deamon select "yes"

If you need you can remove automatic suspension (optional, but useful in some cases):

```bash
sudo systemctl mask sleep.target suspend.target hibernate.target hybrid-sleep.target
```

## Change display manager
Some jetson has very low RAM to run the expensive default display manager. It is suggested to switch to **lightdm** since is already installed and uses way less memory.

To do that run:
```bash
sudo dpkg-reconfigure gdm3
```
Then you wil be prompted with a selection, select **lightdm** and then **ok**.

## Jetson Stats
You can find the GitHub repo [here](https://github.com/rbonghi/jetson_stats).
![jtop](https://rnext.it/jetson_stats/_images/jtop.gif)
> Simple package for monitoring and control your NVIDIA Jetson


Make sure you have pip:

```bash
sudo apt install python3-pip -y
```

Install jetson_stats with:
```bash
sudo -H pip3 install -U jetson-stats
```
To activate it you need to reboot your system:
```bash
sudo reboot
```
To use Jetson Stats open the terminal and type `jtop`.