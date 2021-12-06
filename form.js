function validForm(){
    let name=document.forms["animi"]["aname"].value;
    let episode=document.forms["animi"]["epi"].value;
    var spl = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(name==""){
        document.getElementById("mess").innerHTML="NO NAME";
        alert("No Name");
        name.focus();
        return false;
    }
    let len=name.length;
    if(len<=8 && len>=0)
    {
        document.getElementById("mess").innerHTML="ANIMI-Name should have more than 8 characters";
        alert("ANIMI-Name should have more than 8 characters");
        return false;
    }
    if(len>=15)
    {
        document.getElementById("mess").innerHTML="ANIMI-Name should not have more than 15 characters";
        alert("ANIMI-Name should not have more than 15 characters");
        return false;
    }
    if(name.indexOf(" ")>=0)
    {
        document.getElementById("mess").innerHTML="ANIMI-Name must not include spaces";
        alert("ANIMI-Name must not include spaces");
        return false;
    }
    if(isNaN(episode))
    {
        document.getElementById("mess").innerHTML="Episode count must be a number";
        alert("Episode count must be a number");
        return false;
    }
    if(spl.test(name))
    {
        document.getElementById("mess").innerHTML="ANIMI-Name must not include special characters";
        alert("ANIMI-Name must not include special characters");
        return false;
    }
}