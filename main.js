var inputs = [];

function GetPera1()
{
    for(var i = 1; i <=4; i++)
    {
        inputs.push(document.getElementById("para1_" + i).value);
    }

    document.getElementById("pera1").innerHTML = inputs.join(". ")
}

function GetPera2()
{
    for(var i = 1; i <=4; i++)
    {
        inputs.push(document.getElementById("para2_" + i).value);
    }

    document.getElementById("pera2").innerHTML = inputs.join(". ")
}