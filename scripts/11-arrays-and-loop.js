/*
      const myArray = [10, 20, 30];
      // console.log(myArray[0]);

      myArray[0] = 99;
      // console.log(myArray[0]);

      const myNewArray = [1, 'hello', true, { name: 'socks'}, [1, 2]];
      
      // console.log(typeof[1, 2]);
      // console.log(Array.isArray([1, 2]));
      
      // console.log(myArray.length);
      
      myArray.push(100);
      
      // console.log(myArray);
      // console.log(myNewArray);

      myArray.splice(0, 1);
      console.log(myArray);
      */

      /*
      let i = 1;

      while (i <= 5) {
        console.log(i);
        i++;
      }

      for (let i = 1; i <= 5; i++) {
        console.log(i);
      }

      let randomNumber = 0;

      while (randomNumber < 0.5) {
        randomNumber = Math.random();
      }

      console.log(randomNumber);
      */

      // const todoList = [
      //   'make dinner',
      //   'wash dishes',
      //   'watch youtube'
      // ];

      // for (let i = 0 ; i < todoList.length; i++) {
      //   const value = todoList[i]
      //   console.log(value);
      // }

      /*
      const nums = [1, 1, 3];

      let total = 0;
      for (let i = 0 ; i < nums.length ; i++) {
        const num = nums [i];
        total += num;
      }
      console.log(total);

      const numsDoubled = [];
      for (let i = 0 ; i < nums.length ; i++) {
        const num = nums[i];
        numsDoubled.push(num * 2)
      }
      console.log(numsDoubled);
      */

      const array1 = [1, 2, 3];
      const array2 = array1.slice();
      array2.push(4);

      console.log(array1);
      console.log(array2);

      const [firstValue, secondValue] = [1, 2, 3];

      for (let i = 1 ; i <= 10 ; i++) {
        if (i % 3 === 0) {
          continue;
        }
        console.log(i);
        if (i === 8) {
          break;
        }
      }

      console.log('stop1');
      
      let i = 1;
      
      while (i <= 10) {
        if ( i % 3 === 0) {
          i++;
          continue;
        }
        console.log(i);
        i++;
      }
      
      // FUNKCJA PODWAJAJĄCA ZAWARTOŚĆ LISTY (zatrzymuje loop w momencie gdy na liście pojawia się 0)
      function doubleArray(nums) {

        const numsDoubled = [];
        for (let i = 0 ; i < nums.length ; i++) {
          const num = nums[i];
          if ( num === 0 ) {
            return numsDoubled;
          }
          numsDoubled.push(num * 2)
        }
        // console.log(numsDoubled);
        return numsDoubled;
      }
      console.log(doubleArray([2, 4, 0, 14, 5]));
      // EXAMPLES
      console.log('stop3');
      
      doubleArray([1, 1, 3]);
      
      console.log('stop4');
      
      doubleArray([2, 2, 5])
      
      console.log('stop5');

      doubleArray([2, 4, 6, 14, 5])




