     

export const filtros = (data,condition)=>{
   
      return data.filter(elemento=> elemento.type.includes(condition))
     
  }
  








/*export const order = (arrayObj, orderBy) => {
    let sortObj = [];
    switch (orderBy) {
      case 'max-cp':
        sortObj = arrayObj.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
        break;
      case 'max-hp':
        sortObj = arrayObj.sort((a, b) => a.stats['max-hp'] - b.stats['max-hp']);
        break;
      case 'max-hpM':
            sortObj = arrayObj.sort((a, b) => b.stats['max-hp'] - a.stats['max-hp']);
            break;
      case 'num':
        sortObj = arrayObj.sort((a, b) => a.num - b.num);
        break;
      default:
    }
    return sortObj;
  };
*/
export const order=(data,sortBy)=>{
 
  if(sortBy=='num'){
    return data.sort((a,b)=>a[sortBy] -b[sortBy]);
  } else
  return data.sort((a,b)=>a.stats[sortBy] -b.stats[sortBy]);
  
  
}


export const changeOrder = array => array.reverse();

export const calculo = (count) =>{
  var porcentaje= ((count/ 251)*100);
  var enteroP =Math.round(porcentaje);
  return enteroP; 
}