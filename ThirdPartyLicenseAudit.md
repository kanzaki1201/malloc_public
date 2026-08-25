# MocapSeitai Third-Party License Audit

Date: 2026-08-24
Target: MocapSeitai Windows application on the `dev` release line

## Conclusion

MocapSeitai requires a customer-facing third-party notice. The current notice is not release-ready. It omits required notices for shipped libraries, abbreviates the Apache License instead of providing a copy, and does not account for several Unity package notices and embedded font resources.

The available `0.11.0-beta` player is stale and is not proof of the current release contents. It contains development-tool assemblies that should not be in a customer build, while it does not contain some commercial runtime dependencies that the current source references. A fresh release build and a final binary inventory are release gates.

This is a technical compliance audit, not legal advice.

## Audit basis

The audit used package manifests, package locks, embedded license and notice files, source headers, Unity Asset Store metadata, and a binary inventory of the existing player. It distinguishes source-tree presence from actual player inclusion.

Key version and packaging evidence:

- The project uses Unity `6000.3.14f1`: `C:\Users\win11\Projects\vmc-seitai\ProjectSettings\ProjectVersion.txt:1-2`.
- Direct dependencies are declared in `C:\Users\win11\Projects\vmc-seitai\Packages\manifest.json:3-20`.
- The release script copies the player, README, and the root notice into the archive: `C:\Users\win11\Projects\vmc-seitai\tools\build-beta.ps1:57-75`.
- The first-party mocap package is `com.malloc.mocap-core` version `3.1.0`: `C:\Users\win11\Projects\unity-mocap-abstraction-layer\com.malloc.mocap-core\package.json:2-7`.
- MallocUtils is Editor-only and is not a player dependency: `C:\Users\win11\MallocUtils\Assets\MallocUtils\Editor\MallocUtils.Editor.asmdef:2-12`.

## Required baseline notices

These components are used by current runtime code or were present in the available player. Their notices should be in the final customer file when the fresh release inventory confirms their inclusion.

| Component | Version and shipped path | License and notice duty | Evidence |
| --- | --- | --- | --- |
| Sony mocopi Receiver Plugin | Unity package `1.1.0`; native serializer reports `1.3.0.0`; `Assets/MocopiReceiver` and `mocopi_motion_serializer.dll` | Apache-2.0. Give recipients a complete copy of the Apache License 2.0 and retain Sony copyright and modification notices. The current short excerpt is not the full license. | Package version: `C:\Users\win11\Projects\vmc-seitai\Assets\MocopiReceiver\package.json:2-6`. Sony header and modification notice: `C:\Users\win11\Projects\vmc-seitai\Assets\MocopiReceiver\Runtime\MocopiAvatarBase.cs:2-17`. Official upstream and license: [Sony mocopi Receiver Plugin](https://github.com/sony/mocopi-receiver-plugin-unity), [Apache-2.0 license](https://github.com/sony/mocopi-receiver-plugin-unity/blob/main/LICENSE). |
| uOSC | `com.hecomi.uosc` `1.0.0`; `Assets/uOSC` and `uOSC.Runtime.dll` | MIT. Retain the copyright and complete MIT permission/disclaimer text. The vendored directory has no license file, so verify the copyright against the exact vendored revision before release. | `C:\Users\win11\Projects\vmc-seitai\Assets\uOSC\package.json:2-4`, `:10-19`; runtime use: `C:\Users\win11\Projects\vmc-seitai\Assets\VmcSeitai\Runtime\UoscVmcTransport.cs:4-8`. Official upstream: [hecomi/uOSC](https://github.com/hecomi/uOSC). |
| UniGLTF | tag `v0.131.1`; `UniGLTF.dll` | MIT. Retain copyright `2018 ousttrue` and the MIT text. | Manifest: `C:\Users\win11\Projects\vmc-seitai\Packages\manifest.json:17`; license: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.vrmc.gltf@9b429991350e\LICENSE.md:1-13`. |
| UniVRM and VRM 1.0 | tag `v0.131.1`; `VRM.dll`, `VRM10.dll`, `UniHumanoid.dll`, related runtime DLLs | MIT. Retain copyright `2020 VRM Consortium` and the MIT text. | Manifest: `C:\Users\win11\Projects\vmc-seitai\Packages\manifest.json:18-19`; license: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.vrmc.univrm@b8dffc13efae\LICENSE.md:1-9`; runtime use: `C:\Users\win11\Projects\vmc-seitai\Assets\VmcSeitai\Runtime\AvatarLoader.cs:8`. |
| MToon | bundled with UniVRM `v0.131.1`; `MToon.dll` | MIT. Retain copyright `2018 Masataka SUMI` and the MIT text. | `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.vrmc.univrm@b8dffc13efae\MToon\LICENSE:1-13`. |
| LZ4 native library | Version unresolved; `Assets/Rokoko/Scripts/Plugins/LZ4/x86_64/lz4.dll` and player `lz4.dll` | BSD-2-Clause. Binary distribution must reproduce the copyright, conditions, and disclaimer. Record the DLL hash and determine its exact upstream version. | Runtime wrapper: `C:\Users\win11\Projects\vmc-seitai\Assets\Rokoko\Scripts\Core\LZ4Wrapper.cs:6-26`; plugin metadata: `C:\Users\win11\Projects\vmc-seitai\Assets\Rokoko\Scripts\Plugins\LZ4\x86_64\lz4.dll.meta:5-20`, `:29-32`. Official license: [LZ4 library license](https://github.com/lz4/lz4/blob/dev/lib/LICENSE). |
| Unity Universal Render Pipeline | `17.3.0`; URP runtime assemblies | The package's NVIDIA FXAA notice requires reproduction with binary distributions. Append the package notice verbatim when URP is shipped. | Version: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.render-pipelines.universal@3b809f23691d\package.json:2-10`; notice: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.render-pipelines.universal@3b809f23691d\Third Party Notices.md:1-19`. |
| Unity Scriptable Render Pipeline Core | `17.3.0`; SRP Core runtime assemblies | Contains RadeonRays 4.1 (MIT), Bullet Physics (zlib), and Sobol sequence code (MIT). Append the package notice verbatim when SRP Core is shipped. | Version and dependencies: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.render-pipelines.core@02dfbe8e43de\package.json:2-14`; notice entries: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.render-pipelines.core@02dfbe8e43de\THIRD PARTY NOTICES.md:4-59`. |
| Unity Burst | `1.8.29`; `Unity.Burst.dll` and Burst native output | Contains LLVM, Mono.Cecil, xxHash, musl, SLEEF, gRPC, protobuf, mimalloc, and other components with notice duties. Append Unity's complete package notice verbatim when Burst is shipped; do not reduce it to selected entries. | Version: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.burst@6bb9aca3ef38\package.json:2-6`; package declaration and notices: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.burst@6bb9aca3ef38\Third Party Notices.md:1-10`, `:26-60`, `:71-140`, `:180-213`, `:413-466`. |
| Unity.Mathematics noise code | `1.3.3`; Unity.Mathematics runtime assembly | MIT. Retain the Ashima Arts and Stefan Gustavson copyright and MIT text if the noise implementation is included in the shipped assembly. | `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.mathematics@19a9377c4ffa\Unity.Mathematics\Noise\LICENSE:1-12`. |

The three UniVRM-family MIT components may share one copy of the common MIT text if all copyright lines and component names remain clear. Package-authored Unity notice files should be copied in full because selective rewriting is easy to get wrong.

## Commercial Unity Asset Store dependencies

These paid assets are current runtime dependencies. Their redistribution is governed by the Unity Asset Store EULA, not by an open-source attribution license. No separate customer-facing attribution requirement was found in the local metadata or the standard EULA. Do not paste the Asset Store EULA into `THIRD-PARTY-NOTICES.md`. Keep purchase and seat records internally, and distribute these assets only embedded in the application, never as reusable source or raw package content.

| Asset | Vendored version | Runtime evidence | License evidence |
| --- | --- | --- | --- |
| Rokoko Live | `2.1.3` | `C:\Users\win11\Projects\vmc-seitai\Assets\VmcSeitai\Runtime\RokokoInput.cs:5-6`; app assembly reference: `C:\Users\win11\Projects\vmc-seitai\Assets\VmcSeitai\VmcSeitai.asmdef:4-15` | Store product ID `98045`, version `2.1.3`: `C:\Users\win11\Projects\vmc-seitai\Assets\Rokoko\Scripts\RokokoAssembly.asmdef.meta:8-14`. The separate LZ4 notice still applies. |
| Final IK | `2.5` | `C:\Users\win11\Projects\vmc-seitai\Assets\VmcSeitai\Runtime\VrikArmDriver.cs:3-10` | Store product ID `14290`, version `2.5`: `C:\Users\win11\Projects\vmc-seitai\Assets\Plugins\RootMotion\FinalIK\IK Solvers\IKSolverVR.cs.meta:4`, `:13-18`. |
| PuppetMaster | `1.5` | Standalone define enables `SEITAI_PUPPETMASTER`: `C:\Users\win11\Projects\vmc-seitai\ProjectSettings\ProjectSettings.asset:836-837`; constrained runtime assembly: `C:\Users\win11\Projects\unity-mocap-abstraction-layer\com.malloc.mocap-core\Scripts\GuideRig\AbstractionLayer.GuideRig.asmdef:2-15`; source dependency: `C:\Users\win11\Projects\unity-mocap-abstraction-layer\com.malloc.mocap-core\Scripts\GuideRig\SeitaiPuppetGuide.cs:4-14` | Store product ID `48977`, version `1.5`: `C:\Users\win11\Projects\vmc-seitai\Assets\Plugins\RootMotion\PuppetMaster\Scripts\PuppetMaster.cs.meta:18-20`. |
| RASCAL Skinned Mesh Collider | `1.4` | `C:\Users\win11\Projects\vmc-seitai\Assets\VmcSeitai\Runtime\SeitaiMeshSurface.cs:5`, `:19`, `:137-140` | `licenseType: Store`, product ID `134833`, version `1.4`: `C:\Users\win11\Projects\vmc-seitai\Assets\RASCAL\RASCALSkinnedMeshCollider.cs.meta:4`, `:13-18`. |

Primary terms: [Unity Asset Store Terms of Service and EULA](https://unity.com/legal/as-terms), especially Appendix 1 section 2.2.1. Confirm that each local asset is a non-restricted asset and that the owner has enough seats for all users who accessed its source.

Magica Cloth 2 under MallocUtils is not an app dependency: it is a paid, locally installed Editor asset and must not be redistributed. MallocUtils' project instructions also identify it as paid and gitignored: `C:\Users\win11\MallocUtils\CLAUDE.md:12`.

## Conditional notices and development dependencies

The existing `0.11.0-beta` player unexpectedly contains `MCPForUnity.Runtime.dll`, `Unity.Pipeline.dll`, `Microsoft.CodeAnalysis.dll`, `Microsoft.CodeAnalysis.CSharp.dll`, `Newtonsoft.Json.dll`, and `IngameDebugConsole.Runtime.dll`. These appear to be development-tool contamination, not product features. Remove them from the release build. If any remain, their exact licenses and complete dependency notices become customer-facing obligations.

| Component | Resolved version | Classification and action | Evidence |
| --- | --- | --- | --- |
| MCP for Unity | Cache reports `10.0.0`; manifest follows unpinned `#main` | Editor/development integration. Remove its runtime assembly from the player. If retained, include the MIT notice and pin an exact commit/version. | Manifest: `C:\Users\win11\Projects\vmc-seitai\Packages\manifest.json:3`; cached version: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.coplaydev.unity-mcp@4ee62b097584\package.json:2-8`, `:17-18`. Official [MIT license](https://github.com/CoplayDev/unity-mcp/blob/main/LICENSE). |
| Unity Pipeline | `0.3.1-exp.1` | Development command pipeline that can connect to the Editor or a running game. Remove it and its runtime dependencies from the player. Its package license is the Unity Package Distribution License. | Manifest: `C:\Users\win11\Projects\vmc-seitai\Packages\manifest.json:13`; description and dependencies: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.pipeline@58c16695e488\package.json:4-18`; license: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.pipeline@58c16695e488\LICENSE.md:1-5`. |
| Microsoft.CodeAnalysis and CSharp | Player DLL file version `3.11.0` | Transitive development dependency of Unity Pipeline. Remove. If retained, recover the license/notice from the exact Microsoft.CodeAnalysis `3.11.0` package; the Unity package cache does not provide it, so compliance is unresolved. | Pipeline dependency chain: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.pipeline@58c16695e488\package.json`; player inventory under `C:\Users\win11\Projects\vmc-seitai\Builds\MocapSeitai_0.11.0-beta\MocapSeitai_Data\Managed`. |
| Newtonsoft.Json for Unity | Resolved `3.2.2` in the stale player dependency chain | Remove if it is used only by development tools. If retained, append the complete package notice, including Unity fork notices. | Notice: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.nuget.newtonsoft-json@4dfd81071c64\Third Party Notices.md:1-16`, `:20-75`. |
| Ingame Debug Console | `1.8.8`; manifest source is an unpinned Git repository | Development/debug UI. Remove from a production player unless it is an intentional product feature. If retained, include its MIT notice and pin the dependency. | Package: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.yasirkula.ingamedebugconsole@d6cd6cef038c\package.json:2-13`; license: `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.yasirkula.ingamedebugconsole@d6cd6cef038c\LICENSE.txt:1-20`; manifest: `C:\Users\win11\Projects\vmc-seitai\Packages\manifest.json:20`. |
| Unity AI Assistant | `2.17.0-pre.1` | Editor-only assistant. No customer notice if absent from the player. | `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.ai.assistant@284c75a8d208\package.json:2-7`; manifest: `C:\Users\win11\Projects\vmc-seitai\Packages\manifest.json:6`. |
| Unity Inference Engine/Sentis | `2.6.1` | Runtime-capable package, but its assembly was not found in the stale player. If a fresh player includes it, append its complete package third-party notice, including ONNX, protobuf, and MSAGL entries. | Manifest: `C:\Users\win11\Projects\vmc-seitai\Packages\manifest.json:7`; cached package notice under `C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.ai.inference@9a123aee5df7\Third Party Notices.md:4-78`. |
| Unity FBX Exporter | `5.1.2` | Editor/export tooling. It was not found in the stale player; no customer notice if it remains absent. | Manifest: `C:\Users\win11\Projects\vmc-seitai\Packages\manifest.json:9`; MallocUtils Editor-only boundary: `C:\Users\win11\MallocUtils\Assets\MallocUtils\Editor\MallocUtils.Editor.asmdef:2-12`. |
| IDE integrations and Unity Test Framework | Versions from the final lock | Editor/test only. No customer notice when absent from the player. | Manifest: `C:\Users\win11\Projects\vmc-seitai\Packages\manifest.json:10-15`. |

## Embedded fonts and sprites

The stale player's `resources.assets` contains TextMesh Pro Essential Resources even though no product use of TMPro was found. This creates avoidable obligations and one unresolved asset:

- Liberation Sans SDF is derived from Liberation Sans under SIL Open Font License 1.1. The license requires the copyright and license to accompany copies. Source notice: `C:\Users\win11\Projects\vmc-seitai\Assets\TextMesh Pro\Fonts\LiberationSans - OFL.txt:1-6`, `:16-34`.
- TMP Settings names the default font and sprite resources: `C:\Users\win11\Projects\vmc-seitai\Assets\TextMesh Pro\Resources\TMP Settings.asset:27`, `:39`.
- The embedded EmojiOne sprite atlas has no accompanying source attribution/license file in this project. Its exact source version and license are unresolved.
- The stale resource archive also contains the font name `Perfect DOS VGA 437`; no corresponding source or license was located.

Preferred action: remove the unused `Assets/TextMesh Pro` Essential Resources from the release project. If they remain, include the complete Liberation Sans OFL file, restore and verify the EmojiOne attribution/license from the exact original TMP resource package, and identify the source/license for `Perfect DOS VGA 437`. Do not release with the last two items unresolved.

## Problems in the current notice

Current file: `C:\Users\win11\Projects\vmc-seitai\THIRD-PARTY-NOTICES.md`.

1. The mocopi entry gives only an abbreviated license statement (`:8-33`) and an outdated copyright line (`:10`) compared with current Sony source headers (`Assets/MocopiReceiver/Runtime/MocopiAvatarBase.cs:2-14`). A link is not a substitute for providing a copy of Apache-2.0.
2. The UniVRM section (`:70-73`) omits the separate UniGLTF `2018 ousttrue` notice.
3. It omits LZ4's BSD-2-Clause notice.
4. It omits the URP, SRP Core, Burst, and Unity.Mathematics third-party notices.
5. It does not account for TextMesh Pro fonts/sprites or development assemblies present in the stale player.
6. The uOSC notice (`:46-68`) should be checked against the exact vendored source revision because the project does not retain the upstream license file or commit.

## Minimal customer-facing `THIRD-PARTY-NOTICES.md`

The shortest defensible final notice is:

1. Product statement that third-party components remain owned and licensed by their respective owners.
2. Sony mocopi component name, copyright and modification notes, followed by the complete Apache License 2.0.
3. uOSC, UniGLTF, UniVRM, and MToon component names and all copyright lines, followed by their complete MIT notices. Identical MIT text can be shared when the mapping is explicit.
4. LZ4 component name, exact version or shipped binary hash, copyright line, and complete BSD-2-Clause text.
5. The complete third-party notice files from the exact shipped versions of Unity URP, SRP Core, and Burst.
6. The Unity.Mathematics noise MIT notice if the fresh build contains that implementation.
7. Only when still shipped: the complete notices for Ingame Debug Console, MCP for Unity, Newtonsoft.Json, Roslyn, Sentis, and any other development/transitive component found by the final inventory.
8. Only when retained: Liberation Sans OFL plus verified EmojiOne and `Perfect DOS VGA 437` notices.

Do not add Asset Store EULA text. A short acknowledgement of Rokoko Live, Final IK, PuppetMaster, and RASCAL is optional, because no separate customer attribution duty was found; internal license proof is mandatory.

## Release gate

Before publishing:

1. Build a clean, non-development Windows player from the exact `dev` commit and record the Git SHA, Unity version, resolved package lock, and build options.
2. Inventory the build root, `*_Data/Managed`, `*_Data/Plugins`, IL2CPP/native output, StreamingAssets, and `resources.assets`.
3. Treat `MCPForUnity.Runtime.dll`, `Unity.Pipeline.dll`, `Microsoft.CodeAnalysis*.dll`, and `IngameDebugConsole.Runtime.dll` as failures unless the owner explicitly accepts them as product features. Check whether `Newtonsoft.Json.dll` remains after their removal.
4. Confirm expected current runtime components: RootMotion/Final IK/PuppetMaster, RASCAL, Rokoko and LZ4, mocopi managed/native code, uOSC, UniVRM, URP/SRP Core, Burst, and Unity.Mathematics.
5. Identify exact versions or hashes for native libraries that expose no usable version metadata, especially `lz4.dll`.
6. Remove unused TMP resources, or close all font/sprite license gaps.
7. Diff every shipped managed DLL, native DLL, package asset, font, and sprite against the final customer notice.
8. Preserve any notice generated by Unity itself and confirm Unity `6000.3.14f1` player redistribution terms. The stale player did not provide a separate generated Unity notice, so this must be rechecked in the fresh build.
9. Confirm that the final archive contains the corrected root `THIRD-PARTY-NOTICES.md`; the existing build script copies that file into the package.

Release status: **blocked on a fresh build inventory and corrected notices**. The evidence does not support a “no third-party notices required” conclusion.

## Exact files and primary sources inspected

Local project and release evidence:

- C:\Users\win11\Projects\vmc-seitai\ProjectSettings\ProjectVersion.txt
- C:\Users\win11\Projects\vmc-seitai\Packages\manifest.json
- C:\Users\win11\Projects\vmc-seitai\Packages\packages-lock.json
- C:\Users\win11\Projects\vmc-seitai\tools\build-beta.ps1
- C:\Users\win11\Projects\vmc-seitai\THIRD-PARTY-NOTICES.md
- C:\Users\win11\Projects\vmc-seitai\Assets\VmcSeitai\VmcSeitai.asmdef and the cited files under Assets\VmcSeitai\Runtime
- C:\Users\win11\Projects\vmc-seitai\Assets\MocopiReceiver\package.json, cited Sony source headers, and mocopi_motion_serializer.dll
- C:\Users\win11\Projects\vmc-seitai\Assets\uOSC\package.json
- C:\Users\win11\Projects\vmc-seitai\Assets\Rokoko\package.json, cited Rokoko source/plugin metadata, and lz4.dll
- The cited Asset Store metadata below Assets\Rokoko, Assets\Plugins\RootMotion, and Assets\RASCAL
- The cited exact package-cache directories for UniGLTF, UniVRM, URP, SRP Core, Burst, Mathematics, MCP for Unity, Unity Pipeline, Newtonsoft.Json, Ingame Debug Console, AI Assistant, and Sentis
- C:\Users\win11\Projects\vmc-seitai\Assets\TextMesh Pro\Fonts\LiberationSans - OFL.txt, Assets\TextMesh Pro\Resources\TMP Settings.asset, and the stale player's resources.assets
- Managed and native file inventories under C:\Users\win11\Projects\vmc-seitai\Builds\MocapSeitai_0.11.0-beta
- C:\Users\win11\Projects\unity-mocap-abstraction-layer\com.malloc.mocap-core\package.json and the cited GuideRig files
- C:\Users\win11\MallocUtils\Assets\MallocUtils\Editor\MallocUtils.Editor.asmdef and C:\Users\win11\MallocUtils\CLAUDE.md:12

Official primary web sources:

- [Sony mocopi Receiver Plugin repository](https://github.com/sony/mocopi-receiver-plugin-unity) and its [Apache-2.0 license](https://github.com/sony/mocopi-receiver-plugin-unity/blob/main/LICENSE)
- [hecomi/uOSC repository](https://github.com/hecomi/uOSC)
- [LZ4 library license](https://github.com/lz4/lz4/blob/dev/lib/LICENSE)
- [MCP for Unity license](https://github.com/CoplayDev/unity-mcp/blob/main/LICENSE)
- [Unity Asset Store Terms of Service and EULA](https://unity.com/legal/as-terms)

Additional exact runtime evidence:

- Unity.Mathematics 1.3.3: C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.mathematics@19a9377c4ffa\package.json:2-4.
- Unity Pipeline-bundled Roslyn: C:\Users\win11\Projects\vmc-seitai\Library\PackageCache\com.unity.pipeline@58c16695e488\Runtime\Plugins\CodeAnalysis\Microsoft.CodeAnalysis.dll and Microsoft.CodeAnalysis.CSharp.dll.
- The separate project Roslyn copy is Editor-only: C:\Users\win11\Projects\vmc-seitai\Assets\Plugins\Roslyn\Microsoft.CodeAnalysis.dll.meta:15-22.
- The stale player contains the same Roslyn names under C:\Users\win11\Projects\vmc-seitai\Builds\MocapSeitai_0.11.0-beta\MocapSeitai_Data\Managed.

## Remaining uncertainties

- The available player is stale. Only a fresh clean player can establish the final shipped dependency set.
- The vendored uOSC folder records version 1.0.0 and MIT but does not preserve an exact upstream commit or local license file. Verify its copyright notice against the source revision actually vendored.
- Rokoko's lz4.dll exposes no reliable upstream version. Record its release hash and obtain the matching BSD-2-Clause notice.
- The exact Microsoft.CodeAnalysis 3.11.0 package notice is absent from Unity Pipeline. Remove those development binaries, or recover and include the exact version's primary notice.
- EmojiOne and Perfect DOS VGA 437 provenance is unresolved in the stale resources.assets. Remove unused TMP resources, or identify and license both before release.
- The mocopi Unity package version 1.1.0 and native serializer version 1.3.0.0 differ. The final notice and release record should identify both.
- Asset Store purchase validity, seat count, and whether each asset is classified as non-restricted cannot be proven from repository files. The owner must verify them.
- Unity-generated player notices and Unity 6000.3.14f1 redistribution requirements must be rechecked on the fresh build.
- Sentis and other runtime-capable packages are conditional until the fresh player inventory confirms whether they are included.
