const {app,BrowserWindow,shell,Menu}=require('electron');
const path=require('path');
// Mode portable: simpan data di folder di sebelah file .exe supaya ikut terbawa
if(process.env.PORTABLE_EXECUTABLE_DIR){app.setPath('userData',path.join(process.env.PORTABLE_EXECUTABLE_DIR,'DATA-FENANCE-IMMN'))}
app.whenReady().then(()=>{
  Menu.setApplicationMenu(null);
  const w=new BrowserWindow({width:1100,height:780,title:'FENANCE KEUANGAN IMMN',icon:path.join(__dirname,'icon.ico'),webPreferences:{contextIsolation:true}});
  w.loadFile('index.html');
  w.webContents.setWindowOpenHandler(({url})=>{if(/^https?:/.test(url))shell.openExternal(url);return{action:'deny'}});
});
app.on('window-all-closed',()=>app.quit());
