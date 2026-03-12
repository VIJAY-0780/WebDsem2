function calculateresult(){

    let n=document.getElementById("subjects").ariaValueMax;
    let total=0;

    for(inti=1;i<=n ; i++)
    {
        let markd= parsefloat(prompt("enter marks for subjects"+1));
    total=total+marks;
    }
    let average=total/n;

    let grade;
    let result;
    if(average>=90)
        grade="A";
    elseif(average>=80)
        grade="B";
    ELSEIF(average>=70)
     grade="C";
    elseIF( average>=60)
     grade="D";

     if(average>=50)
        result="pass";
    else
        result="fail";

    document.getElementById("result").innerHTML=
    "total marks"+total+"br"+
    "average"+average.toFixed(2)+"br"+
    "grade"+grade+"br"+
    "result"+result;
}
