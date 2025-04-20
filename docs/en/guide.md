# Quick Start Guide {docsify-ignore}

## Step 1: Prerequisites {docsify-ignore}
- 1. Install SteamVR via Steam
- 2. Download software packages
  - ### Method 1
  - Visit the GitHub release page to download the latest __ExVR.zip__ and __VRCFaceTracking_5.2.3.0_x64.zip__  
  - Repository link: <font color=#FF0000>[ExVR GitHub Repository](https://github.com/xiaofeiyu0723/ExVR)</font>
  - ### Method 2
  - Download from QQ group files: <font color=#FF0000>[Group 1](https://qm.qq.com/q/U5hbplyBUW) [Group 2](https://qm.qq.com/q/tktl9IDwWc)</font>

## Step 2: Extract Files {docsify-ignore}
- Use any extraction software. **Ensure all extracted paths contain no Chinese characters**.

## Step 3: Run the Application {docsify-ignore}
- Navigate to the extracted ExVR directory and run **main.exe**:
<br><img src="/zh-cn/images/info.png" style="width: 90%; max-width: 50%; height: auto;">
  - Click <font color=blue>__Install Drivers__</font> to install required drivers.
  - ### For Built-in Webcam
  - Select your camera from the dropdown.
  - ### For External Webcam
  - Use third-party tools (e.g., OBS Virtual Camera) to create a virtual webcam and input its URL into the **network camera field**.
     [Use Camera](/en/camera.md)

- Click <font color=green>__Start Tracking__</font> to begin tracking.
- After starting tracking, click **Show Frame** to view the camera feed.
- Check <font color=red>[__Hotkey List__](/en/hotkey.md#Keybind-Settings)</font>

## Step 4: Configure Face Tracking (Install drivers first) {docsify-ignore}
- Run **VRCFaceTracking.exe** from the extracted __VRCFaceTracking_5.2.3.0_x64.zip__.
- If "No Modules Installed" appears, reinstall drivers.  
*(Note: Face tracking is optional. Hand/head tracking works without this step)*

## Step 5: Launch VRChat via SteamVR {docsify-ignore}
- Open Steam → Launch VRChat → Select **Launch VRChat in SteamVR mode**.
- If VRChat starts in desktop mode:
  - Right-click VRChat in Steam Library → Properties → Launch Options → Choose "Ask when starting" or "SteamVR"
  - Optimize settings using [__Gesture Guide__](/en/gestura.md#How-to-Use-Gestures-and-Shortcuts-Properly)
  - Additional mobile controller support: [__Mobile Controller Guide__](/en/fakehand.md#Mobile-Controller-Usage-Guide)