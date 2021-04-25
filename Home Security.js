function key (check) {
    if (check === true) {
      return true;
    } else {
      return false;
    }
  };
 function person (check){
    if (check === 'mohammad') {
      return true;
    } else {
      return false;
    }
  };
 
  
  function security (keyVar,nameVar){
      if (key===true && person=== true){
          return "welcome";
      } else {
          return "You can't access";
      }    
  };
  security('key','mohammad');
  console.log(security3('key','mohammad'));
