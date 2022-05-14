export function jsonLoader(source){

    console.log('jsonLoader===',source)

    // return 

    return `export default ${JSON.stringify(source)}`
}