/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from '@lightningjs/sdk'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    // return {
    //   Background: {
    //     w: 1920,
    //     h: 1080,
    //     color: 0xfffbb03b,
    //     src: Utils.asset('images/background.png'),
    //   },
    //   Logo: {
    //     mountX: 0.5,
    //     mountY: 1,
    //     x: 960,
    //     y: 600,
    //     src: Utils.asset('images/logo.png'),
    //   },
    //   Text: {
    //     mount: 0.5,
    //     x: 960,
    //     y: 720,
    //     text: {
    //       text: "Hello world !!",
    //       fontFace: 'Regular',
    //       fontSize: 64,
    //       textColor: 0xbbffffff,
    //     },
    //   },
    // }
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset('images/background.png'),
      },
      Logo: {
            mountX: 0.5,
            mountY: 1,
            x: 960,
            y: 600,
            src: Utils.asset('images/logo.png'),
          },
      MyTexture: {
        x: 200,
        y: 250,
        texture: {type: lng.textures.ImageTexture, src: '/Lightning/img/LngDocs_LilLightningIdle.png'},
        transitions: {
            'texture.x': {duration: 4}
        }
    },
    Wrapper: {
        rect: true, w: 200, h: 200, color: 0xFFAAAAAA,
        Contain: {
            x: w=>w/2, y: h=>h/2, mount: 0.5,
            texture: {type: lng.textures.ImageTexture, src: '/Lightning/img/LngDocs_LilLightningIdle.png', resizeMode: {type: 'contain', w: 200, h: 200}}
        }
    },
    Cover: {
        x: 200, y: 0,
        texture: {type: lng.textures.ImageTexture, src: '/Lightning/img/LngDocs_LilLightningIdle.png', resizeMode: {type: 'cover', w: 200, h: 200, clipY: 0}}
    }
      // element example
    //   Header: {
    //     rect: true, w: 1920, h: 50, color: 0xff005500,
    //     Title: {
    //         x: 50, y: 30, mountY: 0.5, text: { text: 'Header' }
    //     }
    // },
    // Content: {
    //     y: 60,
    //     MyImage: {
    //         x: 100,
    //         y: 100,
    //         src: Utils.asset('/images/background.png')//"/Lightning/img/LngDocs_LilLightningIdle.png" 
    //     }
    // }
      // Toolbox example
      // x: 50,
      // y: 50,
      // RoundRectangle: {
      //     zIndex: 2,
      //     texture: lng.Tools.getRoundRect(150, 40, 4, 3, 0xffff00ff, true, 0xff00ffff),
      // },
      // Shadow: {
      //     x: 10,
      //     y: 10,
      //     zIndex: 1,
      //     color: 0x66000000,
      //     texture: lng.Tools.getShadowRect(150, 40, 4, 10, 15),
      // }
      // image examples
      // UsingShorthand:{ x: 250, y: 100, src:Utils.asset('images/background.png') },
      // UsingTexture:{ x: 250, y: 300, texture: {type: lng.textures.ImageTexture, src: Utils.asset('images/background.png')}},

      // Rec texture type example
      // RectangleDefault: {
      //   x: 100, y: 100, w: 200, h: 100, rect: true
      // },
      // RectangleWithColor: {
      //   x: 400, y: 100, w: 200, h: 100, rect: true, color: 0xFF1C27bC
      // },
      // RectangleWithGradientTopBottom: {
      //   x: 100, y: 300, w: 200, h: 100, rect: true, colorTop: 0xFFFF0000, colorBottom: 0xFF1C27bC
      // },
      // RectangleWithGradientLeftRight: {
      //   x: 400, y: 300, w: 200, h: 100, rect: true, colorLeft: 0xFF636EFB, colorRight: 0xFF1C27bC
      // },
      // RectangleWithGradientDiagonal: {
      //   x: 100, y: 500, w: 200, h: 100, rect: true, colorUl: 0xFF636EFB, colorUr: 0xFF00FF00, colorBr: 0xFF1C27bC, colorBl: 0xFF00FF00,
      // },
      // RectangleWithGradientDiagonalMixed: {
      //   x: 400, y: 500, w: 200, h: 100, rect: true, colorLeft: 0xFF00FF00, colorBr: 0xFF1C27bC, colorUr: 0xFFFF0000
      // }

      // Rec texture type example
      // GradientTexture: {
      //   x: 50, y: 50, w: 150, h: 150, rect: true, colorUl: 0xFFD67210, colorBr: 0xFF144B83,
      //   Desc: { x: 0, y: 160, text: { text: 'I am a "gradient" texture', fontSize: 22, wordWrap: true, wordWrapWidth: 450, lineHeight: 30 } },
      // },
      // ImageTexture:{
      //     x: 350, y: 150, src: Utils.asset('images/logo.png'),
      //     Desc:{ x: 0, y: 190, text:{ text: 'I am a "image" texture', fontSize: 22, wordWrap: true, wordWrapWidth: 450, lineHeight: 30 }},
      // },
      // TextTexture:{
      //     x: 50, y: 400, colorTop: 0xFFF1F1F1, colorBottom: 0xFF144B83, text:{ text: 'TEXT', fontSize: 40, wordWrap: true, wordWrapWidth: 450, lineHeight: 30 },
      //     Desc:{ x: 0, y: 50, text:{ text: 'I am a "text" texture', fontSize: 22, wordWrap: true, wordWrapWidth: 450, lineHeight: 30 }},
      // },
      // SolidColorTexture:{
      //     x: 350, y: 450, w: 150, h: 150, rect: true, color: 0xFF144B83,
      //     Desc:{ x: 0, y: 160, text:{ text: 'I am a "solid color" texture', fontSize: 22, wordWrap: true, wordWrapWidth: 450, lineHeight: 30 }},
      // }
  }
  }

  _init() {
    const myTexture = this.tag("MyTexture");
        myTexture.transition('texture.x').on('finish', () => {
            const current = myTexture.getSmooth('texture.x');
            myTexture.setSmooth('texture.x', current ? 0 : 50);
        })
        myTexture.setSmooth('texture.x', 50);
        
    this.tag('Background')
      .animation({
        duration: 15,
        repeat: -1,
        actions: [
          {
            t: '',
            p: 'color',
            v: { 0: { v: 0xfffbb03b }, 0.5: { v: 0xfff46730 }, 0.8: { v: 0xfffbb03b } },
          },
        ],
      })
      .start()
  }
}
