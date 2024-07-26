const express = require ('express')
const router = express.Router();
const Admin = require ('../model/admin')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');


router.post('/adminsignup', async (req,res) => {
    try{
        const userDet= req.body;
        const email = userDet.email;
        const password = userDet.password;        
        const hashpassword = await bcrypt.hash(password,5)
        const admin = new Admin({password:hashpassword, email});
        await admin.save();
        res.status(201).json({ message: "User saved Successfully"});
    }catch(error){
        console.log("Error",error)
        res.status(500).json({ message:' Registration Failed'})
    }
});

router.post('/adminlogin', async(req,res) =>{
    try{
        const { email, password } = req.body;
        const user = await Admin.findOne({ email });
        if (!user) {
            return res
              .status(401)
              .json({ error: "Authentication failed- Admin doesn't exists" });
          }
          const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res
            .status(401)
            .json({ error: "Authentication failed - Password doesn't match" });
        }
        const token = jwt.sign(
        { userId: user._id, email: user.email},
        "your-secret-key",
        {expiresIn: "1h",}
      );
      
      res.cookie("Authtoken", token);
      res.json({
      status: true,
      message: "login success",
      token,
});
return res;

} catch (error) {
console.log(error);
res.status(500).json({ error: "Login failed" });
}
});

router.get("/logout", (req, res) => {
    res.clearCookie("Authtoken");
    res.status(200).send("Logout successful");
    return res;
  });
  
  module.exports = router;