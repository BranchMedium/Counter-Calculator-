let number = function() {
    let newArray = [];
    function numValues() {
        var num1 = Math.random() * 10000;
        var num2 = Math.random() * -10000;
        var option = Math.random();
        var flooredNum1 = Math.floor(num1);
        var flooredNum2 = Math.floor(num2);
        if (0.1 <= option <= 0.5) {
            return (flooredNum1 == 0? flooredNum1 + 500: flooredNum1);
        }
        else if(0.5 < option <= 1) {
            return (flooredNum2 == 0? flooredNum2 + 500: flooredNum2);
        }
    }
    for(let i =1; i <= 1000; i++) {
        if (i < 1000) {
          newArray.push(numValues());
        }
    }
    return newArray;
}

var findMaxK = function(nums) {
    nums.forEach((item, index, arr) => {
        for(let i = index + 1; i < arr.length; i++) {
            if (item > arr[i]) {
                return 
            }
        }
        for(let m = index -1; m >= 0; m--) {
            if (item > arr[m]) {
                return 
            }
        }
    })
}