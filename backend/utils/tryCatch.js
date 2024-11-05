const tryCatch = (handler) =>{
    return async (req,res) =>{
    try {
        await handler(req,res);        
    } catch (error) {
        res.status(500).json({message:error.message})        
    }
    }
}
export default tryCatch;