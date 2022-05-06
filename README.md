# GNOME extension to trigger OSD

GNOME has blocked access to the dbus call for showing OSD, so as a workaround
until an official method for triggering OSD is available this extension can
bridge the gap.

It listens on DBus, and if its function is triggered it passes along the
parameters to the OSD call.

<br>

**Example making a dbus call from bash:**

```bash
gdbus call --session --dest org.gnome.Shell --object-path /codes/merritt/OSDInterface --method codes.merritt.OSDInterface.showOSD 'audio-headphones' 'bash-label' 0.5 1
```

<br>

Link to the GNOME function:

https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/osdWindow.js#L174
