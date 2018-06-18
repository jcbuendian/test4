 
 
 /**
  * Esta funcion retorna la matriz bidemencional que se va a rotar 
  * @param {recibe cuantas filas se require el arreglo} rows 
  * @param {recibe el numero de columnas que se require} colums 
  */
 const newMatriz = ( rows, colums) => {

  let arr = [];

  for(let i=0; i < rows; i++){

      arr.push([]);
      arr[i].push( new Array(colums));

      for(let j=0; j < colums; j++){
          arr[i][j] = i;
      }
  }

return arr;

}

   /*
    * tamaño de la matriz  
    * invocacion --------> newMatriz(x,y)
   */
 let matrix =  newMatriz( 10,10);
   
  //cordenandas del dato que se quiere recuperar 
   const x = 5;
   const y = 3;
   /**
    * 
    * @param {se envia la matrioz de rotacion} matrix 
    */
  const flipMatrix = matrix => (
    matrix[0].map((column, index) => (
      matrix.map(row => row[index])
    ))
  );
  
  const rotateMatrix = matrix => (
    flipMatrix(matrix.reverse())
  );
  
  const rotateMatrixCounterClockwise = matrix => (
    flipMatrix(matrix).reverse()
  );
  
  const flipMatrixCounterClockwise = matrix => (
    rotateMatrix(matrix).reverse()
  );
  

  const arraygiro = [1,2,3,-4,-5,-6,7,-8,-9];
  let arrayResult = matrix;
  
  for(let a in arraygiro){

    console.log('----------original ---------')
    console.log(arrayResult)

      if ( arraygiro[a] < 0){
          arrayResult = rotateMatrixCounterClockwise(arrayResult);
         console.log('----------giro izquierdo ---------')
         console.log(arrayResult);
      }else{
          arrayResult =  flipMatrixCounterClockwise(arrayResult);
          console.log('----------giro derecho ---------');
          console.log(arrayResult);
      }
  
 }   
   
  console.log(`posicion del numero solicitado ${arrayResult[x][y]}`);
 