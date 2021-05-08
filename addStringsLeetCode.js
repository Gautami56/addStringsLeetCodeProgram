var addStrings = function(num1, num2) {
    let res = "";
    let carry = 0;
            let p1 = num1.length - 1;
            let p2 = num2.length - 1;
            while (p1 >= 0 || p2 >= 0) {
                let x1 = p1 >= 0 ? num1.charAt(p1) - `0` : 0;
                let  x2 = p2 >= 0 ? num2.charAt(p2) - `0` : 0;
                let value = Math.trunc((x1 + x2 + carry) % 10);
                carry = Math.trunc((x1 + x2 + carry) / 10);
                res= `${res}${value}`;
                p1--;
                p2--;    
            }
            
            if (carry != 0){
                res = `${res}${carry}`;
            }
            return res.split("").reverse().join("") 
     }
     console.log(addStrings('22', '33'))
