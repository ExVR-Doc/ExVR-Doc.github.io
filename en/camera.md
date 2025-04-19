# Using Camera {docsify-ignore}
## Using Local Camera {docsify-ignore}
The built-in local camera is the default option in EXVR. Issues to be collected;

## Using External Camera {docsify-ignore}
### Software Recommendations {docsify-ignore}

<b><font color=red>Please select appropriate webcam plugins (both PC server-side and mobile client-side) for your environment. This is only a recommendation - please refer to each software's documentation and adjust according to your specific environment.</font></b>
<br>
<font color=red>These software solutions support front/rear camera switching - please check their respective documentation.</font>

- [DroidCam](https://www.dev47apps.com) <br>
- [Iriun](https://iriun.com)<br>

### Connection Configuration {docsify-ignore}
Proceed with the following steps after completing the network camera software configuration and verifying that video images from your mobile camera are successfully transmitted to the computer.

<img src="/zh-cn/images/Camera.png" style="width: 100%; max-width: 100%; height: auto;"><br>
- First select your network camera from the dropdown list shown in the image above
- If the network camera doesn't appear, try restarting EXVR
- If the issue persists, you can try entering the network camera's URL directly into the input field

Do not enter camera URLs when using the dropdown selection<br>
The underlying logic is as follows:

```python
    source = (
                ip_camera_url
                if ip_camera_url != ""
                else self.get_camera_source(selected_camera_name)
            )