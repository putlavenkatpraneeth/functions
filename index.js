function arr(x) {
  // console.log(x[0]+x[x.length-1])
  if (x > 0 && x % 2 == 0) {
    console.log("even number");
  } else if (x > 0 && x % 2 != 0) {
    console.log("odd number");
  } else {
    console.log("invalid number");
  }
}

arr(-6);
arr(2);




function input(x) {
  input1 = "";
  for (i = x.length - 1; i >= 0; i--) {
    input1 = input1 + x[i];
  }
  if (x == input1) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
}

input("dade");
input("dad");
input("mom");
input("pop");




function input(a, b, c) {
  if (a > b && a > c) {
    console.log(`${a}is greater`);
  } else if (b > a && b > c) {
    console.log(`${b}is greater`);
  } else {
    console.log(`${c}is greater`);
  }
}
input(4, 2, 3);
input(30, 20, 10);
