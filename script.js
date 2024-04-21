function appendToResult(value) {
    document.getElementById("result").value += value;
  }

 

  function clearAll() {
    document.getElementById("result").value = " ";
  }

  function calculate() {
    let ex = document.getElementById("result").value;

    try {
      let result = eval(ex);
      document.getElementById("result").value = result;
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }

  function clearLast() {
    let curValue = document.getElementById("result").value;
    document.getElementById('result').value= curValue.slice(0 ,  -1);


 }

