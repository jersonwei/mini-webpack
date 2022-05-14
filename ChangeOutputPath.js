export class ChangeOutputPath{


    apply(hooks){
        hooks.emitFile.tap("ChangeOutputPath",(context) => {

            console.log("=============ChangeOutputPath")

            context.ChangeOutputPath("./dist/jersonWang.js")
        })
    }
}