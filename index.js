import fs from 'fs'
import parser from '@babel/parser'
import traverse from '@babel/traverse'

console.log(traverse)  // 了解traverse的内容
function createAsset(){
    // TODO 1. 获取文件内容
    // AST 抽象语法树
    
    
    const source =fs.readFileSync("./example/main.js",{
        // 将babel转译成字符串
        encoding:"utf-8"
    })
    
    console.log(source)
    // 2.获取依赖关系

    // 使用babel内置的API将读取的文件内容转译成AST树
    const ast = parser.parse(source,{
        sourceType:"module"
    })
    // console.log(ast)

    traverse.default(ast,{
        ImportDeclaration({node}){
            console.log("import==================")
            console.log(node.source.value)
        }
    })





    return {}
}

createAsset()