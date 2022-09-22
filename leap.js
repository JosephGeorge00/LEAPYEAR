const input=document.querySelector('input');
const checkbtn=document.querySelector('button');
const result=document.querySelector(".result");

checkbtn.addEventListener("click",(e) =>{
    e.preventDefault()

    const year = input.value;

    if(year % 4===0)
    {
        if(year%100===0)
        {
            if(year%400==0)
            {
                result.innerText=year+" is a Leap Year";
            }
            else
            {
                result.innerText=year+" is not a Leap Year";
            }
        }
        else
        {
            result.innerText=year+" is a Leap Year";
        }
    }
    else
        {
            result.innerText=year+" is not a Leap Year";
        }
    if(year=='')
    {
        result.innerText = "Enter a valid year"
    }
})

