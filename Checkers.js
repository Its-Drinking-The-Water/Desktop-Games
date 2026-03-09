//Desktop path
var fso = new ActiveXObject("Scripting.FileSystemObject");
var shell = new ActiveXObject("WScript.Shell");
var desktopPath = shell.SpecialFolders("Desktop");

//filenames
var filenames = ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "X", "X", "X", "X" , "X", "X", "X", "X", "X" , "X", "X"];

//loop
for (var i = 0; i < filenames.length; i++) {
    var filePath = desktopPath + "\\" + filenames[i];
    
       //make the files
        var file = fso.CreateTextFile(filePath, true);
        file.WriteLine("This is a checker for " + filenames[i]); //text in file
        file.Close();
   
}
