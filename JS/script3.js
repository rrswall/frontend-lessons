function askQuestion(question, a, b, c, d, correct) {
    const cavab = prompt(`${question}
    1. ${a}
    2. ${b}
    3. ${c}
    4. ${d}`);
    return cavab === correct;
  }
  
  const n1 = askQuestion("Hansı rəng tarixən nadir və bahalı olduğuna görə dünyadakı milli bayraqlarda ən az istifadə olunur?", "çəhrayı", "bənövşəyi", "bej", "qəhvəyi", "2");
  const n2 = askQuestion("Hər il ən çox insan ölümünə səbəb olan heyvan hansıdır?", "ayı", "arı", "ağcaqanad", "şir", "3");
  const n3 = askQuestion("Harry Potter film seriyası neçə Oskar mükafatı qazanıb?", "7", "3", "0", "10", "3");
  const n4 = askQuestion("Insanin en boyuk daxili organi hansidir?", "urek", "ag ciyer", "qara ciyer", "boyrek", "3");
  
  if (n1 && n2 && n3) {
    alert("Siz qalib gəldiniz!!!!!");
  } else {
    alert("Siz məğlub oldunuz :(((");
  }