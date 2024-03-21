$(document).ready(function(){
	// Initialize variables
	var history = []; // Array to store history of states
	var historyIndex = -1; // Current state index
	 
	var droppedItems = [];
	var redoItems = [];


	// Function to save the current state
	function saveState() {
		var workAreaHtml = $("#work-area").html();
		history.splice(historyIndex + 1);
		history.push(workAreaHtml);
		historyIndex++;
	}
	 
	function undo() {
		var lastItem = $("#work-area").children().last().detach(); // Remove the last element from the work area
		droppedItems.push(lastItem); // Push the removed item to droppedItems array
		redoItems.push(lastItem.clone()); // Push a clone of the removed item to redoItems array
		// console.log(droppedItems);
		// console.log(redoItems);
	}
	 
	// Intercept user actions to save state
	$(document).on("click input blur", ".tool, .fool, .bin, .input-tool", function () {
		saveState();
	});
	 
	$("#undo-btn").click(function() {
		undo();
	});

	// Function to redo
	function redo() {
		if (redoItems.length > 0) { // Check if there are undone items to redo
			var lastItem = redoItems.pop(); // Remove the last undone item from redoItems array
			$("#work-area").append(lastItem); // Append the last undone item to the work area
			droppedItems.pop(); // Remove the last undone item from droppedItems array
			// console.log(droppedItems);
			// console.log(redoItems);
		}
	}
	// Redo button click event
	$("#redo-btn").click(function() {
		redo();
	});

	function exportWorkspace() {
		var workspaceContent = $("#work-area").html(); // Get workspace content
		
		// Create a Blob object containing the workspace content
		var blob = new Blob([workspaceContent], { type: "text/plain;charset=utf-8" });
		
		// Create a temporary anchor element
		var anchor = document.createElement("a");
		anchor.download = "workspace_content.txt"; // Set download filename
		
		// Create a URL for the Blob object and assign it to the anchor's href attribute
		anchor.href = window.URL.createObjectURL(blob);
		
		// Append the anchor element to the document body
		document.body.appendChild(anchor);
		
		// Click the anchor element to trigger download
		anchor.click();
		
		// Remove the anchor element from the document body
		document.body.removeChild(anchor);
	}

	// Export button click event
	$("#export-btn").click(function() {
		exportWorkspace();
	});


});