import {Lightning, Router, Utils} from "@lightningjs/sdk";

export default class Movies extends Lightning.Component{
    static _template(){
        return {
            rect: true, w: 1920, h: 1080,
            color: 0xFF402662,
            Header:{
                mount: 0.5,
                text:{
                    text:'Movie', fontFace: "Bold", fontSize: 28
                }
            },
           
        }
    }


}
// const app = new App({stage: {w: 1220, h: 1080, useImageWorker: false}});
// document.body.appendChild(app.stage.getCanvas());