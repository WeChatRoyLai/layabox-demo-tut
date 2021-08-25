/**
 * 按钮脚本，点击之后
 */
 export default class Button extends Laya.Script {
  constructor() { super(); }
  onEnable() {
          
  }

  onClick() {
    // 播放微信小游戏pro的场景
    if (window.engine) {
      window.engine.loader.load('engineTutorial/layaTutorial/wxEngineAssets/game3d.scene').promise.then(function (scene) {
        // 播放微信小游戏pro的3d场景
        window.engine.game.playScene(scene)
      })

      // 加载微信小游戏pro的2d场景
      window.engine.loader.load('engineTutorial/layaTutorial/wxEngineAssets/game2d.scene').promise.then(function (scene) {
        // 播放微信小游戏pro的3d场景
        window.engine.game.playScene(scene)
      })
    }

  }

  onDisable() {
  }
}