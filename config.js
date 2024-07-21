const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_38_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk1LFxuICAgICAgICA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDMwLFxuICAgICAgICA1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwLFxuICAgICAgICA3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMyLFxuICAgICAgICA5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjksXG4gICAgICAgIDg3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1LFxuICAgICAgICA3NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA4LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIitXSGRESWQza2toQzRna09pZGRndzloU2NvWW43d0tjNHlGNisxUHFSZVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInl4Sy1ZRkhRUnEyS3VUZ0o2d3pEaXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2Q5MWYyMDMtODAyNC00MjcxLTk5M2EtY2ViMmMxODY2MmNkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgyLFxuICAgICAgMjIyLFxuICAgICAgMjQ2LFxuICAgICAgMTE3LFxuICAgICAgMjM5LFxuICAgICAgMTkyLFxuICAgICAgMjM2LFxuICAgICAgMTYwLFxuICAgICAgMTIzLFxuICAgICAgMTE3LFxuICAgICAgMTg0LFxuICAgICAgMTYxLFxuICAgICAgNCxcbiAgICAgIDk4LFxuICAgICAgMTcsXG4gICAgICA2NCxcbiAgICAgIDI1MixcbiAgICAgIDEyLFxuICAgICAgNTIsXG4gICAgICA4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDMzLFxuICAgICAgMjIzLFxuICAgICAgMTkzLFxuICAgICAgOTcsXG4gICAgICAxMTAsXG4gICAgICAxNzQsXG4gICAgICA1NyxcbiAgICAgIDkxLFxuICAgICAgMTk3LFxuICAgICAgMjQwLFxuICAgICAgNzEsXG4gICAgICA3MixcbiAgICAgIDE0NyxcbiAgICAgIDgxLFxuICAgICAgOTgsXG4gICAgICAzMCxcbiAgICAgIDE5MyxcbiAgICAgIDE0NSxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYM1ZQSEdRWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTIzNDM3NzAwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNjg0NDc2MTg2NjI2Mzo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01mUnFpY1E3Zlh5dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTHNyN1VrRWxhREthT2daWDJaTHpMc1ZjbHZ2MlZuTE51TFBEekR6RDNobz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuM0E1LzR4WlRrTWo5WmpWaGdyWWFSMHlZd2d4eGtCMi9Nc3pUN1E4QnlVdjhZYVYxaVlUMVY5TGxTTURVZERoUG9NU3U2SVpUa0o3Y1BrOHl1WkNDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoT094Z1VkQlkxMTVaMVJybWhUMWpkUTVQQlpSOVBWM00xaWVZbFhaM3BIalowVmJIOEMrVHY4cnUxUjN6NkZYSEJGMWx3VzdWd3NIRUs5UnZuWWxoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMjM0Mzc3MDA6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1NDc1MDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBR2RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFHZC5qc29uIjogIntcImtleURhdGFcIjpcInNPNEZ6YUxzUXoyWnZ1aUlmODJ4TDM3eFcyeEh1Ri8xY1MzYXg2N2RjQnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODI0ODc0OTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1NDc0ODc5NDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
