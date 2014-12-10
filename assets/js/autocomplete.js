function getAutocomplete() {
	
	if(Document.getElementById("search_autocomplete")) {
		Console.log("test");
		var autocomplete = Document.getElementById("search_autocomplete");
		autocomplete.innerHTML = '<option value="bears">';
	}
}