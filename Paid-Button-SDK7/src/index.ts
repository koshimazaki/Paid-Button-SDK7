// We define the empty imports so the auto-complete feature works as expected.
import { } from '@dcl/sdk/math'
import { Animator, AudioSource, AvatarAttach, GltfContainer, Transform, VisibilityComponent, engine, pointerEventsSystem } from '@dcl/sdk/ecs'
import { initAssetPacks } from '@dcl/asset-packs/dist/scene-entrypoint'
//import * as crypto from 'dcl-crypto-toolkit';  //this works

import { buildScene } from './builder'
//import { Button } from './button'
import { Paid_Button,Door, } from './uiButton' 
//import { setupUi,toggleUIVisibility } from './uiButton'

export function main() {
  buildScene()
 // toggleUIVisibility()
Door
Paid_Button
// setupUi()
}

main()