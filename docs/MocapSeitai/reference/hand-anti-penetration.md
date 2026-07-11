# Hand anti-penetration

Keeps hand targets from sinking into body colliders. Before the arm solve runs, any hand target inside a collider is projected back out to the surface.

Works together with [arm anti-penetration](/MocapSeitai/reference/arm-anti-penetration) (which handles the forearm and upper-arm shaft) and tests against the same [colliders](/MocapSeitai/reference/colliders). All settings persist per avatar via the map.

Runs in both Muscle and Offset transfer modes.

## Settings

- **Enable** master switch for the hand contact barrier. (default on)
- **Gap** extra clearance from the collider surface, on top of the collider's own radius. Raise if a hand still grazes the body; lower if hands stop too far away. (default 0.03, range 0.001 to 0.05 m)
- **Max release speed** how fast a hand catches up to its real target once the barrier lets go. 0 = instant snap. Raise to ease the hand back instead of popping. (default 0, range 0 to 8)
- **Slew (deg/s)** caps how fast a hand may rotate around a collider surface. Limits the visible front/back jump when a hand pokes deep through the body. Lower if a deep poke causes a jarring flip; raise if the hand feels sluggish. (default 450, range 0 to 720)
- **(barrier mask matrix)** for each hand row, choose which body parts that hand avoids. Rows: L hand, R hand. Columns: Head, Torso, Legs, L hand, R hand, L forearm, R forearm, L upper arm, R upper arm. Default: each hand avoids **Head + Torso**. <!-- VERIFY: any other row/column combination officially supported or recommended? --> Add more parts only for a specific clipping problem.

::: tip
If hands are missing the body entirely instead of clipping, the problem is likely spatial alignment. Check [Hand position alignment](/MocapSeitai/reference/hand-position-alignment) first.
:::

::: warning
If the forearm or upper arm still clips even with the hand held outside the body, that's [arm anti-penetration](/MocapSeitai/reference/arm-anti-penetration)'s job. This section only pushes the hand target out.
:::

<!-- CAPTURE: side-by-side comparison with Comparison=Ghost, hand reaching across the chest toward the opposite shoulder — show Enable off (hand sinks into torso) vs Enable on (hand stops at the Gap-adjusted surface), a few seconds each -->
*(media pending)*

<!-- CAPTURE: a fast slap/clap gesture that punches a hand deep through the torso collider, recorded once with Slew (deg/s) at a low value (e.g. 60) and once at the default 450, to show the front/back jump difference -->
*(media pending)*
