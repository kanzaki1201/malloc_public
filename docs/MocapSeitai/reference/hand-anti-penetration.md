# Hand anti-penetration

This section is the contact barrier: it keeps hand targets from sinking into your character's body colliders — the classic "hand disappears into the chest" or "hand pokes through the belly" problem when the actor's arm geometry doesn't match the character's. Before the arm solve runs, any hand target that would end up inside a collider is projected back out to the surface. You'll come here when a hand is clipping through the torso or head, or when a fast gesture makes a hand punch through and snap back visibly.

The barrier works together with [arm anti-penetration](/MocapSeitai/reference/arm-anti-penetration) (which handles the forearm and upper-arm shaft instead of the hand itself) and tests against the same [colliders](/MocapSeitai/reference/colliders) you can see and edit on that page. All the settings below persist per avatar via the map (Save map / Load map in [Load model](/MocapSeitai/reference/loading-your-model)).

::: info
Corrections here run in both Muscle and Offset transfer modes — this section stays active no matter which one you pick in [Smoothing](/MocapSeitai/reference/smoothing).
:::

## Settings

- **Enable** — master switch for the hand contact barrier. Turn it off if you want hands free to pass through the body (default on).
- **Gap** — extra clearance kept from the collider surface, on top of the collider's own radius. Raise it if a hand still looks like it's grazing the body; lower it if hands are stopping too far away from a surface they should be able to touch. (default 0.03, range 0.001–0.05 m)
- **Max release speed** — how fast a hand catches up to its real target once the barrier lets go (e.g. after a fast gesture pulls the hand back out of the body). 0 means the hand snaps back instantly; raise it to ease the hand back in instead of popping. (default 0, range 0–8)
- **Slew (deg/s)** — caps how fast a hand may rotate around a collider surface. This is what limits the visible front/back jump when a hand pokes deep through the body and the barrier has to reposition it on the correct side. Lower it if a deep poke causes a jarring flip; raise it if the hand feels sluggish following the barrier. (default 450, range 0–720)
- **(barrier mask matrix)** — for each hand row, choose which body parts that hand should avoid. Rows are **L hand** and **R hand**; columns are Head, Torso, Legs, L hand, R hand, L forearm, R forearm, L upper arm, R upper arm. Each hand avoids **Head + Torso** by default, and that default is the tested configuration — <!-- VERIFY: any other row/column combination officially supported or recommended, or is Head+Torso the only one that's been tuned/tested? --> add more parts (e.g. the opposite hand, for tight two-hand poses) only if you have a specific clipping problem to solve.

::: tip
If hands are missing the body entirely instead of clipping through it, the problem is more likely spatial alignment than this barrier — check [Hand position alignment](/MocapSeitai/reference/hand-position-alignment) first.
:::

::: warning
If a hand's shaft-level clipping persists even with the barrier holding the hand itself outside the body, that's [arm anti-penetration](/MocapSeitai/reference/arm-anti-penetration)'s job, not this section's — the barrier only pushes the hand target out, it doesn't correct the forearm or upper arm passing through the torso on the way there.
:::

<!-- CAPTURE: side-by-side comparison with Comparison=Ghost, hand reaching across the chest toward the opposite shoulder — show Enable off (hand sinks into torso) vs Enable on (hand stops at the Gap-adjusted surface), a few seconds each -->
*(media pending)*

<!-- CAPTURE: a fast slap/clap gesture that punches a hand deep through the torso collider, recorded once with Slew (deg/s) at a low value (e.g. 60) and once at the default 450, to show the front/back jump difference -->
*(media pending)*
