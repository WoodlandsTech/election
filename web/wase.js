/**
 * 
 */
function getParams() {
	const params = new URLSearchParams(document.location.search);
	first = params.get("fname");
	last = params.get("lname");
	namesz.innerHTML = first + " " + last;
	names.innerHTML = "Rudyard Merriam";
}

type_values = new Map([ //
	["A", "Voted Absentee by Mail"], //
	["E", "Voted Early In-Person"], //
	["L", "Voted Early Limited Ballot In-Person"], //
	["E1", "Late, Death in Family"], //
	["E3", "Late, Disabled Representative"]])


