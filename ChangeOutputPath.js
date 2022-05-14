export class ChangeOutputPath{


    apply(hooks){
        hooks.emitFile.tap("ChangeOutputPath",() => {
            console.log("=============ChangeOutputPath")
        })
    }
}