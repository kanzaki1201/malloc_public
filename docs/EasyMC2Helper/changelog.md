# Changelog

## 1.0.0

Initial release.

### Added

- Editor window (`Tools > Easy MC2 Helper`) with Overview, Bindings, Colliders, Cloth, and Prebuild tabs.
- Humanoid collider auto-generation: per-body-part sphere/capsule shapes, radius/length multipliers, minimum radius, optional finger colliders, overwrite toggle.
- Collider batch editor: active state, local transform, size sliders, capsule direction/separate radii/reverse/aligned-center, symmetry mode and target.
- Copy-to-symmetry: mirrors collider values to the opposite body side, creating the target collider when missing.
- Cloth component tools: bulk assign renderers, humanoid root bones, selected bones, and colliders.
- Prebuild management: per-component enable toggle, prebuild data creation, build ID and asset display.
- Binding maps: capture cloth components, colliders, references, reduction settings, selection data, simulation parameters (MagicaCloth preset scope), and prebuild state into an asset; restore recreates missing objects, repairs broken references by relative path with name-based fallback, and applies the saved parameters.
