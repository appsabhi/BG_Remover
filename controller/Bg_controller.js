require("dotenv").config();
const {RemoveBgResult, RemoveBgError, removeBackgroundFromImageBase64} =require("remove.bg")
// const { PixelbinClient, PixelbinConfig } = require("@pixelbin/admin");
// const Pixelbin = require("@pixelbin/admin");

// const config = new PixelbinConfig({
//   domain: "https://api.pixelbin.io",
//   apiSecret: process.env.BGREMOVE_API_KEY, 
// });

// const pixelbin = new PixelbinClient(config);

module.exports = {
get_home:(req,res)=>{
 res.render("home")
},


  remove_bg: async (req, res) => {
    console.log("start")
    // try {
  //     const filename = `${Date.now()}-${req.file.originalname}`;

  //     const result = await pixelbin.uploader.upload({
  //       file: req.file.buffer,
  //       name: filename,
  //       path: "/My Library/images",
  //       format: "jpeg",
  //       tags: [],
  //       metadata: {},
  //       overwrite: false,
  //       filenameOverride: false,
  //       access: "public-read",
  //     });

  //     const obj = {
  //       cloudName: "white-forest-625b9e",
  //       zone: "iTrdTd",
  //       version: "v2",
  //       transformations: [{ name: "bg", plugin: "erase" }],
  //       filePath: `/${result.path}/${result.name}`,
  //       baseUrl: "https://cdn.pixelbin.io",
  //     };

  //     const removed_url = Pixelbin.url.objToUrl(obj);

  //     if (removed_url) {
  //       return res.json({ success: true, image_url: removed_url });
  //     }
  //     else{
  //        let res =  await fetch(removed_url,{
  //         method:"GET"
  //        })
  //   let msg = await res.json()
  //  console.log(msg)
      // }

  
    // } catch (error) {
      
    // console.log(error.message)

    // }
  // },


//  let outputFile = `${__dirname}/Public/bg_removed_imgs`
try{
  
const fileBuffer = req.file.buffer;

const base64Image = fileBuffer.toString('base64');
 
 const result = await removeBackgroundFromImageBase64({
  base64img: base64Image,
  apiKey: '9voWChQVsoaEshoq5wE1cBcC',
  size: 'auto',
});


console.log(result)
if(result){
  return res.json({ success: true, image_url:  `data:image/jpeg;base64,${result.base64img}` });
}
}
catch(error){
  console.log(error.message)
}

}
}
