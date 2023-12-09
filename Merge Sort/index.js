



//merge Sort
array = [0,3,1,2,6,8,1,4,6]

function mergeSort(array) {
    if (array.length == 1) {
        console.log(array)
       return array;
    }
    else {
       let leftArray = array.slice(0, array.length / 2)
       let rightArray = array.slice(array.length / 2);
       

       let sortedLeft = mergeSort(leftArray);
       let sortedRight = mergeSort(rightArray);
        
       
       mergedArray = merge(sortedLeft, sortedRight)

       return mergedArray
       // console.log(array.slice(0, array.length / 2))
      //  console.log(array.slice(array.length / 2))
    }

    
}



function merge(left, right) {
   result = []
   console.log(`left: ${left}`)
   console.log(`right: ${right}`)

   let iLeft = 0
   let iRight = 0

   while (iLeft < left.length && iRight < right.length) {
    if (left[iLeft] > right[iRight]) {
        result.push(right[iRight])
        iRight++
    }
    else {
        result.push(left[iLeft])
        iLeft++
    }
   }

   while (iLeft < left.length) {
    result.push(left[iLeft]);
    iLeft++;
}

while (iRight < right.length) {
    result.push(right[iRight]);
    iRight++;
}

   return result
  }


  console.log(mergeSort(array))