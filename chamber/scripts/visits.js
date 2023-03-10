const today = new Date();
const daysSince = localStorage.getItem('daysSince');
// Display a different message based upon 1st visit or a returning visit
if (daysSince) {
  	const diffTime = today.getTime() - new Date(daysSince).getTime();
	const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  	if (diffDays < 1 ){
  			document.getElementById("daysSince").innerText = `Welcome to our Discover page!`;
  			} else{
    			document.getElementById("daysSince").innerText = `Your last visit to this page: ${diffDays} days ago`;
      		} 
	} 
	else{
		document.getElementById("daysSince").innerText = 'First visit to PT Discovery page!'
	}
localStorage.setItem('daysSince', today);
