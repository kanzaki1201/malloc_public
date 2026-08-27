# Facial capture

MocapSeitai's correction pipeline changes body motion only. It can forward facial data without correcting it.

## Choose a route

| Body input | Facial capture output | Recommended route |
| --- | --- | --- |
| VMC, mocopi, or Rokoko | Not VMC | Configure facial capture directly in the destination app. For example, use Warudo's facial-capture features in Warudo. |
| mocopi or Rokoko | VMC | Send facial VMC to MocapSeitai's **VMC listen port** and enable **Forward VMC blendshapes**. |
| VMC | VMC | Use one combined VMC stream, or make sure the facial sender outputs facial data only. Two senders that both output body bones can fight. |

## Non-VMC facial capture

If your facial-capture system does not output VMC, configure it in the destination app. It does not need to pass through MocapSeitai.

MocapSeitai sends the corrected body pose. The destination app adds the facial capture.

## VMC facial capture with mocopi or Rokoko

You can route VMC facial capture through MocapSeitai while mocopi or Rokoko supplies the body motion.

1. Select **mocopi** or **Rokoko** as the input mode.
2. Set the facial-capture app to send VMC to MocapSeitai's **VMC listen port**.
3. Enable **Forward VMC blendshapes**.
4. Send MocapSeitai's VMC output to the destination app.

MocapSeitai forwards VMC blendshape values, blendshape apply messages, and left-eye and right-eye bone messages. It drops the VMC head, root, and other body-bone messages. It assumes that the mocopi or Rokoko body stream supplies head tracking.

This filtering prevents a facial app that also sends body bones from replacing MocapSeitai's corrected body pose.

## VMC facial capture with VMC body input

Blendshapes still pass through in VMC input mode. The **Forward VMC blendshapes** control is not available because the VMC listener is already the body input. However, VMC input mode does not isolate facial messages from body messages.

All senders that use the same VMC listen port enter the same input stream. MocapSeitai forwards the blendshapes, but it also accepts root and body-bone messages as body input. If the body sender and facial sender both send body bones, their poses can fight.

Use one of these arrangements:

- Use one VMC stream that already combines body and facial capture.
- Configure the facial sender to output only blendshapes and eye bones.
- Send facial capture directly to the destination app if that app can combine it without overwriting MocapSeitai's corrected body pose.

::: warning Check the facial sender's output
Some facial-capture apps transmit a skeleton even when you only use them for facial tracking. Direct routing to the destination app can still overwrite corrected body motion if the destination accepts those body bones.
:::
