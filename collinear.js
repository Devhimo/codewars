// DESCRIPTION:
// Theoretical Material
// You are given two vectors starting from the origin (x=0, y=0) with coordinates (x1,y1) and (x2,y2). Your task is to find out if these vectors are collinear. Collinear vectors are vectors that lie on the same straight line. They can be directed in the same or opposite directions. One vector can be obtained from another by multiplying it by a certain number. In terms of coordinates, vectors (x1, y1) and (x2, y2) are collinear if (x1, y1) = (k*x2, k*y2) , where k is any number acting as a coefficient.

function collinearity( x1,y1, x2,y2 ) {
  
  
    return x1*y2===y1*x2
  }

  function collinearity( x1,y1, x2,y2 ) {
    return x2*y1===y2*x1
  }

  function collinearity( x1,y1, x2,y2 ) {
    return x1 * y2 - x2 * y1 === 0;
  }

  function collinearity( x1,y1, x2,y2 ) {
    var result = x2/x1
    var newresult = y2/y1
   if (result === newresult) {
     return true
   }
   else if (y1 === 0 && y2 === 0) {
     return true
   }
     else if ( x1 === 0 && y1 === 0 && y2 === 0) {
     return true
   }
     else if (x1 === 0 && x2 === 0) {
     return true
   }
     else if (x1 === 0 && x2 === 0  && y1 === 0 && y2 === 0 ) {
       return true
     }
   else {
     return false
   }
   }