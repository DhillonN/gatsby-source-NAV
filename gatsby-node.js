const fetch= require("node-fetch")
const queryString= require("query-string")
exports.sourceNodes=(
    {actions, createNodeId, createContentDigest},
    configOptions
)=>{
    const{createNode}=actions
    delete configOptions.plugins
    console.log("this is Test Output ",configOptions)
}