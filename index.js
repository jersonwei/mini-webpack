import fs from 'fs'
import path from 'path'
import parser from '@babel/parser'
import traverse from '@babel/traverse'

console.log(traverse)  // 了解traverse的内容
function createAsset(filePath){
    // TODO 1. 获取文件内容
    // AST 抽象语法树
    
    
    const source =fs.readFileSync(filePath,{
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
    const deps = []
    traverse.default(ast,{
        ImportDeclaration({node}){
            console.log("import==================")
            deps.push(node.source.value)
        }
    })


    return {
        source,
        deps
    }
}

// const asset =  createAsset()
// console.log(asset)

function createGraph(){
    // 入口 
    const mainAsset = createAsset("./example/main.js")
    console.log('mainAsset~~',mainAsset)
    // 创建一个队列
    const queue = [mainAsset]

    for (const asset of queue) {
        asset.deps.forEach(realtivePath => {
           const child =  createAsset(path.resolve('./example',realtivePath))
            console.log(child)
        });
    }


}

createGraph()