# Known Issues & Solutions {docsify-ignore}

## VRChat fails to launch with errors {docsify-ignore}
<div class="question-box">
   <p>
   <b>Issue:</b><br>
   When launching SteamVR with integrated graphics, VRChat has a 99% chance to crash with error popups.  
   </p>
   <p>
   <b>Solution:</b>  <br>
   None. Not an ExVR-related issue.
   </p> 
</div>

## App crashes when clicking Start Tracking {docsify-ignore}
  [Quick Start Guide Step 2](/zh-cn/guide.md#step-2-extract-files)
<div class="question-box">
  <p>
  <b>Note:</b>  <br>
  If you encounter this issue, verify whether you followed the tutorial.  
  </p>
  <p>
- <b>Solution:</b>  <br>
  Ensure the extraction path contains **no Chinese characters**
  </p>
</div>

---  
## Facial Tracking FAQs {docsify-ignore}
<div class="question-box">
   <b style="color: red;">·Check model parameter loading (port conflicts)</b><br>
   <p>
   If __VRChat, ExVR, VRCFT__ are running normally but parameters remain "loading": Close VPN/accelerators → Wait for parameters to load → Re-enable VPN → Relaunch VRChat.</p>
   <b style="color: red;">·Model compatibility</b><br>
   <p>
   Ensure VRCFT shows >10 parameters. Fewer indicates unsupported facial tracking.</p>
   <b style="color: red;">·Model has tracking but expressions are frozen</b><br>
         <p>
   Confirm ExVR, VRChat, and VRCFT are functioning properly.<br> 
   </p>
   <p>
   See [Gesture/Expression Issues](#gesture-expression)
   </p>
   <b style="color: red;">·Non-facial tracking model with frozen expressions</b><br>
   See [Gesture/Expression Issues](#gesture-expression)
</div>

---  
# Lenovo Legion Performance Issues {docsify-ignore}
## Hybrid GPU Mode {docsify-ignore}
<div class="question-box">
<b style="color: green;">Hybrid GPU mode enabled</b>

- **Issue**  
  Maximizing game window causes abnormal CPU usage + 0.5s tracking delay.  

 **Workarounds**  
  1. Play in windowed mode (non-maximized).  
  2. Enable dedicated GPU mode (causes other issues).  
  3. Lower process priority (delay remains).
</div>
<div class="question-box">
<b style="color: green;">Dedicated GPU mode enabled</b>

- **Issue**  
  Camera frame capture stutters during tracking.  

- **Workarounds**  
  1. Enable hybrid mode (triggers previous issue).  
  Note: Caused by Lenovo's power management. No permanent fix currently.
</div>

---  
# Common Issues {docsify-ignore}
## R-Menu Not Visible {docsify-ignore}
<div class="question-box">
<ul>
 <li>Launch VRChat in VR mode. Raise your hand to ensure R-Menu visibility.</li>
 <li>In R-Menu settings: Enable radial menu and HUD display.</li>
 </ul>
</div>

## Calibration Issues {docsify-ignore}
<div class="question-box">
<ul>
<li>
 <b>Head Calibration</b><br>  
   Face forward and press `Ctrl + '`.
</li>
<li><b>Hand Calibration</b><br>  
   Place hand palm-forward at head's right side → Press `Ctrl + ]`. Adjust x/y/z parameters for positioning.
</li>
<li><b>Eye Calibration</b><br> 
   Look straight ahead → Press `Ctrl + ;` (squint slightly if eyes won't close). 
   </li>
</div>

## In-Game Movement Issues {docsify-ignore}
<div class="question-box">
If movement is blocked: Press `ESC` once in-game.
</div>

## Driver Issues {docsify-ignore}
<div class="question-box">
Only head tracking works (no hands)
</div>

### Solutions {docsify-ignore}
<div class="question-box">
<ol>
<li>
   Close SteamVR/VRChat → Reinstall drivers via ExVR (__Uninstall Driver__ → __Install Driver__) → Relaunch SteamVR.
   </li>
   <li>
   Reboot PC and reinstall drivers.
   </li>
</ol>
</div>

---  
# ExVR Hotkeys Unresponsive {docsify-ignore}
## Scenario {docsify-ignore}
<div class="question-box">
Hotkeys work in ExVR window but not in-game.
</div>

## Solutions {docsify-ignore}
<div class="question-box">
<ul>
<li>Run ExVR as Administrator.  </li>
<li>Bring ExVR window to foreground and check terminal output.</li>  
<li> Restart ExVR with other apps closed. </li>   
<li> Close QQ/WeChat and retry. </li>  
</ul>
</div>

  Reference: [Hotkey List](/en/hotkey.md#Keybind-Settings)
 
# Gesture/Expression Issues {docsify-ignore}

<h2 id="gesture-expression">Gesture & Expression Problems</h2>

## Issue: {docsify-ignore}
<div class="question-box">
 - Model remains in closed-eye state or fixed gesture (both tracking/non-tracking avatars)
 </div>

## Solutions: {docsify-ignore}
<div class="question-box">
<ol>
<li><b>Tracking-enabled avatars</b><br>Disable gesture control via R-Menu model settings.</li>
<li><b>Non-tracking avatars</b><br>In R-Menu: Options → Avatar → Disable "Gestures" → Use `Shift+F1` to reset expressions.</li>
 </ol>
 </div>

---  
# VRChat Launch Mode Issues {docsify-ignore}

## Can not Disable VR Mode {docsify-ignore}
<div class="question-box">
- If VRChat remains in PC mode after ExVR launch:<br>
In Steam: VRChat Properties → Launch Options → "SteamVR"<br>
Note: VR mode doesn't require physical headset when using ExVR.
</div>

## Failed VR Mode Activation {docsify-ignore}
<div class="question-box">
To force VR mode:<br>
Steam → VRChat Properties → Set launch option to "SteamVR".
</div>