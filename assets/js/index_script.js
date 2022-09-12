// ================================ Question #1 ======================================
function q1() 
{
  var valueInput = document.getElementById("num1").value;
  document.getElementById("result1").innerHTML = valueInput;
  valueInput = document.getElementById("num1").value = null;
}
// ================================ Question #2 ======================================
function q2() 
{
  var valueInput = document.getElementById("num2").value;
  if (valueInput == "") {
    document.getElementById("result2").innerHTML = "";
  }
  else if (valueInput == 0) {
    document.getElementById("result2").innerHTML = "No";
  }
  else if (valueInput % 3 == 0 && valueInput % 4 == 0) {
    document.getElementById("result2").innerHTML = "Yes";
  }
  else {
    document.getElementById("result2").innerHTML = "No";
  }
  valueInput = document.getElementById("num2").value = null;
}
// ================================ Question #3 ======================================
function q3() 
{
  var valueInput1 = Number(document.getElementById("num3-1").value);
  var valueInput2 = Number(document.getElementById("num3-2").value);
  if(valueInput1 == "" || valueInput2 == "")
  {
    document.getElementById("result3").innerHTML = null;
  }
  else
  {
    if (valueInput1 > valueInput2) {
      document.getElementById("result3").innerHTML = valueInput1
    } else {
      document.getElementById("result3").innerHTML = valueInput2
    }
  }

  valueInput1 = document.getElementById("num3-1").value = "";
  valueInput2 = document.getElementById("num3-2").value = "";
}
// ================================ Question #4 ======================================
function q4() 
{
  var valueInput = document.getElementById("num4").value;

  if (valueInput == "") {
    document.getElementById("result4").innerHTML = null
  }
  else if (valueInput == 0) {
    document.getElementById("result4").innerHTML = "The number zero is neither a positive nor a negative number";
  }
  else if (valueInput > 0) {
    document.getElementById("result4").innerHTML = "Positive"
  }
  else {
    document.getElementById("result4").innerHTML = "Negative"
  }
  valueInput = document.getElementById("num4").value = null;
}
// ================================ Question #5 ======================================
function q5() 
{                   
  var valueInput1 = Number(document.getElementById("num5-1").value);
  var valueInput2 = Number(document.getElementById("num5-2").value);
  var valueInput3 = Number(document.getElementById("num5-3").value);
  if(valueInput1 == "" || valueInput2 == "" || valueInput3 == "")
  {
    document.getElementById("result5-1").innerHTML = null;
    document.getElementById("result5-2").innerHTML = null;
  }else
  {
    if((valueInput1 >= valueInput2) && (valueInput1 >= valueInput3))
    {
      document.getElementById("result5-1").innerHTML =  valueInput1;
    }else if((valueInput2 >= valueInput1) && (valueInput2 >= valueInput3))
    {
      document.getElementById("result5-1").innerHTML = valueInput2;
    }else
    {
      document.getElementById("result5-1").innerHTML = valueInput3;
    }
    if((valueInput1 <= valueInput2) && (valueInput1 <= valueInput3))
    {
      document.getElementById("result5-2").innerHTML =  valueInput1;
    }else if((valueInput2 <= valueInput1) && (valueInput2 <= valueInput3))
    {
      document.getElementById("result5-2").innerHTML = valueInput2;
    }else
    {
      document.getElementById("result5-2").innerHTML = valueInput3;
    }
  }
    document.getElementById("num5-1").value= null;
    document.getElementById("num5-2").value= null;
    document.getElementById("num5-3").value= null;
}
// ================================ Question #6 ======================================
function q6() 
{
  var valueInput = document.getElementById('num6').value;
  if (valueInput == "") {
    document.getElementById('result6').innerHTML = null;
  }
  else if (valueInput % 2 == 0) {
    document.getElementById('result6').innerHTML = "even";
  } else {
    document.getElementById('result6').innerHTML = "odd";
  }
  valueInput = document.getElementById('num6').value = null;
}
// ================================ Question #7 ======================================
function q7()
{
  var valueInput7 = document.getElementById("num7").value;
  if(valueInput7 == "")
  {
    document.getElementById("result7").innerHTML = null;
  }
  else
  {
    if(valueInput7 == "a" || valueInput7 == "A" || valueInput7 == "e" || valueInput7 == "E" || valueInput7 == "i" || valueInput7 == "I" || valueInput7 == "o" || valueInput7 == "O" || valueInput7 == "u" || valueInput7 == "U")
    {
      document.getElementById("result7").innerHTML = "vowel"
    }
    else
    {
      document.getElementById("result7").innerHTML = "Consonant"
  
    }
  }
  document.getElementById("num7").value = null;
}
// ================================ Question #8 ======================================
function q8()
{
  var valueInput = document.getElementById("num8").value
  document.getElementById("result8").innerHTML = null;
  for( var i = 1 ; i <= valueInput ;  i++ )
  {
    if(i < valueInput)  // --> For removing Last comma in for loop
    {
      document.getElementById("result8").innerHTML +=(i);
      document.getElementById("result8").innerHTML +=", ";
    }
    else{
      document.getElementById("result8").innerHTML +=(i);
      document.getElementById("result8").innerHTML +="";
    }
  }
  document.getElementById("num8").value = null
}
// ================================ Question #9 ======================================
function q9()
{
  var valueInput = document.getElementById("num9").value
  document.getElementById("result9").innerHTML = null;
  if(valueInput == "")
  {
    document.getElementById("result9").innerHTML = null;
  }
  else
  {
    for( var i = 1 ; i <= 12 ;  i++ )
    {
      if(i < 12)  // --> For removing Last comma in for loop
      {
        document.getElementById("result9").innerHTML +=(valueInput*i);
        document.getElementById("result9").innerHTML +=", ";
      }
      else{
        document.getElementById("result9").innerHTML +=(valueInput*i);
        document.getElementById("result9").innerHTML +="";
      }
    }
  }
  document.getElementById("num9").value = null
}
// ================================ Question #10 ======================================
function q10()
{
  var valueInput = document.getElementById("num10").value
  document.getElementById("result10").innerHTML = null;
  if(valueInput == "")
  {
    document.getElementById("result10").innerHTML = null;
  }
  else
  {
    for( var i = 1 ; i <= valueInput ;  i+=1 )
    {
      if( i % 2 == 0)
      {
        document.getElementById("result10").innerHTML += i ;
        document.getElementById("result10").innerHTML +=" ";
      }
    }
  document.getElementById("num10").value = null
}
}
// ================================ Question #11 ======================================
function q11()
{
  var valueInput1 = document.getElementById("num11-1").value
  var valueInput2 = document.getElementById("num11-2").value

  document.getElementById("result11").innerHTML = valueInput1 ** valueInput2
  document.getElementById("num11-1").value = null;
  document.getElementById("num11-2").value = null;
}
// ================================ Question #12 ======================================
function q12()
{
  var valueInput1 = Number(document.getElementById("num12-1").value);
  var valueInput2 = Number(document.getElementById("num12-2").value);
  var valueInput3 = Number(document.getElementById("num12-3").value);
  var valueInput4 = Number(document.getElementById("num12-4").value);
  var valueInput5 = Number(document.getElementById("num12-5").value);
  var total = valueInput1 + valueInput2 + valueInput3 + valueInput4 + valueInput5;
  var avg = total/5;
  var precentage = total/500*100
  if(valueInput1 == ""|| valueInput2 == ""|| valueInput3 == ""|| valueInput4 == ""|| valueInput5 == "")
  {
    document.getElementById("result12-1").innerHTML = null;
    document.getElementById("result12-2").innerHTML = null;
    document.getElementById("result12-3").innerHTML = null;  
  }
  else
  {
    document.getElementById("result12-1").innerHTML = total;
    document.getElementById("result12-2").innerHTML = avg;
    document.getElementById("result12-3").innerHTML = precentage + "%";  
  }
  document.getElementById("num12-1").value = null;
  document.getElementById("num12-2").value = null;
  document.getElementById("num12-3").value = null;
  document.getElementById("num12-4").value = null;
  document.getElementById("num12-5").value = null;
}
// ================================ Question #13 ======================================
function q13()
{
  var valueInput = Number(document.getElementById("num13").value);
  if(valueInput <= 12)
  {
    if( valueInput == "" )
    {
      document.getElementById("result13").innerHTML = null; 
    }
    else if( valueInput == 1 || valueInput == 3 || valueInput == 5 || valueInput == 7 || valueInput == 8 || valueInput == 10 || valueInput == 12)
    {
      document.getElementById("result13").innerHTML = "Days in Month: 31"; 
    }
    else if( valueInput == 4 || valueInput == 6 || valueInput == 9 || valueInput == 11)
    {
      document.getElementById("result13").innerHTML = "Days in Month: 30"; 
    }
    else if( valueInput < 0 )
    {
      document.getElementById("result13").innerHTML = null; 
    }
    else
    {
      document.getElementById("result13").innerHTML = "Days in Month: 28 , " + ' "also every 4 years Feb becomes 29 Day"'; 
    }
  }
  else
  {
    document.getElementById("result13").innerHTML = null; 
  }

  document.getElementById("num13").value = null;
}
// ================================ Question #14 ======================================
function q14()
{
  var valueInput1 = Number(document.getElementById("num14-1").value);
  var valueInput2 = Number(document.getElementById("num14-2").value);
  var valueInput3 = Number(document.getElementById("num14-3").value);
  var valueInput4 = Number(document.getElementById("num14-4").value);
  var valueInput5 = Number(document.getElementById("num14-5").value);
  var percentage  =( valueInput1 + valueInput2 + valueInput3 + valueInput4 + valueInput5)/5;
  if( percentage > 100)
  {
    document.getElementById("result14-1").innerHTML = 100 + " %"; 
  }
  else if ( percentage < 0)
  {
    document.getElementById("result14-1").innerHTML = 0 + " %"; 
  }
  else
  {
    document.getElementById("result14-1").innerHTML = percentage + " %"; 
  }
  
    if( percentage >= 90)
    {
      document.getElementById("result14-2").innerHTML = "A"; 
    }
    else if( percentage >= 80)
    {
      document.getElementById("result14-2").innerHTML = "B"; 
    }
    else if( percentage >= 70)
    {
      document.getElementById("result14-2").innerHTML = "C"; 
    }
    else if( percentage >= 60)
    {
      document.getElementById("result14-2").innerHTML = "D"; 
    }
    else if( percentage >= 40)
    {
      document.getElementById("result14-2").innerHTML = "E"; 
    }
    else if( percentage < 40)
    {
      document.getElementById("result14-2").innerHTML = "F"; 
      document.getElementById("result14-2").classList.remove("text-success")
      document.getElementById("result14-2").style.color="red"
    }
    document.getElementById("num14-1").value = null;
    document.getElementById("num14-2").value = null;
    document.getElementById("num14-3").value = null;
    document.getElementById("num14-4").value = null;
    document.getElementById("num14-5").value = null;
}
// ================================ Question #15 ======================================
function q15()
{
  var month = document.getElementById("num15").value;
  switch(month)
  {
    case "January": case "january":
      document.getElementById("result15").innerHTML = 31 + " Day" ;
    break;
    case "February": case "february":
      document.getElementById("result15").innerHTML = "28 days in a common year and 29 days in leap years";
    break;
    case "March": case "march":
      document.getElementById("result15").innerHTML = 31 + " Day";;
    break;
    case "April": case "april":
      document.getElementById("result15").innerHTML = 30 + " Day";
    break;
    case "May": case "may":
      document.getElementById("result15").innerHTML = 31 + " Day";;
    break;
    case "June": case "june":
      document.getElementById("result15").innerHTML = 30 + " Day";;
    break;
    case "July": case "july":
      document.getElementById("result15").innerHTML = 31 + " Day";
    break;
    case "August": case "august":
      document.getElementById("result15").innerHTML = 31 + " Day";;
    break;
    case "September": case "september":
      document.getElementById("result15").innerHTML = 30 + " Day";;
    break;
    case "October": case "october":
      document.getElementById("result15").innerHTML = 31 + " Day";
    break;
    case "November": case "november":
      document.getElementById("result15").innerHTML = 30 + " Day";;
    break;
    case "December ": case "december":
      document.getElementById("result15").innerHTML = 31 + " Day";;
    break;
    default:
      document.getElementById("result15").innerHTML = null;
    break;
  }
  document.getElementById("num15").value = null;
}
// ================================ Question #16 ======================================
function q16()
{
  var valueInput = document.getElementById("num16").value;
  switch (valueInput)
  {
    case "a" : case "A" :
    document.getElementById("result16").innerHTML = "vowel";
    break;
    case "e" : case "E" :
    document.getElementById("result16").innerHTML = "vowel";
    break;
    case "i" : case "I" :
    document.getElementById("result16").innerHTML = "vowel";
    break;
    case "o" : case "O" :
    document.getElementById("result16").innerHTML = "vowel";
    break;
    case "u" : case "U" :
    document.getElementById("result16").innerHTML = "vowel";
    break;
    case "":
      document.getElementById("result16").innerHTML = null;
    break;
    default:
    document.getElementById("result16").innerHTML = "consonant";
    break;
  }
  document.getElementById("num16").value = null
}
// ================================ Question #17 ======================================
function q17()
{
  var valueInput1 = Number(document.getElementById("num17-1").value);
  var valueInput2 = Number(document.getElementById("num17-2").value);
  switch(true)
  {
    case  valueInput1 || valueInput2 == "": 
    document.getElementById("result17").innerHTML = null;
    break;
    case  valueInput1 > valueInput2 : 
    document.getElementById("result17").innerHTML = valueInput1;
    break;
    default:
    document.getElementById("result17").innerHTML = valueInput2;
    break;
  }
  document.getElementById("num17-1").value = null;
  document.getElementById("num17-2").value = null;
}
// ================================ Question #18 ======================================
function q18()
{
  var valueInput = document.getElementById("num18").value;
  switch(true)
  {
    case  valueInput == "": 
    document.getElementById("result18").innerHTML = null;
    break;
    case  valueInput % 2 == 0 : 
    document.getElementById("result18").innerHTML = "even";
    break;
    default:
    document.getElementById("result18").innerHTML = "odd";
    break;
  }
  document.getElementById("num18").value = null;
}
// ================================ Question #19 ======================================
function q19()
{
  var valueInput = document.getElementById("num19").value;
  
  switch(true)
  {
    case  valueInput == "": 
    document.getElementById("result19").innerHTML = null;
    break;
    case  valueInput == 0: 
    document.getElementById("result19").innerHTML = "The number zero is neither a positive nor a negative number";
    break;
    case  valueInput > 0 : 
    document.getElementById("result19").innerHTML = "Positive";
    break;
    default:
    document.getElementById("result19").innerHTML = "Negative";
    break;
  }
  document.getElementById("num19").value = null;
}
// ================================ Question #20 ======================================
function q20()
{
  var valueInput1 = Number(document.getElementById("num20-1").value);
  var valueInput2 = document.getElementById("num20-2").value;
  var valueInput3 = Number(document.getElementById("num20-3").value);
  var Sum = valueInput1 + valueInput3;
  var Minus = valueInput1 - valueInput3;
  var Multiply = valueInput1 * valueInput3;
  var Division = valueInput1 / valueInput3;
  var Modulus  = valueInput1 % valueInput3;
  switch(valueInput2)
  {
    case "+" :
    document.getElementById("result20").innerHTML = Sum;
    break;
    case "-" :
    document.getElementById("result20").innerHTML = Minus;
    break;
    case "*" :
    document.getElementById("result20").innerHTML = Multiply;
    break;
    case "/" :
    document.getElementById("result20").innerHTML = Division;
    break;
    case "%" :
    document.getElementById("result20").innerHTML = Modulus;
    break;
    default:
    document.getElementById("result20").innerHTML = " ==> Use only one of These  Operators ( + , - , * , / , % )";
    document.getElementById("result20").classList.add("text-danger")
    break;
  }
  switch(true)
  {
    case valueInput1 == "" || valueInput3 == "" :
    document.getElementById("result20").innerHTML = null;
    break;
  }
  document.getElementById("num20-1").value = null;
  document.getElementById("num20-2").value = null;
  document.getElementById("num20-3").value = null;
}

// ===================================================================================================== 

// For Stars in using switch case
for(var i = 1 ; i <= 7 ; i++)
{
  document.getElementById("starsBefore").innerHTML += "*";
  document.getElementById("starsAfter").innerHTML += "*";
}
// Checking input Fields
function checkInput1()
{
  var valueInput = document.getElementById("num1").value;
  if(valueInput == "")
  {
    document.getElementById("btn1").classList.add("disabled");
    document.getElementById("btn1").classList.remove("btn-primary");
    document.getElementById("btn1").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn1").classList.remove("disabled");
    document.getElementById("btn1").classList.remove("btn-secondary");
    document.getElementById("btn1").classList.add("btn-primary");
  }
}
function checkInput2()
{
  var valueInput = document.getElementById("num2").value;
  if(valueInput == "")
  {
    document.getElementById("btn2").classList.add("disabled");
    document.getElementById("btn2").classList.remove("btn-primary");
    document.getElementById("btn2").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn2").classList.remove("disabled");
    document.getElementById("btn2").classList.remove("btn-secondary");
    document.getElementById("btn2").classList.add("btn-primary");
  }
}
function checkInput3()
{
  var valueInput1 = document.getElementById("num3-1").value;
  var valueInput2 = document.getElementById("num3-2").value;
  if(valueInput1 == "" || valueInput2 == "")
  {
    document.getElementById("btn3").classList.add("disabled");
    document.getElementById("btn3").classList.remove("btn-primary");
    document.getElementById("btn3").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn3").classList.remove("disabled");
    document.getElementById("btn3").classList.remove("btn-secondary");
    document.getElementById("btn3").classList.add("btn-primary");
  }
}
function checkInput4()
{
  var valueInput = document.getElementById("num4").value;
  if(valueInput == "")
  {
    document.getElementById("btn4").classList.add("disabled");
    document.getElementById("btn4").classList.remove("btn-primary");
    document.getElementById("btn4").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn4").classList.remove("disabled");
    document.getElementById("btn4").classList.remove("btn-secondary");
    document.getElementById("btn4").classList.add("btn-primary");
  }
}
function checkInput5()
{
  var valueInput1 = document.getElementById("num5-1").value;
  var valueInput2 = document.getElementById("num5-2").value;
  var valueInput3 = document.getElementById("num5-3").value;

    if( valueInput1 == "" || valueInput2 == "" || valueInput3 == "") 
    {
      document.getElementById("btn5").classList.add("disabled");
      document.getElementById("btn5").classList.remove("btn-primary");
      document.getElementById("btn5").classList.add("btn-secondary");
    }
    else  
    {
      document.getElementById("btn5").classList.remove("disabled");
      document.getElementById("btn5").classList.remove("btn-secondary");
      document.getElementById("btn5").classList.add("btn-primary");
    }
}
function checkInput6()
{
  var valueInput = document.getElementById("num6").value;
  if(valueInput == "")
  {
    document.getElementById("btn6").classList.add("disabled");
    document.getElementById("btn6").classList.remove("btn-primary");
    document.getElementById("btn6").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn6").classList.remove("disabled");
    document.getElementById("btn6").classList.remove("btn-secondary");
    document.getElementById("btn6").classList.add("btn-primary");
  }
}
function checkInput7()
{
  var valueInput = document.getElementById("num7").value;
  if(valueInput == "")
  {
    document.getElementById("btn7").classList.add("disabled");
    document.getElementById("btn7").classList.remove("btn-primary");
    document.getElementById("btn7").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn7").classList.remove("disabled");
    document.getElementById("btn7").classList.remove("btn-secondary");
    document.getElementById("btn7").classList.add("btn-primary");
  }
}
function checkInput8()
{
  var valueInput = document.getElementById("num8").value;
  if(valueInput == "")
  {
    document.getElementById("btn8").classList.add("disabled");
    document.getElementById("btn8").classList.remove("btn-primary");
    document.getElementById("btn8").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn8").classList.remove("disabled");
    document.getElementById("btn8").classList.remove("btn-secondary");
    document.getElementById("btn8").classList.add("btn-primary");
  }
}
function checkInput9()
{
  var valueInput = document.getElementById("num9").value;
  if(valueInput == "")
  {
    document.getElementById("btn9").classList.add("disabled");
    document.getElementById("btn9").classList.remove("btn-primary");
    document.getElementById("btn9").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn9").classList.remove("disabled");
    document.getElementById("btn9").classList.remove("btn-secondary");
    document.getElementById("btn9").classList.add("btn-primary");
  }
}
function checkInput10()
{
  var valueInput = document.getElementById("num10").value;
  if(valueInput == "")
  {
    document.getElementById("btn10").classList.add("disabled");
    document.getElementById("btn10").classList.remove("btn-primary");
    document.getElementById("btn10").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn10").classList.remove("disabled");
    document.getElementById("btn10").classList.remove("btn-secondary");
    document.getElementById("btn10").classList.add("btn-primary");
  }
}
function checkInput11()
{
  var valueInput1 = document.getElementById("num11-1").value;
  var valueInput2 = document.getElementById("num11-2").value;
  if(valueInput1 == "" || valueInput2 == "")
  {
    document.getElementById("btn11").classList.add("disabled");
    document.getElementById("btn11").classList.remove("btn-primary");
    document.getElementById("btn11").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn11").classList.remove("disabled");
    document.getElementById("btn11").classList.remove("btn-secondary");
    document.getElementById("btn11").classList.add("btn-primary");
  }
}
function checkInput12()
{
  var valueInput1 = document.getElementById("num12-1").value;
  var valueInput2 = document.getElementById("num12-2").value;
  var valueInput3 = document.getElementById("num12-3").value;
  var valueInput4 = document.getElementById("num12-4").value;
  var valueInput5 = document.getElementById("num12-5").value;

    if( valueInput1 == "" || valueInput2 == "" || valueInput3 == "" || valueInput4 == "" || valueInput5 == "") 
    {
      document.getElementById("btn12").classList.add("disabled");
      document.getElementById("btn12").classList.remove("btn-primary");
      document.getElementById("btn12").classList.add("btn-secondary");
    }
    else  
    {
      document.getElementById("btn12").classList.remove("disabled");
      document.getElementById("btn12").classList.remove("btn-secondary");
      document.getElementById("btn12").classList.add("btn-primary");
    }
}
function checkInput13()
{
  var valueInput = document.getElementById("num13").value;
  if(valueInput == "")
  {
    document.getElementById("btn13").classList.add("disabled");
    document.getElementById("btn13").classList.remove("btn-primary");
    document.getElementById("btn13").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn13").classList.remove("disabled");
    document.getElementById("btn13").classList.remove("btn-secondary");
    document.getElementById("btn13").classList.add("btn-primary");
  }
}
function checkInput14()
{
  var valueInput1 = document.getElementById("num14-1").value;
  var valueInput2 = document.getElementById("num14-2").value;
  var valueInput3 = document.getElementById("num14-3").value;
  var valueInput4 = document.getElementById("num14-4").value;
  var valueInput5 = document.getElementById("num14-5").value;

    if( valueInput1 == "" || valueInput2 == "" || valueInput3 == "" || valueInput4 == "" || valueInput5 == "") 
    {
      document.getElementById("btn14").classList.add("disabled");
      document.getElementById("btn14").classList.remove("btn-primary");
      document.getElementById("btn14").classList.add("btn-secondary");
    }
    else  
    {
      document.getElementById("btn14").classList.remove("disabled");
      document.getElementById("btn14").classList.remove("btn-secondary");
      document.getElementById("btn14").classList.add("btn-primary");
    }
}
function checkInput15()
{
  var valueInput = document.getElementById("num15").value;
  if(valueInput == "")
  {
    document.getElementById("btn15").classList.add("disabled");
    document.getElementById("btn15").classList.remove("btn-primary");
    document.getElementById("btn15").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn15").classList.remove("disabled");
    document.getElementById("btn15").classList.remove("btn-secondary");
    document.getElementById("btn15").classList.add("btn-primary");
  }
}
function checkInput16()
{
  var valueInput = document.getElementById("num16").value;
  if(valueInput == "")
  {
    document.getElementById("btn16").classList.add("disabled");
    document.getElementById("btn16").classList.remove("btn-primary");
    document.getElementById("btn16").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn16").classList.remove("disabled");
    document.getElementById("btn16").classList.remove("btn-secondary");
    document.getElementById("btn16").classList.add("btn-primary");
  }
}
function checkInput17()
{
  var valueInput1 = document.getElementById("num17-1").value;
  var valueInput2 = document.getElementById("num17-2").value;
  if(valueInput1 == "" || valueInput2 == "")
  {
    document.getElementById("btn17").classList.add("disabled");
    document.getElementById("btn17").classList.remove("btn-primary");
    document.getElementById("btn17").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn17").classList.remove("disabled");
    document.getElementById("btn17").classList.remove("btn-secondary");
    document.getElementById("btn17").classList.add("btn-primary");
  }
}
function checkInput18()
{
  var valueInput = document.getElementById("num18").value;
  if(valueInput == "")
  {
    document.getElementById("btn18").classList.add("disabled");
    document.getElementById("btn18").classList.remove("btn-primary");
    document.getElementById("btn18").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn18").classList.remove("disabled");
    document.getElementById("btn18").classList.remove("btn-secondary");
    document.getElementById("btn18").classList.add("btn-primary");
  }
}
function checkInput19()
{
  var valueInput = document.getElementById("num19").value;
  if(valueInput == "")
  {
    document.getElementById("btn19").classList.add("disabled");
    document.getElementById("btn19").classList.remove("btn-primary");
    document.getElementById("btn19").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn19").classList.remove("disabled");
    document.getElementById("btn19").classList.remove("btn-secondary");
    document.getElementById("btn19").classList.add("btn-primary");
  }
}
function checkInput20()
{
  var valueInput1 = document.getElementById("num20-1").value;
  var valueInput2 = document.getElementById("num20-2").value;
  var valueInput3 = document.getElementById("num20-3").value;
  if( valueInput1 == "" || valueInput2 == "" || valueInput3 == "" )
  {
    document.getElementById("btn20").classList.add("disabled");
    document.getElementById("btn20").classList.remove("btn-primary");
    document.getElementById("btn20").classList.add("btn-secondary");
  }
  else
  {
    document.getElementById("btn20").classList.remove("disabled");
    document.getElementById("btn20").classList.remove("btn-secondary");
    document.getElementById("btn20").classList.add("btn-primary");
  }
  if( valueInput2 == "+" || valueInput2 == "-" || valueInput2 == "*" || valueInput2 == "/" || valueInput2 == "%" )
  {
    document.getElementById("hint").innerHTML = null;
  }
  else
  {
    document.getElementById("hint").innerHTML = " ==> Use only ( + , - , * , / , % )";
  }
}