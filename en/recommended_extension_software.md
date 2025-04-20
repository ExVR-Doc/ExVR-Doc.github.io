# Software Reference for Low-Cost VR Implementation with EXVR-based Extended Features {docsify-ignore}
<font color=red>Please cite referenced projects as appropriate</font>

## Software {docsify-ignore}
### Introduction {docsify-ignore}
This document utilizes open-source repositories from GitHub:
- [Video Pipeline Full Body Tracking](https://github.com/ju1ce/Mediapipe-VR-Fullbody-Tracking)

- [owoTracker](https://github.com/abb128/owo-track-driver)

- [VRCFaceTracking](https://github.com/benaclejames/VRCFaceTracking)

- [DroidCam](https://www.dev47apps.com)

### Video Pipeline Full Body Tracking {docsify-ignore}
> https://github.com/ju1ce/Mediapipe-VR-Fullbody-Tracking  
This software enables full-body tracking by virtualizing three Trackers for feet and waist.  
In this implementation, it serves as waist (replaceable) and foot trackers.  
If using owoTracker concurrently, follow tutorials to disable waist tracking.

### VRCFaceTracking {docsify-ignore}
> https://github.com/benaclejames/VRCFaceTracking  
The official facial capture plugin supports multiple models for facial tracking.  
Used in this implementation for facial capture functionality.

### owoTracker {docsify-ignore}
> https://github.com/abb128/owo-track-driver  
Utilizes an owoTracker-compatible smartphone as positioning tracker, replacing waist choker with higher precision than video pipeline tracking.  
Serves as an optimization method for tracking accuracy.

### Smartphone as Webcam (DroidCam) {docsify-ignore}
DroidCam enables LAN connection between smartphone and PC to utilize dual smartphone cameras.

## Hardware Recommendations {docsify-ignore}
- Use two cameras (any type) for upper/lower body capture respectively, feeding video streams to EXVR and Mediapipe-VR-Fullbody-Tracking
- Single-camera setup remains feasible but requires full-body coverage while maintaining clear EXVR tracking video and operational VR gameplay - which presents challenges