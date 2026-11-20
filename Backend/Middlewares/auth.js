const adminAuth = (req, res , next) => {
    console.log("Route handler called");
    
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";

    if (!isAdminAuthorized) {
        console.log("Admin is not authorized");
         res.status(401).send("Unauthorized");
    }
     next();
};
    

module.exports = { adminAuth };