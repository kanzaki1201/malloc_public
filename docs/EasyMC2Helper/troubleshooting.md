# Troubleshooting

## Console errors right after import

```text
Assembly 'EasyMC2Helper' has a reference to non-existent assembly 'MagicaClothV2'
```

MagicaCloth 2 isn't in the project (or was imported after deleting its assembly definitions). The helper's assemblies reference `MagicaClothV2` / `MagicaClothV2.Editor`, which ship with MagicaCloth 2. Import MagicaCloth 2 at `Assets/MagicaCloth2` and the errors clear on their own.

## "The selected object does not contain a humanoid Animator"

The assigned character has no Animator, or its rig isn't set to Humanoid. Collider generation, **Humanoid Bones**, and symmetry mirroring rely on Unity's humanoid bone mapping:

1. Select the model file, **Rig** tab, set **Animation Type** to **Humanoid**, Apply.
2. Make sure the Animator component sits on (or under) the object you assigned.

Generic rigs can still use the collider list editor, cloth assignment buttons, and binding maps.

## Create / Update Humanoid Colliders does nothing to my tweaked colliders

**Overwrite Existing** is off — that's the mode for adding missing colliders without touching your manual adjustments. Turn it on to regenerate everything `MC2H_`-prefixed from the current settings.

## Copy To Symmetry can't find the other side

The mirror search uses humanoid bones first, then Left/Right name patterns (`Left`/`Right`, `_L_`/`_R_`, `.L`/`.R`, `-L-`/`-R-`). If the collider's parent bone is neither a mapped humanoid bone nor side-named, there is nothing to mirror onto — parent the collider under a humanoid bone or rename the bone pair to a recognized pattern.

## Binding rows show Fallback / Ambiguous / Missing

The captured path no longer exists on the character — usually after renaming or restructuring the hierarchy.

- **Fallback**: a unique object with the same name was found and used. Verify it's the right one, then **Capture Map** to store the new path.
- **Ambiguous**: several objects share the captured name; the tool won't guess. Fix the duplicates (or restructure), then re-capture.
- **Missing**: nothing matches. **Restore Map** re-creates the object at the captured path, including empty holder objects for cloth components.

## Cloth behaves like before after changing settings

Prebuild data is stale. With prebuild enabled, MagicaCloth plays the prebuilt state, not your edited settings. Recreate it on the **Prebuild** tab (**Create**, or the bulk button), or disable prebuild while iterating.

## Which MagicaCloth 2 versions work?

Built and tested against recent MagicaCloth 2 releases on Unity 2021.3+. If Magica Soft changes their API and something breaks, [report it](https://github.com/kanzaki1201/malloc_public/issues) with your MagicaCloth 2 and Unity versions.
