import fs from 'fs'
import path from 'path'
import parser from '@babel/parser'
import traverse from '@babel/traverse'
import ejs from 'ejs'
import {transformFromAst} from "babel-core"
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

    const {code} =  transformFromAst(ast,null,{
        presets:["env"]
    })
    console.log(code)
    return {
        filePath,
        code,
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
            // 将child存储到queue中
            queue.push(child)
        });
    }

    return queue
}

const graph =  createGraph()
console.log(graph)

function build(graph){

    const template = fs.readFileSync("./bundle.ejs",{
        encoding:"utf-8"
    })
    
    const data = graph.map((asset) => {
        return {
            filepath:asset.filePath,
            code:asset.code
        }
    })

    const code =  ejs.render(template,{data})

    console.log(data) 

    fs.writeFileSync("./dist/bundle.js",code)
}

build(graph)