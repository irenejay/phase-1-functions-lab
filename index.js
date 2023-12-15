function distanceFromHqInBlocks(location) {
    // Assuming headquarters is at location 42
    return Math.abs(location - 42);
  }




  
function distanceFromHqInFeet(location) {
  const hqLocation = 42;
  
  const feetPerBlock = 264;

  const distanceInBlocks = Math.abs(location - hqLocation);
  const distanceInFeet = distanceInBlocks * feetPerBlock;

  return distanceInFeet;
}

function distanceTravelledInFeet(startLocation, endLocation) {

  const feetPerBlock = 264;


  const distanceInBlocks = Math.abs(endLocation - startLocation);

  const distanceInFeet = distanceInBlocks * feetPerBlock;

  return distanceInFeet;
}


// A hypothetical function to calculate the fare price
function calculatesFarePrice(start, destination) {
  
  const freeSampleDistanceThreshold = 1; 

  const distanceInBlocks = Math.abs(destination - start);

  if (distanceInBlocks <= freeSampleDistanceThreshold) {
    return 0; 
  } else {
    const fare = distanceInBlocks * 2;
    return fare;
  }
}




function calculatesFarePrice(start, destination) {
  
  const freeSampleDistanceThreshold = 1; 
  const centsPerFoot = 0.02;

  const distanceInBlocks = Math.abs(destination - start);


  if (distanceInBlocks <= freeSampleDistanceThreshold) {
    return 0; 
  } else {
    const totalDistanceInFeet = distanceInBlocks * 264; 


    if (totalDistanceInFeet <= 400) {
      return 0;
    } else if (totalDistanceInFeet <= 2000) {
    
      const fare = (totalDistanceInFeet - 400) * centsPerFoot;
      return fare;
    } else {
      const flatFee = 40;
      return flatFee;
    }
  }
}

// A hypothetical function to calculate the fare price
function calculatesFarePrice(start, destination) {
  const freeSampleDistanceThreshold = 1; 
  const centsPerFoot = 0.02; 
  const maxAllowedDistance = 2500; 
  const flatFeeOver2000Feet = 25; 

  
  const distanceInBlocks = Math.abs(destination - start);

  
  if (distanceInBlocks <= freeSampleDistanceThreshold) {
    return 0; 
  } else {
    
    const totalDistanceInFeet = distanceInBlocks * 264; 


    if (totalDistanceInFeet > maxAllowedDistance) {
      return 'cannot travel that far';
    } else if (totalDistanceInFeet <= 400) {
      return 0;
    } else if (totalDistanceInFeet <= 2000) {
      
      const fare = (totalDistanceInFeet - 400) * centsPerFoot;
      return fare;
    } else {
      
      return flatFeeOver2000Feet;
    }
  }
}