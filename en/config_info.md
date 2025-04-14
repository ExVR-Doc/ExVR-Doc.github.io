# Configuration {docsify-ignore}

## config.json {docsify-ignore}

The `config.json` file, located in the local root directory (`./settings`), modifies user configuration parameters including camera, IP settings, smoothing, and tracking parameters.

### General Settings {docsify-ignore}

| Parameter     | Description                                  |
|---------------|---------------------------------------------|
| Camera        | Specifies the input camera index            |
| IP            | Defines the IP address for connection setup |
| Smoothing     | `Enable` / `Disable` smooth movement        |

### Tracking Settings {docsify-ignore}

| **Category**  | **Parameter**                     | **Description**              |                                                                
|----------------|------------------------------------|------------------------------------------------------------|
| **Head**       | enable                            | Activate head tracking (`true` / `false`)                  |
|                | x_scalar, y_scalar, z_scalar       | Adjust sensitivity for head position on each axis          |         
|                | x_rotation_scalar, y_rotation_scalar, z_rotation_scalar | Adjust sensitivity for head rotation |
| **Face**       | enable                            | Enable facial capture                                     |
| **Tongue**     | enable                            | Enable tongue motion capture                              |
|                | tougue_confidence                 | Confidence threshold for tongue detection                 |
|                | tongue_threshold                  | Threshold for recognizing tongue movement                 |
|                | tongue_x_scalar, tongue_y_scalar  | Adjust sensitivity for tongue motion                      |
| **Mouth**      | enable                            | Enable mouth motion capture                               |
|                | mouth_close_threshold             | Threshold for mouth closure detection                     |
| **Hand**       | enable                            | Enable hand tracking (`true` / `false`)                   |
|                | x_scalar, y_scalar, z_scalar       | Adjust sensitivity for hand position on each axis         |
|                | hand_confidence                   | Confidence threshold for hand detection                   |
|                | enable_hand_auto_reset            | Auto-reset hand position (`true` / `false`)               |
|                | hand_detection_upper_threshold    | Upper threshold for hand detection                        |
|                | hand_detection_lower_threshold    | Lower threshold for hand detection                        |
|                | hand_count_threshold              | Hand count threshold                                       |
|                | only_front                        | Restrict hand movement to front-facing only               |
| **Finger**     | enable                            | Enable finger tracking (`true` / `false`)                 |
|                | finger_confidence                 | Minimum confidence for finger detection                   |
|                | finger_threshold                  | Threshold for finger state (open/closed)                  |

### Model Settings {docsify-ignore}

| **Module**     | **Parameter**                     | **Description**              |                                                          
|----------------|-----------------------------------|-------------------------------|
| **Face Model** | min_face_detection_confidence    | Minimum confidence for face detection      |
|                | min_face_presence_confidence     | Minimum confidence for face presence       |
|                | min_tracking_confidence          | Minimum confidence to maintain face tracking |
| **Hand Model** | min_hand_detection_confidence    | Minimum confidence for hand detection      |
|                | min_hand_presence_confidence     | Minimum confidence for hand presence       |
|                | min_tracking_confidence          | Minimum confidence to maintain hand tracking |  

## data.json {docsify-ignore}

The `data.json` file, located in the root directory (`./settings`), contains initial settings for the virtual experience, including positions, rotations, and blendshapes.

- **Position**: Defines 3D coordinates for the head
- **Rotation**: Defines rotational angles around each axis for the head
- **BlendShapes**: Contains facial expression parameters
- **LeftHandPosition** / **RightHandPosition**: Define positions for left/right hands
- **LeftHandRotation** / **RightHandRotation**: Define rotations for left/right hands
- **LeftHandFinger** / **RightHandFinger**: Control individual finger movements

Each entry includes:
- **k**: Key (property name)
- **v**: Default value
- **s**: Value adjustment offset
- **e**: Enable flag (`true` / `false`) to activate/deactivate the setting

## smoothing.json {docsify-ignore}

The `smoothing.json` file, located in the root directory (`./settings`), configures smoothing for movements and blendshapes.

- **OtherBlendShapes**: Smooth general facial blendshapes
- **EyeBlink**: Smooth eyelid movements
- **EyeLook**: Smooth eye movements
- **TongueOut**: Smooth tongue protrusion
- **TongueMove**: Smooth lateral tongue movements
- **HeadPosition**: Smooth head positional movements
- **HeadRotation**: Smooth head rotational movements
- **LeftHandPosition** / **RightHandPosition**: Smooth hand positions
- **LeftHandRotation** / **RightHandRotation**: Smooth hand rotations
- **LeftHandFinger** / **RightHandFinger**: Smooth finger movements

Avoid modifying these parameters unless developing custom extensions:
- **key**: Property identifier
- **is_rotation**: Indicates if the property is rotational
- **indices**: Data indices
- **shifting**: Index offsets

Adjustable parameters for better experience:
- **max_delta**: Maximum allowed change per frame. Higher values increase responsiveness but may cause jitter
- **deadzone**: Ignore minor movements within this range. Larger values reduce jitter but may decrease fluidity
- **dt_multiplier**: Smoothing factor. Lower values create smoother motion but reduce responsiveness

## hotkeys.json {docsify-ignore}

The `hotkeys.json` file, located in the root directory (`./settings`), defines all available [keyboard and mouse shortcuts](/en/hotkey.md#Keybind-Settings). Modify this file to customize shortcuts.